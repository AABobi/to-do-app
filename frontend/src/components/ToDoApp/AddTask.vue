<template>
    <MyForm :class="formClasses" label-position="top">
        <MyFormItem style="height: 100%" label="CREATE NEW TASK">
            <div :class="containerClasses">
                <PkInput class="AddTask__taskTextInput" v-model="description"></PkInput>
                <PkButton  class="AddTask__addTask" @click="addTask">ADD</PkButton>
                <PkButton @click="expandAddTaskMenu" v-if="rolledUp" class="AddTask__belowTaskInputElement">MORE DETAILS</PkButton>
                <PkSelect
                    v-if="!rolledUp"
                    class="AddTask__belowTaskInputElement"
                    v-model="category"
                >
                    <PkOption
                        v-for="item in options"
                        :value="item"
                    ></PkOption>
                </PkSelect>

                <DatePicker v-model="dateValue" v-if="!rolledUp" class="AddTask__dateInput"></DatePicker>
                <PkInput v-if="!rolledUp" v-model="location" class="AddTask__location"></PkInput>
            </div>
        </MyFormItem>
    </MyForm>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import { PkButton, MyFormItem, MyForm, PkCheckBox, PkInput, ModifiableDropdownList, PkSelect, PkOption } from "@/core/components/element-plus-proxy";
import DatePicker from "@/core/components/element-plus/date-picker.vue";
import {Category, Task} from "@/components/ToDoApp/Task";

const emit = defineEmits(["rolledUp"])

const value = ref('')
const dateValue =ref()
const location = ref();
const description = ref();
const category = ref();
const task = ref<Task>();
const options = ref<Category[]>([Category.normal,Category.important,Category.minor])

const taskArray = ref();

const addTask = () =>{
    task.value = {
        taskDescription: description.value,
        date: dateValue.value,
        category: category.value,
        location: location.value
    }

  console.log();
}

const rolledUp = ref(true);
const expandAddTaskMenu = () => {
    rolledUp.value = !rolledUp.value;
    console.log(rolledUp.value);
    emit("rolledUp", rolledUp.value)
    //console.log(optionalCategory.value[0]);
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
    display: flex;
    //justify-content: center;
  //  align-items: center;
    flex-direction: column;
    background: #f0eeeb;
    width: 50%;
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
            "input input addTaskButton"
            "belowTaskInputElement . ."
        }
        &--expanded {
            grid-template-columns: 3fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
               "input . . ."
               "belowTaskInputElement date date date"
               "location . . ."
               ". . addTaskButton addTaskButton"
        }
    }
    &__taskTextInput {
        grid-area: input;
        width: 50px;
        margin-left: 5px;
    }

    &__belowTaskInputElement {
        grid-area: belowTaskInputElement;
    }

    &__addTask {
        grid-area: addTaskButton;
        margin: 0 25px 0 5px;
    }
    &__dateInput {
        grid-area: date;
    }

    &__location {
        grid-area: location;
    }

    &__expandCreateTaskArea {
        height: 200px;
        width: 60%;
        transition: 0.3s ease;
    }

}
</style>