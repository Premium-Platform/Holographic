import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

const messages = {
  'zh-CN': zh,
  'en-US': en
};

const i18n = createI18n({
  legacy: false,
  locale: 'en-US', // 默认语言改为英文
  fallbackLocale: 'zh-CN', // 备用语言
  messages
});

export default i18n; 