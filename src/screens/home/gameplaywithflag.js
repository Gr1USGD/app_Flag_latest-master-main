import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native';
import React,{ useState,useEffect  } from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';
import Total from './total';
width = Dimensions.get('screen').width;
height = Dimensions.get('screen').height;


// width=Dimensions.get('screen').width
// height=Dimensions.get('screen').height

const gameplaywithflag = () => {
  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0);
  const totalQuestions = 10; // Tổng số câu hỏi
  const [questions, setQuestions] = useState([
    { id: 1, text: 'France?', answer: 'Paris' },
    { id: 2, text: 'France?', answer: 'China' },
    { id: 3, text: 'France?', answer: 'Yen' },
    { id: 4, text: 'France?', answer: '1945' },
    { id: 5, text: 'France?', answer: 'Blue Whale' },
    { id: 6, text: 'France?', answer: 'Blue Whale' },
    { id: 7, text: 'France?', answer: 'Blue Whale' },
    { id: 8, text: 'France?', answer: 'Blue Whale' },
    { id: 9, text: 'France?', answer: 'Blue Whale' },
    { id: 10, text: 'France?', answer: 'Blue Whale' },

  ]);
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setNumQuestionsAnswered((prevNum) => prevNum + 1);

      setTimeRemaining(10);
    }

  };

  const [timeRemaining, setTimeRemaining] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
        }
        return prevTime > 0 ? prevTime - 1 : prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [numQuestionsAnswered]); 


  return (
    <View style={styles.container}>
      {numQuestionsAnswered < totalQuestions ? (
          <View>
      <View style={styles.navbar}>
      

        <Image style={styles.image} source={require('../../../assets/background.png')} />
        <TouchableOpacity style={styles.backs}>
          <Image style={styles.back} source={require('../../../assets/back.png')} />
        </TouchableOpacity>

        <View style={styles.scores}>
          <Text style={styles.score}>{'score\n'} {numQuestionsAnswered + numQuestionsAnswered}</Text>
        </View>
        
        <View style={styles.flags}>
          <Image style={styles.flag} source={require('../../../assets/flag.png')} />


quizzData = [
    {
        question: "https://nasyo.vn/wp-content/uploads/2022/11/Made-in-VietNam-510x291.jpg",
        options: ["Viet Nam", "Lao", "Campuchia", "Singapore"],
        answer: "Viet Nam"
    },
    {
        question: "https://aslgate.com/wp-content/uploads/2021/06/dang-ky-nhan-hieu-tai-thai-lan.jpg",
        options: ["red,white,blue", "red,green,blue", "red,white,green", "Thai Lan"],
        answer: "Thai Lan"

    },
    {
        question: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/225px-Flag_of_Singapore.svg.png",
        options: ["red,white,blue", "red,green,blue", "red,white,green", "Singapore"],
        answer: "Singapore"

    }

]
const TestFrontend = ({route}) => {
    const { resetState } = route.params || {};
    const navigation = useNavigation();
    const [currentQuestion, setCuentQuestion] = useState(0);
    const [currenIndex, setCurrentIndex] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    
    useEffect(() => {
        if (resetState) {
            setCuentQuestion(0);
            setSelectedAnswer(null);
            setSelectedAnswers([]);
            setScore(0);
            setShowScore(false);
            
        }
    }, [resetState]);

    const handleAnswer = (item) => {
        setSelectedAnswers((prevAnswers) => [...prevAnswers, item]);
        setSelectedAnswer(item);
        const answer = quizzData[currentQuestion]?.answer;
        
        if (answer === item) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setScore((prevScore) => prevScore + 1);
            const nextQuestion = currentQuestion + 1;
            setTimeout(() => {

                if (nextQuestion < quizzData.length) {
                    setCuentQuestion(nextQuestion);
                    setSelectedAnswer(null);
                    setSelectedAnswers([]);
                } else {
                    setScore((prevScore) => prevScore -1);
                    navigation.navigate('Total', { score: score + 1 });
                    setCuentQuestion(0);
                    setSelectedAnswer(null);
                    setSelectedAnswers([]);
                    setShowScore(true);
                }
            }, 100);
        }



    };

    return (
        <View>
            {showScore ? <View>
                <Total score={score} navigation={navigation}/>
            </View> :
                <View style={styles.container}>
                    <View style={styles.navbar}>
                        <View >
                        </View>
                        <Image style={styles.image} source={require('../../../assets/background.png')} />
                        <View style={styles.scores}>
                            <Text style={styles.score}>Question :{'' + currenIndex +'/'+quizzData.length}</Text>
                        </View>
                        <View style={styles.cooldown}>
                            <Text style={styles.time}>60</Text>
                        </View>
                        <TouchableOpacity style={styles.backs}>
                            <Image style={styles.back} source={require('../../../assets/back.png')} />
                        </TouchableOpacity>
                        <View style={styles.fullhearts}>
                            <Image style={styles.fullheart} source={require('../../../assets/fullheart1.png')} />
                            <Image style={styles.fullheart} source={require('../../../assets/fullheart1.png')} />
                            <Image style={styles.fullheart} source={require('../../../assets/fullheart1.png')} />
                        </View>
                        <View style={styles.flags}>
                            <Image style={styles.flag} source={{ uri: quizzData[currentQuestion]?.question }} />
                        </View>


                    </View>
                    <View style={styles.gridContainer}>
                        <FlatList
                            style={styles.button}
                            data={quizzData[currentQuestion]?.options}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.gridItem,
                                    selectedAnswer === item && item === quizzData[currentQuestion]?.answer
                                        ? styles.correctOption
                                        : selectedAnswers.includes(item) && item !== quizzData[currentQuestion]?.answer
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
            }
>>>>>>> 9b2ca606c59e71eb80cb485894b48e22e3ae99e6
        </View>
    )
}

<<<<<<< HEAD
        <View style={styles.progressBarContainer}>
          <ProgressBar
            progress={numQuestionsAnswered / totalQuestions}
            width={380}
            height={20}
            borderRadius={10}
            animated={true}
            color="#6A39A9"
          />

          <Text style={styles.progressBarText}>
            {numQuestionsAnswered}/{totalQuestions}
          </Text>

        </View>

        
       

        <View style={styles.fullhearts}>
          <View style={styles.fullheart1}>
            <Image style={styles.fullheart} source={require('../../../assets/fullheart1.png')} />
            
          </View>
          <View style={styles.numbers}>
            <Text style={styles.number} >3</Text>
          </View>
        </View>

        <View style={styles.cooldown}>
          <Text style={styles.time}>{timeRemaining}</Text>
        </View>

       


      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={styles.text}>Vietnam</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={styles.text}>United Kingdom</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={styles.text}>China</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(true)}>
            <Text style={styles.text}>North Korea</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trees}>
          <Image style={styles.tree} source={require('../../../assets/tree.png')} />
        </View>
      </View>
      </View>
 ) : (
   <Text style={styles.final} >Chúc mừng, bạn đã hoàn thành tất cả câu hỏi!</Text>
   )
 }
    </View>
  );
};

