import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class ReviewCard extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.pr.navigate('MainChatRoom')}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 8,
          }}>
          <View
            style={{
              height: 130,
              width: '100%',
              borderRadius: 10,
              backgroundColor: 'white',
              elevation: 10,
              flexDirection: 'row',
              padding: 10,
            }}>
            <View style={{padding: 10, marginHorizontal: 5, flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>UserName</Text>
              <View style={{flexDirection: 'row', marginVertical: 3}}>
                <Image
                  source={require('../Assets/FilledStar.png')}
                  style={{height: 20, width: 20}}
                />
                <Image
                  source={require('../Assets/FilledStar.png')}
                  style={{height: 20, width: 20}}
                />
                <Image
                  source={require('../Assets/FilledStar.png')}
                  style={{height: 20, width: 20}}
                />
                <Image
                  source={require('../Assets/FilledStar.png')}
                  style={{height: 20, width: 20}}
                />
                <Image
                  source={require('../Assets/UnFilledStar.png')}
                  style={{height: 20, width: 20}}
                />
              </View>
              <Text>
                simple dummy text simple dummy text simple dummy text simple
                dummy text
              </Text>
            </View>
            <View>
              <Image
                source={require('../Assets/ThreeHorizontalBarsImg.png')}
                style={{height: 30, width: 30}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({});
