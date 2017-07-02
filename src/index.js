import Vue from 'vue';
import App from './App';
import router from './router';

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App },
});
