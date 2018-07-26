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
  View,
  Image
} from 'react-native';

class pedraPapelTesoura extends Component {

  constructor(props) {
    super(props);

    this.state = {escolhaUsuario: "", escolhaComputador: "", resultado: ""};
  }

  jokenpo(escolhaUsuario) {
    var escolhaRandomNum = Math.floor(Math.random() * 3);
    var strEscolhaCompt = "";

    switch(escolhaRandomNum) {
      case 0:
        strEscolhaCompt = "pedra";

        break;
      case 1:
        strEscolhaCompt = "papel";

        break;
      case 2:
        strEscolhaCompt = "tesoura";
        
        break;
    }

    var resultado = "";

    if(strEscolhaCompt == "pedra") {
      if(escolhaUsuario == "pedra") {
        resultado = "Empate";

      }else if (escolhaUsuario == "papel") {
        resultado = "Usuário ganhou!";

      } else if(escolhaUsuario == "tesoura"){
        resultado = "Computador ganhou!";
      }

    } else if (strEscolhaCompt == "papel") {
      if(escolhaUsuario == "papel") {
        resultado = "Empate";

      } else if(escolhaUsuario == "tesoura") {
        resultado = "Usuário ganhou!";

      } else if(escolhaUsuario = "pedra") {
        resultado = "Computador ganhou!";
      }

    } else if(strEscolhaCompt == "tesoura") {
      if(escolhaUsuario == "papel") {
        resultado = "Computador ganhou!";

      } else if(escolhaUsuario == "tesoura") {
        resultado = "Empate";

      } else if(escolhaUsuario == "pedra"){
        resultado = "Usuário ganhou!";
      }

    }

    this.setState({escolhaUsuario: escolhaUsuario, escolhaComputador: strEscolhaCompt,
      resultado: resultado});
  }

  render() {
    return (
      <View>

        <Topo />
        
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => {this.jokenpo("pedra")}}/>
          </View>

          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => {this.jokenpo("papel")}}/>
          </View>

          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => {this.jokenpo("tesoura")}}/>
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },

  painelAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 7
  },

  palco: {
    alignItems: "center",
    marginTop: 7
  },

  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 36
  }
});

class Topo extends Component {
  render(){
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')}/>
      </View>
    );
  };
}

AppRegistry.registerComponent('pedraPapelTesoura', () => pedraPapelTesoura);
