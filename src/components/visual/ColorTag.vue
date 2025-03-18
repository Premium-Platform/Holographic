<template>
  <span 
    @click="handleClick" 
    class="h-tag"
    :class="[colorClass, {
      'cursor-pointer': clickable
    }]"
  >
    <span v-if="icon" class="mr-1">
      <slot name="icon">
        <component :is="icon" class="w-3 h-3" />
      </slot>
    </span>
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, withDefaults } from 'vue';
import type { Component } from 'vue';

export interface ColorTagProps {
  /**
   * 标签文本
   */
  text?: string;
  /**
   * 标签颜色级别，会根据级别自动选择颜色
   */
  level?: number;
  /**
   * 指定的颜色索引
   */
  colorIndex?: number | null;
  /**
   * 标签颜色主题
   */
  theme?: 'ark';
  /**
   * 标签图标
   */
  icon?: Component;
  /**
   * 是否可点击
   */
  clickable?: boolean;
}

const props = withDefaults(defineProps<ColorTagProps>(), {
  text: '',
  level: 0,
  colorIndex: null,
  theme: 'ark',
  icon: undefined,
  clickable: true
});

const emit = defineEmits<{
  (e: 'click', value: string): void
}>();

// 多种主题风格的颜色类定义
const themeColorClasses = {
  ark: [
    'bg-ark-blue-light/20 text-ark-blue-light hover:bg-ark-blue-light/30',
    'bg-ark-green-light/20 text-ark-green-light hover:bg-ark-green-light/30',
    'bg-ark-yellow-light/20 text-ark-yellow-light hover:bg-ark-yellow-light/30',
    'bg-ark-red-light/20 text-ark-red-light hover:bg-ark-red-light/30',
    'bg-ark-purple-light/20 text-ark-purple-light hover:bg-ark-purple-light/30',
    'bg-ark-cyan-light/20 text-ark-cyan-light hover:bg-ark-cyan-light/30',
    'bg-ark-orange-light/20 text-ark-orange-light hover:bg-ark-orange-light/30',
    'bg-ark-pink-light/20 text-ark-pink-light hover:bg-ark-pink-light/30',
    'bg-ark-indigo-light/20 text-ark-indigo-light hover:bg-ark-indigo-light/30',
    'bg-ark-teal-light/20 text-ark-teal-light hover:bg-ark-teal-light/30'
  ]
};

// 根据主题、层级或指定的索引选择颜色
const colorClass = computed(() => {
  const index = props.colorIndex !== null ? props.colorIndex : props.level;
  const themeColors = themeColorClasses[props.theme] || themeColorClasses.ark;
  return themeColors[index % themeColors.length];
});

// 处理点击事件
const handleClick = () => {
  if (props.clickable) {
    emit('click', props.text || '');
  }
};
</script>

<style>
.h-tag {
  @apply inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200;
  @apply select-none;
  @apply min-w-[3rem] justify-center;
  letter-spacing: 0.01em;
}
</style> 