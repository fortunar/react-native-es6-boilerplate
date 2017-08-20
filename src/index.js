//import "app-module-path/register";
import React, { Component, View } from 'react';
import ReactNative from 'react';
import { Provider, connect } from 'react-redux';
import {Router} from 'react-native-router-flux';

import EStyleSheet from 'react-native-extended-stylesheet';
import variables from './styles/variables';

import createStore from './redux/create';
import createScenes from './routes';

const store = createStore();
const scenes = createScenes(store);

const RouterRedux = connect()(Router);


const Main = () => {
  return (
    <Provider store={store}>
      <RouterRedux scenes={scenes} />
    </Provider>
  )
}

EStyleSheet.build(variables);

export default Main;
