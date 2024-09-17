/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight 
} from 'react-native';

import LineLogin from 'react-native-line'

export default class example extends Component<Props> {
  _handleClickLogin () {
    LineLogin.login()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  _handleClickLogout () {
    LineLogin.logout()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <TouchableHighlight
          style={styles.button}
          onPress={this._handleClickLogin}>
          <View>
            <Text>Login</Text>
          </View>
        </TouchableHighlight> 

        <TouchableHighlight
          style={styles.button}
          onPress={this._handleClickLogout}>
          <View>
            <Text>Logout</Text>
          </View>
        </TouchableHighlight> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
