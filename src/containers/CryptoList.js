import React, { Component, PropTypes } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from 'src/styles/global';

import {
  View,
  Text
} from 'react-native';
import config from 'src/config';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';

@connect(
  state => ({
    
  }),
  dispatch => bindActionCreators({ 
    
  }, dispatch)
)
export default class CryptoList extends Component {
  static propTypes = {
  }

  componentWillMount() {
    
  }

  

  render() {
    return (
      <View style={styleSheet.container}>
        <Text>
          hi
        </Text>
      </View>
    );
  }
}

const styleSheet = EStyleSheet.create({
  container: {
    flex: 1
  }
});
