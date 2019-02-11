<template>
  <div class="nav">
    <div class="nav__left">
      <StyledButton v-if="this.$route.name == 'portfolio'" class="nav__logo" link="#portfolio" text="COOPER" subtext="GOEKE"/>
      <StyledButton v-else class="nav__logo" link="/" text="COOPER" subtext="GOEKE"/>
    </div>
    <div class="nav__right">
      <StyledButton class="nav__link" link="/resume" text="Resume"/>
      <StyledButton class="nav__link" link="https://www.linkedin.com/in/coopergoeke" target="_blank" text="Linkedin"/>
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
    padding: 25px;
    position: fixed;
    width: 100%;
    z-index: 999999;

    &__left {
      float: left;
    }

    &__right {
      float: right;
    }

    &__link:first-child {
      border-right: 0;
    }
  }
</style>


