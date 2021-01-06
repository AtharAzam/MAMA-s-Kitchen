import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import NavBar from '../../../Component/NavBar';
import ChatRoomCard from '../../../Component/ChatRoomCard';

export default class Chat extends Component {
  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
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
                <Text style={styles.kitchenNameTextStyle}>Chat Room</Text>
              </View>
              <View>
                <Image
                  source={require('../../../Assets/BellIcon.png')}
                  style={styles.bellIconStyle}
                />
              </View>
            </View>
            <View
              style={{
                height: 2,
                width: '100%',
                backgroundColor: '#E8E8E8',
                marginBottom: 5,
              }}
            />
          </View>
          <ChatRoomCard pr={this.props.navigation} Chat={true} />
          <ChatRoomCard Chat={true} />
        </ScrollView>
        <NavBar pr={this.props.navigation} Chat={true} />
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
});
