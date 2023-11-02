import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  DrawerLayoutAndroidComponent,
} from 'react-native';

const aboutGlobo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae ducimus optio officiis rem dolores error temporibus tempore labore voluptate quos asperiores cumque eaque animi,quasi sunt voluptas. Minus necessitatibus aliquid ab. Enim architecto harum autem mollitia placeat,illo nesciunt voluptatum recusandae, pariatur,`;
const whatGlobo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit Vitae ducimus optio officiis rem dolores error temporibus tempore labore voluptate quos asperiores cumque eaque animi,quasi sunt voluptas. Minus necessitatibus aliquid ab. Enim architecto harum autem mollitia placeat,illo nesciunt voluptatum recusandae, pariatur,`;

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.pics}
        source={require('../components/img/arch64.jpg')}
      />
      <Text style={styles.aboutTitle}>Who We Are</Text>
      <Text style={styles.aboutText}>{aboutGlobo}</Text>
      <Image
        style={styles.pics}
        source={require('../components/img/computer640.jpg')}
      />
      <Text style={styles.aboutTitle}>Who We Are</Text>
      <Text style={styles.aboutText}>{whatGlobo}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  pics: {
    height: 300,
    width: '100%',
  },
  aboutTitle: {
    paddingTop: 10,
    textAlign: 'center',
  },
  aboutText: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default AboutScreen;
