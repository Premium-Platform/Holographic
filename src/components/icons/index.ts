import SvgIcon from './SvgIcon.vue';
import IconWrapper from './IconWrapper.vue';
import InlineSvgIcon from './InlineSvgIcon.vue';

export { SvgIcon, IconWrapper, InlineSvgIcon };

export default {
  install(app: any) {
    app.component('SvgIcon', SvgIcon);
    app.component('IconWrapper', IconWrapper);
    app.component('InlineSvgIcon', InlineSvgIcon);
  }
}; 