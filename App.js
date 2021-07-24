import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './Screen/Homescreen';
import ExploreScreen from './Screen/ExploreScreen';
import UploadScreen from './Screen/UploadScreen';
import SubscriptionScreen from './Screen/SubscriptionScreen';
import Library from './Screen/Library';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons'
import { Provider } from 'react-redux';
import store from './app/store';

export default function App() {
  
const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Tab.Navigator 
      initialRouteName={"Home"}
      tabBarOptions={{
        labelStyle:{
          color:'black'
        }
      }}
    >
      <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => (
        focused?<Entypo name="home" style={{textDecorationColor:'black'}}  size={24} color="black" />:<SimpleLineIcons name="home" size={20} color="black" />
        ),
        
         
      }}

      name="Home" component={Homescreen} />
      <Tab.Screen
       options={{
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="explore" size={24} color="black" />


        ),
       
      }}
      name="Explore" component={ExploreScreen} />
      <Tab.Screen
       options={{
        tabBarIcon: ({ focused }) => (
          <AntDesign name="pluscircleo"style={{marginTop:15}} size={35} color="black" />


        ),
        tabBarLabel:'',
        

      }}
      name="Upload" component={UploadScreen} />
      <Tab.Screen 
       options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="youtube-subscription"  size={24} color="black" />
        ),
       
      }}
      name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen 
       options={{
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="video-library" size={24} color="black" />

        ),
      }}
      name="Library" component={Library} />
    </Tab.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
