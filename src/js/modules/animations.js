import { gsap, ScrollTrigger, Power3 } from 'gsap/all'
import { body } from './../helpers/elementsNodeList'

const animationGSAPOnPage = () => {
  gsap.registerPlugin(ScrollTrigger)

  const timeLineLoader = gsap.timeline()

  timeLineLoader
    .set('.loader__item', {
      yPercent: -100,
      opacity: 0,
    })
    .set('.loader__title', {
      opacity: 0,
    })
    .to('.loader__item', {
      yPercent: 0,
      opacity: 1,
      ease: Power3.easeInOut,
      duration: 0.8,
      stagger: 0.1,
    })
    .set(body, {
      css: {
        paddingRight: '8px'
      }
    })
    .to('.loader__item', {
      duration: 0.8,
      ease: Power3.easeInOut,
      scale: 3,
      opacity: 0.05,
    })
    .to('.loader__title', {
      opacity: 1,
      duration: 2.6,
      scale: 1.2,
      ease: Power3.easeInOut,
    }, '-=0.6')
    .to('.loader', {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: Power3.easeInOut,
    })
    .to('.loader', {
      css: {
        visibility: 'hidden',
      },
    })
    .to(body, {
      className: '',
      duration: 0,
      css: {
        paddingRight: 0,
      }
    })
    .from('.promotions__title', {
      opacity: 0,
      yPercent: 30,
      duration: 1,
    }, '-=1')
    
  
  gsap.to('.promo__title', {
    scrollTrigger: {
      trigger: '.promo',
      start: 'top top',
      scrub: true,
    },
    y: -50,
    autoAlpha: 0,
  })

  gsap.to('.promo__subtitle', {
    scrollTrigger: {
      trigger: '.promo',
      start: 'top top',
      scrub: true,
    },
    y: -50,
    autoAlpha: 0.5,
  })

  gsap.to('.promo__features', {
    scrollTrigger: {
      trigger: '.promo',
      start: 'top top',
      scrub: true,
    },
    css: {
      left: '-280px'
    },
  })

  gsap.to('.promo__grandma-bg img', {
    scrollTrigger: {
      trigger: '.promo',
      start: 'top top',
      scrub: true,
    },
    css: {
      right: '-280px'
    },
  })

  gsap.from('.about__title', {
    scrollTrigger: {
      trigger: '.promotions',
      start: '0 0',
      scrub: true,
    },
    opacity: 0,
    y: -200,
  })

  gsap.from('.stats-group__item', {
    scrollTrigger: {
      trigger: '.promotions',
      start: '0 0',
      scrub: true,
    },
    opacity: 0,
    xPercent: -100,
    stagger: 0.4
  })

  gsap.from('.whyme__item', {
    scrollTrigger: {
      trigger: '.promotions__slider ',
      start: '0 0',
      end: '+=600',
      scrub: true,
    },
    opacity: 0,
    y: -20,
    stagger: 0.4
  })

  gsap.from('.catalog__vegetables-ibg', {
    scrollTrigger: {
      trigger: '.about__title ',
      start: '0 0',
      end: '+=400',
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: -100,
  })

  gsap.from('.catalog__title', {
    scrollTrigger: {
      trigger: '.about__title ',
      start: '0 0',
      end: '+=400',
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: -60,
  })
}

export default animationGSAPOnPage
