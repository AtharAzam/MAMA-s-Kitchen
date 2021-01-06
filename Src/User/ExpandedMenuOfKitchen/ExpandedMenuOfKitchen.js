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

export default class ExpandedMenuOfKitchen extends Component {
  state = {
    styleChangeBtnPressed: false,
    counter: 1,
    borderRadius: 20,
    backgroundColor: '#FFCC00',
    marginHorizontal: 20,
  };

  changeStyle() {
    if (!this.state.styleChangeBtnPressed) {
      this.setState({
        styleChangeBtnPressed: true,
        borderRadius: 20,
        backgroundColor: 'green',
        marginHorizontal: 20,
      });
    } else {
      this.setState({
        styleChangeBtnPressed: false,
        borderRadius: 20,
        backgroundColor: 'red',
        marginHorizontal: 20,
      });
    }
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
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
                marginHorizontal: 10,
                paddingTop: 20,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('KitchenMenuViewForUser')
                  }>
                  <Image
                    source={require('../../../Assets/BackBtnImg.png')}
                    style={styles.BackBtnImgStyle}
                  />
                </TouchableOpacity>
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
          </View>
          <View
            style={{
              marginBottom: 10,
              flex: 1,
              top: -20,
            }}>
            <View>
              <Text style={styles.DishaNameStyle}>Dish Name</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 3,
                  justifyContent: 'center',
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
            <View>
              <View
                style={{
                  marginHorizontal: 20,
                  top: -10,
                  marginVertical: 20,
                  flexDirection: 'row',
                }}>
                <View>
                  <Image
                    source={require('../../../Assets/FoodImage.png')}
                    style={{height: 290, width: 260, borderRadius: 10}}
                  />
                </View>
                <View>
                  <View style={{marginVertical: 5, marginHorizontal: 30}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      Price
                    </Text>
                    <Text style={{fontSize: 15}}>300 RS</Text>
                  </View>
                  <View style={{marginHorizontal: 25, marginVertical: 40}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      Category
                    </Text>
                    <Text style={{fontSize: 15}}>Fast Food</Text>
                  </View>
                  <View style={{marginHorizontal: 25, marginVertical: 5}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      Quantity
                    </Text>
                    <Text style={{fontSize: 15}}>32</Text>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal: 20, top: -10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                  }}>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      Kitchen Name
                    </Text>
                    <View style={{top: 5}}>
                      <Text style={{fontSize: 18}}>Athar Azam</Text>
                    </View>
                  </View>
                  <View style={{flex: 1, top: 10}}>
                    <View style={{alignItems: 'flex-end'}}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate(
                            'KitchenMenuViewForUser',
                          )
                        }>
                        <Image
                          source={require('../../../Assets/RightArrow.png')}
                          style={{height: 30, width: 40}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{marginVertical: 30}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      Description
                    </Text>
                  </View>
                  <View style={{top: -15}}>
                    <Text style={{fontSize: 18}}>
                      Simple and dummy textSimple and dummy textSimple and dummy
                      textSimple and dummy textSimple and dummy text
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{top: -10, marginHorizontal: 20, flexDirection: 'row'}}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFCC00',
                paddingTop: 1,
                paddingBottom: 2,
                paddingRight: 15,
                paddingLeft: 15,
                borderRadius: 15,
              }}
              onPress={() => this.decrement()}>
              <Text style={{fontSize: 22}}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>
              {this.state.counter}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FFCC00',
                paddingTop: 1,
                paddingBottom: 2,
                paddingRight: 15,
                paddingLeft: 15,
                borderRadius: 15,
              }}
              onPress={() => this.increment()}>
              <Text style={{fontSize: 22}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: '#FFCC00',
                paddingLeft: 40,
                paddingRight: 40,
              }}
              onPress={() =>
                this.props.navigation.navigate('CheckOutCashOnDeliveryOrCard')
              }>
              <Text style={{textAlign: 'center', fontSize: 16, padding: 5}}>
                Add to Chart
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    backgroundColor: '#FFCC00',
                  }}
                  onPress={() => this.changeStyle()}>
                  <Text style={{textAlign: 'center', fontSize: 16, padding: 5}}>
                    Add to Chart
                  </Text>
                </TouchableOpacity> */}
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

  DishaNameStyle: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingTop: 10,
    textAlign: 'center',
  },
});
