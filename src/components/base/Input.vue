<template>
  <div class="h-input-wrapper" :class="{ 'h-input-block': block }">
    <!-- 标签 -->
    <label 
      v-if="label" 
      :for="inputId" 
      class="h-input-label"
      :class="`h-input-label-${theme}`"
    >
      {{ label }}
    </label>
    
    <!-- 输入框组 -->
    <div 
      class="h-input-group"
      :class="[
        `h-input-${theme}`,
        `h-input-${size}`,
        {
          'h-input-disabled': disabled,
          'h-input-has-error': error,
          'h-input-holographic': holographic,
          'h-input-focus': isFocused
        },
        customClass
      ]"
    >
      <!-- 前缀图标 -->
      <span v-if="prefixIcon || $slots.prefix" class="h-input-prefix">
        <slot name="prefix">
          <component v-if="prefixIcon" :is="prefixIcon" class="h-input-icon" />
        </slot>
      </span>
      
      <!-- 输入框 -->
      <input
        :id="inputId"
        ref="inputRef"
        v-bind="$attrs"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
        :class="{ 'h-input-has-prefix': $slots.prefix || prefixIcon, 'h-input-has-suffix': $slots.suffix || suffixIcon }"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
      
      <!-- 后缀图标 -->
      <span v-if="suffixIcon || $slots.suffix || clearable" class="h-input-suffix">
        <slot name="suffix">
          <template v-if="clearable && modelValue && !disabled && !readonly">
            <span class="h-input-clear" @click="handleClear">
              <svg class="h-input-clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </template>
          <component v-else-if="suffixIcon" :is="suffixIcon" class="h-input-icon" />
        </slot>
      </span>
    </div>
    
    <!-- 错误信息 -->
    <div
      v-if="error"
      class="h-input-error"
      :class="`h-input-error-${theme}`"
    >
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useAttrs } from 'vue';
import { generateId } from '../../utils';
import type { Component } from 'vue';

export interface InputProps {
  /**
   * 输入框值（v-model）
   */
  modelValue?: string;
  /**
   * 输入框类型
   */
  type?: string;
  /**
   * 输入框大小
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 输入框主题
   */
  theme?: 'ark';
  /**
   * 占位提示文本
   */
  placeholder?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否只读
   */
  readonly?: boolean;
  /**
   * 是否显示清除按钮
   */
  clearable?: boolean;
  /**
   * 是否块级显示（宽度100%）
   */
  block?: boolean;
  /**
   * 最大长度
   */
  maxlength?: number;
  /**
   * 自动完成
   */
  autocomplete?: string;
  /**
   * 输入框标签
   */
  label?: string;
  /**
   * 错误信息
   */
  error?: string;
  /**
   * 前缀图标
   */
  prefixIcon?: Component;
  /**
   * 后缀图标
   */
  suffixIcon?: Component;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 全息效果
   */
  holographic?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  size: 'medium',
  theme: 'ark',
  placeholder: '',
  disabled: false,
  readonly: false,
  clearable: false,
  block: false,
  maxlength: undefined,
  autocomplete: 'off',
  label: '',
  error: '',
  prefixIcon: undefined,
  suffixIcon: undefined,
  customClass: '',
  holographic: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'input', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'clear'): void;
}>();

// 获取attrs
const attrs = useAttrs();

// 生成唯一ID
const inputId = computed(() => attrs.id as string || generateId('input'));

// 引用DOM元素
const inputRef = ref<HTMLInputElement | null>(null);
// 是否聚焦
const isFocused = ref(false);

// 处理输入事件
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
  emit('input', value);
};

// 处理变化事件
const handleChange = (e: Event) => {
  emit('change', (e.target as HTMLInputElement).value);
};

// 处理聚焦
const handleFocus = (e: FocusEvent) => {
  isFocused.value = true;
  emit('focus', e);
};

// 处理失焦
const handleBlur = (e: FocusEvent) => {
  isFocused.value = false;
  emit('blur', e);
};

// 处理清除
const handleClear = () => {
  emit('update:modelValue', '');
  emit('clear');
  
  // 聚焦输入框
  inputRef.value?.focus();
};

// 暴露给父组件的方法
defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
  select: () => inputRef.value?.select(),
  input: inputRef
});
</script>

<style scoped>
.h-input-wrapper {
  @apply relative flex flex-col;
}

.h-input-block {
  @apply w-full;
}

.h-input-label {
  @apply block mb-1 text-sm font-medium;
}

.h-input-label-ark {
  @apply text-ark-text;
}

.h-input-group {
  @apply relative flex items-center overflow-hidden;
  @apply transition-all duration-200;
}

/* 基础样式 */
.h-input-group input {
  @apply flex-grow bg-transparent outline-none w-full;
}

/* 尺寸变体 */
.h-input-small {
  @apply text-sm rounded-sm;
}

.h-input-small input {
  @apply py-1 px-2;
}

.h-input-medium {
  @apply text-base rounded;
}

.h-input-medium input {
  @apply py-2 px-3;
}

.h-input-large {
  @apply text-lg rounded-md;
}

.h-input-large input {
  @apply py-3 px-4;
}

/* 主题变体 - Ark */
.h-input-ark {
  @apply bg-ark-active border border-ark-border text-ark-text;
}

.h-input-ark:not(.h-input-disabled):hover {
  @apply border-ark-accent/50;
}

.h-input-ark.h-input-focus {
  @apply border-ark-accent ring-1 ring-ark-accent/30;
}

/* 状态变体 */
.h-input-disabled {
  @apply opacity-60 cursor-not-allowed;
}

.h-input-has-error.h-input-ark {
  @apply border-ark-red-light;
}

/* 全息效果 */
.h-input-holographic {
  backdrop-filter: blur(5px);
  @apply bg-opacity-50;
}

.h-input-ark.h-input-holographic {
  background: linear-gradient(135deg, 
    rgba(16, 24, 35, 0.7) 0%, 
    rgba(30, 41, 59, 0.7) 100%
  );
}

/* 前缀和后缀 */
.h-input-prefix {
  @apply flex items-center pl-3 pr-1;
}

.h-input-suffix {
  @apply flex items-center pl-1 pr-3;
}

.h-input-icon {
  @apply w-4 h-4;
}

.h-input-has-prefix {
  @apply pl-0;
}

.h-input-has-suffix {
  @apply pr-0;
}

/* 清除按钮 */
.h-input-clear {
  @apply cursor-pointer opacity-60 hover:opacity-100 transition-opacity;
}

.h-input-clear-icon {
  @apply w-4 h-4;
}

/* 错误信息 */
.h-input-error {
  @apply text-xs mt-1;
}

.h-input-error-ark {
  @apply text-ark-red-light;
}
</style> 