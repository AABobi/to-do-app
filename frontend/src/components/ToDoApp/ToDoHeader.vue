<template>
    <header class="ToDoHeader">
        <div class="ToDoHeader__circles">
            <CircleButton/>
            <CircleButton/>
            <CircleButton/>
        </div>
        <div class="ToDoHeader__headlineBox">
            <HeaderHeadline></HeaderHeadline>
        </div>
    </header>
</template>

<script setup lang="ts">
import CircleButton from "@/components/ToDoApp/CircleButton.vue";
import HeaderHeadline from "@/components/ToDoApp/HeaderHeadline.vue";
</script>

<style scoped lang="scss">
.ToDoHeader {
    width: 100%;
    height: 80px;
    background: green;
    display: flex;

    &__circles {
        flex: 1 2;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    &__headlineBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2 1;
    }


}
</style>