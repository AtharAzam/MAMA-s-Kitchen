import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import ReviewCard from '../../../Component/ReviewCard';

export default class Review extends Component {
  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                marginHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 5,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('KitchenDashboard')
                }>
                <Image
                  source={require('../../../Assets/BackBtnImg.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.reviewTextTyle}>Reviews</Text>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 3,
                      left: 90,
                    }}>
                    <Image
                      source={require('../../../Assets/FilledStar.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Image
                      source={require('../../../Assets/FilledStar.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Image
                      source={require('../../../Assets/FilledStar.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Image
                      source={require('../../../Assets/FilledStar.png')}
                      style={{height: 20, width: 20}}
                    />
                    <Image
                      source={require('../../../Assets/UnFilledStar.png')}
                      style={{height: 20, width: 20}}
                    />
                  </View>
                </View>
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
          <ReviewCard pr={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  reviewTextTyle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    left: 90,
  },
  BackBtnImgStyle: {
    height: 5,
    width: 5,
    top: -10,
  },
  bellIconStyle: {
    height: 30,
    width: 30,
  },
});
