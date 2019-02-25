<template>
  <section id="contact" class="page contact">
    <div class="contact__wrap">
      <form action="" class="contact__form" @submit.prevent="checkForm" method="post" novalidate="true">
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
  </section>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
Vue.use(Vuelidate)

export default {
  name: 'contact',
  data() {
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
      checkForm() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
      },
      setName(value) {
        this.name = value
        this.$v.name.$touch()
      },
      setEmail(value) {
        this.email = value
        this.$v.email.$touch()
      },
      setMessage(value) {
        this.message = value
        this.$v.message.$touch()
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
      }
    }

    &__text-wrap {
      color: $color-blue-dark;
      padding: 50px 50px 50px 10px;
      position: relative;
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

    &__github-link {
      bottom: 45px;
      left: 0;
      padding: 0 50px 0 10px;
      position: absolute;

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
