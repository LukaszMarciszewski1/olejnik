import '../../scss/style.scss';

import {calculateLf} from './calculator';
// calculateDp()
document.querySelectorAll('.content__option-button').forEach(item => item.addEventListener('click', calculateLf))