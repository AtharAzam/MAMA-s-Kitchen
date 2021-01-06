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

export default class CheckOutCashOnDeliveryOrCard extends Component {
  constructor() {
    super();
    this.state = {
      cardNo: '',
      nameonCard: '',
      expiryDate: '',
      cVV: '',
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  functionOne = () => {
    backgroundColor: '#FFCC00';
  };
  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View style={{marginHorizontal: 10, paddingTop: 20}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View style={{alignSelf: 'flex-start', top: 4}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('ExpandedMenuOfKitchen')
                    }>
                    <Image
                      source={require('../../../Assets/BackBtnImg.png')}
                      style={styles.BackBtnImgStyle}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center', flex: 1, right: 20}}>
                  <Text style={styles.checkOutStyle}>Checkout</Text>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginVertical: 30}}>
              <Text style={{fontSize: 18, fontWeight: '700'}}>Items</Text>

              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                }}>
                <View style={{width: '40%'}}>
                  <Text style={{fontSize: 18, paddingTop: 5}}>
                    Chicken Shawar
                  </Text>
                </View>
                <View style={{width: '30%', flexDirection: 'row'}}>
                  <View style={{marginHorizontal: 10}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#FFCC00',
                        paddingTop: 1,
                        paddingBottom: 2,
                        paddingRight: 15,
                        paddingLeft: 15,
                        borderRadius: 15,
                      }}
                      onPress={() => this.decrement()}>
                      <Text style={{fontSize: 22}}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{marginHorizontal: 10, justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '600'}}>
                      {this.state.counter}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 10}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#FFCC00',
                        paddingTop: 1,
                        paddingBottom: 2,
                        paddingRight: 15,
                        paddingLeft: 15,
                        borderRadius: 15,
                      }}
                      onPress={() => this.increment()}>
                      <Text style={{fontSize: 22}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    width: '30%',
                    paddingTop: 5,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={{fontSize: 18}}>Rs. 100</Text>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                }}>
                <View style={{paddingTop: 5, width: '40%'}}>
                  <Text style={{fontSize: 18}}>
                    Chicken Karhai and rice kabab
                  </Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    marginHorizontal: 10,
                    flexDirection: 'row',
                  }}>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#FFCC00',
                        paddingTop: 1,
                        paddingBottom: 2,
                        paddingRight: 15,
                        paddingLeft: 15,
                        borderRadius: 15,
                      }}
                      onPress={() => this.decrement()}>
                      <Text style={{fontSize: 22}}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{marginHorizontal: 10, justifyContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: '600'}}>
                      {this.state.counter}
                    </Text>
                  </View>
                  <View style={{marginHorizontal: 10}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#FFCC00',
                        paddingTop: 1,
                        paddingBottom: 2,
                        paddingRight: 15,
                        paddingLeft: 15,
                        borderRadius: 15,
                      }}
                      onPress={() => this.increment()}>
                      <Text style={{fontSize: 22}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: 5,
                    width: '30%',

                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={{fontSize: 18}}>Rs. 100</Text>
                </View>
              </View>

              <View
                style={{
                  marginVertical: 20,
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '700', fontSize: 18}}>Total</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={{fontWeight: '700', fontSize: 18}}>Rs. 200</Text>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '700', fontSize: 18}}>Address</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontWeight: '600', fontSize: 18, left: -5}}>
                    Home
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../Assets/PencilIcon.png')}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 20,
                  flex: 1,
                }}>
                <Text style={{fontWeight: '700', fontSize: 18}}>
                  Payment method
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '600', fontSize: 18, top: -8}}>
                    Cash on delivery
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderColor: '#FFCC00',
                      borderWidth: 2,
                      width: 25,
                      borderRadius: 8,
                      height: 25,
                    }}></TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '600', fontSize: 18, top: -8}}>
                    Credit/Debit card
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderColor: '#FFCC00',
                      borderWidth: 2,
                      width: 25,
                      borderRadius: 8,
                      height: 25,
                    }}
                    onPress={() => this.functionOne()}></TouchableOpacity>
                </View>
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.cardNo}
                  placeholder="Card no"
                  onChangeText={(cardNo) => this.setState(cardNo)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.nameonCard}
                  placeholder="Name on Card"
                  onChangeText={(nameonCard) => this.setState(nameonCard)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '40%'}}>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputFiledStyle}
                    autoCorrect={false}
                    value={this.state.expiryDate}
                    placeholder="Expiry date"
                    onChangeText={(expiryDate) => this.setState(expiryDate)}
                  />
                </View>
                <View style={{width: '40%'}}>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputFiledStyle}
                    autoCorrect={false}
                    value={this.state.cVV}
                    placeholder="CVV"
                    onChangeText={(cVV) => this.setState(cVV)}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 15,
                }}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderColor: '#FFCC00',
                      borderWidth: 2,
                      width: 25,
                      borderRadius: 8,
                      height: 25,
                    }}></TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 15,
                      textAlign: 'center',
                    }}>
                    Save Card
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  backgroundColor: '#FFCC00',
                }}
                onPress={() =>
                  this.props.navigation.navigate('ExtraInstructionToRider')
                }>
                <Text style={{textAlign: 'center', fontSize: 16, padding: 5}}>
                  Place Order
                </Text>
              </TouchableOpacity>
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

  BackBtnImgStyle: {
    height: 40,
    width: 40,
    top: -5,
  },

  checkOutStyle: {
    fontWeight: '600',
    fontSize: 28,
    textAlign: 'center',
  },
  inputFiledStyle: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#C9C2C2',
    top: -1,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
  },
});
