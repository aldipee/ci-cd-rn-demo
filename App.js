import React from 'react';
//  redux => Untuk membuat store
// react-redux => Untuk jembatan koneksi antara store Component pada app kita
import {Provider} from 'react-redux';
import {appDemoStore} from './src/redux/store';
import Application from './src';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={appDemoStore}>
        <Application />
      </Provider>
    );
  }
}
