import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Image, ImageBackground, StatusBar, useColorScheme } from 'react-native'
import React from 'react';
import { signOut } from '../../utils/Auth';
import { useEffect, useState } from 'react';
import { Svg, Circle } from 'react-native-svg';
import { FlatList } from 'react-native-gesture-handler';
import { PieChart } from 'react-native-chart-kit';
import { getUserById, getRankById } from '../../utils/Database';
import { useSound } from '../soundContext/SoundContext';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Setting = ({ route }) => {
    const [correctAnswersTextGuess, setCorrectAnswersTextGuess] = useState(0);
    const [incorrectAnswersTextGuess, setIncorrectAnswersTextGuess] = useState(0);
    const [correctAnswersPicGuess, setCorrectAnswersPicGuess] = useState(0);
    const [incorrectAnswersPicGuess, setIncorrectAnswersPicGuess] = useState(0);
    const [textGuessRanking, setTextGuessRanking] = useState(0);
    const [picGuessRanking, setPicGuessRanking] = useState(0);
    const [textGuessScore, setTextGuessScore] = useState(0);
    const [picGuessScore, setPicGuessScore] = useState(0);
    const { isSoundOn, setIsSoundOn } = useSound();
    const colorScheme = useColorScheme();
    const { currentUser } = route.params;
    const containerBackgroundColor = colorScheme === 'dark' ? '##F8F8F8' : '#F8F8F8';
    const [selectedOption, setSelectedOption] = useState(route.params.option);
    useEffect(() => {
        console.log('Color scheme:', colorScheme);
    }, [])
    const handleGuessImage = () => {
        setSelectedOption('achievements');
    };

    const handleGuessWord = () => {
        setSelectedOption('chart');
    };

    const handleOtherOption = () => {
        setSelectedOption('setting');
    };
    const getScoreAndRank = async () => {
        try {
            const user = await getUserById(currentUser.uid);
            //PicGuess
            const correctAnswerPicGuess = user.data().picGuess.correctAnswer;
            setCorrectAnswersPicGuess(correctAnswerPicGuess);

            const incorrectAnswerPicGuess = user.data().picGuess.incorrectAnswer;
            setIncorrectAnswersPicGuess(incorrectAnswerPicGuess);

            //TextGuess
            const correctAnswerTextGuess = user.data().textGuess.correctAnswer;
            setCorrectAnswersTextGuess(correctAnswerTextGuess);

            const incorrectAnswerTextGuess = user.data().textGuess.incorrectAnswer;
            setIncorrectAnswersTextGuess(incorrectAnswerTextGuess);

            //Score and rank
            const scoreTextGuess = user.data().textGuess.total;
            setTextGuessScore(scoreTextGuess);

            const scorePicGuess = user.data().picGuess.total;
            setPicGuessScore(scorePicGuess);

            const userRank = await getRankById(currentUser.uid);
            const rankTextGuess = userRank.data().textGuess.rank;
            setTextGuessRanking(rankTextGuess);
            const rankPicGuess = userRank.data().picGuess.rank;
            setPicGuessRanking(rankPicGuess);

        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
    useEffect(() => {
        getScoreAndRank();
    },);
    const ChartComponentPicGuess = () => {
        const totalQuestions = correctAnswersPicGuess + incorrectAnswersPicGuess; // Tổng số câu hỏi

        const calculatePercentage = (value, totalQuestions) => {
            return (value / totalQuestions) * 100;
        };
        let correctPercentage = 0;
        let incorrectPercentage = 0;
        if (incorrectAnswersPicGuess === 0) {
            correctPercentage = 100;
        } else {
            correctPercentage = calculatePercentage(correctAnswersPicGuess, totalQuestions);
            incorrectPercentage = calculatePercentage(incorrectAnswersPicGuess, totalQuestions);
        }

        const data = [
            {
                name: 'Đúng',
                score: correctPercentage,
                color: '#00CC99',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'Sai',
                score: incorrectPercentage,
                color: '#FF4444',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
        ];

        const chartConfig = {
            backgroundColor: '#F8F8F8',
            backgroundGradientFrom: '#F8F8F8',
            backgroundGradientTo: '#F8F8F8',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        };

        return (
            <View style={{ alignItems: 'center', backgroundColor: '#FAFAFA' }}>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '500', color: '#363062' }}>Nhìn Quốc Kỳ Đoán Tên Quốc Gia</Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PieChart
                        data={data}
                        width={300}
                        height={200}
                        chartConfig={chartConfig}
                        accessor="score"
                        backgroundColor="#FAFAFA"
                        paddingLeft="15"
                    />
                    <Svg height="200" width="200" style={{ position: 'absolute' }}>
                        <Circle cx="40" cy="100" r="40" fill="white" />
                    </Svg>
                </View>
            </View>
        );
    };

    const ChartComponentTextGuess = () => {
        const totalQuestions = correctAnswersTextGuess + incorrectAnswersTextGuess; // Tổng số câu hỏi
        let correctPercentage = 0;
        let incorrectPercentage = 0;
        const calculatePercentage = (value, totalQuestions) => {
            const percentage = (value / totalQuestions) * 100;
            console.log('Percentage:', percentage);
            return Math.min(percentage, 100); // Giữ nguyên giá trị phần trăm nếu giá trị vượt quá 100%
        };
        if (incorrectAnswersTextGuess === 0) {
            correctPercentage = 100;
        } else {
            correctPercentage = calculatePercentage(correctAnswersTextGuess, totalQuestions);
            incorrectPercentage = calculatePercentage(incorrectAnswersTextGuess, totalQuestions);
        }
        const data = [
            {
                name: 'Đúng',
                score: correctPercentage,
                color: '#00CC99',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
            {
                name: 'Sai',
                score: incorrectPercentage,
                color: '#FF4444',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
            },
        ];

        const chartConfig = {
            backgroundColor: '#F8F8F8',
            backgroundGradientFrom: '#F8F8F8',
            backgroundGradientTo: '#F8F8F8',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        };

        return (
            <View style={{ alignItems: 'center', backgroundColor: '#FAFAFA' }}>
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: '500', color: '#363062' }}>Nhìn Tên Quốc Gia Đoán Quốc Kỳ</Text>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <PieChart
                        data={data}
                        width={300}
                        height={200}
                        chartConfig={chartConfig}
                        accessor="score"
                        backgroundColor="#FAFAFA"
                        paddingLeft="15"
                    />
                    <Svg height="200" width="200" style={{ position: 'absolute' }}>
                        <Circle cx="40" cy="100" r="40" fill="white" />
                    </Svg>
                </View>

            </View>
        );
    };
    const achievementsUser = () => {
        return (
            <View style={styles.score}>
                <View style={styles.cardScore}>
                    <Text style={styles.textScore}>Nhìn Quốc Kỳ Đoán Tên Quốc Gia</Text>
                    <View style={styles.scoreContent}>
                        <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12822/12822850.png' }} />
                        <View style={{ position: 'absolute', left: 60, display: 'flex', gap: 30, flexDirection: 'row', top: '45%' }}>
                            <Text style={styles.scoreText}>Điểm cao nhất: {picGuessScore}</Text>
                            <Text style={styles.scoreText}>Hạng: {picGuessRanking}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardScore}>
                    <Text style={styles.textScore}>Nhìn Tên Quốc Gia Đoán Quốc Kỳ</Text>
                    <View style={styles.scoreContent}>
                        <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/12822/12822850.png' }} />
                        <View style={{ position: 'absolute', left: 60, display: 'flex', gap: 30, flexDirection: 'row', top: '45%' }}>
                            <Text style={styles.scoreText}>Điểm cao nhất: {textGuessScore}</Text>
                            <Text style={styles.scoreText}>Hạng: {textGuessRanking}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const toggleSwitch = () => {
        setIsSoundOn(!isSoundOn);
    }
    const setting = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', display: 'flex', flexDirection: 'row', width: "80%", height: '20%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#363062' }}>Âm thanh</Text>
                    <TouchableOpacity
                        style={[
                            styles.outer,
                            isSoundOn
                                ? { alignItems: 'flex-end', backgroundColor: 'green' }
                                : { alignItems: 'flex-start', backgroundColor: '#E5E5E5' },
                        ]}
                        activeOpacity={1}
                        onPress={toggleSwitch}
                    >
                        {isSoundOn ? (
                            <>
                                <Text style={[styles.toggleText, styles.leftText, { fontSize: 16 }]}>ON</Text>
                                <View style={styles.inner}></View>
                                <Text style={[styles.toggleText, styles.rightText, { fontSize: 5 }]}>OFF</Text>
                            </>
                        ) : (
                            <>
                                <Text style={[styles.toggleText, styles.leftText, { fontSize: 5 }]}>ON</Text>
                                <View style={styles.inner}></View>
                                <Text style={[styles.toggleText, styles.rightText, { fontSize: 16 }]}>OFF</Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:40}}>
                    <TouchableOpacity onPress={() => signOut()} style={{backgroundColor:'#6A39A9',padding:10,borderRadius:10}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#F1F2FF'}}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    const renderSelectedOption = () => {
        switch (selectedOption) {
            case 'achievements':
                return achievementsUser(); // Render dữ liệu của thành tích
            case 'chart':
                return (
                    <View>
                        {ChartComponentPicGuess()}
                        {ChartComponentTextGuess()}
                    </View>
                )
            case 'setting':
                // Thêm mã để render trang cài đặt nếu có
                return setting(); // Ví dụ render trang cài đặt
            default:
                return null; // Nếu không khớp với bất kỳ trường hợp nào, render null
        }
    };
    return (
        <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
            <StatusBar
                translucent={true}
                backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
                <ImageBackground style={styles.imageBackground} source={{ uri: 'https://w.wallhaven.cc/full/kx/wallhaven-kxj3l1.jpg' }}>
                </ImageBackground>
                <View style={styles.avatar}>
                    <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 90, height: 90, borderRadius: 50 }} source={{ uri: currentUser.photoURL }} />
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginBottom: 10, color: '#363062' }}>{currentUser.displayName}</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity
                    style={[
                        styles.menuItem,
                        { position: 'relative' },
                    ]}
                    onPress={handleGuessImage}
                >
                    <Text style={[styles.menuText, selectedOption !== 'achievements' && styles.inactiveMenuText]}>Thành tích</Text>
                    <View style={[styles.selectedMenuBorder, selectedOption === 'achievements' ? styles.selectedMenuActive : styles.selectedMenuInactive]} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.menuItem,
                        { position: 'relative' },
                    ]}
                    onPress={handleGuessWord}
                >
                    <Text style={[styles.menuText, selectedOption !== 'chart' && styles.inactiveMenuText]}>Thống kê</Text>
                    <View style={[styles.selectedMenuBorder, selectedOption === 'chart' ? styles.selectedMenuActive : styles.selectedMenuInactive]} />
                </TouchableOpacity>
                {/* Thêm phần tử menu mới */}
                <TouchableOpacity
                    style={[
                        styles.menuItem,
                        { position: 'relative' },
                    ]}
                    onPress={handleOtherOption} // Thay 'handleOtherOption' bằng hàm xử lý cho thành tích mới
                >
                    <Text style={[styles.menuText, selectedOption !== 'setting' && styles.inactiveMenuText]}>Cài đặt</Text>
                    <View style={[styles.selectedMenuBorder, selectedOption === 'setting' ? styles.selectedMenuActive : styles.selectedMenuInactive]} />
                </TouchableOpacity>
            </View>
            {/* {achievementsUser()} */}
            {renderSelectedOption()}
        </View>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,

        flex: 1,
    },
    header: {
        width: width,
        height: '30%',
    },
    imageBackground: {
        width: width,
        height: '85%',
    },
    avatar: {
        left: '10%',
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: '95%',
        borderRadius: 20,
        position: 'absolute',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 10,
        marginTop: '5%',
    },
    selectedMenuInactive: {
        borderBottomColor: '#E5D4FF', // Màu nhạt khi không được chọn
    },
    selectedMenuActive: {
        borderBottomColor: '#6A39A9',
        borderRadius: 2, // Màu đậm khi được chọn
    },
    menuItem: {
        alignItems: 'center',
        width: width / 3,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    selectedMenuBorder: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 4, // Độ dày của đường gạch dưới
        borderBottomColor: '#F1F2FF', // Màu của đường gạch dưới
    },
    inactiveMenuText: {
        color: '#999999', // Màu chữ nhạt khi không được chọn
    },
    menuText: {
        color: '#363062',
        fontWeight: '500',
        fontSize: 18,
    },
    score: {

        display: 'flex',
        alignItems: 'center',
        width: width,
        marginTop: '5%',
        height: '70%',

        // backgroundColor: 'aqua',
    },
    cardScore: {
        backgroundColor: '#DEDAE9',
        marginTop: 20,
        padding: 10,
        width: '90%',
        borderRadius: 10,

    },
    textScore: {
        fontSize: 16,
        fontWeight: '800',
        marginBottom: 10,
        borderBottomWidth: 1,
        color: '#363062',
        borderBottomColor: '#E5D4FF',
    },
    scoreContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10, // Khoảng cách giữa ảnh và nội dung văn bản
    },
    scoreText: {
        color: '#363062',
        fontSize: 18,
        fontWeight: 'bold',
    },
    outer: {
        width: 65,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    inner: {
        width: 26,
        height: 26,
        borderRadius: 12.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        elevation: 8,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    toggleText: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white', // Màu chữ khi hiển thị trên toggle
    },
    leftText: {
        left: 8, // Điều chỉnh vị trí chữ "Off"
    },
    rightText: {
        right: 5, // Điều chỉnh vị trí chữ "On"
        fontSize: 15,
    },
})