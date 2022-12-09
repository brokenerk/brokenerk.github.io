<template>
  <footer class="row py-4 bg-dark">
    <div class="container-fluid">
      <p class="m-0 text-center text-white">
        {{ developedByCaption }} Enrique Ramos - Copyright {{ actualYear }}
      </p>
      <p class="m-0 text-center text-white">
        {{ poweredByCaption }}
      </p>
      <p class="m-0 text-center text-white">
        <img src="./../../assets/images/vuejs.png" />
        <img src="./../../assets/images/bootstrap.png" />
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["poweredByCaption", "developedByCaption"],
  data() {
    return {
      actualYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
img {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 3px 5px 0px 5px;
}
</style>