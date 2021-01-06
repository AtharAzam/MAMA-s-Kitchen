import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {block} from 'react-native-reanimated';

export default class ChatRoomCard extends Component {
  render() {
    return (
      <View>
        {this.props.Chat ? (
          <TouchableOpacity
            onPress={() => this.props.pr.navigate('MainChatRoom')}>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 4,
              }}></View>
            <View
              style={{
                height: 140,
                width: '100%',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 10,
                flexDirection: 'row',
                padding: 10,
                bottom: 9,
              }}>
              <View>
                <Image
                  source={require('../Assets/FoodImage.png')}
                  style={{height: 90, width: 90, borderRadius: 10}}
                />
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  flex: 1,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>UserName</Text>
                <Text style={{fontSize: 16, top: 1}}>
                  simple dummy text simple dummy text simple dummy text simple
                  dummy text
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                }}>
                <Image
                  source={require('../Assets/ThreeHorizontalBarsImg.png')}
                  style={{
                    height: 30,
                    width: 30,
                    left: 5,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          <View>
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                marginHorizontal: 10,
                marginVertical: 4,
              }}></View>

            <View
              style={{
                height: 145,
                width: '100%',
                borderRadius: 10,
                backgroundColor: 'white',
                elevation: 10,
                padding: 10,
                bottom: 9,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    source={require('../Assets/FoodImage.png')}
                    style={{height: 90, width: 90, borderRadius: 10}}
                  />
                  {this.props.orderNo ? (
                    <Text style={{fontSize: 9, top: 5, fontWeight: 'bold'}}>
                      Order no:123456
                    </Text>
                  ) : (
                    <Text />
                  )}
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    UserName
                  </Text>
                  <Text style={{fontSize: 13, top: 1}}>
                    simple dummy text simple dummy text simple dummy text simple
                    dummy text
                  </Text>
                  {this.props.TotalRS ? (
                    <Text
                      style={{
                        fontSize: 14,
                        marginVertical: 3,
                        fontWeight: 'bold',
                      }}>
                      Total: Rs 300
                    </Text>
                  ) : (
                    <View />
                  )}
                  {this.props.OrderIsPrepared ? (
                    <Text
                      style={{
                        fontSize: 13,
                        marginVertical: 2,
                        fontWeight: '700',
                      }}>
                      Order is prepared
                    </Text>
                  ) : (
                    <View>
                      {this.props.ReasonCanceling ? (
                        <View style={{flexDirection: 'row', top: 10}}>
                          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                            Reason:
                          </Text>
                          <Text style={{fontSize: 12, top: 1, left: 8}}>
                            Reason of canceling order
                          </Text>
                        </View>
                      ) : (
                        <View />
                      )}
                    </View>
                  )}
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                  }}>
                  <Image
                    source={require('../Assets/ThreeHorizontalBarsImg.png')}
                    style={{
                      height: 30,
                      width: 30,
                      left: 5,
                    }}
                  />
                </View>
              </View>
              {this.props.DeclineAcceptBtn ? (
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    top: -10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#F7F7F7',
                      borderRadius: 14,
                      paddingLeft: 18,
                      paddingRight: 18,
                      right: 10,
                      paddingBottom: 28,
                      alignContent: 'center',
                    }}>
                    <Text style={{fontSize: 15, fontWeight: '600'}}>
                      Decline
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#FFCC00',
                      borderRadius: 14,
                      paddingLeft: 18,
                      paddingRight: 18,
                      alignContent: 'center',
                      paddingBottom: 28,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                      }}>
                      Accept
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{flex: 1, marginHorizontal: 10, top: -10}}>
                  {this.props.RightArrow ? (
                    <View
                      style={{
                        flex: 1,
                        alignSelf: 'flex-end',
                      }}>
                      {this.props.RightArrowInProgress ? (
                        <TouchableOpacity
                          onPress={() => this.props.pr.navigate('')}>
                          <Image
                            source={require('../Assets/RightArrow.png')}
                            style={{height: 30, width: 50}}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={{top: -3}}
                          onPress={() => this.props.pr.navigate('CancelOrder')}>
                          <Image
                            source={require('../Assets/RightArrow.png')}
                            style={{height: 30, width: 50}}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  ) : (
                    <View />
                  )}
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({});
