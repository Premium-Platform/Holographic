<template>
  <button
    :class="[
      'h-button',
      `h-button-${variant}`,
      `h-button-${size}`,
      block && 'h-button-block',
      disabled && 'h-button-disabled',
      loading && 'h-button-loading',
      holographic && 'h-button-holographic',
      animated && 'h-button-animated',
      glitch && 'h-button-glitch',
      outline && 'h-button-outline',
      isHighlighted && 'h-button-highlighted',
      customClass,
    ]"
    :type="htmlType"
    :disabled="disabled || loading"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="loading" class="h-button-loading-indicator">
      <span class="indicator-dot"></span>
      <span class="indicator-dot"></span>
      <span class="indicator-dot"></span>
    </span>
    <component :is="icon" v-else-if="icon" class="mr-2 h-4 w-4" />
    <slot>{{ text }}</slot>
    
    <!-- 全息覆盖层 -->
    <span v-if="holographic" class="h-button-holo-overlay"></span>
    
    <!-- 扫描线效果 -->
    <span v-if="holographic" class="h-button-scan-line"></span>
    
    <!-- 边框发光效果 -->
    <span v-if="holographic" class="h-button-edge-glow"></span>
  </button>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { ref, computed } from 'vue';

export interface ButtonProps {
  /**
   * 按钮文本
   */
  text?: string;
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 按钮变体
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon' | 'cyber' | 'dark' | 'warning' | 'danger' | 'success';
  /**
   * 按钮主题
   */
  theme?: 'ark';
  /**
   * 按钮图标
   */
  icon?: Component;
  /**
   * 是否为块级按钮
   */
  block?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否加载中
   */
  loading?: boolean;
  /**
   * 按钮HTML类型
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * 自定义CSS类
   */
  customClass?: string;
  /**
   * 全息效果
   */
  holographic?: boolean;
  /**
   * 动画效果
   */
  animated?: boolean;
  /**
   * 故障效果
   */
  glitch?: boolean;
  /**
   * 轮廓按钮
   */
  outline?: boolean;
  /**
   * 高亮状态
   */
  highlighted?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  text: '',
  variant: 'primary',
  size: 'medium',
  theme: 'ark',
  disabled: false,
  loading: false,
  block: false,
  customClass: '',
  htmlType: 'button',
  holographic: false,
  animated: false,
  glitch: false,
  outline: false,
  highlighted: false
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

// 跟踪悬停状态
const isHovered = ref(false);
// 计算高亮状态
const isHighlighted = computed(() => props.highlighted || isHovered.value);

// 处理鼠标悬停事件
const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
.h-button {
  @apply inline-flex items-center justify-center relative overflow-hidden;
  @apply transition-all duration-300 ease-in-out;
  @apply select-none rounded-md;
}

/* 大小变体 */
.h-button-small {
  @apply px-3 py-1 text-sm;
}

.h-button-medium {
  @apply px-4 py-2;
}

.h-button-large {
  @apply px-6 py-3 text-lg;
}

/* 块级按钮 */
.h-button-block {
  @apply w-full;
}

/* 主题变体 - 全息高科技 */
.h-button-primary {
  @apply bg-transparent text-holo-blue;
  border: 1px solid rgba(0, 194, 255, 0.6);
  background: rgba(0, 30, 60, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(0, 194, 255, 0.2), inset 0 0 5px rgba(0, 194, 255, 0.1);
}

.h-button-primary:hover {
  border-color: rgba(0, 194, 255, 0.8);
  background: rgba(0, 50, 90, 0.4);
  box-shadow: 0 0 15px rgba(0, 194, 255, 0.4), inset 0 0 10px rgba(0, 194, 255, 0.2);
}

.h-button-secondary {
  @apply bg-transparent text-gray-100;
  border: 1px solid rgba(180, 180, 180, 0.3);
  background: rgba(40, 40, 45, 0.3);
  backdrop-filter: blur(5px);
}

.h-button-secondary:hover {
  border-color: rgba(180, 180, 180, 0.5);
  background: rgba(50, 50, 55, 0.4);
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.1);
}

.h-button-warning {
  @apply bg-transparent text-yellow-300;
  border: 1px solid rgba(251, 191, 36, 0.6);
  background: rgba(60, 50, 0, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.2), inset 0 0 5px rgba(251, 191, 36, 0.1);
}

.h-button-warning:hover {
  border-color: rgba(251, 191, 36, 0.8);
  background: rgba(70, 60, 0, 0.4);
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.4), inset 0 0 10px rgba(251, 191, 36, 0.2);
}

.h-button-danger {
  @apply bg-transparent text-red-400;
  border: 1px solid rgba(220, 38, 38, 0.6);
  background: rgba(60, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(220, 38, 38, 0.2), inset 0 0 5px rgba(220, 38, 38, 0.1);
}

.h-button-danger:hover {
  border-color: rgba(220, 38, 38, 0.8);
  background: rgba(70, 0, 0, 0.4);
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.4), inset 0 0 10px rgba(220, 38, 38, 0.2);
}

