<template>
  <div 
    :class="[
      'h-card',
      `h-card-${variant}`,
      {
        'h-card-hoverable': hoverable,
        'h-card-holographic': holographic
      },
      customClass
    ]"
    :style="customStyle"
  >
    <!-- 卡片头部 -->
    <div 
      v-if="$slots.header || title" 
      :class="[
        'h-card-header',
        { 'h-card-header-bordered': headerBordered }
      ]"
    >
      <slot name="header">
        <div class="h-card-title">{{ title }}</div>
        <div v-if="subtitle" class="h-card-subtitle">{{ subtitle }}</div>
      </slot>
    </div>
    
    <!-- 卡片封面 -->
    <div v-if="$slots.cover" class="h-card-cover">
      <slot name="cover"></slot>
    </div>
    
    <!-- 卡片内容 -->
    <div class="h-card-body">
      <slot></slot>
    </div>
    
    <!-- 卡片底部 -->
    <div 
      v-if="$slots.footer" 
      :class="[
        'h-card-footer',
        { 'h-card-footer-bordered': footerBordered }
      ]"
    >
      <slot name="footer"></slot>
    </div>
    
    <!-- 全息效果元素 -->
    <template v-if="holographic">
      <div class="h-card-glow"></div>
      <div class="h-card-scan-line"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

export interface CardProps {
  /**
   * 卡片标题
   */
  title?: string;
  /**
   * 卡片副标题
   */
  subtitle?: string;
  /**
   * 卡片变体
   */
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  /**
   * 是否可悬停
   */
  hoverable?: boolean;
  /**
   * 头部是否有边框
   */
  headerBordered?: boolean;
  /**
   * 底部是否有边框
   */
  footerBordered?: boolean;
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

const props = withDefaults(defineProps<CardProps>(), {
  title: undefined,
  subtitle: undefined,
  variant: 'default',
  hoverable: false,
  headerBordered: false,
  footerBordered: false,
  holographic: false,
  customClass: '',
  customStyle: () => ({})
});

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
/* 基础卡片样式 */
.h-card {
  @apply rounded-ark overflow-hidden transition-all duration-300;
  @apply bg-ark-panel text-ark-text border border-ark-border shadow-ark;
}

/* 卡片变体 */
.h-card-outlined {
  @apply bg-transparent;
}

.h-card-elevated {
  @apply shadow-ark-lg;
}

.h-card-filled {
  @apply bg-ark-active;
}

/* 悬停效果 */
.h-card-hoverable:hover {
  @apply transform -translate-y-1;
  @apply shadow-ark-lg border-ark-hover;
}

/* 卡片部分 */
.h-card-header {
  @apply p-4;
}

.h-card-header-bordered {
  @apply border-b border-ark-border;
}

.h-card-title {
  @apply text-lg font-medium;
}

.h-card-subtitle {
  @apply text-sm opacity-70 mt-1;
}

.h-card-body {
  @apply p-4;
}

.h-card-cover img {
  @apply w-full object-cover;
}

.h-card-footer {
  @apply p-4;
}

.h-card-footer-bordered {
  @apply border-t border-ark-border;
}

/* 全息效果 */
.h-card-holographic {
  @apply relative overflow-hidden;
  background: linear-gradient(135deg, 
    rgba(8, 20, 38, 0.6) 0%, 
    rgba(15, 26, 45, 0.6) 100%
  );
  backdrop-filter: blur(5px);
}

.h-card-holographic::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(0, 194, 255, 0.1), rgba(181, 126, 255, 0.1));
  opacity: 0.4;
  z-index: 0;
}

.h-card-glow {
  @apply absolute inset-0 opacity-0;
  background: radial-gradient(circle, rgba(0, 194, 255, 0.2) 0%, transparent 70%);
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.h-card-holographic:hover .h-card-glow {
  @apply opacity-100;
}

.h-card-scan-line {
  @apply absolute top-0 left-0 w-full h-px bg-holo-blue/20;
  animation: card-scan 3s linear infinite;
  pointer-events: none;
  box-shadow: 0 0 5px rgba(0, 194, 255, 0.5);
}

@keyframes card-scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
</style> 