<template>
  <a
    :class="'btn btn-' + color + ' text-white'"
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