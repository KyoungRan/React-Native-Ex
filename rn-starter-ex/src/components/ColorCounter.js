import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {

  const [changeColor, setChangeColor] = useState('');

  return (
    <View>
      <Text>{color}</Text>
      <Button 
        title={`More ${color}`} 
        onPress={() => {onIncrease()}}
      />
      <Button 
        title={`Less ${color}`} 
        onPress={() => {onDecrease()}}
      />
    </View>
  )
}

export default ColorCounter;