import { defineStore } from 'pinia'
import {ref} from "vue";

export const toDoAppStore = defineStore('toDoAppStore', () => {
    const taskArray = ref([]);

    return {
        taskArray
    };
})