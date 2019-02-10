<template>
    <router-link class="styled-button" :to="link">{{ text }}<span v-if="subtext" class="subtext"> {{ subtext }}</span></router-link>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    link: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    subtext: {
      default: null,
      required: false,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
  .styled-button {
    background-color: transparent;
    border-left: 1px solid $color-blue-dark;
    border-right: 1px solid $color-blue-dark;
    color: $color-blue-dark;
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    padding: 4px 25px;
    text-decoration: none;

    &:hover {
      background-color: $color-gray;
    }

    .subtext {
      color: $color-blue-middle;
    }
  }
</style>
