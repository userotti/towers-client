import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import GameSceneComponent from './components/screens/GameSceneComponent.js';

export default class App extends Component {

  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        <Provider store={store}>
            <GameSceneComponent></GameSceneComponent>
        </Provider>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
