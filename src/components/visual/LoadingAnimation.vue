<template>
  <div 
    class="loading-animation-container" 
    :class="[`theme-${theme}`, size]"
    :style="{ width: customSize ? `${parseInt(size)}px` : '100%', height: customSize ? `${parseInt(size)}px` : '100%' }"
  >
    <!-- 标题部分 -->
    <div v-if="title" class="title-container">
      <h1 class="main-title">
        <span v-for="(char, index) in title" 
              :key="`title-${index}`"
              class="char"
              :style="{ 
                animationDelay: `${index * 0.1}s`,
                '--glow-color': 'var(--primary-color)'
              }">
          {{ char }}
        </span>
      </h1>
      
      <!-- 扫描线效果 -->
      <div class="scan-line"></div>
    </div>

    <!-- 加载动画部分 -->
    <div class="animation-wrapper">
      <div v-if="variant === 'default'" class="loading-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-core"></div>
      </div>

      <div v-else-if="variant === 'dots'" class="loading-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>

      <div v-else-if="variant === 'pulse'" class="loading-pulse">
        <div class="pulse-circle"></div>
        <div class="pulse-circle"></div>
        <div class="pulse-circle"></div>
      </div>

      <div v-else-if="variant === 'holographic'" class="loading-holographic">
        <div class="holo-layer"></div>
        <div class="holo-layer"></div>
        <div class="holo-layer"></div>
        <div class="holo-core"></div>
        
        <!-- 数据流效果 -->
        <div class="data-stream" v-if="showDataStream">
          <div v-for="i in 12" :key="i" 
              class="data-particle"
              :style="{ 
                '--angle': `${(i * 30)}deg`,
                '--delay': `${i * 0.2}s`
              }">
            {{ Math.random() > 0.5 ? '1' : '0' }}
          </div>
        </div>
      </div>

      <div v-else-if="variant === 'bars'" class="loading-bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <div v-else-if="variant === 'text'" class="loading-text">
        <span>{{ text || 'Loading' }}</span>
        <span class="dots">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </span>
      </div>
    </div>
    
    <!-- 加载状态和消息部分 -->
    <div v-if="showProgress || messages.length > 0" class="loading-status">
      <div v-if="showProgress" class="status-text">
        <span class="text">LOADING</span>
        <span class="dots">
          <span v-for="i in 3" :key="i" 
                class="dot"
                :style="{ animationDelay: `${(i-1) * 0.2}s` }">.</span>
        </span>
      </div>
      
      <div v-if="showProgress" class="progress-bar">
        <div class="progress" :style="{ width: `${progress}%` }"></div>
      </div>
      
      <div v-if="currentMessage" class="status-message">{{ currentMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref, computed, watch } from 'vue';

const emit = defineEmits(['complete']);

const props = defineProps({
  /**
   * 主题样式
   */
  theme: {
    type: String,
    default: 'ark',
    validator: (value: string) => ['ark'].includes(value)
  },
  /**
   * 加载动画变体
   */
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'dots', 'pulse', 'holographic', 'bars', 'text'].includes(value)
  },
  /**
   * 尺寸
   */
  size: {
    type: String,
    default: '48'
  },
  /**
   * 文本型加载显示的文字
   */
  text: {
    type: String,
    default: ''
  },
  /**
   * 标题
   */
  title: {
    type: String,
    default: ''
  },
  /**
   * 消息列表
   */
  messages: {
    type: Array as () => string[],
    default: () => []
  },
  /**
   * 是否显示进度条
   */
  showProgress: {
    type: Boolean,
    default: false
  },
  /**
   * 是否显示数据流效果（仅用于holographic变体）
   */
  showDataStream: {
    type: Boolean,
    default: false
  },
  /**
   * 初始进度值（0-100）
   */
  initialProgress: {
    type: Number,
    default: 0
  },
  /**
   * 是否自动增加进度
   */
  autoProgress: {
    type: Boolean,
    default: true
  }
});

const customSize = computed(() => {
  return props.size !== '100%' && !isNaN(parseInt(props.size));
});

