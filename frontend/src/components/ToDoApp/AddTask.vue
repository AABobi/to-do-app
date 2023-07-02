<template>
    <MyForm :class="formClasses" label-position="top">
        <MyFormItem label="CREATE NEW TASK">
            <div :class="containerClasses">
                <PkInput class="AddTask__taskDescription" v-model="task.taskDescription"></PkInput>
                <PkButton  class="AddTask__addTask" @click="addTask">ADD</PkButton>
                <PkButton class="AddTask__moreDetails" @click="expandAddTaskMenu" v-if="rolledUp" >MORE DETAILS</PkButton>
                <PkSelect
                    v-if="!rolledUp"
                    class="AddTask__category"
                    v-model="task.category"
                >
                    <PkOption
                        v-for="item in options"
                        :value="item"
                    ></PkOption>
                </PkSelect>

                <DatePicker v-model="task.date" v-if="!rolledUp" class="AddTask__dateInput"></DatePicker>
                <PkInput v-if="!rolledUp" v-model="task.location" class="AddTask__location"></PkInput>
            </div>
        </MyFormItem>
    </MyForm>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { PkButton, MyFormItem, MyForm, PkInput, PkSelect, PkOption } from "@/core/components/element-plus-proxy";
import DatePicker from "@/core/components/element-plus/date-picker.vue";
import { Category, Task } from "@/components/ToDoApp/Task";
import { toDoAppStore } from "@/components/ToDoApp/ToDoAppStore";

const emit = defineEmits(["rolledUp"])
const store = toDoAppStore();
const options = ref<Category[]>([Category.normal,Category.important,Category.minor])

const task = ref<Task>({
    taskDescription: '',
    category: undefined,
    date: undefined,
    location: undefined
})
const addTask = () =>{
    if(!store.taskArray) {
        store.taskArray = [];
    }
    task.value.date = convertToCustomDate(task.value.date);
    store.taskArray.push(task.value);
    task.value = {
      taskDescription: '',
      category: undefined,
      date: undefined,
      location: undefined
    }
    rolledUp.value = true;
    store.sortArray();
}
function convertToCustomDate(dateString: string | undefined) {
    if(!dateString) {
        return undefined;
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}
const rolledUp = ref(true);
const expandAddTaskMenu = () => {
    rolledUp.value = !rolledUp.value;
    emit("rolledUp", rolledUp.value)
}

const formClasses = computed( () => ({
    AddTask: true,
    "AddTask__expandCreateTaskArea": !rolledUp.value,
}))

const containerClasses = computed( () => ({
    "AddTask__container": true,
    "AddTask__container--rolledUp": rolledUp.value,
    "AddTask__container--expanded": !rolledUp.value,
}))
</script>
<style lang="scss">
.AddTask {
    margin: 10px 0 0 10px;
    display: flex;
    flex-direction: column;
    background: #f0eeeb;
    width: 400px;
    height: 150px;
    transition: 0.3s ease;

    .el-form-item__label {
        margin-left: 10px;
    }
    &__container {
        display: grid;
        width: 100%;
        &--rolledUp {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
            "taskDescription taskDescription addTaskButton ."
            "moreDetails . . ."
        }
        &--expanded {
            grid-template-columns: 3fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
               "taskDescription taskDescription . ."
               "category category date date"
               "location location . ."
               ". . addTaskButton addTaskButton"
        }
    }
    &__taskDescription {
        grid-area: taskDescription;
        width: 50px;
    }

    &__category {
        grid-area: category;
    }

    &__moreDetails {
        grid-area: moreDetails;
    }

    &__addTask {
        grid-area: addTaskButton;
    }

    &__dateInput {
        grid-area: date;
    }

    &__location {
        grid-area: location;
    }

    &__expandCreateTaskArea {
        height: 163px;
        width: 60%;
        transition: 0.3s ease;
    }

}
</style>