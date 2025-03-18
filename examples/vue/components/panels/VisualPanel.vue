<template>
  <div class="component-panel">
    <div class="component-title">
      <h3>视觉组件</h3>
      <span class="component-version">5.0.0</span>
    </div>

    <!-- 全息动画组件 -->
    <div class="demo-section" v-if="activeComponent === 'holographic-animation'">
      <div class="component-subtitle">全息动画组件</div>
      
      <div class="grid grid-cols-1 md:grid-cols-1 gap-8 p-8">
        <div class="flex flex-col items-center">
          <HolographicNfcAnimation />
          <span class="mt-4">NFC 全息可视化</span>
        </div>
      </div>
    </div>

    <!-- 颜色标签组件 -->
    <div class="demo-section" v-if="activeComponent === 'color-tag'">
      <div class="component-subtitle">颜色标签组件</div>
      
      <div class="space-y-6">
        <div>
          <div class="component-subtitle">颜色变化</div>
          <div class="flex flex-wrap gap-4 mt-4">
            <ColorTag 
              v-for="i in 10" 
              :key="i"
              :text="`标签 ${i}`"
              :color-index="i-1"
              :theme="currentTheme"
            />
          </div>
        </div>
        
        <div>
          <div class="component-subtitle">主题效果</div>
          <div class="space-y-4 mt-4">
            <div class="flex flex-wrap gap-4">
              <ColorTag 
                v-for="i in 5" 
                :key="i"
                :text="`全息标签 ${i}`"
                :color-index="i-1"
              />
            </div>
          </div>
        </div>
        
        <div>
          <div class="component-subtitle">交互功能</div>
          <div class="mt-4">
            <ColorTag 
              text="点击我"
              :theme="currentTheme"
              @click="showToast('标签被点击了！')"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 终端输出组件 -->
    <div class="demo-section" v-if="activeComponent === 'terminal-output'">
      <div class="component-subtitle">终端输出组件</div>
      
      <div class="space-y-6">
        <div>
          <TerminalOutput :theme="currentTheme" :lines="terminalLines" />
        </div>
      </div>
    </div>

    <!-- 加载屏幕组件 -->
    <div class="demo-section" v-if="activeComponent === 'loading-screen'">
      <div class="component-subtitle">QUANTUM HOLOGRAM SYSTEM</div>
      
      <div class="flex flex-col md:flex-row gap-6 p-4">
        <!-- 控制面板 -->
        <div class="control-panel">
          <!-- 主题选择 -->
          <div class="control-section">
            <h3>主题选择</h3>
            <div class="theme-selector">
              <button 
                v-for="theme in themes" 
                :key="theme.value"
                class="theme-button" 
                :class="{ active: currentLoadingTheme === theme.value }"
                @click="currentLoadingTheme = theme.value"
              >
                <div class="theme-color" :class="`theme-${theme.value}`"></div>
                <span>{{ theme.label }}</span>
              </button>
            </div>
          </div>
          
          <!-- 加载控制 -->
          <div class="control-section">
            <h3>加载控制</h3>
            <div class="flex flex-col gap-3">
              <div class="control-item">
                <span>自动完成</span>
                <label class="switch">
                  <input type="checkbox" v-model="autoComplete">
                  <span class="slider"></span>
                </label>
              </div>
              
              <div class="control-item" v-if="!autoComplete">
                <span>进度控制</span>
                <div class="slider-container">
                  <input 
                    type="range" 
                    v-model="manualProgress" 
                    min="0" 
                    max="100" 
                    class="progress-slider"
                  >
                  <span class="progress-value">{{ manualProgress }}%</span>
                </div>
              </div>
              
              <div class="control-item">
                <span>持续时间</span>
                <select v-model="duration" class="duration-select">
                  <option value="3000">3秒</option>
                  <option value="5000">5秒</option>
                  <option value="8000">8秒</option>
                  <option value="15000">15秒</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- 自定义文本 -->
          <div class="control-section">
            <h3>自定义文本</h3>
            <div class="flex flex-col gap-3">
              <input 
                type="text" 
                v-model="customTitle" 
                placeholder="主标题" 
                class="text-input"
              >
              <input 
                type="text" 
                v-model="customSubtitle" 
                placeholder="副标题" 
                class="text-input"
              >
              
              <div class="mt-2">
                <label class="text-sm block mb-1">自定义消息</label>
                <div class="flex flex-col gap-1">
                  <input 
                    v-for="(msg, idx) in customMessages" 
                    :key="`msg-${idx}`"
                    type="text" 
                    v-model="customMessages[idx]" 
                    :placeholder="`消息 ${idx + 1}`" 
                    class="text-input text-input-sm"
                  >
                </div>
              </div>
            </div>
          </div>
          
          <!-- 历史记录 -->
          <div class="control-section" v-if="loadingHistory.length > 0">
            <h3>加载历史</h3>
            <div class="history-list">
              <div 
                v-for="(item, idx) in loadingHistory.slice(0, 3)" 
                :key="`history-${idx}`"
                class="history-item"
              >
                <div class="history-time">{{ item.time }}</div>
                <div class="history-theme" :class="`theme-dot-${item.theme}`"></div>
                <div class="history-duration">{{ item.duration / 1000 }}秒</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 展示区 -->
        <div class="component-preview">
          <div class="preview-container" :class="{ active: showLoading }">
            <!-- 激活按钮 -->
            <button 
              @click="activateLoading" 
              class="activate-button"
              v-if="!showLoading"
            >
              <div class="activate-icon"></div>
              <span>激活全息加载系统</span>
            </button>
            
            <!-- 加载屏幕 -->
            <LoadingScreen 
              v-if="showLoading"
              :title="customTitle || undefined"
              :subtitle="customSubtitle || undefined"
              :theme="currentLoadingTheme"
              :duration="Number(duration)"
              :auto-complete="autoComplete"
              :custom-progress="!autoComplete ? manualProgress : undefined"
              :messages="customMessages.filter(m => m.trim())"
              @complete="handleLoadingComplete"
              @progress="handleProgress"
            />
            
            <!-- 加载信息 -->
            <div class="loading-info" v-if="!showLoading && lastProgress > 0">
              <div class="loading-progress">
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: `${lastProgress}%` }"></div>
                </div>
                <span class="progress-text">{{ loadCompleteMessage }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, createApp } from 'vue';
