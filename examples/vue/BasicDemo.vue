<template>
  <div class="min-h-screen bg-gray-950 text-white">
    <!-- 侧边导航 -->
    <SideNav.default 
      :groups="navGroups" 
      :active-component="activeComponent"
      @select="setActiveComponent"
    />
    
    <!-- 顶部工具栏 -->
    <TopBar.default 
      :title="componentTitle" 
      :version="version"
      :current-theme="currentTheme"
      :themes="themes"
      @theme-change="setTheme"
    />
    
    <!-- 主内容区 -->
    <div class="pl-64 pt-14 p-5">
      <!-- 背景全息动画 -->
      <div class="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-10">
        <div v-for="i in 5" :key="i" class="absolute rounded-full bg-blue-500 blur-3xl"
          :style="{
            width: `${Math.random() * 30 + 10}rem`,
            height: `${Math.random() * 30 + 10}rem`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`
          }"
        ></div>
      </div>
      
      <LoadingAnimation v-if="loading" />
      
      <div v-else class="relative z-10 max-w-7xl mx-auto space-y-8">
        <!-- 按钮展示 -->
        <ButtonPanel.default 
          v-if="['button', 'icon-button', 'menu-button', 'split-button'].includes(activeComponent)"
          :current-theme="currentTheme" 
          :active-component="activeComponent" 
        />
        
        <!-- 输入框展示 -->
        <InputPanel.default 
          v-if="activeComponent === 'input'" 
          :current-theme="currentTheme" 
        />
        
        <!-- 开关组件展示 -->
        <SwitchPanel.default
          v-if="activeComponent === 'switch'"
          :current-theme="currentTheme"
        />
        
        <!-- 布局组件展示 -->
        <LayoutPanel.default
          v-if="isLayoutComponent"
          :current-theme="currentTheme"
          :active-component="layoutComponent"
        />
        
        <!-- 视觉组件展示 -->
        <VisualPanel.default
          v-if="isVisualComponent"
          :current-theme="currentTheme"
          :active-component="visualComponent"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, createApp, computed } from 'vue';
import { 
  Button, 
  Card, 
  Container, 
  Divider, 
  ColorTag, 
  MessageToast,
  Input,
  Switch,
  Grid,
  HolographicNfcAnimation,
  TerminalOutput,
  LoadingAnimation
} from '../../src/index';

// 组件
import * as SideNav from './components/SideNav.vue';
import * as TopBar from './components/TopBar.vue';
import * as ButtonPanel from './components/panels/ButtonPanel.vue';
import * as InputPanel from './components/panels/InputPanel.vue';
import * as SwitchPanel from './components/panels/SwitchPanel.vue';
import * as LayoutPanel from './components/panels/LayoutPanel.vue';
import * as VisualPanel from './components/panels/VisualPanel.vue';

type ThemeName = 'ark';
type LayoutComponentName = 'divider' | 'card' | 'container' | 'grid';
type VisualComponentName = 'holographic-animation' | 'color-tag' | 'terminal-output' | 'loading-animation' | 'loading-screen';
type ButtonComponentName = 'button' | 'icon-button' | 'menu-button' | 'split-button';
type ComponentName = LayoutComponentName | VisualComponentName | ButtonComponentName | 'input' | 'switch';

// 基础数据
const version = ref('0.1.0');
const themes = ['ark'];
const currentTheme = ref<ThemeName>('ark');
const loading = ref(true);

// 活动组件
const activeComponent = ref<ComponentName>('button');

// 确定当前活动组件的类型
const isLayoutComponent = computed(() => 
  ['divider', 'card', 'container', 'grid'].includes(activeComponent.value as string)
);

const isVisualComponent = computed(() => 
  ['holographic-animation', 'color-tag', 'terminal-output', 'loading-animation'].includes(activeComponent.value as string)
);

// 获取正确类型的布局组件名称
const layoutComponent = computed((): LayoutComponentName => {
  if (isLayoutComponent.value) {
    return activeComponent.value as LayoutComponentName;
  }
  return 'divider'; // 默认值
});

// 获取正确类型的视觉组件名称
const visualComponent = computed((): VisualComponentName => {
  if (isVisualComponent.value) {
    return activeComponent.value as VisualComponentName;
  }
  return 'holographic-animation'; // 默认值
});

// 计算组件标题
const componentTitle = computed(() => {
  const componentName = navGroups.value
    .flatMap(group => group.items)
    .find(item => item.name === activeComponent.value)?.label || '组件演示';
  
  return `${componentName}`;
});

// 导航数据
const navGroups = ref([
  {
    title: '通用',
    items: [
      { name: 'button', label: 'Button 按钮', version: '5.21.0' },
      { name: 'input', label: 'Input 输入框', version: '5.17.0' },
      { name: 'switch', label: 'Switch 开关', version: '5.0.0' }
    ]
  },
  {
    title: '布局',
    items: [
      { name: 'divider', label: 'Divider 分割线', version: '5.0.0' },
      { name: 'grid', label: 'Grid 网格', version: '5.10.0' },
      { name: 'card', label: 'Card 卡片', version: '5.0.0' },
      { name: 'container', label: 'Container 容器', version: '5.0.0' }
    ]
  },
  {
    title: '视觉',
    items: [
      { name: 'color-tag', label: 'ColorTag 标签', version: '5.0.0' },
      { name: 'loading-animation', label: 'LoadingAnimation 加载', version: '5.0.0' },
      { name: 'holographic-animation', label: 'HolographicNfcAnimation 全息', version: '5.0.0' },
      { name: 'terminal-output', label: 'TerminalOutput 终端', version: '5.0.0' }
    ]
  }
]);

// 终端演示数据
const terminalLines = ref([
  '> holographic init',
  'Initializing Holographic component library...',
  'Scanning components...',
  'Loading themes: ark, hacker, neon',
  'Setting up development environment...',
  'Installing dependencies...',
  'Compiling styles...',
  'Building components...',
  'Holographic components ready!',
  '> _'
]);

// 设置活动组件
function setActiveComponent(component: string) {
  activeComponent.value = component as ComponentName;
}

// 设置主题
function setTheme(theme: string) {
  currentTheme.value = theme as ThemeName;
}

// 消息提示
function showMessage(message: string) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  
  const app = createApp(MessageToast, {
    message,
    theme: currentTheme.value,
    type: 'success',
    duration: 3000,
    onClose: () => {
      setTimeout(() => {
        document.body.removeChild(div);
      }, 300);
    }
  });
  
  app.mount(div);
}

// 模拟加载
onMounted(() => {
  loading.value = true;
  
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style>
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-50px) scale(1.05);
  }
}

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
</style> 