<template>
  <section id="home" class="page home fixed">
    <div class="home__text-wrap">
      <h2>Web Developer<br/><span>+</span> Designer</h2>
      <h3>Helping to Create a Better Web</h3>
      <StyledButton class="home__button" link="#about" text="Learn More"/>
    </div>
    <AnimatedCity class="home__bg-image"/>
  </section>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'
import AnimatedCity from '@/components/AnimatedCity.vue'

export default {
  name: 'home',
  components: {
    StyledButton, AnimatedCity
  },
  mounted: function () {
    let city = new Snap('#city')
    let lines = city.select('#bottom_lines')
    let stages = [
      city.select('#stage1'), city.select('#stage2'), city.select('#stage3'), city.select('#stage4'),
      city.select('#stage5'), city.select('#stage6'), city.select('#stage7'), city.select('#stage8')
    ]
    for (let i = 0; i < stages.length; i++) {
      stages[i].transform('t0, -30')
    }
    document.querySelector('.home__text-wrap').classList.add('active')
    lines.animate({
      opacity: '1'
    }, 500, mina.linear, function() {
      for (let i = 0; i < stages.length; i++) {
        setTimeout(function () {
          stages[i].animate({
            transform: 't0, 0'
          }, 800, mina.bounce)
          stages[i].addClass('active')
        }, 50*i);
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .home {
    z-index: 1;

    &__text-wrap {
      margin: 100px auto 0;
      opacity: 0;
      position: relative;
      text-align: center;
      top: -30px;
      transition: opacity .5s linear, top .5s ease-out;
      width: 600px;
      z-index: 2;

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
      height: 60%;
      left: 50%;
      max-width: 1000px;
      pointer-events: none;
      position: absolute;
      transform: translateX(-50%);
      width: auto;
      z-index: 1;
    }
  }
</style>
