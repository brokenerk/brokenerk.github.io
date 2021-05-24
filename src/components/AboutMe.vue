<template>
  <!-- About me -->
  <div class="jumbotron">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-3 col-lg-3">
        <img src="./../assets/images/photo.jpg" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-12 col-md-9 col-lg-9">
        <br />
        <div class="row">
          <div class="col-12 col-sm-12 col-md-9 col-lg-9">
            <h3>{{ welcome }}</h3>
          </div>

          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input languageSwitch"
                id="languageSwitch2"
                @click="switchLanguage"
								:checked="language"
              />
              <label class="custom-control-label" for="languageSwitch2">
                {{ captionLanguage }}
              </label>
            </div>
          </div>
        </div>

        <p v-html="introduction"></p>

        <p v-html="header"></p>

        <div class="row">
          <div
            class="col-3 col-sm-3 col-md-1 col-lg-1"
            style="padding-top: 1rem"
          >
            <span>
              <a
                href="https://github.com/brokenerk"
                class="text-dark"
                target="_blank"
              >
                <i class="fa fa-github fa-2x"></i>
              </a>
            </span>
          </div>
          <div
            class="col-3 col-sm-3 col-md-1 col-lg-1"
            style="padding-top: 1rem"
          >
            <span>
              <a
                href="https://www.facebook.com/brokenerk"
                class="text-dark"
                target="_blank"
              >
                <i class="fa fa-facebook-square fa-2x"></i>
              </a>
            </span>
          </div>

          <div
            class="col-3 col-sm-3 col-md-1 col-lg-1"
            style="padding-top: 1rem"
          >
            <span>
              <a
                href="https://www.linkedin.com/in/enrique-ramos-diaz-3166041ba/"
                class="text-dark"
                target="_blank"
              >
                <i class="fa fa-linkedin-square fa-2x"></i>
              </a>
            </span>
          </div>

          <div
            class="col-3 col-sm-3 col-md-1 col-lg-1"
            style="padding-top: 1rem"
          >
            <span>
              <a
                href="https://api.whatsapp.com/send?phone=5215583903993"
                class="text-dark"
                target="_blank"
              >
                <i class="fa fa-whatsapp fa-2x"></i>
              </a>
            </span>
          </div>

          <div
            class="col-12 col-sm-12 col-md-5 col-lg-5"
            style="padding-top: 1rem"
          >
            <span
              ><center>
                <a class="text-dark">
                  <i
                    class="fa fa-envelope fa-2x"
                    style="vertical-align: middle"
                  ></i>
                </a>
                e_ramosdiaz_@outlook.com
              </center></span
            >
          </div>

          <div
            class="col-12 col-sm-12 col-md-3 col-lg-3"
            style="padding-top: 1rem"
          >
            <span
              ><center>
                <a
                  class="btn btn-dark resumeContainer"
                  :href="resumeFile"
                  target="_blank"
                >{{ resume }}</a></center
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div id = "projects"></div>
  </div>
</template>

<script>
export default {
  props: {
    welcome: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
		resume: {
      type: String,
      required: true,
    },
		resumeFile: {
			type: String,
			required: true
		},
    language: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    captionLanguage() {
      return this.language ? "Switch to Spanish" : "Cambiar a Ingl\u00E9s";
    }
  },
  methods: {
    switchLanguage() {
			this.$emit("toggle-language", !this.language);
    },
  },
};
</script>

<style></style>