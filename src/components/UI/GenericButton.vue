<template>
  <a
    class="btn text-white"
    :style="{ backgroundColor: color, borderColor: color }"
    :href="href"
    target="_blank"
    >{{ caption }}</a
  >
</template>

<script>
export default {
  props: ["href", "color", "caption"]
};
</script>

<style scoped>
.btn {
  margin-top: 5px;
}
</style>