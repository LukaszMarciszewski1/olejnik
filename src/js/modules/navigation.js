"use strict";
import '../../scss/style.scss';

const hamburger=document.querySelector('.hamburger')
// const descriptionGallery=[...document.querySelectorAll('.services-description')]
const nav=document.querySelector('.nav')

//hamburger---->
function hamburgerActive(){
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('hamburger--active');
        document.querySelector('.nav__list ').classList.toggle('nav__list--active') 
        nav.classList.toggle('navScroll')  
    })
}
//hamburger---->//
//close menu----->
function closeMenu(){
    [...document.querySelectorAll('.nav__list-item')].forEach(item=>item.addEventListener('click', ()=>{
        document.querySelector('.nav__list').classList.remove('nav__list--active');
        hamburger.classList.remove('hamburger--active')
    }))
}
//close menu----->//
//nav-scroll---------->
function navScroll(){
    window.addEventListener('scroll', ()=>{
        const headerScroll=()=>{
            if(window.scrollY>nav.clientHeight){
                nav.classList.add('navScroll');    
            }
            else{
                nav.classList.remove('navScroll')    
            }
        }
    headerScroll()
    })
}
//nav-scroll---------->//

export const navigation = () => {
    navScroll();
    hamburgerActive();
    closeMenu()
}


