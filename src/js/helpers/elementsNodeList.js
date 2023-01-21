const html = document.documentElement
const body = document.body
const pageWrapper = document.querySelector('.page')
const header = document.querySelector('.header')
const firstScreen = document.querySelector('[data-observ]')
const burgerButton = document.querySelector('[data-burger]')
const menu = document.querySelector('.menu')
const lockPaddingElements = document.querySelectorAll('[data-lp]')
const buttonPolicy = document.querySelector('.footer__policy')
const burgerMenu = document.querySelector('[data-menu]')
const policyPopup = document.querySelector('.policy')

export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  buttonPolicy,
  burgerMenu,
  policyPopup,
}
