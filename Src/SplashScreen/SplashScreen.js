import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../Assets/SplashScreenImg.png')}
          style={styles.backgroundImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
});
