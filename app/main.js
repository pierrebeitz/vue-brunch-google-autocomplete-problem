import Vue from 'vue';
import App from './App';
import 'vueify/lib/insert-css';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

new Vue({
  el: '#app',
  components: {
    VueGoogleAutocomplete,
  },
  render: h => h(App),
});
