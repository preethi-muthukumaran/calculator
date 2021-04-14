import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/ClearButton';
import * as math from 'mathjs';
//import { logDependencies } from 'mathjs';
import LogEntry from './components/LogEntry';

//class App extends Component {
function App() {
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
        <div>
          <LogEntry goals = {logs}/>
        </div>
      </div>
    );
  }


export default App;
