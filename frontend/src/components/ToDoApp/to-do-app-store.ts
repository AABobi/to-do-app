import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { Task } from "@/components/ToDoApp/task";
import { sortTask } from "@/components/ToDoApp/sort-task";
import {convertToCustomDate} from "@/components/ToDoApp/convert-to-custom-date";

export const toDoAppStore = defineStore("toDoAppStore", () => {
  const taskArray = ref<Task[]>([]);
  const task = ref<Task>({
    taskDescription: "",
    category: undefined,
    date: undefined,
    location: undefined,
  });

  const pushNewTask = () => {
    task.value.date = convertToCustomDate(task.value.date);

    taskArray.value.push(task.value);
    localStorage.setItem(localStorage.length.toString(), JSON.stringify(task.value));

    task.value = {
      taskDescription: "",
      category: undefined,
      date: undefined,
      location: undefined,
    }

    sortTask(taskArray.value);
  }

  const removeTask = (task: Task) => {
    taskArray.value = taskArray.value.filter((item) => item !== task);

    //This is horrible, but there is no normal back just localStorage
    localStorage.clear();
    for (let obj of taskArray.value) {
      localStorage.setItem(localStorage.length.toString(), JSON.stringify(obj));
    }
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    rewriteLocalStorageDataToStore();
  }
  const rewriteLocalStorageDataToStore = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const localStorageItem = localStorage.getItem(i.toString());
      if (localStorageItem) {
        taskArray.value.push(JSON.parse(localStorageItem));
      }
    }
    taskArray.value = sortTask(taskArray.value);
  };

  onMounted(() => {
    rewriteLocalStorageDataToStore();
  });

  return {
    rewriteLocalStorageDataToStore,
    taskArray,
    pushNewTask,
    task,
    clearLocalStorage,
    removeTask
  };
});
