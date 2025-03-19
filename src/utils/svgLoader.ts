/**
 * SVG图标加载器
 * 将所有SVG图标注册到SVG Sprite中
 */

/**
 * 导入所有SVG图标
 * 这里使用Vite的方式导入所有SVG图标
 */
export function loadAllIcons() {
  try {
    // 在Vite环境中使用import.meta.glob加载所有SVG图标
    const importSvgs = () => {
      const context = import.meta.glob('../assets/icons/*.svg', { eager: true });
      return context;
    };
    
    const svgFiles = importSvgs();
    const symbolId = 'icon-';
    
    // 创建SVG sprite容器
    const svgSprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgSprite.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgSprite.setAttribute('style', 'position: absolute; width: 0; height: 0');
    svgSprite.setAttribute('aria-hidden', 'true');
    svgSprite.id = 'h-svg-sprite';
    
    // 添加到body
    document.body.appendChild(svgSprite);
    
    // 处理并添加每个SVG图标
    Object.keys(svgFiles).forEach(key => {
      // 解析文件名（不含扩展名）作为图标ID
      const fileName = key.split('/').pop()?.split('.')[0] || '';
      
      // 获取SVG内容
      const svgContent = (svgFiles[key] as any).default;
      
      // 创建一个临时div来解析SVG内容
      const div = document.createElement('div');
      div.innerHTML = svgContent;
      
      // 获取SVG元素
      const svg = div.getElementsByTagName('svg')[0];
      
      if (svg) {
        // 创建symbol元素
        const symbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
        symbol.setAttribute('id', symbolId + fileName);
        symbol.setAttribute('viewBox', svg.getAttribute('viewBox') || '0 0 24 24');
        
        // 将SVG的内容节点添加到symbol中
        while (svg.childNodes.length > 0) {
          symbol.appendChild(svg.childNodes[0]);
        }
        
        // 将symbol添加到sprite容器
        svgSprite.appendChild(symbol);
      }
    });
    
    console.log('SVG图标加载完成，共加载', Object.keys(svgFiles).length, '个图标');
  } catch (error) {
    console.error('加载SVG图标出错:', error);
  }
}

/**
 * 导出SVG图标加载器
 */
export default {
  install(app: any) {
    loadAllIcons();
  }
}; 