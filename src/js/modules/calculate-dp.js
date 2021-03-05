
import './calculator.js'
import {calculateDp} from './calculator';
document.querySelectorAll('.content__option-button').forEach(item => item.addEventListener('click', calculateDp))