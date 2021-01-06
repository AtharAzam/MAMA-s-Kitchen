import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class KitchenCard extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          width: '100%',
          marginHorizontal: 10,
          height: 195,
        }}>
        <View
          style={{
            height: 185,
            width: '95%',
            borderRadius: 10,
            backgroundColor: 'white',
            elevation: 10,
            flexDirection: 'row',
          }}>
          <View style={{padding: 10}}>
            <Image
              source={require('../Assets/FoodImage.png')}
              style={{height: 120, width: 100, borderRadius: 10}}
            />
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 3,
                paddingLeft: 5,
              }}>
              <Image
                source={require('../Assets/FilledStar.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../Assets/FilledStar.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../Assets/FilledStar.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../Assets/FilledStar.png')}
                style={{height: 15, width: 15}}
              />
              <Image
                source={require('../Assets/UnFilledStar.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 13,
                paddingTop: 1,
                paddingLeft: 5,
              }}>
              Kitchen Name
            </Text>
          </View>
          <View style={{paddingTop: 15, width: '60%'}}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Dish Name</Text>
              <View>
                <Text>
                  simple dummy text simple dummy text simple dummy text simple
                  dummy text
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', padding: 10}}>
            <View style={{alignSelf: 'flex-end'}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../Assets/ThreeHorizontalBarsImg.png')}
                  style={{height: 20, width: 20}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              {this.props.KitchenMenuViewForUser ? (
                <TouchableOpacity
                  style={{top: -20}}
                  onPress={() =>
                    this.props.pr.navigate('KitchenMenuViewForUser')
                  }>
                  <Image
                    source={require('../Assets/RightArrow.png')}
                    style={{height: 20, width: 40}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{top: -20}}
                  onPress={() =>
                    this.props.pr.navigate('ExpandedMenuOfKitchen')
                  }>
                  <Image
                    source={require('../Assets/RightArrow.png')}
                    style={{height: 20, width: 40}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
