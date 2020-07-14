import '../../scss/style.scss';

import {calculateEs} from './calculator';
// calculateDp()
document.querySelectorAll('.content__option-button').forEach(item => item.addEventListener('click', calculateEs))