<template>
	<div class="container-fluid">
		<div id="aboutMe"></div>
		<!-- Navbar -->
		<the-navbar
			:about-me-caption="aboutMeCaption"
			:projects-caption="projectsCaption"
			:resume-caption="resumeCaption"
			:resume-file-name="resumeFileName"
			:language="englishLanguage"
			@toggle-language="toggleLanguage"
		></the-navbar>

		<!-- About Me -->
		<about-me-card
			:welcome-text="welcomeText"
			:introduction-text="introductionText"
			:header-text="headerText"
			:resume-caption="resumeCaption"
			:resume-file-name="resumeFileName"
			:language="englishLanguage"
			@toggle-language="toggleLanguage"
		></about-me-card>

		<!-- Projects -->
		<h1>{{ projectsCaption }}</h1>
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

		<!-- Footer -->
		<the-footer></the-footer>
	</div>
</template>

<script>
// JSONs
import common_text from "./assets/texts/common_text.json";
import ENG from "./assets/texts/ENG.json";
import ESP from "./assets/texts/ESP.json";

//Components
import TheNavbar from './components/TheNavbar.vue';
import AboutMeCard from './components/AboutMe/AboutMeCard.vue';
import ProjectCard from './components/ProjectCard.vue';
import TheFooter from './components/TheFooter.vue';

export default {
	components: {
		TheNavbar,
		AboutMeCard,
		ProjectCard,
		TheFooter
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

<style>
#app {
	padding-top: 90px;
}
</style>
