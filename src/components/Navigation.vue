<template>
  <div class="nav">
    <div class="nav__left">
      <StyledButton class="nav__logo" link="/" text="COOPER" subtext="GOEKE"/>
    </div>
    <div class="nav__right">
      <!-- Menu Button will go here probably -->
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
    padding: 15px;
    position: fixed;
    z-index: 999999;
  }
</style>


