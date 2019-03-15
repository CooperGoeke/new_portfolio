<template>
  <section id="contact" class="page contact">
    <div class="contact__inner page__inner">
      <div class="contact__wrap js-reveal-on-scroll">
        <div class="contact__wrap-inner">
          <div class="contact__form-wrap">
            <form class="contact__form" @submit.prevent="checkForm">
              <h2>Send Me a Message</h2>
              <label>
                Name
                <span class="contact__error" v-if="!$v.name.required && $v.name.$error">- is required</span>
                <input name="name" type="text" @change="setName($event.target.value)">
              </label>
              <label>
                Email
                <span class="contact__error" v-if="!$v.email.required && $v.email.$error">- is required</span>
                <span class="contact__error" v-if="!$v.email.email && $v.email.$error">- must be a valid email</span>
                <input name="email" type="email" @change="setEmail($event.target.value)">
              </label>
              <label>
                Message
                <span class="contact__error" v-if="!$v.message.required && $v.message.$error">- is required</span>
                <textarea name="message" type="text" @change="setMessage($event.target.value)"></textarea>
              </label>
              <input type="submit" value="Send">
            </form>
            <div class="contact__submitted">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M149.72 2.18C68.02 2.18 1.8 68.41 1.8 150.1s66.22 147.92 147.92 147.92S297.64 231.8 297.64 150.1 231.41 2.18 149.72 2.18zm0 273.82c-69.59 0-126-56.41-126-126s56.41-126 126-126 126 56.41 126 126-56.42 126-126 126z" fill="#9ccb41"/><path fill="#9ccb41" d="M220.42 95.07l-92.46 92.46-48.95-48.94-20.37 20.36 48.91 48.99-.02.01 20.37 20.37 112.89-112.88z"/></svg>
                <span>Message Sent!</span>
              </div>
            </div>
          </div>
          <div class="contact__text-wrap">
            <h2>Contact Info</h2>
            <h3>Feel free to reach out to me!</h3>
            <span>coopergoeke@gmail.com</span>
            <span>330.247.8364</span>
            <p class="contact__github-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.74 33.29"><path d="M16.87.76C7.88.76.58 8.05.58 17.05c0 7.2 4.67 13.3 11.14 15.46.81.15 1.11-.35 1.11-.79 0-.39-.01-1.41-.02-2.77-4.53.98-5.49-2.18-5.49-2.18-.74-1.88-1.81-2.38-1.81-2.38-1.48-1.01.11-.99.11-.99 1.63.12 2.5 1.68 2.5 1.68 1.45 2.49 3.81 1.77 4.74 1.35.15-1.05.57-1.77 1.03-2.18-3.62-.41-7.42-1.81-7.42-8.05 0-1.78.63-3.23 1.68-4.37-.17-.41-.73-2.07.16-4.31 0 0 1.37-.44 4.48 1.67 1.3-.36 2.69-.54 4.08-.55 1.38.01 2.78.19 4.08.55 3.11-2.11 4.48-1.67 4.48-1.67.89 2.24.33 3.9.16 4.31 1.04 1.14 1.67 2.59 1.67 4.37 0 6.26-3.81 7.63-7.44 8.04.58.5 1.11 1.5 1.11 3.02 0 2.18-.02 3.93-.02 4.47 0 .44.29.94 1.12.78 6.47-2.16 11.13-8.26 11.13-15.45 0-9.01-7.3-16.3-16.29-16.3z" fill-rule="evenodd" clip-rule="evenodd" fill="#324c78"/></svg>
              You can also check out the code for this portfolio on <a href="https://github.com/CooperGoeke/new_portfolio" target="_blank">github</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
// eslint-disable-next-line
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'
Vue.use(Vuelidate)

