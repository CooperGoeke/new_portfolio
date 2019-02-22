<template>
  <section id="contact" class="page contact">
    <div class="contact__wrap">
      <form class="contact__form">
        <h2>Send Me a Message</h2>
        <label>
          <span>Name</span>
          <input @focus="showLabel($event)" @blur="hideLabel($event)" name="name" type="text" value="">
        </label>
        <label>
          <span>Email</span>
          <input @focus="showLabel($event)" @blur="hideLabel($event)" name="email" type="email" value="">
        </label>
        <label>
          <span>Message</span>
          <textarea @focus="showLabel($event)" @blur="hideLabel($event)" name="message" type="text" value=""></textarea>
        </label>
        <input type="submit" value="Send">
      </form>
      <div class="contact__text-wrap">
        <h2>Contact Info</h2>
        <h3>Feel free to reach out to me!</h3>
        <span>coopergoeke@gmail.com</span>
        <span>330.247.8364</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  methods: {
      hideLabel: function(event) {
        let current_value = event.target.value;
        current_value = current_value.trim();
        event.target.value = current_value;
        if (current_value === '') {
          event.target.parentElement.getElementsByTagName('span')[0].classList.remove('active')
        }
      },
      showLabel: function(event) {
        event.target.parentElement.getElementsByTagName('span')[0].classList.add('active')
      }
  }
}
</script>

<style lang="scss" scoped>
  .contact {
    align-items: center;
    background-color: $color-gray;
    display: flex;
    justify-content: center;
    z-index: 4;

    &__wrap {
      background: $color-white;
      box-shadow: -4px 4px 10px rgba($color-black, .05);
      display: flex;
      max-width: 850px;
      width: 100%;
    }

    &__form {
      padding: 50px;
      width: 65%;

      h2 {
        margin-bottom: 50px;
      }

      label {
        display: block;
        margin-bottom: 30px;
        position: relative;

        span {
          color: $color-blue-light;
          font-size: 13px;
          font-weight: 400;
          left: 0;
          position: absolute;
          top: 3px;
          transition: font-size .3s ease, top .3s ease;

          &.active {
            font-size: 9px;
            top: -10px;
          }
        }
      }

      input[type='text'], input[type='email'], textarea {
        background: none;
        border: none;
        border-bottom: 1px solid $color-blue-dark;
        border-radius: 0;
        color: $color-blue-dark;
        display: block;
        font-size: 13px;
        outline: none;
        padding: 5px 0;
        width: 100%;

        &:focus {
          border-color: $color-blue-middle;
        }
      }

      textarea {
        max-height: 100px;
        max-width: 100%;
        min-height: 100px;
        min-width: 100%;
      }

      input[type='submit'] {
        background-color: transparent;
        border: none;
        border-left: 1px solid $color-blue-dark;
        border-right: 1px solid $color-blue-dark;
        color: $color-blue-dark;
        cursor: pointer;
        display: block;
        float: right;
        font-size: 13px;
        font-weight: 600;
        outline: none;
        padding: 4px 25px;
        text-decoration: none;

        &:hover {
          background-color: $color-gray;
        }
      }
    }

    &__text-wrap {
      color: $color-blue-dark;
      padding: 50px 50px 50px 10px;
      width: 35%;

      h2 {
        margin-bottom: 50px;
      }

      h3 {
        margin: 5px 0 25px;
      }

      span {
        display: block;
        font-size: 13px;
        margin-bottom: 15px;
      }
    }
  }
</style>
