import { TouchableOpacity, Text, Image, View, Button, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { getQuizzes_2 } from '../../utils/Database';
import { useState, useEffect } from 'react';
const PlayModeWord = ({ navigation, route }) => {
    const [currentUser, setCurrentUser] = useState(route.params.currentUser);
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const findQuizIdByMode = (quizzes, mode) => {
        const quiz = quizzes.find(quiz => quiz.mode === mode);
        return quiz ? quiz.id : null;
    };
    useEffect(() => {
        const easyQuizId = findQuizIdByMode(allQuizzes, 'hard');
        // console.log("ID của bài kiểm tra chế độ dễ:", allQuizzes);
    }, [allQuizzes]);
    const getAllQuizzes = async () => {
        setRefreshing(true);
        const quizzes = await getQuizzes_2();
        // Transform quiz data
        let tempQuizzes = [];
        await quizzes.docs.forEach(async quiz => {
            await tempQuizzes.push({ id: quiz.id, ...quiz.data() });
        });
        await setAllQuizzes([...tempQuizzes]);
        setRefreshing(false);
    };
    useEffect(() => {
        // console.log("allQuizzes đã được cập nhật:", allQuizzes);
        getAllQuizzes();
        // console.log("allQuizzes đã được cập nhật:", allQuizzes);
    });
    //   useEffect(() => {
    //     console.log("allQuizzes đã được cập nhật:", allQuizzes);
    //     if (allQuizzes.length > 0) {
    //       const easyQuizId = allQuizzes.find(quiz => quiz.title === 'Chế độ dễ')?.id;
    //     //   console.log("ID của bài kiểm tra chế độ dễ:", easyQuizId);
    //     }
    //   }, [allQuizzes]);
    return (
        <View style={style.body}>
            <View style={style.top}>
                <View>
                    <ImageBackground source={require('../../../assets/imagebackground.png')} style={style.imagebackground}>
                        <TouchableOpacity onPress={() => navigation.navigate('QuestionMode', { currentUser: currentUser })}><Image style={style.imgback} source={require('../../../assets/back.png')} /></TouchableOpacity>
                        <Image style={style.imageaccount} source={{ uri: 'https://i.imgur.com/IXBn9LR.png' }} />
                    </ImageBackground>
                </View>
            </View>
            <View style={style.mode}>
                <TouchableOpacity style={style.easybtn} onPress={() => navigation.navigate('EasyModeFlag', { quizId: allQuizzes.find(quiz => quiz.mode === 'easy')?.id, currentUser: currentUser })}>
                    <Text style={[style.text, { position: 'absolute', marginLeft: '15%' }]}>DỄ</Text>
                    <Image style={style.easy} source={require('../../../assets/easyicon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={style.mediumbtn} onPress={() => navigation.navigate('MediumModeFlag', { quizId: allQuizzes.find(quiz => quiz.mode === 'medium')?.id, currentUser: currentUser })}>
                    <Text style={style.text}>TRUNG BÌNH</Text>
                    <Image style={style.medium} source={require('../../../assets/mediumicon.png')} />
                </TouchableOpacity>
                {/* ()=>navigation.navigate('HardMode', { quizId: allQuizzes.find(quiz => quiz.mode === 'hard').id }) */}
                <TouchableOpacity style={style.hardbtn} onPress={() => {
                    if (refreshing) {
                        navigation.navigate('HardModeFlag', { quizId: allQuizzes.find(quiz => quiz.mode === 'hard')?.id, currentUser: currentUser });
                    }
                }}>
                    <Text style={[style.text, { position: 'absolute', marginLeft: '15%' }]}>KHÓ</Text>
                    <Image style={style.hard} source={require('../../../assets/hardicon.png')} />
                </TouchableOpacity>
                {/* <Image style={style.imgbottom} source={require('../../../assets/imgbottom.png')} /> */}

            </View>

        </View>
    )
}

export default PlayModeWord
const style = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    top: {
        width: '100%',
        height: '50%',
    },

    imagebackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    nametext: {
        fontSize: 50,
        bottom: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    imageaccount: {
        width: '55%',
        height: '45%',
        justifyContent: 'center',
        bottom: 20,
    },

    imgback: {
        width: 35,
        height: 35,
        position: 'absolute',
        bottom: 35,
        right: '35%',
    },

    easy: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        right: 10,
    },

    medium: {
        width: '25%',
        height: '100%',
    },

    hard: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        right: 10,
    },

    mode: {
        display: 'flex',
        width: '90%',
        height: '50%',
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
        bottom: '8%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    easybtn: {
        flexDirection: 'row',
        width: '70%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        borderRadius: 10,
    },

    mediumbtn: {
        flexDirection: 'row',
        width: '70%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        borderRadius: 10,

    },

    hardbtn: {
        flexDirection: 'row',
        width: '70%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        borderRadius: 10,
    },

    text: {
        fontSize: 25,
        color: '#6A39A9',
        fontWeight: "900",
        // fontFamily:'Roboto',
    }
});
