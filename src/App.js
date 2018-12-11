import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';

const { app } = window.require('electron').remote;
const ipc = window.require('electron').ipcRenderer;

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Electron = <span role="img" aria-label="love">😍</span></h2>
        </div>
        <div className="App-intro">
          <button className="add" onClick={function () {
            console.log(ipc.sendSync('synchronous-message', 'ping'));// prints "pong"
          }}>
            Version: {app.getVersion()}</button>
        </div>
      </div>
    );
  }
}

export default App;
