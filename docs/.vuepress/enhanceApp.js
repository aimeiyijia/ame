
import './plugins/mock/index'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import ElTableTs from "el-table-ts"
import 'el-table-ts/dist/el-table-ts.css'

import ElFormPlus from "el-form-plus"
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  console.log(ElTableTs)
  Vue.use(ElementUI);
  Vue.use(ElTableTs)
  Vue.use(ElFormPlus)
}
