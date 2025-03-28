import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import store from './store'

// [Vue Router warn]이 출력되지 않도록 설정
const originalWarn = console.warn;
console.warn = function (msg, ...args) {
  if (msg.includes('[Vue Router warn]')) { return; }
  originalWarn(msg, ...args);
};

//브라우저 리프레쉬시 -------------------------
//인증 정보를 store에 저장
store.dispatch("loadAuth");
//-------------------------------------------

createApp(App).use(store).use(router).mount('#app')

