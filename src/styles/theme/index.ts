// 主题类型定义
export type ThemeName = 'ark';

// 主题上下文接口
export interface ThemeContext {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

// 默认主题
export const DEFAULT_THEME: ThemeName = 'ark';

// 主题颜色映射
export const themeColorMap = {
  ark: {
    background: 'bg-ark-bg',
    panel: 'bg-ark-panel',
    border: 'border-ark-border',
    text: 'text-ark-text',
    accent: 'text-ark-accent',
  },
};

// 主题应用工具函数
export const applyThemeClass = (baseClass: string, theme: ThemeName): string => {
  return `${baseClass} ${themeColorMap[theme].background}`;
}; 