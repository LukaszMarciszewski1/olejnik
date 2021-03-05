// import '../../scss/style.scss';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-lightbox';
import Swiper from 'swiper';

//header slider
function headerSlider() {
  const slides = document.querySelector('.header-slider__content').children;
  const pagination = document.querySelector('.header-slider__pagination');
  let index = 0;
  const time = 5000;

  function createPagination() {
    for (let i = 0; i < slides.length; i++) {
      const div=document.createElement("div");
      div.classList.add('header-slider__pagination-item');
      div.id=i
      if (i == 0) {
        div.classList.add("header-slider__pagination-item--active");
      }
      pagination.appendChild(div);
    }
  }
  createPagination();

  function paginationChangeSlide(){
    const dots = [...pagination.children];
    dots.forEach(dot=>dot.addEventListener('click', function(){
      index=this.id;
      changeSlide();
      updatePagination();
      resetTimer()
    }))
  }
  paginationChangeSlide()

  function updatePagination() {
    for (let i = 0; i < pagination.children.length; i++) {
      pagination.children[i].classList.remove("header-slider__pagination-item--active");
    }
      pagination.children[index].classList.add("header-slider__pagination-item--active");

  }

  function nextSlide() {
    if (index == slides.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeSlide();
  }

  function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("header-slider__items--active");
    }

    slides[index].classList.add("header-slider__items--active");
  }

  function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoPlay, time);
}

  function autoPlay() {
    nextSlide();
    updatePagination()

  }
let timer = setInterval(autoPlay, time);
}

//swiper slider departaments
function swiperSlider() {
  var menu = ['Drukarnia', 'Introligatornia', 'Postprodukcja']
  var swiper = new Swiper('.swiper-slider__container', {
    spaceBetween: 30,
    effect: 'fade',
    loop: false,
    autoHeight: true,
    pagination: {
      el: '.swiper-slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  return swiper
}

//gallery slider
function slickSlider() {
  $('.gallery__slider').slick({
    dots: false,
    infinite: false,
    speed: 800,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  });
}

function slickGalleryLightbox() {
  $('.gallery__slider').slickLightbox({
    itemSelector: 'a',
    navigateByKeyboard: true,
    background: 'rgba(0,0,0,.97)',
  });
}

//partners slider
function slickPartnersCarousel() {
  $('.partners__carousel').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1248,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]

  });
}

export const sliders = () => {
  headerSlider();
  swiperSlider();
  slickSlider();
  slickGalleryLightbox();
  slickPartnersCarousel();
}