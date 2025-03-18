<template>
  <div 
    class="h-terminal"
    :class="[
      `h-terminal-${theme}`,
      customClass
    ]"
    :style="[
      { height: height },
      customStyle
    ]"
    ref="terminalContainer"
  >
    <!-- 终端头部 -->
    <div class="h-terminal-header">
      <div class="h-terminal-title">{{ title }}</div>
      <div class="h-terminal-controls">
        <button 
          v-if="clearable" 
          class="h-terminal-control-button" 
          @click="clear" 
          :title="clearText"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="15"></line>
            <line x1="15" y1="9" x2="9" y2="15"></line>
          </svg>
        </button>
        <slot name="controls"></slot>
      </div>
    </div>
    
    <!-- 终端内容 -->
    <div class="h-terminal-content" ref="terminalContent">
      <!-- 全息效果 -->
      <div v-if="holographic" class="h-terminal-hologram-effect"></div>
      <div v-if="holographic" class="h-terminal-scan-line"></div>
      <div v-if="holographic" class="h-terminal-grid-pattern"></div>
      
      <!-- 终端行 -->
      <div class="h-terminal-lines">
        <div 
          v-for="(line, index) in lines" 
          :key="index" 
          class="h-terminal-line" 
          :class="{ 'h-terminal-fade-in': line.animate }"
        >
          <span v-if="showPrompt" class="h-terminal-prompt">{{ prompt }}</span>
          <span class="h-terminal-line-content" v-html="formatLine(line.text)"></span>
        </div>
        
        <!-- 光标行 -->
        <div v-if="showCursorLine" class="h-terminal-line h-terminal-cursor-line">
          <span v-if="showPrompt" class="h-terminal-prompt">{{ prompt }}</span>
          <span v-if="cursorVisible" class="h-terminal-cursor"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed, defineProps, defineEmits, withDefaults, defineExpose } from 'vue';

export interface TerminalLine {
  text: string;
  animate?: boolean;
}

export interface TerminalOutputProps {
  /** 终端标题 */
  title?: string;
  /** 命令提示符 */
  prompt?: string;
  /** 是否显示提示符 */
  showPrompt?: boolean;
  /** 是否显示光标行 */
  showCursorLine?: boolean;
  /** 最大行数 */
  maxLines?: number;
  /** 清除按钮文本 */
  clearText?: string;
  /** 是否可清除 */
  clearable?: boolean;
  /** 主题 */
  theme?: 'ark';
  /** 高度 */
  height?: string;
  /** 自定义类名 */
  customClass?: string;
  /** 自定义样式 */
  customStyle?: Record<string, string>;
  /** 是否使用全息效果 */
  holographic?: boolean;
  /** 初始内容 */
  initialLines?: string[] | string;
}

const props = withDefaults(defineProps<TerminalOutputProps>(), {
  title: '终端输出',
  prompt: '>>',
  showPrompt: true,
  showCursorLine: true,
  maxLines: 1000,
  clearText: '清空终端',
  clearable: true,
  theme: 'ark',
  height: '300px',
  customClass: '',
  customStyle: () => ({}),
  holographic: true,
  initialLines: () => []
});

const emit = defineEmits<{
  (e: 'clear'): void;
  (e: 'add-line', line: string): void;
}>();

// 引用DOM元素
const terminalContainer = ref<HTMLDivElement | null>(null);
const terminalContent = ref<HTMLDivElement | null>(null);

// 终端状态
const lines = ref<TerminalLine[]>([]);
const cursorVisible = ref(true);

// 计算主题相关的样式
const themeColors = computed(() => {
  // ark 主题
  return {
    primary: '#38BDF8', // 蓝色
    secondary: '#21262D', // 暗色边框
    background: '#161B22', // 面板色
    text: '#C9D1D9', // 文本色
  };
});

// 格式化行内容，处理特殊标记
const formatLine = (text: string): string => {
  if (!text) return '';
  
  // 处理换行符，将其转换为HTML的换行
  let formattedText = String(text)
    .replace(/\\n/g, '<br>') // 处理转义的\n
    .replace(/\n/g, '<br>'); // 处理实际的换行符
  
  // 保留连续空格
  formattedText = formattedText.replace(/ {2,}/g, match => {
    return '&nbsp;'.repeat(match.length);
  });
  
  // 高亮关键词
  formattedText = formattedText
    .replace(/\b(error|错误|failed|失败)\b/gi, '<span class="h-terminal-highlight-error">$&</span>')
    .replace(/\b(success|成功|ok|完成)\b/gi, '<span class="h-terminal-highlight-success">$&</span>')
    .replace(/\b(warning|警告|caution|注意)\b/gi, '<span class="h-terminal-highlight-warning">$&</span>')
    .replace(/(0x[0-9a-f]+)\b/gi, '<span class="h-terminal-highlight-hex">$&</span>')
    .replace(/(\d{2} ){5,}/g, '<span class="h-terminal-highlight-data">$&</span>');
  
  return formattedText;
};

