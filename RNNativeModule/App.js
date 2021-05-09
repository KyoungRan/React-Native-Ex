import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import CustomModule from './CustomModule';

const App = () => {
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    const fetchDevideId = async () => {
      const id = await CustomModule.getDeviceId();
      setDeviceId(id);
    };
    fetchDevideId();
  },[]);
  CustomModule.show();
  return (
    <>
      <Text>Hi</Text>
      <Text>{deviceId}</Text>
    </>
  );
};

export default App;
