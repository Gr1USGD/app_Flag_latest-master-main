import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { signIn } from '../../utils/Auth';
const image = { uri: 'https://i.imgur.com/l3tLQay.png' };
width = Dimensions.get('screen').width;
height = Dimensions.get('screen').height;
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.logo}>
          <Image source={{ uri: 'https://i.imgur.com/IXBn9LR.png' }} style={{ width: "60%", height: "50%" }} />
        </View>
        <View styles={styles.title}>
          <Text style={styles.titleText}>Let's Play!</Text>
          <Text style={styles.innerText}>A Winner Never Stops Trying</Text>
        </View>
        <View style={styles.buttonLogin}>
          <TouchableHighlight
            style={styles.button}
            activeOpacity={0.6}
            underlayColor="#3E255F"
            onPress={() => { }}
          >
            <View style={styles.buttonContent}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png' }} style={styles.img} />
              <Text style={styles.text} onPress={()=>signIn()}>LOGIN WITH GOOGLE</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: width,
    height: height,
  },
  logo: {
    top: '12%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  titleText: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  innerText: {
    color: 'white',
    top: '15%',
    fontSize: width *0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonLogin: {
    top: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '70%',
    backgroundColor: '#6A39A9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    height: '30%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: 40,
    height: 40,
  },
})