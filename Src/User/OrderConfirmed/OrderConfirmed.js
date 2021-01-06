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

export default class OrderConfirmed extends Component {
  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
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
                    this.props.navigation.navigate('OrderConformation')
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
                <Text style={styles.kitchenNameTextStyle}>Order Placed</Text>
              </View>
            </View>
            <View>
              <Image
                source={require('../../../Assets/OrderConfirmed.png')}
                style={styles.QualityCheckStyle}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
                justifyContent: 'center',
              }}>
              <Text style={styles.extraInstructionTxtStyle}>
                Congratulations! Your order is placed. Will be delivered in an
                hour
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                justifyContent: 'center',
              }}>
              <Text style={styles.orderNoStyle}>Order No: 1002030</Text>
            </View>
            <View style={{marginVertical: 10, marginHorizontal: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  paddingTop: 10,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>Items</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Text style={{fontWeight: '600', fontSize: 16}}>
                    Chicken Shwarma x2
                  </Text>
                </View>
              </View>
              <View style={{alignItems: 'flex-end', flex: 1}}>
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Chicken Karhai x2
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>
                    Payment method
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Text style={{fontWeight: '600', fontSize: 16}}>
                    Cash on delivery
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>Total</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>RS. 200</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View style={{justifyContent: 'flex-start'}}>
                  <Text style={{fontWeight: '700', fontSize: 16}}>Adress</Text>
                </View>
                <View style={{alignItems: 'flex-end', flex: 1}}>
                  <Text style={{fontWeight: '600', fontSize: 16}}>Home</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => this.props.navigation.navigate('CancelOrderUser')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 16,
                  color: '#707070',
                  borderBottomWidth: 1.5,
                  borderColor: '#000000',
                }}>
                Cancel Order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}
              onPress={() =>
                this.props.navigation.navigate('ExtraInstructionToRider')
              }>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 16,
                  color: '#707070',
                  borderBottomWidth: 1.5,
                  borderColor: '#000000',
                }}>
                Get in touch with rider
              </Text>
            </TouchableOpacity>
          </View>
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
  QualityCheckStyle: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 30,
  },
});
