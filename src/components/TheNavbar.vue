<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <!--Brokenerk-->
      <a class="nav-link text-white" href="#">
        <span class="navbar-brand mb-0 h1">brokenerk</span>
      </a>
      <!--Boton responsive-->
      <button class="navbar-toggler" @click="collapseNavbarList">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Lista links-->
      <div class="navbar-collapse" :style="'display:' + collapseClass">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link text-white">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="languageSwitch1"
                  @click="switchLanguage"
                  :checked="language"
                />
                <label class="custom-control-label" for="languageSwitch1">
                  {{ languageCaption }}</label
                >
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#aboutMe">{{
              aboutMeCaption
            }}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#projects">{{
              projectsCaption
            }}</a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white"
              :href="resumeFileName"
              target="_blank"
              >{{ resumeCaption }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    aboutMeCaption: {
      type: String,
      required: true,
    },
    projectsCaption: {
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
  data() {
    return {
      collapseClass: "none",
    };
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
    collapseNavbarList() {
      this.collapseClass === "none"
        ? (this.collapseClass = "block")
        : (this.collapseClass = "none");
    },
  },
};
</script>