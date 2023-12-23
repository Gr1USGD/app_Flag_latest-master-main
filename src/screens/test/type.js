import { TouchableOpacity, Text, Image, View,onPress, StyleSheet, ImageBackground } from 'react-native';
import React from 'react'
import Mode from './mode';
const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const imagesetting = { uri: 'https://thenounproject.com/api/private/icons/4463025/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' };
const imgbottom = {uri:'https://i.pinimg.com/564x/19/ea/0d/19ea0d3667b016485e86f41519e09b78.jpg'}
const Type =() => {
    return (
        <View style={style.body}>
            <View style={style.top}>
                <View>
                    <ImageBackground source={image} style={style.imagebackground}>
                        <TouchableOpacity><Image source={imagesetting} style={style.imagesetting} /></TouchableOpacity>
                        <Image style={style.imageaccount} source={require('../../../assets/imgaccount.png')} />
                        <Text style={style.nametext}>Account</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={style.type}>
                <TouchableOpacity style={style.playFlag}>
                    <Text style={style.text}>Match Flag with Country Name</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.playName} onPress={onPress}>
                    <Text style={style.text}>Match Country Name with Flag</Text>
                </TouchableOpacity>

                <Image style={style.imgbottom} source={require('../../../assets/imgbottom.png')} />
            </View>

        </View>



    )
}

export default Type
const style = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    top: {
        width: '100%',
        height: '50%',
    },

    imgbottom: {
        width: '100%',
        height: '60%',
        marginLeft: '25%',
        bottom:11,
        // marginTop: '12%',
        opacity:0.8,
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
        bottom:40,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },

    imageaccount: {
        width: '40%',
        height: '45%',
        justifyContent: 'center',
        bottom:20,
    },

    imagesetting: {
        width: 60,
        height: 90,
        marginRight: 280,
    },

    type: {
        width: '85%',
        height: '50%',
        marginLeft: 27,
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
        bottom: 50,
    },

    playFlag: {
        width: '70%',
        height: '25%',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        padding: 10,
        marginTop: 30,
        marginLeft: '16%',
        borderRadius: 10,
    },

    playName: {
        width: '70%',
        height: '25%',
        justifyContent: 'center',
        backgroundColor: '#FAFAFF',
        borderColor: '#6A39A9',
        borderWidth: 5,
        padding: 10,
        marginTop: 30,
        marginLeft: '16%',
        borderRadius: 10,
    },

    text: {
        fontSize:25,
        // color: 'white',
        fontWeight: "900",
        textAlign:'center',
        color:'#6A39A9',

    }
});
