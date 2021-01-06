import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      resetPasswordMobileNo: '',
      resetPasswordEmailAdress: '',
      thirdNumber: '',
      fourthNumber: '',
    };
  }
  render() {
    return (
      <View style={styles.backgroundColor}>
        <KeyboardAwareScrollView style={styles.container}>
          <View>
            <View style={{marginBottom: 10}}>
              <Text style={styles.forgetPasswordText}>Forgot Password</Text>
            </View>
            <View style={{marginBottom: 30}}>
              <Text style={styles.textBelowforgetPassword}>
                To reset your password enter either your mobile no or email
                adress and we will allow you to reset your password
              </Text>
            </View>
            <View style={{paddingVertical: 20, marginHorizontal: 30}}>
              <TextInput
                autoCapitalize="none"
                style={styles.inputFieldStyle}
                autoCorrect={false}
                value={this.state.resetPasswordMobileNo}
                placeholder="Mobile No"
                onChangeText={(resetPasswordMobileNo) =>
                  this.setState(resetPasswordMobileNo)
                }
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 40,
                marginVertical: 30,
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../Assets/Line.png')}
                style={{width: 120, height: 2, marginHorizontal: 15}}
              />

              <View>
                <Text
                  style={{textAlign: 'center', fontSize: 14, marginTop: -10}}>
                  OR
                </Text>
              </View>

              <Image
                source={require('../../Assets/Line.png')}
                style={{width: 120, height: 2, marginHorizontal: 15}}
              />
            </View>
            <View style={{marginHorizontal: 30, top: -10}}>
              <TextInput
                autoCapitalize="none"
                style={styles.inputFieldStyle}
                autoCorrect={false}
                value={this.state.resetPasswordEmailAdress}
                placeholder="Email Adress"
                onChangeText={(resetPasswordEmailAdress) =>
                  this.setState(resetPasswordEmailAdress)
                }
              />
            </View>
            <View style={{marginHorizontal: 20, marginVertical: 20, top: 10}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ForgetPasswordVerification')
                }
                style={styles.submitBtnStyle}>
                <Text style={styles.submitButtonStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require('../../Assets/ForgetPasswordImg.png')}
                style={styles.ForgetPasswordImg}
              />
            </View>
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
  forgetPasswordText: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 40,
    textAlign: 'center',
  },
  textBelowforgetPassword: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 20,
    paddingTop: 30,
    textAlign: 'center',
  },
  inputFieldStyle: {
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: '#C9C2C2',
    fontSize: 18,
  },

  submitBtnStyle: {
    width: '100%',
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    padding: 10,
    marginRight: 30,
  },
  submitButtonStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  ForgetPasswordImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 80,
  },
});
