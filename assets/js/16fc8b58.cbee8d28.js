"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[947],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6460:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},u="Uninstall",s={unversionedId:"advanced/uninstall",id:"advanced/uninstall",title:"Uninstall",description:"To uninstall kube-green, you should always use the same process for installing but in reverse.",source:"@site/docs/advanced/uninstall.md",sourceDirName:"advanced",slug:"/advanced/uninstall",permalink:"/docs/advanced/uninstall",editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/advanced/uninstall.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Usage with kind",permalink:"/docs/tutorials/kind"},next:{title:"API Reference",permalink:"/docs/apireference_v1alpha1"}},c=[{value:"kubectl",id:"kubectl",children:[],level:2},{value:"kustomize",id:"kustomize",children:[],level:2},{value:"Operator Lifecycle Manager (OLM)",id:"operator-lifecycle-manager-olm",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uninstall"},"Uninstall"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To uninstall ",(0,i.kt)("em",{parentName:"p"},"kube-green"),", you should always use the same process for installing but in reverse."))),(0,i.kt)("p",null,"Before continuing, ensure that there are not ",(0,i.kt)("em",{parentName:"p"},"kube-green")," resources in the cluster.",(0,i.kt)("br",{parentName:"p"}),"\n","You can check it with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get SleepInfo --all-namespaces\n")),(0,i.kt)("h2",{id:"kubectl"},"kubectl"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The uninstall commands below will delete all ",(0,i.kt)("em",{parentName:"p"},"kube-green")," CRD in the cluster.",(0,i.kt)("br",{parentName:"p"}),"\n","If you run undeploy command, the namespace of ",(0,i.kt)("em",{parentName:"p"},"kube-green")," (by default ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-green"),"), will be deleted."))),(0,i.kt)("p",null,"You can uninstall it using the kubectl ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," command."),(0,i.kt)("p",null,"Delete the installation manifests using a link to your currently running ",(0,i.kt)("em",{parentName:"p"},"kube-green")," version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"https://github.com/kube-green/kube-green/releases/download/${RELEASE_TAG}/kube-green.yaml\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"${RELEASE_TAG}")," is the tag of the release currently running."),(0,i.kt)("h2",{id:"kustomize"},"kustomize"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The uninstall commands below will delete all ",(0,i.kt)("em",{parentName:"p"},"kube-green")," CRD in the cluster.",(0,i.kt)("br",{parentName:"p"}),"\n","If you run undeploy command, the namespace of ",(0,i.kt)("em",{parentName:"p"},"kube-green")," (by default ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-green"),"), will be deleted."))),(0,i.kt)("p",null,"To uninstall the operator from the cluster, change working directory to the root of ",(0,i.kt)("em",{parentName:"p"},"kube-green")," repository, and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make undeploy\n")),(0,i.kt)("h2",{id:"operator-lifecycle-manager-olm"},"Operator Lifecycle Manager (OLM)"),(0,i.kt)("p",null,"To uninstall the operator from the cluster, follow ",(0,i.kt)("a",{parentName:"p",href:"https://olm.operatorframework.io/docs/tasks/uninstall-operator/"},"this guide"),"."))}m.isMDXComponent=!0}}]);