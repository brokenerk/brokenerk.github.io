<template>
  <div class="jumbotron">
    <div class="row">
      <!--Foto-->
      <div class="col-12 col-sm-12 col-md-3 col-lg-3">
        <img src="./../../assets/images/photo.jpg" class="img-fluid" />
      </div>
      <div class="col-12 col-sm-12 col-md-9 col-lg-9">
        <br />
        <div class="row">
          <!--Welcome Text-->
          <div class="col-12 col-sm-9 col-md-9 col-lg-9">
            <h3>{{ welcomeText }}</h3>
          </div>
          <!--Switch language-->
          <div class="col-12 col-sm-3 col-md-3 col-lg-3">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input languageSwitch"
                id="languageSwitch2"
                @click="switchLanguage"
                :checked="language"
              />
              <label class="custom-control-label" for="languageSwitch2">
                {{ languageCaption }}
              </label>
            </div>
          </div>
        </div>

        <!--Introduction Text-->
        <div class="row">
          <div class="col-12 col-sm-12 col-md-9 col-lg-9">
            <p v-html="introductionText"></p>
          </div>
        </div>

        <!--Header Text-->
        <div class="row">
          <div class="col-12 col-sm-12 col-md-9 col-lg-9">
            <p v-html="headerText"></p>
          </div>
        </div>

        <div class="row">
          <!--Social networks icons -->
          <social-networks-icons></social-networks-icons>
          <!--Resume button-->
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
            <a
              class="btn btn-dark btn-resume"
              :href="resumeFileName"
              target="_blank"
              >{{ resumeCaption }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div id="projects"></div>
  </div>
</template>

<script>
import SocialNetworksIcons from "./SocialNetworksIcons.vue";

export default {
  components: {
    SocialNetworksIcons,
  },
  props: {
    welcomeText: {
      type: String,
      required: true,
    },
    introductionText: {
      type: String,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
    resumeCaption: {
      type: String,
      required: true,
    },
    resumeFileName: {
      type: String,
      required: true,
    },
    language: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    languageCaption() {
      return this.language ? "Switch to Spanish" : "Cambiar a Ingl\u00E9s";
    },
  },
  methods: {
    switchLanguage() {
      this.$emit("toggle-language", !this.language);
    },
  },
};
</script>

<style scoped>
.btn {
  margin-top: 5px;
}
</style>