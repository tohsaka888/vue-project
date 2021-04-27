import Vue from "vue";
// import Button from "ant-design-vue/lib/button";
import "ant-design-vue/dist/antd.css";
import App from "./App";
import { Layout, Menu, Avatar, Icon, Carousel, Button } from "ant-design-vue";

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Avatar);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
