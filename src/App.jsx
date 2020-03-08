import React from 'react';

//Header imports 
import Header from './components/Header/Header'
import data from './data/HeaderData'

import './App.css';

const App = () =>
  <Header {...data}/>


export default App;
