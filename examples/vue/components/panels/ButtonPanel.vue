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

    <!-- 网格布局 2x2 -->
    <div class="grid-layout">
      <!-- 基础按钮 -->
      <HTechPanel :title="$t('button.basic')" :subtitle="$t('button.basicDesc')" version="5.0.0" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('button.default') }}</h3>
            <div class="button-container">
              <Button>{{ $t('button.default') }}</Button>
              <Button variant="primary">{{ $t('button.primary') }}</Button>
              <Button variant="secondary">{{ $t('button.success') }}</Button>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 全息按钮 -->
      <HTechPanel :title="$t('button.holographic')" :subtitle="$t('button.holographicDesc')" version="5.0.0" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('button.holographicStyle') }}</h3>
            <div class="button-container">
              <Button holographic>{{ $t('button.holographic') }}</Button>
              <Button variant="primary" holographic>{{ $t('button.primary') }}</Button>
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
                <Button variant="secondary" size="small">{{ $t('button.success') }}</Button>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('button.largeSize') }}</h3>
              <div class="button-container">
                <Button size="large">{{ $t('button.default') }}</Button>
                <Button variant="primary" size="large">{{ $t('button.primary') }}</Button>
                <Button variant="secondary" size="large">{{ $t('button.success') }}</Button>
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
</script>

<style scoped>
.component-page {
  width: 100%;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

@media (max-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style> 