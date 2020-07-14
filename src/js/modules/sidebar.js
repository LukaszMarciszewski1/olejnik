"use strict";

import '../../scss/style.scss';

const navbarButton = document.querySelector('.navbar__button');
const navbarContent = document.querySelector('.navbar__content');
const navbarContainer = document.querySelector('.navbar__container');
const nameCategory = document.querySelector('.header-content__h1');
const navbarLinks = [...document.querySelectorAll('.navbar__link')];

//sidebar-navigation-show------------------------------>
function showSidebar(){
    navbarButton.addEventListener('click', function () {
        this.classList.toggle('navbar__button--active')
        this.firstChild.classList.toggle('arrow-rotate')
        navbarContent.classList.toggle('navbar__content--active')
      
        if (navbarContent.classList.contains('navbar__content--active')) {
          navbarContainer.classList.add('navbar__container--active')
        } else {
      
          const loadNavbar = () => {
            navbarContainer.classList.remove('navbar__container--active')
          }
          setTimeout(loadNavbar, 700)
        }
      })
}
//sidebar-navigation-show------------------------------>

//sidebar-active-link------------>
function sidebarActiveLink(){
    window.addEventListener('load', () => {
        const activeLink = navbarLinks.find(link => link.dataset.option === nameCategory.dataset.option)
        if (activeLink) {
          activeLink.classList.add('navbar__link--active')
        } else {
          activeLink.classList.remove('navbar__link--active')
        }
        activeLink.addEventListener('click', (e) => {
          e.preventDefault()
        })
      });
}
//sidebar-active-link------------>//

export const sidebar = () => {
    showSidebar();
    sidebarActiveLink()
}