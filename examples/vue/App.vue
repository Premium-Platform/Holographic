<template>
  <div>
    <!-- 加载动画 -->
    <div v-if="isLoading" class="loading-container">
      <LoadingAnimation 
        theme="ark" 
        variant="holographic" 
        size="100%" 
        title="HOLOGRAPHIC" 
        :messages="loadingMessages"
        showProgress
        showDataStream
        :autoProgress="true"
        @complete="onLoadingComplete"
      />
    </div>

    <!-- 主应用 -->
    <div v-else class="app-container">
      <!-- 顶部栏 -->
      <div class="top-bar">
        <div class="logo">
          <h1>Holographic</h1>
          <span>{{ $t('app.title') }}</span>
        </div>
        
        <div class="theme-selector">
          <button 
            v-for="theme in themes" 
            :key="theme.value"
            :class="['theme-btn', { active: currentTheme === theme.value }]"
            @click="setTheme(theme.value)"
          >
            {{ theme.label }}
          </button>
          <span class="version">v0.1.0</span>
          
          <!-- 语言切换 -->
          <select v-model="currentLocale" class="locale-selector" @change="changeLocale">
            <option value="zh-CN">中文</option>
            <option value="en-US">English</option>
          </select>
        </div>
      </div>
      
      <div class="main-content">
        <!-- 侧边导航栏 -->
        <div class="side-nav">
          <div 
            v-for="(group, category) in navGroups" 
            :key="category"
            class="nav-group"
          >
            <div class="group-title">{{ $t(`categories.${category}`) }}</div>
            <router-link 
              v-for="item in group" 
              :key="item.path"
              :to="item.path"
              class="nav-item"
              :class="{ active: $route.path === item.path }"
            >
              <span class="item-label">{{ $t(`components.${item.title}`) }}</span>
              <span class="item-version">{{ item.version }}</span>
            </router-link>
          </div>
        </div>
        
        <!-- 主内容区域 -->
        <div class="content-area">
          <router-view :current-theme="currentTheme" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { LoadingAnimation } from '../../src/index';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const route = useRoute();
const { t, locale } = useI18n();

// 当前语言
const currentLocale = ref(locale.value);

// 切换语言
const changeLocale = () => {
  locale.value = currentLocale.value;
};

// 加载状态
const isLoading = ref(true);

// 加载消息列表
const loadingMessages = [
  'Initializing holographic system...',
  'Loading component modules...',
  'Calibrating visual interface...',
  'Synchronizing holographic projections...',
  'System ready'
];

// 加载完成的处理函数
const onLoadingComplete = () => {
  isLoading.value = false;
};

// 模拟加载过程
onMounted(() => {
  // 让加载动画展示完整进度条
  // 由于我们设置了autoProgress，不需要手动控制进度
});

// 主题设置
const themes = [
  { label: '全息高科技', value: 'ark' as const }
];
const currentTheme = ref<'ark'>('ark');

// 点击按钮时的处理函数
const setTheme = (theme: 'ark') => {
  currentTheme.value = theme;
};

// 导航菜单分组
const navGroups = computed(() => {
  const groups: Record<string, any[]> = {};
  
  router.getRoutes().forEach(route => {
    if (route.meta?.category && route.meta?.title) {
      const category = route.meta.category as string;
      
      if (!groups[category]) {
        groups[category] = [];
      }
      
      groups[category].push({
        path: route.path,
        title: route.meta.title,
        version: route.meta.version
      });
    }
  });
  
  return groups;
});
</script>

<style scoped>
.loading-container {
  @apply fixed inset-0 flex items-center justify-center;
  background-color: #0D1117;
  z-index: 100;
  overflow: hidden;
  min-height: 100vh;
}

/* 主应用样式 */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #0D1117;
  color: #C9D1D9;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 4rem;
  background-color: #161B22;
  border-bottom: 1px solid #21262D;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(to right, #38BDF8, #228be6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo span {
  font-size: 0.875rem;
  opacity: 0.7;
}

.theme-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-btn {
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: #1C2128;
  color: #8B949E;
  border: 1px solid #21262D;
}

.theme-btn.active {
  background-color: #22272E;
  color: #C9D1D9;
  border-color: #38BDF8;
}

.version {
  font-size: 0.75rem;
  color: #6E7681;
  margin-left: 0.5rem;
}

.locale-selector {
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: #161B22;
  color: #C9D1D9;
  border: 1px solid #21262D;
  margin-left: 0.5rem;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.side-nav {
  width: 16rem;
  background-color: #161B22;
  border-right: 1px solid #21262D;
  overflow-y: auto;
  padding: 1rem 0;
}

.nav-group {
  margin-bottom: 1.5rem;
}

.group-title {
  padding: 0 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6E7681;
  margin-bottom: 0.5rem;
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  color: #8B949E;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.nav-item:hover {
  background-color: #1C2128;
  color: #C9D1D9;
}

.nav-item.active {
  background-color: #22272E;
  color: #C9D1D9;
  border-right: 3px solid #38BDF8;
}

.item-version {
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  background-color: #1C2128;
  border-radius: 0.25rem;
  color: #6E7681;
}

.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: #0D1117;
}
</style> 