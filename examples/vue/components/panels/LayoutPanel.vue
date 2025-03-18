<template>
  <div class="component-panel">
    <div class="component-title">
      <h3>{{ $t('layout.title') }}</h3>
      <span class="component-version">5.0.0</span>
    </div>

    <!-- Divider 分割线 -->
    <div class="demo-section" v-if="activeComponent === 'divider'">
      <div class="component-subtitle">{{ $t('layout.divider.title') }}</div>
      
      <div class="space-y-8">
        <div>
          <p class="mb-2">{{ $t('layout.divider.default') }}</p>
          <Divider :theme="currentTheme" />
        </div>
        
        <div>
          <p class="mb-2">{{ $t('layout.divider.dashed') }}</p>
          <Divider :theme="currentTheme" dashed />
        </div>
        
        <div>
          <p class="mb-2">{{ $t('layout.divider.withText') }}</p>
          <Divider :theme="currentTheme">{{ $t('layout.divider.textDivider') }}</Divider>
        </div>
        
        <div>
          <p class="mb-2">{{ $t('layout.divider.holographic') }}</p>
          <Divider :theme="currentTheme" holographic>{{ $t('layout.divider.holographicEffect') }}</Divider>
        </div>
        
        <div>
          <p class="mb-2">{{ $t('layout.divider.themes') }}</p>
          <div class="space-y-4">
            <Divider>{{ $t('layout.divider.arkTheme') }}</Divider>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 卡片 -->
    <div class="demo-section" v-if="activeComponent === 'card'">
      <div class="component-subtitle">{{ $t('layout.card.title') }}</div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card 
          variant="default"
          title="Default Card"
          description="This is a default card component"
        >
          <div class="p-4">
            <p>Card content goes here.</p>
          </div>
        </Card>
        
        <Card 
          variant="filled"
          title="Filled Card"
          description="This is a filled card component"
        >
          <div class="p-4">
            <p>Card content goes here.</p>
          </div>
        </Card>
        
        <Card 
          variant="outlined"
          title="Outlined Card"
          description="This is an outlined card component"
        >
          <div class="p-4">
            <p>Card content goes here.</p>
          </div>
        </Card>
      </div>
      
      <div class="mt-6">
        <Card 
          variant="default"
          title="Holographic Card"
          description="This card has a holographic effect"
          holographic
        >
          <div class="p-4">
            <p>Card with holographic effect.</p>
          </div>
        </Card>
      </div>
    </div>

    <!-- Grid 网格 -->
    <div class="demo-section" v-if="activeComponent === 'grid'">
      <div class="component-subtitle">{{ $t('layout.grid.title') }}</div>
      
      <div class="space-y-6">
        <div>
          <p class="mb-2">Basic Grid (2 columns)</p>
          <Grid cols="2" gap="4">
            <div class="bg-gray-800 p-4 rounded">Column 1</div>
            <div class="bg-gray-800 p-4 rounded">Column 2</div>
          </Grid>
        </div>
        
        <div>
          <p class="mb-2">Responsive Grid</p>
          <Grid 
            cols="{ base: 1, sm: 2, md: 3, lg: 4 }" 
            gap="4"
          >
            <div class="bg-gray-800 p-4 rounded">Column 1</div>
            <div class="bg-gray-800 p-4 rounded">Column 2</div>
            <div class="bg-gray-800 p-4 rounded">Column 3</div>
            <div class="bg-gray-800 p-4 rounded">Column 4</div>
          </Grid>
        </div>
        
        <div>
          <p class="mb-2">Grid with Different Gaps</p>
          <Grid 
            cols="3" 
            rowGap="8"
            colGap="4"
          >
            <div class="bg-gray-800 p-4 rounded">Column 1</div>
            <div class="bg-gray-800 p-4 rounded">Column 2</div>
            <div class="bg-gray-800 p-4 rounded">Column 3</div>
            <div class="bg-gray-800 p-4 rounded">Column 4</div>
            <div class="bg-gray-800 p-4 rounded">Column 5</div>
            <div class="bg-gray-800 p-4 rounded">Column 6</div>
          </Grid>
        </div>
      </div>
    </div>

    <!-- Container 容器 -->
    <div class="demo-section" v-if="activeComponent === 'container'">
      <div class="component-subtitle">{{ $t('layout.container.title') }}</div>
      
      <div class="space-y-6">
        <div>
          <p class="mb-2">Default Container</p>
          <Container :theme="currentTheme">
            <div class="p-4 bg-gray-800 rounded">
              <p>This is a default container.</p>
            </div>
          </Container>
        </div>
        
        <div>
          <p class="mb-2">Fluid Container</p>
          <Container :theme="currentTheme" fluid>
            <div class="p-4 bg-gray-800 rounded">
              <p>This is a fluid container that takes full width.</p>
            </div>
          </Container>
        </div>
        
        <div>
          <p class="mb-2">Centered Container</p>
          <Container :theme="currentTheme" centered>
            <div class="p-4 bg-gray-800 rounded">
              <p>This is a centered container.</p>
            </div>
          </Container>
        </div>
        
        <div>
          <p class="mb-2">Holographic Container</p>
          <Container :theme="currentTheme" holographic>
            <div class="p-4">
              <p>This container has a holographic effect.</p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Divider, Card, Grid, Container } from '../../../../src/index';

defineProps<{
  currentTheme: 'ark';
  activeComponent: 'divider' | 'card' | 'grid' | 'container';
}>();
</script>

<style scoped>
.component-panel {
  @apply bg-gray-900 text-white rounded-lg border border-gray-800 overflow-hidden;
}

.component-title {
  @apply flex justify-between items-center px-6 py-4 border-b border-gray-800;
}

.component-title h3 {
  @apply text-xl font-medium;
}

.component-version {
  @apply text-xs py-0.5 px-1.5 rounded bg-blue-950 text-blue-400;
}

.component-subtitle {
  @apply text-sm font-medium text-gray-300 mb-2;
}

.demo-section {
  @apply px-6 py-4 border-b border-gray-800;
}

.demo-section:last-child {
  @apply border-0;
}
</style> 