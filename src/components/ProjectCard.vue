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
          <div class="col col-btn-card" v-if="project.infoButton">
            <a
              :href="project.infoButton"
              :class="'text-' + project.color"
              target="_blank"
            >
              <i
                class="fa fa-info-circle fa-3x"
                data-placement="top"
                :title="moreInfo"
              ></i>
            </a>
          </div>
          <!-- GITHUB -->
          <div class="col col-btn-card" v-if="project.githubButton">
            <a
              :href="project.githubButton"
              :class="'text-' + project.color"
              target="_blank"
            >
              <i
                class="fa fa-github fa-3x"
                data-placement="top"
                :title="seeInGithub"
              ></i>
            </a>
          </div>
          <!-- TAKE A LOOK -->
          <div class="col col-btn-card" v-if="project.takeALookButton">
            <a
              :class="
                'btn btn-' + project.color + ' text-white btn-take-a-look'
              "
              :href="project.takeALookButton"
              target="_blank"
              >{{ takeALook }}</a
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
    takeALook: {
      type: String,
      required: false,
    },
    downloadIt: {
      type: String,
      required: false,
    },
    seeInGithub: {
      type: String,
      required: false,
    },
    moreInfo: {
      type: String,
      required: false,
    },
  }
};
</script>

<style>
.badge {
  margin-right: 4px;
}
.btn-take-a-look {
  margin-top: 5px;
}
.col-btn-card {
  padding: 0px;
}
</style>