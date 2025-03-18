<template>
  <div 
    class="loading-animation-container" 
    :class="[`theme-${theme}`, size]"
    :style="{ width: `${parseInt(size)}px`, height: `${parseInt(size)}px` }"
  >
    <div v-if="variant === 'default'" class="loading-spinner">
      <div class="spinner-ring"></div>
      <div class="spinner-core"></div>
    </div>

    <div v-else-if="variant === 'dots'" class="loading-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

    <div v-else-if="variant === 'pulse'" class="loading-pulse">
      <div class="pulse-circle"></div>
      <div class="pulse-circle"></div>
      <div class="pulse-circle"></div>
    </div>

    <div v-else-if="variant === 'holographic'" class="loading-holographic">
      <div class="holo-layer"></div>
      <div class="holo-layer"></div>
      <div class="holo-layer"></div>
      <div class="holo-core"></div>
    </div>

    <div v-else-if="variant === 'bars'" class="loading-bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div v-else-if="variant === 'text'" class="loading-text">
      <span>{{ text || 'Loading' }}</span>
      <span class="dots">
        <span class="dot">.</span>
        <span class="dot">.</span>
        <span class="dot">.</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  /**
   * 主题样式
   */
  theme: {
    type: String,
    default: 'ark',
    validator: (value: string) => ['ark'].includes(value)
  },
  /**
   * 加载动画变体
   */
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'dots', 'pulse', 'holographic', 'bars', 'text'].includes(value)
  },
  /**
   * 尺寸
   */
  size: {
    type: String,
    default: '48'
  },
  /**
   * 文本型加载显示的文字
   */
  text: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.loading-animation-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

/* 主题样式 */
.theme-ark {
  --primary-color: #4dabf7;
  --secondary-color: #228be6;
  --tertiary-color: #1971c2;
  --text-color: #edf0f2;
}

/* 默认旋转加载 */
.loading-spinner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: var(--primary-color);
  border-right-color: var(--secondary-color);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

.spinner-core {
  width: 30%;
  height: 30%;
  background-color: var(--tertiary-color);
  border-radius: 50%;
  opacity: 0.7;
  animation: pulse 1.2s ease-in-out infinite;
}

/* 点加载 */
.loading-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.loading-dots .dot {
  width: 25%;
  height: 25%;
  background-color: var(--primary-color);
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite;
}

.loading-dots .dot:nth-child(2) {
  animation-delay: 0.2s;
  background-color: var(--secondary-color);
}

.loading-dots .dot:nth-child(3) {
  animation-delay: 0.4s;
  background-color: var(--tertiary-color);
}

/* 脉冲加载 */
.loading-pulse {
  position: relative;
  width: 100%;
  height: 100%;
}

.pulse-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--primary-color);
  opacity: 0.6;
  animation: pulse-out 2s ease-out infinite;
}

.pulse-circle:nth-child(2) {
  animation-delay: 0.5s;
}

.pulse-circle:nth-child(3) {
  animation-delay: 1s;
}

/* 全息加载 */
.loading-holographic {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.holo-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  opacity: 0.5;
  animation: holo-rotate 3s linear infinite;
}

.holo-layer:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-color: var(--secondary-color);
  animation-duration: 2.5s;
  animation-direction: reverse;
}

.holo-layer:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-color: var(--tertiary-color);
  animation-duration: 2s;
}

.holo-core {
  position: absolute;
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
  background-color: var(--primary-color);
  border-radius: 50%;
  opacity: 0.8;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 0 20px var(--primary-color);
}

/* 条形加载 */
.loading-bars {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 100%;
  height: 100%;
}

.bar {
  width: 15%;
  height: 60%;
  background-color: var(--primary-color);
  animation: bar-scale 1.2s ease-in-out infinite;
}

.bar:nth-child(2) {
  animation-delay: 0.1s;
  background-color: var(--secondary-color);
}

.bar:nth-child(3) {
  animation-delay: 0.2s;
  background-color: var(--tertiary-color);
}

.bar:nth-child(4) {
  animation-delay: 0.3s;
  background-color: var(--primary-color);
}

/* 文字加载 */
.loading-text {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  font-size: calc(var(--size, 48px) * 0.2);
  font-family: monospace;
  white-space: nowrap;
}

.loading-text .dots {
  display: inline-flex;
  overflow: hidden;
}

.loading-text .dot {
  opacity: 0;
  animation: text-dot 1.4s linear infinite;
}

.loading-text .dot:nth-child(1) {
  animation-delay: 0.2s;
}

.loading-text .dot:nth-child(2) {
  animation-delay: 0.4s;
}

.loading-text .dot:nth-child(3) {
  animation-delay: 0.6s;
}

/* 尺寸变化 */
.loading-animation-container.small {
  font-size: 0.85rem;
}

.loading-animation-container.large {
  font-size: 1.25rem;
}

/* 动画效果 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes pulse-out {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes holo-rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

@keyframes bar-scale {
  0%, 100% {
    transform: scaleY(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes text-dot {
  0%, 20% {
    opacity: 0;
  }
  50%, 100% {
    opacity: 1;
  }
}
</style> 