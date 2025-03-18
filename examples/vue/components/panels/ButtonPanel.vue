<template>
  <div class="component-panel">
    <div class="component-title">
      <h3>{{ $t('button.title') }}</h3>
      <span class="component-version">5.21.0</span>
    </div>

    <!-- 按钮类型展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.types') }}</div>
      <div class="flex flex-wrap gap-5 mt-4">
        <Button variant="primary">{{ $t('button.primary') }}</Button>
        <Button variant="secondary">{{ $t('button.default') }}</Button>
        <Button variant="ghost" class="border border-dashed">{{ $t('button.dashed') }}</Button>
        <Button variant="ghost">{{ $t('button.text') }}</Button>
        <Button variant="ghost" class="text-blue-400 hover:text-blue-500">{{ $t('button.link') }}</Button>
      </div>
    </div>

    <!-- 按钮变种展示 - 每种主题一行 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.colorVariant') }}</div>
      <div class="space-y-6 mt-4">
        <!-- 默认主题行 -->
        <div class="flex flex-wrap gap-6">
          <Button variant="primary" class="w-20 flex justify-center">{{ $t('button.solid') }}</Button>
          <Button variant="secondary" outline class="w-20 flex justify-center">{{ $t('button.outlined') }}</Button>
          <Button variant="ghost" class="border border-dashed w-20 flex justify-center">{{ $t('button.dashed') }}</Button>
          <Button variant="primary" class="w-20 flex justify-center">{{ $t('button.filled') }}</Button>
          <Button variant="ghost" class="w-20 flex justify-center">{{ $t('button.text') }}</Button>
          <Button variant="ghost" class="text-blue-400 hover:text-blue-500 w-20 flex justify-center">{{ $t('button.link') }}</Button>
        </div>
        
        <!-- 蓝色主题行 -->
        <div class="flex flex-wrap gap-6">
          <Button variant="primary" class="bg-blue-500 hover:bg-blue-600 w-20 flex justify-center">{{ $t('button.solid') }}</Button>
          <Button variant="secondary" outline class="text-blue-400 border-blue-400 w-20 flex justify-center">{{ $t('button.outlined') }}</Button>
          <Button variant="ghost" class="border border-dashed border-blue-400 text-blue-400 w-20 flex justify-center">{{ $t('button.dashed') }}</Button>
          <Button variant="primary" class="bg-blue-500 bg-opacity-20 text-blue-400 w-20 flex justify-center">{{ $t('button.filled') }}</Button>
          <Button variant="ghost" class="text-blue-400 w-20 flex justify-center">{{ $t('button.text') }}</Button>
          <Button variant="ghost" class="text-blue-400 hover:text-blue-500 w-20 flex justify-center">{{ $t('button.link') }}</Button>
        </div>
        
        <!-- 红色主题行 -->
        <div class="flex flex-wrap gap-6">
          <Button variant="primary" class="bg-red-500 hover:bg-red-600 w-20 flex justify-center">{{ $t('button.solid') }}</Button>
          <Button variant="secondary" outline class="text-red-400 border-red-400 w-20 flex justify-center">{{ $t('button.outlined') }}</Button>
          <Button variant="ghost" class="border border-dashed border-red-400 text-red-400 w-20 flex justify-center">{{ $t('button.dashed') }}</Button>
          <Button variant="primary" class="bg-red-500 bg-opacity-20 text-red-400 w-20 flex justify-center">{{ $t('button.filled') }}</Button>
          <Button variant="ghost" class="text-red-400 w-20 flex justify-center">{{ $t('button.text') }}</Button>
          <Button variant="ghost" class="text-red-400 hover:text-red-500 w-20 flex justify-center">{{ $t('button.link') }}</Button>
        </div>
        
        <!-- 粉色主题行 -->
        <div class="flex flex-wrap gap-6">
          <Button variant="primary" class="bg-pink-500 hover:bg-pink-600 w-20 flex justify-center">{{ $t('button.solid') }}</Button>
          <Button variant="secondary" outline class="text-pink-400 border-pink-400 w-20 flex justify-center">{{ $t('button.outlined') }}</Button>
          <Button variant="ghost" class="border border-dashed border-pink-400 text-pink-400 w-20 flex justify-center">{{ $t('button.dashed') }}</Button>
          <Button variant="primary" class="bg-pink-500 bg-opacity-20 text-pink-400 w-20 flex justify-center">{{ $t('button.filled') }}</Button>
          <Button variant="ghost" class="text-pink-400 w-20 flex justify-center">{{ $t('button.text') }}</Button>
          <Button variant="ghost" class="text-pink-400 hover:text-pink-500 w-20 flex justify-center">{{ $t('button.link') }}</Button>
        </div>
        
        <!-- 紫色主题行 -->
        <div class="flex flex-wrap gap-6">
          <Button variant="primary" class="bg-purple-500 hover:bg-purple-600 w-20 flex justify-center">{{ $t('button.solid') }}</Button>
          <Button variant="secondary" outline class="text-purple-400 border-purple-400 w-20 flex justify-center">{{ $t('button.outlined') }}</Button>
          <Button variant="ghost" class="border border-dashed border-purple-400 text-purple-400 w-20 flex justify-center">{{ $t('button.dashed') }}</Button>
          <Button variant="primary" class="bg-purple-500 bg-opacity-20 text-purple-400 w-20 flex justify-center">{{ $t('button.filled') }}</Button>
          <Button variant="ghost" class="text-purple-400 w-20 flex justify-center">{{ $t('button.text') }}</Button>
          <Button variant="ghost" class="text-purple-400 hover:text-purple-500 w-20 flex justify-center">{{ $t('button.link') }}</Button>
        </div>
        
        <!-- 青色主题行 -->
        <div class="flex flex-wrap gap-6">
          <Button variant="primary" class="bg-teal-500 hover:bg-teal-600 w-20 flex justify-center">{{ $t('button.solid') }}</Button>
          <Button variant="secondary" outline class="text-teal-400 border-teal-400 w-20 flex justify-center">{{ $t('button.outlined') }}</Button>
          <Button variant="ghost" class="border border-dashed border-teal-400 text-teal-400 w-20 flex justify-center">{{ $t('button.dashed') }}</Button>
          <Button variant="primary" class="bg-teal-500 bg-opacity-20 text-teal-400 w-20 flex justify-center">{{ $t('button.filled') }}</Button>
          <Button variant="ghost" class="text-teal-400 w-20 flex justify-center">{{ $t('button.text') }}</Button>
          <Button variant="ghost" class="text-teal-400 hover:text-teal-500 w-20 flex justify-center">{{ $t('button.link') }}</Button>
        </div>
      </div>
    </div>

    <!-- 语法糖展示 -->
    <div class="demo-section">
      <div class="component-subtitle">
        <div class="flex items-center">
          <span>{{ $t('button.syntax') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>
      <div class="syntax-block">
        <pre><code>{{ $t('button.syntaxDesc') }}</code></pre>
      </div>
    </div>

    <!-- 按钮图标展示 -->
    <div class="demo-section">
      <div class="component-subtitle">
        <div class="flex items-center">
          <span>{{ $t('button.icon') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>
      <!-- 按钮图标和搜索按钮 -->
      <div class="preview">
        <div class="flex mb-6">
          <div class="flex gap-5">
            <Button class="w-12 h-12 flex items-center justify-center p-0">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </template>
            </Button>
            <Button variant="primary" class="w-12 h-12 flex items-center justify-center p-0">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </template>
            </Button>
            <Button variant="primary" class="px-5">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </template>
              {{ $t('button.search') }}
            </Button>
          </div>
        </div>
        
        <div class="flex">
          <div class="flex gap-5">
            <Button variant="secondary" class="rounded-full w-12 h-12 flex items-center justify-center p-0">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </template>
            </Button>
            <Button variant="primary" class="rounded-full w-12 h-12 flex items-center justify-center p-0">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </template>
            </Button>
            <Button variant="primary" size="large" class="rounded-full flex items-center justify-center px-6">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </template>
              {{ $t('button.download') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 按钮位置展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.iconPosition') }}</div>
      <div class="preview">
        <div class="space-y-5">
          <div class="flex gap-5">
            <Button variant="primary" class="px-4 w-24 flex justify-center">
              start
            </Button>
            <Button variant="secondary" outline class="px-4 w-24 flex justify-center">
              end
            </Button>
          </div>
          
          <div class="component-subtitle">Preview</div>
          
          <div class="flex flex-wrap gap-5">
            <Button class="w-12 h-12 flex items-center justify-center p-0">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </template>
            </Button>
            <Button variant="primary" class="w-12 h-12 flex items-center justify-center p-0">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </template>
            </Button>
            <Button variant="secondary" class="px-5">
              {{ $t('button.search') }}
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </template>
            </Button>
            <Button variant="primary" loading class="px-5">
              {{ $t('button.loading') }}
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- 按钮大小展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.size') }}</div>
      <div class="preview">
        <div class="flex flex-wrap items-center gap-5">
          <Button variant="primary" size="large">{{ $t('button.large') }}</Button>
          <Button variant="primary" size="medium">{{ $t('button.default') }}</Button>
          <Button variant="primary" size="small">{{ $t('button.small') }}</Button>
        </div>
      </div>
    </div>

    <!-- 全息效果展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.holographic') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-5">
          <Button variant="primary" holographic>{{ $t('button.primary') }}</Button>
          <Button variant="neon" holographic>{{ $t('button.neon') }}</Button>
          <Button variant="cyber" holographic>{{ $t('button.cyber') }}</Button>
          <Button variant="dark" holographic>{{ $t('button.dark') }}</Button>
        </div>
      </div>
    </div>
    
    <!-- 高级效果展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.effects') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-5">
          <Button variant="primary" animated>{{ $t('button.animated') }}</Button>
          <Button variant="cyber" glitch>{{ $t('button.glitch') }}</Button>
          <Button variant="dark" outline>{{ $t('button.outline') }}</Button>
          <Button variant="neon" highlighted>{{ $t('button.highlighted') }}</Button>
        </div>
      </div>
    </div>
    
    <!-- 状态展示 -->
    <div class="demo-section">
      <div class="component-subtitle">{{ $t('button.states') }}</div>
      <div class="preview">
        <div class="flex flex-wrap gap-5">
          <Button variant="primary">{{ $t('button.primary') }}</Button>
          <Button variant="primary" disabled>{{ $t('button.disabled') }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Button } from '../../../../src/index';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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

.syntax-block {
  @apply bg-gray-800 rounded p-3 text-gray-300 text-sm;
}

.syntax-block pre {
  @apply font-mono;
}

.preview {
  @apply p-4 bg-gray-800 rounded;
}
</style> 