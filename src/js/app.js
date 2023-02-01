import * as module from './modules'
import dropdownGroup from './modules/dropdownGroup'
import onBlurInput from './modules/onBlurInput'
import { MousePRLX } from './libs/parallaxMouse'
import './modules/yandexMapLoad'

/* Раскомментировать для использования */
import Swiper, { Autoplay, Pagination } from 'swiper'

// Запускаем и добавляем в объект модулей
const mousePrlx = new MousePRLX({})

module.isWebp()
module.headerFixed()
module.setToggleWindowPopup()
module.countDown(5, 'timer-podvyazka')
module.countDown(3, 'timer-domik')
module.countDown(15, 'timer-hranenie')
module.countDown(1, 'timer-pensiya')
module.countDown(30, 'timer-zacepy')
module.countDown(50, 'timer-dostavka')

dropdownGroup()
onBlurInput()

const defaultSliderConfig = {
  modules: [Pagination, Autoplay],
  direction: 'horizontal',
  autoplay: { delay: 3000 },
  speed: 800,
  grabCursor: true,
  slidesPerView: 'auto',
}

new Swiper('.promotions__slider', {
  ...defaultSliderConfig,
  loop: true,
  spaceBetween: 65,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
})

new Swiper('.reviews__slider', {
  ...defaultSliderConfig,
  loop: false,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})