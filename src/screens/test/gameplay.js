import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import React from 'react';
const Gameplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
{/* <View style={{width:'100%',height:'7%', backgroundColor:'#1CA7EC'}} >

</View> */}

        <Image style={styles.image} source={require('../../../assets/background.png')} />

        <View style={styles.scores}>
          <Text style={styles.score}>{'score\n99999'}</Text>
        </View>
        <View style={styles.cooldown}>
          <Text style={styles.time}>00:00</Text>
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
          <Text style={styles.text}> Vietnam </Text>
        </View>


      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
          <Image style={styles.flag} source={require('../../../assets/flags2.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
          <Image style={styles.flag1} source={require('../../../assets/flags1.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.flag} source={require('../../../assets/flags2.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
          <Image style={styles.flag} source={require('../../../assets/flags2.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.trees}>
      <Image style={styles.tree} source={require('../../../assets/tree.png')} />
      </View>
      </View>
      
    </View>
  );
};

export default Gameplay;

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
    flex: 1, 
    marginHorizontal: 25, 
    marginVertical: 26, 
  },

  flag:{
    width:170,
    height:120,
    alignItems: "center",
    padding: 25,
    borderRadius: 10,
    borderColor: 'green',
  },

  flag1:{
    width:170,
    height:120,
    alignItems: "center",
    padding: 25,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 3,
  },
  
  row: {
    flexDirection: 'row',
  },


  back: {
    width: 40,
    height: 40,
    bottom: 420,
    left: 20,
    // zIndex: 1,
    position: 'absolute',
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

  cooldown: {

  },
  time: {
    fontSize: 35,
    textAlign: 'center',
    bottom: 150,
    fontWeight: '800',
    color: '#F1F2FF',
  },
  flags: {
    bottom:'115%'
  },
  text: {
    fontSize:45,
    textAlign: 'center',
    justifyContent:'center',
    color: '#F1F2FF',
    fontWeight: '800',
  },

  trees:{
    end:0,
    position:'absolute',
    bottom: '-30%',
  },

  tree:{
    width:250,
    height:130,
  }
});