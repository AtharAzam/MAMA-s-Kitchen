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
import NavBar from '../../../Component/NavBar';
import Modal from '../../Modal/Modal';
import {DrawerActions} from 'react-navigation-drawer';
import DrawerNav from '../../DrawerNav/DrawerNav';

export default class KitchenDashboard extends Component {
  constructor() {
    super();
  }

  state = {
    openModal: false,
  };

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
                  marginHorizontal: 20,
                  paddingTop: 20,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      <DrawerNav pr={this.props.navigation.toggleDrawer()} />;
                      // this.props.navigation.navigate('DrawerNav');
                      //  this.props.navigation
                      // this.props.navigation.dispatch(
                      //   DrawerActions.toggleDrawer(),
                      // )
                    }}>
                    <Image
                      source={require('../../../Assets/ThreeBars.png')}
                      style={styles.threeBarsImgStyle}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.kitchenNameTextStyle}>Kitchen Name</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.props.pr.navigate('')}>
                    <Image
                      source={require('../../../Assets/BellIcon.png')}
                      style={styles.bellIconStyle}
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
                <Text style={styles.punchLineOfKitchenStyle}>Punch line</Text>
                <TouchableOpacity onPress={() => this.props.pr.navigate('')}>
                  <Image
                    source={require('../../../Assets/PencilIcon.png')}
                    style={styles.pencilIconStyle}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <View style={{marginHorizontal: 20, marginVertical: 30}}>
                  <Text
                    style={{
                      marginHorizontal: 10,
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    Woaps your menu for today is empty lets get cooking
                  </Text>
                  <View>
                    <Image
                      source={require('../../../Assets/SaladImg.png')}
                      style={styles.saladImgStyle}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flex: 1,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({openModal: true});
                    }}>
                    <Image
                      source={require('../../../Assets/AddBtn.png')}
                      style={styles.addBtnStyle}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
        <NavBar pr={this.props.navigation} Home={true} />
        {this.state.openModal && (
          <Modal
            pr={this.props.navigation}
            KitchenDashboard={true}
            closeModal={() => {
              this.setState({openModal: false});
            }}
          />
        )}
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
  punchLineOfKitchenStyle: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  pencilIconStyle: {
    height: 30,
    width: 30,
  },
  saladImgStyle: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginVertical: 56,
  },
  addBtnStyle: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    borderRadius: 20,
    backgroundColor: '#FFCC00',
    marginHorizontal: 10,
    top: -8,
  },
});
