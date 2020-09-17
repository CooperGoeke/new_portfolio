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
  methods: {
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
  created () {
    // Scroll
    window.addEventListener('scroll', throttle(() => {
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
  border-top: 1px solid rgba($color-blue-dark, .2);
  height: 600px;
  overflow: hidden;
  width: 100%;
  @media (min-height: 550px) {
    height: 100vh;
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
