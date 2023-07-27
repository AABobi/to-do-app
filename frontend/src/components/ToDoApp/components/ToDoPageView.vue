<template>
  <div class="ToDoPageView">
    <div :class="classes">
      <ToDoHeader></ToDoHeader>
      <AddTask @rolled-up="expandMenu"></AddTask>
      <UserTaskTable class="ToDoPageView__table"></UserTaskTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToDoHeader from "@/components/ToDoApp/components/ToDoHeader.vue";
import AddTask from "@/components/ToDoApp/components/AddTask.vue";
import UserTaskTable from "@/components/ToDoApp/components/UserTaskTable.vue";
import { computed, ref } from "vue";

const rolledUp = ref(true);
const expandMenu = (event: any) => {
  rolledUp.value = event;
};

const classes = computed(() => ({
    ToDoPageView__mainBox: true,
    "ToDoPageView__mainBox--increaseHeight": !rolledUp.value,
}));

</script>

<style scoped lang="scss">
.ToDoPageView {
  display: flex;
  justify-content: center;
  align-items: center;

  &__mainBox {
    border: 2px black solid;
    width: 800px;
    height: 510px;
    background: #f0eeeb;
    transition: height 0.3s ease;
    &--increaseHeight {
      height: 655px;
      transition: height 0.3s ease;
    }
  }
  &__table {
    margin: 10px auto 0 auto;
  }
}
</style>
