// docs/.vitepress/config.js
import {set_sidebar} from '../../set_sidebar.js'

export default {
    // 站点级选项
    title: "何嘎嘎的技术文档", // 网站标题
    description: "何嘎嘎用来写技术文档的地方", // 网站描述
    appearance: true,
    lastUpdated: true,
    head: [
        // 配置网站的图标（显示在浏览器的 tab 上）
        ["link", { rel: "icon", href: `favicon.ico` }],
    ],
    themeConfig: {
        siteTitle: "何嘎嘎的技术文档",
        logo: "/logo.jpeg",
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        outlineTitle: '大纲',
        search: {
            provider: "local",
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/GaryFayeHo' },
        ],
        nav: nav(),
        sidebar: {
            '/': sidebarGuide(),
        },
        footer: {
            message: "Patience is bitter, but its fruit is sweet",
            copyright: "Copyright ©何嘎嘎",
        },
    }
};


function nav() {
    return [
        { text: '文档', link: '/docs/介绍/准备', activeMatch: '/docs/介绍/准备' },
        {
            text: '模型',
            items: [
                { text: 'Hugging Face', link: 'https://huggingface.co' },
                { text: 'HF-Mirror', link: 'https://hf-mirror.com' },
                { text: 'ModelScope', link: 'https://community.modelscope.cn' },
            ]
        },
        {
            text: '其他',
            items: [
                { text: '掘金', link: 'https://juejin.cn' },
                { text: 'V2EX', link: 'https://v2ex.com/' },
            ]
        }

    ]
}

function sidebarGuide() {
    const data = set_sidebar('/docs/docs')
    console.log('data', data);
    return data
}
