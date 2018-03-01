// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

if('serviceWorker' in navigator){
  navigator.serviceWorker.register(
    '/services/sw.js',
    {scope: '/*'}
  ).then(succes,failure);
}
else{
  console.log("el navegador no soporta service worker")
}
function succes(){
  console.log('serviceWorker '+'registrado');
}
function failure(){
  console.log('serviceWorker '+ 'no se pudo registrar');
}