import React, { useState } from "react";
import "./App.css";

function is_digit(c){
  return c >= '0' && c <= '9';
}

function App() {
  const [display, setDisplay] = useState("0");

  function clicked(value){
    if(value === '='){
      try{
        const result = eval(display);
        setDisplay(String(result));
      }catch{
        setDisplay("Error");
      }
    }else if(value === 'x'){
      setDisplay('0');

    }else if(value === 'D'){
      if(display.length == 1){
        setDisplay('0');
      }else{
        setDisplay(display.slice(0, -1));
      }
    }else if(display === '0' && value != '.'){
      setDisplay(value);

    }else if(!is_digit(display.at(-1)) && !is_digit(value)){
      setDisplay(display.slice(0, -1) + value);
    }
    else{
      setDisplay(display + value);
    }
  }

  return (
    <div>
      <div className="display">{display}</div>
      <div className="row">
        <button className="ubtn" onClick={() => clicked('x')}>AC</button>
        <button className="ubtn" onClick={() => clicked('%')}>%</button>
        <button className="ubtn" onClick={() => clicked('/')}>/</button>
      </div>
      <div className="row">
        <button className="btn" onClick={() => clicked('7')}>7</button>
        <button className="btn" onClick={() => clicked('8')}>8</button>
        <button className="btn" onClick={() => clicked('9')}>9</button>
        <button className="ubtn" onClick={() => clicked('*')}>*</button>
      </div>
      <div className="row">
        <button className="btn" onClick={() => clicked('4')}>4</button>
        <button className="btn" onClick={() => clicked('5')}>5</button>
        <button className="btn" onClick={() => clicked('6')}>6</button>
        <button className="ubtn" onClick={() => clicked('+')}>+</button>
      </div>
      <div className="row">
        <button className="btn" onClick={() => clicked('1')}>1</button>
        <button className="btn" onClick={() => clicked('2')}>2</button>
        <button className="btn" onClick={() => clicked('3')}>3</button>
        <button className="ubtn" onClick={() => clicked('-')}>-</button>
      </div>
      <div className="row">
        <button className="btn" onClick={() => clicked('0')}>0</button>
        <button className="btn" onClick={() => clicked('.')}>.</button>
        <button className="ubtn" onClick={() => clicked('=')}>=</button>
        <button className="ubtn" onClick={() => clicked('D')}>Del</button>
      </div>
    </div>
  );
}

export default App;