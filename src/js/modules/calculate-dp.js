import '../../scss/style.scss';
import './calculator.js'
import {calculateDp} from './calculator';
// calculateDp()
document.querySelectorAll('.content__option-button').forEach(item => item.addEventListener('click', calculateDp))