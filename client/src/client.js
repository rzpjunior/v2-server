import Vue from 'vue';
import router from './router/router.js';
import App from './components/App.vue';
import http from './plugins/axios.js';
import store from './store';

Vue.use(http)

new Vue({
  el: '#vue-app',
  router: router,
  store,
  render: createElement => createElement(App)
});