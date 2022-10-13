export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

export function burgerMenu() {
  const buttonBurger = document.querySelector('[data-burger]')
  const burgerMenu = document.querySelector('[data-menu]')

  document.addEventListener('click', (event) => {
    const target = event.target

    if (target && target.closest('[data-burger]')) {
      buttonBurger.classList.toggle('_active')
      burgerMenu.classList.toggle('_active')
    }
    if (target && target.classList.contains('_overlay')) {
      buttonBurger.classList.remove('_active')
      burgerMenu.classList.remove('_active')
    }
  })
}
