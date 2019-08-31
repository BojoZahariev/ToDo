
import './styles/reset.css';
import css from './styles/style.css';
  function component() {
    const element = document.createElement('div');


    element.textContent = 'bbbbb';

    return element;
  }

  document.body.appendChild(component());