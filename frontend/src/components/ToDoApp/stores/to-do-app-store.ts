import { defineStore } from "pinia";
import {computed, onMounted, ref} from "vue";
import { Task } from "@/components/ToDoApp/domain/task";
import { GeneratedFakeApi } from "@/components/FakeApi/GeneratedFakeApi";
import {sortTask} from "@/components/ToDoApp/domain/sort-task";

export const toDoAppStore = defineStore("toDoAppStore", () => {
  const taskArray = ref<Task[]>([]);
  const task = ref<Task>({
    taskDescription: "",
    category: undefined,
    date: undefined,
    location: undefined,
  });

  const theRealFakeApi = new GeneratedFakeApi();

  const pushNewTask = () => {
    taskArray.value = theRealFakeApi.addNewTaskToDataBase(task.value!);
    task.value = {
      taskDescription: "",
      category: undefined,
      date: undefined,
      location: undefined,
    }
    sortTask(taskArray.value);
  }

  const removeTask = (task: Task) => {
    taskArray.value = theRealFakeApi.deleteTask(task,taskArray.value)
    sortTask(taskArray.value);
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    taskArray.value = theRealFakeApi.getTasks();
  }

  onMounted(() => {
    taskArray.value = theRealFakeApi.getTasks()
    sortTask(taskArray.value);
  });

  return {
    taskArray,
    pushNewTask,
    task,
    clearLocalStorage,
    removeTask
  };
});
