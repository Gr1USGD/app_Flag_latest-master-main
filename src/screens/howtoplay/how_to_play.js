import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
const Howtoplay = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{uri: "https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg"}}>
        <View style={styles.boxBottom}>
          <View style={styles.navbar}>
            <Text style={styles.title}>HOW TO PLAY</Text>
            <Image style={styles.btnLeftArrow} source={{uri: "https://cdn-icons-png.flaticon.com/512/1617/1617543.png",}} />
          </View>

          <View style={styles.middle}>
            <View style={styles.boxMiddle}>
              <View style={styles.top}> 
                <Image style={styles.img} source={{ uri: "https://cdn-icons-png.flaticon.com/512/189/189665.png", }} />
                <Text style={styles.text}>Guess the correct result from country to flag</Text>
                <Text style={{width:'90%', color: 'grey',margin: 0, padding: 0}}>-------------------------------------------------------------------------------</Text>
              </View>
              
              <View style={styles.mid}> 
                <Image style={styles.img} source={{ uri: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png", }} />
                <Text style={styles.text}>You have 3 lives to score all the flags</Text>
                <Text style={{width:'90%', color: 'grey', margin: 0, padding: 0 }}>-------------------------------------------------------------------------------</Text>
              </View>

              <View style={styles.bot}> 
                <Image style={styles.img} source={{ uri: "https://cdn-icons-png.flaticon.com/512/6197/6197700.png", }} />
                <Text style={styles.text}>Guess before time runs out</Text>
                <Text style={{width:'90%', color: 'grey', margin: 0, padding: 0 }}>-------------------------------------------------------------------------------</Text>
              </View>
            </View>
          </View>

            <View style={styles.btn}>
                <Button title="OK" />
            </View>
          </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default Howtoplay;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    fontStyle: "lalezer",
  },
  background: {
    height: "100%",
    width: "100%",
  },
  boxBottom: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#D4ABA5",
    marginTop: "100%",

  },
  navbar: {
    // backgroundColor: "pink",
    width: "100%",
    height: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLeftArrow: {
    width: 33,
    height: 33,
    marginLeft: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginLeft: 90,
  },

  middle: {
    width: "100%",
    height: "70%",
    // backgroundColor: "aqua",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxMiddle: {
    width: "90%",
    height: "90%",
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    
  },

  top: {
    width: "100%",
    height: "34%",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    width: "100%",
    height: "33%",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bot: {
    width: "100%",
    height: "33%",
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    // backgroundColor: "blue",
    width: "fit-content",
  },
  img: {
    width: 30,
    height: 30,
    marginBottom: 10,
    // backgroundColor: "white",
  },

  btn: {
    width: "90%",
    height: "15%",
    marginLeft: "5.2%",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  
});
