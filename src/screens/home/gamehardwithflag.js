import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity, useWindowDimensions } from 'react-native';
import React,{ useState,useEffect  } from 'react';
import ProgressBar from 'react-native-progress/Bar';

// width=Dimensions.get('screen').width
// height=Dimensions.get('screen').height

const Gamehardwithflag = () => {
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
        </View>

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

export default Gamehardwithflag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
  },


  image: {
    width: Dimensions.get('screen').width,
    height: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  //Button
  body: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 110,
  },
  button: {
    flex: 1, // <-- loại bỏ thuộc tính này
    backgroundColor: '#6A39A9',
    borderRadius: 10,
    marginHorizontal: 20, // <-- chỉnh sửa giá trị này
    marginVertical: 20, // <-- chỉnh sửa giá trị này
  },

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