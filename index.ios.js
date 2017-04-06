/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  FormLabel,
  Form,
  FormInput,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Button
} from 'react-native-elements';

export default class CAHApp extends Component {
  render() {
    return (
      <Image
        source={require('./images/mainbackground.jpeg')}
        style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {'\n'}CARDS AGAINST HUMANITY!
        </Text>
        <Text style={styles.instructions}>
          To get started, please enter your name:
        </Text>
        <Text style={styles.instructions}>
          Select Start to start new game,{'\n'}
          or Join an existing game.
        </Text>
        <Button
          large
          iconRight
          backgroundColor='#517FA4'
          title='Start New Game' />
        <Button
            large
            iconRight
            title='Join Existing Game' />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CAHApp', () => CAHApp);
