import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <p> 안녕하십니까~? </p>
    <Button Primary> hello:) </Button>
    <Progress percent = {33} indicating/>
    </div>
  );
}

export default App;