.h-button-success {
  @apply bg-transparent text-green-400;
  border: 1px solid rgba(34, 197, 94, 0.6);
  background: rgba(0, 60, 30, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.2), inset 0 0 5px rgba(34, 197, 94, 0.1);
}

.h-button-success:hover {
  border-color: rgba(34, 197, 94, 0.8);
  background: rgba(0, 70, 40, 0.4);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.4), inset 0 0 10px rgba(34, 197, 94, 0.2);
}

.h-button-ghost {
  @apply bg-transparent text-gray-300;
  border: 1px solid rgba(100, 100, 100, 0.2);
}

.h-button-ghost:hover {
  background: rgba(80, 80, 85, 0.15);
  border-color: rgba(120, 120, 130, 0.3);
}

.h-button-neon {
  @apply bg-transparent text-holo-blue border-0;
  box-shadow: 0 0 10px theme('colors.holo.blue'), inset 0 0 5px theme('colors.holo.blue');
  text-shadow: 0 0 5px theme('colors.holo.blue');
  border: 1px solid rgba(0, 194, 255, 0.8);
}

.h-button-neon:hover {
  box-shadow: 0 0 20px theme('colors.holo.blue'), inset 0 0 10px theme('colors.holo.blue');
  text-shadow: 0 0 8px theme('colors.holo.blue');
}

.h-button-cyber {
  @apply text-white border-0;
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.2), rgba(181, 126, 255, 0.2));
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
  backdrop-filter: blur(5px);
}

.h-button-cyber:hover {
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.3), rgba(181, 126, 255, 0.3));
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
}

.h-button-dark {
  @apply text-holo-blue;
  background: rgba(20, 20, 30, 0.6);
  border: 1px solid rgba(0, 194, 255, 0.3);
  box-shadow: 0 0 5px rgba(0, 194, 255, 0.2);
  backdrop-filter: blur(5px);
}

.h-button-dark:hover {
  border-color: rgba(0, 194, 255, 0.6);
  box-shadow: 0 0 15px rgba(0, 194, 255, 0.3);
}

/* 轮廓按钮 */
.h-button-outline {
  @apply bg-transparent border-2;
  border-image: linear-gradient(45deg, theme('colors.holo.blue'), theme('colors.holo.purple')) 1;
}

.h-button-outline:hover {
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.1), rgba(181, 126, 255, 0.1));
}

/* 禁用状态 */
.h-button-disabled {
  @apply opacity-50 cursor-not-allowed;
}

/* 加载指示器 */
.h-button-loading-indicator {
  @apply flex items-center space-x-1 mr-2;
}

.indicator-dot {
  @apply w-1.5 h-1.5 rounded-full bg-current;
  animation: button-loading 1.4s infinite ease-in-out both;
}

.indicator-dot:nth-child(2) {
  animation-delay: 0.16s;
}

.indicator-dot:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes button-loading {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

/* 全息风格 */
.h-button-holographic {
  @apply relative overflow-hidden bg-transparent;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 194, 255, 0.4);
  background: rgba(0, 30, 60, 0.2);
  backdrop-filter: blur(8px);
  box-shadow: 0 0 10px rgba(0, 194, 255, 0.2), inset 0 0 5px rgba(0, 194, 255, 0.1);
}

.h-button-holographic::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.15), rgba(181, 126, 255, 0.15));
  mix-blend-mode: screen;
  pointer-events: none;
}

/* 全息变体样式 - 覆盖之前的样式 */
.h-button-primary.h-button-holographic,
.h-button-secondary.h-button-holographic,
.h-button-ghost.h-button-holographic,
.h-button-dark.h-button-holographic,
.h-button-cyber.h-button-holographic,
.h-button-neon.h-button-holographic,
.h-button-warning.h-button-holographic,
.h-button-danger.h-button-holographic,
.h-button-success.h-button-holographic {
  background: rgba(0, 20, 40, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 194, 255, 0.4);
  box-shadow: 0 0 15px rgba(0, 194, 255, 0.3), inset 0 0 8px rgba(0, 194, 255, 0.1);
  color: rgba(0, 194, 255, 0.9);
  text-shadow: 0 0 5px rgba(0, 194, 255, 0.5);
}

/* 霓虹按钮全息风格 */
.h-button-neon.h-button-holographic {
  border: 1px solid rgba(0, 194, 255, 0.7);
  box-shadow: 0 0 20px rgba(0, 194, 255, 0.4), inset 0 0 10px rgba(0, 194, 255, 0.2);
  text-shadow: 0 0 8px rgba(0, 194, 255, 0.7);
}

