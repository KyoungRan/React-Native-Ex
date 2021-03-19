import '../_mockLocation';
import React, { useContext, useCallback  } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
// import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  // same below: const [err] = useLocation((location) => addLocation(location));
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  // const [err] = useLocation(isFocused, (location) => {
  //   addLocation(location, state.recording);
  // });
  const [err] = useLocation(isFocused || recording, callback);

  // console.log(isFocused);
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
      <TrackForm />
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);