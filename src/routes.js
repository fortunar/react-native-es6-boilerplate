import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import {
  CryptoListRoute
 } from './containers';

const renderRemoveButton = () => {
  return (<ButtonRemove />);
}

export default (store) => {
  return Actions.create(
    <Scene key="main">
      <Scene key="cryptoList" component={CryptoListRoute} initial={true} />
    </Scene>
  );
}
