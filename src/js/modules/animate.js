// import AOS from 'aos';
// // import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
// import ScrollMagic from 'scrollmagic';
import { gsap, to } from "gsap";
// import { TimelineMax}  from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const iconsContainer = document.querySelector('.service__icon-container')
const rectangle = document.querySelectorAll('.about-us__content svg rect')


export function animations(){
  // const tween = new TimelineMax();
  // tween.add(
  //   TimelineMax.to(rectangle, 1, {
  //     strokeDashoffset:1
  //   })
  // )
  // tl.to(rectangle, {strokeDashoffset:1, delay: 2})
  const animation = gsap.to( '.about-us__content svg rect', {
    scrollTrigger:{
      trigger:'.about-us__content svg rect',
    },
    strokeDashoffset: 0,
    duration: 0.9,
    delay: 0.3,
    start: "top"

  }
)


// var scene = new ScrollMagic.Scene({
//   triggerElement: ".about-us__content svg rect",

// })
// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({triggerElement: rectangle, duration: 1000})
// .addIndicators()
// .addTo(controller)
// .setTween(tween)
  // gsap.fromTo(iconsContainer, {y: 100}, {y: 0, duration: 1, delay: 1});
  // tl.from(iconElements, 2, {opacity: 0}, {y: 50})
  //      .to(iconElements[0], 1, {y: 0, delay: 1.2, duration: 1})

// let tl = new TimelineMax({paused:true})
// tl.set(iconElements, {visibility: "visible"})

// let tl = gsap.timeline();
// tl.to(rectangle, {
//   scrollTrigger: rectangle,
//   strokeDashoffset: 0,
//   duration: 1,
//   delay: 3
// })
return animations
}
