<!--
 * @Author: SpenserCai
 * @Date: 2025-03-18 17:59:02
 * @version: 
 * @LastEditors: SpenserCai
 * @LastEditTime: 2025-03-19 00:07:46
 * @Description: file content
-->
# Holographic

A modern high-tech holographic style UI component library based on TailwindCSS, supporting both Vue and React frameworks.

## Features

- 🌈 Focus on high-tech holographic visual effects, providing immersive user experience
- 🔧 Based on TailwindCSS, easily customizable and extensible
- 🚀 High-performance, lightweight design
- 📱 Responsive design, adapting to various screen sizes
- 🧩 Support for both Vue and React frameworks
- 🎨 Rich holographic visual effects and interactive experiences

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
      <Button variant="primary" holographic>Click me</Button>
      <Card holographic>Holographic style card content</Card>
    </div>
  )
}
```

## Themes

Holographic provides carefully designed high-tech holographic themes:

- **Holographic High-Tech**: Using blue and purple as primary colors, featuring holographic projections, laser scanning lines, data flows, and stereoscopic light effects in a modern futuristic style, suitable for sci-fi and high-tech application scenarios

## Components

### Basic Components
- ✅ Button
- ✅ Input
- ✅ Switch

### Feedback Components
- ✅ MessageToast

### Layout Components
- ✅ Card
- ✅ Container
- ✅ Grid
- ✅ Divider

### Visual Components
- ✅ ColorTag
- ✅ LoadingAnimation
- ✅ HolographicAnimation
- ✅ TerminalOutput

### Planned Components
- Select
- Badge
- Modal
- Tabs
- Accordion
- Space
- LanguageSelector

## Documentation

For detailed component documentation, please refer to the [User Guide](docs/guide.md).

## Development

```bash
# Install dependencies
npm install

# Development environment
npm run dev

# Build component library
npm run build
```

## Contribution Guidelines

Issues and Pull Requests are welcome. Let's improve this component library together!

## License

MIT
