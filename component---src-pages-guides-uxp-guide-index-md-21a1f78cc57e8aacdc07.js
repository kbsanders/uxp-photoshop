(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{ytIV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return d}));var a=n("wx14"),o=n("zLVn"),i=(n("q1tI"),n("7ljp")),s=n("LHWr"),r=(n("qKvR"),{}),p={_frontmatter:r},l=s.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.mdx)(l,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"uxp-overview"},"UXP Overview"),Object(i.mdx)("p",null,"If you're coming to Photoshop development from Adobe XD, you probably know all you need to about UXP. But if you're brand-new to UXP, start here to learn how to build UXP plugins for Photoshop."),Object(i.mdx)("h2",{id:"the-uxp-technology-stack"},"The UXP Technology Stack"),Object(i.mdx)("p",null,"UXP provides a comprehensive extensibility solution, turning JavaScript and HTML markup into controls in native application windows. Unlike older CEP (Common Extensibility Platform) plugins, UXP plugins run within the same process as the host application, with their UI in its own non-blocking thread."),Object(i.mdx)("p",null,"Also unlike CEP plugins, UXP plugins communicate natively with the host application; there is no boundary between JavaScript and ExtendScript that requires passing strings back and forth."),Object(i.mdx)("p",null,"UXP plugins are built using JavaScript (aka ECMAScript), the scripting language of the Web. All but the simplest plugins also use HTML and CSS. The JavaScript engine is ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://v8.dev",target:"_blank",rel:"nofollow noopener noreferrer"}),"V8"),", a modern implementation used in many popular browsers. This is in contrast to the engine used in ExtendScript, which is ECMA Edition 3 (about 20 years old). UXP supports all of ES5 and most of ES6 features, including arrow functions, async/await, etc."),Object(i.mdx)("p",null,"Basically, a UXP plugin is running inside a pseudo-browser window, inside the host application (e.g., Photoshop). Even though UXP uses HTML, CSS, and JavaScript, its underlying engine is ",Object(i.mdx)("em",{parentName:"p"},"not")," a full browser (unlike Chromium, which is used in CEP). This means that some HTML and CSS features that you may be used to in web development and CEP are not supported in UXP. Additionally, some JavasScript libraries and many JavaScript frameworks are not supported. An overview of what's supported and what's not in UXP is ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"../guides/uxp_basics/unsupported.md"}),"here"),". That page will change as UXP matures and additional functionality is added to its browser, so you might want to bookmark it."),Object(i.mdx)("p",null,"Since UXP is a cross-application cross-platform technology, its documentation starts ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"#TBD"}),"here"),", and it applies to all Adobe applications that support UXP. Documentation for Photoshop-specific features that are exposed by UXP starts ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"../ps_basics/index.md"}),"here"),"."),Object(i.mdx)("h2",{id:"key-uxp-features"},"Key UXP Features"),Object(i.mdx)("p",null,"Independent of the host application API, UXP provides features of its own, including:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"File access - UXP can read and write files and folders in the user's filesystem. File accesses outside of the plugin's root folder, the plugin's data folder, and a plugin temporary folder require the user's permission. File I/O is discussed ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"./file-access.md"}),"here"),". ")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Network access - UXP supports XMLHttpRequest, WebSockets, and Fetch APIs. Network access is discussed ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"./network-io.md"}),"here"),".")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"HTML and CSS - UXP supports a subset of HTML and CSS needed to develop plugin UIs.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Spectrum CSS - UXP plugins can use platform-native HTML components such as buttons, input fields, etc. But a plugin can also use Spectrum CSS components.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Debugging - UXP plugins can be debugged using the UXP Developer Tool, ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"../uxp-developer-tool/index.js"}),"described here"),".")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Localization\nIf you want your plugins to be used internationally, you should localize them. ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"./localization-and-platforms.md"}),"Here's how to localize your plugins"),".")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Flyout menus\nIf you're writing a panel-based plugin, you have access to the flyout menu (shown at the top right of every panel). Flyout menus are ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"./flyout-menus.md"}),"described here"),"."))),Object(i.mdx)("h2",{id:"setting-up-for-uxp-development"},"Setting Up for UXP Development"),Object(i.mdx)("p",null,"The first thing you'll want to do to start developing UXP plugins is to understand the development toolchain. ",Object(i.mdx)("a",Object(a.a)({parentName:"p"},{href:"./uxp-toolchain/"}),"This page")," explains describes the tools you'll need.."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-index-md-21a1f78cc57e8aacdc07.js.map