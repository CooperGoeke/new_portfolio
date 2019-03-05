<template>
  <section id="work" class="page work">
    <div class="work__inner page__inner">
      <div class="work__wrap">
        <h2>My Work</h2>
        <h3>Some brands I've worked on:</h3>
        <div class="work__brands-wrap">
          <img alt="American Express" src="@/assets/images/brand-amex.png"/>
          <img alt="The Simple Dollar" src="@/assets/images/brand-tsd.png"/>
          <img alt="Bankrate" src="@/assets/images/brand-bankrate.png"/>
          <img alt="Frontier" src="@/assets/images/brand-frontier.png"/>
        </div>
        <h3>Some other websites I've made:</h3>
        <div class="work__sites-wrap">
          <StyledButton class="work__site-button" rel="nofollow" target="_blank" link="http://old.coopergoeke.com/" text="Old Portfolio"/>
          <StyledButton class="work__site-button" rel="nofollow" target="_blank" link="http://fiduciaryinsurancegroup.com/" text="Insurance Group"/>
          <StyledButton class="work__site-button" rel="nofollow" target="_blank" link="http://www.cincyrowing.org/" text="UC Rowing"/>
          <StyledButton class="work__site-button" rel="nofollow" target="_blank" link="http://neep.coopergoeke.com/" text="Neep App"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'

export default {
  name: 'work',
  components: {
    StyledButton
  }
}
</script>

<style lang="scss" scoped>
.work {
  background-color: $color-white;
  z-index: 3;

  &__inner {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  h3 {
    margin: 40px 0 25px;
    @include bp($bp-small) {
      margin: 50px 0 25px;
    }
  }

  &__brands-wrap {
    align-items: center;
    justify-content: center;
    @include bp($bp-small) {
      display: flex;
    }

    img {
      margin: 0 50px 30px;
      width: 110px;
      @include bp($bp-small) {
        margin: 0 50px;
        width: 130px;
      }

      &:nth-child(2) {
        display: none;
        @include bp($bp-small) {
          display: block;
        }
      }

      &:nth-child(4) {
        display: none;
        @include bp($bp-large) {
          display: block;
        }
      }
    }
  }

  &__site-button {
    display: block;
    margin: 30px auto;
    width: 170px;
    @include bp($bp-small) {
      display: inline;
      width: auto;
    }

    &:not(:last-child) {
      @include bp($bp-small) {
        border-right: none;
      }
    }

    &:nth-child(3) {
      margin: 30px auto 0;
      @include bp($bp-small) {
        margin: 30px auto;
      }
    }

    &:last-child {
      display: none;
      @include bp($bp-medium) {
        display: inline;
      }
    }
  }
}
</style>