.h-button-neon.h-button-holographic:hover {
  box-shadow: 0 0 25px rgba(0, 194, 255, 0.6), inset 0 0 15px rgba(0, 194, 255, 0.3);
  text-shadow: 0 0 12px rgba(0, 194, 255, 0.9);
}

/* 赛博按钮全息风格 */
.h-button-cyber.h-button-holographic {
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.15), rgba(181, 126, 255, 0.15));
  border: 1px solid rgba(120, 160, 255, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.h-button-cyber.h-button-holographic:hover {
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.25), rgba(181, 126, 255, 0.25));
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.4), inset 0 0 15px rgba(56, 189, 248, 0.2);
}

/* 全息覆盖层 */
.h-button-holo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(225deg, rgba(255, 255, 255, 0.2), transparent 50%);
  mix-blend-mode: overlay;
  pointer-events: none;
}

/* 扫描线效果 */
.h-button-scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(0, 194, 255, 0.5), 
    rgba(181, 126, 255, 0.5), 
    transparent
  );
  top: 50%;
  transform: translateY(-50%);
  animation: scan-horizontal 3s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.6;
}

/* 边缘发光效果 */
.h-button-edge-glow {
  position: absolute;
  inset: -1px;
  background: transparent;
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, 
    rgba(0, 194, 255, 0.6), 
    rgba(181, 126, 255, 0.6), 
    rgba(0, 194, 255, 0.6)
  ) 1;
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

/* 动画按钮 */
.h-button-animated {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.h-button-animated:hover {
  transform: translateY(-2px);
}

.h-button-animated:active {
  transform: translateY(1px) scale(0.98);
}

/* 故障效果 */
.h-button-glitch {
  position: relative;
}

.h-button-glitch:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 194, 255, 0.2);
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.15s;
  z-index: 1;
  pointer-events: none;
}

.h-button-glitch:hover::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(181, 126, 255, 0.2);
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
  animation-delay: 0.05s;
  z-index: 1;
  pointer-events: none;
}

/* 高亮状态 */
.h-button-highlighted {
  animation: pulse-subtle 2s infinite ease-in-out;
}

/* 动画定义 */
@keyframes scan-horizontal {
  0%, 100% { transform: translateY(-50%) translateX(-100%); }
  50% { transform: translateY(-50%) translateX(100%); }
}

@keyframes scan-vertical {
  0%, 100% { transform: translateY(-100%); }
  50% { transform: translateY(100%); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes glitch {
  0% { clip-path: inset(40% 0 61% 0); transform: translate(-4px, 0); }
  20% { clip-path: inset(92% 0 1% 0); transform: translate(4px, 0); }
  40% { clip-path: inset(43% 0 1% 0); transform: translate(-4px, 0); }
  60% { clip-path: inset(25% 0 58% 0); transform: translate(6px, 0); }
  80% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, 0); }
  100% { clip-path: inset(58% 0 43% 0); transform: translate(0, 0); }
}

@keyframes pulse-subtle {
  0%, 100% { box-shadow: 0 0 5px rgba(0, 194, 255, 0.4); }
  50% { box-shadow: 0 0 15px rgba(0, 194, 255, 0.7); }
}

/* 全息警告按钮 */
.h-button-warning.h-button-holographic {
  border: 1px solid rgba(251, 191, 36, 0.7);
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.3), inset 0 0 8px rgba(251, 191, 36, 0.1);
  color: rgba(251, 191, 36, 0.9);
  text-shadow: 0 0 5px rgba(251, 191, 36, 0.5);
}

.h-button-warning.h-button-holographic:hover {
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5), inset 0 0 12px rgba(251, 191, 36, 0.2);
  text-shadow: 0 0 8px rgba(251, 191, 36, 0.7);
}

/* 全息危险按钮 */
.h-button-danger.h-button-holographic {
  border: 1px solid rgba(220, 38, 38, 0.7);
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.3), inset 0 0 8px rgba(220, 38, 38, 0.1);
  color: rgba(220, 38, 38, 0.9);
  text-shadow: 0 0 5px rgba(220, 38, 38, 0.5);
}

.h-button-danger.h-button-holographic:hover {
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.5), inset 0 0 12px rgba(220, 38, 38, 0.2);
  text-shadow: 0 0 8px rgba(220, 38, 38, 0.7);
}

/* 全息成功按钮 */
.h-button-success.h-button-holographic {
  border: 1px solid rgba(34, 197, 94, 0.7);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.3), inset 0 0 8px rgba(34, 197, 94, 0.1);
  color: rgba(34, 197, 94, 0.9);
  text-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
}

.h-button-success.h-button-holographic:hover {
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.5), inset 0 0 12px rgba(34, 197, 94, 0.2);
  text-shadow: 0 0 8px rgba(34, 197, 94, 0.7);
}
</style> 