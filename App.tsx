/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";

import SignUp from './app/screens/SignUp';
import Login from './app/screens/Login';
import CodeVerification from "./app/screens/CodeVerification";
import Profile from "./app/screens/Profile";
import EditProfile from "./app/screens/EditProfile";
import ResetPassword from "./app/screens/ResetPassword";

library.add(fab, fas);

const Stack = createStackNavigator();

export default App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="CodeVerification" component={CodeVerification}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="EditProfile" component={EditProfile}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};


