<template>
  <ElButton class="PkButton">
    <slot/>
  </ElButton>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
import {defineProps} from "vue";

const props = defineProps({
  buttonName: {
    type: String,
    default: "MyButton",
  }
});
</script>
<style lang="scss">
.PkButton {
  &.el-button {
    border: black solid 2px;
    font-weight: bold;
    color: black;
  }
}
</style>