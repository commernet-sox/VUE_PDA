import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Field,CellGroup,Cell,Tabbar,TabbarItem,Grid,GridItem,NavBar,Form,DropdownMenu,DropdownItem,Picker,Popup,Dialog } from 'vant'
import 'vant/lib/index.css'

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
.mount('#app')