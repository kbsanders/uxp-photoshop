(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"2YKv":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));var n=a("wx14"),m=a("zLVn"),c=(a("q1tI"),a("7ljp")),i=a("LHWr"),r=(a("qKvR"),{}),o={_frontmatter:r},d=i.a;function l(e){var t=e.components,a=Object(m.a)(e,["components"]);return Object(c.mdx)(d,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"The module that facilitates Actions being performed in the\nUXP-Photoshop world. You may perform your own ",Object(c.mdx)("inlineCode",{parentName:"p"},"batchPlay")," commands,\nor attach listeners using this module."),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var PhotoshopAction = require('photoshop').action;\n")),Object(c.mdx)("h2",{id:"index"},"Index"),Object(c.mdx)("h3",{id:"functions"},"Functions"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object(n.a)({parentName:"li"},{href:"photoshopaction.md#addnotificationlistener"}),"addNotificationListener")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object(n.a)({parentName:"li"},{href:"photoshopaction.md#batchplay"}),"batchPlay")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object(n.a)({parentName:"li"},{href:"photoshopaction.md#removenotificationlistener"}),"removeNotificationListener"))),Object(c.mdx)("h2",{id:"functions-1"},"Functions"),Object(c.mdx)("h3",{id:"addnotificationlistener"},"addNotificationListener"),Object(c.mdx)("p",null,"▸ ",Object(c.mdx)("strong",{parentName:"p"},"addNotificationListener"),"(",Object(c.mdx)("inlineCode",{parentName:"p"},"events"),": ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"../interfaces/notificationevent/"}),"NotificationEvent"),"[], ",Object(c.mdx)("inlineCode",{parentName:"p"},"notifier"),": NotificationListener): ",Object(c.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(c.mdx)("p",null,"Attach a listener to a Photoshop event. A callback in the form\nof ",Object(c.mdx)("inlineCode",{parentName:"p"},"(eventName: string, descriptor: Descriptor) => void")," will be performed."),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"await PhotoshopAction.addNotificationListener([{ event: 'open' }], onOpenNewDocument)\n")),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Parameters:")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"events")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("a",Object(n.a)({parentName:"td"},{href:"../interfaces/notificationevent/"}),"NotificationEvent"),"[]")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"notifier")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"NotificationListener")))),Object(c.mdx)("hr",null),Object(c.mdx)("h3",{id:"batchplay"},"batchPlay"),Object(c.mdx)("p",null,"▸ ",Object(c.mdx)("strong",{parentName:"p"},"batchPlay"),"(",Object(c.mdx)("inlineCode",{parentName:"p"},"commands"),": ActionDescriptor[], ",Object(c.mdx)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"../interfaces/batchplaycommandoptions/"}),"BatchPlayCommandOptions"),"): ",Object(c.mdx)("em",{parentName:"p"},"Promise‹ActionDescriptor[]›")),Object(c.mdx)("p",null,"Performs a batchPlay call with the provided commands. Equivalent\nto an ",Object(c.mdx)("inlineCode",{parentName:"p"},"executeAction")," in ExtendScript."),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}\nvar commands = [{ _obj: 'hide', _target: target }]\nawait PhotoshopAction.batchPlay(commands)\n")),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Parameters:")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"commands")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"ActionDescriptor[]")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"options?")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("a",Object(n.a)({parentName:"td"},{href:"../interfaces/batchplaycommandoptions/"}),"BatchPlayCommandOptions"))))),Object(c.mdx)("hr",null),Object(c.mdx)("h3",{id:"removenotificationlistener"},"removeNotificationListener"),Object(c.mdx)("p",null,"▸ ",Object(c.mdx)("strong",{parentName:"p"},"removeNotificationListener"),"(",Object(c.mdx)("inlineCode",{parentName:"p"},"events"),": ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"../interfaces/notificationevent/"}),"NotificationEvent"),"[], ",Object(c.mdx)("inlineCode",{parentName:"p"},"notifier"),": NotificationListener): ",Object(c.mdx)("em",{parentName:"p"},"Promise‹void›")),Object(c.mdx)("p",null,"Detaches a listener from a Photoshop event."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},Object(c.mdx)("inlineCode",{parentName:"strong"},"see"))," addNotificationListener"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"await PhotoshopAction.removeNotificationListener([{ event: 'open' }], onOpenNewDocument)\n")),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Parameters:")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"events")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("a",Object(n.a)({parentName:"td"},{href:"../interfaces/notificationevent/"}),"NotificationEvent"),"[]")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"notifier")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"NotificationListener")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-modules-photoshopaction-md-6c7a8c1add0bba759def.js.map