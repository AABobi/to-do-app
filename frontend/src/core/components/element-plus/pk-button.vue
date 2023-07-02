<template>
  <ElButton class="PkButton">
    <slot/>
  </ElButton>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
</script>
<style scoped lang="scss">
.PkButton {
/*  &.el-button {
    border: black solid 2px;
    font-weight: bold;
    color: black;
    margin: 0 ;
  }*/
}
</style>