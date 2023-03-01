import { createApp } from 'vue'
import App from './App.vue'
import unAmi from './components/UnAmi'
//createApp().mount('#app')
const app = createApp(App);
app.component('un-ami', unAmi);
app.mount('#app')