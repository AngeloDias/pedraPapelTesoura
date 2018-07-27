import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const imagePapelFromPath = require("../../imgs/papel.png");
const imagePedraFromPath = require("../../imgs/pedra.png");
const imageTesouraFromPath = require("../../imgs/tesoura.png");

class Icone extends Component {

  render() {

      if(this.props.escolha === "papel") {

        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image style={styles.imageSize} source={imagePapelFromPath}/>
          </View>
        );

      } else if(this.props.escolha === "pedra") {

        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image style={styles.imageSize} source={imagePedraFromPath}/>
          </View>
        );

      } else if(this.props.escolha === "tesoura") {

        return (
          <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            <Image style={styles.imageSize} source={imageTesouraFromPath}/>
          </View>
        );

      } else {
        return false;
      }

  };
}

const styles = StyleSheet.create({

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

export default Icone;
