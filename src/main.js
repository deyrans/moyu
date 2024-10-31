//导入vue中创建vue实例的方法
import { createApp } from 'vue'

//导入最大组件,以便加载其它组件内容
import App from './App.vue'

//全局导入element-plus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 全国化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// axios
import axios from 'axios'
import vueAxios from 'vue-axios'

//创建vue实例
const app=createApp(App);

app.use({locale: zhCn,}).use(vueAxios,axios)

app.mount('#app');