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

class MeuComponente extends Component {

  render() {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    );
  }

}

class pedraPapelTesoura extends Component {

  constructor(props){
    super(props);

    this.state = {texto: 'Texto teste 2'};
  }

  alteraTexto() {
    this.setState({texto: 'Outra coisa '});
  }

  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto}/>
        <Button title='Botão' onPress={() => {this.alteraTexto()}} />
      </View>
    );
  }
}

AppRegistry.registerComponent('pedraPapelTesoura', () => pedraPapelTesoura);
