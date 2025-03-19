<template>
  <div class="component-page">
    <HHolographicPanel title="视觉组件" subtitle="高科技视觉效果组件集" class="mb-6">
      <div class="mb-4">
        <p class="text-ark-text-secondary">本章节包含多种全息风格的视觉组件，用于创建令人惊艳的高科技交互界面。</p>
      </div>
      
      <HInfoPanel title="使用说明" type="code">
        视觉组件使用了现代CSS技术构建，包括CSS变量、动画和滤镜，为您的应用程序带来未来感的视觉享受。
      </HInfoPanel>
    </HHolographicPanel>

    <!-- 全息动画组件 -->
    <div v-if="activeComponent === 'holographic-animation'">
      <HTechPanel title="全息动画组件" subtitle="实时动态特效" version="5.0.0" variant="elevated" class="mb-6">
        <div class="grid grid-cols-1 gap-8 p-8">
          <div class="flex flex-col items-center">
            <HolographicNfcAnimation />
            <span class="mt-4 text-ark-accent">NFC 全息可视化</span>
          </div>
        </div>
        
        <HInfoPanel title="组件说明" type="info" class="mt-4">
          全息NFC动画组件展示了一种高科技风格的NFC数据可视化效果，可用于展示NFC通信、数据传输或安全认证场景。
        </HInfoPanel>
      </HTechPanel>
      
      <HTechPanel title="使用方法" variant="bordered" class="mb-6">
        <div class="mb-4">
          <div class="font-mono bg-ark-active p-4 rounded-ark text-ark-text-secondary">
            <pre>&lt;HolographicNfcAnimation /&gt;</pre>
          </div>
        </div>
      </HTechPanel>
      
      <HTechPanel title="属性配置" variant="bordered">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-ark-border">
                <th class="text-left py-3 px-4 text-ark-accent">属性名</th>
                <th class="text-left py-3 px-4 text-ark-accent">类型</th>
                <th class="text-left py-3 px-4 text-ark-accent">默认值</th>
                <th class="text-left py-3 px-4 text-ark-accent">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">暂无可配置属性</td>
                <td class="py-3 px-4">-</td>
                <td class="py-3 px-4">-</td>
                <td class="py-3 px-4">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </HTechPanel>
    </div>

    <!-- 颜色标签组件 -->
    <div v-if="activeComponent === 'color-tag'">
      <HTechPanel title="颜色标签组件" subtitle="多彩标签系统" version="5.0.0" variant="elevated" class="mb-6">
        <div class="space-y-6 p-8">
          <div>
            <h3 class="text-lg font-medium text-ark-text mb-4">颜色变化</h3>
            <div class="flex flex-wrap gap-4 bg-ark-active p-6 rounded-ark">
              <ColorTag 
                v-for="i in 10" 
                :key="i"
                :text="`标签 ${i}`"
                :color-index="i-1"
                :theme="currentTheme"
              />
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-ark-text mb-4">主题效果</h3>
            <div class="flex flex-wrap gap-4 bg-ark-active p-6 rounded-ark">
              <ColorTag 
                v-for="i in 5" 
                :key="i"
                :text="`全息标签 ${i}`"
                :color-index="i-1"
              />
            </div>
          </div>
        </div>
        
        <HInfoPanel title="组件说明" type="info" class="mt-4">
          颜色标签组件提供了一系列预设颜色的标签，可用于分类、标记和状态显示。
        </HInfoPanel>
      </HTechPanel>
      
      <HTechPanel title="使用方法" variant="bordered" class="mb-6">
        <div class="mb-4">
          <div class="font-mono bg-ark-active p-4 rounded-ark text-ark-text-secondary">
            <pre>&lt;ColorTag text="标签文本" color-index="0" theme="ark" /&gt;</pre>
          </div>
        </div>
      </HTechPanel>
      
      <HTechPanel title="属性配置" variant="bordered">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-ark-border">
                <th class="text-left py-3 px-4 text-ark-accent">属性名</th>
                <th class="text-left py-3 px-4 text-ark-accent">类型</th>
                <th class="text-left py-3 px-4 text-ark-accent">默认值</th>
                <th class="text-left py-3 px-4 text-ark-accent">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">text</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">''</td>
                <td class="py-3 px-4">标签文本内容</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">color-index</td>
                <td class="py-3 px-4">Number</td>
                <td class="py-3 px-4">0</td>
                <td class="py-3 px-4">颜色索引(0-9)</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">theme</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">'ark'</td>
                <td class="py-3 px-4">主题样式</td>
              </tr>
            </tbody>
          </table>
        </div>
      </HTechPanel>
    </div>

    <!-- 终端输出组件 -->
    <div v-if="activeComponent === 'terminal-output'">
      <HTechPanel title="终端输出组件" subtitle="命令行界面模拟" version="5.0.0" variant="elevated" class="mb-6">
        <div class="p-8">
          <TerminalOutput :lines="terminalLines" animationSpeed="30" />
        </div>
        
        <HInfoPanel title="组件说明" type="info" class="mt-4">
          终端输出组件模拟了命令行界面的打字效果，适合展示代码、命令执行过程和系统消息。
        </HInfoPanel>
      </HTechPanel>
      
      <HTechPanel title="使用方法" variant="bordered" class="mb-6">
        <div class="mb-4">
          <div class="font-mono bg-ark-active p-4 rounded-ark text-ark-text-secondary">
            <pre>&lt;TerminalOutput :lines="terminalLines" animationSpeed="30" /&gt;</pre>
          </div>
        </div>
      </HTechPanel>
      
      <HTechPanel title="属性配置" variant="bordered">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-ark-border">
                <th class="text-left py-3 px-4 text-ark-accent">属性名</th>
                <th class="text-left py-3 px-4 text-ark-accent">类型</th>
                <th class="text-left py-3 px-4 text-ark-accent">默认值</th>
                <th class="text-left py-3 px-4 text-ark-accent">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">lines</td>
                <td class="py-3 px-4">Array</td>
                <td class="py-3 px-4">[]</td>
                <td class="py-3 px-4">要显示的文本行数组</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">animationSpeed</td>
                <td class="py-3 px-4">Number</td>
                <td class="py-3 px-4">30</td>
                <td class="py-3 px-4">字符显示速度(ms)</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">prefix</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">'$ '</td>
                <td class="py-3 px-4">命令前缀</td>
              </tr>
            </tbody>
          </table>
        </div>
      </HTechPanel>
    </div>

    <!-- 加载动画组件 -->
    <div v-if="activeComponent === 'loading-animation'">
      <HTechPanel title="加载动画组件" subtitle="多种加载样式" version="5.0.0" variant="elevated" class="mb-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div v-for="variant in loadingVariants" :key="variant" class="flex flex-col items-center">
            <LoadingAnimation 
              theme="ark" 
              :variant="variant" 
              size="100" 
            />
            <span class="mt-4 text-ark-accent">{{ variant }} 样式</span>
          </div>
          
          <div class="flex flex-col items-center">
            <LoadingAnimation 
              theme="ark" 
              variant="holographic" 
              size="100"
              showDataStream
            />
            <span class="mt-4 text-ark-accent">全息数据流效果</span>
          </div>
          
          <div class="flex flex-col items-center">
            <LoadingAnimation 
              theme="ark" 
              variant="holographic" 
              size="100"
              title="LOADING"
              showProgress
              :messages="loadingMessages"
            />
            <span class="mt-4 text-ark-accent">带标题和进度</span>
          </div>
        </div>
        
        <HInfoPanel title="组件说明" type="info" class="mt-4">
          加载动画组件提供了多种风格的加载动画，包括默认旋转、点状、脉冲、全息和条形等多种样式。
        </HInfoPanel>
      </HTechPanel>
      
      <HTechPanel title="使用方法" variant="bordered" class="mb-6">
        <div class="mb-4">
          <div class="font-mono bg-ark-active p-4 rounded-ark text-ark-text-secondary">
            <pre>&lt;LoadingAnimation theme="ark" variant="holographic" size="100" /&gt;</pre>
          </div>
        </div>
      </HTechPanel>
      
      <HTechPanel title="属性配置" variant="bordered">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-ark-border">
                <th class="text-left py-3 px-4 text-ark-accent">属性名</th>
                <th class="text-left py-3 px-4 text-ark-accent">类型</th>
                <th class="text-left py-3 px-4 text-ark-accent">默认值</th>
                <th class="text-left py-3 px-4 text-ark-accent">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">theme</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">'ark'</td>
                <td class="py-3 px-4">主题样式</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">variant</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">'default'</td>
                <td class="py-3 px-4">动画变体(default, dots, pulse, holographic, bars, text)</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">size</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">'48'</td>
                <td class="py-3 px-4">尺寸大小(px or %)</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">title</td>
                <td class="py-3 px-4">String</td>
                <td class="py-3 px-4">''</td>
                <td class="py-3 px-4">标题文本</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">messages</td>
                <td class="py-3 px-4">Array</td>
                <td class="py-3 px-4">[]</td>
                <td class="py-3 px-4">消息列表</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">showProgress</td>
                <td class="py-3 px-4">Boolean</td>
                <td class="py-3 px-4">false</td>
                <td class="py-3 px-4">是否显示进度条</td>
              </tr>
              <tr class="border-b border-ark-border">
                <td class="py-3 px-4">showDataStream</td>
                <td class="py-3 px-4">Boolean</td>
                <td class="py-3 px-4">false</td>
                <td class="py-3 px-4">是否显示数据流效果</td>
              </tr>
            </tbody>
          </table>
        </div>
      </HTechPanel>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  activeComponent: {
    type: String,
    required: true
  },
  currentTheme: {
    type: String,
    default: 'ark'
  }
});

// Terminal output demo data
const terminalLines = [
  '> Welcome to Holographic Terminal',
  '> Initializing system...',
  '> Loading security modules',
  '> Connecting to NFC interface',
  'Connected successfully!',
  '> scan --device',
  'Found 2 NFC devices nearby',
  '> select --device 1',
  'Device selected: ISO14443-A / MIFARE Classic 1K',
  '> status',
  'STATUS: Ready for operations',
  '> _'
];

// Loading animation variants
const loadingVariants = ['default', 'dots', 'pulse', 'bars', 'text'];

// Loading messages for demo
const loadingMessages = [
  'Initializing system...',
  'Loading modules...',
  'Connecting to server...',
  'Ready'
];
</script>

<style scoped>
.component-page {
  @apply max-w-full;
}
</style> 