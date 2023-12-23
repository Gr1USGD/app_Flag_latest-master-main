import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, Dimensions, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { createRank, getAllUsers } from '../../utils/Database';
import { FlatList } from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Ranker = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('image');

  const handleGuessImage = () => {
    setSelectedOption('image'); // Đặt trạng thái khi chọn 'Nhìn hình đoán chữ'
  };

  const handleGuessWord = () => {
    setSelectedOption('word');

  };
  const [textGuessRanking, setTextGuessRanking] = useState([]);
  const [picGuessRanking, setPicGuessRanking] = useState([]);
  const getAllUsersToSort = async () => {
    try {
      const users = await getAllUsers(); // Lấy toàn bộ thông tin người dùng
      // console.log('users', users);
      const usersData = users.docs.map((doc) => {
        const userData = doc.data();
        return {
          uid: doc.id, // Sử dụng doc.id để lấy uid của người dùng
          ...userData,
        };
      });
      const usersDataByTextGuess = [...usersData];
      usersDataByTextGuess.sort((a, b) => b.textGuess.total - a.textGuess.total);
      setTextGuessRanking(usersDataByTextGuess);
      console.log('Sắp xếp user:', usersDataByTextGuess);

      const usersDataByPicGuess = [...usersData];
      usersDataByPicGuess.sort((a, b) => b.picGuess.total - a.picGuess.total);
      setPicGuessRanking(usersDataByPicGuess);
      
      usersDataByTextGuess.forEach((user, index) => {
        createRank(user.uid, {textGuess: {rank: index + 1}});
        console.log('user', user);
      });
      usersDataByPicGuess.forEach((user, index) => {
        createRank(user.uid, {picGuess: {rank: index + 1}});
      });
    } catch (error) {
      console.error('Error fetching and sorting users:', error);
    }
  }
  useEffect(() => {
    getAllUsersToSort();
  },[]);
  const renderItem= ({item}) => {
    return (
      <SafeAreaView>
         <FlatList
         data={selectedOption === 'image' ? picGuessRanking : textGuessRanking}
         keyExtractor={item.id}
         showsVerticalScrollIndicator={false}
         style={{
           display: 'flex',
           flexDirection: 'column',
           // paddingVertical: 20,
         }}
         contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
         renderItem={({ item: user, index }) => (
           <View
             style={{
               width: '95%',
               padding: 15,
               height: 90,
               borderRadius: 8,
               marginVertical: 10,
               // marginHorizontal: 10,
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
               backgroundColor: '#DAE9FF',
               elevation: 2,
             }}>
             <View
               key={user.id}
               style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '130%' }}>
               <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '30%', height: '100%'}}>
                 <Text style={{ fontSize: 20 }}>{index + 1}</Text>
                 <Image source={{ uri: user.photoURL }} style={{ width: 45, height: 45, borderRadius: 100 }} />
               </View>
               <View style={{ width: '70%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <View style={{ width: '100%', height: '45%', display: 'flex', flexDirection:'row',alignItems: 'flex-end'}}>
                   <Text style={{fontSize: 17}}>{user.displayName}</Text>
                 </View>
                 <View style={{ width: '100%', height: '45%'}}>
                   <Text style={{fontSize: 15}}>Tổng điểm:  {selectedOption === 'image' ? user.picGuess.total : user.textGuess.total}</Text>
                 </View>
               </View>
             </View>

           </View>
         )}
       />
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={{ uri: 'https://i.pinimg.com/564x/1f/8b/34/1f8b34a81ded531546dda85c1dd45856.jpg' }}>
        <View style={styles.navbar}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.btnLeftArrow} onPress={()=> navigation.navigate('Home')}>
              <Image style={{width:33,height:33}}  source={require('../../../assets/previous.png')} />
            </TouchableOpacity>
            
            <Text style={styles.title}>BẢNG XẾP HẠNG</Text>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              style={[
                styles.menuItem,
                { position: 'relative' },
              ]}
              onPress={handleGuessImage}
            >
              <Text style={[styles.menuText,selectedOption === 'image' ? styles.selectedMenuActive : styles.selectedMenuInactive]}>Nhìn hình đoán chữ</Text>
              <View style={[styles.selectedMenuBorder, selectedOption === 'image' ? styles.selectedMenuActive : styles.selectedMenuInactive]} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.menuItem,
                { position: 'relative' },
              ]}
              onPress={handleGuessWord}
            >
              <Text style={[styles.menuText,selectedOption === 'word' ? styles.selectedMenuActive : styles.selectedMenuInactive]}>Nhìn chữ đoán hình</Text>
              <View style={[styles.selectedMenuBorder, selectedOption === 'word' ? styles.selectedMenuActive : styles.selectedMenuInactive]} />
            </TouchableOpacity>
          </View>
          
        </View>
        {renderItem({item: selectedOption})}
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

export default Ranker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: width,
    height: height,
    flex: 1,
    resizeMode: 'cover',
  },
  navbar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A39A9',
    height: '20%',
  },
  header: {
    marginTop: '15%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  btnLeftArrow: {
    position: 'absolute',
    bottom: '80%',
    width: 33,
    height: 33,
    right: '62%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5%',

  },
  selectedMenuInactive: {
    color: 'rgba(255, 255, 255, 0.3)',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)', // Màu nhạt khi không được chọn
  },
  selectedMenuActive: {
    borderBottomColor: 'white',
    borderRadius: 2, // Màu đậm khi được chọn
  },
  menuItem: {
    backgroundColor: '#6A39A9',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedMenuItem: { // Độ dày của đường gạch dưới và khoảng cách với văn bản
  },
  selectedMenuBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 4, // Độ dày của đường gạch dưới
    borderBottomColor: 'white', // Màu của đường gạch dưới
  },
  menuText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  },
});
