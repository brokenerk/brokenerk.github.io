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
          icon: "fa devicon-python-plain fa-3x py-3",
        },
        {
          id: "flask",
          icon: "fa devicon-flask-original fa-3x py-3",
        },
        {
          id: "poetry",
          icon: "fa devicon-poetry-plain fa-3x py-3",
        },
        {
          id: "numpy",
          icon: "fa devicon-numpy-plain fa-3x py-3",
        },
        {
          id: "pandas",
          icon: "fa devicon-pandas-plain-wordmark fa-3x py-3",
        },
        {
          id: "javascript",
          icon: "fa devicon-javascript-plain fa-3x py-3",
        },
        {
          id: "nodejs",
          icon: "fa devicon-nodejs-plain-wordmark fa-3x py-3",
        },
        {
          id: "vuejs",
          icon: "fa devicon-vuejs-plain-wordmark fa-3x py-3",
        },
        {
          id: "react",
          icon: "fa devicon-react-original-wordmark fa-3x py-3",
        },
        {
          id: "sql",
          icon: "fa devicon-azuresqldatabase-plain fa-3x py-3",
        },
        {
          id: "sqlalchemy",
          icon: "fa devicon-sqlalchemy-plain fa-3x py-3",
        },
        {
          id: "azure",
          icon: "fa devicon-azure-plain fa-3x py-3",
        },
        {
          id: "aws",
          icon: "fa devicon-amazonwebservices-plain fa-3x py-3",
        },
        {
          id: "docker",
          icon: "fa devicon-docker-plain fa-3x py-3",
        },
        {
          id: "git",
          icon: "fa devicon-git-plain fa-3x py-3",
        },
         {
          id: "linux",
          icon: "fa devicon-linux-plain fa-3x py-3",
        },
      ],
    };
  },
};
</script>