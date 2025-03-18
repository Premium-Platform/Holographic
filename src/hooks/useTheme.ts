import { ref, readonly } from 'vue';
import { ThemeName, DEFAULT_THEME } from '../styles/theme';

// 创建全局主题状态
const currentTheme = ref<ThemeName>(DEFAULT_THEME);

/**
 * 主题钩子，用于设置和获取当前主题
 * @returns 主题状态和设置方法
 */
export function useTheme() {
  // 设置主题，并保存到本地存储
  const setTheme = (theme: ThemeName) => {
    currentTheme.value = theme;
    if (typeof window !== 'undefined') {
      localStorage.setItem('holographic-theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  // 初始化时从本地存储加载主题
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('holographic-theme') as ThemeName | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  return {
    theme: readonly(currentTheme),
    setTheme,
  };
}

// 为React版本导出的主题钩子
export function useThemeForReact() {
  // 这里将在React适配层实现
}

// 预设主题列表
export const themeOptions = [
  { value: 'ark', label: '全息高科技' },
]; 