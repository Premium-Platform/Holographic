/*
 * @Author: SpenserCai
 * @Date: 2025-03-18 21:15:37
 * @version: 
 * @LastEditors: SpenserCai
 * @LastEditTime: 2025-03-18 23:59:46
 * @Description: file content
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ButtonPanel from '../components/panels/ButtonPanel.vue';
import InputPanel from '../components/panels/InputPanel.vue';
import SwitchPanel from '../components/panels/SwitchPanel.vue';
import LayoutPanel from '../components/panels/LayoutPanel.vue';
import VisualPanel from '../components/panels/VisualPanel.vue';

// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/components/button'
  },
  // 通用组件路由
  {
    path: '/components/button',
    name: 'Button',
    component: ButtonPanel,
    meta: { category: '通用', title: 'Button 按钮', version: '5.21.0' }
  },
  {
    path: '/components/input',
    name: 'Input',
    component: InputPanel,
    meta: { category: '通用', title: 'Input 输入框', version: '5.17.0' }
  },
  {
    path: '/components/switch',
    name: 'Switch',
    component: SwitchPanel,
    meta: { category: '通用', title: 'Switch 开关', version: '5.0.0' }
  },
  // 布局组件路由
  {
    path: '/components/divider',
    name: 'Divider',
    component: LayoutPanel,
    props: { activeComponent: 'divider' },
    meta: { category: '布局', title: 'Divider 分割线', version: '5.0.0' }
  },
  {
    path: '/components/grid',
    name: 'Grid',
    component: LayoutPanel,
    props: { activeComponent: 'grid' },
    meta: { category: '布局', title: 'Grid 网格', version: '5.10.0' }
  },
  {
    path: '/components/card',
    name: 'Card',
    component: LayoutPanel,
    props: { activeComponent: 'card' },
    meta: { category: '布局', title: 'Card 卡片', version: '5.0.0' }
  },
  {
    path: '/components/container',
    name: 'Container',
    component: LayoutPanel,
    props: { activeComponent: 'container' },
    meta: { category: '布局', title: 'Container 容器', version: '5.0.0' }
  },
  // 视觉组件路由
  {
    path: '/components/color-tag',
    name: 'ColorTag',
    component: VisualPanel,
    props: { activeComponent: 'color-tag' },
    meta: { category: '视觉', title: 'ColorTag 标签', version: '5.0.0' }
  },
  {
    path: '/components/loading-animation',
    name: 'LoadingAnimation',
    component: VisualPanel,
    props: { activeComponent: 'loading-animation' },
    meta: { category: '视觉', title: 'LoadingAnimation 加载', version: '5.0.0' }
  },
  {
    path: '/components/holographic-animation',
    name: 'HolographicNfcAnimation',
    component: VisualPanel,
    props: { activeComponent: 'holographic-animation' },
    meta: { category: '视觉', title: 'NFC全息动画', version: '5.0.0' }
  },
  {
    path: '/components/terminal-output',
    name: 'TerminalOutput',
    component: VisualPanel,
    props: { activeComponent: 'terminal-output' },
    meta: { category: '视觉', title: 'TerminalOutput 终端', version: '5.0.0' }
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 