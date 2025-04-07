<template>
  <div class="row">
    <div
      class="col-1 col-sm-1 col-md-1 col-lg-1"
      v-for="ts in technologiesStack"
      :key="ts.id"
    >
      <i :class="ts.icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologiesStack: [
        {
          id: "python",
          icon: "fa devicon-python-plain fa-3x",
        },
        {
          id: "javascript",
          icon: "fa devicon-javascript-plain fa-3x",
        },
        {
          id: "flask",
          icon: "fa devicon-flask-original fa-3x",
        },
        {
          id: "poetry",
          icon: "fa devicon-poetry-plain fa-3x",
        },
        {
          id: "nodejs",
          icon: "fa devicon-nodejs-plain fa-3x",
        },
        {
          id: "vuejs",
          icon: "fa devicon-vuejs-plain fa-3x",
        },
        {
          id: "sql",
          icon: "fa devicon-azuresqldatabase-plain fa-3x",
        },
        {
          id: "sqlalchemy",
          icon: "fa devicon-sqlalchemy-plain fa-3x",
        },
        {
          id: "azure",
          icon: "fa devicon-azure-plain fa-3x",
        },
        {
          id: "aws",
          icon: "fa devicon-amazonwebservices-plain fa-3x",
        },
        {
          id: "docker",
          icon: "fa devicon-docker-plain fa-3x",
        },
        {
          id: "git",
          icon: "fa devicon-git-plain fa-3x",
        },
      ],
    };
  },
};
</script>