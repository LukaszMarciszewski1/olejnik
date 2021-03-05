
import {nav} from './modules/nav';
import {scrollLinks} from './modules/buttons.js'
import {animationFooter} from './modules/animations.js';
import {animationServiceDescription} from './modules/animations.js';
import {animationServicePanel} from './modules/animations.js';
import {animationScrollServicePanel} from './modules/animations.js';
import {showInfo} from './modules/buttons.js';
import {labelsCard} from './modules/buttons.js';
import {servicesOpenList} from './modules/buttons.js';
import {activeLink} from './modules/buttons.js';
import {animationCadrLabels} from './modules/animations.js'
import {modalContact} from './modules/modals.js'
document.addEventListener("DOMContentLoaded", () => {
    nav();
    scrollLinks();
    animationFooter();
    animationServiceDescription();
    animationServicePanel();
    animationScrollServicePanel();
    showInfo();
    labelsCard();
    animationCadrLabels();
    servicesOpenList();
    activeLink();
    modalContact()
});
