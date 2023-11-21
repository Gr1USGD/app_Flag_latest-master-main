import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
// import {OpenSansText} from '../ProjectDemo/assets/fonts/OpenSansText-Regular.ttf';

const Ranker=()=> {
  return (
    <SafeAreaView  style={styles.container}>
       <ImageBackground style={styles.background} source={{ uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg',}}>
        <View style={styles.navbar}>
          <TouchableOpacity><Image style={styles.imgback} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2985/2985162.png',}} /></TouchableOpacity>
        {/* <Image style={styles.btnLeftArrow} source={require('../ProjectDemo/assets/left-arrow_nen_tim.png')}/> */}
          <Text style={styles.title}>LEADERBOARD</Text>
        </View>
        <View style={styles.main}>
            <View style = {styles.attribute}>
              <Text style={styles.item}>RANK</Text>
              <Text style={styles.item}>NAME</Text>
              <Text style={styles.item}>SCORE</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>1</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>2</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>3</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>4</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>5</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>6</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>7</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>8</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            {/* <View style = {styles.describe}>
              <Text style={styles.item}>7</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View>
            <View style = {styles.describe}>
              <Text style={styles.item}>8</Text>
              <Text style={styles.item}>TEME NAME HERE</Text>
              <Text style={styles.item}>99</Text>
            </View> */}
        </View>
      </ImageBackground>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

export default Ranker;

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      fontStyle: 'lalezer',    
  },
  background: {
     height: '100%',
     width: '100%'
  },
  navbar: {
    width: '100%',
    height: '11%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#6A39A9'
  },
  imgback: {
    width: 40,
    height: 40,
    padding: 0,
    marginRight: 45,
    marginTop:5,
    marginLeft: 15,   
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    padding: 0,
    marginRight: 60,  
    
  },
    
  main: {
    width: '100%',
    height: '89%',
    // mixBlendMode: 'screen',
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto',
  },

  attribute: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 25,
    fontWeight: 'bold',
  },

  describe: {
    width: '90%',
    height: '9.5%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#6A39A9',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'auto',
  },

  item: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 0,
    margin: 0,
    // overflow: 'auto',
  },


});
