import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';

const GlobalHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');
  const navigation = useNavigation();

  const toggleUser = () => {
    if (isLoggedIn) {
      AsyncStorage.setItem('userLoggedIn', 'none', (_err, _result) => {
        setIsLoggedIn(false);
        setLoggedUser('');
        Alert.alert('User logged out');
      });
    } else {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('userLoggedIn', (_err, result) => {
      if (result === 'none') {
        console.log('NONE');
      } else if (result === null) {
        AsyncStorage.setItem('userLoggedIn', 'none', (_err, _result) => {
          console.log('Set user to NONE');
        });
      } else {
        setIsLoggedIn(true);
        setLoggedUser(result);
      }
    });
  });
  let display = isLoggedIn ? loggedUser : 'Tap to Login';
  return (
    <View style={styles.headStyle}>
      <Image
        style={styles.imageStyle}
        source={require('./img/GloboLogo.png')}
      />
      <Text style={styles.headText} onPress={toggleUser}>
        {display}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headStyle: {
    backgroundColor: '#1877f2',
    flexDirection: 'row',
  },
  imageStyle: {
    alignSelf: 'flex-start',
    height: 50,
    width: 50,
    margin: 5,
    resizeMode: 'cover',
  },
  headText: {
    textAlign: 'right',
    textAlignVertical: 'center',
    color: '#fff',
    flex: 1,
    paddingRight: 15,
  },
});

export default GlobalHeader;
