import Vue from 'vue';
import VueUniqIds from 'vue-uniq-ids';
import App from './App';
import router from './router';

Vue.use(VueUniqIds);
// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
});
