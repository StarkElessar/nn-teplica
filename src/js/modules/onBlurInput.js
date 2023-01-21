const onBlurInput = () => {
  document.querySelectorAll('input').forEach((input) => {
    input.onblur = ({ target: { nextElementSibling, value } }) => {
      nextElementSibling.style.opacity = value ? 0 : 1
    }
  })
}

export default onBlurInput
