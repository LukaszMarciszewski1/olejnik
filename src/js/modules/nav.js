"use strict";

const hamburgerBtn=document.querySelector('.hamburger')
const navigation=document.querySelector('.nav')

//hamburger---->
function hamburgerActive(){
    hamburgerBtn.addEventListener('click', ()=>{
        hamburgerBtn.classList.toggle('hamburger--active');
        document.querySelector('.nav__list ').classList.toggle('nav__list--active') 
        navigation.classList.toggle('navScroll')  
    })
}
//close menu----->
function closeMenu(){
    [...document.querySelectorAll('.nav__list-item')].forEach(item=>item.addEventListener('click', ()=>{
        document.querySelector('.nav__list').classList.remove('nav__list--active');
        hamburgerBtn.classList.remove('hamburger--active')
    }))
}
// scroll nav animation
function animNav() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > navigation.clientHeight) {
        navigation.classList.add('navScroll');
      } else {
        navigation.classList.remove('navScroll')
      }
    })
  }

  // show button scroll-up
  function scrollBtnScrollUp(){
    const scrollUp = document.querySelector('.scroll-up');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollUp.classList.add('scroll-up--active');
      } else {
        scrollUp.classList.remove('scroll-up--active')
      }
    })
  }

export const nav = () => {
    hamburgerActive();
    closeMenu();
    animNav();
    scrollBtnScrollUp()
}


