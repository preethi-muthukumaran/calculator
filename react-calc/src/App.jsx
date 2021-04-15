import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/ClearButton';
import * as math from 'mathjs';
//import { logDependencies } from 'mathjs';
import LogEntry from './components/LogEntry';
import {Notification} from './components/Notifications/Notification';
import styled from 'styled-components';

//class App extends Component {
function App() {
  const [showNotif, setShowNotif] = useState(false);
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState("");
  var result = "";
  var log = {};

  const addToInput = value => {
    setInput(input + value);
  };

  const handleEqual = () => {
    result = math.evaluate(input);
    log = {id: Math.random().toString, text: input + ' = ' + result};
    if (logs.length === 10) {
      logs.shift()
    }
    setLogs(logs => logs.concat(log))
    setInput(result);
    setShowNotif(true);
  }

  const hideNotif = () => {
    setShowNotif(false)
  }

    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input = {input}></Input>
          <div className="row">
            <Button handleClick = {addToInput}>7</Button>
            <Button handleClick = {addToInput}>8</Button>
            <Button handleClick = {addToInput}>9</Button>
            <Button handleClick = {addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick = {addToInput}>4</Button>
            <Button handleClick = {addToInput}>5</Button>
            <Button handleClick = {addToInput}>6</Button>
            <Button handleClick = {addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick = {addToInput}>1</Button>
            <Button handleClick = {addToInput}>2</Button>
            <Button handleClick = {addToInput}>3</Button>
            <Button handleClick = {addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick = {addToInput}>.</Button>
            <Button handleClick = {addToInput}>0</Button>
            <Button handleClick = {() => handleEqual()}>=</Button>
            <Button handleClick = {addToInput}>-</Button>
          </div>
          <div className = "row">
            <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
          </div>
        </div>
        <div className ="main-logs">
          <LogEntry goals = {logs}/>
        </div>
        <div className = "notifs">
          <Notification top = {16} visibility = {showNotif ?  "visible":"hidden"}/>
          <button className ="ok-button" onClick={hideNotif}>OK</button>
        </div>
      </div>
    );
  }


export default App;
