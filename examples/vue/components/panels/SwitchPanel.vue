<template>
  <div class="component-page">
    <HHolographicPanel :title="$t('switch.title')" :subtitle="$t('switch.subtitle')" class="mb-12">
      <div class="mb-4">
        <p class="text-ark-text-secondary">{{ $t('switch.description') }}</p>
      </div>
      
      <HInfoPanel :title="$t('switch.usage')" type="code">
        {{ $t('switch.usageDescription') }}
      </HInfoPanel>
    </HHolographicPanel>

    <!-- 网格布局 3xn -->
    <div class="grid-layout">
      <!-- 基础开关 -->
      <HTechPanel :title="$t('switch.basic')" :subtitle="$t('switch.basicDesc')" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.default') }}</h3>
            <div class="button-container">
              <div class="flex flex-col items-center">
                <Switch v-model="switchState1" />
                <span class="mt-2 text-ark-text-secondary">{{ switchState1 ? $t('switch.active') : $t('switch.inactive') }}</span>
              </div>
              <div class="flex flex-col items-center">
                <Switch v-model="switchState2" variant="primary" />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.primary') }}</span>
              </div>
              <div class="flex flex-col items-center">
                <Switch v-model="switchState3" variant="secondary" />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.secondary') }}</span>
              </div>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 全息开关 -->
      <HTechPanel :title="$t('switch.holographic')" :subtitle="$t('switch.holographicDesc')" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.holographicStyle') }}</h3>
            <div class="button-container">
              <div class="flex flex-col items-center">
                <Switch v-model="holoState1" holographic />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.default') }}</span>
              </div>
              <div class="flex flex-col items-center">
                <Switch v-model="holoState2" holographic variant="primary" />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.primary') }}</span>
              </div>
              <div class="flex flex-col items-center">
                <Switch v-model="holoState3" holographic variant="secondary" />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.secondary') }}</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.glowEffect') }}</h3>
            <div class="button-container">
              <div class="flex flex-col items-center">
                <Switch v-model="animState1" holographic animated />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.default') }}</span>
              </div>
              <div class="flex flex-col items-center">
                <Switch v-model="animState2" holographic animated variant="primary" />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.primary') }}</span>
              </div>
              <div class="flex flex-col items-center">
                <Switch v-model="animState3" holographic animated variant="secondary" />
                <span class="mt-2 text-ark-text-secondary">{{ $t('switch.secondary') }}</span>
              </div>
            </div>
          </div>
        </div>
      </HTechPanel>

      <!-- 开关尺寸 -->
      <HTechPanel :title="$t('switch.size')" :subtitle="$t('switch.sizeDesc')" variant="bordered">
        <div class="panel-content">
          <div class="flex flex-col space-y-6">
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.sizeComparison') }}</h3>
              <div class="button-container items-center">
                <div class="flex flex-col items-center">
                  <Switch v-model="sizeState1" size="small" />
                  <span class="mt-2 text-ark-text-secondary">{{ $t('switch.small') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <Switch v-model="sizeState2" size="medium" />
                  <span class="mt-2 text-ark-text-secondary">{{ $t('switch.medium') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <Switch v-model="sizeState3" size="large" />
                  <span class="mt-2 text-ark-text-secondary">{{ $t('switch.large') }}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.holographicStyle') }}</h3>
              <div class="button-container items-center">
                <div class="flex flex-col items-center">
                  <Switch v-model="holoSizeState1" size="small" holographic />
                  <span class="mt-2 text-ark-text-secondary">{{ $t('switch.small') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <Switch v-model="holoSizeState2" size="medium" holographic />
                  <span class="mt-2 text-ark-text-secondary">{{ $t('switch.medium') }}</span>
                </div>
                <div class="flex flex-col items-center">
                  <Switch v-model="holoSizeState3" size="large" holographic />
                  <span class="mt-2 text-ark-text-secondary">{{ $t('switch.large') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 禁用状态 -->
      <HTechPanel :title="$t('switch.disabled')" :subtitle="$t('switch.disabledDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <div class="flex flex-col items-center">
              <Switch disabled />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.inactive') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch disabled modelValue />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.active') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch disabled holographic />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.holographic') }}</span>
            </div>
          </div>
        </div>
      </HTechPanel>

      <!-- 加载状态 -->
      <HTechPanel :title="$t('switch.loading')" :subtitle="$t('switch.loadingButtonDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <div class="flex flex-col items-center">
              <Switch loading />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.loading') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch loading modelValue />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.loadingActive') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch loading holographic />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.loadingHolo') }}</span>
            </div>
          </div>
        </div>
      </HTechPanel>

      <!-- 带标签开关 -->
      <HTechPanel :title="$t('switch.withLabel')" :subtitle="$t('switch.withLabelDesc')" variant="bordered">
        <div class="panel-content">
          <div class="flex flex-col space-y-6">
            <div>
              <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.labelPosition') }}</h3>
              <div class="flex flex-col space-y-4">
                <div class="flex items-center">
                  <Switch v-model="labelState1" :label="$t('switch.defaultLabel')" />
                </div>
                <div class="flex items-center justify-end">
                  <Switch v-model="labelState2" :label="$t('switch.primaryLabel')" variant="primary" />
                </div>
                <div class="flex items-center">
                  <Switch v-model="labelState3" :label="$t('switch.holographicLabel')" holographic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 自定义样式 -->
      <HTechPanel :title="$t('switch.customClass')" :subtitle="$t('switch.customClassDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <div class="flex flex-col items-center">
              <Switch v-model="customState1" customClass="custom-switch-shadow" />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.customShadow') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch v-model="customState2" customClass="custom-switch-border" variant="primary" />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.customBorder') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch v-model="customState3" customClass="custom-switch-glow" holographic />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.customGlow') }}</span>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 开关形状 -->
      <HTechPanel :title="$t('switch.shape')" :subtitle="$t('switch.shapeDesc')" variant="bordered">
        <div class="panel-content">
          <div class="button-container">
            <div class="flex flex-col items-center">
              <Switch v-model="shapeState1" />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.defaultShape') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch v-model="shapeState2" customClass="rounded-md" />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.square') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch v-model="shapeState3" customClass="rounded-full" />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.pill') }}</span>
            </div>
          </div>
        </div>
      </HTechPanel>
    </div>
    
    <!-- 底部宽面板 -->
    <HTechPanel :title="$t('switch.props')" variant="bordered" class="mt-8">
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
              <td class="py-3 px-4">modelValue</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.activeDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">size</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'medium'</td>
              <td class="py-3 px-4">{{ $t('switch.sizeOptionDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">variant</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'default'</td>
              <td class="py-3 px-4">{{ $t('switch.variantDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">theme</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'ark'</td>
              <td class="py-3 px-4">{{ $t('switch.themeDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">disabled</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.disabledDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">loading</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.loadingDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">label</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">''</td>
              <td class="py-3 px-4">{{ $t('switch.labelDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">checkedIcon</td>
              <td class="py-3 px-4">Component</td>
              <td class="py-3 px-4">undefined</td>
              <td class="py-3 px-4">{{ $t('switch.checkedIconDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">uncheckedIcon</td>
              <td class="py-3 px-4">Component</td>
              <td class="py-3 px-4">undefined</td>
              <td class="py-3 px-4">{{ $t('switch.uncheckedIconDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">customClass</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">''</td>
              <td class="py-3 px-4">{{ $t('switch.customClassDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">holographic</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.holographicPropDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">animated</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.animatedDesc') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HTechPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '../../../../src/index';

// 基础开关状态
const switchState1 = ref(false);
const switchState2 = ref(true);
const switchState3 = ref(false);

// 全息开关状态
const holoState1 = ref(false);
const holoState2 = ref(true);
const holoState3 = ref(false);

// 动画开关状态
const animState1 = ref(true);
const animState2 = ref(true);
const animState3 = ref(true);

// 尺寸开关状态
const sizeState1 = ref(true);
const sizeState2 = ref(true);
const sizeState3 = ref(true);
const holoSizeState1 = ref(true);
const holoSizeState2 = ref(true);
const holoSizeState3 = ref(true);

// 标签开关状态
const labelState1 = ref(false);
const labelState2 = ref(true);
const labelState3 = ref(false);

// 自定义开关状态
const customState1 = ref(true);
const customState2 = ref(true);
const customState3 = ref(true);

// 形状开关状态
const shapeState1 = ref(true);
const shapeState2 = ref(true);
const shapeState3 = ref(true);
</script>

<style scoped>
.component-page {
  width: 100%;
}

.grid-layout {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.panel-content {
  @apply p-6 space-y-8;
}

.button-container {
  @apply flex flex-wrap gap-6 bg-ark-active p-6 rounded-ark;
}

/* 自定义开关样式 */
.custom-switch-shadow :deep(.h-switch) {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.custom-switch-border :deep(.h-switch) {
  @apply border-2 border-ark-accent;
}

.custom-switch-glow :deep(.h-switch-checked) {
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.8);
}
</style> 