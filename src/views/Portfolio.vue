<template>
  <div>
    <Navigation/>
    <div id="portfolio" class="page-wrap">
      <HomePage/>
      <AboutPage/>
      <WorkPage/>
      <ContactPage/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import HomePage from '@/components/pages/Home.vue'
import AboutPage from '@/components/pages/About.vue'
import WorkPage from '@/components/pages/Work.vue'
import ContactPage from '@/components/pages/Contact.vue'
import throttle from 'lodash.throttle'

export default {
  name: 'portfolio',
  components: {
    Navigation, HomePage, AboutPage, WorkPage, ContactPage
  },
  data () {
    return {
      previousScrollPosition: 0
    }
  },
  methods: {
    fixPages () {
      const pages = document.getElementsByClassName('page')
      let pageHeight = document.querySelector('.home').clientHeight
      let currentScrollPosition = window.pageYOffset

      // Adjust the math if the user is scrolling down the page for a smoother scroll
      let adjustment = (currentScrollPosition > this.previousScrollPosition) ? 20 : 0

      for (let i = 1; i < (pages.length - 1); i++) {
        // if user is scrolled past a page, fix it
        if (currentScrollPosition >= pages[i].offsetTop - adjustment) {
          pages[i].classList.add('fixed')
        }
        if (currentScrollPosition <= (pages[i + 1].offsetTop - pageHeight - adjustment)) {
          pages[i].classList.remove('fixed')
        }
      }
      this.previousScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition
    },
    triggerAnimations () {
      let scrollItems = document.querySelectorAll('.js-reveal-on-scroll:not(.active)')
      if (scrollItems) {
        for (let i = 0; i < (scrollItems.length); i++) {
          // If the top of the item is on screen then it animates
          if (scrollItems[i].getBoundingClientRect().top <= (window.innerHeight * 0.7)) {
            scrollItems[i].classList.add('active')
          }
        }
      }
    }
  },
  computed: {
    isDesktop: function () {
      // Check if this is not a mobile device
      return !(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
    }
  },
  created () {
    // Scroll
    window.addEventListener('scroll', throttle(() => {
      if (this.isDesktop) {
        this.fixPages()
      }
      this.triggerAnimations()
    }, 30))

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })

    // Fire a pointless scroll event when the page loads to animate everything on page load
    setTimeout(function () {
      let e = document.createEvent('Event')
      e.initEvent('scroll', true, true)
      window.dispatchEvent(e)
    }, 0)
  }
}
</script>

<style lang="scss">
@import '../assets/sass/reset';
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800');

#app {
  * {
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2 {
    color: $color-blue-dark;
    font-size: 24px;
    font-weight: 800;
  }

  h3, h4, h5, h6 {
    color: $color-blue-light;
    font-size: 13px;
    font-weight: 600;
  }

  p {
    color: $color-blue-dark;
    font-size: 13px;
    line-height: 2;
  }
}

.page {
  box-shadow: 0 -1px 0 rgba($color-blue-dark, .2);
  height: 600px;
  left: 0;
  overflow: hidden;
  top: 0;
  width: 100%;
  @media (min-height: 550px) {
    height: 100vh;
    position: absolute;
  }

  &:nth-child(2) {
    @media (min-height: 550px) {
      top: 100vh;
    }
  }

  &:nth-child(3) {
    @media (min-height: 550px) {
      top: 200vh;
    }
  }

  &:nth-child(4) {
    @media (min-height: 550px) {
      top: 300vh;
    }
  }

  &.fixed {
    @media (min-height: 550px) {
      position: fixed;
      top: 0;
    }
  }

  &__inner {
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
    position: relative;
    width: 100%;
  }
}
</style>
