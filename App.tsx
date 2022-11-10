import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {Box, TextField, Button, ButtonGroup, appBarClasses} from '@mui/material';



function App() {
  const [keys, setKeys] = useState("");
  const [buttonkeys, setbuttonKeys] = useState("");

  const clickHandler = (count:string) => {
    setbuttonKeys(buttonkeys.concat(count))
    console.log(buttonkeys)
    
    for(let i=0; i<buttonkeys.length;i++){
      if(keys.includes(buttonkeys) && keys === buttonkeys){
        alert(`Congratulations`);
      }else if(keys.includes(buttonkeys) && keys !== buttonkeys){

      } else{
        alert(`Oops. Try Again!`)
        window.location.reload();
      }
    }

  }
  
  return (
    <div className="App">
      <header className="App-header">
       <div className='button'>
          <TextField
              sx = {{width: 368}}
              id = "outlined-required"
              label = "Keys"
              value = {keys}
              onChange = {(e) => {setKeys(e.target.value)}}
              placeholder = "Keys"
          />
      
        {/* BUTTON KEYS */}
        <div className='buttonKeys'>
        <button onClick = {(e) => clickHandler("1")}>1</button>
        <button onClick = {(e) => clickHandler("2")}>2</button>
        <button onClick = {(e) => clickHandler("3")}>3</button>
        <button onClick = {(e) => clickHandler("4")}>4</button>
        <button onClick = {(e) => clickHandler("5")}>5</button>
        <button onClick = {(e) => clickHandler("6")}>6</button>
        <button onClick = {(e) => clickHandler("7")}>7</button>
        <button onClick = {(e) => clickHandler("8")}>8</button>
        <button onClick = {(e) => clickHandler("9")}>9</button>
        </div>
        
        {/* <div className='buttonKeys' onClick={clickHandler}>
          <button onClick = {(e) => setcomboInput(comboInput.concat("1"))}>1</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("2"))}>2</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("3"))}>3</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("4"))}>4</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("5"))}>5</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("6"))}>6</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("7"))}>7</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("8"))}>8</button>
          <button onClick = {(e) => setcomboInput(comboInput.concat("9"))}>9</button>
        </div>  */}
        {/* CLOSING TAG FIRST DIV */}
       </div>
      </header>
    </div>
  );
}

export default App;
