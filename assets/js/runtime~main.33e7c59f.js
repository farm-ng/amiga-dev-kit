(()=>{"use strict";var e,a,f,b,c,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=d,r.c=t,e=[],r.O=(a,f,b,c)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||d>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<d&&(d=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,b,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(c,d),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({53:"935f2afb",136:"20881552",205:"83d480e9",346:"f96cfd04",384:"febb55c6",437:"7ea92410",533:"b2b675dd",793:"d4f15f2f",803:"77363477",925:"a480bfc2",1077:"0c0027a6",1078:"e6b8c514",1085:"733f8ea4",1149:"64638251",1238:"08736445",1292:"6481ea79",1334:"27e82f7d",1388:"2f6ec8d9",1399:"14a70713",1455:"63097759",1471:"25f67766",1477:"b2f554cd",1493:"d5141a5a",1520:"1755b190",1615:"16345591",1630:"7f75f107",1713:"a7023ddc",2083:"d41c5275",2148:"3ebcbd7e",2232:"c8a20f2f",2267:"d571f4a4",2307:"c1f94867",2341:"25248eb7",2483:"65c61ae9",2535:"814f3328",2614:"5248a5e3",2686:"31f45b52",2708:"02365777",2764:"0aa3af30",2881:"b819b42b",2989:"5ecff173",3010:"16601c76",3050:"eef0346b",3068:"82487722",3085:"1f391b9e",3089:"a6aa9e1f",3253:"8bb37ca2",3278:"9a69a159",3318:"248c4e50",3363:"90c1d685",3418:"707d1d87",3425:"18a524a5",3442:"037ab9b9",3487:"649f5488",3490:"5c808265",3542:"28d467d5",3608:"9e4087bc",3635:"af96ff05",3751:"3720c009",3763:"5276cdbe",3824:"bbecab28",3834:"d16ae423",3882:"c930ceb7",3906:"dac09dfc",3914:"28ef4102",3943:"fb63b99b",3975:"ab1fde8c",4013:"01a85c17",4022:"ca9189be",4121:"55960ee5",4149:"2a6f4879",4157:"283e63f8",4195:"c4f5d8e4",4271:"59c2e5f5",4306:"f14b63eb",4368:"a94703ab",4370:"31bfd28b",4377:"17196cf9",4406:"3d5c94ed",4654:"630bf199",4731:"6487a5c3",4735:"d18ac987",4832:"ece86388",4884:"5f19c161",4956:"af4c1abd",4994:"94905b36",5042:"332d8fe2",5246:"5ab20b11",5301:"bcfca9a1",5358:"ab0c67b7",5658:"d11a4e92",5666:"5aa65751",5958:"ffef86fa",6102:"b872a128",6103:"ccc49370",6114:"42a531d3",6150:"85f96761",6193:"a1e533ff",6287:"0f1dd641",6353:"e1197922",6441:"6a1b0507",6493:"42274c0f",6594:"c9181da0",6639:"4f204c8f",6724:"9d06307a",6740:"31c9729e",6760:"f7e7bb57",6983:"982ac012",6986:"44438822",7018:"63ffe4b0",7085:"9f03ef16",7087:"ead7cfb3",7124:"b6a7a10b",7139:"65608a03",7162:"d589d3a7",7256:"696bcda8",7282:"fd7e5383",7383:"f0ea17f2",7414:"393be207",7438:"9c021584",7470:"09e49901",7700:"08fbdc4b",7918:"17896441",7920:"1a4e3797",8246:"77bfdb01",8269:"ab50c39c",8446:"62005459",8518:"a7bd4aaa",8610:"6875c492",8624:"b47790e8",8685:"4e9fc795",8721:"f0acf4ba",8901:"fc578d2a",8950:"8c1f8f8c",9380:"017af9a4",9389:"ab02a1a7",9462:"a6d99bb7",9480:"5097f00d",9482:"8ae14039",9551:"d6729dc2",9566:"2dde233a",9653:"46688559",9661:"5e95c892",9680:"dff0b824",9790:"8542e1eb",9851:"e7cb8e0b",9924:"df203c0f",9945:"90782b6e",9955:"c582042f"}[e]||e)+"."+{53:"ef7f72bf",136:"30bff932",205:"b4753d46",346:"9cb9cba9",384:"04db2b0f",437:"58cbd64c",533:"8ca79da9",793:"04934ea1",803:"e7db58ca",925:"646eb1fc",1077:"6e304828",1078:"509ba7a2",1085:"2f4204ba",1149:"10d75fba",1238:"4ba57d5e",1292:"a35d37b5",1334:"73d9cf22",1388:"f728d709",1399:"79efc592",1426:"7a8eadd5",1455:"aab17259",1471:"9521a477",1477:"78082361",1493:"94561cf1",1520:"1e1b4aec",1615:"53f02ef0",1630:"8264b675",1713:"f47f8687",1772:"61e2e3be",2083:"2fcf60e5",2148:"7e564f2c",2232:"f74d03e9",2267:"e3dfae20",2307:"c513ed28",2341:"4f7eca1c",2459:"18176328",2483:"2ae3b22f",2535:"d2df4150",2614:"c35e5e25",2686:"8fc33fa2",2708:"e480bf87",2764:"e75790d9",2881:"0c146a04",2989:"aab24f86",3010:"f710fb87",3050:"a8209796",3068:"3a3db1e0",3085:"ab9f3fb8",3089:"3f55338a",3253:"b1114311",3278:"826edb3e",3318:"2fccf815",3363:"5c128c65",3418:"2d3bb503",3425:"03b2638e",3442:"195ee04f",3487:"749621fb",3490:"f3313806",3542:"bf046734",3608:"ba70d579",3635:"6d49188c",3751:"69350d4f",3763:"126d005d",3824:"47466d8d",3834:"62a7814e",3882:"4908c830",3906:"4a8a289d",3914:"3804ed0e",3943:"fe0de658",3975:"56c4178e",4013:"b3a5fc6d",4022:"1b5132ce",4121:"965412a5",4149:"e7d04ed7",4157:"c6380f52",4195:"1f23c937",4271:"2c4a10e4",4306:"24d35fdb",4368:"c6a8b2b9",4370:"f6b57b49",4377:"a50eb8f8",4406:"d6f5a148",4654:"221a41eb",4731:"63f3ce88",4735:"cd34b214",4832:"556e066c",4884:"f93b0360",4956:"c0c14ba3",4994:"7ae26c80",5042:"c8e6fdc3",5246:"a7ebf213",5301:"7af943c4",5358:"5ca6312b",5658:"750ab314",5666:"301c2c54",5958:"290f1069",6102:"35ab9dbe",6103:"31589954",6114:"36416c13",6150:"1dfd730c",6193:"8bfff900",6287:"25552809",6353:"c6f2a146",6441:"8a8be7d6",6493:"00da7dbd",6594:"aa1e6316",6639:"a23cc921",6724:"48ac4a7f",6740:"8218380d",6760:"753ec672",6945:"cf7b1172",6983:"9dc873c6",6986:"12f92f4e",7018:"6a64c6da",7085:"53a5e9fe",7087:"a6cc1a61",7124:"5c6698ac",7139:"7717a17b",7162:"904dae04",7256:"fcd0861c",7282:"d6f4775f",7383:"ebc5b7cb",7414:"a580735e",7438:"a8cbb7dd",7470:"08272953",7700:"471b2273",7918:"aa00ded0",7920:"a6765791",8246:"56b9aa60",8269:"7082a9a8",8446:"3481bb29",8518:"4da9c47c",8610:"45c16de1",8624:"892bb184",8685:"b984a169",8721:"bfd5d815",8894:"941269f6",8901:"475c5033",8950:"0ca47963",9380:"c727baaa",9389:"e30a2b82",9462:"cb4df43b",9480:"3ff78d7c",9482:"988bf7d7",9551:"09b5000e",9566:"c6637dad",9653:"622237a0",9661:"c734c68b",9677:"d3bc7b29",9680:"7c62a7e5",9790:"70d8188c",9851:"d3af75c2",9924:"2d15bf9b",9945:"04ba13c2",9955:"51572e1c"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},c="amiga-developers-website:",r.l=(e,a,f,d)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+f){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),b[e]=[a];var u=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={16345591:"1615",17896441:"7918",20881552:"136",44438822:"6986",46688559:"9653",62005459:"8446",63097759:"1455",64638251:"1149",77363477:"803",82487722:"3068","935f2afb":"53","83d480e9":"205",f96cfd04:"346",febb55c6:"384","7ea92410":"437",b2b675dd:"533",d4f15f2f:"793",a480bfc2:"925","0c0027a6":"1077",e6b8c514:"1078","733f8ea4":"1085","08736445":"1238","6481ea79":"1292","27e82f7d":"1334","2f6ec8d9":"1388","14a70713":"1399","25f67766":"1471",b2f554cd:"1477",d5141a5a:"1493","1755b190":"1520","7f75f107":"1630",a7023ddc:"1713",d41c5275:"2083","3ebcbd7e":"2148",c8a20f2f:"2232",d571f4a4:"2267",c1f94867:"2307","25248eb7":"2341","65c61ae9":"2483","814f3328":"2535","5248a5e3":"2614","31f45b52":"2686","02365777":"2708","0aa3af30":"2764",b819b42b:"2881","5ecff173":"2989","16601c76":"3010",eef0346b:"3050","1f391b9e":"3085",a6aa9e1f:"3089","8bb37ca2":"3253","9a69a159":"3278","248c4e50":"3318","90c1d685":"3363","707d1d87":"3418","18a524a5":"3425","037ab9b9":"3442","649f5488":"3487","5c808265":"3490","28d467d5":"3542","9e4087bc":"3608",af96ff05:"3635","3720c009":"3751","5276cdbe":"3763",bbecab28:"3824",d16ae423:"3834",c930ceb7:"3882",dac09dfc:"3906","28ef4102":"3914",fb63b99b:"3943",ab1fde8c:"3975","01a85c17":"4013",ca9189be:"4022","55960ee5":"4121","2a6f4879":"4149","283e63f8":"4157",c4f5d8e4:"4195","59c2e5f5":"4271",f14b63eb:"4306",a94703ab:"4368","31bfd28b":"4370","17196cf9":"4377","3d5c94ed":"4406","630bf199":"4654","6487a5c3":"4731",d18ac987:"4735",ece86388:"4832","5f19c161":"4884",af4c1abd:"4956","94905b36":"4994","332d8fe2":"5042","5ab20b11":"5246",bcfca9a1:"5301",ab0c67b7:"5358",d11a4e92:"5658","5aa65751":"5666",ffef86fa:"5958",b872a128:"6102",ccc49370:"6103","42a531d3":"6114","85f96761":"6150",a1e533ff:"6193","0f1dd641":"6287",e1197922:"6353","6a1b0507":"6441","42274c0f":"6493",c9181da0:"6594","4f204c8f":"6639","9d06307a":"6724","31c9729e":"6740",f7e7bb57:"6760","982ac012":"6983","63ffe4b0":"7018","9f03ef16":"7085",ead7cfb3:"7087",b6a7a10b:"7124","65608a03":"7139",d589d3a7:"7162","696bcda8":"7256",fd7e5383:"7282",f0ea17f2:"7383","393be207":"7414","9c021584":"7438","09e49901":"7470","08fbdc4b":"7700","1a4e3797":"7920","77bfdb01":"8246",ab50c39c:"8269",a7bd4aaa:"8518","6875c492":"8610",b47790e8:"8624","4e9fc795":"8685",f0acf4ba:"8721",fc578d2a:"8901","8c1f8f8c":"8950","017af9a4":"9380",ab02a1a7:"9389",a6d99bb7:"9462","5097f00d":"9480","8ae14039":"9482",d6729dc2:"9551","2dde233a":"9566","5e95c892":"9661",dff0b824:"9680","8542e1eb":"9790",e7cb8e0b:"9851",df203c0f:"9924","90782b6e":"9945",c582042f:"9955"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)f.push(b[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>b=e[a]=[f,c]));f.push(b[2]=c);var d=r.p+r.u(a),t=new Error;r.l(d,(f=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var c=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",t.name="ChunkLoadError",t.type=c,t.request=d,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var b,c,d=f[0],t=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(f);n<d.length;n++)c=d[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();