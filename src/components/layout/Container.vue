<template>
  <div 
    :class="[
      'h-container',
      {
        'h-container-fluid': fluid,
        'h-container-centered': centered
      },
      customClass
    ]"
    :style="customStyle"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

export interface ContainerProps {
  /**
   * 是否为流体容器（占满全屏）
   */
  fluid?: boolean;
  /**
   * 内容是否居中
   */
  centered?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, string>;
}

withDefaults(defineProps<ContainerProps>(), {
  fluid: false,
  centered: true,
  customClass: '',
  customStyle: () => ({})
});
</script>

<style scoped>
.h-container {
  @apply mx-auto px-4 w-full;
  max-width: 1280px;
}

.h-container-fluid {
  @apply max-w-full;
}

.h-container-centered {
  @apply flex flex-col items-center;
}

/* 响应式设计 */
@media (min-width: 640px) {
  .h-container:not(.h-container-fluid) {
    @apply px-6;
  }
}

@media (min-width: 768px) {
  .h-container:not(.h-container-fluid) {
    @apply px-8;
  }
}

@media (min-width: 1024px) {
  .h-container:not(.h-container-fluid) {
    @apply px-10;
  }
}

@media (min-width: 1280px) {
  .h-container:not(.h-container-fluid) {
    @apply px-12;
  }
}
</style> 