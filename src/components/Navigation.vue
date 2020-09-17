<template>
  <div class="nav">
    <div class="nav__inner">
      <div class="nav__left">
        <StyledButton v-if="this.$route.name == 'portfolio'" class="nav__logo" link="#portfolio" text="COOPER" subtext="GOEKE"/>
        <StyledButton v-else class="nav__logo" link="/" text="COOPER" subtext="GOEKE"/>
      </div>
      <div class="nav__right">
        <StyledButton class="nav__link" link="/resume" text="Resume"/>
        <StyledButton class="nav__link" link="https://www.linkedin.com/in/coopergoeke" target="_blank" rel="noopener noreferrer" text="Linkedin"/>
      </div>
    </div>
  </div>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'

export default {
  name: 'Navigation',
  components: {
    StyledButton
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background-image: linear-gradient($color-gray, rgba(white, 0));
  left: 0;
  padding: 25px 5% 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;
  @include bp($bp-medium) {
    padding: 25px;
  }

  &__inner {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }

  &__left {
    float: left;
  }

  &__right {
    float: right;
  }

  &__link {
    &:first-child {
      @include bp($bp-small) {
        border-right: 0;
      }
    }

    &:last-child {
      display: none;
      @include bp($bp-small) {
        display: inline;
      }
    }
  }
}
</style>
