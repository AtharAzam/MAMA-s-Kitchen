import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class Login extends Component {
  state = {
    phoneNo: 0,
    pass: 0,
  };
  render() {
    return (
      <View style={styles.backgroundColor}>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={{marginBottom: 30, alignItems: 'center'}}>
            <Text style={styles.welcomeTextStyle}>Welcome back!</Text>
          </View>

          <View style={{paddingVertical: 50, marginHorizontal: 30}}>
            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.phoneNo}
              placeholder="Mobile No."
              keyboardType={'numreic'}
              onChangeText={(phoneNo) => this.setPhoneNo(phoneNo)}
            />

            <TextInput
              style={styles.inputField}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.pass}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(pass) => this.setPass(pass)}
            />
          </View>

          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('UserDashboard')}
                style={styles.loginBtnStyle}>
                <Text style={styles.loginButtonStyle}>User</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('KitchenDashboard')
                }
                style={styles.loginBtnStyle}>
                <Text style={styles.loginButtonStyle}>Kitchen</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SigupAsKitchenOrUser')
                }>
                <Text style={styles.createAccountTextStyle}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ForgetPassword')
                }>
                <Text style={styles.createAccountTextStyle}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              source={require('../../Assets/FamilyMeal.png')}
              style={styles.familyMeal1Img}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  welcomeTextStyle: {
    marginBottom: 40,
    fontWeight: '600',
    fontSize: 28,
    paddingTop: 60,
  },

  inputField: {
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: '#C9C2C2',
    fontSize: 16,
  },

  loginBtnStyle: {
    width: '40%',
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    padding: 10,
  },

  createAccountTextStyle: {
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 40,
    fontSize: 14,
    borderBottomWidth: 1,
  },

  loginButtonStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },

  familyMeal1Img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 80,
  },
});
