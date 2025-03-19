<template>
  <div class="component-page">
    <HHolographicPanel :title="$t('button.title')" :subtitle="$t('button.subtitle')" class="mb-12">
      <div class="mb-4">
        <p class="text-ark-text-secondary">{{ $t('button.description') }}</p>
      </div>
      
      <HInfoPanel :title="$t('button.usage')" type="code">
        {{ $t('button.usageDescription') }}
      </HInfoPanel>
    </HHolographicPanel>

    <!-- 网格布局 3xn -->
    <div class="grid-layout">
      <!-- 基础按钮 -->
      <HTechPanel :title="$t('button.basic')" :subtitle="$t('button.basicDesc')" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('button.default') }}</h3>
            <div class="button-container">
              <Button>{{ $t('button.default') }}</Button>
              <Button variant="primary">{{ $t('button.primary') }}</Button>
              <Button variant="secondary">{{ $t('button.secondary') }}</Button>
              <Button variant="success">{{ $t('button.success') }}</Button>
              <Button variant="warning">{{ $t('button.warning') }}</Button>
              <Button variant="danger">{{ $t('button.danger') }}</Button>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 全息按钮 -->
      <HTechPanel :title="$t('button.holographic')" :subtitle="$t('button.holographicDesc')" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('button.holographicStyle') }}</h3>
            <div class="button-container">
              <Button holographic>{{ $t('button.holographic') }}</Button>
              <Button variant="primary" holographic>{{ $t('button.primary') }}</Button>
              <Button variant="secondary" holographic>{{ $t('button.secondary') }}</Button>
              <Button variant="success" holographic>{{ $t('button.success') }}</Button>
              <Button variant="warning" holographic>{{ $t('button.warning') }}</Button>
              <Button variant="danger" holographic>{{ $t('button.danger') }}</Button>
            </div>
          </div>
        </div>
      </HTechPanel>

      <!-- 带图标按钮 -->
      <HTechPanel :title="$t('button.withIcon')" :subtitle="$t('button.withIconDesc')" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('button.iconsAndButtons') }}</h3>
            <div class="button-container">
              <Button variant="primary">
                <InlineSvgIcon name="chip" :size="20" />
                <span class="ml-2">{{ $t('button.withChipIcon') }}</span>
              </Button>
              <Button variant="success">
                <InlineSvgIcon name="chip" :size="20" />
                <span class="ml-2">{{ $t('button.chip') }}</span>
              </Button>
              <Button variant="primary">
                <span class="ml-2">{{ $t('button.withChipIcon') }}</span>
                <InlineSvgIcon name="chip" :size="20" :position="'suffix'" />
              </Button>
              <Button variant="success">
                <span class="mr-2">{{ $t('button.chip') }}</span>
                <InlineSvgIcon name="chip" :size="20" :position="'suffix'" />
              </Button>
              <Button variant="cyber" holographic>
                <InlineSvgIcon name="chip" :size="20" :spacing="0"/>
              </Button>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 按钮尺寸 -->
      <HTechPanel :title="$t('button.size')" :subtitle="$t('button.sizeDesc')" variant="bordered">
        <div class="panel-content">
          <div class="flex flex-col space-y-6">
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('button.sizeComparison') }}</h3>
              <div class="button-container items-center">
                <Button variant="primary" size="small">{{ $t('switch.small') }}</Button>
                <Button variant="primary" size="medium">{{ $t('switch.medium') }}</Button>
                <Button variant="primary" size="large">{{ $t('switch.large') }}</Button>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('button.smallSize') }}</h3>
              <div class="button-container">
                <Button size="small">{{ $t('button.default') }}</Button>
                <Button variant="primary" size="small">{{ $t('button.primary') }}</Button>
                <Button variant="secondary" size="small">{{ $t('button.secondary') }}</Button>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('button.largeSize') }}</h3>
              <div class="button-container">
                <Button size="large">{{ $t('button.default') }}</Button>
                <Button variant="primary" size="large">{{ $t('button.primary') }}</Button>
                <Button variant="secondary" size="large">{{ $t('button.secondary') }}</Button>
              </div>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 禁用状态 -->
      <HTechPanel :title="$t('button.disabled')" :subtitle="$t('button.disabledDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <Button disabled>{{ $t('button.disabled') }}</Button>
            <Button variant="primary" disabled>{{ $t('button.disabledPrimary') }}</Button>
            <Button holographic disabled>{{ $t('button.disabledHolo') }}</Button>
          </div>
        </div>
      </HTechPanel>

      <!-- 加载状态 -->
      <HTechPanel :title="$t('button.loading')" :subtitle="$t('button.loadingButtonDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <Button loading>{{ $t('button.loading') }}</Button>
            <Button variant="primary" loading>{{ $t('button.loadingPrimary') }}</Button>
            <Button holographic loading>{{ $t('button.loadingHolo') }}</Button>
          </div>
        </div>
      </HTechPanel>

      <!-- 块级按钮 -->
      <HTechPanel :title="$t('button.block')" :subtitle="$t('button.blockDesc')" variant="bordered">
        <div class="panel-content">
          <div class="flex flex-col space-y-6">
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('button.fullWidth') }}</h3>
              <div class="flex flex-col space-y-4">
                <Button block>{{ $t('button.blockButton') }}</Button>
                <Button variant="primary" block>{{ $t('button.blockPrimary') }}</Button>
                <Button variant="secondary" holographic block>{{ $t('button.blockHolo') }}</Button>
              </div>
            </div>
          </div>
        </div>
      </HTechPanel>

      <!-- 动画按钮 -->
      <HTechPanel :title="$t('button.animated')" :subtitle="$t('button.animatedDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <Button animated>{{ $t('button.animated') }}</Button>
            <Button variant="primary" animated>{{ $t('button.animatedPrimary') }}</Button>
            <Button holographic animated>{{ $t('button.animatedHolo') }}</Button>
          </div>
        </div>
      </HTechPanel>

      <!-- 自定义类名 -->
      <HTechPanel :title="$t('button.customClass')" :subtitle="$t('button.customClassDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <Button customClass="custom-button-shadow">{{ $t('button.customShadow') }}</Button>
            <Button variant="primary" customClass="custom-button-border">{{ $t('button.customBorder') }}</Button>
            <Button customClass="custom-button-glow" holographic>{{ $t('button.customGlow') }}</Button>
          </div>
        </div>
      </HTechPanel>
    </div>
    
    <!-- 底部宽面板 -->
    <HTechPanel :title="$t('button.props')" variant="bordered" class="mt-8">
      <div class="p-4 overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-ark-border">
              <th class="text-left py-3 px-4 text-ark-accent">{{ $t('common.propName') }}</th>
              <th class="text-left py-3 px-4 text-ark-accent">{{ $t('common.propType') }}</th>
              <th class="text-left py-3 px-4 text-ark-accent">{{ $t('common.defaultValue') }}</th>
              <th class="text-left py-3 px-4 text-ark-accent">{{ $t('common.description') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">variant</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'default'</td>
              <td class="py-3 px-4">{{ $t('button.variantDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">size</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'medium'</td>
              <td class="py-3 px-4">{{ $t('button.sizeOptionDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">holographic</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('button.holographicDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">disabled</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('button.disabledPropDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">loading</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('button.loadingPropDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">block</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('button.blockDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">customClass</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">''</td>
              <td class="py-3 px-4">{{ $t('button.customClassDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">animated</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('button.animatedDesc') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HTechPanel>
  </div>
</template>

<script setup lang="ts">
import { Button } from '../../../../src/index';
import { InlineSvgIcon } from '../../../../src/components/icons';
</script>

<style scoped>
.component-page {
  width: 100%;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.panel-content {
  padding: 2rem;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: var(--ark-active, #22272E);
  padding: 1.5rem;
  border-radius: 6px;
}

.custom-button-shadow {
  box-shadow: 0 0 15px rgba(var(--ark-accent-rgb, 66, 153, 225), 0.5);
}

.custom-button-border {
  border: 2px solid var(--ark-accent, #4299E1);
}

.custom-button-glow {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px rgba(var(--ark-accent-rgb, 66, 153, 225), 0.2);
  }
  to {
    box-shadow: 0 0 20px rgba(var(--ark-accent-rgb, 66, 153, 225), 0.8);
  }
}

@media (max-width: 1200px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style> 