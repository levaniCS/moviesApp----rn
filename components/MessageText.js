import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

const MessageText = (props) => {
  return <Text style={styles.message}>{props.children}</Text>;
};

export default MessageText;

const styles = StyleSheet.create({
  message: {
    fontFamily: 'balo',
    fontSize: 18,
    padding: 30,
    color: Colors.yellowLight,
    textAlign: 'center'
  }
});
