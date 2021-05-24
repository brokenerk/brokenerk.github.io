<template>
  <div id="aboutMe"></div>
  <!-- Navbar -->
  <navbar-custom
    :about-me="aboutMe"
    :projects="projectsText"
    :resume="resume"
    :resume-file="resumeFile"
    :language="englishLanguage"
    @toggle-language="toggleLanguage"
  ></navbar-custom>

  <!-- About Me -->
  <about-me
    :welcome="welcome"
    :introduction="introduction"
    :header="header"
    :resume="resume"
    :resume-file="resumeFile"
    :language="englishLanguage"
    @toggle-language="toggleLanguage"
  ></about-me>

  <!-- Projects -->
  <h1>{{ projectsText }}</h1>
  <br/>
  <div class="row">
    <project-card
      v-for="project in allProjects"
      :key="project.id"
      :project="project"
      :takeALook="takeALook"
      :downloadIt="downloadIt"
      :seeInGithub="seeInGithub"
      :moreInfo="moreInfo"
    ></project-card>
  </div>
  <br/>

  <!-- Footer -->
  <footer class="row py-4 bg-dark">
    <div class="container-fluid">
      <p class="m-0 text-center text-white">Devloped by Enrique Ramos - Copyright 2021</p>
    </div>
  </footer>
</template>

<script>
import common_text from "./assets/texts/common_text.json";
import ENG from "./assets/texts/ENG.json";
import ESP from "./assets/texts/ESP.json";
export default {
  data() {
    return {
      englishLanguage: true,
    };
  },
  computed: {
    aboutMe() {
      return this.englishLanguage
        ? common_text.ENG.aboutMe
        : common_text.ESP.aboutMe;
    },
    projectsText() {
      return this.englishLanguage
        ? common_text.ENG.projects
        : common_text.ESP.projects;
    },
    resume() {
      return this.englishLanguage
        ? common_text.ENG.resume
        : common_text.ESP.resume;
    },
    resumeFile() {
      return this.englishLanguage
        ? common_text.ENG.resumeFile
        : common_text.ESP.resumeFile;
    },
    welcome() {
      return this.englishLanguage ? ENG.welcome : ESP.welcome;
    },
    introduction() {
      return this.englishLanguage ? ENG.introduction : ESP.introduction;
    },
    header() {
      return this.englishLanguage ? ENG.header : ESP.header;
    },
    allProjects() {
      return this.englishLanguage ? ENG.projects : ESP.projects;
    },
    takeALook() {
      return this.englishLanguage
        ? common_text.ENG.takeALook
        : common_text.ESP.takeALook;
    },
    downloadIt() {
      return this.englishLanguage
        ? common_text.ENG.downloadIt
        : common_text.ESP.downloadIt;
    },
    seeInGithub() {
      return this.englishLanguage
        ? common_text.ENG.seeInGithub
        : common_text.ESP.seeInGithub;
    },
    moreInfo() {
      return this.englishLanguage
        ? common_text.ENG.moreInfo
        : common_text.ESP.moreInfo;
    },
  },
  methods: {
    toggleLanguage(newLanguage) {
      this.englishLanguage = newLanguage;
    },
  },
};
</script>

<style></style>
