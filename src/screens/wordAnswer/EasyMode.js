import { StyleSheet, Text, View, Image, TouchableOpacity, Easing, Dimensions, Animated, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
width = Dimensions.get('screen').width;
height = Dimensions.get('screen').height;
import { getQuizById, getQuestionsByQuizId, updateScore, getUserById,updateAnswer } from '../../utils/Database';
import LottieView from "lottie-react-native";
import { useSound } from '../soundContext/SoundContext';
import SoundPlayer from 'react-native-sound-player';
import { SoundProvider } from '../soundContext/SoundContext';
const EasyMode = ({ navigation, route }) => {
    //Âm thanh
    const { isSoundOn } = useSound();
    const [currentUser, setCurrentUser] = useState(route.params.currentUser);
    const [currentQuizId, setCurrentQuizId] = useState(route.params.quizId);
    const { resetState } = route.params || {};

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrenQuestions] = useState(0);

    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [currenIndex, setCurrentIndex] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [selecWrongAnswers, setSelectWrongAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [time, setTime] = useState(5);
    const [heartCount, setHeartCount] = useState(3);

    const shuffleArray = async array => {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate random number
            let j = Math.floor(Math.random() * (i + 1));

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const getQuizAndQuestions = async () => {
        try {
            // Lấy dữ liệu quiz
            const questions = await getQuestionsByQuizId(currentQuizId);
            const allQuestions = questions.docs.map(doc => doc.data());
            // Random thứ tự câu hỏi
            const shuffledQuestions = await shuffleArray(allQuestions);
            const selectedQuestions = shuffledQuestions.slice(0, 10);

            let formattedQuestions = [];
            for (let i = 0; i < selectedQuestions.length; i++) {
                const question = selectedQuestions[i];
                // Lựa chọn ngẫu nhiên 10 câu hỏi
                if (
                    question &&
                    question.incorrect_answers &&
                    question.correct_answer
                ) {
                    question.allOptions = await shuffleArray([
                        ...question.incorrect_answers,
                        question.correct_answer,
                    ]);
                    formattedQuestions.push(question);
                } else {
                    console.log(`Question at index ${i} is invalid.`);

                }
            }
            if (formattedQuestions.length === 10) {
                await setQuestions(formattedQuestions);
            }
        } catch (error) {
            console.log("Error in getQuizAndQuestions:", error);
        }
    };
    useEffect(() => {
        getQuizAndQuestions();
    }, [currentQuizId]);


    //Update Incorrect Answer and Correct Answer
    const updateIncorrectAnswer = async () => {
        try {
            let user = (await getUserById(currentUser.uid)).data();
            await updateAnswer(currentUser.uid, {
                ...user,
                picGuess: {
                    ...user.picGuess,
                    correctAnswer: user.picGuess.correctAnswer += correctCount,
                    incorrectAnswer: user.picGuess.incorrectAnswer += incorrectCount,
                }
            });
        } catch (error) {
            console.log('Error in updateIncorrectAnswer:', error);
        }

    }
    useEffect(() => {
        console.log('incorrectCount', incorrectCount);
    }, [incorrectCount]);
    // Update ScoreBoard
    const updateScoreBoard = async () => {
        let user = (await getUserById(currentUser.uid)).data();
        console.log('user', user);
        if (correctCount >= user.picGuess.easy) {
            await updateScore(currentUser.uid,
                {
                    ...user,
                    picGuess: {
                        ...user.picGuess,
                        easy: correctCount,
                        total: user.picGuess.total += correctCount,
                        correctAnswer: user.picGuess.correctAnswer += correctCount,
                        incorrectAnswer: user.picGuess.incorrectAnswer += incorrectCount,
                    }
                })

        }
    }
    // Loading screen
    const renderLoading = () => {
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <LottieView
                    style={{ width: 200, height: 200, position: 'absolute' }}
                    source={require('../../../assets/animations/Animation - 1700490098924.json')}
                    autoPlay
                    loop={true}

                />
            </View>
        );
    }
    useEffect(() => {
        // Kiểm tra khi dữ liệu questions đã được tải xong
        if (questions.length > 0) {
            setLoading(false); // Tắt trạng thái loading
        }
    }, [questions]);

    useEffect(() => {
        if (showScore) {
            updateIncorrectAnswer(correctCount, incorrectCount);
            updateScoreBoard(correctCount);
            navigation.navigate('Result', { score: correctCount, mode: 'EasyMode', playMode: true });
        }
    }, [showScore]);
    useEffect(() => {
        if (resetState) {
            getQuizAndQuestions();
            setCurrenQuestions(0);
            setSelectedAnswer(null);
            setSelectWrongAnswers([]);
            setCorrectCount(0);
            setIncorrectCount(0);
            setScore(0);
            setShowScore(false);
            setTime(5);
            setHeartCount(3);
            setProgress(new Animated.Value(0));
            Animated.timing(progress, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }).start();
            navigation.setParams({ mode: '', resetState: false });
        }
    }, [resetState]);
    // Sound
    const soud = () => {
        if (isSoundOn) {
            try {
                SoundPlayer.playSoundFile('incorrect', 'mp3');
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
        }
    }
    const soundCorrect = () => {
        if (isSoundOn) {
            try {
                SoundPlayer.playSoundFile('correct', 'mp3');
            } catch (e) {
                console.log(`cannot play the sound file`, e);
            }
        }
    }
    const handleAnswer = (item) => {
        if (selectedAnswer === null || selectedAnswer !== item) {
            setSelectWrongAnswers((prevAnswers) => [...prevAnswers, item]);
            setSelectedAnswer(item);
            const answer = questions[currentQuestion]?.correct_answer;
            if (answer === item) {
                preloadImagesForNextQuestion();
                const nextQuestion = currentQuestion + 1;
                setCorrectCount(correctCount + 1);
                setTimeout(() => {
                    if (nextQuestion < questions.length) {
                        setCurrenQuestions(nextQuestion);
                        setSelectedAnswer(null);
                        setSelectWrongAnswers([]);
                        soundCorrect();
                        const updatedProgress = (nextQuestion + 1) / questions.length * 100;
                        Animated.timing(progress, {
                            toValue: updatedProgress,
                            duration: 1000,
                            tension: 20, // Điều chỉnh giá trị này để thay đổi độ cứng của animation
                            friction: 2, // Điều chỉnh giá trị này để thay đổi độ ma sát
                            easing: Easing.linear,
                            useNativeDriver: false
                        }).start();
                    } else {
                        setShowScore(true);
                    }
                }, 100);
            } else {
                if (!selecWrongAnswers.includes(item)) {
                    setSelectWrongAnswers((prevAnswers) => {
                        const newAnswers = [...prevAnswers, item];
                        return newAnswers;
                    });
                    soud();
                    setIncorrectCount(incorrectCount + 1);
                    setHeartCount((prevHeartCount) => prevHeartCount - 1);
                    if (heartCount === 1) {
                        setShowScore(true);
                        navigation.navigate('Result', { mode: 'EasyMode', score: correctCount, playMode: true });
                    }
                }
            }
        }
    };
    useEffect(() => {
        console.log('heartCount', heartCount, 'Type:', typeof (heartCount));
    }), [heartCount];
    const [progress, setProgress] = useState(new Animated.Value(0));

    const renderProgressBar = () => {
        const updatedProgress = ((currentQuestion + 1) / questions.length) * 100; // Tính giá trị mới cho progress
        const progressAnim = progress.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', `${updatedProgress}%`]
        });
        return (
            <View style={{
                bottom: '14%',
                width: '100%',
                height: 20,
                borderRadius: 5,
                backgroundColor: '#A386C7',

            }}>
                <Animated.View style={[{
                    position: 'absolute',
                    left: 0,
                    height: 20,
                    borderRadius: 5,
                    backgroundColor: '#6A39A9'

                }, {
                    width: progressAnim
                }]}>
                    {/* Question Counter */}
                </Animated.View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                }}>
                    <Text style={{ color: 'white', fontSize: 16, marginRight: 2 }}>{currentQuestion + 1}</Text>
                    <Text style={{ color: 'white', fontSize: 16 }}>/ {questions.length}</Text>
                </View>

            </View>
        )
    }
    const preloadImagesForNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            const imageUrl = questions[nextQuestion]?.img;
            if (imageUrl) {
                Image.prefetch(imageUrl);
            }
        }
    };

    return (
        <View>
            {loading ? (renderLoading()) : (
                <View style={styles.container}>
                    <View style={styles.navbar}>

                        <Image style={styles.image} source={require('../../../assets/background.png')} />
                        <TouchableOpacity style={styles.backs} onPress={() => navigation.navigate('PlayModePicGuess', { currentUser: currentUser })}>
                            <Image style={styles.back} source={require('../../../assets/back.png')} />
                        </TouchableOpacity>
                        {/* <View style={styles.scores}>
                            <Text style={styles.score}>Question :{'' + currenIndex + '/' + quizzData.length}</Text>
                        </View> */}
                        <View style={styles.left}>
                            <View style={styles.fullhearts}>
                                {[...Array(heartCount)].map((index) => (
                                    <Image key={index} style={styles.fullheart} source={require('../../../assets/fullheart1.png')} />
                                ))}
                            </View>

                        </View>
                        <View style={styles.flags}>
                            {questions[currentQuestion]?.img !== '' ?
                                <Image style={styles.flag} source={{ uri: questions[currentQuestion]?.img }} onLoad={preloadImagesForNextQuestion} />
                                : null
                            }
                        </View>
                        {renderProgressBar()}
                    </View>
                    <View style={styles.gridContainer}>
                        <FlatList
                            style={styles.button}
                            data={questions[currentQuestion]?.allOptions}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.gridItem,
                                    // hàm này có nghĩa là nếu selectedAnswer === item()và item === quizzData[currentQuestion]?.answer thì sẽ trả về styles.correctOption
                                    styles.gridItem,
                                    selectedAnswer === item &&
                                        item === questions[currentQuestion]?.correct_answer
                                        ? styles.correctOption
                                        : selecWrongAnswers.includes(item) &&
                                            item !== questions[currentQuestion]?.correct_answer
                                            ? styles.wrongOption
                                            : null,
                                    ]}
                                    onPress={() => handleAnswer(item)}

                                >
                                    <Text style={styles.gridText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={2}
                        />
                    </View>
                    <View style={styles.trees}>
                        <Image style={styles.tree} source={require('../../../assets/tree.png')} />
                    </View>
                </View>
            )}
        </View>
    )
}

