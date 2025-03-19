/**
 * 图标工具函数
 */

/**
 * 获取SVG图标内容
 * @param name - 图标名称
 * @returns SVG图标的HTML字符串
 */
export async function getSvgContent(name: string): Promise<string> {
  try {
    // 尝试从assets/icons目录加载SVG
    const response = await fetch(`/src/assets/icons/${name}.svg`);
    if (response.ok) {
      return await response.text();
    } else {
      console.error(`无法加载图标: ${name}`);
      return '';
    }
  } catch (error) {
    console.error(`加载图标出错: ${name}`, error);
    return '';
  }
}

/**
 * 获取所有图标名称列表
 * @returns 图标名称列表
 */
export function getIconNames(): string[] {
  return [
    'chip',
    'circuit',
    'server',
    'data',
    'network',
    'hologram',
    'security',
    'ai',
    'cloud'
  ];
}

export default {
  getSvgContent,
  getIconNames
}; 