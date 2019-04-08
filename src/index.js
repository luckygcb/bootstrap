import printMe from './print.js';
import _ from 'lodash';
import { cube } from './math.js';
function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');


  element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)]);
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());