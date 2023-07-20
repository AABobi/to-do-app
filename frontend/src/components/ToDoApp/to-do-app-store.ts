import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { Task } from "@/components/ToDoApp/task";
import { sortTask } from "@/components/ToDoApp/sort-task";

export const toDoAppStore = defineStore("toDoAppStore", () => {
  onMounted(() => {
    rewriteLocalStorageDataToStore();
  });
  const taskArray = ref<Task[]>([]);

  const rewriteLocalStorageDataToStore = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const localStorageItem = localStorage.getItem(i.toString());
      if (localStorageItem) {
        taskArray.value.push(JSON.parse(localStorageItem));
      }
    }
    taskArray.value = sortTask(taskArray.value);
  };

  return {
    rewriteLocalStorageDataToStore,
    taskArray,
  };
});
