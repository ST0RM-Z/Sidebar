// import App from '../App'

// import React, { Component } from "react";
// import {View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import homePage from './Home'
// import aboutPage from './About'
// import contactUs from './ContactUs'
// const Stack = createStackNavigator();


// function Drawer() {
//     console.log("enter Start");
//   return (
   
//       <Stack.Navigator initialRouteName="home">
//         <Stack.Screen name="First screen" component={homePage} />
//         <Stack.Screen name="Second screen" component={aboutPage} />
//         <Stack.Screen name="Third screen" component={contactUs} />

//       </Stack.Navigator>
   
//   );
// }

// export default Drawer;

import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homePage from './Home';
import aboutPage from './About'
import contactUs from './ContactUs'
import { createDrawerNavigator } from '@react-navigation/drawer';

function LogoTitle(){
    return(
        <Image
        style={{ width : 40, height: 40, borderRadius: 50 }}
        source={require('../assets/padhya.png')}
        />
    )
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={homePage} options={{
            headerTitle: (props) => <LogoTitle {...props} />}} />
      <Drawer.Screen name="About" component={aboutPage} />
      <Drawer.Screen name="Contact Us" component={contactUs} />

    </Drawer.Navigator>
  );
}