<template>
  <section id="about" class="page about">
    <div class="about__text-wrap">
      <div class="about__text-wrap-inner">
        <div class="about__portrait-wrap">
          <img alt="" src="@/assets/images/portrait.svg">
          <h2>Hello There</h2>
          <h3>I’m glad you’re here!</h3>
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
    background-color: $color-gray;
    background-image: url('../../assets/images/skill-tiles.svg');
    background-position: 10% 65%;
    background-repeat: no-repeat;
    background-size: 40%;
    display: flex;
    justify-content: center;
    z-index: 2;

    &__text-wrap {
      padding-left: 55%;
      width: 100%;
    }

    &__text-wrap-inner {
      max-width: 450px;
      width: 100%;
    }

    &__portrait-wrap {
      margin-bottom: 50px;

      &:after {
        content: "";
        display: table;
        clear: both;
      }

      img {
        float: left;
        margin-right: 25px;
        width: 70px;
      }

      h2 {
        margin-bottom: 10px;
        padding-top: 20px;
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
