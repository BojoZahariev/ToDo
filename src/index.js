import {
    createDom
} from './createDom.js';

import {
    engine
} from './engine.js';

import './styles/reset.css';
import css from './styles/style.css';
 
    

const content = document.getElementById('content');

  content.appendChild(createDom());

 engine();
  