/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Component } from 'react'
import { View, Text } from 'react-native';
import SignUp from './app/components/SignUp'

export default class App extends Component {
  render() {
    return (
      <>
        <SignUp />
      </>
    );
  }
};
