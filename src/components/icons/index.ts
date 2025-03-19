import InlineSvgIcon from './InlineSvgIcon.vue';

export { InlineSvgIcon };

export default {
  install(app: any) {
    app.component('InlineSvgIcon', InlineSvgIcon);
  }
}; 