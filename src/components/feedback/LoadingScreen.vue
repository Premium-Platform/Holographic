<template>
  <div class="loading-container" :class="`theme-${theme}`">
    <!-- 标题动画 -->
    <div class="title-container">
      <!-- 扫描线效果 -->
      <div class="scan-line"></div>
      
      <!-- 主标题 -->
      <h1 class="main-title">
        <span v-for="(char, index) in title" 
              :key="`title-${index}`"
              class="char"
              :style="{ 
                animationDelay: `${index * 0.05}s`,
              }">
          {{ char }}
        </span>
      </h1>
      
      <!-- 副标题 -->
      <div v-if="subtitle" class="subtitle">
        <span v-for="(char, index) in subtitle" 
              :key="`subtitle-${index}`"
              class="char subtitle-char"
              :style="{ 
                animationDelay: `${index * 0.03 + 0.5}s` 
              }">
          {{ char }}
        </span>
      </div>
      
      <!-- 数字效果 -->
      <div class="digital-effects">
        <div class="digital-line" v-for="i in 3" :key="`digital-${i}`"
             :style="{ animationDelay: `${i * 0.2}s` }"></div>
      </div>
    </div>

    <!-- 中央动画区域 -->
    <div class="central-animation">
      <!-- 加载动画 -->
      <slot>
        <div class="signal-waves">
          <div v-for="i in 4" :key="`wave-${i}`" 
               class="wave"
               :style="{ animationDelay: `${(i-1) * 0.3}s` }">
          </div>
        </div>
        
        <!-- 数据流效果 -->
        <div class="data-particles">
          <div v-for="i in 12" :key="`particle-${i}`" 
               class="data-particle"
               :style="{ 
                 '--angle': `${(i * 30)}deg`,
                 '--delay': `${i * 0.2}s`
               }">
            {{ Math.random() > 0.5 ? '1' : '0' }}
          </div>
        </div>
      </slot>
    </div>

    <!-- 加载状态文本 -->
    <div class="loading-status">
      <div class="status-text">
        <span class="text">{{ loadingText }}</span>
        <span class="dots">
          <span v-for="i in 3" :key="`dot-${i}`" 
                class="dot"
                :style="{ animationDelay: `${(i-1) * 0.2}s` }">.</span>
        </span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress" 
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
      <div class="status-message">{{ currentMessage }}</div>
      <div class="percentage">{{ Math.round(progress) }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits, withDefaults } from 'vue';

interface LoadingScreenProps {
  /**
   * 主标题文本
   */
  title?: string;
  /**
   * 副标题文本
   */
  subtitle?: string;
  /**
   * 加载文本
   */
  loadingText?: string;
  /**
   * 状态消息列表
   */
  messages?: string[];
  /**
   * 加载时长(毫秒)
   */
  duration?: number;
  /**
   * 主题
   */
  theme?: 'ark';
  /**
   * 是否自动完成
   */
  autoComplete?: boolean;
  /**
   * 自定义进度值 (0-100)
   */
  customProgress?: number;
}

const props = withDefaults(defineProps<LoadingScreenProps>(), {
  title: 'HOLOGRAPHIC·SYSTEM',
  subtitle: 'Quantum Hologram Interface',
  loadingText: 'LOADING',
  messages: () => [
    'Initializing System Core',
    'Loading Quantum Modules',
    'Calibrating Holographic Engine',
    'Establishing Neural Interface',
    'System Ready For Operation'
  ],
  duration: 5000,
  theme: 'ark',
  autoComplete: true,
  customProgress: undefined
});

const emit = defineEmits<{
  (e: 'progress', value: number): void;
  (e: 'complete'): void;
}>();

const progress = ref(0);
const currentMessage = ref(props.messages[0]);
let messageIndex = 0;
let progressInterval: ReturnType<typeof setInterval> | null = null;

// 监听自定义进度变化
watch(() => props.customProgress, (newValue) => {
  if (newValue !== undefined) {
    // 如果提供了自定义进度，则清除自动进度定时器
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
    progress.value = newValue;
    
    // 根据进度设置相应的消息
    const messageCount = props.messages.length;
    const step = 100 / messageCount;
    messageIndex = Math.min(Math.floor(newValue / step), messageCount - 1);
    currentMessage.value = props.messages[messageIndex];
    
    // 完成时触发事件
    if (newValue >= 100) {
      emit('complete');
    }
  }
});

onMounted(() => {
  // 如果没有提供自定义进度且启用了自动完成，则自动更新进度
  if (props.customProgress === undefined && props.autoComplete) {
    const totalDuration = props.duration;
    const interval = 50; // 每50毫秒更新一次
    const steps = totalDuration / interval;
    const increment = 100 / steps;

    progressInterval = setInterval(() => {
      if (progress.value < 100) {
        progress.value += increment;
        emit('progress', progress.value);
        
        // 根据进度更新消息
        const messageStep = 100 / props.messages.length;
        if (progress.value >= (messageIndex + 1) * messageStep) {
          messageIndex = Math.min(messageIndex + 1, props.messages.length - 1);
          currentMessage.value = props.messages[messageIndex];
        }
      } else {
        if (progressInterval) {
          clearInterval(progressInterval);
          progressInterval = null;
        }
        // 当进度达到 100% 时，触发完成事件
        emit('complete');
      }
    }, interval);
  }
});
</script>

