<template>
  <li class="nav-item">
    <a class="nav-link text-white" :href="href" :target="target">{{
      caption
    }}</a>
  </li>
</template>

<script>
export default {
  props: ["href", "target", "caption"],
};
</script>