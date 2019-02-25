<template>
  <div id="portfolio" class="page-wrap">
    <HomePage/>
    <AboutPage/>
    <WorkPage/>
    <ContactPage/>
  </div>
</template>

<script>
import HomePage from '@/components/pages/Home.vue'
import AboutPage from '@/components/pages/About.vue'
import WorkPage from '@/components/pages/Work.vue'
import ContactPage from '@/components/pages/Contact.vue'
import throttle from 'lodash.throttle'

export default {
  name: 'portfolio',
  components: {
    HomePage, AboutPage, WorkPage, ContactPage
  },
  created () {
    window.addEventListener('scroll', throttle(function () {
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
    }, 20))

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .page-wrap {
    padding: 100vh 0 0 0;
  }
</style>
