<template>
  <div 
    class="info-panel"
    :class="[
      `type-${type}`,
      { 'has-icon': showIcon }
    ]"
  >
    <div v-if="showIcon" class="info-panel-icon">
      <div v-if="type === 'info'" class="icon info-icon">i</div>
      <div v-else-if="type === 'warning'" class="icon warning-icon">!</div>
      <div v-else-if="type === 'success'" class="icon success-icon">✓</div>
      <div v-else-if="type === 'error'" class="icon error-icon">×</div>
      <div v-else-if="type === 'code'" class="icon code-icon">&lt;/&gt;</div>
      <div v-else class="icon">?</div>
    </div>
    
    <div class="info-panel-content">
      <div v-if="title" class="info-panel-title">{{ title }}</div>
      <div class="info-panel-body">
        <slot></slot>
      </div>
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
   * 面板类型
   */
  type: {
    type: String,
    default: 'info',
    validator: (value: string) => ['info', 'warning', 'success', 'error', 'code', 'default'].includes(value)
  },
  /**
   * 是否显示图标
   */
  showIcon: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.info-panel {
  @apply rounded-ark overflow-hidden mb-4 p-4 bg-opacity-20;
  position: relative;
  border-left: 4px solid;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
}

.info-panel-icon {
  @apply flex-shrink-0 mr-3;
}

.info-panel-content {
  @apply flex-grow;
}

.info-panel-title {
  @apply text-base font-medium mb-1;
}

.info-panel-body {
  @apply text-sm;
}

.icon {
  @apply w-6 h-6 flex items-center justify-center rounded-full;
  font-weight: bold;
}

/* 类型样式 */
.type-info {
  @apply bg-ark-bg border-ark-accent;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.1);
}

.type-info .info-panel-title {
  @apply text-ark-accent;
}

.type-info .info-icon {
  @apply bg-ark-accent text-white;
}

.type-warning {
  @apply bg-ark-bg border-ark-yellow;
  box-shadow: 0 0 10px rgba(242, 204, 96, 0.1);
}

.type-warning .info-panel-title {
  @apply text-ark-yellow;
}

.type-warning .warning-icon {
  @apply bg-ark-yellow text-ark-bg;
}

.type-success {
  @apply bg-ark-bg border-ark-green;
  box-shadow: 0 0 10px rgba(46, 160, 67, 0.1);
}

.type-success .info-panel-title {
  @apply text-ark-green;
}

.type-success .success-icon {
  @apply bg-ark-green text-white;
}

.type-error {
  @apply bg-ark-bg border-ark-red;
  box-shadow: 0 0 10px rgba(248, 81, 73, 0.1);
}

.type-error .info-panel-title {
  @apply text-ark-red;
}

.type-error .error-icon {
  @apply bg-ark-red text-white;
}

.type-code {
  @apply bg-ark-bg border-ark-purple;
  box-shadow: 0 0 10px rgba(137, 87, 229, 0.1);
  font-family: monospace;
}

.type-code .info-panel-title {
  @apply text-ark-purple;
}

.type-code .code-icon {
  @apply bg-ark-purple text-white text-xs;
}

.type-default {
  @apply bg-ark-bg border-ark-border;
}

/* 透明度动画 */
.info-panel {
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(56, 189, 248, 0.1);
  }
  100% {
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
  }
}
</style> 