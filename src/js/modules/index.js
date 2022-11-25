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
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

// Функция для фиксированной шапки при скролле =================================================================================================================
export function headerFixed() {
  const header = document.querySelector('.header')
  const firstScreen = document.querySelector('[data-observ]')

  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('_sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}

export function burgerMenu() {
  const buttonBurger = document.querySelector('[data-burger]')
  const buttonPolicy = document.querySelector('.footer__policy')
  const burgerMenu = document.querySelector('[data-menu]')

  document.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.closest('[data-burger]')) {
      buttonBurger.classList.toggle('_active')
      burgerMenu.classList.toggle('_active')
    }

    if (target && target === buttonPolicy) {
      document.querySelector('.policy').classList.add('_active')
    }

    if (target && target.classList.contains('_overlay')) {
      document.querySelector('.policy').classList.remove('_active')
      buttonBurger.classList.remove('_active')
      burgerMenu.classList.remove('_active')
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

    if (distance < 0) clearInterval(x)
  }, 1000)
}
