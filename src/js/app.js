import * as flsFunctions from './modules'
import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Запускаем и добавляем в объект модулей
const mousePrlx = new MousePRLX({})

flsFunctions.isWebp()
flsFunctions.burgerMenu()