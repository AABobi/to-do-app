<template>
  <header class="ToDoHeader">
    <HeaderHeadline
      class="ToDoHeader__headLine"
      title="REMOVE ALL TASKS"
      @click="clearLocalStorage"
    ></HeaderHeadline>
  </header>
</template>

<script setup lang="ts">
import HeaderHeadline from "@/components/ToDoApp/HeaderHeadline.vue";
import { toDoAppStore } from "@/components/ToDoApp/ToDoAppStore";

const store = toDoAppStore();
const clearLocalStorage = () => {
  localStorage.clear();
  store.rewriteLocalStorageDataToStore();
};
</script>

<style scoped lang="scss">
.ToDoHeader {
  width: 100%;
  height: 80px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  &__headLine {
    cursor: pointer;
  }
}
</style>
