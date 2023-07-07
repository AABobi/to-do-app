<template>
  <div class="UserTaskTable">
    <div v-for="list in store.taskArray">
      <UserTask
        class="UserTaskTable__task"
        :user-task="list"
        @click="removeTask(list)"
      ></UserTask>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserTask from "@/components/ToDoApp/UserTask.vue";
import { toDoAppStore } from "@/components/ToDoApp/ToDoAppStore";
import { Task } from "@/components/ToDoApp/Task";

const store = toDoAppStore();
const removeTask = (list: Task) => {
  store.taskArray = store.taskArray.filter((item) => item !== list);

  //This is horrible, but there is no normal back just localStorage
  localStorage.clear();
  for (let obj of store.taskArray) {
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(obj));
  }
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
