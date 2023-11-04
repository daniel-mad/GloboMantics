import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.buttonText}>Quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonRow, styles.border]}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Blog')}>
          <Text style={styles.buttonText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style={styles.bottomButtonStyles}
          onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>About GlobalMantics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#1877f2',
  },
  bottomRow: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  bottomButtonStyles: {
    backgroundColor: '#1877f2',
    width: '100%',
    height: '50%',
    paddingRight: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyles: {
    backgroundColor: '#1877f2',
    width: '50%',
    height: '55%',
    alignItems: 'center',
  },
  border: {
    borderColor: '#fff',
    borderBottomWidth: 1,
  },
});
export default Menu;
