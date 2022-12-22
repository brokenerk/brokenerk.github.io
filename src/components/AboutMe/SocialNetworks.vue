<template>
  <div
    class="col-2 col-sm-2 col-md-2 col-lg-1"
    v-for="sn in socialNetworks"
    :key="sn.id"
  >
    <a :href="sn.link" class="text-dark" target="_blank">
      <i :class="sn.icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: [
        {
          id: "github",
          link: "https://github.com/brokenerk",
          icon: "fa fa-github fa-3x",
        },
        {
          id: "linkedin",
          link: "https://www.linkedin.com/in/eramos-/",
          icon: "fa fa-linkedin-square fa-3x",
        },
        {
          id: "email",
          link: "mailto: er204863@outlook.com",
          icon: "fa fa-envelope fa-3x",
        },
      ],
    };
  },
};
</script>