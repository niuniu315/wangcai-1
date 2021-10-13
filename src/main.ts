import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from '@/models/tagListModel';


Vue.config.productionTip = false

Vue.component('Nav', Nav);
Vue.component('Layout',Layout);
Vue.component('Icon',Icon)

// 在custom.d.ts文件里声明 window.tagList
window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
    const message = tagListModel.create(name);
    // 如果报错的信息是duplicated（重复了）
    if (message === 'duplicated') {
      window.alert('标签名重复了');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
