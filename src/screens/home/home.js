import { TouchableOpacity, Button, Text, Image, StatusBar, View, onPress, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Sound from 'react-native-sound';
import { useSound } from '../soundContext/SoundContext';
import { useNavigation } from '@react-navigation/native';
const image = { uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' };
const imagesetting = require('../../../assets/settings.png');
const imgbottom = { uri: 'https://i.pinimg.com/564x/e2/89/be/e289be756cadd2d9fafebd2cff3173ed.jpg' };
import SoundPlayer from '../soundContext/SoundPlayer';
import { createUser, getUserById, createRank } from '../../utils/Database';
import auth from '@react-native-firebase/auth';
import Modal from "react-native-modal";
import { useState, useEffect } from 'react';
const Home = ({ navigation }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { addListener } = useNavigation();
    const { isSoundOn } = useSound();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    const create = async () => {
        const user = await getUserById(currentUser.uid);
        const userData = {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
        };
        if (user.data() != null || user.data() != undefined) {
            await navigation.navigate('QuestionMode', {
                currentUser: userData
            });
        }

        if (user.data() === undefined || user.data() === null) {
            await createRank(currentUser.uid, {
                textGuess: {
                    rank: 0
                },
                picGuess: {
                    rank: 0
                }
            });
            await createUser(currentUser.uid, {
                email: currentUser.email,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                textGuess: {
                    easy: 0,
                    medium: 0,
                    hard: 0,
                    total: 0,
                    correctAnswer: 0,
                    incorrectAnswer: 0,
                },
                picGuess: {
                    easy: 0,
                    medium: 0,
                    hard: 0,
                    total: 0,
                    correctAnswer: 0,
                    incorrectAnswer: 0,
                }
            });
            await navigation.navigate('QuestionMode', {
                currentUser: userData
            });
        }

    }
    const onAuthStateChanged = async user => {
        await setCurrentUser(user);
        console.log('currentUser', currentUser);
        setIsLoading(false);
    };
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    return (
        <View style={style.body}>
            <SoundPlayer soundPath={'sound_background.mp3'} isSoundOn={isSoundOn} />
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
            <View style={style.top}>
                <View>
                    <ImageBackground source={image} style={style.imagebackground}>
                        <TouchableOpacity onPress={() => navigation.navigate('Setting', { currentUser: currentUser, option: 'setting' })}>
                            <Image source={imagesetting} style={style.imagesetting} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '50%', height: '50%', alignItems: 'center' }} onPress={() => navigation.navigate('Setting', { currentUser: currentUser, option: 'achievements' })}>
                            {currentUser && currentUser.photoURL && (
                                <Image style={style.imageaccount} source={{ uri: currentUser.photoURL }} />
                            )}
                        </TouchableOpacity>
                        {currentUser && currentUser.displayName && (
                            <Text style={style.nametext}>{currentUser.displayName}</Text>
                        )}
                    </ImageBackground>
                </View>
            </View>

            <View style={style.mode}>

                <TouchableOpacity style={style.playbtn} onPress={() => create()}>
                    <Text style={style.text}>CHƠI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.rankedbtn} onPress={() => navigation.navigate('Ranker')}>
                    <Text style={style.text}>XẾP HẠNG</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.howtoplaybtn} onPress={toggleModal}>
                    <Text style={style.text}>HƯỚNG DẪN</Text>
                </TouchableOpacity>
                <Image style={style.imgbottom} source={require('../../../assets/imgbottom.png')} />
            </View>
            <>
                <Modal isVisible={isModalVisible} style={style.modal}>
                    <View style={style.modalContent}>
                        <View style={style.boxBottom}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: "bold",
                                    color: "white",
                                }}>HOW TO PLAY</Text>
                            </View>

                            <View style={style.middle}>
                                <View style={style.boxMiddle}>
                                    <View style={style.topModal}>
                                        <Image
                                            style={style.img}
                                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/189/189665.png" }}
                                        />
                                        <Text style={style.textModal}>Guess the correct result from country to flag</Text>
                                    </View>

                                    <View style={style.mid}>
                                        <Image
                                            style={style.img}
                                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png" }}
                                        />
                                        <Text style={style.textModal}>You have 3 lives to score all the flags</Text>
                                    </View>

                                    <View style={style.bot}>
                                        <Image
                                            style={style.img}
                                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/6197/6197700.png" }}
                                        />
                                        <Text style={style.textModal}>Guess before time runs out</Text>
                                    </View>
                                </View>
                            </View>
                            <Button title="OK" onPress={toggleModal} color='#6A39A9' />
                        </View>
                    </View>
                </Modal>
            </>
        </View>
    )
}

export default Home
const style = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    },

    top: {
        width: '100%',
        height: '50%',
    },

    imgbottom: {
        width: '100%',
        height: '60%',
        marginLeft: '25%',
        top: '2%',
        opacity: 0.8,
    },

    imagebackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    nametext: {
        fontSize: 30,
        bottom: '30%',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    imageaccount: {
        width: 120, // Kích thước chiều rộng
        height: 120, // Kích thước chiều cao
        borderRadius: 80,
    },

    imagesetting: {
        position: 'absolute',
        top: 10,
        right: '35%',
        width: 33,
        height: 33,
    },

    mode: {
        width: '90%',
        height: '50%',
        marginLeft: '5%',
        backgroundColor: '#FAFAFF',
        borderRadius: 20,
        bottom: '8%',
    },

    playbtn: {
        width: '60%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6A39A9',
        padding: 10,
        marginTop: '10%',
        marginLeft: '20%',
        borderRadius: 10,
    },

    rankedbtn: {
        width: '60%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6A39A9',
        padding: 10,
        marginTop: 30,
        marginLeft: '20%',
        borderRadius: 10,
    },

    howtoplaybtn: {
        width: '60%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6A39A9',
        padding: 10,
        marginTop: 30,
        marginLeft: '20%',
        borderRadius: 10,
    },

    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: "900",
        textAlign: 'center',
    },
    boxBottom: {
        width: "100%",
        height: "50%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "#E5D4FF",
        opacity: 0.9,
        marginTop: "110%",

    },
    middle: {
        width: "100%",
        height: "70%",
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

    topModal: {
        width: "100%",
        height: "34%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderStyle: "dashed",
        borderColor: 'grey'
    },
    mid: {
        width: "100%",
        height: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderStyle: "dashed",
        borderColor: 'grey'
    },
    bot: {
        width: "100%",
        height: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderStyle: "dashed",
        borderColor: 'grey',
        paddingEnd: 10,
    },

    textModal: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        paddingHorizontal: 30,
        width: "fit-content",

    },
    img: {
        width: 30,
        height: 30,
        marginBottom: 10,
    },

    modal: {
        margin: 1,
    },

});