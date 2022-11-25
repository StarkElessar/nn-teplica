import * as flsFunctions from './modules'
import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
import Swiper, { Autoplay, Pagination } from 'swiper'

// Запускаем и добавляем в объект модулей
const mousePrlx = new MousePRLX({})

flsFunctions.isWebp()
flsFunctions.headerFixed()
flsFunctions.burgerMenu()
flsFunctions.countDown(5, 'timer-podvyazka')
flsFunctions.countDown(3, 'timer-domik')
flsFunctions.countDown(15, 'timer-hranenie')
flsFunctions.countDown(1, 'timer-pensiya')
flsFunctions.countDown(30, 'timer-zacepy')
flsFunctions.countDown(50, 'timer-dostavka')

new Swiper('.promotions__slider', {
  modules: [ Pagination, Autoplay ],
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 65,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
});