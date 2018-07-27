import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

const imageFromPath = require('../../imgs/jokenpo.png');

class Topo extends Component {
  render(){
    return (
      <View>
        <Image style={{width: 325, height: 200}} source={imageFromPath}/>
      </View>
    );
  };
}

export default Topo;