import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const CopmonentsScreen = () => {
  const name = 'Kyoungran';

  return (
    <View>
    <Text style={styles.textStyle}>Getting started with react native!</Text>
    <Text style={styles.SecondTextStyle}>My name is {name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  SecondTextStyle: {
    fontSize: 20,
  } 
});

export default CopmonentsScreen;