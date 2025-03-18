<template>
  <div class="component-panel">
    <div class="component-title">
      <h3>{{ $t('input.title') }}</h3>
      <span class="component-version">5.17.0</span>
    </div>

    <!-- 基本用法展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('input.basicUsage') }}</div>
      <div class="preview">
        <div class="space-y-4">
          <Input :theme="currentTheme" :placeholder="$t('input.basicPlaceholder')" />
          <Input :theme="currentTheme" :placeholder="$t('input.labelInput')" :label="$t('input.label')" />
          <Input :theme="currentTheme" :placeholder="$t('input.clearable')" clearable :value="$t('input.clearableContent')" />
        </div>
      </div>
    </div>

    <!-- 不同状态展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('input.states') }}</div>
      <div class="grid grid-cols-2 gap-4">
        <div class="preview">
          <Input :theme="currentTheme" :placeholder="$t('input.disabled')" disabled />
        </div>
        <div class="preview">
          <Input :theme="currentTheme" :placeholder="$t('input.readonly')" readonly :value="$t('input.readonlyContent')" />
        </div>
        <div class="preview">
          <Input :theme="currentTheme" :placeholder="$t('input.error')" :error="$t('input.errorMessage')" />
        </div>
        <div class="preview">
          <Input :theme="currentTheme" :placeholder="$t('input.holographic')" holographic />
        </div>
      </div>
    </div>

    <!-- 尺寸变体 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('input.sizes') }}</div>
      <div class="space-y-4">
        <Input :theme="currentTheme" :placeholder="$t('input.small')" size="small" />
        <Input :theme="currentTheme" :placeholder="$t('input.medium')" size="medium" />
        <Input :theme="currentTheme" :placeholder="$t('input.large')" size="large" />
      </div>
    </div>

    <!-- 全息效果 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('input.holographicEffect') }}</div>
      <div class="preview">
        <Input :theme="currentTheme" :placeholder="$t('input.holographic')" holographic />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Input } from '../../../../src/index';

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