// 添加一行或多行内容
const addLines = (newLines: string | string[]): void => {
  if (!newLines) return;
  
  const linesToAdd = Array.isArray(newLines) ? newLines : [newLines];
  
  // 为每一行添加动画标记
  const newLinesWithAnimation = linesToAdd.map(text => ({
    text,
    animate: true
  }));
  
  lines.value = [...lines.value, ...newLinesWithAnimation];
  
  // 如果超过最大行数，移除最早的行
  if (lines.value.length > props.maxLines) {
    lines.value = lines.value.slice(lines.value.length - props.maxLines);
  }
  
  // 触发事件
  linesToAdd.forEach(line => {
    emit('add-line', line);
  });
  
  // 300ms后移除动画标记
  setTimeout(() => {
    newLinesWithAnimation.forEach(line => {
      line.animate = false;
    });
  }, 300);
  
  // 滚动到底部
  nextTick(() => {
    scrollToBottom();
  });
};

// 清空终端内容
const clear = (): void => {
  lines.value = [];
  emit('clear');
};

// 滚动到底部
const scrollToBottom = (): void => {
  if (terminalContent.value) {
    terminalContent.value.scrollTop = terminalContent.value.scrollHeight;
  }
};

// 初始化
onMounted(() => {
  // 光标闪烁效果
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
  
  // 添加初始内容
  if (props.initialLines.length > 0) {
    addLines(props.initialLines);
  }
});

// 暴露方法给父组件
defineExpose({
  addLines,
  clear,
  scrollToBottom
});
</script>

<style scoped>
/* 终端基础样式 */
.h-terminal {
  @apply font-mono text-sm rounded-md overflow-hidden relative;
  min-height: 150px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.h-terminal-header {
  height: 36px;
  background-color: rgba(33, 38, 45, 0.8);
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  z-index: 3;
}

.h-terminal-title {
  color: rgba(201, 209, 217, 0.9);
  font-size: 14px;
  font-weight: 500;
}

.h-terminal-controls {
  display: flex;
  gap: 8px;
}

.h-terminal-control-button {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: rgba(33, 38, 45, 0.6);
  border: 1px solid rgba(56, 189, 248, 0.2);
  color: rgba(201, 209, 217, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.h-terminal-control-button:hover {
  background-color: rgba(56, 189, 248, 0.1);
  color: rgba(56, 189, 248, 0.9);
  border-color: rgba(56, 189, 248, 0.4);
}

.h-terminal-content {
  @apply h-full overflow-auto p-4;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: rgba(56, 189, 248, 0.3) rgba(22, 27, 34, 0.2);
}

.h-terminal-content::-webkit-scrollbar {
  width: 6px;
}

.h-terminal-content::-webkit-scrollbar-track {
  background: rgba(22, 27, 34, 0.2);
}

.h-terminal-content::-webkit-scrollbar-thumb {
  background-color: rgba(56, 189, 248, 0.3);
  border-radius: 3px;
}

/* 主题变体 - Ark */
.h-terminal-ark {
  @apply bg-ark-panel text-ark-text border border-ark-border;
  background-color: rgba(22, 27, 34, 0.8);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

/* 增强全息效果 */
.h-terminal-grid-pattern {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  z-index: 1;
}

.h-terminal-hologram-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(56, 189, 248, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
  animation: hologram-pulse 4s infinite ease-in-out;
}

.h-terminal-scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(56, 189, 248, 0.05) 20%, 
    rgba(56, 189, 248, 0.2) 50%,
    rgba(56, 189, 248, 0.05) 80%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
  animation: scan-line 3s infinite ease-in-out;
}

.h-terminal-lines {
  position: relative;
  z-index: 3;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(201, 209, 217, 0.9);
}

.h-terminal-line {
  margin-bottom: 4px;
  display: flex;
  align-items: flex-start;
  transition: opacity 0.2s ease;
}

.h-terminal-fade-in {
  animation: fade-in 0.3s ease-in-out;
}

.h-terminal-prompt {
  color: rgba(56, 189, 248, 0.9);
  margin-right: 8px;
  font-weight: 600;
  user-select: none;
}

.h-terminal-line-content {
  flex: 1;
  word-break: break-word;
}

/* 打字效果的样式 */
.h-terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 16px;
  background-color: rgba(56, 189, 248, 0.7);
  animation: cursor-blink 1s infinite;
  vertical-align: middle;
}

.h-terminal-cursor-line {
  height: 20px;
}

/* 高亮变体 */
.h-terminal-ark :deep(.h-terminal-highlight-error) {
  color: #f87171;
  font-weight: 600;
}

.h-terminal-ark :deep(.h-terminal-highlight-success) {
  color: #34d399;
  font-weight: 600;
}

.h-terminal-ark :deep(.h-terminal-highlight-warning) {
  color: #fbbf24;
  font-weight: 600;
}

.h-terminal-ark :deep(.h-terminal-highlight-hex) {
  color: #a78bfa;
}

.h-terminal-ark :deep(.h-terminal-highlight-data) {
  color: #60a5fa;
  letter-spacing: 0.5px;
}

/* 动画 */
@keyframes cursor-blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

@keyframes scan-line {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

@keyframes hologram-pulse {
  0% {
    opacity: 0.3;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
  100% {
    opacity: 0.3;
    transform: scale(0.98);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 