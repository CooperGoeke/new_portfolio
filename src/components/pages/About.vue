<template>
  <section id="about" class="page about">
    <div class="about__text-wrap">
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
    align-items: center;
    background-blend-mode: multiply;
    background-color: $color-gray;
    background-image: url('../../assets/images/skill-tiles.svg');
    background-position: right -120px bottom -80px;
    background-repeat: no-repeat;
    background-size: 400px;
    display: flex;
    justify-content: center;
    z-index: 2;
    @include bp($bp-small) {
      background-position: 10% 65%;
      background-size: 40%;
    }

    &__text-wrap {
      padding-bottom: 10vh;
      text-align: center;
      width: 85%;
      @include bp($bp-small) {
        padding-bottom: 0;
        padding-left: 55%;
        text-align: left;
        width: 100%;
      }
    }

    &__text-wrap-inner {
      max-width: 450px;
      width: 100%;
    }

    &__portrait-wrap {
      display: flex;
      margin-bottom: 50px;
      justify-content: center;
      text-align: left;
      @include bp($bp-small) {
        justify-content: flex-start;
      }

      img {
        height: 80px;
        margin: 0 15px 0 -5px;
        width: 70px;
        @include bp($bp-small) {
          margin: 0 25px 0 0;
        }
      }

      h2 {
        margin-bottom: 10px;
        padding-top: 22px;
      }
    }

    &__button-wrap {
      margin-top: 100px;
    }

    &__button:first-child {
      border-right: 0;
    }
  }
</style>