const progress = ref(props.initialProgress);
const currentMessage = ref(props.messages.length > 0 ? props.messages[0] : '');
let messageIndex = 0;

// 监听消息变化
watch(() => props.messages, (newMessages) => {
  if (newMessages.length > 0 && messageIndex < newMessages.length) {
    currentMessage.value = newMessages[messageIndex];
  }
}, { deep: true });

onMounted(() => {
  if (props.showProgress && props.autoProgress) {
    // 进度条动画
    const progressInterval = setInterval(() => {
      if (progress.value < 100) {
        progress.value += 1;
        
        // 根据进度更新消息
        if (props.messages.length > 0 && progress.value % (100 / Math.min(props.messages.length, 5)) === 0) {
          messageIndex = Math.min(messageIndex + 1, props.messages.length - 1);
          currentMessage.value = props.messages[messageIndex];
        }
      } else {
        clearInterval(progressInterval);
        // 当进度达到 100% 时，等待一小段时间后触发完成事件
        setTimeout(() => {
          emit('complete');
        }, 1000);
      }
    }, 50);
  }
});

// 提供手动设置进度的方法
const setProgress = (value: number) => {
  progress.value = Math.max(0, Math.min(100, value));
  
  // 根据进度百分比计算应该显示哪条消息
  if (props.messages.length > 0) {
    const messagePercentStep = 100 / props.messages.length;
    const newIndex = Math.min(Math.floor(progress.value / messagePercentStep), props.messages.length - 1);
    
    if (newIndex !== messageIndex) {
      messageIndex = newIndex;
      currentMessage.value = props.messages[messageIndex];
    }
  }
  
  if (progress.value >= 100) {
    setTimeout(() => {
      emit('complete');
    }, 1000);
  }
};

// 提供手动设置消息的方法
const setMessage = (message: string) => {
  currentMessage.value = message;
};

// 暴露方法给父组件
defineExpose({
  setProgress,
  setMessage
});
</script>

<style scoped>
.loading-animation-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
}

.animation-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  height: 200px;
  margin: 2rem 0;
}

/* 主题样式 */
.theme-ark {
  --primary-color: #4dabf7;
  --secondary-color: #228be6;
  --tertiary-color: #1971c2;
  --text-color: #edf0f2;
  --background-color: rgba(13, 17, 23, 0.9);
}

/* 标题样式 */
.title-container {
  position: relative;
  margin-bottom: 2.5rem;
  text-align: center;
  padding: 0 1rem;
  width: 100%;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--text-color);
  perspective: 1000px;
}

.char {
  display: inline-block;
  position: relative;
  color: transparent;
  text-shadow: 0 0 15px var(--glow-color);
  animation: char-appear 0.5s forwards, char-glow 2s infinite;
}

.scan-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  opacity: 0.7;
  top: 50%;
  transform: translateY(-50%);
  animation: scan-line 2s linear infinite;
  box-shadow: 0 0 20px var(--primary-color);
}

/* 默认旋转加载 */
.loading-spinner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: var(--primary-color);
  border-right-color: var(--secondary-color);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

.spinner-core {
  width: 30%;
  height: 30%;
  background-color: var(--tertiary-color);
  border-radius: 50%;
  opacity: 0.7;
  animation: pulse 1.2s ease-in-out infinite;
}

/* 点加载 */
.loading-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.loading-dots .dot {
  width: 25%;
  height: 25%;
  background-color: var(--primary-color);
  border-radius: 50%;
  animation: dotPulse 1.4s ease-in-out infinite;
}

.loading-dots .dot:nth-child(2) {
  animation-delay: 0.2s;
  background-color: var(--secondary-color);
}

.loading-dots .dot:nth-child(3) {
  animation-delay: 0.4s;
  background-color: var(--tertiary-color);
}

/* 脉冲加载 */
.loading-pulse {
  position: relative;
  width: 100%;
  height: 100%;
}

.pulse-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--primary-color);
  opacity: 0.6;
  animation: pulse-out 2s ease-out infinite;
}

.pulse-circle:nth-child(2) {
  animation-delay: 0.5s;
}

.pulse-circle:nth-child(3) {
  animation-delay: 1s;
}

