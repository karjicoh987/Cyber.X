import React from 'react';

//Header imports 
import Header from './components/Header/Header'
import menu from './data/menu';
import logo from './image/Logo.png';

import './App.css';

const App = () =>
  <Header logo = {logo} menu = {menu} />


export default App;
