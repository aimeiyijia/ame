module.exports = [
	{ text: "首页", link: "/" },
	{
		text: "前端",
		link: "/web/", //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
		items: [
			{
				text: "前端核心",
				items: [
					{ text: "HTML", link: "/core/html/" },
					{ text: "CSS", link: "/core/css/" },
					{ text: "JavaScript", link: "/core/javascript/" }, // 注意link结尾有斜杠和没有斜杠的区别
					{ text: "TypeScript", link: "/core/typescript/" },
					{ text: "UI库", link: "/core/ui-library/" },
					{ text: "前端框架", link: "/core/frontend-framework/" },
					{ text: "前端工具库", link: "/core/frontend-tools/" },
				],
			},
			{
				text: "学习笔记",
				items: [
					{ text: "《JavaScript教程》笔记", link: "/note/javascript/" },
				],
			},
		],
	},
	{
		text: "UI",
		link: "/ui/",
		items: [
			{ text: "HTML", link: "/pages/8309a5b876fc95e3/" },
			{ text: "CSS", link: "/pages/0a83b083bdf257cb/" },
		],
	},
	{
		text: "计算机",
		link: "/technology/",
		items: [
			{ text: "技术文档", link: "/pages/9a7ee40fc232253e/" },
			{ text: "GitHub技巧", link: "/pages/4c778760be26d8b3/" },
			{ text: "Nodejs", link: "/pages/117708e0af7f0bd9/" },
			{ text: "博客搭建", link: "/pages/41f87d890d0a02af/" },
		],
	},
	{
		text: "更多",
		link: "/more/",
		items: [
			{ text: "学习", link: "/pages/a8692ab3bdcb4588/" },
			{ text: "面试", link: "/pages/aea6571b7a8bae86/" },
			{ text: "心情杂货", link: "/pages/2d615df9a36a98ed/" },
			{ text: "友情链接", link: "/friends/" },
		],
	},
	{ text: "关于", link: "/about/" },
	{
		text: "收藏",
		link: "/pages/beb6c0bd8a66cea6/",
		items: [
			{ text: "网站", link: "/pages/beb6c0bd8a66cea6/" },
			{ text: "资源", link: "/pages/eee83a9211a70f9d/" },
			{ text: "Vue资源", link: "/pages/12df8ace52d493f6/" },
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
