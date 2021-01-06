import React, {useState, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class SignUpUser extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      mobileNo: '',
      emailAdress: '',
      deliveryAdress: '',
      password: '',
      confirmPassword: '',
    };
  }

  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View>
              <View style={{marginBottom: 10, alignItems: 'center'}}>
                <Text style={styles.textStyleSignUpAsUser}>
                  Sign up as user
                </Text>
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.fullName}
                  placeholder="Full Name"
                  onChangeText={(fullName) => this.setState(fullName)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.mobileNo}
                  keyboardType={'numeric'}
                  placeholder="Mobile No."
                  onChangeText={(mobileNo) => this.setState(mobileNo)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.emailAdress}
                  placeholder="Email Address"
                  onChangeText={(emailAdress) => this.setState(emailAdress)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.deliveryAdress}
                  placeholder="Delivery Address"
                  onChangeText={(deliveryAdress) =>
                    this.setState(deliveryAdress)
                  }
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.password}
                  placeholder="Passowrd"
                  onChangeText={(password) => this.setState(password)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.confirmPassword}
                  placeholder="Confirm password"
                  onChangeText={(confirmPassword) =>
                    this.setState(confirmPassword)
                  }
                />
              </View>
              <View style={{marginHorizontal: 20, marginVertical: 20}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}
                  style={styles.CreateAccountBtnStyle}>
                  <Text style={styles.CreateAccountButtonStyle}>
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  top: 10,
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
                  <Text
                    style={{textAlign: 'center', fontSize: 14, marginTop: -10}}>
                    OR
                  </Text>
                </View>

                <Image
                  source={require('../../Assets/Line.png')}
                  style={{width: 150, height: 2, marginHorizontal: 15}}
                />
              </View>
              <View style={styles.signUpWithText}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Sign up with
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 80,
                  top: -10,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('http://Facebook.com')}>
                  <Image
                    source={require('../../Assets/FaceBookIcon.png')}
                    style={{width: 80, height: 80}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => Linking.openURL('http://Gmail.com')}>
                  <Image
                    source={require('../../Assets/GmailIcon.png')}
                    style={{width: 80, height: 80}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },
  textStyleSignUpAsUser: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 40,
    textAlign: 'center',
  },
  inputFiledStyle: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#C9C2C2',
    marginHorizontal: 30,
    marginVertical: 8,
  },
  CreateAccountBtnStyle: {
    width: '100%',
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    padding: 10,
    marginRight: 30,
  },
  CreateAccountButtonStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  signUpWithText: {
    alignSelf: 'center',
    marginVertical: 30,
  },
});
