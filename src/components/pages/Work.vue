<template>
  <section id="work" class="page work">
    <div class="work__inner page__inner">
      <div>
        <h2 class="work__section js-reveal-on-scroll">My Work</h2>
        <div class="work__section js-reveal-on-scroll">
          <h3>Some brands I've worked on:</h3>
          <div class="work__brands-wrap">
            <img alt="American Express" src="@/assets/images/brand-amex.png"/>
            <img alt="The Simple Dollar" src="@/assets/images/brand-tsd.png"/>
            <img alt="Bankrate" src="@/assets/images/brand-bankrate.png"/>
            <img alt="Frontier" src="@/assets/images/brand-frontier.png"/>
          </div>
        </div>
        <div class="work__section work__section--middle js-reveal-on-scroll">
          <svg viewBox="0 0 33.7 33.3">
            <path fill="#324c78" d="M.6 17.5v-1.8-.3c.1-.6.1-1.2.2-1.8C2.4 4.5 11.4-1.4 20.4.7c10.4 2.4 15.8 14.1 10.7 23.5-2.5 4.7-6.5 7.5-11.7 8.4-.6.1-1.2.1-1.7.2h-1.8c-.4 0-.7-.1-1.1-.1-3.2-.4-6.1-1.6-8.5-3.7-3.1-2.7-5-6.1-5.6-10.2 0-.4-.1-.8-.1-1.3zm26.3-.8v-2.9c0-.4-.2-.7-.5-1-3-2-5.9-4-8.9-5.9-.5-.3-.8-.3-1.2 0-3 2-5.9 4-8.9 5.9-.4.2-.5.5-.5 1v5.8c0 .4.2.7.5 1 3 2 5.9 3.9 8.9 5.9.5.3.8.3 1.2 0 3-2 5.9-4 8.9-5.9.4-.2.5-.6.5-1v-2.9z"/>
            <path fill="#324c78" d="M12.2 15.6c-1-.7-2-1.3-3-2 2.3-1.5 4.5-3 6.7-4.5V12.8c0 .2-.1.3-.2.4-1.1.8-2.3 1.6-3.5 2.4z"/>
            <path fill="#324c78" d="M21.5 15.6l-3.6-2.4c-.1 0-.1-.1-.1-.2V9.3v-.1c2.2 1.5 4.5 3 6.7 4.5-1 .6-2 1.2-3 1.9z"/>
            <path fill="#324c78" d="M15.9 24.2c-2.2-1.5-4.5-3-6.7-4.5l1.8-1.2c.3-.2.7-.5 1-.7h.3c1.2.8 2.3 1.5 3.4 2.3.1 0 .1.2.1.2V24c.2.1.2.1.1.2z"/>
            <path fill="#324c78" d="M24.5 19.7c-2.3 1.5-4.5 3-6.7 4.5v-.3-3.4c0-.2 0-.3.2-.4 1.1-.7 2.2-1.5 3.4-2.2.1-.1.2-.1.3 0 .8.5 1.8 1.1 2.8 1.8z"/>
            <path fill="#324c78" d="M13.8 16.7c.7-.5 1.3-.9 2-1.3l.9-.6c.1 0 .2-.1.3 0 1 .6 2 1.3 2.9 2-.7.5-1.3.9-2 1.3l-.9.6c-.1 0-.2.1-.3 0-.9-.7-1.9-1.4-2.9-2z"/>
            <path fill="#324c78" d="M10.7 16.7c-.7.5-1.4.9-2.1 1.4v-2.9l2.1 1.5z"/>
            <path fill="#324c78" d="M25.1 18.1c-.7-.5-1.4-.9-2.1-1.4.7-.5 1.4-.9 2.1-1.4v2.8z"/>
          </svg>
          <h3 class="inline">You can see my latest code experiments on&nbsp;</h3>
          <a class="codepen-link" rel="nofollow noopener noreferrer" target="_blank" href="https://codepen.io/coopergoeke">CodePen</a>
        </div>
        <div class="work__section js-reveal-on-scroll">
          <h3>Or some older websites I made:</h3>
          <div class="work__sites-wrap">
            <StyledButton class="work__site-button" rel="nofollow noopener noreferrer" target="_blank" link="http://old.coopergoeke.com/" text="Old Portfolio"/>
            <StyledButton class="work__site-button" rel="nofollow noopener noreferrer" target="_blank" link="http://fiduciaryinsurancegroup.com/" text="Insurance Group"/>
            <StyledButton class="work__site-button work__site-button--last" rel="nofollow noopener noreferrer" target="_blank" link="http://www.cincyrowing.org/" text="UC Rowing"/>
            <StyledButton class="work__site-button work__site-button--last" rel="nofollow noopener noreferrer" target="_blank" link="http://neep.coopergoeke.com/" text="Neep App"/>
          </div>
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

  &__section {
    left: -30px;
    opacity: 0;
    position: relative;
    transition: left .5s ease-out, opacity .25s linear;

    &.active {
      left: 0;
      opacity: 1;
    }

    &--middle {
      margin: 0 auto 40px;
      max-width: 260px;
      @include bp($bp-small) {
        margin: 0;
        max-width: none;
      }
    }

    svg {
      display: inline-block;
      margin-right: 5px;
      transform: translate(0%, 35%);
      width: 30px;
    }

    .codepen-link {
      color: $color-blue-dark;
      display: inline;
      font-size: 13px;
      font-weight: 600;
    }
  }

  h3 {
    margin: 20px 0 20px;

    &.inline {
      display: inline;
      line-height: 2;
      @include bp($bp-small) {
        display: inline-block;
        margin: 50px 0 20px;
      }
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

    &--last {
      display: none;
      @include bp($bp-medium) {
        display: inline;
      }
    }
  }
}
</style>
