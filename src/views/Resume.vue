<template>
  <div>
    <div class="back-button">
      <StyledButton link="/" text="Portfolio"/>
      <StyledButton class="download_link" link="CooperGoekeResume.pdf" target="_blank" download text="Download PDF"/>
    </div>
    <section class="resume">
      <div class="resume__section resume__top">
        <div class="resume__right">
          <h1>Cooper <span>Goeke</span></h1>
          <h2>Front End Developer, Graphic Designer</h2>
        </div>
        <div class="resume__left">
          <p>coopergoeke@gmail.com</p>
          <p>330.247.8364</p>
          <p>www.coopergoeke.com</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.28 5.14"><path d="M5.25 2.92H3.02V5.1h-.76V2.92H.03v-.7h2.23V.02h.76v2.2h2.23v.7z" fill="#55bada"/></svg>
        </div>
      </div>
      <div class="resume__section resume__skills">
        <div class="resume__left">
          <h3>Skills</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.28 5.14"><path d="M5.25 2.92H3.02V5.1h-.76V2.92H.03v-.7h2.23V.02h.76v2.2h2.23v.7z" fill="#8aa8c5"/></svg>
        </div>
        <div class="resume__right">
          <h4>Programming Languages</h4>
          <p>
            Web: HTML5, CSS3/SASS, JavaScript/ES6/jQuery, PHP, MySQL.
            <br>
            Other: C++, Python, Java, Visual Basic.
          </p>

          <h4>Web Development</h4>
          <p>Vue.js, Node/NPM, Webpack, Gulp, Laravel 5, Twig, MySQL, Foundation Grid, WordPress themes and plugins, responsive layouts, SVG animation.</p>

          <h4>Graphic Design</h4>
          <p>Web design, user interface design, print media, logos, icons, motion graphics, video editing, photography.</p>

          <h4>Applications</h4>
          <p>
            Adobe: Photoshop, Illustrator, InDesign, After Effects, Premiere.
            <br>
            Other: VS Code, Git, Sketch 2, WordPress, Jira, Slack.
          </p>

          <h4>Other</h4>
          <p>Chrome extensions, website accessibility, browser compatibility, public speaking, project management, leadership experience, basic SEO.</p>
        </div>
      </div>
      <div class="resume__section resume__experience">
        <div class="resume__left">
          <h3>Experience</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.28 5.14"><path d="M5.25 2.92H3.02V5.1h-.76V2.92H.03v-.7h2.23V.02h.76v2.2h2.23v.7z" fill="#8aa8c5"/></svg>
        </div>
        <div class="resume__right">
          <h4>Red Ventures <span>Front End Developer</span></h4>
          <p>
            Worked on several large brand websites including American Express, Bankrate, The Simple Dollar, and Frontier. Large emphasis on JavaScript, Vue.js, and modern web practices.<br>
            <span>Spring 2017 - Current Role</span>
          </p>

          <h4>Lampros Labs <span>Front End Developer + UI Designer</span></h4>
          <p>
            Worked with various startups and small businesses to develop websites, apps, and WordPress Themes. Designed logos, web page layouts, e-mails, and mobile UI. Personally met with clients through development stages.<br>
            <span>Summer 2015 - Spring 2017</span>
          </p>

          <h4>Keithley Instruments <span>Firmware Engineer + Graphic Designer</span></h4>
          <p>
            Helped develop a new touch screen device using C++. Tasks included: creating an embedded web application, programming Excel macros, and designing part of the UI.<br>
            <span>Winter 2014 - Winter 2015</span>
          </p>

          <h4>Freelance / Contract Work <span>Web Developer + Graphic Designer</span></h4>
          <p>
            Created complete websites, WordPress themes, logos, videos, and print designs for over a dozen different businesses and local organizations.<br>
            <span>Spring 2013 - Fall 2017 (Part Time)</span>
          </p>
        </div>
      </div>
      <div class="resume__section resume__education">
        <div class="resume__left">
          <h3>Education</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.28 5.14"><path d="M5.25 2.92H3.02V5.1h-.76V2.92H.03v-.7h2.23V.02h.76v2.2h2.23v.7z" fill="#8aa8c5"/></svg>
        </div>
        <div class="resume__right">
          <h4>University of Cincinnati</h4>
          <p>Major: Computer Science</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StyledButton from '@/components/StyledButton.vue'

export default {
  name: 'resume',
  components: {
    StyledButton
  }
}
</script>

