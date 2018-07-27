import React, { Component } from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

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
