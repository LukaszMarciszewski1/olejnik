"use strict";


//MODAL--------------------------------------------------------->

function modals() {
    const modal = document.querySelector('.modal');
    const contentModal = [...document.querySelectorAll('.content')]
    const contentCategory = [...document.querySelectorAll('.content__category')];
    const itemsServices = [...document.querySelectorAll('.services-gallery__items')];
    const modalClose = document.querySelector('.modal__close');
    const modalBtnOptin = document.querySelectorAll('.content__option-button');
    const descriptionTxt = document.querySelectorAll('.content-description-txt');
    const contactModal = document.querySelector('.wrap-contact-modal');
    //open modal-------->
    function openModal() {
        itemsServices.forEach(item => item.addEventListener('click', function () {
            document.body.style.overflow = 'hidden'
            modal.classList.add('active-modal');
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
    }

    //modal-select-option----->
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

    openModal();
    modalSelectOption();
    closeModal();
}
///contact modal open/close------------->
function contactModalSelect() {
    const contactModal = document.querySelector('.wrap-contact-modal');
    document.querySelector('.call-to-us__btn-modal').addEventListener('click', () => {
        contactModal.classList.add('wrap-contact-modal--active')
    })
    document.querySelector('.contact-modal-close').addEventListener('click', () => {
        contactModal.classList.remove('wrap-contact-modal--active')
    })
}

export const modalProducts = () => {
    modals();
}
export const modalContact = () => {
    contactModalSelect()
}