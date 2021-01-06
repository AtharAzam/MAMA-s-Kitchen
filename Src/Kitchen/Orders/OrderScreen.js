import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SwipeableViews from 'react-swipeable-views-native';
import NavBar from '../../../Component/NavBar';
import ChatRoomCard from '../../../Component/ChatRoomCard';

export default class OrderScreen extends Component {
  state = {
    index: 0,
  };
  handleChange = (value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginHorizontal: 20,
                  paddingTop: 20,
                }}>
                <View>
                  <Image
                    source={require('../../../Assets/ThreeBars.png')}
                    style={styles.threeBarsImgStyle}
                  />
                </View>
                <View>
                  <Text style={styles.kitchenNameTextStyle}>Orders</Text>
                </View>
                <View>
                  <Image
                    source={require('../../../Assets/BellIcon.png')}
                    style={styles.bellIconStyle}
                  />
                </View>
              </View>
              <Text style={styles.manageYourOrdersStyle}>
                Manage your orders
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginTop: 10,
                  justifyContent: 'center',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                }}>
                <View
                  style={[
                    this.state.index === 0
                      ? styles.activeSwipable
                      : styles.unActiveSwipable,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleChange(0);
                    }}
                    style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../Assets/GreenCircle.png')}
                      style={{height: 14, width: 13, marginVertical: 4}}
                    />
                    <Text style={{paddingLeft: 4}}>Request</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={[
                    this.state.index === 1
                      ? styles.activeSwipable
                      : styles.unActiveSwipable,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleChange(1);
                    }}
                    style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../Assets/YellowCircle.png')}
                      style={{height: 13, width: 13, marginVertical: 4}}
                    />
                    <Text style={{paddingLeft: 4}}>In Procress</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={[
                    this.state.index === 2
                      ? styles.activeSwipable
                      : styles.unActiveSwipable,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleChange(2);
                    }}
                    style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../Assets/LightGrayCircle.png')}
                      style={{height: 13, width: 13, marginVertical: 4}}
                    />
                    <Text style={{paddingLeft: 4}}>Completed</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    this.state.index === 3
                      ? styles.activeSwipable
                      : styles.unActiveSwipable,
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleChange(3);
                    }}
                    style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../../Assets/RedCircle.png')}
                      style={{height: 13.5, width: 13, marginVertical: 4}}
                    />
                    <Text style={{paddingLeft: 4}}>Cancelled</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* <View
                style={{
                  height: 2,
                  width: '100%',
                  
                  top: -1,
                }}
              /> */}

              <SwipeableViews
                index={this.state.index}
                onChangeIndex={this.handleChangeIndex}
                style={styles.slideContainer}>
                <View style={[styles.slide, styles.slide2]}>
                  <ChatRoomCard
                    pr={this.props.navigation}
                    orderNo={true}
                    TotalRS={true}
                    DeclineAcceptBtn={true}
                  />
                </View>
                <View style={[styles.slide, styles.slide2]}>
                  <ChatRoomCard
                    pr={this.props.navigation}
                    orderNo={true}
                    TotalRS={true}
                    OrderIsPrepared={true}
                    RightArrow={true}
                    RightArrowInProgress={true}
                  />
                </View>
                <View style={[styles.slide, styles.slide2]}>
                  <ChatRoomCard
                    pr={this.props.navigation}
                    orderNo={true}
                    TotalRS={true}
                  />
                </View>
                <View style={[styles.slide, styles.slide2]}>
                  <ChatRoomCard
                    pr={this.props.navigation}
                    orderNo={true}
                    TotalRS={true}
                    ReasonCanceling={true}
                    RightArrow={true}
                  />
                </View>
              </SwipeableViews>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
        <NavBar pr={this.props.navigation} OrderScreen={true} />
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
  threeBarsImgStyle: {
    height: 50,
    width: 40,
    top: -10,
  },
  bellIconStyle: {
    height: 30,
    width: 30,
  },
  manageYourOrdersStyle: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.7,
  },

  activeSwipable: {
    borderBottomWidth: 3,
    top: -1,
  },
  unActiveSwipable: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 3,
    top: -1,
  },
});
