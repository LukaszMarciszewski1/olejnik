import '../../scss/style.scss';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-lightbox';
import Swiper from 'swiper';
function swiperSlider() {
    var menu = ['Drukarnia', 'Introligatornia', 'Postprodukcja']
    var swiper = new Swiper('.swiper-slider', {
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

function slickSlider(){
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

function slickGalleryLightbox(){
      $('.gallery__slider').slickLightbox({
        itemSelector: 'a',
        navigateByKeyboard: true,
        background: 'rgba(0,0,0,.97)',
      });
}

function slickPartnersCarousel(){
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
    swiperSlider();
    slickSlider();
    slickGalleryLightbox();
    slickPartnersCarousel()
}

