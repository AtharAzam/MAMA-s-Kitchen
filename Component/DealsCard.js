import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class DealsCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.pr.navigate('KitchenMenuViewForUser')}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            width: 160,
            height: 265,
            marginHorizontal: 10,
          }}>
          <View
            style={{
              height: 255,
              width: '100%',
              borderRadius: 10,
              backgroundColor: 'white',
              elevation: 10,
              flexDirection: 'row',
            }}>
            <View style={{padding: 10}}>
              <Image
                source={require('../Assets/FoodImage.png')}
                style={{height: 100, width: 130, borderRadius: 20}}
              />

              <Text style={{fontWeight: 'bold', fontSize: 13, paddingTop: 1}}>
                Kitchen Name
              </Text>
              <Text style={{fontSize: 15, fontWeight: '600', paddingTop: 3}}>
                Deal discription simple and dummy teaxt
              </Text>
              <View style={{flexDirection: 'row', marginVertical: 3}}>
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
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text>Price</Text>
                </View>
                <View style={{left: 4}}>
                  <Text>100 Rs</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.pr.navigate('KitchenMenuViewForUser')
                    }>
                    <Image
                      source={require('../Assets/RightArrow.png')}
                      style={{height: 20, width: 30}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
