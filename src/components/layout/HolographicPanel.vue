<template>
  <div 
    class="holographic-panel"
    :class="[
      `theme-${theme}`,
      { 'with-grid': showGrid }
    ]"
  >
    <div v-if="title" class="holographic-panel-header">
      <div class="holographic-panel-title">{{ title }}</div>
      <div v-if="subtitle" class="holographic-panel-subtitle">{{ subtitle }}</div>
    </div>
    
    <!-- 扫描线效果 -->
    <div class="scan-line"></div>
    
    <!-- 背景网格 -->
    <div v-if="showGrid" class="grid-background"></div>
    
    <div class="holographic-panel-body">
      <slot></slot>
    </div>
    
    <!-- 边角装饰 -->
    <div class="corner-decoration top-left"></div>
    <div class="corner-decoration top-right"></div>
    <div class="corner-decoration bottom-left"></div>
    <div class="corner-decoration bottom-right"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  /**
   * 面板标题
   */
  title: {
    type: String,
    default: ''
  },
  /**
   * 面板子标题
   */
  subtitle: {
    type: String,
    default: ''
  },
  /**
   * 主题
   */
  theme: {
    type: String,
    default: 'ark',
    validator: (value: string) => ['ark'].includes(value)
  },
  /**
   * 是否显示网格背景
   */
  showGrid: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.holographic-panel {
  @apply rounded-lg overflow-hidden transition-all duration-300;
  position: relative;
  background-color: rgba(22, 27, 34, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(56, 189, 248, 0.3);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
}

.theme-ark {
  --primary-color: #38BDF8;
  --secondary-color: #8957E5;
  --tertiary-color: #FF7EF5;
  --text-color: #C9D1D9;
  --background-color: rgba(13, 17, 23, 0.7);
}

.holographic-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, 
    rgba(56, 189, 248, 0.1), 
    rgba(137, 87, 229, 0.1), 
    rgba(255, 126, 245, 0.1), 
    rgba(56, 189, 248, 0.1)
  );
  background-size: 400% 400%;
  animation: holo-shift 8s ease-in-out infinite alternate;
  opacity: 0.6;
  pointer-events: none;
}

.holographic-panel-header {
  @apply px-6 py-4 flex items-center justify-between;
  position: relative;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  background-color: rgba(22, 27, 34, 0.8);
}

.holographic-panel-title {
  @apply text-xl font-medium;
  color: var(--text-color);
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
  letter-spacing: 0.05em;
}

.holographic-panel-subtitle {
  @apply text-sm ml-3;
  color: rgba(201, 209, 217, 0.7);
}

.holographic-panel-body {
  @apply p-6;
  position: relative;
  z-index: 2;
}

/* 扫描线效果 */
.scan-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgba(56, 189, 248, 0.5);
  top: 0;
  left: 0;
  opacity: 0.7;
  animation: scan-line 3s linear infinite;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
  z-index: 1;
}

@keyframes scan-line {
  0% {
    top: 0;
    opacity: 0;
  }
  5% {
    opacity: 0.7;
  }
  95% {
    opacity: 0.7;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

/* 背景网格 */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridMove 20s linear infinite;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}

/* 边角装饰 */
.corner-decoration {
  position: absolute;
  width: 15px;
  height: 15px;
  border-color: var(--primary-color);
  z-index: 3;
}

.top-left {
  top: 0;
  left: 0;
  border-top: 2px solid;
  border-left: 2px solid;
}

.top-right {
  top: 0;
  right: 0;
  border-top: 2px solid;
  border-right: 2px solid;
}

.bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid;
  border-left: 2px solid;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid;
  border-right: 2px solid;
}

/* 全息效果在hover时 */
.holographic-panel:hover {
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.25);
  border-color: rgba(56, 189, 248, 0.5);
}

.holographic-panel:hover .corner-decoration {
  box-shadow: 0 0 5px rgba(56, 189, 248, 0.8);
}
</style> 