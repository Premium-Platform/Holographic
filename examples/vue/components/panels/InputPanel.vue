<template>
  <div class="component-page">
    <HHolographicPanel :title="$t('input.title')" :subtitle="$t('input.subtitle')" class="mb-12">
      <div class="mb-4">
        <p class="text-ark-text-secondary">{{ $t('input.description') }}</p>
      </div>
      
      <HInfoPanel :title="$t('input.usage')" type="code">
        {{ $t('input.usageDescription') }}
      </HInfoPanel>
    </HHolographicPanel>

    <!-- 网格布局 3xn -->
    <div class="grid-layout">
      <!-- 基础输入框 -->
      <HTechPanel :title="$t('input.basic')" :subtitle="$t('input.basicDesc')" version="5.0.0" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('input.default') }}</h3>
            <div class="input-container">
              <Input :placeholder="$t('input.defaultPlaceholder')" />
              <Input :placeholder="$t('input.disabledPlaceholder')" disabled />
              <Input :placeholder="$t('input.prefixPlaceholder')" />
              <Input :placeholder="$t('input.suffixPlaceholder')" />
              <Input :placeholder="$t('input.clearablePlaceholder')" clearable />
              <Input type="password" :placeholder="$t('input.passwordPlaceholder')" />
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 全息输入框 -->
      <HTechPanel :title="$t('input.holographic')" :subtitle="$t('input.holographicDesc')" version="5.0.0" variant="elevated">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('input.holographicStyle') }}</h3>
            <div class="input-container">
              <Input :placeholder="$t('input.holographicPlaceholder')" holographic />
              <Input :placeholder="$t('input.glowPlaceholder')" holographic animated />
              <Input :placeholder="$t('input.successPlaceholder')" holographic status="success" />
              <Input :placeholder="$t('input.errorPlaceholder')" holographic status="error" animated />
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 输入框尺寸 -->
      <HTechPanel :title="$t('input.size')" :subtitle="$t('input.sizeDesc')" variant="bordered">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('input.sizeComparison') }}</h3>
            <div class="input-container items-center">
              <Input :placeholder="$t('input.xsPlaceholder')" size="small" />
              <Input :placeholder="$t('input.mdPlaceholder')" size="medium" />
              <Input :placeholder="$t('input.lgPlaceholder')" size="large" />
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 组合输入框 -->
      <HTechPanel :title="$t('input.combination')" :subtitle="$t('input.combinationDesc')" variant="bordered">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('input.combinationTitle') }}</h3>
            <div class="input-container">
              <Input :placeholder="$t('input.prefixTemplate')">
                <template #prefix>
                  <i class="ri-user-line"></i>
                </template>
              </Input>
              <Input :placeholder="$t('input.suffixTemplate')">
                <template #suffix>
                  <i class="ri-search-line"></i>
                </template>
              </Input>
              <Input :placeholder="$t('input.bothTemplate')">
                <template #prefix>
                  <i class="ri-mail-line"></i>
                </template>
                <template #suffix>
                  <i class="ri-arrow-right-line"></i>
                </template>
              </Input>
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 状态输入框 -->
      <HTechPanel :title="$t('input.status')" :subtitle="$t('input.statusDesc')" variant="bordered">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('input.statusTitle') }}</h3>
            <div class="input-container">
              <Input :placeholder="$t('input.successStatus')" status="success" />
              <Input :placeholder="$t('input.warningStatus')" status="warning" />
              <Input :placeholder="$t('input.errorStatus')" status="error" />
              <Input :placeholder="$t('input.loadingStatus')" loading />
            </div>
          </div>
        </div>
      </HTechPanel>
      
      <!-- 文本域 -->
      <HTechPanel :title="$t('input.textarea')" :subtitle="$t('input.textareaDesc')" variant="bordered">
        <div class="panel-content">
          <div>
            <h3 class="text-lg text-ark-text mb-4">{{ $t('input.textareaTitle') }}</h3>
            <div class="input-container flex-col">
              <Input type="textarea" :placeholder="$t('input.textareaPlaceholder')" />
              <Input type="textarea" :placeholder="$t('input.holographicTextarea')" holographic />
              <Input type="textarea" :placeholder="$t('input.autoResizeTextarea')" auto-size />
            </div>
          </div>
        </div>
      </HTechPanel>
    </div>
    
    <!-- 属性配置 -->
    <HTechPanel :title="$t('input.props')" variant="bordered" class="mt-8">
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
              <td class="py-3 px-4">type</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'text'</td>
              <td class="py-3 px-4">{{ $t('input.typeDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">variant</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'default'</td>
              <td class="py-3 px-4">{{ $t('input.variantDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">size</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">'medium'</td>
              <td class="py-3 px-4">{{ $t('input.sizeOptionDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">placeholder</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">''</td>
              <td class="py-3 px-4">{{ $t('input.placeholderDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">value</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">''</td>
              <td class="py-3 px-4">{{ $t('input.valueDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">disabled</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.disabledDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">readonly</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.readonlyDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">clearable</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.clearableDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">status</td>
              <td class="py-3 px-4">String</td>
              <td class="py-3 px-4">''</td>
              <td class="py-3 px-4">{{ $t('input.statusDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">holographic</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.holographicPropDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">animated</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.animatedDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">loading</td>
              <td class="py-3 px-4">Boolean</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.loadingDesc') }}</td>
            </tr>
            <tr class="border-b border-ark-border">
              <td class="py-3 px-4">auto-size</td>
              <td class="py-3 px-4">Boolean/Object</td>
              <td class="py-3 px-4">false</td>
              <td class="py-3 px-4">{{ $t('input.autoSizeDesc') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HTechPanel>
  </div>
</template>

<script setup lang="ts">
import { Input } from '../../../../src/index';
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

.input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: var(--ark-active, #22272E);
  padding: 1.5rem;
  border-radius: 6px;
}

/* 对于文本域类型的特殊处理 */
.input-container.flex-col {
  flex-direction: column;
}

.input-container.flex-col > * {
  max-width: 100%;
  width: 100%;
}

.input-container > * {
  width: calc(50% - 0.75rem);
  max-width: 300px;
}

@media (max-width: 1200px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .input-container > * {
    width: 100%;
    max-width: none;
  }
}

@media (max-width: 768px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style> 