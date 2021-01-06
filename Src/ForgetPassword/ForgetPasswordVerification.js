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

export default class ForgetPasswordVerification extends Component {
  constructor() {
    super();
    this.state = {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      fourthNumber: '',
    };
  }
  render() {
    return (
      <View style={styles.backgroundColor}>
        <KeyboardAwareScrollView style={styles.container}>
          <View>
            <View style={{marginBottom: 10, alignItems: 'center'}}>
              <Text style={styles.verification}>Verification</Text>
            </View>
            <View style={{marginBottom: 30, alignItems: 'center'}}>
              <Text style={styles.textBelowVerification}>
                Enter the code you received on your{'\n'}mobile number or email
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 40,
                marginVertical: 18,
              }}>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.firstNumber}
                  onChangeText={(firstNumber) => this.setState(firstNumber)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.secondNumber}
                  onChangeText={(secondNumber) => this.setState(secondNumber)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.thirdNumber}
                  onChangeText={(thirdNumber) => this.setState(thirdNumber)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.fourthNumber}
                  onChangeText={(fourthNumber) => this.setState(fourthNumber)}
                />
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginVertical: 50}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ResetPassword')}
                style={styles.submitBtnStyle}>
                <Text style={styles.submitButtonStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={require('../../Assets/VerificationCodeImg.png')}
                style={styles.VerificationCodeImg}
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

  verification: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 40,
    textAlign: 'center',
  },
  textBelowVerification: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 20,
    paddingTop: 30,
    textAlign: 'center',
  },

  inputFiledStyle: {
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#C9C2C2',
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
  VerificationCodeImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 80,
  },
});
