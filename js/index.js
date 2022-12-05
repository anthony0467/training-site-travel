const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const mediaQuery = 'screen and (min-width: 700px)';
const mql = window.matchMedia(mediaQuery);
const headerSection = document.getElementById('header')
const section1 = document.getElementById('destination')
const section2 = document.getElementById('inspiration')
const section3 = document.getElementById('a-propos')
const section4 = document.getElementById('contact')

if (window.matchMedia("(min-width: 700px)").matches) {
  headerSection.classList.add('fadeOut')
  section1.classList.add('fadeOut')
  section2.classList.add('fadeOut')
  section3.classList.add('fadeOut')
  section4.classList.add('fadeOut')
  var observer = new IntersectionObserver((entries) => {
    for (entry of entries) {

      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn')
      }

    }
  }, {
    threshold: .4
  })
  observer.observe(document.querySelector('.header'))
  observer.observe(document.querySelector('#destination'))
  observer.observe(document.querySelector('#inspiration'))
  observer.observe(document.querySelector('#a-propos'))
  observer.observe(document.querySelector('#contact'))
} else {
  /* L'affichage est inférieur à 700px de large */
}




// slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50
    },
    // when window width is <= 500px
    650: {
      slidesPerView: 2,
      spaceBetweenSlides: 2
    },
    // when window width is <= 500px
    900: {
      slidesPerView: 3,
      spaceBetweenSlides: 2
    },
    // when window width is <= 500px
    1150: {
      slidesPerView: 4,
      spaceBetweenSlides: 2
    }
  }

});

// navbar


hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});