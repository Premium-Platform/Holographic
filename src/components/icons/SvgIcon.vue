<template>
  <div class="h-svg-icon" :style="{ width: size + 'px', height: size + 'px' }" v-html="svgContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

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
   * 图标颜色
   */
  color: {
    type: String,
    default: 'currentColor'
  }
});

const svgContent = ref('');

// 加载SVG内容
const loadSvg = async () => {
  try {
    // 动态加载SVG内容
    const modulePath = `/src/assets/icons/${props.name}.svg`;
    const response = await fetch(modulePath);
    
    if (response.ok) {
      let svg = await response.text();
      
      // 确保设置宽高和颜色
      svg = svg.replace('<svg ', `<svg width="${props.size}" height="${props.size}" `);
      svg = svg.replace('stroke="currentColor"', `stroke="${props.color}"`);
      
      // 更新SVG内容
      svgContent.value = svg;
    } else {
      console.error(`无法加载图标: ${props.name}，路径：${modulePath}`);
      // 尝试备用路径
      const backupPath = `../../../assets/icons/${props.name}.svg`;
      try {
        const backupResponse = await fetch(backupPath);
        if (backupResponse.ok) {
          let svg = await backupResponse.text();
          svg = svg.replace('<svg ', `<svg width="${props.size}" height="${props.size}" `);
          svg = svg.replace('stroke="currentColor"', `stroke="${props.color}"`);
          svgContent.value = svg;
        } else {
          throw new Error('备用路径也无法加载');
        }
      } catch (error) {
        console.error('备用路径加载失败:', error);
      }
    }
  } catch (error) {
    console.error(`加载图标出错: ${props.name}`, error);
  }
};

// 监听名称和颜色变化重新加载SVG
watch(() => [props.name, props.color, props.size], loadSvg);

// 组件挂载时加载SVG
onMounted(loadSvg);
</script>

<style scoped>
.h-svg-icon {
  @apply inline-block align-middle;
  fill: currentColor;
  overflow: hidden;
}
</style> 