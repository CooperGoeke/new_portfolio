<template>
  <section id="about" class="page about">
    <div class="about__inner page__inner">
      <div class="about__text-wrap js-reveal-on-scroll">
        <div class="about__text-wrap-inner">
          <div class="about__portrait-wrap">
            <img alt="" src="@/assets/images/portrait.svg">
            <div>
              <h2>Hello There</h2>
              <h3>I’m glad you’re here!</h3>
            </div>
          </div>
          <p>My name is Cooper and I’ve been doing web development and graphic design since 2010. I specialize as a front-end developer. I’ve got a long list of technologies and skills under my belt at this point, so I encourage you to check my resume for a full list.</p>
          <div class="about__button-wrap">
            <StyledButton class="about__button" link="#work" text="My Work"/>
            <StyledButton class="about__button" link="/resume" text="Resume"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'

export default {
  name: 'about',
  components: {
    StyledButton
  }
}
</script>

<style lang="scss" scoped>
.about {
  background-color: $color-gray;
  z-index: 2;

  &__inner {
    align-items: center;
    background-image: url('../../assets/images/skill-tiles.svg');
    background-position: left -80% bottom -110px;
    background-repeat: no-repeat;
    background-size: 80%;
    display: flex;
    justify-content: center;
    @media (max-aspect-ratio: 1/2) {
      background-position: left -120px bottom -90px;
      background-size: 120%;
    }
    @media (min-aspect-ratio: 2/2) {
      background-position: left -120px bottom -100px;
      background-size: 55%;
    }
  }

  &__text-wrap {
    left: 30px;
    opacity: 0;
    padding-bottom: 10vh;
    position: relative;
    text-align: center;
    transition: left .5s ease-out, opacity .25s linear;
    width: 85%;
    @media (min-aspect-ratio: 3/2) {
      padding-bottom: 0;
      padding-left: 50%;
      text-align: left;
      width: 100%;
    }

    &.active {
      left: 0;
      opacity: 1;
    }
  }

  &__text-wrap-inner {
    margin: 0 auto;
    max-width: 450px;
    width: 100%;
    @media (min-aspect-ratio: 3/2) {
      margin: 0;
    }
  }

  &__portrait-wrap {
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    text-align: left;
    @media (min-aspect-ratio: 3/2) {
      justify-content: flex-start;
    }

    img {
      height: 80px;
      margin: 0 15px 0 -5px;
      width: 70px;
      @media (min-aspect-ratio: 3/2) {
        margin: 0 25px 0 0;
      }
    }

    h2 {
      margin-bottom: 10px;
      padding-top: 22px;
    }
  }

  &__button-wrap {
    margin-top: 70px;
  }

  &__button:first-child {
    border-right: 0;
  }
}
</style>
