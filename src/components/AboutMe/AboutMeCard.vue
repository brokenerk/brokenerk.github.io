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
            <slot></slot>
          </div>
        </div>

        <!--Introduction Text-->
        <p v-html="introductionText"></p>

        <!--Header Text-->
        <p v-html="headerText"></p>

        <div class="row">
          <!--Social networks icons -->
          <social-networks></social-networks>
          <!--Resume button-->
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
            <generic-button
              :href="resumeFileName"
              :color="'#343a40'"
              :caption="resumeCaption"
            ></generic-button>
          </div>
        </div>
      </div>
    </div>
    <div id="projects"></div>
  </div>
</template>

<script>
import SocialNetworks from "./SocialNetworks.vue";
import GenericButton from "../UI/GenericButton.vue";

export default {
  components: {
    SocialNetworks,
    GenericButton,
  },
  props: [
    "welcomeText",
    "introductionText",
    "headerText",
    "resumeCaption",
    "resumeFileName",
  ],
};
</script>

<style scoped>
.btn {
  margin-top: 5px;
}
</style>