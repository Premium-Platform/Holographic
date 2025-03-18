# Holographic Component Library User Guide

## Introduction

Holographic is a modern holographic-style component library based on TailwindCSS, supporting both Vue and React frameworks. It provides three theme styles: Ark (modern dark UI), Hacker (hacker style), and Neon (cyberpunk style), allowing you to easily create futuristic user interfaces.

## Installation

```bash
# npm
npm install holographic

# yarn
yarn add holographic

# pnpm
pnpm add holographic
```

## Quick Start

### Vue

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import Holographic from 'holographic'
import 'holographic/dist/style.css'

const app = createApp(App)
app.use(Holographic)
app.mount('#app')
```

### React

```jsx
// App.jsx
import { Button, Card } from 'holographic/react'
import 'holographic/dist/style.css'

function App() {
  return (
    <div>
      <Button variant="primary" holographic>Click Me</Button>
      <Card theme="neon">Holographic card content</Card>
    </div>
  )
}
```

## Themes

Holographic provides three theme styles that can be set using the `theme` attribute:

- **Ark**: Modern dark UI, suitable for enterprise applications
- **Hacker**: Hacker style with green terminal effects
- **Neon**: Cyberpunk style with neon glow effects

```vue
<Button theme="ark">Ark Button</Button>
<Button theme="hacker">Hacker Button</Button>
<Button theme="neon">Neon Button</Button>
```

## Holographic Effects

Most components support holographic effects, which can be enabled using the `holographic` attribute:

```vue
<Button holographic>Holographic Button</Button>
<Card holographic>Holographic Card</Card>
<Input holographic>Holographic Input</Input>
```

## Components

### Basic Components

#### Button

Buttons are used to trigger actions.

```vue
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="success">Success Button</Button>
<Button variant="danger">Danger Button</Button>
<Button variant="warning">Warning Button</Button>
<Button variant="ghost">Ghost Button</Button>

<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>

<Button loading>Loading Button</Button>
<Button disabled>Disabled Button</Button>
<Button holographic>Holographic Button</Button>
```

#### Input

Used to get user text input.

```vue
<Input v-model="value" placeholder="Please enter content" />
<Input label="Username" />
<Input type="password" placeholder="Please enter password" />
<Input v-model="value" clearable />
<Input v-model="value" disabled />
<Input v-model="value" holographic />
<Input v-model="value" error="Invalid input" />
<Input v-model="value" size="small" />
<Input v-model="value" theme="neon" />
```

#### Switch

Used to toggle between two states.

```vue
<Switch v-model="checked" />
<Switch v-model="checked" label="Enable notifications" />
<Switch v-model="checked" size="small" />
<Switch v-model="checked" size="large" />
<Switch v-model="checked" disabled />
<Switch v-model="checked" loading />
<Switch v-model="checked" theme="hacker" />
<Switch v-model="checked" holographic />
```

#### ColorTag

Used to display categories, status information, etc.

```vue
<ColorTag text="Tag text" />
<ColorTag text="Color level" level="1" />
<ColorTag text="Specific color" color-index="5" />
<ColorTag text="Different theme" theme="neon" />
<ColorTag @click="handleClick">Clickable</ColorTag>
```

### Feedback Components

#### MessageToast

Used to display feedback messages.

```vue
<script setup>
import { MessageToast, createApp } from 'holographic'

// Create message toast
const showMessage = (message) => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  
  const app = createApp(MessageToast, {
    message,
    type: 'success', // 'default' | 'success' | 'error' | 'info' | 'warning'
    theme: 'ark',
    duration: 3000,
    position: 'top-right',
    onClose: () => {
      document.body.removeChild(div)
    }
  })
  
  app.mount(div)
}

// Usage
showMessage('Operation successful')
</script>
```

#### LoadingAnimation

Used to display loading states.

```vue
<LoadingAnimation />
<LoadingAnimation theme="hacker" />
<LoadingAnimation type="circle" />
<LoadingAnimation type="waves" />
<LoadingAnimation type="data" />
<LoadingAnimation type="pulse" />
<LoadingAnimation type="dots" />
<LoadingAnimation progress="50" />
<LoadingAnimation message="Loading..." />
```

### Layout Components

#### Card

A container for content and actions.

```vue
<Card>Basic Card</Card>

