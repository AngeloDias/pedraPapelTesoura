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
  Button,
  View
} from 'react-native';

class pedraPapelTesoura extends Component {

  constructor(props) {
    super(props);

    this.state = {escolhaUsuario: ""};
  }

  jokenpo(escolhaUsuario) {
    this.setState({escolhaUsuario: escolhaUsuario});
  }

  render() {
    return (
      <View>

        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>

        <Button title="pedra" onPress={() => {this.jokenpo("pedra")}}/>
        <Button title="papel" onPress={() => {this.jokenpo("papel")}}/>
        <Button title="tesoura" onPress={() => {this.jokenpo("tesoura")}}/>

      </View>
    );
  }
}

AppRegistry.registerComponent('pedraPapelTesoura', () => pedraPapelTesoura);
