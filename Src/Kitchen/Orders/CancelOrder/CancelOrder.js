import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class CancelOrder extends Component {
  render() {
    return (
      <View style={styles.backgroundColor}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 5,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OrderScreen')}>
              <Image
                source={require('../../../../Assets/BackBtnImg.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('')}>
              <Image
                source={require('../../../../Assets/PencilIcon.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginBottom: 10,
            flex: 1,
          }}>
          <View>
            <Text style={styles.cancelOrder}>Cancel Order</Text>
          </View>
          <View>
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 30,
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={require('../../../../Assets/FoodImage.png')}
                  style={{height: 300, width: 270, borderRadius: 10}}
                />
              </View>
              <View>
                <View style={{marginVertical: 5, marginHorizontal: 25}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>Price</Text>
                  <Text style={{fontSize: 15}}>300 RS</Text>
                </View>
                <View style={{marginHorizontal: 25, marginVertical: 40}}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    Order no.
                  </Text>
                  <Text style={{fontSize: 15}}>100219</Text>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 20}}>
              <View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Items:</Text>
                </View>
                <View style={{top: 15}}>
                  <Text style={{fontSize: 18}}>Chicken Shawarma</Text>
                  <Text style={{fontSize: 18}}>Chicken Karhai</Text>
                </View>
              </View>
              <View>
                <View style={{marginVertical: 50}}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Reason</Text>
                </View>
                <View style={{top: -35}}>
                  <Text style={{fontSize: 18}}>
                    Simple and dummy textSimple and dummy textSimple and dummy
                    textSimple and dummy textSimple and dummy text
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  cancelOrder: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 10,
    textAlign: 'center',
  },
});
