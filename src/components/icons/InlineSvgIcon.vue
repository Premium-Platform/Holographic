<template>
  <span class="h-inline-svg-icon" :style="{ width: `${size}px`, height: `${size}px` }">
    <!-- 芯片图标 -->
    <svg v-if="name === 'chip'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="2" x2="9" y2="4"></line>
      <line x1="15" y1="2" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="22"></line>
      <line x1="15" y1="20" x2="15" y2="22"></line>
      <line x1="20" y1="9" x2="22" y2="9"></line>
      <line x1="20" y1="14" x2="22" y2="14"></line>
      <line x1="2" y1="9" x2="4" y2="9"></line>
      <line x1="2" y1="14" x2="4" y2="14"></line>
    </svg>

    <!-- 电路图标 -->
    <svg v-else-if="name === 'circuit'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6,12 8,12 10,10 12,14 14,10 16,14 18,12 20,12"></polyline>
      <circle cx="4" cy="12" r="2"></circle>
      <circle cx="20" cy="12" r="2"></circle>
      <line x1="2" y1="12" x2="2" y2="12"></line>
      <line x1="22" y1="12" x2="22" y2="12"></line>
      <path d="M4,6 L4,3 L20,3 L20,6"></path>
      <path d="M4,18 L4,21 L20,21 L20,18"></path>
    </svg>

    <!-- 服务器图标 -->
    <svg v-else-if="name === 'server'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6" y2="6"></line>
      <line x1="6" y1="18" x2="6" y2="18"></line>
      <rect x="10" y="6" width="8" height="1"></rect>
      <rect x="10" y="18" width="8" height="1"></rect>
    </svg>

    <!-- 其他图标... -->
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps({
  /**
   * 图标名称
   */
  name: {
    type: String,
    required: true
  },
  /**
   * 图标尺寸
   */
  size: {
    type: [String, Number],
    default: 24
  },
  /**
   * 填充颜色
   */
  fill: {
    type: String,
    default: 'none'
  },
  /**
   * 描边颜色
   */
  stroke: {
    type: String,
    default: 'currentColor'
  }
});
</script>

<style scoped>
.h-inline-svg-icon {
  @apply inline-block align-middle;
  color: currentColor;
}
</style> 