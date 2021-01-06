import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class AddADish extends Component {
  constructor() {
    super();
    this.state = {
      foodName: '',
      foodDescription: '',
      foodQuantity: '',
      mobileNo: '',
    };
  }

  render() {
    return (
      <View style={styles.backgroundColor}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAwareScrollView style={styles.container}>
            <View>
              <View style={{marginBottom: 10, alignItems: 'center'}}>
                <Text style={styles.serveFoodtextStyle}>Serve your food</Text>
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.foodName}
                  placeholder="Name your food"
                  onChangeText={(foodName) => this.setState(foodName)}
                />
              </View>
              <View>
                <TextInput
                  autoCapitalize="none"
                  style={styles.inputFiledStyle}
                  autoCorrect={false}
                  value={this.state.foodDescription}
                  placeholder="Add a description (ingredients etc)"
                  onChangeText={(foodDescription) =>
                    this.setState(foodDescription)
                  }
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputFiledStyle}
                    autoCorrect={false}
                    value={this.state.foodQuantity}
                    placeholder="Set the quantity"
                    onChangeText={(foodQuantity) => this.setState(foodQuantity)}
                  />
                </View>
                <View>
                  <TextInput
                    autoCapitalize="none"
                    style={styles.inputFiledStyle}
                    autoCorrect={false}
                    value={this.state.mobileNo}
                    placeholder="Select category"
                    onChangeText={(mobileNo) => this.setState(mobileNo)}
                  />
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.uploadPhotoStyle}>Upload a photo</Text>
              </View>
              <View style={{marginHorizontal: 30}}>
                <View
                  style={{
                    height: 400,
                    width: '100%',
                    borderRadius: 15,
                    backgroundColor: '#EBEBEB',
                    marginVertical: 10,
                    borderWidth: 2,
                    borderColor: '#C4C4C4',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('KitchenDashboard')
                    }>
                    <Image
                      source={require('../../../Assets/CameraImg.png')}
                      style={{alignSelf: 'center', height: 100, width: 100}}
                    />
                    <View style={{textAlign: 'center'}}>
                      <Text style={{textAlign: 'center', color: '#737373'}}>
                        Take photo of your freshly cooked {'\n'}meal
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginHorizontal: 20, marginTop: 5}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('KitchenDashboard')
                  }
                  style={styles.createMealBtnStyle}>
                  <Text style={styles.createMealButtonStyle}>Create Meal</Text>
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
  serveFoodtextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 40,
    textAlign: 'center',
  },
  inputFiledStyle: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: '#C9C2C2',
    marginHorizontal: 30,
    marginVertical: 8,
  },
  uploadPhotoStyle: {
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 20,
    paddingTop: 20,
    textAlign: 'center',
  },

  createMealButtonStyle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },

  createMealBtnStyle: {
    width: '100%',
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    padding: 10,
  },
});
