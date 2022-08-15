module.exports = [
	{ text: "首页", link: "/" },
	{
		text: "前端",
		link: "/web/", //目录页，knowledge主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
		items: [
			{
				text: "前端核心",
				items: [
					{ text: "HTML", link: "/pages/15eb6c/" },
					{ text: "CSS", link: "/pages/e1d013/" },
					{ text: "JavaScript", link: "/pages/1155ec/" },
					{ text: "Web API接口", link: "/pages/0907d0/" },
					{ text: "TypeScript", link: "/core/typescript/" },
					{ text: "浏览器", link: "/pages/0a6f68/" },
					{ text: "UI库", link: "/pages/db7a96/" },
					{ text: "前端框架", link: "/core/frontend-framework/vue/" },
					{ text: "前端工具库", link: "/core/frontend-tools/" },
				],
			},
			{
				text: "工程化",
				items: [{ text: "前端工程化", link: "/pages/1299b8/" }],
			},
			{
				text: "规范",
				items: [{ text: "前端规范", link: "/pages/f70b3b/" }],
			},
			{
				text: "进阶",
				items: [{ text: "架构之旅", link: "/pages/676e00/" }],
			},
		],
	},
	{
		text: "跨端",
		link: "/cross/",
	},
	{
		text: "后端",
		link: "/pages/55ba89/",
	},
	{
		text: "UI",
		link: "/ui/",
	},
	{
		text: "计算机技术",
		link: "/technology/",
		items: [
			{ text: "编译原理", link: "" },
			{ text: "网络", link: "/computer/network/" },
			{ text: "计算机组成", link: "" },
			{ text: "数据结构与算法", link: "/computer/datastructuresandalgorithms/" },
			{ text: "操作系统原理", link: "/computer/os/" },
			{ text: "设计模式", link: "/pages/a7a349/" },
			{ text: "数据库", link: "" },
		],
	},
	{
		text: "收藏",
		link: "/pages/beb6c0bd8a66cea6/",
		items: [
			{ text: "网站", link: "/pages/beb6c0bd8a66cea6/" },
			{ text: "前端通用资源", link: "/pages/eee83a9211a70f9d/" },
			{ text: "Vue资源", link: "/pages/12df8ace52d493f6/" },
			{ text: "React资源", link: "/pages/af8dde/" },
			{ text: "Node资源", link: "/pages/c0cd07/" },
		],
	},
	{
		text: "索引",
		link: "/archives/",
		items: [
			{ text: "分类", link: "/categories/" },
			{ text: "标签", link: "/tags/" },
			{ text: "归档", link: "/archives/" },
		],
	},
];
