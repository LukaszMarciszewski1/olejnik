import '../scss/style.scss';
// import './modules/sidebar.js'
import {sliders} from './modules/sliders';
import {navigation} from './modules/navigation';
import {contact} from './modules/contact';

// import "fortawesome/fontawesome-free/js/all.js";

  document.addEventListener("DOMContentLoaded", () => {
    sliders();
    navigation();
    contact();
});

const navbarLinks=document.querySelectorAll('.nav a');
function navbarLinkClick(e){
 smoothScroll(e)
}
function smoothScroll(e){
    e.preventDefault();
   const targetId = e.currentTarget.getAttribute('href')==='#' ? 'header' : e.currentTarget.getAttribute('href');
   console.log(targetId)

document.querySelector(targetId).scrollIntoView({
    behavior:'smooth',
    block:'center'
})
}
navbarLinks.forEach(link=>link.addEventListener('click', navbarLinkClick));

document.querySelector('.preparation-for-printing__button').addEventListener('click', ()=>{
  document.querySelector('.preparation-for-printing__content').classList.toggle('preparation-for-printing__content--active')
  document.querySelector('.preparation-for-printing__button .fas').classList.toggle('arrow-rotate')
})

document.querySelector('.file-delivery__button').addEventListener('click', ()=>{
  document.querySelector('.file-delivery__content').classList.toggle('file-delivery__content--active')
  document.querySelector('.file-delivery__button .fas').classList.toggle('arrow-rotate')
})





