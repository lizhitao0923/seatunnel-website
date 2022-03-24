"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3435],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8145:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={},s="Json",u={unversionedId:"spark/configuration/transform-plugins/Json",id:"spark/configuration/transform-plugins/Json",title:"Json",description:"Transform plugin : Json [Spark]",source:"@site/docs/spark/configuration/transform-plugins/Json.md",sourceDirName:"spark/configuration/transform-plugins",slug:"/spark/configuration/transform-plugins/Json",permalink:"/zh-CN/docs/spark/configuration/transform-plugins/Json",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/transform-plugins/Json.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/zh-CN/docs/spark/configuration/source-plugins/source-plugin"},next:{title:"Split",permalink:"/zh-CN/docs/spark/configuration/transform-plugins/Split"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"source_field string",id:"source_field-string",level:3},{value:"target_field string",id:"target_field-string",level:3},{value:"schema_dir string",id:"schema_dir-string",level:3},{value:"schema_file string",id:"schema_file-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Schema Use cases",id:"schema-use-cases",level:2},{value:"Examples",id:"examples",level:2},{value:"Do not use <code>target_field</code>",id:"do-not-use-target_field",level:3},{value:"Use <code>target_field</code>",id:"use-target_field",level:3},{value:"Use <code>schema_file</code>",id:"use-schema_file",level:3}],m={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"json"},"Json"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Transform plugin : Json ","[Spark]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Json analysis of the specified fields of the original data set"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_field"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_field"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"root"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema_dir"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema_file"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"Source field, if not configured, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"raw_message")),(0,l.kt)("h3",{id:"target_field-string"},"target_field ","[string]"),(0,l.kt)("p",null,"The target field, if it is not configured, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"__root__")," , and the result of Json parsing will be uniformly placed at the top of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataframe")),(0,l.kt)("h3",{id:"schema_dir-string"},"schema_dir ","[string]"),(0,l.kt)("p",null,"Style directory, if not configured, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"$seatunnelRoot/plugins/json/files/schemas/")),(0,l.kt)("h3",{id:"schema_file-string"},"schema_file ","[string]"),(0,l.kt)("p",null,"The style file name, if it is not configured, the default is empty, that is, the structure is not specified, and the system derives it by itself according to the input of the data source."),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/spark/configuration/transform-plugins/transform-plugin"},"Transform Plugin")," for details"),(0,l.kt)("h2",{id:"schema-use-cases"},"Schema Use cases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"json schema")," usage scenarios")),(0,l.kt)("p",null,"The multiple data sources of a single task may contain different styles of json data. For example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"topicA")," style from ",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka")," is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "A": "a_val",\n  "B": "b_val"\n}\n')),(0,l.kt)("p",null,"The style from ",(0,l.kt)("inlineCode",{parentName:"p"},"topicB")," is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "C": "c_val",\n  "D": "d_val"\n}\n')),(0,l.kt)("p",null,"When running ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," , you need to fuse the data of ",(0,l.kt)("inlineCode",{parentName:"p"},"topicA")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"topicB")," into a wide table for calculation. You can specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"schema")," whose content style is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "A": "a_val",\n  "B": "b_val",\n  "C": "c_val",\n  "D": "d_val"\n}\n')),(0,l.kt)("p",null,"Then the fusion output result of ",(0,l.kt)("inlineCode",{parentName:"p"},"topicA")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"topicB")," is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"+-----+-----+-----+-----+\n|A    |B    |C    |D    |\n+-----+-----+-----+-----+\n|a_val|b_val|null |null |\n|null |null |c_val|d_val|\n+-----+-----+-----+-----+\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"do-not-use-target_field"},"Do not use ",(0,l.kt)("inlineCode",{parentName:"h3"},"target_field")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+---+-----+\n|message                   |age|name |\n+----------------------------+---+-----+\n|{"name": "gary", "age": 28} |28 |gary |\n|{"name": "ricky", "age": 23}|23 |ricky|\n+----------------------------+---+-----+\n')),(0,l.kt)("h3",{id:"use-target_field"},"Use ",(0,l.kt)("inlineCode",{parentName:"h3"},"target_field")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n    target_field = "info"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Souce")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+----------+\n|message                   |info      |\n+----------------------------+----------+\n|{"name": "gary", "age": 28} |[28,gary] |\n|{"name": "ricky", "age": 23}|[23,ricky]|\n+----------------------------+----------+\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The results of json processing support ",(0,l.kt)("inlineCode",{parentName:"p"},"select * from where info.age = 23")," such SQL statements")),(0,l.kt)("h3",{id:"use-schema_file"},"Use ",(0,l.kt)("inlineCode",{parentName:"h3"},"schema_file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'json {\n    source_field = "message"\n    schema_file = "demo.json"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schema")),(0,l.kt)("p",null,"Place the following content in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/seatunnel/plugins/json/files/schemas/demo.json")," of Driver Node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "demo",\n   "age": 24,\n   "city": "LA"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Source")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+\n|message                   |\n+----------------------------+\n|{"name": "ricky", "age": 24}|\n|{"name": "gary", "age": 28} |\n+----------------------------+\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sink")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'+----------------------------+---+-----+-----+\n|message                     |age|name |city |\n+----------------------------+---+-----+-----+\n|{"name": "gary", "age": 28} |28 |gary |null |\n|{"name": "ricky", "age": 23}|23 |ricky|null |\n+----------------------------+---+-----+-----+\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you use ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster mode")," for deployment, make sure that the ",(0,l.kt)("inlineCode",{parentName:"p"},"json schemas")," directory is packaged in ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins.tar.gz"))))}d.isMDXComponent=!0}}]);