import { 
  HolographicNfcAnimation, 
  ColorTag, 
  TerminalOutput, 
  LoadingScreen,
  MessageToast
} from '../../../../src/index';

defineProps<{
  currentTheme: 'ark';
  activeComponent: 'holographic-animation' | 'color-tag' | 'terminal-output' | 'loading-animation' | 'loading-screen';
}>();

// 终端演示数据
const terminalLines = ref([
  '> holographic init',
  'Initializing Holographic component library...',
  'Scanning components...',
  'Loading theme: ark',
  'Setting up development environment...',
  'Building components...',
  'Holographic components ready!',
  '> _'
]);

// 主题列表
const themes = [
  { label: 'Ark', value: 'ark' as const },
];

// LoadingScreen 相关状态
const showLoading = ref(false);
const currentLoadingTheme = ref<'ark'>('ark');
const autoComplete = ref(true);
const manualProgress = ref(0);
const duration = ref('5000');
const lastProgress = ref(0);
const loadCompleteMessage = ref('');
const customTitle = ref('');
const customSubtitle = ref('');
const customMessages = ref([
  'Initializing System Core',
  'Loading Quantum Modules',
  'Calibrating Holographic Engine',
  'Establishing Neural Interface',
  ''
]);
const loadingHistory = ref<Array<{ time: string; theme: 'ark'; duration: number }>>([]);

// 加载屏幕方法
function activateLoading() {
  showLoading.value = true;
  lastProgress.value = 0;
}

function handleLoadingComplete() {
  setTimeout(() => {
    showLoading.value = false;
    loadCompleteMessage.value = '加载完成 - ' + new Date().toLocaleTimeString();
    
    // 添加到历史记录
    loadingHistory.value.unshift({
      time: new Date().toLocaleTimeString(),
      theme: currentLoadingTheme.value,
      duration: Number(duration.value)
    });
    
    // 保持历史记录最多5条
    if (loadingHistory.value.length > 5) {
      loadingHistory.value = loadingHistory.value.slice(0, 5);
    }
    
    showToast('量子全息系统已启动！', 'success');
  }, 500);
}

function handleProgress(value: number) {
  lastProgress.value = Math.round(value);
}