export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  validations: {
    name: {
      required,
      maxLength: 100
    },
    email: {
      required,
      email,
      maxLength: 100
    },
    message: {
      required,
      maxLength: 5000
    }
  },
  methods: {
    checkForm () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        let data = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        // Submit form
        axios.post(
          'http://coopergoeke.com/contact_form_handler.php',
          data
        ).then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })

        // Go ahead and just display the success message either way
        let form = document.getElementsByClassName('contact__form')[0]
        let loading = document.getElementsByClassName('contact__submitted')[0]
        loading.setAttribute('height', form.clientHeight)
        form.classList.add('active')
        loading.style.display = 'flex'
        setTimeout(function () {
          loading.classList.add('active')
        }, 250)
      }
    },
    setName (value) {
      this.name = value
      this.$v.name.$touch()
    },
    setEmail (value) {
      this.email = value
      this.$v.email.$touch()
    },
    setMessage (value) {
      this.message = value
      this.$v.message.$touch()
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background-color: $color-gray;
  z-index: 4;

  &__inner {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  &__wrap {
    background-image: repeating-linear-gradient(-45deg, $color-blue-light 0%, $color-blue-light 3%, $color-white 3%, $color-white 6%, $color-red 6%, $color-red 9%, $color-white 9%, $color-white 12%);
    border: 1px solid $color-gray;
    box-shadow: 0 0 10px rgba($color-blue-light, .35);
    max-width: 860px;
    opacity: 0;
    padding: 6px;
    position: relative;
    transform: scale(1.15);
    transition: transform .5s ease-out, opacity .5s linear;
    width: 90%;
    @include bp($bp-medium) {
      background-image: repeating-linear-gradient(-45deg, $color-blue-light 0%, $color-blue-light 2%, $color-white 2%, $color-white 4%, $color-red 4%, $color-red 6%, $color-white 6%, $color-white 8%);
      padding: 8px;
      transform: scale(1);
    }

    &.active {
      opacity: 1;
      transform: scale(1);
    }
  }

  &__wrap-inner {
    background-color: $color-white;
    border: 1px solid $color-gray;
    width: 100%;
    @include bp($bp-small) {
      display: flex;
    }
  }

  &__form-wrap {
    display: none;
    position: relative;
    width: 65%;
    @include bp($bp-small) {
      display: block;
    }
  }

  &__form {
    opacity: 1;
    padding: 50px;
    transition: opacity .25s linear;

    &.active {
      opacity: 0;
    }

    h2 {
      margin-bottom: 50px;
    }

    label {
      color: $color-blue-light;
      display: block;
      font-size: 11px;
      margin-bottom: 20px;
      position: relative;

      span {
        color: $color-red;
      }
    }

    input[type='text'], input[type='email'], textarea {
      background: none;
      border: none;
      border-bottom: 1px solid $color-blue-light;
      border-radius: 0;
      color: $color-blue-dark;
      display: block;
      font-size: 13px;
      margin-top: 5px;
      outline: none;
      padding: 5px;
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

      &:focus {
        background-color: darken($color-gray, 2%);
      }

      &:active {
        background-color: darken($color-gray, 2%);
      }
    }
  }

  &__submitted {
    align-items: center;
    bottom: 0;
    display: none;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    transition: opacity .25s linear .25s;
    width: 100%;

    &.active {
      opacity: 1;

      svg {
        transform: scale(1);
      }
    }

    svg {
      display: inline-block;
      margin-bottom: 10px;
      transform: scale(0);
      transition: transform .5s cubic-bezier(.27,1.69,.33,1.12) .25s;
      width: 50px;
    }

    span {
      color: $color-blue-dark;
      display: block;
      font-size: 14px;
      width: 100%;
    }
  }

  &__text-wrap {
    color: $color-blue-dark;
    margin: 0 auto;
    padding: 50px 5px;
    position: relative;
    text-align: center;
    width: 85%;
    @include bp($bp-small) {
      padding: 50px 50px 50px 10px;
      text-align: left;
      width: 35%;
    }
    @include bp($bp-large) {
      background-image: url('../../assets/images/postcard-bg.svg');
      background-position: right bottom -20px;
      background-repeat: no-repeat;
      background-size: 100%;
    }

    h2 {
      margin-bottom: 10px;
      @include bp($bp-small) {
        margin-bottom: 50px;
      }
    }

    h3 {
      margin: 5px 0 50px;
      @include bp($bp-small) {
        margin: 5px 0 25px;
      }
    }

    span {
      display: block;
      font-size: 13px;
      margin-bottom: 15px;
    }
  }

  &__github-link {
    display: none;
    @include bp($bp-small) {
      display: block;
    }

    svg {
      margin-right: 3px;
      position: relative;
      top: 4px;
      width: 20px;
    }

    a {
      color: $color-blue-light;
    }
  }
}
</style>
