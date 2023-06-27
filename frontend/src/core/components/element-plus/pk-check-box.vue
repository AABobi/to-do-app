<template>
    <ElCheckbox class="PkCheckbox">
        <slot/>
    </ElCheckbox>
</template>
<script setup lang="ts">
import { ElCheckbox } from "element-plus";
import {defineProps} from "vue";

const props = defineProps({
    buttonName: {
        type: String,
        default: "MyButton",
    }
});
</script>
<style lang="scss">
.PkCheckbox {

}
</style>