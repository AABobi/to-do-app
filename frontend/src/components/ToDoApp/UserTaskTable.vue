<template>
 <div class="UserTaskTable">
  <div v-for="list in store.taskArray">
     <UserTask :user-task="list"></UserTask>
  </div>
 </div>
</template>

<script setup lang="ts">
import UserTask from "@/components/ToDoApp/UserTask.vue";
import {computed, onMounted, ref, watch} from "vue";
import {Category, Task} from "@/components/ToDoApp/Task";
import {toDoAppStore} from "@/components/ToDoApp/ToDoAppStore";

onMounted(()=>{
 if(localStorage.length === 0) {
  return;
 }
 for(let i = 0; i < localStorage.length; i++) {
  const localStorageItemKey = localStorage.key(i);
  if(localStorageItemKey) {
   const localStorageItem = localStorage.getItem(localStorageItemKey);
   if(localStorageItem) {
    if(!store.taskArray) {
     let test: Task[] = []
     store.taskArray = test;
    }
    store.taskArray.push(JSON.parse(localStorageItem));
   }
  }
 }
})
const store = toDoAppStore();
</script>

<style scoped lang="scss">
.UserTaskTable {
    width: 80%;
    height: 300px;
    background: navajowhite;
 overflow: auto;
}
</style>