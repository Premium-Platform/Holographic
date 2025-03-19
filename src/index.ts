/*
 * @Author: SpenserCai
 * @Date: 2025-03-18 19:23:45
 * @version: 
 * @LastEditors: SpenserCai
 * @LastEditTime: 2025-03-18 23:56:49
 * @Description: file content
 */
import { App } from 'vue';

// 样式
import './styles/index.css';

// 导入所有组件
// 基础组件
import Button from './components/base/Button.vue';
import Input from './components/base/Input.vue';
import Switch from './components/base/Switch.vue';
// import Select from './components/base/Select.vue';

// 反馈组件
// import Badge from './components/feedback/Badge.vue';
import MessageToast from './components/feedback/MessageToast.vue';
import LoadingScreen from './components/feedback/LoadingScreen.vue';

// 布局组件
import Card from './components/layout/Card.vue';
import Container from './components/layout/Container.vue';
import Grid from './components/layout/Grid.vue';
// import Space from './components/layout/Space.vue';
import Divider from './components/layout/Divider.vue';
import TechPanel from './components/layout/TechPanel.vue';
import HolographicPanel from './components/layout/HolographicPanel.vue';
import InfoPanel from './components/layout/InfoPanel.vue';

// 导航组件
// import Tabs from './components/navigation/Tabs.vue';
// import Accordion from './components/navigation/Accordion.vue';
// import LanguageSelector from './components/navigation/LanguageSelector.vue';

// 视觉组件
import HolographicNfcAnimation from './components/visual/HolographicNfcAnimation.vue';
import ColorTag from './components/visual/ColorTag.vue';
import TerminalOutput from './components/visual/TerminalOutput.vue';
import LoadingAnimation from './components/visual/LoadingAnimation.vue';

// 为组件定义名称
type ComponentWithName = { name?: string; __name?: string; __file?: string };

// 组件列表及其名称
const components: [string, any][] = [
  ['HButton', Button],
  ['HInput', Input],
  ['HSwitch', Switch],
  ['HMessageToast', MessageToast],
  ['HLoadingScreen', LoadingScreen],
  ['HCard', Card],
  ['HContainer', Container],
  ['HGrid', Grid],
  ['HDivider', Divider],
  ['HTechPanel', TechPanel],
  ['HHolographicPanel', HolographicPanel],
  ['HInfoPanel', InfoPanel],
  ['HNfcAnimation', HolographicNfcAnimation],
  ['HColorTag', ColorTag],
  ['HTerminalOutput', TerminalOutput],
  ['HLoadingAnimation', LoadingAnimation],
];

// 插件安装方法
const install = (app: App): void => {
  components.forEach(([name, component]) => {
    app.component(name, component);
  });
};

// 默认导出插件安装方法
export default {
  install,
};

// 按需导出
export {
  Button,
  Input,
  Switch,
  // Select,
  // Badge,
  MessageToast,
  LoadingScreen,
  Card,
  Container,
  Grid,
  // Space,
  Divider,
  TechPanel,
  HolographicPanel,
  InfoPanel,
  // Tabs,
  // Accordion,
  // LanguageSelector,
  HolographicNfcAnimation,
  ColorTag,
  TerminalOutput,
  LoadingAnimation,
}; 