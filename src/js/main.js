
import React from 'react';
import { render } from 'react-dom';
import PlayList from './components/PlayList.js'; 
import css from '../scss/main.scss';
 
const main = document.getElementById('main'); 

render(<PlayList/>, main);