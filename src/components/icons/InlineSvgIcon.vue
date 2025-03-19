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

    <!-- 数据图标 -->
    <svg v-else-if="name === 'data'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 17H3V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v12z"></path>
      <path d="M6 9h.01"></path>
      <path d="M6 12h.01"></path>
      <path d="M6 15h.01"></path>
      <rect x="9" y="8" width="9" height="2"></rect>
      <rect x="9" y="11" width="6" height="2"></rect>
      <rect x="9" y="14" width="8" height="2"></rect>
      <path d="M3 17l2 4h14l2-4"></path>
    </svg>

    <!-- 网络图标 -->
    <svg v-else-if="name === 'network'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="7" y="3" width="4" height="4" rx="1"></rect>
      <rect x="15" y="13" width="4" height="4" rx="1"></rect>
      <rect x="3" y="13" width="4" height="4" rx="1"></rect>
      <rect x="11" y="18" width="4" height="4" rx="1"></rect>
      <path d="M9 7v2c0 1 1 2 2 2h4"></path>
      <path d="M17 13v-2c0-1-1-2-2-2h-2"></path>
      <path d="M13 18v-2c0-1-1-2-2-2H7"></path>
      <path d="M7 17h10"></path>
    </svg>

    <!-- 全息图标 -->
    <svg v-else-if="name === 'hologram'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>

    <!-- 安全图标 -->
    <svg v-else-if="name === 'security'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <!-- 护盾外形 -->
      <path d="M12 22c-1.7-0.5-8-2.8-8-11V5l8-3 8 3v6c0 8.2-6.3 10.5-8 11z"></path>
      <!-- 中心标记 -->
      <path d="M12 8v5"></path>
      <circle cx="12" cy="16" r="1"></circle>
    </svg>

    <!-- 人工智能图标 -->
    <svg v-else-if="name === 'ai'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="8" r="5"></circle>
      <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"></path>
      <path d="M8 11v3"></path>
      <path d="M16 11v3"></path>
      <path d="M12 15v3"></path>
    </svg>

    <!-- 云图标 -->
    <svg v-else-if="name === 'cloud'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size"
      :fill="fill" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      <path d="M13 15l-2 2m0 0l-2-2m2 2v-5"></path>
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
  vertical-align: -0.125em;
  overflow: visible;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 1em;
  min-height: 1em;
}
</style> 