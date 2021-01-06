import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Assets} from 'react-navigation-stack';

export default class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFCC00',
            alignContent: 'flex-end',
            justifyContent: 'space-around',
            padding: 4,
          }}>
          <TouchableOpacity
            onPress={() => this.props.pr.navigate('OrderScreen')}>
            <Image
              source={
                this.props.OrderScreen
                  ? require('../Assets/ActiveDeliveryCarImg.png')
                  : require('../Assets/UnActiveDeliveryCarImg.png')
              }
              style={styles.navBtnStyles}
            />
            <Text style={styles.belowIconStyle}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.pr.navigate('KitchenDashboard')}>
            <Image
              source={
                this.props.Home
                  ? require('../Assets/ActiveHomeImg.png')
                  : require('../Assets/UnActiveHomeIcon.png')
              }
              style={styles.navBtnStyles}
            />

            <Text style={styles.belowIconStyle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.pr.navigate('Chat')}>
            <Image
              source={
                this.props.Chat
                  ? require('../Assets/ActiveChatIcon.png')
                  : require('../Assets/UnActiveChatIcon.png')
              }
              style={styles.navBtnStyles}
            />
            <Text style={styles.belowIconStyle}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.pr.navigate('Review')}>
            <Image
              source={require('../Assets/RattingIcon.png')}
              style={styles.navBtnStyles}
            />
            <Text style={styles.belowIconStyle}>Reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navBtnStyles: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  belowIconStyle: {
    color: '#ffffff',
  },
});
