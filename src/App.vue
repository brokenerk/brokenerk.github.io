<template>
  <div class="container-fluid">
    <div id="aboutMe"></div>
    <!-- Navbar -->
    <the-navbar
      :about-me-caption="aboutMeCaption"
      :projects-caption="projectsCaption"
      :resume-caption="resumeCaption"
      :resume-file-name="resumeFileName"
    >
      <language-switch
        id="languageSwitch1"
        :language="englishLanguage"
        v-model="englishLanguage"
      ></language-switch>
    </the-navbar>

    <!-- About Me -->
    <about-me-card
      :welcome-text="welcomeText"
      :introduction-text="introductionText"
      :header-text="headerText"
      :resume-caption="resumeCaption"
      :resume-file-name="resumeFileName"
    >
      <language-switch
        id="languageSwitch2"
        :language="englishLanguage"
        v-model="englishLanguage"
      ></language-switch>
    </about-me-card>

    <!-- Projects -->
    <h1>{{ projectsCaption }}</h1>
    <div class="row">
      <project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :take-a-look-caption="takeALookCaption"
        :download-it-caption="downloadItCaption"
        :see-in-github-caption="seeInGithubCaption"
        :more-info-caption="moreInfoCaption"
      ></project-card>
    </div>

    <!-- Footer -->
    <the-footer
      :developedByCaption="developedByCaption"
      :poweredByCaption="poweredByCaption"
    ></the-footer>
  </div>
</template>

<script>
// JSONs
import common_text from "./assets/texts/common_text.json";
import ENG from "./assets/texts/ENG.json";
import ESP from "./assets/texts/ESP.json";

//Components
import TheNavbar from "./components/UI/TheNavbar.vue";
import AboutMeCard from "./components/AboutMe/AboutMeCard.vue";
import ProjectCard from "./components/Projects/ProjectCard.vue";
import TheFooter from "./components/UI/TheFooter.vue";
import LanguageSwitch from "./components/UI/SwitchLanguageControl.vue";

export default {
  components: {
    TheNavbar,
    AboutMeCard,
    ProjectCard,
    TheFooter,
    LanguageSwitch,
  },
  data() {
    return {
      englishLanguage: true,
    };
  },
  computed: {
    aboutMeCaption() {
      return this.englishLanguage
        ? common_text.ENG.aboutMe
        : common_text.ESP.aboutMe;
    },
    projectsCaption() {
      return this.englishLanguage
        ? common_text.ENG.projects
        : common_text.ESP.projects;
    },
    resumeCaption() {
      return this.englishLanguage
        ? common_text.ENG.resume
        : common_text.ESP.resume;
    },
    resumeFileName() {
      return this.englishLanguage
        ? common_text.ENG.resumeFile
        : common_text.ESP.resumeFile;
    },
    welcomeText() {
      return this.englishLanguage ? ENG.welcome : ESP.welcome;
    },
    introductionText() {
      return this.englishLanguage ? ENG.introduction : ESP.introduction;
    },
    headerText() {
      return this.englishLanguage ? ENG.header : ESP.header;
    },
    projects() {
      return this.englishLanguage ? ENG.projects : ESP.projects;
    },
    takeALookCaption() {
      return this.englishLanguage
        ? common_text.ENG.takeALook
        : common_text.ESP.takeALook;
    },
    downloadItCaption() {
      return this.englishLanguage
        ? common_text.ENG.downloadIt
        : common_text.ESP.downloadIt;
    },
    seeInGithubCaption() {
      return this.englishLanguage
        ? common_text.ENG.seeInGithub
        : common_text.ESP.seeInGithub;
    },
    moreInfoCaption() {
      return this.englishLanguage
        ? common_text.ENG.moreInfo
        : common_text.ESP.moreInfo;
    },
    developedByCaption() {
      return this.englishLanguage
        ? common_text.ENG.developed
        : common_text.ESP.developed;
    },
    poweredByCaption() {
      return this.englishLanguage
        ? common_text.ENG.powered
        : common_text.ESP.powered;
    },
  },
  methods: {
    toggleLanguage(newLanguage) {
      this.englishLanguage = newLanguage;
    },
  },
};
</script>

<style>
#app {
  padding-top: 95px;
}
</style>
