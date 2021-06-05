<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-4" id="col-card">
    <div class="card h-100">
      <!-- IMAGEN -->
      <img
        :src="require('./../../assets/images/' + project.id + '.jpg')"
        class="card-img-top"
      />

      <div class="card-body d-flex flex-column">
        <div class="row">
          <!-- ICONO -->
          <div class="col-2 col-sm-2 col-md-2 col-lg-2">
            <i :class="project.icon"></i>
          </div>
          <!-- TITULO PROYECTO -->
          <div
            class="col-10 col-sm-10 col-md-10 col-lg-10"
            style="padding-top: 0.2rem"
          >
            <h5 class="card-title">{{ project.title }}</h5>
          </div>
        </div>

        <!-- DESCRIPCION -->
        <p class="card-text" v-html="project.description"></p>

        <div class="mt-auto">
          <!-- TECNOLOGIAS -->
          <span
            :class="'badge text-' + checkTextColor"
            :style="{ backgroundColor: checkColor }"
            v-for="badge in project.badges"
            :key="badge"
            >{{ badge }}</span
          >
          <br />
          <!-- AUTORES -->
          <span
            class="badge badge-secondary"
            v-for="author in project.authors"
            :key="author"
            >{{ author }}</span
          >
        </div>
      </div>
      <div class="card-footer text-center">
        <div class="row">
          <!-- MAS INFO -->
          <div class="col" v-if="project.infoButton">
            <icon-button
              :href="project.infoButton"
              :color="project.color"
              :icon="'fa fa-info-circle fa-3x'"
              :title="moreInfoCaption"
            ></icon-button>
          </div>
          <!-- GITHUB -->
          <div class="col" v-if="project.githubButton">
            <icon-button
              :href="project.githubButton"
              :color="project.color"
              :icon="'fa fa-github fa-3x'"
              :title="seeInGithubCaption"
            ></icon-button>
          </div>
          <!-- BRANCH -->
          <div class="col" v-if="project.branchButton">
            <icon-button
              :href="project.branchButton"
              :color="project.color"
              :icon="'fa fa-code-fork fa-3x'"
              :title="project.branchButtonTitle"
            ></icon-button>
          </div>
          <!-- TAKE A LOOK -->
          <div class="col" v-if="project.takeALookButton">
            <generic-button
              :href="project.takeALookButton"
              :color="project.color"
              :caption="takeALookCaption"
            ></generic-button>
          </div>
          <div class="col" v-else-if="project.downloadItButton">
            <generic-button
              :href="project.downloadItButton"
              :color="project.color"
              :caption="downloadItCaption"
            ></generic-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";
import GenericButton from "../UI/GenericButton.vue";

export default {
  components: {
    IconButton,
    GenericButton
  },
  props: [
    "project",
    "takeALookCaption",
    "downloadItCaption",
    "seeInGithubCaption",
    "moreInfoCaption"
  ],
  computed: {
    checkColor() {
      return this.project.color === "#6c757d" ? "#f8f9fa" : this.project.color;
    },
    checkTextColor() {
      return this.project.color === "#6c757d" ||
        this.project.color === "#ffc107"
        ? "black"
        : "white";
    },
  },
};
</script>

<style scoped>
.badge {
  margin-right: 3px;
}
.col {
  padding: 0px;
}
#col-card {
  margin-bottom: 20px;
}
</style>