import React from 'react';
import { Linking } from 'react-native';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const { height, width } = Dimensions.get('window');
//const linktoMap = linkToMap.bin();

const Home = (props) => {

  const onHomePress = () => {
    Alert.alert(
      "Hi!!",
      "Ya te ecuentras en Home",
      [
        { text: "Ok", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  const linkToMap = () => {
    Linking.openURL('https://goo.gl/maps/BpFchi3x2ZS3ZT5T8')
  }

  return (
    <SafeAreaView>
      <ImageBackground
        style={{ height}}
        source={require('../assets/images/Lamp.jpg')}
      >
        <View style={{ flexDirection: 'column', height, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => onHomePress()}
              style={styles.button}
            >
              <Text style={styles.text}>
                Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button}
              onPress={() => props.navigation.navigate('Profile')}
              >
              <Text style={styles.text}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => props.navigation.navigate('Posts')}
              >
              <Text style={styles.text}>
                Restaurants
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button}
              onPress={() => linkToMap()}
              >
              <Text style={styles.text}>
                GuiaMap
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    margin: width / 30,
    height: width / 3.5,
    width: width / 2.3,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(28, 89, 96, .7)',
    zIndex: 1
  }
});

export default Home;