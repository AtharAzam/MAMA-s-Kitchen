import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class SignUpKitchen extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      mobileNo: '',
      emailAdress: '',
      kitchenAdress: '',
      nic: '',
      password: '',
      confirmPassword: '',
      kitchenName: '',
      kitchenPunchLine: '',
    };
  }

  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View>
              <View style={{marginBottom: 10, alignItems: 'center'}}>
                <Text style={styles.textStyleSignUpAsKitchen}>
                  Sign up as Kitchen
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
                  value={this.state.kitchenAdress}
                  placeholder="Kitchen Address"
                  onChangeText={(kitchenAdress) => this.setState(kitchenAdress)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.nic}
                  placeholder="NIC"
                  onChangeText={(nic) => this.setState(nic)}
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
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.kitchenName}
                  placeholder="Kitchen Name"
                  onChangeText={(kitchenName) => this.setState(kitchenName)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.kitchenPunchLine}
                  placeholder="Add a punch line for your kitchen"
                  onChangeText={(kitchenPunchLine) =>
                    this.setState(kitchenPunchLine)
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
  textStyleSignUpAsKitchen: {
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
    marginVertical: 6,
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
