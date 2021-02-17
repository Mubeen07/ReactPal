/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import NavigatorService from './navigator';
import AppNavigator from './src/router';
import Store from './src/store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator
        ref={(navigatorRef) => {
          // console.log(navigatorRef);
          NavigatorService.configNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
