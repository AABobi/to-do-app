<template>
  <div class="UserTask">
    <div class="UserTask__infoBox">{{ userTask.taskDescription }}</div>
    <div class="UserTask__infoBox">{{ userTask.location }}</div>
    <div class="UserTask__infoBox">{{ userTask.date }}</div>
    <div class="UserTask__infoBox">{{ userTask.category }}</div>
  </div>
</template>

<script setup lang="ts">
import { Task } from "@/components/ToDoApp/task";

interface Props {
  userTask: Task;
}
defineProps<Props>();
</script>

<style lang="scss">
.UserTask {
  margin-bottom: 5px;
  width: 100%;
  height: 40px;
  background: white;
  display: flex;
  &__infoBox {
    flex: 1;
    padding: 10px;
    border-bottom: black solid 1px;
    border-top: black solid 1px;
  }
}
</style>
