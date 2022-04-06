import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import 'lib-flexible'
import {Button,Field,CellGroup,Cell,Tabbar,TabbarItem,Grid,GridItem,NavBar,Form,DropdownMenu,DropdownItem,Picker,Popup,Dialog,Loading} from 'vant'
import 'vant/lib/index.css'
// require('es6-promise').polyfill()
Es6Promise.polyfill()

createApp(App)
.use(router)
.use(store)
.use(Button)
.use(Field)
.use(CellGroup)
.use(Cell)
.use(Tabbar)
.use(TabbarItem)
.use(Grid)
.use(GridItem)
.use(NavBar)
.use(Form)
.use(DropdownMenu)
.use(DropdownItem)
.use(Picker)
.use(Popup)
.use(Dialog)
.use(Loading)
.mount('#app')
console.log("111")