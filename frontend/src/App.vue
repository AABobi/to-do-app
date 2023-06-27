<template>
  <ToDoPageView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoPageView from "./components/ToDoApp/ToDoPageView.vue";

export default defineComponent({
  name: "App",
  components: {
      ToDoPageView,
  },
});
</script>

<style lang="scss">

</style>
