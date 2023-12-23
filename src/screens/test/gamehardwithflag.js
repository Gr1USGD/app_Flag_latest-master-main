
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
width=Dimensions.get('screen').width
height=Dimensions.get('screen').height

const Gamehardwithflag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={{ width: '100%', height: '7%', backgroundColor: '#1CA7EC' }} >

        </View>

        <Image style={styles.image} source={require('../../../assets/background.png')} />

        <View style={styles.scores}>
          <Text style={styles.score}>{'score\n99999'}</Text>
        </View>
        <View style={styles.cooldown}>
          <Text style={styles.time}>60</Text>
        </View>
        <TouchableOpacity style={styles.backs}>
          <Image style={styles.back} source={require('../../../assets/back.png')} />
        </TouchableOpacity>
        <View style={styles.fullhearts}>
          <View style={styles.fullheart1}>
            <Image style={styles.fullheart} source={require('../../../assets/fullheart1.png')} />
            
          </View>
          <View style={styles.numbers}>
            <Text style={styles.number} >3</Text>
          </View>
        </View>
        <View style={styles.flags}>
          <Image style={styles.flag} source={require('../../../assets/flag.png')} />
        </View>


      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Vietnam</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>United Kingdom</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>China</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>North Korea</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trees}>
          <Image style={styles.tree} source={require('../../../assets/tree.png')} />
        </View>
      </View>

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
    bottom: 420,
    left: 20,
    position: 'absolute',
  },

  fullhearts: {
    left: '10%',
  },
number:{
  padding: 15,
  fontWeight: '800',
  color: '#F1F2FF',
  fontSize: 35,
  textAlign: 'right',
    backgroundColor:'#6A39A9',
    borderRadius:50,
    width:'18%',
    bottom: '395%',
},

  fullheart: {
    width: 40,
    height: 40,
    bottom: '570%',

  },

  fullheart1: {
  elevation:1,
  left:3
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
    width: '18%',
    left: '75%',
    bottom: '5%'
  },
  time: {
    fontSize: 35,
    textAlign: 'center',
    bottom: 150,
    fontWeight: '800',
    color: '#F1F2FF',
    borderRadius: 70,
    backgroundColor: '#6A39A9',
    padding: 15,
  },
  flags: {

  },
  flag: {
    width: 213,
    height: 140,
    alignSelf: 'center',
    bottom: 500,
  },

  trees: {
    end: 0,
    position: 'absolute',
    bottom: '-30%',

  },

  tree: {
    width: 250,
    height: 130,
  }
});