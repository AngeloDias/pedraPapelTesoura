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
  View
} from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.propriedade1}</Text>
        <Text>{this.props.xyz}</Text>
        <Text>{this.props.outraProp}</Text>
      </View>
    );
  }
}

class pedraPapelTesoura extends Component {
  render() {
    return (
      <MeuComponente propriedade1='Banana' xyz='Abacaxi' outraProp='Uva'></MeuComponente>
    );
  }
}

AppRegistry.registerComponent('pedraPapelTesoura', () => pedraPapelTesoura);
