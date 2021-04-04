import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function scrollIndex() {
  const callToUs = document.querySelector('.call-to-us__content p');
  const callToUsBtn = document.querySelector('.call-to-us__btn-scroll');
  const swiperTextBg = document.querySelector('.swiper-slider__content');
  const swiperImg = document.querySelector('.swiper-slider__img img');
  const titleSwiper = document.querySelector('h2.departaments__title');
  const sectionDepartaments = document.querySelector('.departaments');
  const swiperPaginations = document.querySelectorAll('.swiper-slider__pagination');
  const ourFeaturesItems = document.querySelectorAll('.our-features__container');
  const gallery = document.querySelector('.gallery');
  const galleryTitle = document.querySelector('.gallery__title');
  const aboutUs = document.querySelectorAll('.about-us__text');
  const partners = document.querySelectorAll('.partners');
  const contact = document.querySelectorAll('.contact');

  //call-to-us section
  gsap.fromTo(callToUs, {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    ease: 'easeInOut',
    scrollTrigger: {
      trigger: callToUs,
      start: 'bottom bottom',
    }
  });
  gsap.fromTo(callToUsBtn, {
    opacity: 0,
    scale: 0,
  }, {
    opacity: 1,
    scale: 1,
    delay: 0.5,
    duration: 0.5,
    ease: 'easeInOut',
    scrollTrigger: {
      trigger: callToUs,
      start: 'bottom bottom',
    }
  });

  //swiper slider departament section
  gsap.fromTo(swiperImg, {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.3,
    ease: 'linear',
    scrollTrigger: {
      trigger: swiperImg,
      start: '10% bottom',
    }
  });
  gsap.fromTo(swiperTextBg, {
    y: '+=100',
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: 'easeInOut',
    scrollTrigger: {
      trigger: swiperTextBg,
      start: '10% bottom',
    }
  });


  swiperPaginations.forEach(pagination => {
    gsap.fromTo(pagination.children, {
      y: '+=30',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .7,
      stagger: 0.2,
      duration: 1,
      ease: 'ease',
      scrollTrigger: {
        trigger: sectionDepartaments,
        start: 'center bottom',
      }
    });
  });
  gsap.fromTo(titleSwiper, {
    x: '+=100',
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: sectionDepartaments,
      start: '20% bottom',
    }
  });

  // our-features section
  ourFeaturesItems.forEach(item => {
    gsap.fromTo(item.children, {
      y: '+=100',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: item,
        start: '20% bottom',
      }
    });
  });

  // gallery
  gsap.fromTo(gallery, {
    y: '+=50',
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: gallery,
      start: '20% bottom',
    }
  });
  gsap.fromTo(galleryTitle, {
    y: '+=30',
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: gallery,
      start: 'top bottom',
    }
  });

  //about us
  aboutUs.forEach(item => {
    gsap.fromTo(item.children, {
      y: '+=100',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: item,
        start: '10% bottom',
      }
    });
  });

  //partners slider
  partners.forEach(item => {
    gsap.fromTo(item.children, {
      y: '+=100',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.7,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: item,
        start: '20% bottom',
      }
    });
  });

  //contact
  contact.forEach(item => {
    gsap.fromTo(item.children, {
      y: '+=100',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.4,
      duration: 1,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: item,
        start: '10% bottom',
      }
    });
  });
}

function scrollFooter() {
  const footer = document.querySelectorAll('.footer__inner');
  footer.forEach(item => {
    gsap.fromTo(item.children, {
      y: '+=50',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0.3,
      stagger: 0.2,
      duration: .7,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: item,
        start: '20% bottom',
      }
    });
  });
}

function scrollServicesDesc() {
  const serviceTxt = document.querySelectorAll('.services-description__content');
  serviceTxt.forEach(text => {
    gsap.fromTo(text.children, {
      y: '+=40',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.2,
      ease: 'ease',
      scrollTrigger: {
        trigger: serviceTxt,
        start: '20% bottom',
      }
    });
  });
}

function panelServices() {
  const iconsTxt = document.querySelectorAll('.services__icons-p')
  const iconContainer = document.querySelector('.services');
      gsap.fromTo(iconsTxt, {
        x: '-=100',
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.4,
        duration: 0.5,
        ease: 'ease'
      });
      gsap.fromTo(iconContainer, {
        x: '-=100%'
      }, {
        x: 0,
        stagger: 0.2,
        delay: 0,
        duration: 1.2,
        ease: 'ease'
      });
}

function scrollServicePanel() {
  const iconsTxt = document.querySelectorAll('.services__icons-item')
  const iconContainer = document.querySelector('.services');
  const headerContainer = document.querySelector('.header');
  const itemPanel = document.querySelectorAll('.services__icons-item')
  const openBtn = document.querySelector('.open-panel');
  let active = true
  let select = true

  function hidden(){
    iconContainer.style.transition = '.5s'
    iconContainer.style.transform = 'translate(calc(-100% + 65px), -75px)'
    itemPanel.forEach(item=>item.classList.add('services__icons-item--scroll'))
    openBtn.classList.add('open-panel--active')
    iconsTxt.forEach(p => p.classList.add('services__icons-p--scroll'))
    select = false
  }
  function show(){
    iconContainer.style.transform = 'translate(0, -75px)'
    openBtn.classList.remove('open-panel--active')
  }

  function scroll(){
  window.addEventListener('scroll', () => {
    openBtn.classList.remove('open-panel--active')
    if(window.scrollY >= headerContainer.offsetHeight - 100){
      active=false
    }

    else{
      active = true
    }

    if(!active){
       hidden()
       if(!select){
        openBtn.addEventListener("mouseenter", show)
       }
    }
    
    else if(active) {
      itemPanel.forEach(item=>item.classList.remove('services__icons-item--scroll'))
      iconsTxt.forEach(p => p.classList.remove('services__icons-p--scroll'))
      show()
    }
  })
}
}

function scrollCadrLabels(){
  const cards = document.querySelectorAll('.services-gallery-card')
  const title = document.querySelectorAll('.stycky-wrap')
  cards.forEach(item => {
    gsap.fromTo(item, {
      y: '+=170',
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: item,
        start: '0% bottom',
      }
    });
  });
}

export const animationsIndex = () => {
  scrollIndex();
}

export const animationFooter = () => {
  scrollFooter()
}

export const animationServiceDescription = () => {
  scrollServicesDesc()
}

export const animationServicePanel = () => {
  panelServices()
}
export const animationScrollServicePanel = () =>{
  scrollServicePanel()
}

export const animationCadrLabels = () => {
  scrollCadrLabels()
}
