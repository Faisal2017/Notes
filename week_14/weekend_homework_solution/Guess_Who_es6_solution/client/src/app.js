import React from 'react';
import ReactDOM from 'react-dom';
import MasterBox from './components/MasterBox.jsx';

window.onload = function(){
  ReactDOM.render(
    <MasterBox url='/api/characters/staff'></MasterBox>,
    document.getElementById('app')
  );
}
