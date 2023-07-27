import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { Task } from "@/components/ToDoApp/task";
import { GeneratedFakeApi } from "@/components/FakeApi/GeneratedFakeApi";

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
    taskArray.value = theRealFakeApi.addNewTaskToDataBase(task.value);
    task.value = {
      taskDescription: "",
      category: undefined,
      date: undefined,
      location: undefined,
    }
  }

  const removeTask = (task: Task) => {
    console.log("test")
    taskArray.value = theRealFakeApi.deleteTask(task,taskArray.value)
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    taskArray.value = theRealFakeApi.getTasks();
  }

  onMounted(() => {
    taskArray.value = theRealFakeApi.getTasks()
  });

  return {
    taskArray,
    pushNewTask,
    task,
    clearLocalStorage,
    removeTask
  };
});