export default gameplaywithflag;
=======
export default TestFrontend
>>>>>>> 9b2ca606c59e71eb80cb485894b48e22e3ae99e6

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width: width,
        height: height,
    },

    navbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        height: '45%',
        backgroundColor: 'red',
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
        width: 40,
        height: 40,
        bottom: 420,
        left: 20,
        position: 'absolute',
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
    fullheart: {
        width: 40,
        height: 40,
        left: '85%',
        bottom: 460,
        zIndex: 1,
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

<<<<<<< HEAD
  progressBarContainer: {
    bottom: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progressBarText: {
    color: 'white', // Màu văn bản phù hợp với nền của ProgressBar
    justifyContent: 'center',
    textAlign: 'center',
    bottom: '50%'
  },

  text: {
    textAlign: "center",
    color: '#F1F2FF',
    padding: 25,
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
  },
=======
    cooldown: {
>>>>>>> 9b2ca606c59e71eb80cb485894b48e22e3ae99e6

    },
    time: {
        fontSize: 35,
        textAlign: 'center',
        bottom: 150,
        fontWeight: '800',
        color: '#F1F2FF',
    },
    flags: {

<<<<<<< HEAD
  back: {
    width: 40,
    height: 40,
    bottom: 330,
    left: 20,
    // position: 'absolute',
  },

  fullhearts: {
    width: '25%', // Đặt kích thước hình tròn tùy ý
    height: '15%',
    borderRadius: 20, // Set nửa chiều cao để tạo thành hình tròn
    backgroundColor: '#6A39A990',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '153%',
    left: '78%',

  },
  number: {
    // padding: 15,
    fontWeight: '800',
    color: '#F1F2FF',
    fontSize: 35,
  },

  fullheart: {
    width: 40,
    height: 40,
  },

  fullheart1: {
    marginRight: 5,
  },



  scores: {
    justifyContent: 'center'
  },
  score: {
    fontSize: 35,
    textAlign: 'center',
    bottom: 380,
    fontWeight: '800',
    color: '#F1F2FF',

  },

  cooldown: {
    width: '18%',
    left: '79%',
    bottom: '90%',
  },
  time: {
    fontSize: 35,
    textAlign: 'center',
    bottom: 150,
    fontWeight: '800',
    color: '#F1F2FF',
    borderRadius: 50,
    backgroundColor: '#6A39A999',
    padding: 15,
  },
  flags: {

  },
  flag: {
    width: 213,
    height: 140,
    alignSelf: 'center',
    bottom: '250%',
  },

  trees: {
    end: 0,
    position: 'absolute',
    bottom: '-30%',

  },

  tree: {
    width: 250,
    height: 130,
  },
  final:{
    color:'red',
    top:'50%'
  }
});
=======
    },
    flag: {
        width: 213,
        height: 140,
        alignSelf: 'center',
        bottom: 500,
        backgroundColor: 'red',
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
>>>>>>> 9b2ca606c59e71eb80cb485894b48e22e3ae99e6
