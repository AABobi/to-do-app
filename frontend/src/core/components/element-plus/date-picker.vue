<template>
  <ElDatePicker
    class="DatePicker"
    v-model="date"
    type="date"
    placeholder="Pick a date"
  >
  </ElDatePicker>
</template>
<script setup lang="ts">
import { ElDatePicker } from "element-plus";
import { computed } from "vue";

const props = defineProps({
  modelValue: Date,
});

const emit = defineEmits(["update:modelValue"]);
const date = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v)
});
</script>
<style lang="scss">
.DatePicker {
  .el-input__inner {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
