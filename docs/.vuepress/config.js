const path  = require('path')
const nav = require("./config/nav.js");

console.log(__dirname, '根')

module.exports = {
	title: "Ame's blog",
	description:
		"web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。", // 描述,以 <meta> 标签渲染到页面html中
	// base: '/vuepress-theme-vdoing/', // '/<github仓库名>/'， 默认'/'
	head: [
		// 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
		["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
		[
			"meta",
			{
				name: "keywords",
				content:
					"前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown,vis-network中文",
			},
		],
		["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }], // 百度统计博主验证
		["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色

		// 不蒜子访问量统计
		// ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async: 'async'}]
	],
	markdown: {
		lineNumbers: true, // 代码行号
	},

	// theme: "vdoing", // 使用依赖包主题
	theme: path.resolve(__dirname, '../../vdoing'), // 使用本地主题

	themeConfig: {
		// 主题配置
		nav,
		sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
		logo: "/img/logo.png", // 导航栏logo
		repo: "aimeiyijia/ame", // 导航栏右侧生成Github链接
		searchMaxSuggestions: 10, // 搜索结果显示最大数
		lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
		docsDir: "docs", // 编辑的文件夹
		editLinks: true, // 启用编辑
		editLinkText: "编辑",

		// 以下配置是Vdoing主题改动的和新增的配置
		// category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
		// tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
		// archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
		// categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
		// bodyBgImg: [
		//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
		//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
		//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
		// ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
		// titleBadge: false, // 文章标题前的图标是否显示，默认true
		// titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
		//   '图标地址1',
		//   '图标地址2'
		// ],

		sidebar: "structuring", // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

		// sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
		// updateBar: { // 最近更新栏
		//   showToArticle: true, // 显示到文章页底部，默认true
		//   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
		// },

		author: {
			// 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
			name: "Ame", // 必需
			href: "https://github.com/aimeiyijia", // 可选的
		},
		blogger: {
			// 博主信息，显示在首页侧边栏
			avatar: "https://cdn.jsdelivr.net/gh/aimeiyijia/blog-images/img/title.jpg",
			name: "Ame",
			slogan: "跨端修炼者",
		},
		social: {
			// 社交图标，显示于博主信息栏和页脚栏
			// iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
			icons: [
				{
					iconClass: "icon-youjian",
					title: "发邮件",
					link: "mailto:1456723200@qq.com",
				},
				{
					iconClass: "icon-github",
					title: "GitHub",
					link: "https://github.com/aimeiyijia",
				},
				{
					iconClass: "icon-erji",
					title: "听音乐",
					link: "https://music.163.com/#/playlist?id=755597173",
				},
			],
		},
		footer: {
			// 页脚信息
			createYear: 2020, // 博客创建年份
			copyrightInfo: 'Ame | <a href="https://github.com/aimeiyijia" target="_blank">MIT License</a> | <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备18003274号-2</a>', // 博客版权信息，支持a标签
		},
	},
	plugins: [
		// 插件
		// [require('./plugins/love-me'), { // 鼠标点击爱心特效
		//   color: '#11a8cd', // 爱心颜色，默认随机色
		//   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
		// }],

		[
			"thirdparty-search",
			{
				// 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
				thirdparty: [
					// 可选，默认 []
					{
						title: "在MDN中搜索",
						frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
						behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
					},
					{
						title: "在Runoob中搜索",
						frontUrl: "https://www.runoob.com/?s=",
					},
					{
						title: "在Vue API中搜索",
						frontUrl: "https://cn.vuejs.org/v2/api/#",
					},
					{
						title: "在Bing中搜索",
						frontUrl: "https://cn.bing.com/search?q=",
					},
					{
						title: "通过百度搜索本站的",
						frontUrl: "https://www.baidu.com/s?wd=site%3Aame.cool%20",
					},
				],
			},
		],

		"vuepress-plugin-baidu-autopush", // 百度自动推送

		[
			"one-click-copy",
			{
				// 代码块复制按钮
				copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
				copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
				duration: 1000, // prompt message display time.
				showInMobile: false, // whether to display on the mobile side, default: false.
			},
		],
		// [
		// 	"demo-block",
		// 	{
		// 		// demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
		// 		settings: {
		// 			// jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
		// 			// cssLib: ['http://xxx'], // 在线示例中的css依赖
		// 			// vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
		// 			jsfiddle: false, // 是否显示 jsfiddle 链接
		// 			codepen: true, // 是否显示 codepen 链接
		// 			horizontal: false, // 是否展示为横向样式
		// 		},
		// 	},
		// ],
		['demo-container'],
		[
			"vuepress-plugin-zooming", // 放大图片
			{
				selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
				options: {
					bgColor: "rgba(0,0,0,0.6)",
				},
			},
		],
		[
			"vuepress-plugin-baidu-tongji", // 百度统计
			{
				hm: "de4597e45d6d6661371d3a9f238925b6",
			},
		],
		[
			"vuepress-plugin-comment", // 评论
			{
				choosen: "gitalk",
				options: {
					clientID: "0cc5068500696ee9314d",
					clientSecret: "3e6761c36d10e6eb13043684ade73c4f88043a25",
					repo: "comment", // GitHub 仓库
					owner: "aimeiyijia", // GitHub仓库所有者
					admin: ["aimeiyijia"], // 对仓库有写权限的人
					// distractionFreeMode: true,
					pagerDirection: "last", // 'first'正序 | 'last'倒序
					id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
					title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
					labels: ["Gitalk", "Comment"], // GitHub issue 的标签
					body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
				},
			},
		],
		[
			"@vuepress/last-updated", // "上次更新"时间格式
			{
				transformer: (timestamp, lang) => {
					const moment = require("moment"); // https://momentjs.com/
					return moment(timestamp).format("YYYY/MM/DD, H:MM:SS");
				},
			},
		],
		"vuepress-plugin-smooth-scroll", //平滑滚动插件
	],
	// configureWebpack: {
	//   //webpack别名 如![Image from alias](~@alias/image.png)
	//   resolve: {
	//     alias: {
	//       '@alias': 'path/to/some/dir'
	//     }
	//   }
	// }
};
