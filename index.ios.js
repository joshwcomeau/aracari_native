import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './src/components/App';
import configureStore from './src/store';

const store = configureStore();


class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('aracarinative', () => AppWrapper);
