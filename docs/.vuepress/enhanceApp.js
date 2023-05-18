
import './plugins/mock/index'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import ElTableTs from "el-table-ts"
import 'el-table-ts/dist/el-table-ts.css'

import ElLists from "el-lists"
import 'el-lists/dist/el-lists.css'

import ElFormPlus from "el-form-plus"

import PElSelect from "p-el-select";

import PTabs from "p-tabs";
import "p-tabs/dist/p-tabs.css";
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(ElementUI);
  Vue.use(ElTableTs)
  Vue.use(ElLists)
  Vue.use(ElFormPlus)
  Vue.use(PElSelect)
  Vue.use(PTabs)
}
