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
    fixPages () {
      const pages = document.getElementsByClassName('page')
      let pageHeight = document.querySelector('.home').clientHeight
      for (let i = 1; i < (pages.length - 1); i++) {
        if (window.pageYOffset >= pages[i].offsetTop) {
          pages[i].classList.add('fixed')
        }
        if (window.pageYOffset <= (pages[i + 1].offsetTop - pageHeight)) {
          pages[i].classList.remove('fixed')
        }
      }
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

      // Always load the home page stuff
      document.getElementsByClassName('home__bg-image')[0].classList.add('active')
    }, 0)
  }
}
</script>
