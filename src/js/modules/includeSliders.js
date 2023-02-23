import Swiper, { Autoplay, Pagination } from 'swiper'

const includeSliders = () => {
  const defaultSliderConfig = {
    modules: [Pagination, Autoplay],
    direction: 'horizontal',
    autoplay: { delay: 3000 },
    speed: 800,
    grabCursor: true,
    slidesPerView: 'auto',
  }
  
  new Swiper('.promotions__slider', {
    ...defaultSliderConfig,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        spaceBetween: 15,
      },
      768: {
        spaceBetween: 65,
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })
  
  new Swiper('.reviews__slider', {
    ...defaultSliderConfig,
    loop: false,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  })
}

export default includeSliders