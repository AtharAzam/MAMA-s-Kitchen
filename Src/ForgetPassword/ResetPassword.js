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

export default class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confirmPassword: '',
    };
  }
  render() {
    return (
      <View style={styles.backgroundColor}>
        <KeyboardAwareScrollView style={styles.container}>
          <View>
            <View style={{marginBottom: 10, alignItems: 'center'}}>
              <Text style={styles.ResetPasswordTextStyle}>Reset Password</Text>
            </View>
            <View style={{marginBottom: 30, alignItems: 'center'}}>
              <Text style={styles.ChoosePasswordTextStyle}>
                Enter new pssword for your{'\n'}account
              </Text>
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
            <View style={{marginHorizontal: 20, marginVertical: 40}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={styles.submitBtnStyle}>
                <Text style={styles.submitButtonStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require('../../Assets/ResetPasswordImg.png')}
                style={styles.ResetPasswordImg}
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

  ResetPasswordTextStyle: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 40,
    textAlign: 'center',
  },
  ChoosePasswordTextStyle: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 20,
    paddingTop: 30,
    textAlign: 'center',
  },

  inputFiledStyle: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#C9C2C2',
    marginHorizontal: 30,
    marginVertical: 10,
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
  ResetPasswordImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 80,
    top: -10,
  },
});
