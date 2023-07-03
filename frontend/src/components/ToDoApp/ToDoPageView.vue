<template>
    <div class="ToDoPageView">
        <div :class="classes">
            <ToDoHeader></ToDoHeader>
            <AddTask  @rolled-up="expandMenu"></AddTask>
            <UserTaskTable class="ToDoPageView__table"></UserTaskTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import ToDoHeader from "@/components/ToDoApp/ToDoHeader.vue";
import AddTask from "@/components/ToDoApp/AddTask.vue";
import UserTaskTable from "@/components/ToDoApp/UserTaskTable.vue";
import { computed, ref } from "vue";

const classes = computed( () => ({
    "ToDoPageView__mainBox": true,
    "ToDoPageView__mainBox--increaseHeight": !rolledUp.value
}))

const rolledUp = ref(true)
const expandMenu = (event: any) => {
    rolledUp.value = event;
}
</script>

<style scoped lang="scss">
.ToDoPageView {
    display: flex;
    justify-content: center;
    align-items: center;
     &__mainBox {
         width: 800px;
         height: 550px;
         background: #f0eeeb;
         transition: height 0.3s ease;
         &--increaseHeight {
             height: 565px;
             transition: height 0.3s ease;
         }
     }
    &__table {
        margin: 10px auto 0 auto;
    }
}
</style>