<script name="kaka" lang="ts" setup>
import {ref} from "vue";
import {onBeforeRouteUpdate} from "vue-router";

const count = ref(0);

defineProps({
  msg: String,
});
onBeforeRouteUpdate(() => {
  console.log(555);
});
function go1() {
  console.log("go1:", count.value);
}
function go2() {
  console.log("go1:", count.value);
}
</script>

<template>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
