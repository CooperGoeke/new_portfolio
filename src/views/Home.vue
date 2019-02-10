<template>
  <section class="page home">
    <div class="home__text-wrap">
      <h2>Web Developer<br/><span>+</span> Designer</h2>
      <h3>Helping to Create a Better Web</h3>
      <StyledButton class="home__button" link="/about" text="Learn More"/>
    </div>
    <img alt="" class="home__bg-image" src="@/assets/images/small-city.svg" aria-hidden="true"/>
  </section>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'

export default {
  name: 'home',
  components: {
    StyledButton
  }
}
</script>

<style scoped lang="scss">
  .home {

    &__text-wrap {
      margin: 100px auto 0;
      position: relative;
      text-align: center;
      width: 600px;
      z-index: 2;
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
