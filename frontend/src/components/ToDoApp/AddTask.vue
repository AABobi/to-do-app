<template>
  <MyForm label-position="top" :class="formClasses">
    <div>
      <MyFormItem label="DESCRIPTION" class="AddTask__taskDescription">
        <PkInput v-model="newTask.taskDescription"></PkInput>
      </MyFormItem>
      <MyFormItem v-if="rolledUp">
        <MyButton @click="expandAddTaskMenuSize(false)">MORE DETAILS</MyButton>
      </MyFormItem>
      <MyFormItem
        v-if="!rolledUp"
        label="CATEGORY"
        class="AddTask__categoryForm"
      >
        <PkSelect
          class="AddTask__categoryForm--categoryOptions"
          v-model="newTask.category"
        >
          <PkOption v-for="item in Category" :key="item" :label="item" :value="item"/>
        </PkSelect>
      </MyFormItem>

      <MyFormItem v-if="!rolledUp" label="LOCATION" class="AddTask__location">
        <PkInput v-model="newTask.location"></PkInput>
      </MyFormItem>
    </div>
    <div class="AddTask__secondColumn">
      <MyFormItem v-if="!rolledUp" class="AddTask__dateInput">
        <MyDatePicker v-model="newTask.date"></MyDatePicker>
      </MyFormItem>
      <MyFormItem v-if="!rolledUp">
        <MyButton @click="addTask()">add</MyButton>
      </MyFormItem>
      <MyFormItem class="AddTask__addTask" v-if="rolledUp">
        <MyButton @click="addTask()">add</MyButton>
      </MyFormItem>
    </div>
  </MyForm>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MyFormItem,
  MyForm,
  PkInput,
  PkSelect,
  PkOption,
  MyButton,
  MyDatePicker,
} from "@/core/components/element-plus-proxy";
import { toDoAppStore } from "@/components/ToDoApp/to-do-app-store";
import { Category } from "@/components/ToDoApp/category";

const emit = defineEmits(["rolledUp"]);
const store = toDoAppStore();

const rolledUp = ref(true);
const newTask = computed( () => store.task)

const addTask = () => {
  if (!newTask.value.taskDescription) {
    alert("Description cant be empty");
    return;
  }
    store.pushNewTask();
    expandAddTaskMenuSize(true);
};
const expandAddTaskMenuSize = (value: boolean) => {
   rolledUp.value = value;
   emit("rolledUp", value);
};

const formClasses = computed(() => ({
  AddTask: true,
  "AddTask__expandCreateTaskArea": !rolledUp.value,
}));
</script>
<style scoped lang="scss">
.AddTask {
  margin: 10px 0 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  grid-gap: 10px;
  background: #f0eeeb;
  width: 500px;
  height: 110px;
  transition: 0.3s ease;

  .el-form-item__label {
    margin-left: 10px;
  }
  &__expandCreateTaskArea {
    height: 255px;
    width: 60%;
    transition: 0.3s ease;
  }

  &__secondColumn {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
  }

  &__taskDescription {
    margin-bottom: 40px;
    width: 100%;
  }

  &__categoryForm {
    margin-bottom: 40px;
    &--categoryOptions {
      width: 100%;
    }
  }

  &__location {
    margin-bottom: 40px;
    width: 100%;
  }

  &__addTask {
    margin-top: 35px;
  }

  &__dateInput {
    margin-top: 100px;
  }
}
</style>