<Card theme="neon">Neon Theme</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="filled">Filled Card</Card>

<Card holographic>Holographic Effect</Card>
<Card hoverable>Hover Effect</Card>

<Card>
  <template #header>
    <h3>Card Title</h3>
  </template>
  Card Content
  <template #footer>
    <Button>Action Button</Button>
  </template>
</Card>
```

#### Container

Container component for layout.

```vue
<Container>Centered container</Container>
<Container fluid>Full-width fluid container</Container>
<Container :centered="false">Non-centered content</Container>
```

#### Grid

Used to create grid layouts.

```vue
<Grid>
  <Card v-for="i in 6" :key="i">Card {{ i }}</Card>
</Grid>

<Grid columns="3">
  <Card v-for="i in 6" :key="i">Card {{ i }}</Card>
</Grid>

<Grid columnWidth="200px" columnGap="20px" rowGap="20px">
  <Card v-for="i in 6" :key="i">Card {{ i }}</Card>
</Grid>
```

#### Divider

A line used to separate content.

```vue
<Divider />
<Divider dashed />
<Divider>Divider with text</Divider>
<Divider direction="vertical" />
<Divider theme="neon" />
<Divider holographic>Holographic effect</Divider>
```

### Visual Components

#### ColorTag

Used to display categories, status information, etc.

```vue
<ColorTag text="Tag text" />
<ColorTag text="Color level" level="1" />
<ColorTag text="Specific color" color-index="5" />
<ColorTag text="Different theme" theme="neon" />
<ColorTag @click="handleClick">Clickable</ColorTag>
```

#### LoadingAnimation

Used to display loading states.

```vue
<LoadingAnimation />
<LoadingAnimation theme="hacker" />
<LoadingAnimation type="circle" />
<LoadingAnimation type="waves" />
<LoadingAnimation type="data" />
<LoadingAnimation type="pulse" />
<LoadingAnimation type="dots" />
```

#### HolographicAnimation

Used to create tech-inspired holographic animations.

```vue
<HolographicAnimation />
<HolographicAnimation theme="hacker" />
<HolographicAnimation symbol="VUE" />
<HolographicAnimation :labels="['Label 1', 'Label 2', 'Label 3']" />
<HolographicAnimation height="400" />
<HolographicAnimation :particles="6" :particleSpeed="3" />
<HolographicAnimation primaryColor="#FF00FF" />

<HolographicAnimation>
  <template #symbol>
    <img src="/logo.png" width="40" height="40" />
  </template>
  
  <template #top-left>
    <div class="p-2 bg-black/50 rounded">Top-left content</div>
  </template>
  
  <template #bottom-right>
    <div class="p-2 bg-black/50 rounded">Bottom-right content</div>
  </template>
</HolographicAnimation>
```

#### TerminalOutput

Used to display command-line terminal style output.

```vue
<TerminalOutput title="System Terminal" />

<TerminalOutput 
  theme="hacker" 
  prompt="$" 
  :initialLines="['Initializing system...', 'Connecting to server...<br>Connection successful!']" 
/>

<TerminalOutput 
  theme="neon" 
  height="400px" 
  holographic 
  ref="terminal" 
/>

<script setup>
// Using in components
import { ref, onMounted } from 'vue';

const terminal = ref(null);

onMounted(() => {
  // Add line
  terminal.value.addLines('System starting...');
  
  // Add multiple lines
  terminal.value.addLines([
    'Loading configuration...',
    'Configuration loaded',
    'ERROR: Cannot connect to remote server!'
  ]);
  
  // Clear terminal
  // terminal.value.clear();
});
</script>
```

## Contribution

Issues and Pull Requests are welcome! Let's improve this component library together!

## License

MIT 