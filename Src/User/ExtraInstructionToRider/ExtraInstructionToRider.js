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

export default class ExtraInstructionToRider extends Component {
  constructor() {
    super();
    this.state = {
      riderInstruction: '',
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
                      this.props.navigation.navigate(
                        'CheckOutCashOnDeliveryOrCard',
                      )
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
                  }}>
                  <Text style={styles.kitchenNameTextStyle}>Send Rider</Text>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 5,
                  justifyContent: 'center',
                }}>
                <Text style={styles.orderNoStyle}>Order No: 1002030</Text>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  justifyContent: 'center',
                }}>
                <Text style={styles.extraInstructionTxtStyle}>
                  Add in any extra instructions for the rider:
                </Text>
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.riderInstruction}
                  placeholder="Instruction"
                  onChangeText={(riderInstruction) =>
                    this.setState(riderInstruction)
                  }
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
                    this.props.navigation.navigate('OrderConformation')
                  }>
                  <Text style={{textAlign: 'center', fontSize: 16, padding: 5}}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={require('../../../Assets/ScooterImg.png')}
                  style={styles.ScotterImgStyle}
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
  kitchenNameTextStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  BackBtnImgStyle: {
    height: 40,
    width: 40,
    top: -3,
  },

  orderNoStyle: {
    fontWeight: '600',
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },

  extraInstructionTxtStyle: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },

  inputFiledStyle: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C2C2',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  ScotterImgStyle: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginVertical: 80,
  },
});
