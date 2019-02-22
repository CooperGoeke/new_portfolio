<template>
  <section id="work" class="page work">
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
        <StyledButton class="work__site-button" rel="nofollow" target="_blank" link="http://neep.coopergoeke.com/" text="Neep App"/>
        <StyledButton class="work__site-button" rel="nofollow" target="_blank" link="http://www.cincyrowing.org/" text="UC Rowing"/>
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
    align-items: center;
    background-color: $color-white;
    display: flex;
    justify-content: center;
    text-align: center;
    z-index: 3;

    h3 {
      margin: 50px 0 25px;
    }

    &__brands-wrap {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0 0 50px;

      img {
        margin: 0 50px;
        width: 130px;
      }
    }

    &__site-button:not(:last-child) {
      border-right: none;
    }
  }
</style>
