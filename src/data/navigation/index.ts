import { Classify } from "./interface";
const navigationData: Classify[] = [
  {
    id: "6da7ce69c09a41999c167f658647a40a",
    name: "常用",
    path: "common",
    intro: "常用网站推荐",
    subClassify: [
      {
        id: "17e0e9a9e45140059a1f1d038e93d206",
        name: "购物",
        path: "shopping",
        intro: "常用购物网站推荐",
        children: [
          {
            id: "3238186bed334acaab3868275204ffaa",
            name: "淘宝",
            url: "https://www.taobao.com/",
            intro: "淘！我喜欢",
            icon: "taobao",
            color: "#FF5502",
            classify: ["common", "shopping"],
          },
          {
            id: "96837d86dd784f59bffb6b137663113e",
            name: "京东",
            url: "https://www.jd.com/",
            intro: "正品低价、品质保障、配送及时、轻松购物！",
            icon: "jd",
            color: "#DE281F",
            classify: ["common", "shopping"],
          },
          {
            id: "39e282377aa748d18a9c4673a47f0750",
            name: "天猫",
            url: "https://www.tmall.com/",
            intro: "理想生活上天猫",
            icon: "tmall",
            color: "#FF0036",
            classify: ["common", "shopping"],
          },
        ],
      },
      {
        id: "b983b45559084171809949369559f725",
        name: "社交",
        path: "social",
        intro: "常用社交网站推荐",
        children: [
          {
            id: "4e1c3a03242b4361a22a4daf8ced88bf",
            name: "新浪微博",
            url: "https://www.weibo.com/",
            intro: "随时随地发现新鲜事",
            icon: "weibo",
            color: "#ff8140",
            classify: ["social", "common"],
          },
          {
            id: "68178f885c7b44e78ddc0be67b478644",
            name: "百度贴吧",
            url: "https://tieba.baidu.com/",
            intro: "全球领先的中文社区",
            icon: "tieba",
            color: "#3385ff",
            classify: ["common", "social"],
          },
          {
            id: "f24d86cb6b9d44c5a2b9cf5bc7f4ee1e",
            name: "知乎",
            url: "https://www.zhihu.com/",
            intro: "有问题，就会有答案",
            icon: "zhihu",
            color: "#0084ff",
            classify: ["common", "social"],
          },
        ],
      },
      {
        id: "eb22ec2f483c47fdb776451d540d01cc",
        name: "资讯",
        path: "news",
        intro: "常用资讯网站推荐",
        children: [
          {
            id: "aacdc4b5794949fb8ad888446049bea8",
            name: "新华网",
            url: "http://www.xinhuanet.com/",
            intro: "让新闻离你更近",
            icon: "xinhuanet",
            color: "#083B90",
            classify: ["news", "common"],
          },
          {
            id: "c71edd4daad34f4bb51438d33b27c950",
            name: "中国日报",
            url: "http://cn.chinadaily.com.cn/",
            intro: "传播中国，影响世界",
            icon: "chinadaily",
            color: "#083961",
            classify: ["news", "common"],
          },
          {
            id: "ecfbad28800f42c686e46c9616cacb65",
            name: "环球网",
            url: "https://www.huanqiu.com/",
            intro: "全球生活新门户",
            icon: "huanqiu",
            color: "#90080E",
            classify: ["news", "common"],
          },
          {
            id: "099a7ead0c524d32930c9beb4916c663",
            name: "腾讯网",
            url: "https://www.qq.com/",
            icon: "guancha",
            color: "#1479D7",
            classify: ["news", "common"],
          },
          {
            id: "6ef1b75ca1514e38bb5e5eddc0f6e0ea",
            name: "网易",
            url: "https://www.163.com/",
            icon: "163",
            color: "#E10000",
            classify: ["news", "common"],
          },
        ],
      },
    ],
  },
  {
    id: "19cc37a6fc924ae19112cef7c2e348eb",
    name: "资讯",
    path: "news",
    intro: "",
    subClassify: [
      {
        id: "a908cb2401da46b8890147862a5def23",
        name: "常用",
        path: "common",
        intro: "",
        children: [
          {
            id: "aacdc4b5794949fb8ad888446049bea8",
            name: "新华网",
            url: "http://www.xinhuanet.com/",
            intro: "让新闻离你更近",
            icon: "xinhuanet",
            color: "#083B90",
            classify: ["news", "common"],
          },
          {
            id: "c71edd4daad34f4bb51438d33b27c950",
            name: "中国日报",
            url: "http://cn.chinadaily.com.cn/",
            intro: "传播中国，影响世界",
            icon: "chinadaily",
            color: "#083961",
            classify: ["news", "common"],
          },
          {
            id: "ecfbad28800f42c686e46c9616cacb65",
            name: "环球网",
            url: "https://www.huanqiu.com/",
            intro: "全球生活新门户",
            icon: "huanqiu",
            color: "#90080E",
            classify: ["news", "common"],
          },
          {
            id: "099a7ead0c524d32930c9beb4916c663",
            name: "腾讯网",
            url: "https://www.qq.com/",
            icon: "guancha",
            color: "#1479D7",
            classify: ["news", "common"],
          },
          {
            id: "6ef1b75ca1514e38bb5e5eddc0f6e0ea",
            name: "网易",
            url: "https://www.163.com/",
            icon: "163",
            color: "#E10000",
            classify: ["news", "common"],
          },
        ],
      },
      {
        id: "a57bc88ba97e46948fdde041da4954fe",
        name: "数码",
        path: "digital",
        intro: "",
        children: [
          {
            id: "322ac9b788c64d02bb28b158c14ea17c",
            name: "IT之家",
            url: "https://www.ithome.com/",
            intro: "爱科技，爱这里",
            icon: "ithome",
            color: "#D22222",
            classify: ["digital", "news"],
          },
          {
            id: "cac91d6480324410a661730bca0288db",
            name: "中关村在线",
            url: "https://www.zol.com.cn/",
            intro: "大中华区专业IT网站",
            icon: "zol",
            color: "#3686F1",
            classify: ["digital", "news"],
          },
          {
            id: "b5fdb91ab4cb4ce79abf483c07b80187",
            name: "少数派",
            url: "https://sspai.com/",
            intro: "高效工作，品质生活",
            icon: "sspai",
            color: "#751617",
            classify: ["digital", "news"],
          },
          {
            id: "65fb7df831234b4d886ae117b5682853",
            name: "快科技",
            url: "https://www.mydrivers.com/",
            intro: "科技改变未来",
            icon: "mydrivers",
            color: "#FF902C",
            classify: ["digital", "news"],
          },
          {
            id: "980359e6eeb84962b51240dfbe6de012",
            name: "数字尾巴",
            url: "https://www.dgtle.com/",
            intro: "分享美好数字生活",
            icon: "dgtle",
            color: "#9A9A9A",
            classify: ["digital", "news"],
          },
          {
            id: "56e0023b3fb94387b28f5827ba21b2b8",
            name: "爱范儿",
            url: "https://www.ifanr.com/",
            intro: "让未来触手可及",
            icon: "ifanr",
            color: "#B52C02",
            classify: ["digital", "news"],
          },
          {
            id: "5683720e54e44d50a27a8f2e0f2687c5",
            name: "充电头网",
            url: "https://www.chongdiantou.com/",
            intro: "我们只谈充电",
            icon: "chongdiantouCC",
            color: "#23499E",
            classify: ["digital", "news"],
          },
        ],
      },
    ],
  },
  {
    id: "e9db130e300b4a85bdde455eb35ad12e",
    name: "工具",
    path: "tools",
    intro: "软件，在线工具",
    subClassify: [
      {
        id: "39e6caea9ab24006888dc0e214abe9ae",
        name: "软件",
        path: "software",
        intro: "软件官网",
        children: [
          {
            id: "47e97fedff2d40779e072dc6ee7ddd16",
            name: "VS Code",
            url: "https://code.visualstudio.com/",
            intro: "Code editing. Redefined.",
            icon: "vscode",
            color: "#22A5F1",
            classify: ["tools", "software"],
          },
          {
            id: "5e5f263d87564a8289a111cd7113ba00",
            name: "Jetbrains",
            url: "https://www.jetbrains.com/",
            intro: "Essential tools for software developers and teams",
            icon: "jetbrains",
            color: "#080809",
            classify: ["tools", "software"],
          },
          {
            id: "26701f2812b54667afe396e80e522d05",
            name: "Atom",
            url: "https://atom.io/",
            intro: "A hackable text editor for the 21st Century",
            icon: "atom",
            color: "#E0AD38",
            classify: ["tools", "software"],
          },
          {
            id: "7ceff82cbfc7472687e3bf637107ebfb",
            name: "HBuilderX",
            url: "https://www.dcloud.io/hbuilderx.html",
            intro: "HBuilderX 是轻如编辑器、强如IDE的合体版本。",
            icon: "hubilderx",
            color: "#1A9F35",
            classify: ["tools", "software"],
          },
          {
            id: "83b6b56394114522be7c36d8c2a6bd2d",
            name: "uTools",
            url: "https://u.tools/",
            intro: "你的生产力工具集",
            icon: "utools",
            color: "#172B4D",
            classify: ["tools", "software"],
          },
          {
            id: "42a414464d7847d586bd58ee6c83a147",
            name: "typora",
            url: "https://typora.io/",
            intro: "A TRULY MINIMAL MARKDOWN EDITOR.",
            icon: "typora",
            color: "#999999",
            classify: ["tools", "software"],
          },
          {
            id: "ae2689493e4a42d896b4867ad75fa605",
            name: "PicGo",
            url: "https://picgo.github.io/PicGo-Doc/zh/",
            intro: "图片上传、管理新体验",
            icon: "picgo",
            color: "#4CA4E3",
            classify: ["tools", "software"],
          },
          {
            id: "0f2d7d7a0529413d8af90c16c3e41336",
            name: "思源笔记",
            url: "https://b3log.org/siyuan/",
            intro:
              "思源笔记是一款本地优先的个人知识管理系统，支持完全离线使用，同时也支持端到端加密同步。融合块、大纲和双向链接，构建你永恒的数字花园。",
            icon: "siyuan",
            color: "#D23E31",
            classify: ["tools", "software"],
          },
          {
            id: "98be956869b8407883f3ab690a541069",
            name: "RunJs",
            url: "https://runjs.app/",
            intro: "The JavaScript playground for your desktop",
            icon: "runjs",
            color: "#F7DF1E",
            classify: ["tools", "software"],
          },
          {
            id: "d7d5fa1b79384985bf7dd449a0f41303",
            name: "Sourcetree",
            url: "https://www.sourcetreeapp.com/",
            intro: "Simplicity and power in a beautiful Git GUI",
            icon: "sourcetreeapp",
            color: "#2684FF",
            classify: ["tools", "software"],
          },
          {
            id: "dc14fce2bc1e4b4faaeb8f02a5ef1c98",
            name: "Apifox",
            url: "https://www.apifox.cn/",
            intro: "API 文档、调试、Mock、测试一体化协作平台",
            icon: "apifox",
            color: "#F65150",
            classify: ["tools", "software"],
          },
          {
            id: "d1474b8bf88a4f33b33c54c26bd2479f",
            name: "Figma",
            url: "https://www.figma.com/",
            intro: "The collaborative interface design tool.",
            icon: "figma",
            color: "#A259FF",
            classify: ["tools", "software", "onlineTools"],
          },
          {
            id: "ee6806d9d0db413482c387649d7146e5",
            name: "ShareX",
            url: "https://getsharex.com/",
            intro: "Screen capture, file sharing and productivity tool",
            icon: "sharex",
            color: "#313642",
            classify: ["tools", "software"],
          },
          {
            id: "e192d3f5c99f46488c47b09ee9593ad9",
            name: "PowerToys",
            url: "https://github.com/microsoft/PowerToys",
            intro: "",
            icon: "powertoys",
            color: "#F2E6CA",
            classify: ["tools", "software"],
          },
        ],
      },
      {
        id: "4fa43caa7b794e28845384ab406fb2f6",
        name: "在线工具",
        path: "onlineTools",
        intro: "在线工具",
        children: [
          {
            id: "d1474b8bf88a4f33b33c54c26bd2479f",
            name: "Figma",
            url: "https://www.figma.com/",
            intro: "The collaborative interface design tool.",
            icon: "figma",
            color: "#A259FF",
            classify: ["tools", "software", "onlineTools"],
          },
        ],
      },
    ],
  },
  {
    id: "c3538088e0ed4ef8958f09c0b728adfe",
    name: "开发",
    path: "develop",
    intro: "",
    subClassify: [
      {
        id: "74f09917fdc249fcb0b20ca5211a277f",
        name: "前端",
        path: "front-end",
        intro: "",
        children: [
          {
            id: "038ce5a511564b74a02b566e1ad02e61",
            name: "React",
            url: "https://react.docschina.org/",
            intro: "用于构建用户界面的 JavaScript 库",
            icon: "react",
            color: "#61DAFB",
            classify: ["develop", "front-end"],
          },
          {
            id: "553324cb3a614441b23ae13082412d45",
            name: "VusJs",
            url: "https://v3.cn.vuejs.org/",
            intro: "渐进式 JavaScript 框架",
            icon: "vuejs",
            color: "#41B883",
            classify: ["develop", "front-end"],
          },
          {
            id: "a0383758c5ec46f0a24d913e6929872f",
            name: "AngularJS",
            url: "https://www.angularjs.net.cn/",
            intro: "一个开发动态Web应用的框架。",
            icon: "angularjs",
            color: "#E23237",
            classify: ["develop", "front-end"],
          },
          {
            id: "8d34bc84c31048a8beb9b0f144f3fa5e",
            name: "Flutter中文网",
            url: "https://flutterchina.club/",
            intro: "极速构建漂亮的原生应用。",
            icon: "flutterchina",
            color: "#0091EA",
            classify: ["develop", "front-end", "mobile terminal"],
          },
          {
            id: "879a26836b83420898d1e4daf45b5035",
            name: "FlutterCN",
            url: "https://flutter.cn/",
            intro:
              "Flutter 是 Google 开源的 UI 工具包，帮助开发者通过一套代码库高效构建多平台精美应用，支持移动、Web、桌面和嵌入式平台。",
            icon: "fluttercn",
            color: "#ED4845",
            classify: ["develop", "front-end", "mobile terminal"],
          },
          {
            id: "6864605527e74850ac7a62d5605891b4",
            name: "Webpack",
            url: "https://www.webpackjs.com/",
            intro: "让一切变得简单",
            icon: "webpackjs",
            color: "#55A7DD",
            classify: ["develop", "front-end"],
          },
          {
            id: "2e33301054214c98997b8b273a7a41b9",
            name: "UmiJs",
            url: "https://umijs.org/zh-CN",
            intro: "插件化的企业级前端应用框架。",
            icon: "umijs",
            color: "#1890FF",
            classify: ["develop", "front-end"],
          },
          {
            id: "fae86853bc2147298985b624f0222b66",
            name: "Electronjs",
            url: "http://www.electronjs.org/",
            intro: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
            icon: "electronjs",
            color: "#9FEAF9",
            classify: ["develop", "front-end"],
          },
          {
            id: "c62839ace4d74d6e9f9ac4096e30a85a",
            name: "React Native",
            url: "https://reactnative.cn/",
            intro: "使用 React 来创建 Android 和 iOS 的原生应用",
            icon: "reactnative",
            color: "#61DAFB",
            classify: ["develop", "front-end"],
          },
          {
            id: "2d07a5cfbf5440fa83e615d2a5bccc11",
            name: "Uni App",
            url: "https://uniapp.dcloud.io/",
            intro: "基于VueJs的多端开发框架",
            icon: "uniapp",
            color: "#2A9938",
            classify: ["develop", "front-end"],
          },
          {
            id: "26b9fc15b3c643f98ec3a31a76ca86c0",
            name: "npm",
            url: "https://www.npmjs.com/",
            intro: "build amazing things",
            icon: "uniapp",
            color: "#CB0303",
            classify: ["develop", "front-end"],
          },
          {
            id: "f2aedbbbcf844badad3dff3b3d965001",
            name: "Tailwind CSS",
            url: "https://www.tailwindcss.cn/",
            intro: "无需离开您的HTML，即可快速建立现代网站。",
            icon: "tailwindcss",
            color: "#06B6D4",
            classify: ["develop", "front-end"],
          },
          {
            id: "afc961364c5144689866add534c6719c",
            name: "Vite",
            url: "https://cn.vitejs.dev/",
            intro: "下一代前端开发与构建工具",
            icon: "vitejs",
            color: "#646CFF",
            classify: ["develop", "front-end"],
          },
          {
            id: "e5bab6816cf4495892a8bafaf436b400",
            name: "webpack",
            url: "https://www.webpackjs.com/",
            intro: "让一切变得简单",
            icon: "webpackjs",
            color: "#55A7DD",
            classify: ["develop", "front-end"],
          },
        ],
      },
      {
        id: "305bc170bac34452b09f4c7bfd46523b",
        name: "后端",
        path: "rear-end",
        intro: "",
        children: [
          {
            id: "8a03034d7cb246f5bb9a77a435e6e772",
            name: "NodeJs",
            url: "https://nodejs.org/zh-cn/",
            intro:
              "Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境。",
            icon: "nodejs",
            color: "#3E863D",
            classify: ["develop", "rear-end"],
          },
        ],
      },
      {
        id: "66a7d3d3571d4cb58aae454ddb747293",
        name: "移动端",
        path: "mobile terminal",
        intro: "",
        children: [
          {
            id: "8d34bc84c31048a8beb9b0f144f3fa5e",
            name: "Flutter中文网",
            url: "https://flutterchina.club/",
            intro: "极速构建漂亮的原生应用。",
            icon: "flutterchina",
            color: "#0091EA",
            classify: ["develop", "front-end", "mobile terminal"],
          },
          {
            id: "879a26836b83420898d1e4daf45b5035",
            name: "FlutterCN",
            url: "https://flutter.cn/",
            intro:
              "Flutter 是 Google 开源的 UI 工具包，帮助开发者通过一套代码库高效构建多平台精美应用，支持移动、Web、桌面和嵌入式平台。",
            icon: "fluttercn",
            color: "#ED4845",
            classify: ["develop", "front-end", "mobile terminal"],
          },
          {
            id: "cab0470e567445e6832971fdf9aefd73",
            name: "老孟 Flutter",
            url: "http://laomengit.com/",
            intro: "所有Flutter控件的详细用法、介绍、使用场景及注意问题",
            icon: "laomengit",
            color: "#01B895",
            classify: ["develop", "mobile terminal", "document", "flutter"],
          },
          {
            id: "8848034ad35f479798745b949169ab62",
            name: "Flutter 实战 第二版",
            url: "https://book.flutterchina.club/",
            intro: "由浅入深的介绍了Flutter技术和开发流程。",
            icon: "bookflutterchina",
            color: "#2C3E50",
            classify: ["develop", "flutter", "document", "mobile terminal"],
          },
        ],
      },
      {
        id: "40a3796a06a1448780adb7e2b3944576",
        name: "文档",
        path: "document",
        intro: "",
        children: [
          {
            id: "cab0470e567445e6832971fdf9aefd73",
            name: "老孟 Flutter",
            url: "http://laomengit.com/",
            intro: "所有Flutter控件的详细用法、介绍、使用场景及注意问题",
            icon: "laomengit",
            color: "#01B895",
            classify: ["develop", "mobile terminal", "document", "flutter"],
          },
          {
            id: "8848034ad35f479798745b949169ab62",
            name: "Flutter 实战 第二版",
            url: "https://book.flutterchina.club/",
            intro: "由浅入深的介绍了Flutter技术和开发流程。",
            icon: "bookflutterchina",
            color: "#2C3E50",
            classify: ["develop", "flutter", "document", "mobile terminal"],
          },
        ],
      },
      {
        id: "411ae611bdb1455f910fe917ba9b0439",
        name: "社区",
        path: "community",
        intro: "",
        children: [
          {
            id: "464583eeb36d4e488ce0dbfd55f24757",
            name: "GitHub",
            url: "https://github.com/",
            intro: "全球最大的开源技术社区",
            icon: "github",
            color: "#2D333B",
            classify: ["community", "develop"],
          },
          {
            id: "c8647d41918e491d96ecf951ec2ed158",
            name: "掘金",
            url: "https://juejin.cn/",
            intro: "代码不止，掘金不停",
            icon: "juejin",
            color: "#1E80FF",
            classify: ["community", "develop"],
          },
          {
            id: "e984ca4cfb934a2d9848a5101641ef81",
            name: "CSDN",
            url: "https://www.csdn.net/",
            intro: "专业开发者社区",
            icon: "csdn",
            color: "#FC5531",
            classify: ["community", "develop"],
          },
          {
            id: "d8795f22326d4bbeaf58004f57de9eed",
            name: "Segmentfault CN",
            url: "https://segmentfault.com/",
            intro: "检索，交流和分享任何技术编程相关的问题及知识。",
            icon: "segmentfault",
            color: "#39B95C",
            classify: ["community", "develop"],
          },
          {
            id: "52f700fa8bc7411cbfc86bf7f572ee80",
            name: "InfoQ",
            url: "https://www.infoq.cn/",
            intro: "促进软件开发及相关领域知识与创新的传播",
            icon: "infoq",
            color: "#0B76DB",
            classify: ["community", "develop"],
          },
          {
            id: "7c0daf094bdc4fa7936981f3a07617c8",
            name: "开源中国",
            url: "https://www.oschina.net/",
            intro: "中文开源技术交流社区",
            icon: "oschina",
            color: "#21B351",
            classify: ["community", "develop"],
          },
          {
            id: "d380fc254f0b4428a7359c2ac654fc75",
            name: "博客园",
            url: "https://www.cnblogs.com/",
            intro: "开发者的网上家园",
            icon: "cnblogs",
            color: "#2E7ACC",
            classify: ["community", "develop"],
          },
          {
            id: "0237ea70b65b4facbce9d286030aee88",
            name: "Stackoverflow",
            url: "https://stackoverflow.com/",
            intro: "Where Developers Learn, Share, & Build Careers",
            icon: "stackoverflow",
            color: "#F48024",
            classify: ["community", "develop"],
          },
        ],
      },
    ],
  },
  {
    id: "c99f76b6af884ba2be1be72fa072c290",
    name: "设计",
    path: "design",
    intro: "",
    subClassify: [
      {
        id: "c72c26bf74374433ab41f25003b7356b",
        name: "图标库",
        path: "icons",
        intro: "",
        children: [
          {
            id: "75f6ae67b74a4457bb91edc58654ade1",
            name: "Font Awesome",
            url: "https://fontawesome.com/",
            intro:
              "Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.",
            icon: "fontawesome",
            color: "#183153",
            classify: ["design", "icons"],
          },
          {
            id: "1ab297fb419642f0adfa8e1d304daa6f",
            name: "Icon Font",
            url: "https://www.iconfont.cn/",
            icon: "iconfont",
            color: "#183153",
            classify: ["design", "icons"],
          },
          {
            id: "18bcd286eaf942829a2e6322084ab679",
            name: "Material Icons",
            url: "https://fonts.google.com/icons",
            intro:
              "Material Icons are available in five styles and a range of downloadable sizes and densities. The icons are based on the core Material Design principles and metrics.",
            icon: "materialicons",
            color: "#BDBDBD",
            classify: ["design", "icons"],
          },
          {
            id: "fcdfc66efc524d73849c6cbc52fa10a5",
            name: "Simple Icons",
            url: "https://simpleicons.org/",
            intro: "Free SVG icons for popular brands",
            icon: "simpleicons",
            color: "#222222",
            classify: ["design", "icons"],
          },
        ],
      },
    ],
  },
];
export default navigationData;
