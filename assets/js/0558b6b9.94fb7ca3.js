"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7032],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,g=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="Iceberg",u={unversionedId:"spark/configuration/sink-plugins/Iceberg",id:"spark/configuration/sink-plugins/Iceberg",title:"Iceberg",description:"Sink plugin: Iceberg [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Iceberg.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Iceberg",permalink:"/docs/spark/configuration/sink-plugins/Iceberg",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Iceberg.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/spark/configuration/sink-plugins/Hudi"},next:{title:"Jdbc",permalink:"/docs/spark/configuration/sink-plugins/Jdbc"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"path",id:"path",level:3},{value:"saveMode",id:"savemode",level:3},{value:"target-file-size-bytes",id:"target-file-size-bytes",level:3},{value:"check-nullability",id:"check-nullability",level:3},{value:"snapshot-property.custom-key",id:"snapshot-propertycustom-key",level:3},{value:"fanout-enabled",id:"fanout-enabled",level:3},{value:"check-ordering",id:"check-ordering",level:3},{value:"Example",id:"example",level:2}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iceberg"},"Iceberg"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sink plugin: Iceberg ","[Spark]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data to Iceberg."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#path"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#saveMode"},"saveMode")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"append")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#target-file-size-bytes"},"target-file-size-bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#check-nullability"},"check-nullability")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#snapshot-property.custom-key"},"snapshot-property.custom-key")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fanout-enabled"},"fanout-enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#check-ordering"},"check-ordering")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/spark-configuration/"},"iceberg write options")," for more configurations."),(0,l.kt)("h3",{id:"path"},"path"),(0,l.kt)("p",null,"Iceberg table location."),(0,l.kt)("h3",{id:"savemode"},"saveMode"),(0,l.kt)("p",null,"append or overwrite. Only these two modes are supported by iceberg. The default value is append."),(0,l.kt)("h3",{id:"target-file-size-bytes"},"target-file-size-bytes"),(0,l.kt)("p",null,"Overrides this table\u2019s write.target-file-size-bytes"),(0,l.kt)("h3",{id:"check-nullability"},"check-nullability"),(0,l.kt)("p",null,"Sets the nullable check on fields"),(0,l.kt)("h3",{id:"snapshot-propertycustom-key"},"snapshot-property.custom-key"),(0,l.kt)("p",null,'Adds an entry with custom-key and corresponding value in the snapshot summary\neg: snapshot-property.aaaa="bbbb"'),(0,l.kt)("h3",{id:"fanout-enabled"},"fanout-enabled"),(0,l.kt)("p",null,"Overrides this table\u2019s write.spark.fanout.enabled"),(0,l.kt)("h3",{id:"check-ordering"},"check-ordering"),(0,l.kt)("p",null,"Checks if input schema and table schema are same"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'iceberg {\n    path = "hdfs://localhost:9000/iceberg/warehouse/db/table"\n  }\n')))}k.isMDXComponent=!0}}]);