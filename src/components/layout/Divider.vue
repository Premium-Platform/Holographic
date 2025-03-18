<template>
  <div
    :class="[
      'h-divider',
      'h-divider-ark',
      `h-divider-${direction}`,
      {
        'h-divider-holographic': holographic,
        'h-divider-dashed': dashed,
        'h-divider-with-text': $slots.default
      },
      customClass
    ]"
    :style="customStyle"
  >
    <div v-if="$slots.default" class="h-divider-text">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

export interface DividerProps {
  /**
   * 分割线方向
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 是否为虚线
   */
  dashed?: boolean;
  /**
   * 是否使用全息效果
   */
  holographic?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, string>;
}

withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  dashed: false,
  holographic: false,
  customClass: '',
  customStyle: () => ({})
});
</script>

<style scoped>
/* 水平分割线 */
.h-divider-horizontal {
  @apply relative block h-px w-full my-4;
}

/* 垂直分割线 */
.h-divider-vertical {
  @apply relative inline-block h-full w-px mx-4 min-h-[1em] align-middle;
}

/* 主题样式 - 全息科技风 */
.h-divider-ark {
  @apply bg-ark-border;
}

/* 虚线样式 */
.h-divider-dashed {
  background-image: linear-gradient(to right, currentColor 33%, transparent 33%);
  background-size: 8px 1px;
  background-repeat: repeat-x;
}

.h-divider-vertical.h-divider-dashed {
  background-image: linear-gradient(to bottom, currentColor 33%, transparent 33%);
  background-size: 1px 8px;
  background-repeat: repeat-y;
}

/* 带文本的分割线 */
.h-divider-with-text {
  @apply flex items-center;
  border: none;
  background: none;
}

.h-divider-with-text::before,
.h-divider-with-text::after {
  content: '';
  @apply flex-grow h-px;
}

.h-divider-ark.h-divider-with-text::before,
.h-divider-ark.h-divider-with-text::after {
  @apply bg-ark-border;
}

.h-divider-text {
  @apply px-4 text-center flex-shrink-0;
}

.h-divider-ark .h-divider-text {
  @apply text-ark-text-secondary;
}

/* A全息效果 */
.h-divider-holographic {
  position: relative;
  overflow: hidden;
}

.h-divider-holographic::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(0, 194, 255, 0.8), transparent);
  width: 50%;
  animation: divider-scan 2s ease-in-out infinite;
}

@keyframes divider-scan {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}
</style> 