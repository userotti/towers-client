import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import GamesceneComponent from './screens/gamesceneComponent.js';

export default class App extends Component {

  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        <Provider store={store}>
            <GamesceneComponent></GamesceneComponent>
        </Provider>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