<style scoped>
.loading-container {
  @apply fixed inset-0 flex flex-col items-center justify-center z-50;
  @apply bg-opacity-95 backdrop-blur-sm;
  perspective: 1000px;
  padding: 2rem;
  overflow: hidden;
}

/* 主题变体 */
.theme-ark {
  @apply bg-gray-900;
  --accent-color: theme('colors.blue.500');
  --glow-color: rgba(59, 130, 246, 0.7);
  --text-color: theme('colors.gray.100');
  --panel-color: theme('colors.gray.800');
  --accent-secondary: theme('colors.indigo.500');
}

/* 标题容器样式 */
.title-container {
  @apply relative mb-12 text-center;
  margin-bottom: 3rem;
}

.main-title {
  @apply text-4xl md:text-5xl font-bold tracking-wider;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px var(--glow-color);
  position: relative;
}

.subtitle {
  @apply mt-1 text-lg opacity-80;
  color: var(--text-color);
  letter-spacing: 0.1em;
}

.char {
  @apply inline-block relative;
  animation: char-appear 0.5s forwards, char-glow 2s infinite;
}

.subtitle-char {
  animation: subtitle-char-appear 0.3s forwards, subtitle-glow 3s infinite;
}

.scan-line {
  @apply absolute w-full h-1 opacity-50;
  background-color: var(--accent-color);
  top: 50%;
  transform: translateY(-50%);
  animation: scan-line 2s linear infinite;
  box-shadow: 0 0 15px var(--accent-color);
}

/* 数字效果 */
.digital-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.digital-line {
  position: absolute;
  height: 1px;
  background-color: var(--accent-color);
  opacity: 0.3;
  transform-origin: left center;
  animation: digital-line 3s ease-in-out infinite;
}

.digital-line:nth-child(1) {
  top: 20%;
  width: 80%;
  left: 10%;
}

.digital-line:nth-child(2) {
  top: 60%;
  width: 60%;
  left: 20%;
}

.digital-line:nth-child(3) {
  top: 80%;
  width: 40%;
  left: 30%;
}

/* 中央动画区域 */
.central-animation {
  @apply relative w-48 h-48 mb-12;
  transform-style: preserve-3d;
}

.signal-waves {
  @apply absolute inset-0 flex items-center justify-center;
}

.wave {
  @apply absolute w-full h-full rounded-full opacity-0;
  border: 2px solid var(--accent-color);
  animation: wave-expand 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

/* 数据粒子 */
.data-particles {
  @apply absolute inset-0;
}

.data-particle {
  @apply absolute font-mono text-xs;
  color: var(--accent-color);
  top: 50%;
  left: 50%;
  animation: particle-move 2s linear infinite;
  animation-delay: var(--delay);
  transform-origin: 0 0;
}

/* 加载状态区域 */
.loading-status {
  @apply flex flex-col items-center;
  max-width: 400px;
  width: 100%;
}

.status-text {
  @apply flex items-center font-mono mb-4;
  color: var(--text-color);
  font-weight: 500;
}

.text {
  @apply mr-1;
  letter-spacing: 0.1em;
}

.dot {
  animation: dot-blink 1.4s infinite;
  opacity: 0;
}

.progress-bar {
  @apply w-full h-1 rounded-full overflow-hidden mb-2;
  background-color: var(--panel-color);
  position: relative;
}

.progress {
  @apply h-full relative;
  background-color: var(--accent-color);
  box-shadow: 0 0 10px var(--accent-color);
  transition: width 0.3s ease-out;
}

.progress::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 5px;
  background-color: var(--text-color);
  box-shadow: 0 0 8px var(--text-color);
}

.status-message {
  @apply text-sm opacity-80 font-mono mt-2;
  color: var(--text-color);
  letter-spacing: 0.05em;
}

.percentage {
  @apply text-xs font-mono mt-2;
  color: var(--accent-color);
}

/* 动画关键帧 */
@keyframes char-appear {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtitle-char-appear {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 0.8;
    transform: translateX(0);
  }
}

@keyframes char-glow {
  0%, 100% {
    text-shadow: 0 0 5px var(--accent-color), 0 0 10px var(--accent-color);
  }
  50% {
    text-shadow: 0 0 20px var(--accent-color), 0 0 30px var(--accent-color);
  }
}

@keyframes subtitle-glow {
  0%, 100% {
    text-shadow: 0 0 2px var(--accent-secondary);
  }
  50% {
    text-shadow: 0 0 10px var(--accent-secondary);
  }
}

@keyframes scan-line {
  0% {
    transform: translateY(-50%) scaleX(0);
    opacity: 0;
    left: 0;
  }
  50% {
    transform: translateY(-50%) scaleX(1);
    opacity: 1;
    left: 0;
  }
  100% {
    transform: translateY(-50%) scaleX(0);
    opacity: 0;
    left: 100%;
  }
}

@keyframes digital-line {
  0% {
    transform: scaleX(0);
    opacity: 0.8;
  }
  50% {
    transform: scaleX(1);
    opacity: 0.5;
  }
  100% {
    transform: scaleX(0);
    opacity: 0.8;
  }
}

@keyframes wave-expand {
  0% {
    transform: scale(0.3);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes particle-move {
  0% {
    transform: rotate(var(--angle)) translateX(0) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: rotate(var(--angle)) translateX(100px) scale(0);
    opacity: 0;
  }
}

@keyframes dot-blink {
  0%, 20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
}
</style> 