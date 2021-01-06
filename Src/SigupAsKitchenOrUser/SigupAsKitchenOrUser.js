import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class SigupAsKitchenOrUser extends Component {
  render() {
    return (
      <View style={styles.backgroundColor}>
        <View style={{marginBottom: 10, alignItems: 'center'}}>
          <Text style={styles.textStyleSignUpAs}>Sign up as:</Text>
        </View>

        <Image
          source={require('../../Assets/EatingSalad.png')}
          style={styles.eatingSaladStyle}
        />

        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUpUser')}
            style={styles.loginBtnStyle}>
            <Text style={styles.loginButtonStyle}>Foodie</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../Assets/Line.png')}
            style={{width: 150, height: 2, marginHorizontal: 15}}
          />

          <View>
            <Text style={{textAlign: 'center', fontSize: 14, marginTop: -10}}>
              OR
            </Text>
          </View>

          <Image
            source={require('../../Assets/Line.png')}
            style={{width: 150, height: 2, marginHorizontal: 15}}
          />
        </View>

        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUpKitchen')}
            style={styles.loginBtnStyle}>
            <Text style={styles.loginButtonStyle}>Kitchen</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/CHEF.png')}
            style={styles.CHEFStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  textStyleSignUpAs: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 40,
    textAlign: 'center',
  },

  loginBtnStyle: {
    width: '100%',
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    padding: 10,
  },

  loginButtonStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },

  eatingSaladStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  CHEFStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    top: 10,
  },
});
