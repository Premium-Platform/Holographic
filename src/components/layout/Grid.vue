<template>
  <div 
    class="h-grid-container"
    :class="customClass"
    :style="customStyle"
  >
    <div 
      class="h-grid"
      :style="gridStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';

export interface GridProps {
  /**
   * 列数
   */
  columns?: number | 'auto-fill' | 'auto-fit';
  /**
   * 列宽，可以使用任何CSS宽度值
   */
  columnWidth?: string;
  /**
   * 列间距
   */
  columnGap?: string;
  /**
   * 行间距
   */
  rowGap?: string;
  /**
   * 内边距
   */
  padding?: string;
  /**
   * 自定义类名
   */
  customClass?: string;
  /**
   * 自定义样式
   */
  customStyle?: Record<string, string>;
}

const props = withDefaults(defineProps<GridProps>(), {
  columns: 'auto-fill',
  columnWidth: '280px',
  columnGap: '16px',
  rowGap: '16px',
  padding: '16px',
  customClass: '',
  customStyle: () => ({})
});

// 根据props生成grid样式
const gridStyle = computed(() => {
  const gridTemplateColumns = typeof props.columns === 'number' 
    ? `repeat(${props.columns}, 1fr)`
    : `repeat(${props.columns}, minmax(${props.columnWidth}, 1fr))`;
    
  return {
    display: 'grid',
    gridTemplateColumns,
    gap: props.rowGap === props.columnGap ? props.rowGap : `${props.rowGap} ${props.columnGap}`,
    padding: props.padding
  };
});
</script>

<style scoped>
.h-grid-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

/* 自定义滚动条样式 */
.h-grid-container::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.h-grid-container::-webkit-scrollbar-track {
  background: transparent;
}

.h-grid-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.h-grid-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* 响应式布局 */
@media (max-width: 768px) {
  .h-grid {
    grid-template-columns: 1fr !important;
  }
}
</style> 