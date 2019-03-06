<template>
    <a class="styled-button" :href="link" v-on:click="smoothScroll">
      {{ text }}<span v-if="subtext" class="subtext"> {{ subtext }}</span>
    </a>
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
  },
  methods: {
    smoothScroll: function (event) {
      const url = event.currentTarget.getAttribute('href')
      if (url.indexOf('#') > -1) {
        event.preventDefault()
        document.querySelector(event.currentTarget.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      }
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
