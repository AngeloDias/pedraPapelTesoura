/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Topo from './src/component/topo';

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
        resultado = "Você ganhou!";

      } else if(escolhaUsuario == "tesoura"){
        resultado = "Você perdeu!";
      }

    } else if (strEscolhaCompt == "papel") {
      if(escolhaUsuario == "papel") {
        resultado = "Empate";

      } else if(escolhaUsuario == "tesoura") {
        resultado = "Você ganhou!";

      } else if(escolhaUsuario = "pedra") {
        resultado = "Você perdeu!";
      }

    } else if(strEscolhaCompt == "tesoura") {
      if(escolhaUsuario == "papel") {
        resultado = "Você perdeu!";

      } else if(escolhaUsuario == "tesoura") {
        resultado = "Empate";

      } else if(escolhaUsuario == "pedra"){
        resultado = "Você ganhou!";
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

          <Icone escolha={this.state.escolhaComputador} jogador="Computador"></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador="Você"></Icone>

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
    height: 57
  },

  imageSize: {
    width: 80,
    height: 80
  },

  icone: {
    alignItems: "center"
  },

  txtJogador: {
    fontSize: 20
  }
});

class Icone extends Component {
  render() {

      if(this.props.escolha == "papel") {

        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image style={styles.imageSize} source={require("./imgs/papel.png")}/>
          </View>
        );

      } else if(this.props.escolha == "pedra") {

        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image style={styles.imageSize} source={require("./imgs/pedra.png")}/>
          </View>
        );

      } else if(this.props.escolha == "tesoura") {

        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image style={styles.imageSize} source={require("./imgs/tesoura.png")}/>
          </View>
        );

      } else {
        return false;
      }

  };
}

AppRegistry.registerComponent('pedraPapelTesoura', () => pedraPapelTesoura);
