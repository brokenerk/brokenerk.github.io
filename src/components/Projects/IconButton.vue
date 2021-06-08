<template>
  <a :href="href" :style="{ color: color }" target="_blank">
    <i :class="icon" :title="title"></i>
  </a>
</template>

<script>
export default {
  props: ["href", "color", "icon", "title"],
};
</script>