<style lang="scss" scoped>
.back-button {
  left: 0;
  padding: 5%;
  position: absolute;
  top: 0;
  width: 100%;
  @include bp($bp-medium) {
    padding: 25px;
  }

  .download_link {
    float: right;
  }
}
.resume {
  background-color: $color-white;
  margin: 0 auto;
  max-width: 900px;
  padding: 0 0 50px;
  width: 100%;
  @include bp($bp-medium) {
    padding: 80px 0 50px;
  }

  &__section {
    width: 100%;
    @include bp($bp-medium) {
      display: flex;
    }
  }

  &__left {
    background: $color-gray;
    border-bottom: 1px solid $color-blue-light;
    border-top: 1px solid $color-blue-light;
    margin: 0 auto 25px;
    padding: 15px 5%;
    position: relative;
    text-align: left;
    width: 100%;
    @include bp($bp-medium) {
      background: none;
      border: 0;
      padding: 25px 25px 0 0;
      text-align: right;
      width: 30%;
    }

    svg {
      display: none;
      @include bp($bp-medium) {
        background-color: $color-white;
        border-bottom: 10px solid $color-white;
        border-top: 10px solid $color-white;
        box-sizing: content-box;
        display: block;
        left: auto;
        position: absolute;
        right: -6px;
        top: 19px;
        width: 11px;
      }
    }

    h3 {
      color: $color-blue-dark !important;
      font-size: 18px !important;
    }
  }

  &__right {
    border-left: 1px solid $color-blue-light;
    margin: 25px auto 0;
    padding: 0 0 0 5%;
    width: 90%;
    @include bp($bp-medium) {
      margin: 0;
      padding: 25px 0 0 25px;
      width: 70%;
    }

    h4 {
      color: $color-blue-dark !important;
      display: inline-block;
      margin: 3px 0 11px;
      @include bp($bp-medium) {
        margin: 3px 0 5px;
      }

      span {
        display: block;
        font-style: italic;
        font-weight: 400;
        margin-top: 5px;
        opacity: .75;
        @include bp($bp-medium) {
          display: inline;
          margin: 0;

          &::before {
            content: '- ';
          }
        }
      }
    }

    p {
      font-style: italic;
      line-height: 1.5 !important;
      margin-bottom: 25px;
      opacity: .75;
      width: 100%;
      @include bp($bp-medium) {
        line-height: 1.7 !important;
        width: 90%;
      }

      span {
        display: block;
        margin-top: 10px;
        @include bp($bp-medium) {
          margin-top: 0;
        }
      }
    }
  }

  &__top {
    border-bottom: none;
    flex-direction: row-reverse;
    @include bp($bp-medium) {
      border-bottom: 1px solid $color-blue-dark;
    }

    .resume__right {
      background: $color-gray;
      border-bottom: 1px solid $color-blue-light;
      border-left: 0;
      margin: 0;
      padding: 80px 5% 25px;
      width: 100%;
      @include bp($bp-medium) {
        background: none;
        border: none;
        border-left: 1px solid $color-blue-light;
        padding: 25px 0 0 25px;
        width: 70%;
      }
    }

    .resume__left {
      background: none;
      border: none;
      border-left: 1px solid $color-blue-light;
      margin: 25px auto 25px;
      padding: 0 0 0 5%;
      width: 90%;
      @include bp($bp-medium) {
        border: none;
        margin: 0;
        padding: 25px 25px 0 0;
        width: 30%;
      }

      p {
        line-height: 1 !important;
        margin-top: 15px;

        &:first-of-type {
          margin-top: 5px;
        }
      }

      svg {
        border: 10px solid $color-white;
        bottom: -20px;
        right: -20px;
        top: auto;
        width: 19px;
      }
    }

    h1 {
      font-size: 30px !important;
      font-weight: 600 !important;
      margin-bottom: 10px;
      @include bp($bp-medium) {
        font-size: 50px !important;
      }

      span {
        color: $color-blue-middle;
      }
    }

    h2 {
      font-size: 14px !important;
      font-weight: 600 !important;
      margin-left: 1px;
      @include bp($bp-medium) {
        font-size: 16px !important;
        margin-bottom: 25px;
      }
    }
  }

  &__skills {
    .resume__left {
      @include bp($bp-medium) {
        padding-top: 50px;
      }

      svg {
        @include bp($bp-medium) {
          top: 43px;
        }
      }
    }

    .resume__right {
      @include bp($bp-medium) {
        padding-top: 50px;
      }
    }
  }

  &__education p {
    margin-bottom: 5px;
  }

}
</style>

