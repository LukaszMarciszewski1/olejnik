import {sliders} from './modules/sliders';
import {nav} from './modules/nav';
import {contact} from './modules/contact';
import {animationsIndex} from './modules/animations.js'
import {animationFooter} from './modules/animations.js'
import {animationServiceDescription} from './modules/animations.js'
import {animationServicePanel} from './modules/animations.js'
import {animationScrollServicePanel} from './modules/animations.js';
import {scrollLinks} from './modules/buttons.js'
import {showInfo} from './modules/buttons.js'

  document.addEventListener("DOMContentLoaded", () => {
    sliders();
    nav();
    contact();
    scrollLinks();
    animationsIndex();
    animationFooter();
    animationServiceDescription();
    animationServicePanel();
    animationScrollServicePanel();
    showInfo();
});







