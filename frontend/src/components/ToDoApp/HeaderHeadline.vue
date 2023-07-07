<template>
  <div class="HeaderHeadline">
    <span class="HeaderHeadline__label">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.HeaderHeadline {
  width: 100%;
  height: 30px;
  border: white 1px solid;
  border-radius: 10px;
  margin: 0 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__label {
    font-family: Roboto;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
}
</style>
