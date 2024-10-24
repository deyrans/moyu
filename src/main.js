//导入vue中创建vue实例的方法
import { createApp } from 'vue'
//导入最大组件,以便加载其它组件内容
import App from './App.vue'
//全局导入element-plus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

//创建vue实例
const app=createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app');