import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }
  switch(action.type) {
    case 'increment':
      console.log(state.count, action.payload)
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      return
  }
}
const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button 
        title="Increase" 
        onPress={() => dispatch({ type: 'increment', payload: 1 })} 
      />
      <Button 
        title="Decrease" 
        onPress={() => dispatch({ type: 'decrement', payload: 1 })} 
      />
      <Text>Current Count: {count}</Text>
      {console.log(count)}
    </View>
  )
}

const styles = StyleSheet.create({});

export default CounterScreen;