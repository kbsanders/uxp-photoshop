(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[871],{70051:function(e,o,a){"use strict";a.r(o),a.d(o,{_frontmatter:function(){return r},default:function(){return h}});var t=a(22122),n=a(19756),i=(a(15007),a(64983)),l=a(99536),s=["components"],r={},p={_frontmatter:r},u=l.Z;function h(e){var o=e.components,a=(0,n.Z)(e,s);return(0,i.mdx)(u,(0,t.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"code-samples"},"Code Samples"),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"Here are some examples of plugins you can create with UXP in Photoshop. On GitHub, they exist as fully formed projects that you can load immediately to get a flavor for how things work; then you can modify the projects so they become more your own code."),(0,i.mdx)("p",null,"The samples are all available on GitHub ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/uxp-photoshop-plugin-samples"},"here")," where you can clone or fork them. If you're not familiar with GitHub and just want to download the examples, click on the link above and just click the green ",(0,i.mdx)("inlineCode",{parentName:"p"},"Code"),' button, then click "Download ZIP."'),(0,i.mdx)("p",null,"There are three basic kinds of plugins:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},'Direct Action ("headless") - a plugin doesn\'t ',(0,i.mdx)("em",{parentName:"p"},"have")," to present a UI to the user. If you want to create a plugin that does the same thing each time without any user input, or gets its parameters some other way (say, a configuration file or a website), this might be the way to go.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Modal Dialog - many plugins can use a simple dialog box to get parameters from the user, then execute code based on those parameters. If you're coming from ExtendScript, you'll most likely be building this type of plugin.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Panel - panels are everywhere in Photoshop, and plugins can present first-class panels that look and feel like the ones built into Photoshop."))),(0,i.mdx)("p",null,"A given plugin can use one or all of the above approaches. For example, a single plugin could use a modal dialog for some operations, a panel for others, and a direct action (invoked by a flyout menu in a panel or a Photoshop's Plugins menu) for other operations. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.json")," specifies what the entry points of your plugin are."),(0,i.mdx)("h2",{id:"plain-javascript-vs-react"},"Plain JavaScript vs React"),(0,i.mdx)("p",null,"These samples come in two flavors: one uses plain JavaScript with no extra frameworks, while the other uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org"},"React"),' JavaScript framework. If you\'ve never used React, definitely start with the plain (aka "vanilla") JavaScript samples.'),(0,i.mdx)("p",null,"The React versions support richer, more complex user interactions, but contain code that will be foreign to you if you've never used React. The packaging of a React-based plugin is also more complex than one using plain JavaScript, due to the dependencies React requires."),(0,i.mdx)("p",null,"When you build a React-based plugin, you will be using command-line tools for the build process, although you can use the UXP Developer Tool for loading and debugging. When you build a plugin that uses plain JavaScript, you only need the UXP Developer Tool (and a text editor, of course)."),(0,i.mdx)("p",null,"If you're writing a plugin with a complex UI (for example, a UI that changes depending upon what item in a listbox is selected, or a UI that changes based on the user's selection in Photoshop), you probably want to use React."),(0,i.mdx)("h2",{id:"batchplay"},"batchPlay"),(0,i.mdx)("p",null,"As you browse through the sample code, you'll see occasional use of a method named ",(0,i.mdx)("inlineCode",{parentName:"p"},"batchPlay"),". This is a way for your plugin to call Photoshop methods and retrieve data that isn't yet available through the Photoshop API for UXP. There are a number of batchPlay examples to show typical usage of this feature."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-code-samples-index-md-9308095ad2dea29e95fb.js.map