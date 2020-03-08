import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const StartupScreen = (props) => {
  return (
    <LinearGradient
      style={styles.screen}
      colors={[Colors.blueLight, Colors.blueDark, Colors.blueDarkest]}>
      <MaterialCommunityIcons
        name='movie'
        size={50}
        color={Colors.yellowDark}
      />
      <Text style={styles.headerText}>Top Movies</Text>
      <Image
        resizeMode='center'
        source={{
          uri:
            'https://media.newyorker.com/photos/5c00334ea080342cdf811027/master/w_1600%2Cc_limit/2018IR-Best-Movies-VanderYacht-FINAL.jpg'
        }}
        style={styles.mainImage}
      />
      <View style={styles.btnContainer}>
        <Button
          title="Let's see Movies"
          onPress={() => props.navigation.navigate('Movies')}
          color={Colors.yellowDark}
        />
      </View>
    </LinearGradient>
  );
};

export default StartupScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'balo',
    fontSize: 27,
    color: Colors.yellowDark
  },
  btnContainer: {
    width: '80%'
  },
  mainImage: {
    width: '90%',
    height: 300
  }
});
