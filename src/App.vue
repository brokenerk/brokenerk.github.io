<template>
  <navbar-custom
    :about-me="aboutMe"
    :projects="projects"
    :resume="resume"
		:resume-file="resumeFile"
    :caption-language="captionLanguage"
		@switch-language="switchLanguage"
  ></navbar-custom>
  <about-me></about-me>
</template>

<script>
import common_text from './assets/texts/common_text.json';
export default {
  data() {
    return {
      language: "ENG",
    };
  },
  computed: {
    aboutMe() {
      return common_text[this.language]["aboutMe"];
    },
    projects() {
      return common_text[this.language]["projects"];
    },
    resume() {
      return common_text[this.language]["resume"];
    },
		resumeFile() {
			return common_text[this.language]["resumeFile"];
		},
    captionLanguage() {
      return common_text[this.language]["switchLanguage"];
    }
  },
	methods: {
		switchLanguage() {
			if(this.language === "ENG")
				this.language = "ESP";
			else
				this.language = "ENG";
		}
	}
};
</script>

<style></style>
