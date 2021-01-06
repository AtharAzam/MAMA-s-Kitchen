import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class CancelOrderUser extends Component {
  constructor() {
    super();
    this.state = {
      reason: '',
      OtherReason: '',
    };
  }
  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  paddingTop: 20,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('OrderConfirmed')
                    }>
                    <Image
                      source={require('../../../Assets/BackBtnImg.png')}
                      style={styles.BackBtnImgStyle}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    flex: 1,
                    right: 20,
                    paddingTop: 30,
                  }}>
                  <Text style={styles.headingStyle}>
                    Cancel Order no: 10092345
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  justifyContent: 'center',
                  marginHorizontal: 50,
                }}>
                <Text style={styles.extraInstructionTxtStyle}>
                  Please state the reason of cancelling the order:
                </Text>
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.reason}
                  placeholder="Choose Reason"
                  onChangeText={(reason) => this.setState(reason)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.OtherReason}
                  placeholder="Other"
                  onChangeText={(OtherReason) => this.setState(OtherReason)}
                />
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  marginVertical: 10,
                  paddingTop: 20,
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    backgroundColor: '#FFCC00',
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('UserDashboard')
                  }>
                  <Text style={{textAlign: 'center', fontSize: 16, padding: 5}}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={require('../../../Assets/ReportAnalysisImg.png')}
                  style={styles.CancelOrderImgStyle}
                />
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
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  headingStyle: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  BackBtnImgStyle: {
    height: 40,
    width: 40,
    top: -3,
  },

  extraInstructionTxtStyle: {
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.8,
  },

  inputFiledStyle: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C2C2',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  CancelOrderImgStyle: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginVertical: 40,
  },
});
