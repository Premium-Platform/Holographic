<template>
  <div 
    class="tech-panel" 
    :class="[
      variant && `tech-panel-${variant}`,
      { 'with-title': title }
    ]"
  >
    <div v-if="title" class="tech-panel-header">
      <div class="tech-panel-title">{{ title }}</div>
      <div v-if="subtitle" class="tech-panel-subtitle">{{ subtitle }}</div>
      <div v-if="version" class="tech-panel-version">v{{ version }}</div>
    </div>
    <div class="tech-panel-body">
      <slot></slot>
    </div>
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
   * 版本号
   */
  version: {
    type: String,
    default: ''
  },
  /**
   * 面板变体
   */
  variant: {
    type: String,
    default: '',
    validator: (value: string) => ['', 'bordered', 'elevated', 'flat'].includes(value)
  }
});
</script>

<style scoped>
.tech-panel {
  @apply bg-ark-panel rounded-ark overflow-hidden transition-colors duration-300;
  position: relative;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.tech-panel::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-holo-blue via-holo-purple to-holo-pink;
  opacity: 0.8;
}

.tech-panel-header {
  @apply px-4 py-3 flex items-center justify-between border-b border-ark-border bg-ark-active;
}

.tech-panel-title {
  @apply text-lg font-medium text-ark-text;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

.tech-panel-subtitle {
  @apply text-sm text-ark-text-secondary ml-2;
}

.tech-panel-version {
  @apply text-xs py-0.5 px-2 bg-ark-bg rounded text-ark-text-muted;
}

.tech-panel-body {
  @apply p-4;
}

/* 变体样式 */
.tech-panel-bordered {
  @apply border border-ark-border;
  box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.2);
}

.tech-panel-elevated {
  @apply shadow-ark-lg;
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.tech-panel-flat {
  @apply bg-transparent border border-ark-border bg-opacity-50;
}

/* 全息效果在hover时 */
.tech-panel:hover {
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
  border-color: rgba(56, 189, 248, 0.4);
}
</style> 