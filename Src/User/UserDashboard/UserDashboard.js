import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import DealsCard from '../../../Component/DealsCard';
import KitchenCard from '../../../Component/KitchenCard';
export default class UserDashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  paddingTop: 10,
                  flex: 1,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('')}>
                    <Image
                      source={require('../../../Assets/ThreeBars.png')}
                      style={styles.threeBarsImgStyle}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    left: 10,
                    backgroundColor: '#F7F7F7',
                    width: '80%',
                    justifyContent: 'center',
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                      top: 10,
                    }}>
                    <View>
                      <Image
                        source={require('../../../Assets/SearchIcon.png')}
                        style={{height: 25, width: 25}}
                      />
                    </View>
                    <View style={{flex: 1, left: 10, top: -10}}>
                      <TextInput
                        style={{fontSize: 18}}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.search}
                        placeholder="Search"
                        onChangeText={(search) => setPhoneNo(search)}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('')}>
                    <Image
                      source={require('../../../Assets/FilterIcon.png')}
                      style={styles.FilterIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{padding: 8, left: 10}}>
                <Text style={{fontWeight: '700', fontSize: 20}}>Deals</Text>
              </View>
              <ScrollView
                contentContainerStyle={styles.contentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row', paddingTop: 15}}>
                  <DealsCard pr={this.props.navigation} />
                  <DealsCard pr={this.props.navigation} />
                  <DealsCard />
                  <DealsCard />
                </View>
              </ScrollView>
              <View style={{padding: 8, left: 10}}>
                <Text style={{fontWeight: '700', fontSize: 20}}>
                  All Kitchens
                </Text>
              </View>
              <View style={{paddingTop: 15}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('KitchenMenuViewForUser');
                  }}>
                  <KitchenCard
                    pr={this.props.navigation}
                    KitchenMenuViewForUser={true}
                  />
                </TouchableOpacity>
                <KitchenCard pr={this.props.navigation} />
                <KitchenCard />
                <KitchenCard />
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
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  threeBarsImgStyle: {
    height: 40,
    width: 30,
    alignContent: 'flex-start',
  },
  FilterIcon: {
    height: 25,
    width: 25,
    top: 11,
  },
});
