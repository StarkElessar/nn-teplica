import { html, header, firstScreen, burgerButton, burgerMenu, buttonPolicy, policyPopup } from '../helpers/elementsNodeList'
import toggleBodyLock from '../helpers/toggleBodyLock'
// FLS (Full Logging System)
export function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message)
    }
  }, 0)
}

export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp((support) => html.classList.add(support ? 'webp' : 'no-webp'))
}

// Функция для фиксированной шапки при скролле =================================================================================================================
export function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('_sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}

export function setToggleWindowPopup() {
  document.addEventListener('click', ({ target }) => {
    if (target && target.closest('[data-burger]')) {
      burgerButton.classList.toggle('_active')
      burgerMenu.classList.toggle('_active')
      toggleBodyLock(burgerMenu.classList.contains('_active'))
    }

    if (target && target === buttonPolicy) {
      policyPopup.classList.add('_active')
      toggleBodyLock(true)
    }

    if (target && target.classList.contains('_overlay')) {
      policyPopup.classList.remove('_active')
      burgerButton.classList.remove('_active')
      burgerMenu.classList.remove('_active')

      toggleBodyLock(false)
    }
  })
}

export function countDown(hourNumber, timerId) {
  const currentTimer = document.getElementById(timerId)
  const hoursPlace = currentTimer.querySelector('.timer__group_hours')
  const minutesPlace = currentTimer.querySelector('.timer__group_minutes')
  const secondsPlace = currentTimer.querySelector('.timer__group_seconds')
  const countDownDate = new Date().getTime() + hourNumber * 60 * 60 * 1000

  const x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownDate - now

    // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    hoursPlace.innerHTML = hours <= 9 ? `0${hours}` : hours
    minutesPlace.innerHTML = minutes <= 9 ? `0${minutes}` : minutes
    secondsPlace.innerHTML = seconds <= 9 ? `0${seconds}` : seconds

    distance < 0 ? clearInterval(x) : null
  }, 1000)
}
