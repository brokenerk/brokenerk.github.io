<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="nav-link text-white" href="#">
        <span class="navbar-brand mb-0 h1">brokenerk</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link text-white custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="languageSwitch1"
                @click="switchLanguage"
                :checked="language"
              />
              <label class="custom-control-label" for="languageSwitch1">
                {{ captionLanguage }}</label>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#aboutMe">{{ aboutMe }}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#projects">{{ projects }}</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" :href="resumeFile" target="_blank">{{ resume }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br /><br /><br /><br />
</template>

<script>
export default {
  props: {
    aboutMe: {
      type: String,
      required: true,
    },
    projects: {
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