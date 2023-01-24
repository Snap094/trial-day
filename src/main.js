import { createApp } from 'vue'

import '@/assets/styles/style.scss'

import App from './App.vue'
import router from "./router";
import {useVuelidate} from "@vuelidate/core";

createApp(App).use(router).use(useVuelidate).mount('#app')
