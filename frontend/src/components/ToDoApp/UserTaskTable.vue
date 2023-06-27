<template>
 <div class="UserTaskTable">
  <div v-for="list in store.taskArray">
     <UserTask :user-task="list"></UserTask>
  </div>
  <button @click="t">test</button>
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
    store.taskArray.push(JSON.parse(localStorageItem));
   }
  }
 }`
 `
})

const store = toDoAppStore();

const qwe = ref(["a","b"])
const test = ref([]);

const t = () => {
 let date: Date = new Date();
 let a: Task = {
  taskDescription: "test",
  category: Category.normal,
  date: date,
  location: 'asd'+ localStorage.length.toString()
 }
 localStorage.setItem(localStorage.length.toString(), JSON.stringify(a))
}

</script>

<style scoped lang="scss">
.UserTaskTable {
    width: 80%;
    height: 300px;
    background: red;
 overflow: auto;
}
</style>