const onFocusInput = () => {
  document.querySelectorAll('input').forEach((input) => {
    input.onfocus = ({ target }) => {
      target.classList.add('_focus')
    }
  })
}

export default onFocusInput