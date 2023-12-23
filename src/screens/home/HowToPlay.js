import { StyleSheet, Text, View, Image, ImageBackground,p } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
const HowToPlay = () => { 
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={{ uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg',}}>
            <View style={styles.navbar}>
                <Image style={styles.btnLeftArrow} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2985/2985162.png',}}/>
                <Text style={styles.title}>HOW TO PLAY</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.text}>When you select Play, a page will appear with three levels: Easy, Medium and Hard, with each level having 10 different random questions.</Text>
                <Text style={styles.text}>When playing you will have 2 types of questions:</Text>
                <Text style={styles.text}>Type1: Show the flag with the correct country name</Text>
                <Text style={styles.text}>Type2: Displays the correct country name of the selected national flag</Text>
                {/* <Image style={styles.storyset} source={require('../images/team_work_storyset.png')}/> */}
            </View> 
            
            </ImageBackground>
            <StatusBar style="auto" />   
        </View>
    );       
}

export default HowToPlay;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        fontStyle: 'lalezer',
      },
    background: {
       height: '100%',
       width: '100%',
    },
    navbar: {
      width: '100%',
      height: '11%',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#6A39A9',
    },
    btnLeftArrow: {
      width: 33,
      height: 33,
      padding: 0,
      marginRight: 45,
      marginLeft: 5,
      
    },
  
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
      padding: 0,
      marginRight: 98,
      
    },

    main: {
        width: '90%',
        height: '89%',
        flexDirection: 'column',
        marginTop: '5%',
        marginLeft: '5%',
      },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 0,
        marginTop: 20,
        letterSpacing: 3,
        textAlign: 'justify',
        // width: 'fit-content',
    },  
    
    // storyset: {
    //     flex: 1,
    //     width: '1',
    //     height: "auto",
    // },
});