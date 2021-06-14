<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <!--Brokenerk-->
      <a class="nav-link text-white" href="#">
        <span class="navbar-brand mb-0 h1">Enrique Ramos Diaz</span>
      </a>
      <!--Boton responsive-->
      <button class="navbar-toggler" @click="collapseNavbarList">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Lista links-->
      <div class="navbar-collapse" :style="'display:' + collapseClass">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <div class="nav-link text-white">
              <slot></slot>
            </div>
          </li>

          <navbar-item
            :href="'#aboutMe'"
            :caption="aboutMeCaption"
          ></navbar-item>

          <navbar-item
            :href="'#projects'"
            :caption="projectsCaption"
          ></navbar-item>

          <navbar-item
            :href="resumeFileName"
            :caption="resumeCaption"
            :target="'_blank'"
          ></navbar-item>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
export default {
  components: {
    NavbarItem,
  },
  props: [
    "aboutMeCaption",
    "projectsCaption",
    "resumeCaption",
    "resumeFileName",
  ],
  data() {
    return {
      collapseClass: "none",
    };
  },
  methods: {
    collapseNavbarList() {
      this.collapseClass === "none"
        ? (this.collapseClass = "block")
        : (this.collapseClass = "none");
    },
  },
};
</script>