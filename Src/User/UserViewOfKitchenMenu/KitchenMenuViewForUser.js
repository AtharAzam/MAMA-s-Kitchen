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
import KitchenCard from '../../../Component/KitchenCard';

export default class KitchenMenuViewForUser extends Component {
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
                  marginHorizontal: 10,
                  paddingTop: 20,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('UserDashboard')
                    }>
                    <Image
                      source={require('../../../Assets/BackBtnImg.png')}
                      style={styles.BackBtnImgStyle}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.kitchenNameTextStyle}>Kitchen Name</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('')}>
                    <Image
                      source={require('../../../Assets/ChartImg.png')}
                      style={styles.chartStyle}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginBottom: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={styles.punchLineOfKitchenStyle}>
                  TagLine Of Kitchen
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ExpandedMenuOfKitchen');
                  }}>
                  <KitchenCard pr={this.props.navigation} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ExpandedMenuOfKitchen');
                  }}>
                  <KitchenCard pr={this.props.navigation} />
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
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
  kitchenNameTextStyle: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  BackBtnImgStyle: {
    height: 40,
    width: 40,
    top: -3,
  },
  chartStyle: {
    height: 30,
    width: 30,
  },
  punchLineOfKitchenStyle: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});
