<template>
  <component 
    :is="iconComponent" 
    :style="{ width: `${size}px`, height: `${size}px` }"
    :class="['h-icon-wrapper', customClass]"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

const props = defineProps({
  /**
   * 图标名称
   */
  name: {
    type: String,
    required: true
  },
  /**
   * 图标尺寸
   */
  size: {
    type: [String, Number],
    default: 24
  },
  /**
   * 自定义CSS类
   */
  customClass: {
    type: String,
    default: ''
  }
});

// 动态异步导入SVG组件
const iconComponent = computed(() => {
  return defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
      try {
        // 尝试导入SVG
        import(`../../assets/icons/${props.name}.svg`)
          .then(module => {
            resolve(module.default);
          })
          .catch(error => {
            console.error(`无法加载图标: ${props.name}`, error);
            reject(error);
          });
      } catch (error) {
        console.error(`加载图标出错: ${props.name}`, error);
        reject(error);
      }
    });
  });
});
</script>

<style scoped>
.h-icon-wrapper {
  @apply inline-block align-middle;
  color: currentColor;
}
</style> 