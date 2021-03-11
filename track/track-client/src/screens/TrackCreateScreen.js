import '../_mockLocation';
import React, { useContext  } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
// import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  // same below: const [err] = useLocation((location) => addLocation(location));
  const [err] = useLocation(isFocused, addLocation);

  console.log(isFocused);
  // const [err, setErr] = useState(null);

  // const startWatching = async () => {
  //   try {
  //     const { granted } = await requestPermissionsAsync();
  //     await watchPositionAsync({
  //       accuracy: Accuracy.BestForNavigation,
  //       timeInterval: 1000,
  //       distanceInterval: 10
  //     }, (location) => {
  //       console.log(location);
  //       addLocation(location);
  //     });
  //     if (!granted) {
  //       throw new Error('Location permission not granted');
  //     }
  //   } catch (e) {
  //     setErr(e);
  //   }
  // };

  // useEffect(() => {
  //   startWatching();
  // }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {/*<NavigationEvents onWillFocus={() => console.log('LEAVING')} />*/}
      {err ? <Text>Please enable location sercices</Text> : null}
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);