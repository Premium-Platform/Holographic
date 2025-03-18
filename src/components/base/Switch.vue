<template>
  <div class="h-switch-wrapper">
    <!-- 标签 -->
    <label 
      v-if="label" 
      :for="switchId" 
      class="h-switch-label"
      :class="`h-switch-label-${theme}`"
    >
      {{ label }}
    </label>
    
    <!-- 开关主体 -->
    <button
      :id="switchId"
      type="button"
      role="switch"
      :aria-checked="modelValue"
      class="h-switch"
      :class="[
        `h-switch-${theme}`,
        `h-switch-${size}`,
        {
          'h-switch-checked': modelValue,
          'h-switch-disabled': disabled,
          'h-switch-holographic': holographic
        },
        customClass
      ]"
      :disabled="disabled"
      @click="toggle"
    >
      <!-- 轨道 -->
      <span class="h-switch-track"></span>
      
      <!-- 滑块 -->
      <span class="h-switch-thumb">
        <span v-if="loading" class="h-switch-loading"></span>
        <span v-else-if="(modelValue && checkedIcon) || (!modelValue && uncheckedIcon)" class="h-switch-icon">
          <component :is="modelValue ? checkedIcon : uncheckedIcon" />
        </span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, withDefaults, useAttrs } from 'vue';
import { generateId } from '../../utils';
import type { Component } from 'vue';

export interface SwitchProps {
  /**
   * 开关状态（v-model）
   */
  modelValue?: boolean;
  /**
   * 开关大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 开关主题
   */
  theme?: 'ark';
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否加载中
   */
  loading?: boolean;
  /**
   * 开关标签
   */
  label?: string;
  /**
   * 选中状态图标
   */
  checkedIcon?: Component;
  /**
   * 非选中状态图标
   */
  uncheckedIcon?: Component;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 全息效果
   */
  holographic?: boolean;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  size: 'medium',
  theme: 'ark',
  disabled: false,
  loading: false,
  label: '',
  checkedIcon: undefined,
  uncheckedIcon: undefined,
  customClass: '',
  holographic: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

// 获取attrs
const attrs = useAttrs();

// 生成唯一ID
const switchId = computed(() => attrs.id as string || generateId('switch'));

// 切换开关状态
const toggle = () => {
  if (props.disabled || props.loading) return;
  
  const newValue = !props.modelValue;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};
</script>

<style scoped>
.h-switch-wrapper {
  @apply inline-flex items-center gap-2;
}

.h-switch-label {
  @apply text-sm font-medium;
}

.h-switch-label-ark {
  @apply text-ark-text;
}

/* 开关基础样式 */
.h-switch {
  @apply relative inline-flex shrink-0 cursor-pointer rounded-full;
  @apply border-2 border-transparent transition-colors duration-200 ease-in-out;
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
}

/* 尺寸变体 */
.h-switch-small {
  @apply h-5 w-9;
}

.h-switch-small .h-switch-thumb {
  @apply h-4 w-4;
}

.h-switch-medium {
  @apply h-6 w-11;
}

.h-switch-medium .h-switch-thumb {
  @apply h-5 w-5;
}

.h-switch-large {
  @apply h-7 w-14;
}

.h-switch-large .h-switch-thumb {
  @apply h-6 w-6;
}

/* 轨道样式 */
.h-switch-track {
  @apply absolute inset-0 h-full w-full rounded-full transition-all;
  @apply pointer-events-none;
}

/* 滑块样式 */
.h-switch-thumb {
  @apply pointer-events-none absolute rounded-full;
  @apply flex items-center justify-center;
  @apply transform ring-0 transition-transform duration-200 ease-in-out;
  top: 50%;
  transform: translateY(-50%);
}

.h-switch-small .h-switch-thumb {
  left: 2px;
}

.h-switch-medium .h-switch-thumb {
  left: 2px;
}

.h-switch-large .h-switch-thumb {
  left: 2px;
}

.h-switch-checked.h-switch-small .h-switch-thumb {
  left: calc(100% - 18px);
}

.h-switch-checked.h-switch-medium .h-switch-thumb {
  left: calc(100% - 22px);
}

.h-switch-checked.h-switch-large .h-switch-thumb {
  left: calc(100% - 26px);
}

/* 主题 - Ark */
.h-switch-ark {
  @apply bg-ark-border focus-visible:ring-ark-accent/50 focus-visible:ring-offset-ark-bg;
}

.h-switch-ark .h-switch-track {
  @apply bg-ark-border;
}

.h-switch-ark .h-switch-thumb {
  @apply bg-ark-text-secondary;
}

.h-switch-ark.h-switch-checked {
  @apply bg-ark-accent;
}

.h-switch-ark.h-switch-checked .h-switch-track {
  @apply bg-ark-accent;
}

.h-switch-ark.h-switch-checked .h-switch-thumb {
  @apply bg-white;
}

/* 禁用状态 */
.h-switch-disabled {
  @apply opacity-50 cursor-not-allowed;
}

/* 加载动画 */
.h-switch-loading {
  @apply h-3 w-3 animate-spin rounded-full;
  @apply border-2 border-transparent border-t-current;
}

/* 图标 */
.h-switch-icon {
  @apply h-3 w-3;
}

/* 全息效果 */
.h-switch-holographic .h-switch-track {
  backdrop-filter: blur(5px);
}

.h-switch-holographic.h-switch-ark {
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
}

.h-switch-holographic.h-switch-ark.h-switch-checked {
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}
</style> 