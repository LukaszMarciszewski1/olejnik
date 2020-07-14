import '../../scss/style.scss';

import {calculateSp} from './calculator';
// calculateDp()
document.querySelectorAll('.content__option-button').forEach(item => item.addEventListener('click', calculateSp))