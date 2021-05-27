<template>
  <a :href="href" :class="'text-' + color" target="_blank">
    <i :class="icon" :title="title"></i>
  </a>
</template>

<script>
export default {
  props: ["href", "color", "icon", "title"]
};
</script>