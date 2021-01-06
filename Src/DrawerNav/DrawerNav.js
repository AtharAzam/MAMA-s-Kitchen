import 'react-native-gesture-handler';
import * as React from 'react';

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ForgetPassword1 from '../ForgetPassword/ForgetPassword';
import KitchenDashboard from '../Kitchen/KitchenDashboard/KitchenDashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Home({navigation}) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={KitchenDashboard} options={{}} />
    </Stack.Navigator>
  );
}

function ForgetPassword({navigation}) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="ForgetPassword">
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword1}
        options={{}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
          itemStyle: {marginVertical: 2},
        }}>
        <Drawer.Screen
          name="Home"
          options={{drawerLabel: 'Home'}}
          component={Home}
        />

        <Drawer.Screen
          name="ForgetPassword"
          options={{drawerLabel: 'Forget Password'}}
          component={ForgetPassword}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  const {state, ...rest} = props;
  const newState = {...state};
  return (
    <DrawerContentScrollView {...props} style={{flex: 1}}>
      <View style={{flex: 1, height: '100%'}}>
        <View style={{backgroundColor: '#FFCC00', height: '45%', top: -10}}>
          <View
            style={{
              borderWidth: 4,
              borderRadius: 100,
              top: 10,
              marginVertical: 10,
              width: '65%',
              height: '75%',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../Assets/DrawerDisplayImg.jpeg')}
              style={{
                height: 183,
                width: 174,
                borderRadius: 100,
              }}
            />
          </View>
          <View
            style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
            <Text style={styles.username}>Hi, Kitchen Name</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#000000',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            width: '80%',
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: '#FFFFFF',
              marginHorizontal: 20,
              fontSize: 17,
              paddingBottom: 5,
              paddingTop: 5,
            }}>
            Wallet:
          </Text>
          <Text
            style={{
              fontWeight: '600',
              color: '#FFFFFF',
              fontSize: 17,
              paddingBottom: 5,
              paddingTop: 5,
              opacity: 0.8,
            }}>
            2000 RS
          </Text>
        </View>
        <View style={[styles.menuView]}>
          <DrawerItemList state={newState} {...rest} />
          <Text style={styles.privacy}>Privacy policies</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: 70,
          borderTopColor: '#EAEAEA',
          borderTopWidth: 2,
        }}>
        <TouchableOpacity>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/LogoutIconImg.png')}
              style={{width: 30, height: 30}}
            />
            <Text
              style={{fontSize: 16, fontWeight: 'bold', marginHorizontal: 10}}>
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  privacy: {
    color: 'green',
    alignSelf: 'center',
    marginTop: 100,
  },

  username: {
    alignSelf: 'center',
    elevation: 4,
    marginTop: 13,
    fontWeight: '700',
    fontSize: 20,
  },
  menuView: {
    marginHorizontal: 15,
    marginVertical: 40,
    justifyContent: 'space-between',
  },
});

export default App;
