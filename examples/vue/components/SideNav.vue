<!--
 * @Author: SpenserCai
 * @Date: 2025-03-18 20:54:20
 * @version: 
 * @LastEditors: SpenserCai
 * @LastEditTime: 2025-03-19 13:13:31
 * @Description: file content
-->
<template>
  <div class="side-nav w-64 border-r border-gray-800 h-screen overflow-auto fixed left-0 top-0 bg-gray-900 text-white">
    <div class="p-4 border-b border-gray-800">
      <h1 class="text-xl font-bold">Holographic</h1>
      <p class="text-xs opacity-70">全息风格组件库</p>
    </div>
    
    <div class="p-2">
      <div v-for="(group, idx) in groups" :key="idx" class="mb-4">
        <div class="text-sm text-gray-400 px-3 py-2">{{ group.title }}</div>
        <div class="space-y-1">
          <div 
            v-for="item in group.items" 
            :key="item.name"
            @click="handleSelect(item.name)"
            class="flex justify-between items-center px-3 py-2 rounded cursor-pointer transition-colors"
            :class="{'bg-blue-600': activeComponent === item.name, 'hover:bg-gray-800': activeComponent !== item.name}"
          >
            <div class="flex items-center">
              <span>{{ item.label }}</span>
              <span v-if="item.description" class="text-xs text-gray-500 ml-2">{{ item.description }}</span>
            </div>
            <span v-if="item.version" class="text-xs py-0.5 px-1.5 rounded bg-green-900 text-green-400">{{ item.version }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface NavItem {
  name: string;
  label: string;
  description?: string;
  version?: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

defineProps<{
  activeComponent: string;
  groups: NavGroup[];
}>();

const emit = defineEmits<{
  (e: 'select', component: string): void;
}>();

function handleSelect(componentName: string) {
  emit('select', componentName);
}
</script>

<style scoped>
.side-nav {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.side-nav::-webkit-scrollbar {
  width: 4px;
}

.side-nav::-webkit-scrollbar-track {
  background: transparent;
}

.side-nav::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}
</style> 