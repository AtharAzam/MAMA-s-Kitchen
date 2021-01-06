import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import ChatRoomCard from '../../../Component/ChatRoomCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {TextInput} from 'react-native-paper';

export default class MainChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      chatText: '',
    };
  }

  setChatText() {}
  render() {
    return (
      <View style={styles.backgroundColor}>
        <KeyboardAwareScrollView style={styles.container}>
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
                  marginBottom: 10,
                }}
              />
            </View>
            <View>
              <ChatRoomCard pr={this.props.navigation} />
            </View>
            <View
              style={{
                backgroundColor: '#FFCC00',
                width: '70%',
                marginHorizontal: 15,
                marginVertical: 15,
                borderRadius: 5,
                elevation: 8,
              }}>
              <Text style={{padding: 10}}>
                Simple and dummy text Simple and dummy text Simple and dummy
                text Simple and dummy text Simple and dummy text Simple and
                dummy text
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
                backgroundColor: '#FFFFFF',
                width: '70%',
                marginHorizontal: 15,
                marginVertical: 15,
                borderRadius: 5,
                elevation: 8,
              }}>
              <Text style={{padding: 10}}>
                Simple and dummy text Simple and dummy text Simple and dummy
                text Simple and dummy text Simple and dummy text Simple and
                dummy text
              </Text>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 1,
              borderTopColor: '#DADADA',
              paddingLeft: 10,
              paddingRight: 10,
              height: 40,
              backgroundColor: '#FFFFFF',
            }}>
            <View>
              <Image
                source={require('../../../Assets/AttachmentIcon.png')}
                style={{width: 30, height: 30, top: 5}}
              />
            </View>
            <View style={{alignSelf: 'flex-end'}}>
              <TextInput
                style={styles.inputFiledStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.chatText}
                placeholder="Write a message..."
                placeholderTextColor="#ffffff"
                underlineColorAndroid="#ffffff"
                onChangeText={(chatText) => setChatText(chatText)}
              />
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
                paddingTop: 5,
                paddingLeft: 10,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../../Assets/MessegeSendArrow.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
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
  inputFiledStyle: {
    fontSize: 14,
    width: '210%',
    borderColor: '#FFFFFF',
    height: 39,
    backgroundColor: '#FFFFFF',
  },
});
