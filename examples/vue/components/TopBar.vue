<template>
  <div class="h-14 border-b border-gray-800 flex items-center justify-between px-4 bg-gray-900 text-white fixed top-0 right-0 left-64 z-10">
    <div class="flex items-center">
      <h2 class="text-lg font-medium">{{ title }}</h2>
      <div class="flex ml-4 space-x-2">
        <Button 
          v-for="theme in themes" 
          :key="theme"
          :variant="currentTheme === theme ? 'primary' : 'ghost'"
          :theme="currentTheme"
          size="small"
          @click="$emit('theme-change', theme)"
        >
          {{ theme.charAt(0).toUpperCase() + theme.slice(1) }}
        </Button>
      </div>
    </div>
    
    <div class="flex items-center space-x-4">
      <div class="flex items-center text-blue-400">
        <span class="text-xs bg-blue-950 px-2 py-1 rounded">v{{ version }}</span>
      </div>
      <div class="flex space-x-2">
        <button class="p-1.5 rounded hover:bg-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button class="p-1.5 rounded hover:bg-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button class="p-1.5 rounded hover:bg-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '../../../src/index';

defineProps<{
  title: string;
  version: string;
  currentTheme: 'ark';
  themes: string[];
}>();

defineEmits<{
  (e: 'theme-change', theme: string): void;
}>();
</script> 