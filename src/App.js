import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MainWindow from './mainWindow/mainWindow';

export default class App extends Component{
   render(){
     return(
       <div>
          <MainWindow></MainWindow>
      </div>
     )
   }
}