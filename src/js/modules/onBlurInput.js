const onBlurInput = () => {
  document.querySelectorAll('input').forEach((input) => {
    input.onblur = ({ target: { value } }) => {
      input.classList.toggle('_focus', value)
    }
  })
}

export default onBlurInput
