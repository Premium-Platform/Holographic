<template>
  <div class="component-panel">
    <div class="component-title">
      <h3>{{ $t('switch.title') }}</h3>
      <span class="component-version">5.0.0</span>
    </div>

    <!-- 基本用法展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('switch.basicUsage') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-8">
          <Switch :theme="currentTheme" />
          <Switch :theme="currentTheme" :model-value="true" />
        </div>
      </div>
    </div>

    <!-- 带标签展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('switch.withLabel') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-8">
          <Switch :theme="currentTheme" :label="$t('switch.switchLabel')" />
          <Switch :theme="currentTheme" :label="$t('switch.enabled')" :model-value="true" />
        </div>
      </div>
      
      <div class="mt-4 preview">
        <div class="flex flex-wrap gap-8">
          <Switch :theme="currentTheme" :label="$t('switch.leftLabel')" label-position="left" />
          <Switch :theme="currentTheme" :label="$t('switch.enabled')" :model-value="true" label-position="left" />
        </div>
      </div>
    </div>

    <!-- 尺寸变体 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('switch.sizes') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-8 items-center">
          <Switch :theme="currentTheme" size="small" :label="$t('switch.small')" />
          <Switch :theme="currentTheme" size="medium" :label="$t('switch.medium')" />
          <Switch :theme="currentTheme" size="large" :label="$t('switch.large')" />
        </div>
      </div>
    </div>

    <!-- 不同状态 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('switch.states') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-8">
          <Switch :theme="currentTheme" disabled :label="$t('switch.disabled')" />
          <Switch :theme="currentTheme" disabled :model-value="true" :label="$t('switch.disabledEnabled')" />
        </div>
      </div>
    </div>

    <!-- 主题变体 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('switch.themes') }}</div>
      <div class="preview">
        <Switch :model-value="true" :label="$t('switch.arkTheme')" />
      </div>
    </div>

    <!-- 全息效果展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('switch.holographicEffect') }}</div>
      <div class="preview">
        <Switch :model-value="true" holographic />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '../../../../src/index';

defineProps<{
  currentTheme: 'ark';
}>();
</script>

<style scoped>
.component-panel {
  @apply bg-gray-900 text-white rounded-lg border border-gray-800 overflow-hidden;
}

.component-title {
  @apply flex justify-between items-center px-6 py-4 border-b border-gray-800;
}

.component-title h3 {
  @apply text-xl font-medium;
}

.component-version {
  @apply text-xs py-0.5 px-1.5 rounded bg-blue-950 text-blue-400;
}

.component-subtitle {
  @apply text-sm font-medium text-gray-300 mb-2;
}

.demo-section {
  @apply px-6 py-4 border-b border-gray-800;
}

.demo-section:last-child {
  @apply border-0;
}

.preview {
  @apply p-4 bg-gray-800 rounded;
}
</style> 