// md/.vitepress/config.js
import {set_sidebar} from '../../set_sidebar.js'

const base = "/docs";
export default {
    base,
    // 站点级选项
    title: "何嘎嘎的技术文档", // 网站标题
    description: "何嘎嘎用来写技术文档的地方", // 网站描述
    appearance: true,
    lastUpdated: true,
    head: [
        // 配置网站的图标（显示在浏览器的 tab 上）
        ["link", { rel: "icon", href: `${base}/favicon.ico` }],
    ],
    // markdown: {
    //     // 代码块风格
    //     theme: 'material-theme-palenight',
    //     // theme:'github-light',
    // },
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
        { text: '文档', link: '/md/介绍/准备', activeMatch: '/md/介绍/准备' },
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
    const data = set_sidebar('docs/md')
    console.log('data', data);
    return data
    // for (let i = 0; i < data.length; i++) {
    //     console.log('data', data[i]);
    //     for (let k = 0; k < data[i].items.length; k++) {
    //         console.log('data[k].items', data[k].items);
    //     }
    // }
    // return [
    //     {
    //         text: 'AI',
    //         collapsible: true,
    //         // items: set_sidebar('md')
    //         items: [
    //                 { text: '111', link: '/md/AI/ai培训作业' },
    //                 { text: '222', link: '/md/AI/GoogleColab使用' },
    //                 { text: '333', link: '/md/AI/pipeline' },
    //                 { text: '444', link: '/md/区块链/区块链开发' },
    //                 { text: '555', link: '/md/AI/深度学习环境配置' }
    //             ]
    //     },
    //     {
    //         text: '区块链',
    //         collapsible: true,
    //         // items: set_sidebar('md')
    //         items: [
    //             { text: '111', link: '/md/AI/ai培训作业' },
    //             { text: '222', link: '/md/AI/GoogleColab使用' },
    //             { text: '333', link: '/md/AI/pipeline' },
    //             { text: '444', link: '/md/区块链/区块链开发' },
    //             { text: '555', link: '/md/AI/深度学习环境配置' }
    //         ]
    //     }
    // ]
}
