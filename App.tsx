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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faUser)

export default class App extends Component {
  render() {
    return (
      <>
        <SignUp />
      </>
    );
  }
};
