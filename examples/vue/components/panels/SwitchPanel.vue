<template>
  <div class="component-page">
    <HHolographicPanel :title="$t('switch.title')" :subtitle="$t('switch.subtitle')" class="mb-6">
      <div class="mb-4">
        <p class="text-ark-text-secondary">{{ $t('switch.description') }}</p>
      </div>
      
      <HInfoPanel :title="$t('switch.usage')" type="code">
        {{ $t('switch.usageDescription') }}
      </HInfoPanel>
    </HHolographicPanel>

    <!-- 基础开关 -->
    <HTechPanel :title="$t('switch.basic')" :subtitle="$t('switch.basicDesc')" version="5.0.0" variant="elevated" class="mb-6">
      <div class="p-8 space-y-8">
        <div>
          <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.default') }}</h3>
          <div class="flex items-center flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
            <div class="flex flex-col items-center">
              <Switch />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.inactive') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch active />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.active') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch disabled />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.disabled') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch active disabled />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.disabledActive') }}</span>
            </div>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 全息开关 -->
    <HTechPanel :title="$t('switch.holographic')" :subtitle="$t('switch.holographicDesc')" version="5.0.0" variant="elevated" class="mb-6">
      <div class="p-8 space-y-8">
        <div>
          <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.holographicStyle') }}</h3>
          <div class="flex items-center flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
            <div class="flex flex-col items-center">
              <Switch holographic />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.inactive') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch holographic active />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.active') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch holographic disabled />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.disabled') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch holographic active disabled />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.disabledActive') }}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg text-ark-text mb-4">{{ $t('switch.glowEffect') }}</h3>
          <div class="flex items-center flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
            <div class="flex flex-col items-center">
              <Switch holographic animated />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.inactive') }}</span>
            </div>
            <div class="flex flex-col items-center">
              <Switch holographic animated active />
              <span class="mt-2 text-ark-text-secondary">{{ $t('switch.active') }}</span>
            </div>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 开关尺寸 -->
    <HTechPanel :title="$t('switch.size')" :subtitle="$t('switch.sizeDesc')" variant="bordered" class="mb-6">
      <div class="p-8">
        <div class="flex items-center flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
          <div class="flex flex-col items-center">
            <Switch size="small" active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.small') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch size="medium" active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.medium') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch size="large" active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.large') }}</span>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 开关类型 -->
    <HTechPanel :title="$t('switch.type')" :subtitle="$t('switch.typeDesc')" variant="bordered" class="mb-6">
      <div class="p-8">
        <div class="flex flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
          <div class="flex flex-col items-center">
            <Switch active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.default') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch variant="primary" active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.primary') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch variant="secondary" active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.secondary') }}</span>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 开关形状 -->
    <HTechPanel :title="$t('switch.shape')" :subtitle="$t('switch.shapeDesc')" variant="bordered" class="mb-6">
      <div class="p-8">
        <div class="flex flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
          <div class="flex flex-col items-center">
            <Switch active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.defaultShape') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch active customClass="rounded-none" />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.square') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch active customClass="rounded-full" />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.pill') }}</span>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 带文字开关 -->
    <HTechPanel :title="$t('switch.text')" :subtitle="$t('switch.textDesc')" variant="bordered" class="mb-6">
      <div class="p-8">
        <div class="flex flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
          <div class="flex items-center gap-2">
            <span class="text-ark-text-secondary">{{ $t('switch.inactive') }}</span>
            <Switch />
            <span class="text-ark-text-secondary">{{ $t('switch.active') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-ark-text-secondary">OFF</span>
            <Switch active />
            <span class="text-ark-text-secondary">ON</span>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 带图标开关 -->
    <HTechPanel :title="$t('switch.icon')" :subtitle="$t('switch.iconDesc')" variant="bordered" class="mb-6">
      <div class="p-8">
        <div class="flex flex-wrap gap-8 bg-ark-active p-6 rounded-ark">
          <div class="flex flex-col items-center">
            <Switch />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.inactive') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch active />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.active') }}</span>
          </div>
          <div class="flex flex-col items-center">
            <Switch holographic />
            <span class="mt-2 text-ark-text-secondary">{{ $t('switch.holographic') }}</span>
          </div>
        </div>
      </div>
    </HTechPanel>
    
    <!-- 属性配置 -->
    <HTechPanel :title="$t('switch.props')" variant="bordered">
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
              <td class="py-3 px-4">active</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.activeDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">disabled</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('switch.disabledDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">variant</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'default'</td>
              <td class="py-3 px-4">{{ $t('switch.variantDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">size</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'medium'</td>
              <td class="py-3 px-4">{{ $t('switch.sizeOptionDesc') }}</td>
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
import { Switch } from '../../../../src/index';
</script>

<style scoped>
.component-page {
  @apply max-w-full;
}
</style> 