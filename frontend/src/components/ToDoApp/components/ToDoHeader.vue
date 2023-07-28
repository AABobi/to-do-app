<template>
  <header class="ToDoHeader">
      <div class="ToDoHeader__header" @click="clearStorage">
          <span class="ToDoHeader__title">{{ title }}</span>
      </div>
  </header>
</template>

<script setup lang="ts">
import { toDoAppStore } from "@/components/ToDoApp/stores/to-do-app-store";
interface Props {
    title: string;
}

defineProps<Props>();

const store = toDoAppStore();
const clearStorage = () => {
    store.clearLocalStorage();
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
  &__header {
    width: 100%;
    height: 30px;
    border: white 1px solid;
    border-radius: 10px;
    margin: 0 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    font-family: Roboto;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
}
</style>
