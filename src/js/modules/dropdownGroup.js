const dropdownGroup = () => {
  document.addEventListener('click', ({ target }) => {
    const dropdown = target.closest('.custom-dropdown')

    if (dropdown) {
      const dropdownSelectButton = dropdown.querySelector('[data-dropdown-button]')
      const dropdownLabelButton = dropdown.querySelector('.custom-dropdown__label')
      const dropdownList = dropdown.querySelector('[data-dropdown-list]')
      const dropdownItemLiNode = dropdownList.querySelectorAll('li')
      const dropdownInput = dropdown.querySelector('input')

      if (!target.closest('[data-dropdown-button]')) {
        dropdown.classList.remove('_is-open')
      }
      if (target.closest('[data-dropdown-button]')) {
        dropdown.classList.toggle('_is-open')
      }
      if (target.closest('[data-value]')) {
        dropdownLabelButton.innerText = target.dataset.value
        dropdownInput.value = target.dataset.value

        dropdownItemLiNode.forEach((item) => item.classList.remove('_active'))
        target.classList.add('_active')

        dropdownSelectButton.focus()
      }

      dropdown.addEventListener('keydown', ({ key }) => {
        if (key === 'Tab' || key === 'Escape') {
          dropdown.classList.remove('_is-open')
        }
      })
    } else {
      if (document.querySelector('.custom-dropdown._is-open')) {
        document.querySelector('.custom-dropdown._is-open')
          .classList.remove('_is-open')
      }
    }
  })
}

export default dropdownGroup