/* 全息加载 */
.loading-holographic {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.holo-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  opacity: 0.5;
  animation: holo-rotate 3s linear infinite;
  box-shadow: 0 0 15px var(--primary-color);
}

.holo-layer:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-color: var(--secondary-color);
  animation-duration: 2.5s;
  animation-direction: reverse;
  box-shadow: 0 0 12px var(--secondary-color);
}

.holo-layer:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-color: var(--tertiary-color);
  animation-duration: 2s;
  box-shadow: 0 0 10px var(--tertiary-color);
}

.holo-core {
  position: absolute;
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
  background-color: var(--primary-color);
  border-radius: 50%;
  opacity: 0.8;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 0 25px var(--primary-color);
}

/* 数据流效果 */
.data-stream {
  position: absolute;
  width: 100%;
  height: 100%;
}

.data-particle {
  position: absolute;
  font-family: monospace;
  font-size: 0.85rem;
  color: var(--primary-color);
  top: 50%;
  left: 50%;
  animation: particle-move 2s linear infinite;
  animation-delay: var(--delay);
  transform-origin: 0 0;
  text-shadow: 0 0 5px var(--primary-color);
}

/* 条形加载 */
.loading-bars {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 100%;
  height: 100%;
}

.bar {
  width: 15%;
  height: 60%;
  background-color: var(--primary-color);
  animation: barPulse 1.2s ease-in-out infinite;
}

.bar:nth-child(2) {
  animation-delay: 0.2s;
  background-color: var(--secondary-color);
}

.bar:nth-child(3) {
  animation-delay: 0.4s;
  background-color: var(--primary-color);
}

.bar:nth-child(4) {
  animation-delay: 0.6s;
  background-color: var(--secondary-color);
}

/* 文本加载 */
.loading-text {
  display: flex;
  font-size: 1rem;
  color: var(--text-color);
}

.loading-text .dots {
  display: flex;
}

.loading-text .dot {
  animation: textDotPulse 1.4s infinite;
  animation-fill-mode: both;
}

.loading-text .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-text .dot:nth-child(3) {
  animation-delay: 0.4s;
}

/* 加载状态区域 */
.loading-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;
}

.status-text {
  display: flex;
  align-items: center;
  font-family: monospace;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.text {
  margin-right: 0.25rem;
}

.dots .dot {
  animation: dot-blink 1.4s infinite;
  opacity: 0;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress {
  height: 100%;
  background-color: var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
  transition: width 0.3s ease-out;
}

.status-message {
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  font-family: monospace;
  text-align: center;
}

/* 动画关键帧 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

@keyframes pulse-out {
  0% {
    transform: scale(0.3);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes dotPulse {
  0%, 100% {
    transform: scale(0.5);
    opacity: 0.3;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes barPulse {
  0%, 100% {
    transform: scaleY(0.5);
    opacity: 0.3;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes textDotPulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes holo-rotate {
  0% {
    transform: rotateX(30deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(30deg) rotateY(360deg);
  }
}

@keyframes char-appear {
  from {
    opacity: 0;
    transform: translateY(-15px) rotateX(90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

@keyframes char-glow {
  0%, 100% {
    text-shadow: 0 0 10px var(--glow-color);
  }
  50% {
    text-shadow: 0 0 25px var(--glow-color), 0 0 35px var(--glow-color);
  }
}

@keyframes scan-line {
  0% {
    transform: translateY(-50%) scaleX(0);
    left: 0;
    opacity: 0;
  }
  20% {
    transform: translateY(-50%) scaleX(1);
    left: 0;
    opacity: 0.7;
  }
  80% {
    transform: translateY(-50%) scaleX(1);
    left: 0;
    opacity: 0.7;
  }
  100% {
    transform: translateY(-50%) scaleX(0);
    left: 100%;
    opacity: 0;
  }
}

@keyframes particle-move {
  0% {
    transform: rotate(var(--angle)) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: rotate(var(--angle)) translateX(120px) scale(0);
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

/* 响应式大小 */
.loading-animation-container.small {
  font-size: 0.8em;
}

.loading-animation-container.large {
  font-size: 1.2em;
}
</style> 