// 显示提示
function showToast(message: string, type: 'success' | 'warning' | 'error' = 'success') {
  const div = document.createElement('div');
  document.body.appendChild(div);
  
  const app = createApp(MessageToast, {
    message,
    theme: currentLoadingTheme.value,
    type,
    duration: 3000,
    position: 'top-center',
    showIcon: true,
    closable: true,
    onClose: () => {
      setTimeout(() => {
        document.body.removeChild(div);
      }, 300);
    }
  });
  
  app.mount(div);
}
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
  @apply text-sm font-medium text-gray-300 mb-4;
}

.demo-section {
  @apply px-6 py-4 border-b border-gray-800;
}

.demo-section:last-child {
  @apply border-0;
}

/* 控制面板样式 */
.control-panel {
  @apply bg-gray-800 rounded-lg p-4 w-full md:w-80 shrink-0;
  border: 1px solid theme('colors.gray.700');
}

.control-section {
  @apply pb-4 mb-4 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0;
}

.control-section h3 {
  @apply text-xs uppercase font-bold text-gray-400 mb-3 tracking-wider;
}

.theme-selector {
  @apply flex flex-wrap gap-2;
}

.theme-button {
  @apply flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-700
         transition-all hover:bg-gray-700;
}

.theme-button.active {
  @apply bg-gray-700 border-blue-500;
}

.theme-color {
  @apply w-3 h-3 rounded-full;
}

.theme-ark {
  @apply bg-blue-500;
}

.control-item {
  @apply flex items-center justify-between;
}

.switch {
  @apply relative inline-block w-10 h-5;
}

.switch input {
  @apply opacity-0 w-0 h-0;
}

.slider {
  @apply absolute cursor-pointer inset-0 rounded-full bg-gray-700 transition-all duration-300;
}

.slider:before {
  content: "";
  @apply absolute h-3.5 w-3.5 left-0.5 bottom-0.5 bg-white rounded-full transition-all duration-300;
}

input:checked + .slider {
  @apply bg-blue-600;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.slider-container {
  @apply flex items-center gap-2 w-full;
}

.progress-slider {
  @apply w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer;
}

.progress-slider::-webkit-slider-thumb {
  @apply appearance-none w-3 h-3 rounded-full bg-blue-500;
}

.progress-value {
  @apply text-xs min-w-[35px] text-right;
}

.duration-select {
  @apply bg-gray-700 border border-gray-600 text-white rounded p-1 text-sm;
}

.text-input {
  @apply bg-gray-700 border border-gray-600 text-white rounded p-2 text-sm;
}

.text-input-sm {
  @apply py-1;
}

.history-list {
  @apply space-y-2;
}

.history-item {
  @apply flex items-center justify-between text-xs bg-gray-700 rounded p-2;
}

.history-time {
  @apply text-gray-400;
}

.theme-dot-ark {
  @apply w-2 h-2 rounded-full bg-blue-500;
}

/* 预览区域样式 */
.component-preview {
  @apply flex-1 rounded-lg overflow-hidden relative;
  min-height: 500px;
}

.preview-container {
  @apply bg-gray-800 relative w-full h-full rounded-lg flex items-center justify-center;
  border: 1px solid theme('colors.gray.700');
  min-height: 500px;
}

.preview-container.active {
  @apply border-transparent;
}

.activate-button {
  @apply flex flex-col items-center gap-3 px-8 py-6 rounded-lg transition-all hover:scale-105;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(100, 116, 139, 0.3);
}

.activate-icon {
  @apply w-16 h-16 rounded-full relative;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(29, 78, 216, 0.2) 70%);
}

.activate-icon:before {
  content: "";
  @apply absolute inset-0 rounded-full;
  animation: pulse 2s infinite;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(29, 78, 216, 0) 70%);
}

.loading-info {
  @apply absolute bottom-4 left-0 right-0 px-4;
}

.loading-progress {
  @apply bg-gray-900 p-4 rounded-lg;
  border: 1px solid rgba(100, 116, 139, 0.3);
}

.progress-bar {
  @apply w-full h-1 bg-gray-700 rounded-full overflow-hidden mb-2;
}

.progress-fill {
  @apply h-full bg-blue-500 rounded-full;
}

.progress-text {
  @apply text-xs text-gray-400;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  70% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}
</style> 