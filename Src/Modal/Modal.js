import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {TextInput} from 'react-native-gesture-handler';

export default class Modal extends Component {
  componentDidMount() {
    this.onOpen();
  }

  onOpen = () => {
    this.modal.open();
  };

  CloseModalNavigateToAddDish = () => {
    this.props.closeModal();
    this.props.pr.navigate('AddADish');
  };

  CloseModalNavigateToAddDeal = () => {
    this.props.closeModal();
    this.props.pr.navigate('AddADeal');
  };
  CloseModa = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <Modalize
        ref={(ref) => {
          this.modal = ref;
        }}
        onClosed={() => {
          this.props.closeModal();
        }}
        handlePosition="inside"
        modalStyle={{
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 6},
          shadowOpacity: 0.45,
          shadowRadius: 16,
          paddingTop: 20,
          height: '600%',
        }}>
        <View style={{flex: 1}}>
          {this.props.KitchenDashboard ? (
            <View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginVertical: 280,
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: '#E9E7DE',
                  borderRadius: 15,
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    backgroundColor: '#FFCC00',
                    borderRadius: 20,
                    justifyContent: 'center',
                    paddingLeft: 100,
                    paddingRight: 100,
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginVertical: 20,
                  }}
                  onPress={() => this.CloseModalNavigateToAddDish()}>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>
                    Add a Dish
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    backgroundColor: '#FFCC00',
                    borderRadius: 20,
                    justifyContent: 'center',
                    paddingLeft: 100,
                    paddingRight: 100,
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginVertical: 20,
                  }}
                  onPress={() => this.CloseModalNavigateToAddDeal()}>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>
                    Add a Deal
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <View
                style={{
                  flex: 1,
                  borderRadius: 15,
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    flex: 1,
                  }}
                  onPress={() => this.CloseModa()}>
                  <Image
                    source={require('../../Assets/XImg.png')}
                    style={{height: 25, width: 25}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{alignContent: 'center', flex: 1, marginVertical: 70}}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '700',
                    }}>
                    Order Cancelled
                  </Text>
                </View>
                <View
                  style={{flex: 1, marginVertical: 20, marginHorizontal: 60}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Any amount poid, would be refunded to your to your account
                  </Text>
                </View>
                <View style={{marginVertical: 20, alignSelf: 'center'}}>
                  <Image
                    source={require('../../Assets/SadFaceImg.png')}
                    style={{height: 350, width: 350}}
                  />
                </View>
                <View
                  style={{flex: 1, marginVertical: 20, marginHorizontal: 60}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '600',
                    }}>
                    Fell Free to order someting else
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </Modalize>
    );
  }
}

const styles = StyleSheet.create({});
