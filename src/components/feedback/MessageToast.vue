<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-2 opacity-0"
    >
      <div
        v-if="visible"
        class="h-toast"
        :class="[typeClasses[theme][type], positionClass]"
      >
        <!-- 关闭按钮 -->
        <div 
          v-if="closable" 
          @click="handleClose" 
          class="absolute top-2 right-2 cursor-pointer opacity-70 hover:opacity-100"
        >
          <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>

        <!-- 消息内容 -->
        <div class="flex items-center pr-6">
          <div class="mr-3" v-if="type !== 'default' && showIcon">
            <component :is="iconComponent" class="w-5 h-5" />
          </div>
          <div>{{ message }}</div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, defineComponent, h, defineProps, defineEmits, withDefaults, defineExpose } from 'vue';

const successIcon = defineComponent({
  render() {
    return h('svg', { 
      viewBox: '0 0 20 20', 
      fill: 'currentColor',
      class: 'w-5 h-5'
    }, [
      h('path', { 
        'fill-rule': 'evenodd', 
        d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
        'clip-rule': 'evenodd'
      })
    ]);
  }
});

const errorIcon = defineComponent({
  render() {
    return h('svg', { 
      viewBox: '0 0 20 20', 
      fill: 'currentColor',
      class: 'w-5 h-5'
    }, [
      h('path', { 
        'fill-rule': 'evenodd', 
        d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
        'clip-rule': 'evenodd'
      })
    ]);
  }
});

const infoIcon = defineComponent({
  render() {
    return h('svg', { 
      viewBox: '0 0 20 20', 
      fill: 'currentColor',
      class: 'w-5 h-5'
    }, [
      h('path', { 
        'fill-rule': 'evenodd', 
        d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z',
        'clip-rule': 'evenodd'
      })
    ]);
  }
});

const warningIcon = defineComponent({
  render() {
    return h('svg', { 
      viewBox: '0 0 20 20', 
      fill: 'currentColor',
      class: 'w-5 h-5'
    }, [
      h('path', { 
        'fill-rule': 'evenodd', 
        d: 'M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z',
        'clip-rule': 'evenodd'
      })
    ]);
  }
});

export interface MessageToastProps {
  /** 提示消息内容 */
  message: string;
  /** 自动关闭的延迟（毫秒），设为0则不自动关闭 */
  duration?: number;
  /** 消息类型 */
  type?: 'default' | 'success' | 'error' | 'info' | 'warning';
  /** 消息主题 */
  theme?: 'ark';
  /** 显示位置 */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 是否显示关闭按钮 */
  closable?: boolean;
}

const props = withDefaults(defineProps<MessageToastProps>(), {
  duration: 3000,
  type: 'default',
  theme: 'ark',
  position: 'bottom-right',
  showIcon: true,
  closable: false
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const visible = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

// 主题样式映射
const typeClasses = {
  ark: {
    default: 'bg-ark-panel text-ark-text',
    success: 'bg-ark-green-light/10 text-ark-green-light border border-ark-green/20',
    error: 'bg-ark-red-light/10 text-ark-red-light border border-ark-red/20',
    info: 'bg-ark-blue-light/10 text-ark-blue-light border border-ark-blue/20',
    warning: 'bg-ark-yellow-light/10 text-ark-yellow-light border border-ark-yellow/20'
  }
};

// 位置类映射
const positionClass = computed(() => {
  switch (props.position) {
    case 'top-right':
      return 'fixed top-4 right-4 z-50';
    case 'top-left':
      return 'fixed top-4 left-4 z-50';
    case 'bottom-right':
      return 'fixed bottom-4 right-4 z-50';
    case 'bottom-left':
      return 'fixed bottom-4 left-4 z-50';
    case 'top-center':
      return 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50';
    case 'bottom-center':
      return 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50';
    default:
      return 'fixed bottom-4 right-4 z-50';
  }
});

// 根据类型获取图标组件
const iconComponent = computed(() => {
  switch (props.type) {
    case 'success':
      return successIcon;
    case 'error':
      return errorIcon;
    case 'info':
      return infoIcon;
    case 'warning':
      return warningIcon;
    default:
      return null;
  }
});

// 手动关闭
const handleClose = () => {
  visible.value = false;
  emit('close');
};

onMounted(() => {
  visible.value = true;
  
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
});

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer);
  }
});

// 暴露方法
defineExpose({
  close: handleClose
});
</script>

<style scoped>
.h-toast {
  @apply px-5 py-4 rounded-lg shadow-lg min-w-[280px] max-w-md;
  @apply relative backdrop-blur-sm;
  @apply border border-opacity-30;
}

/* 不同位置的特定样式 */
.h-toast.fixed {
  @apply z-50 mx-auto;
}

/* 添加额外的主题样式 */
.h-toast[class*='bg-ark'] {
  @apply shadow-blue-900/20;
}
</style> 