export default EasyMode

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: width,
        height: height,
    },

    navbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        height: '45%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    correctOption: {
        backgroundColor: 'green',
    },
    wrongOption: {
        backgroundColor: 'red',
    },
    image: {
        width: Dimensions.get('screen').width,
        height: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    back: {
        width: 35,
        height: 35,
        bottom: 350,
        left: "5%",
        position: 'relative',
        zIndex: 1,
    },
    number: {
        padding: 15,
        fontWeight: '800',
        color: '#F1F2FF',
        fontSize: 35,
        textAlign: 'right',
        backgroundColor: '#6A39A9',
        // borderRadius:50,
        width: '18%',
        bottom: '395%',
    },
    left: {
        display: 'flex',
        width: '35%',
        height: '60%',
        flexDirection: 'row',
        position: 'absolute',
        top: height * 0.05,
        left: '80%',
    },
    fullhearts: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '40%',
        height: '60%',

    },
    fullheart: {
        width: 40,
        height: 40,
    },
    scores: {
        justifyContent: 'center'
    },
    score: {
        fontSize: 35,
        textAlign: 'center',
        justifyContent: 'space-evenly',
        bottom: 350,
        fontWeight: '800',
        color: '#F1F2FF',
    },
    cooldown: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '16%',

        borderRadius: 15,
    },
    imgClock: {
        paddingHorizontal: 4,
        marginLeft: 7,
    },
    textCooldown: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '50%',
        height: '100%',

    },

    time: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '800',
        color: '#F1F2FF',
    },
    flags: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -106.5 }, { translateY: -70 }],
    },
    flag: {
        width: 213,
        height: 140,
        alignSelf: 'center',
    },

    trees: {
        end: 0,
        position: 'absolute',
        bottom: '1%',
    },

    tree: {
        width: 250,
        height: 130,
    },
    gridContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    gridItem: {
        height: height * 0.16,
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
    },
    gridText: {
        fontSize: 20,
    },
})