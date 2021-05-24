<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-4">
    <div class="card h-100">
      <!-- IMAGEN -->
      <img
        :src="require('./../assets/images/' + project.id + '.jpg')"
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

        <!-- TECNOLOGIAS -->
        <div class="mt-auto">
          <span
            :class="'badge badge-' + project.color"
            v-for="badge in project.badges"
            :key="badge"
            >{{ badge }}</span
          >
          <br />
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
            <a
              :href="project.infoButton"
              :class="'text-' + project.color"
              target="_blank"
            >
              <i
                class="fa fa-info-circle fa-3x"
                data-placement="top"
                :title="moreInfoCaption"
              ></i>
            </a>
          </div>
          <!-- GITHUB -->
          <div class="col" v-if="project.githubButton">
            <a
              :href="project.githubButton"
              :class="'text-' + project.color"
              target="_blank"
            >
              <i
                class="fa fa-github fa-3x"
                data-placement="top"
                :title="seeInGithubCaption"
              ></i>
            </a>
          </div>
          <!-- TAKE A LOOK -->
          <div class="col" v-if="project.takeALookButton">
            <a
              :class="'btn btn-' + project.color + ' text-white'"
              :href="project.takeALookButton"
              target="_blank"
              >{{ takeALookCaption }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    takeALookCaption: {
      type: String,
      required: false,
    },
    downloadItCaption: {
      type: String,
      required: false,
    },
    seeInGithubCaption: {
      type: String,
      required: false,
    },
    moreInfoCaption: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.badge {
  margin-right: 4px;
}
.btn {
  margin-top: 5px;
}
.col {
  padding: 0px;
}
</style>