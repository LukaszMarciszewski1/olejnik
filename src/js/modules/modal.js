"use strict";

import '../../scss/style.scss';

//MODAL--------------------------------------------------------->
const modal = document.querySelector('.modal');
const contentModal = [...document.querySelectorAll('.content')]
const contentCategory = [...document.querySelectorAll('.content__category')];
const itemsServices = [...document.querySelectorAll('.services-gallery__items')];
const modalClose = document.querySelector('.modal__close');
const contactModal = document.querySelector('.wrap-contact-modal');
const modalBtnOptin = document.querySelectorAll('.content__option-button');
const descriptionTxt = document.querySelectorAll('.content-description-txt');

//open modal-------->
function openModal() {
    itemsServices.forEach(item => item.addEventListener('click', function () {
        document.body.style.overflow = 'hidden'
        modal.classList.add('active-modal');
        // activeEl=this.dataset.content
        const active = this.dataset.content;
        const activeCategory = this.dataset.option;

        contentModal.forEach(function (item) {
            item.classList.remove('activeContent')
            if (active === item.dataset.content) {
                item.classList.add('activeContent')
            } else {
                item.classList.remove('activeContent')
            }

        })
        contentCategory.forEach(function (item) {
            item.style.display = '';
            if (activeCategory === item.dataset.option) {
                item.style.display = 'block'
            }
        })
    }))
    //animation--->
    document.querySelector('.modal__topbar').style.animation = 'modal .5s both';
    document.querySelector('.modal__content-wrap').style.animation = 'modal .5s both ';
    //animation--->
}
//open modal-------->//

//modal-select-option----->//
function modalSelectOption() {
    modalBtnOptin.forEach(function (button) {
        button.addEventListener('click', function () {
            if (this) {
                modalBtnOptin.forEach(function (btn) {
                    btn.classList.remove('content__option--active')
                })
                this.classList.add('content__option--active')
            }
            const active = this.dataset.active
            descriptionTxt.forEach(function (item) {
                item.classList.remove('content-description--active')
                if (item.dataset.active === active) {
                    item.classList.add('content-description--active')
                } else {
                    item.classList.remove('content-description--active')
                }
            })
        })
    })
}
//modal-select-option----->//

//close modal---->
function closeModal() {
    modalClose.addEventListener('click', () => {
        document.body.style.overflow = 'auto'
        modal.classList.remove('active-modal')
        modalBtnOptin.forEach(item => {
            if (item.dataset.active === 'about') {
                item.classList.add('content__option--active')
            } else {
                item.classList.remove('content__option--active')
            }
        })
        descriptionTxt.forEach(item => {
            if (item.dataset.active === "about") {
                item.classList.add('content-description--active')
            } else {
                item.classList.remove('content-description--active')
            }
        })
        contactModal.classList.remove('wrap-contact-modal--active')
    })
}
//close modal---->//


///contact modal open/close------------->
function contactModalSelect(){
    document.querySelector('.contact-modal-link .call-to-us__btn').addEventListener('click', () => {
console.log('okkkkk')
        contactModal.classList.add('wrap-contact-modal--active')
    })
    document.querySelector('.contact-modal-close').addEventListener('click', () => {
        contactModal.classList.remove('wrap-contact-modal--active')
    })
}
///contact modal open/close------------->//


//move contact modal----------------->
// function contactModalMove (){
//     var dragItem = document.querySelector(".modal-contact-topbar");
//     var dragElement = document.querySelector(".wrap-contact-modal");
//     var container = document.querySelector(".modal__content-wrap");
    
//         var active = false;
//         var currentX,
//             currentY,
//             initialX,
//             initialY,
//             xOffset = 0,
//             yOffset = 0;
    
//         function dragStart(e) {
//           if (e.type === "touchstart") {
//             initialX = e.touches[0].clientX - xOffset;
//             initialY = e.touches[0].clientY - yOffset;
//           } else {
//             initialX = e.clientX - xOffset;
//             initialY = e.clientY - yOffset;
//           }
    
//           if (e.target === dragItem) {
//             active = true;
//             dragItem.classList.add('modal-contact-topbar--active')
//           }
//         }
    
//         function dragEnd(e) {
//           initialX = currentX;
//           initialY = currentY;
    
//           active = false;
//           dragItem.classList.remove('modal-contact-topbar--active')
//         }
    
//         function drag(e) {
//           if (active) {
          
//             e.preventDefault();
          
//             if (e.type === "touchmove") {
//               currentX = e.touches[0].clientX - initialX;
//               currentY = e.touches[0].clientY - initialY;
//             } else {
//               currentX = e.clientX - initialX;
//               currentY = e.clientY - initialY;
//             }
    
//             xOffset = currentX;
//             yOffset = currentY;
    
//             setTranslate(currentX, currentY, dragElement);
    
//             var containerBounding = container.getBoundingClientRect(),
//             x = e.clientX - containerBounding.left,
//             y = e.clientY - containerBounding.top,
//             containerSize = parseInt(window.getComputedStyle(container).height),
//             dragElementSize = parseInt(window.getComputedStyle(dragElement).height),
//             MAX_POSITION = containerSize - dragElementSize;
//             console.log(x)
          
//           x -= dragElementSize / 2;
//           y -= dragElementSize / 2;
          
//           if (x + dragElementSize > containerSize) {
//             x= MAX_POSITION
//           }
//           if (y + dragElementSize > containerSize) {
//           y = MAX_POSITION;
//           }
          
//           if (x < 0) {
//           x = 0;
//           }
          
//           if (y < 0) {
//           y = 0;
//           }
          
//           }
//         }
//         function onMouseLeave(){
//           initialX = currentX;
//           initialY = currentY;
    
//           active = false;
//           dragItem.classList.remove('modal-contact-topbar--active')
//         }
    
//         function setTranslate(xPos, yPos, dragElement) {
//           dragElement.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
//         }
    
//         container.addEventListener("touchstart", dragStart, false);
//         container.addEventListener("touchend", dragEnd, false);
//         container.addEventListener("touchmove", drag, false);
    
//         container.addEventListener('mouseleave', onMouseLeave)
//         container.addEventListener("mousedown", dragStart, false);
//         container.addEventListener("mouseup", dragEnd, false);
//         container.addEventListener("mousemove", drag, false);
// }
//move contact modal----------------->//

export const modals = () => {
    openModal();
    modalSelectOption();
    closeModal();
    contactModalSelect();
    // contactModalMove ();
}