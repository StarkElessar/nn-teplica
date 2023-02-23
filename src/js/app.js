import * as module from './modules'
import dropdownGroup from './modules/dropdownGroup'
import onFocusInput from './modules/onFocusInput'
import onBlurInput from './modules/onBlurInput'
import includeSliders from './modules/includeSliders'
import animationGSAPOnPage from './modules/animations'
import { MousePRLX } from './libs/parallaxMouse'
import './modules/yandexMapLoad'

// Запускаем и добавляем в объект модулей
new MousePRLX({})

animationGSAPOnPage()

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
onFocusInput()
onBlurInput()
includeSliders()