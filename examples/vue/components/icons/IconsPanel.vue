<template>
  <HTechPanel :title="$t('icons.title')" :subtitle="$t('icons.description')" variant="elevated">
    <div class="icon-gallery">
      <div class="icon-item" v-for="icon in icons" :key="icon">
        <div class="icon-preview">
          <SvgIcon :name="icon" :size="32" />
        </div>
        <div class="icon-name">{{ icon }}</div>
      </div>
    </div>
  </HTechPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '../../../../src/components/icons/SvgIcon.vue';

// 图标名称列表
const icons = ref([
  'chip',
  'circuit',
  'server',
  'data',
  'network',
  'hologram',
  'security',
  'ai',
  'cloud'
]);
</script>

<style scoped>
.icon-gallery {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6;
  @apply p-4;
}

.icon-item {
  @apply flex flex-col items-center justify-center;
  @apply p-4 rounded-lg;
  @apply bg-ark-panel bg-opacity-30;
  @apply border border-ark-border/20;
  @apply transition-all duration-300;
  @apply hover:bg-opacity-50 hover:border-ark-accent/30 hover:scale-105;
}

.icon-preview {
  @apply mb-3 p-2 rounded-full;
  @apply bg-ark-panel-light bg-opacity-30;
  @apply flex items-center justify-center;
  @apply w-12 h-12;
  @apply text-ark-accent;
}

.icon-name {
  @apply text-sm text-ark-text opacity-80;
  @apply truncate w-full text-center;
}
</style> 