<template>
  <section id="home" class="page home">
    <div class="home__inner page__inner">
      <div class="home__text-wrap js-reveal-on-scroll">
        <h2>Web Developer<br/><span>+</span> Designer</h2>
        <h3>Working to Build a Better Web</h3>
        <StyledButton class="home__button" link="#about" text="Learn More"/>
      </div>
      <AnimatedCity class="home__bg-image" :shouldAnimate="isDesktop" />
      <AnimatedCooper class="home__cooper" :shouldAnimate="isDesktop" />
    </div>
  </section>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'
import AnimatedCity from '@/components/AnimatedCity.vue'
import AnimatedCooper from '@/components/AnimatedCooper.vue'

export default {
  name: 'home',
  components: {
    StyledButton, AnimatedCooper, AnimatedCity
  },
  computed: {
    isDesktop: function () {
      // Check if this is not a mobile device
      return !(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
    }
  }
}
</script>

<style lang="scss" scoped>
  $cloud: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.8 32.3"><path d="M19.02 31h27.66c22.6 0 10.97-24.68-1.64-14.54 0-20.66-25.47-19.73-25.47-2.47C4.16 3.54-11.64 31 19.02 31z" fill-rule="evenodd" clip-rule="evenodd" fill="%23f8fafd" stroke="%238aa8c5" stroke-width=".25" stroke-miterlimit="10"/></svg>';

  .home {
    background-color: $color-white;
    z-index: 1;

    &__inner {
      align-items: center;
      background: url($cloud) 15% 53% no-repeat, url($cloud) 10% 15% no-repeat, url($cloud) 75% 55% no-repeat, url($cloud) 90% 20% no-repeat;
      background-size: 65px;
      display: flex;
      justify-content: center;
      @include bp($bp-small) {
        background: url($cloud) 5% 40% no-repeat, url($cloud) 20% 10% no-repeat, url($cloud) 28% 30% no-repeat, url($cloud) 68% 37% no-repeat, url($cloud) 80% 15% no-repeat, url($cloud) 95% 25% no-repeat;
        background-size: 70px;
      }
    }

    &__text-wrap {
      max-width: 600px;
      opacity: 0;
      padding-bottom: 25vh;
      position: relative;
      text-align: center;
      top: -30px;
      transition: opacity .5s linear, top .5s ease-out;
      width: 100%;
      z-index: 2;
      @include bp($bp-small) {
        padding-bottom: 48vh;
      }

      &.active {
        opacity: 1;
        top: 0;
      }
    }

    h2 {
      margin-bottom: 45px;

      span {
        color: $color-blue-middle;
      }
    }

    &__button {
      margin-top: 15px;
    }

    &__bg-image {
      bottom: -20px;
      height: 40%;
      left: 50%;
      max-height: 600px;
      pointer-events: none;
      position: absolute;
      transform: translateX(-50%);
      width: auto;
      z-index: 1;
      @include bp($bp-small) {
        height: 60%;
      }
    }

    &__cooper {
      height: 9%;
      left: calc(50% - 100px);
      max-height: 150px;
      position: absolute;
      top: 57%;
      width: auto;
      z-index: 2;
      @include bp($bp-small) {
        left: calc(50% - 170px);
        top: 42%;
      }
    }
  }
</style>
