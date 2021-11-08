import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Image, Animated} from 'react-native';
import Logo from './assets/png-clipart-weather-and-climate-weather-forecasting-weather-text-cloud.png';

const App = () => {
  const [show] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(show, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#C1ECF8"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Image style={styles.image} source={Logo} />
        <Animated.Text style={[styles.text, {opacity: show}]}>
          MELT
        </Animated.Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D4A5C',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#C1ECF8',
    fontSize: 40,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
export default App;
