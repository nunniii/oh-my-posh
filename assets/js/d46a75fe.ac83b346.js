(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1958,1265,4440,5573],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(i,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),o=n(944),r=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,p=e.groupId,h=e.className,d=(0,o.Z)(),f=d.tabGroupChoices,g=d.setTabGroupChoices,k=(0,a.useState)(c),y=k[0],b=k[1],v=a.Children.toArray(e.children),N=[];if(null!=p){var w=f[p];null!=w&&w!==y&&m.some((function(e){return e.value===w}))&&b(w)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=m[n].value;b(a),null!=p&&(g(p,a),setTimeout((function(){var e,n,a,o,r,l,i,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&o<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case i:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),o=n(9443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},861:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l=n(1395),s=n(8215),i={},u={unversionedId:"install-customize-cmd",id:"install-customize-cmd",isDocsHomePage:!1,title:"install-customize-cmd",description:"<Tabs",source:"@site/docs/install-customize-cmd.mdx",sourceDirName:".",slug:"/install-customize-cmd",permalink:"/docs/install-customize-cmd",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-customize-cmd.mdx",version:"current",frontMatter:{}},c=[],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{defaultValue:"powershell",groupId:"shell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Export-PoshTheme -FilePath ~/.mytheme.omp.json -Format json\n")),(0,r.kt)("p",null,"Once you're done editing, adjust your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PROFILE")," to use your newly created theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"oh-my-posh --init --shell pwsh --config ~/.mytheme.omp.json | Invoke-Expression\n"))),(0,r.kt)(s.Z,{value:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),(0,r.kt)("p",null,"Once you're done editing, adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," to use your newly created theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.mytheme.omp.json)"\n')),(0,r.kt)("p",null,"When adjusted, reload your profile for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.zshrc\n"))),(0,r.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),(0,r.kt)("p",null,"Once you're done editing, adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," to use your newly created theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.mytheme.omp.json)"\n')),(0,r.kt)("p",null,"When adjusted, reload your profile for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n"))),(0,r.kt)(s.Z,{value:"fish",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),(0,r.kt)("p",null,"Once you're done editing, adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish")," to use your newly created theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.mytheme.omp.json | source\n")),(0,r.kt)("p",null,"Once adjusted, reload your config for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n")))))}p.isMDXComponent=!0},4101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l={},s={unversionedId:"install-customize",id:"install-customize",isDocsHomePage:!1,title:"install-customize",description:"At this point you're good to go. The jandedobbeleer.omp.json theme displays most common use-cases",source:"@site/docs/install-customize.md",sourceDirName:".",slug:"/install-customize",permalink:"/docs/install-customize",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-customize.md",version:"current",frontMatter:{}},i=[],u={toc:i};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At this point you're good to go. The ",(0,r.kt)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," theme displays most common use-cases\nin your prompt so 9/10 you'll be more than happy with it. However, if you want to explore additional\nfunctionality, going through the additional steps below will help you get started."),(0,r.kt)("h4",{id:"change-the-theme"},"Change the theme"),(0,r.kt)("p",null,"We downloaded all the themes and set ",(0,r.kt)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," as the one to use.\nHowever, there are ",(0,r.kt)("a",{parentName:"p",href:"/docs/themes"},"a lot more")," to be discovered and maybe there are some you like better."),(0,r.kt)("h4",{id:"override-the-theme-settings"},"Override the theme settings"),(0,r.kt)("p",null,"Maybe there's a theme you like, but you don't fancy the colors. Or, maybe there's a segment you\nwant to tweak/add, or replace some of the icons with a different one. Whatever the case, read through all\navailable options first, by starting with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configure"},"configuration guide"),"."),(0,r.kt)("p",null,"You can output the current theme to the format you like (",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak\nand store as your custom theme."))}c.isMDXComponent=!0},3067:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l=(n(1395),n(8215),n(3452)),s=n(4101),i=n(861),u={id:"macos",title:"macOS",sidebar_label:"\ud83c\udf4f macOS"},c={unversionedId:"macos",id:"macos",isDocsHomePage:!1,title:"macOS",description:"Setup your terminal",source:"@site/docs/install-macos.mdx",sourceDirName:".",slug:"/macos",permalink:"/docs/macos",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-macos.mdx",version:"current",sidebar_label:"\ud83c\udf4f macOS",frontMatter:{id:"macos",title:"macOS",sidebar_label:"\ud83c\udf4f macOS"},sidebar:"docs",previous:{title:"Windows",permalink:"/docs/windows"},next:{title:"Linux",permalink:"/docs/linux"}},m=[{value:"Setup your terminal",id:"setup-your-terminal",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Replace your existing prompt",id:"replace-your-existing-prompt",children:[]},{value:"Customize",id:"customize",children:[]}],p={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"setup-your-terminal"},"Setup your terminal"),(0,r.kt)("p",null,"As the standard terminal has issues displaying the ANSI characters correctly, we advise using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.iterm2.com/"},"iTerm2")," or any other modern day MacOS terminal that supports ANSI characters."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," formula is available for easy installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap jandedobbeleer/oh-my-posh\nbrew install oh-my-posh\n")),(0,r.kt)("p",null,"This installs two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oh-my-posh")," - Executable, added to ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"themes")," - The latest Oh my Posh themes")),(0,r.kt)("p",null,"If you want to use a standard theme, you can find them in ",(0,r.kt)("inlineCode",{parentName:"p"},"$(brew --prefix oh-my-posh)/themes"),", referencing them as such\nwill always keep them compatible with the binary when updating Oh my Posh."),(0,r.kt)("h4",{id:"preview-the-themes"},"Preview the themes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'for file in $(brew --prefix oh-my-posh)/themes/*.omp.json; do echo "$file\\n"; oh-my-posh --config $file --shell universal; echo "\\n"; done;\n')),(0,r.kt)("h4",{id:"update"},"Update"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade oh-my-posh\n")),(0,r.kt)("h3",{id:"replace-your-existing-prompt"},"Replace your existing prompt"),(0,r.kt)(l.default,{mdxType:"Shells"}),(0,r.kt)("h3",{id:"customize"},"Customize"),(0,r.kt)(s.default,{mdxType:"Customize"}),(0,r.kt)(i.default,{mdxType:"CustomizeCmd"}),(0,r.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}h.isMDXComponent=!0},3452:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l=n(1395),s=n(8215),i={},u={unversionedId:"install-shells",id:"install-shells",isDocsHomePage:!1,title:"install-shells",description:"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant",source:"@site/docs/install-shells.mdx",sourceDirName:".",slug:"/install-shells",permalink:"/docs/install-shells",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-shells.mdx",version:"current",frontMatter:{}},c=[{value:"Nu &lt; 0.32.0",id:"nu--0320",children:[]},{value:"Nu &gt;= 0.32.0",id:"nu--0320-1",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant\nfor the Powershell module)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --print-shell\n")),(0,r.kt)(l.Z,{defaultValue:"powershell",groupId:"shell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"},{label:"nu",value:"nu"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"oh-my-posh --init --shell pwsh --config ~/.mytheme.omp.json | Invoke-Expression\n")),(0,r.kt)("p",null,"Once added, reload your profile for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},". $PROFILE\n"))),(0,r.kt)(s.Z,{value:"zsh",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.mytheme.omp.json)"\n')),(0,r.kt)("p",null,"Once added, reload your profile for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n"))),(0,r.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.mytheme.omp.json)"\n')),(0,r.kt)("p",null,"Once added, reload your profile for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n")),(0,r.kt)("p",null,"Or, when using ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.profile"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.profile\n"))),(0,r.kt)(s.Z,{value:"fish",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's advised to be on the latest version of fish. Versions below 3.1.2 have issues displaying the prompt."))),(0,r.kt)("p",null,"Initialize Oh my Posh in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.poshthemes/jandedobbeleer.omp.json | source\n")),(0,r.kt)("p",null,"Once added, reload your config for the changes to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n"))),(0,r.kt)(s.Z,{value:"nu",mdxType:"TabItem"},(0,r.kt)("p",null,"Set the prompt and restart nu shell:"),(0,r.kt)("h3",{id:"nu--0320"},"Nu < 0.32.0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'config set prompt  "= `{{$(oh-my-posh --config ~/.poshthemes/jandedobbeleer.omp.json | str collect)}}`"\n')),(0,r.kt)("h3",{id:"nu--0320-1"},"Nu >= 0.32.0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'config set prompt  "(oh-my-posh --config ~/.poshthemes/jandedobbeleer.omp.json | str collect)"\n')),(0,r.kt)("p",null,"Restart nu shell for the changes to take effect."))))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);