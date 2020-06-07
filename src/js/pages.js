import '../scss/style.scss';
import {modals} from './modules/modal';
import {sidebar} from './modules/sidebar';
import {navigation} from './modules/navigation';
import {contact} from './modules/contact';
document.addEventListener("DOMContentLoaded", () => {
    modals();
    sidebar();
    navigation();
    contact();
});
