<template>
  <div class="UserTaskTable">
    <div v-for="task in store.taskArray">
      <UserTask
        class="UserTaskTable__task"
        :user-task="task"
        @click="remove(task)"
      ></UserTask>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserTask from "@/components/ToDoApp/components/UserTask.vue";
import { toDoAppStore } from "@/components/ToDoApp/stores/to-do-app-store";
import { Task } from "@/components/ToDoApp/domain/task";

const store = toDoAppStore();
const remove = (task: Task) => {
     store.removeTask(task);
};
</script>

<style scoped lang="scss">
.UserTaskTable {
  width: 80%;
  height: 300px;
  background: navajowhite;
  overflow: auto;
  &__task {
    cursor: pointer;
  }
}
</style>
