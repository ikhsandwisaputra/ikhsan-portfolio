import{s as Z,a as W,_ as H,b as $,c as q,u as V,r as h,d as S,j as e,m as v}from"./index-dDdgYomi.js";import{A as C}from"./quran-YGDI1tRu.js";import{l as G}from"./Static-GU-JcfMV.js";import{B as K}from"./sidoc-0o-9wqNq.js";function z(){var s=!1,i=[],r=new Set,t={subscribe:function(n){return r.add(n),function(){return void r.delete(n)}},start:function(n,d){if(s){var a=[];return r.forEach(function(u){a.push(q(u,n,{transitionOverride:d}))}),Promise.all(a)}else return new Promise(function(u){i.push({animation:[n,d],resolve:u})})},set:function(n){return r.forEach(function(d){Z(d,n)})},stop:function(){r.forEach(function(n){W(n)})},mount:function(){return s=!0,i.forEach(function(n){var d=n.animation,a=n.resolve;t.start.apply(t,H([],$(d))).then(a)}),function(){s=!1,t.stop()}}};return t}function Q(){var s=V(z);return h.useEffect(s.mount,[]),s}const X="/ikhsan-portfolio/assets/1-xLNJoFd3.jpeg";var J={exports:{}};(function(s,i){(function(r,t){t()})(S,function(){function r(c,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function t(c,o,m){var l=new XMLHttpRequest;l.open("GET",c),l.responseType="blob",l.onload=function(){y(l.response,o,m)},l.onerror=function(){console.error("could not download file")},l.send()}function n(c){var o=new XMLHttpRequest;o.open("HEAD",c,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function d(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(o)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof S=="object"&&S.global===S?S:void 0,u=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(c,o,m){var l=a.URL||a.webkitURL,x=document.createElement("a");o=o||c.name||"download",x.download=o,x.rel="noopener",typeof c=="string"?(x.href=c,x.origin===location.origin?d(x):n(x.href)?t(c,o,m):d(x,x.target="_blank")):(x.href=l.createObjectURL(c),setTimeout(function(){l.revokeObjectURL(x.href)},4e4),setTimeout(function(){d(x)},0))}:"msSaveOrOpenBlob"in navigator?function(c,o,m){if(o=o||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(r(c,m),o);else if(n(c))t(c,o,m);else{var l=document.createElement("a");l.href=c,l.target="_blank",setTimeout(function(){d(l)})}}:function(c,o,m,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof c=="string")return t(c,o,m);var x=c.type==="application/octet-stream",N=/constructor/i.test(a.HTMLElement)||a.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||x&&N||u)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var f=k.result;f=j?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=f:location=f,l=null},k.readAsDataURL(c)}else{var b=a.URL||a.webkitURL,g=b.createObjectURL(c);l?l.location=g:location.href=g,l=null,setTimeout(function(){b.revokeObjectURL(g)},4e4)}});a.saveAs=y.saveAs=y,s.exports=y})})(J);const Y=()=>{h.useEffect(()=>{C.init();const i=document.querySelector(".highlight-container"),r=document.querySelector(".highlight-text");if(i&&r){const t=document.createElement("div");t.classList.add("highlight-animation"),i.appendChild(t);const n=()=>{t.style.animationPlayState="running"},d=()=>{t.style.animationPlayState="paused"};return r.addEventListener("mouseenter",n),r.addEventListener("animationiteration",d),()=>{r.removeEventListener("mouseenter",n),r.removeEventListener("animationiteration",d)}}},[]);const s=()=>{const i="../../pdf/ikhsan-dwi-saputra-resume.pdf",r=document.createElement("a");r.href=i,r.download="ikhsan-dwi-saputra-resume.pdf",r.click()};return e.jsx("div",{name:"about",className:"w-full sm:pt-32 pt-0 ",children:e.jsxs("div",{className:"flex flex-col justify-center items-center w-full h-full",children:[e.jsx("div",{className:"sm:text-right pb-8 pl-4",children:e.jsx("p",{className:"text-4xl text-center sm:mt-20 font-bold inline bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-200 dark:to-green-200 pb-12",children:"About Me"})}),e.jsxs("div",{className:"max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:X,alt:"mahdi laith",className:"rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2 object-cover outline-ternary-dark dark:outline-ternary-light w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem]"})}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("p",{className:"text-xl font-bold pb-2 text-ternary-dark dark:text-ternary-light text-start",children:"Hi there! Nice to meet you."}),e.jsxs("div",{className:"text-lg leading-7 text-ternary-dark dark:text-ternary-light",children:[e.jsx("span",{className:"highlight-container opacity-0 hidden",children:e.jsx("span",{className:"highlight-text"})}),"i'm a full stack developer with",""," ",e.jsx("span",{className:"highlight-container",children:e.jsx("span",{className:"highlight-text",children:"3 years of experience"})}),"and I am also a technology enthusiast. I love"," ",e.jsx("span",{className:"highlight-container",children:e.jsx("span",{className:"highlight-text",children:"web development"})}),"technology so much that it requires me to keep learning. If you are looking for reliable and innovative web development solutions, I am here to",e.jsx("span",{className:"highlight-container w-fit",children:e.jsx("span",{className:"highlight-text text-lg leading-7 text-ternary-dark dark:text-ternary-light",children:"help and look"})}),"forward to working with you on",e.jsx("span",{className:"highlight-container w-fit",children:e.jsx("span",{className:"highlight-text text-lg leading-7 text-ternary-dark dark:text-ternary-light",children:"future projects."})})]}),e.jsx("div",{className:"mt-4 mx-auto",children:e.jsxs("button",{onClick:s,className:"text-ternary-dark dark:text-ternary-light group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0044ff]  rounded-sm hover:text-ternary-light font-semibold ",children:["Download resume"," "]})})]})]})]})})},T=({title:s,subTitle:i,result:r,des:t})=>e.jsxs("div",{className:"w-full h-1/3 group flex",children:[e.jsx("div",{className:"w-10 h-[6px] bg-blue-900 bg-opacity-80 mt-16 relative dark:bg-ternary-dark",children:e.jsx("span",{className:"absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center dark:bg-ternary-dark bg-blue-900 bg-opacity-80 ",children:e.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-900 bg-opacity-80 inline-flex group-hover:bg-green-500 duration-300"})})}),e.jsxs("div",{className:"w-full dark:bg-ternary-dark rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 border-2 dark:border-none",children:[e.jsxs("div",{className:"flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl md:text-2xl font-semibold text-gray-800 dark:text-ternary-light dark:opacity-70 dark:group-hover:opacity-100  duration-300",children:s}),e.jsx("p",{className:"text-sm mt-2 text-gray-800 dark:text-gray-400 dark:group-hover:text-white duration-300",children:i})]}),e.jsx("div",{children:e.jsx("p",{className:"px-4 py-2 dark:text-green-400 dark:opacity-100 dark:group-hover:text-green-500 text-white border-1 bg-blue-950 opacity-80 rounded-lg flex justify-center items-center text-sm font-medium",children:r})})]}),e.jsx("p",{className:"text-sm md:text-base font-medium text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-300 duration-300",children:t})]})]}),ee=({title:s,subTitle:i,result:r,des:t,url:n})=>e.jsxs("div",{className:"w-full h-1/3 group flex",children:[e.jsx("div",{className:"w-10 h-[6px] bg-blue-900 bg-opacity-80 mt-16 relative dark:bg-ternary-dark",children:e.jsx("span",{className:"absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center dark:bg-ternary-dark bg-blue-900 bg-opacity-80 ",children:e.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-900 bg-opacity-80 inline-flex group-hover:bg-green-500 duration-300"})})}),e.jsxs("div",{className:"w-full dark:bg-ternary-dark rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 border-2 dark:border-none",children:[e.jsxs("div",{className:"flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl md:text-2xl font-semibold text-gray-800 dark:text-ternary-light dark:opacity-70 dark:group-hover:opacity-100  duration-300",children:s}),e.jsx("p",{className:"text-sm mt-2 text-gray-800 dark:text-gray-400 dark:group-hover:text-white duration-300",children:i})]}),e.jsxs("div",{children:[e.jsx("p",{className:"px-4 py-2 dark:text-green-400 dark:opacity-100 dark:group-hover:text-green-500 text-white border-1 bg-blue-950 opacity-80 rounded-lg flex justify-center items-center text-sm font-medium",children:r}),e.jsx("div",{className:" md:w-[400px] md:h-[300px] mx-auto mt-5",children:e.jsx("img",{src:n,alt:"sertifikat",className:"w-full h-full "})})]})]}),e.jsx("p",{className:"text-sm md:text-base font-medium text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-300 duration-300",children:t})]})]}),te="/ikhsan-portfolio/assets/sertif-UXzBh_BO.jpeg",ae=()=>e.jsxs(v.div,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},className:"w-full flex flex-col lg:flex-row gap-10 lg:gap-20",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"py-6 lgl:py-12 font-titleFont flex flex-col gap-4",children:[e.jsx("p",{className:"text-sm text-blue-900 dark:text-blue-100 tracking-[4px]",children:"2020 - 2024 (Expected)"}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light",children:"Educational Qualification"})]}),e.jsx("div",{className:"mt-6 lgl:mt-14 w-full border-l-[6px] border-l-blue-900 border-opacity-70 dark:border-l-ternary-dark flex flex-col gap-10",children:e.jsx(T,{title:e.jsx("a",{href:"https://www.uin-suska.ac.id/",target:"_blank",rel:"noreferrer",children:"Informatics Engineering Bachelor"}),subTitle:"Sultan Syarif Kasim State Islamic University of Riau (2020 - 2024)",result:"Riau, Indonesia",des:"Faculty of Science and Technology"})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"py-6 lgl:py-12 font-titleFont flex flex-col gap-4",children:[e.jsx("p",{className:"text-sm dark:text-blue-100  tracking-[4px]",children:"2020 - 2023"}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light",children:"Certificates"})]}),e.jsx("div",{className:"mt-6 lgl:mt-14 w-full border-l-[6px] border-l-blue-900 dark:border-l-ternary-dark border-opacity-70 flex flex-col gap-10",children:e.jsx(ee,{title:e.jsx("a",{href:"https://academy.oracle.com/en/oa-web-overview.html",target:"_blank",rel:"noreferrer",children:"PL/SQL Oracle Academy Course"}),subTitle:"Oracle Academy - (01/5/2022 - 01/11/2021)",result:"Oracle Academy",des:"During semester 5, I successfully obtained my PL/SQL certificate from Oracle Academy, demonstrating my dedication and understanding of developing database applications using the PL/SQL programming language. This certificate is not only a testament to my personal achievement, but also reinforces technical skills that will support my career journey and professional development in the field of Oracle database management.",url:te})})]})]}),re=()=>(h.useEffect(()=>{C.init()},[]),e.jsx("div",{name:"skill",className:"w-full  text-gray-300 ",children:e.jsxs("div",{className:"max-w-screen-lg mx-auto pt-4 flex flex-col justify-center  h-full text-white",children:[e.jsx("div",{children:e.jsx("p",{className:"text-4xl font-bold pt-10 pb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-700 dark:from-blue-200 dark:to-green-200",children:"Skills"})}),e.jsx("div",{className:"w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-ternary-dark dark:text-ternary-light",children:G.map(({id:s,src:i,title:r,style:t})=>e.jsxs("div",{className:`shadow-md transform hover:scale-105 duration-500 py-2 rounded-lg ${t}`,"data-aos":"fade-up","data-aos-duration":s+"00","data-aos-easing":"linear",children:[e.jsx("img",{src:i,alt:"",className:"mx-auto",style:{width:"4rem",height:"4rem"}}),e.jsx("p",{className:"mt-1",children:r})]},s))})]})})),se=()=>e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.5}},className:"py-12 font-titleFont flex flex-col gap-20 md:flex-row",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-sm text-blue-800 dark:text-ternary-light tracking-[4px]",children:"2023 - 2018"}),e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-ternary-dark dark:text-ternary-light",children:"Experience"})]}),e.jsxs("div",{className:"mt-14 w-4/5 h-fit border-l-[6px] border-l-blue-900 border-opacity-70 dark:border-l-ternary-dark dark:border-opacity-100   flex flex-col gap-10",children:[e.jsx(T,{title:"Full Stack Web Developer",subTitle:e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"IDS DEV ID (2021/01 - Present)"}),result:"Pekanbaru / Indonesia",des:"IDS DEV ID is a start-up that sells digital products and also provides web development services and web-based applications and I am also the co founder of IDS DEV ID."}),e.jsx(T,{title:"Freelance Web Developer",subTitle:e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"freelance service provider website (2021/01 - Present)"}),result:"Online / Remote Work",des:"As a freelancer web developer, I have accumulated valuable experience in designing and developing various websites. I have successfully collaborated with clients from various industries, understood their unique needs, and produced web solutions that meet high quality standards. In addition, this experience has also involved self-management of projects, including time planning and completion of projects according to set deadlines. I continue to deepen my technical skills, maintain website sustainability and security, and communicate effectively with clients to ensure full satisfaction with the work I produce."}),e.jsx(T,{title:"Full Stack Web Developer",subTitle:e.jsx("a",{href:"#",target:"_blank",rel:"noreferrer",children:"Internship in Faculty Lab (2023/01/01 - 2023/06/01)"}),result:"Sultan Syarif Kasim State Islamic University of Riau",des:"During my internship in the lab I worked on a project to develop a page-by-page tajweed Quran application, which integrates api and mysql."})]})]})}),ne="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}.cls-2{fill:%23505050;}.cls-3{fill:none;stroke:%23707070;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-1'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-3'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cpath%20id='Polygon_1'%20class='cls-2'%20d='M80.95,60.44l-32.38,17.27V43.17l32.38,17.27Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",le="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}.cls-2{fill:%23505050;}.cls-3{fill:none;stroke:%23707070;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-1'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-3'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3crect%20class='cls-2'%20x='46.39'%20y='40.27'%20width='9.21'%20height='40.33'/%3e%3crect%20class='cls-2'%20x='65.28'%20y='40.27'%20width='9.21'%20height='40.33'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ce="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23505050;}.cls-2{fill:none;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3cpath%20id='Polygon_1'%20class='cls-1'%20d='M71.26,60.44l-32.38,17.27V43.17l32.38,17.27Z'/%3e%3crect%20class='cls-1'%20x='77.68'%20y='43.17'%20width='4.32'%20height='34.54'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ie="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23505050;}.cls-2{fill:none;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3cpath%20id='Polygon_1'%20class='cls-1'%20d='M81.99,43.17v34.54s-32.38-17.27-32.38-17.27l32.38-17.27Z'/%3e%3crect%20class='cls-1'%20x='38.88'%20y='43.17'%20width='4.32'%20height='34.54'%20transform='translate(82.08%20120.88)%20rotate(180)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",oe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23505050;}.cls-2,.cls-3{fill:none;}.cls-3{stroke:%23505050;stroke-miterlimit:10;stroke-width:4px;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3cpath%20id='Polygon_1'%20class='cls-1'%20d='M73.13,57.3v-19.23s18.03,9.61,18.03,9.61l-18.03,9.61Z'/%3e%3cpath%20id='Polygon_1-2'%20class='cls-1'%20d='M73.13,84.81v-19.23s18.03,9.61,18.03,9.61l-18.03,9.61Z'/%3e%3cpath%20class='cls-3'%20d='M83.21,47.68h-16.94c-1.1,0-2.1,.59-2.64,1.55l-13.59,24.41c-.53,.96-1.55,1.56-2.65,1.56h-15.67'/%3e%3cg%3e%3cpath%20class='cls-1'%20d='M56.96,55.29l-3.92-7.04c-.88-1.58-2.55-2.56-4.36-2.56H31.73v4h16.95c.36,0,.69,.2,.87,.51l5.12,9.2,2.29-4.1Z'/%3e%3cpath%20class='cls-1'%20d='M67.52,73.2c-.36,0-.69-.2-.87-.51l-6.37-11.43-2.29,4.1,5.16,9.27c.88,1.58,2.55,2.57,4.36,2.57h15.69v-4h-15.69Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",de="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{stroke:%23ccc;stroke-miterlimit:10;stroke-width:4px;}.cls-1,.cls-2{fill:none;}.cls-3{fill:%23ccc;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-2'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3cpath%20id='Polygon_1'%20class='cls-3'%20d='M73.13,57.3v-19.23s18.03,9.61,18.03,9.61l-18.03,9.61Z'/%3e%3cpath%20id='Polygon_1-2'%20class='cls-3'%20d='M73.13,84.81v-19.23s18.03,9.61,18.03,9.61l-18.03,9.61Z'/%3e%3cpath%20class='cls-1'%20d='M83.21,47.68h-16.94c-1.1,0-2.1,.59-2.64,1.55l-13.59,24.41c-.53,.96-1.55,1.56-2.65,1.56h-15.67'/%3e%3cg%3e%3cpath%20class='cls-3'%20d='M56.96,55.29l-3.92-7.04c-.88-1.58-2.55-2.56-4.36-2.56H31.73v4h16.95c.36,0,.69,.2,.87,.51l5.12,9.2,2.29-4.1Z'/%3e%3cpath%20class='cls-3'%20d='M67.52,73.2c-.36,0-.69-.2-.87-.51l-6.37-11.43-2.29,4.1,5.16,9.27c.88,1.58,2.55,2.57,4.36,2.57h15.69v-4h-15.69Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ue="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23505050;}.cls-2{stroke:%23505050;stroke-miterlimit:10;stroke-width:5.5px;}.cls-2,.cls-3{fill:none;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-3'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-3'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3cpath%20id='Polygon_1'%20class='cls-1'%20d='M65,81.2l9.23-19.84,12.38,16.45-21.62,3.38Z'/%3e%3cpath%20class='cls-2'%20d='M60.5,81.47c-11.62,0-20.24-9.4-20.24-21.02s9.42-21.04,21.04-21.04,21.04,9.42,21.04,21.04c0,5.2-1.88,9.95-5,13.62'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",xe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120.88%20120.88'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:none;}.cls-3{fill:%23ccc;}.cls-2{stroke:%23ccc;stroke-miterlimit:10;stroke-width:5.5px;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cg%3e%3cg%20id='Ellipse_7-2'%3e%3ccircle%20class='cls-1'%20cx='60.44'%20cy='60.44'%20r='60.44'/%3e%3ccircle%20class='cls-1'%20cx='60.44'%20cy='60.44'%20r='59.9'/%3e%3c/g%3e%3cg%3e%3cpath%20id='Polygon_1'%20class='cls-3'%20d='M65,81.2l9.23-19.84,12.38,16.45-21.62,3.38Z'/%3e%3cpath%20class='cls-2'%20d='M60.5,81.47c-11.62,0-20.24-9.4-20.24-21.02s9.42-21.04,21.04-21.04,21.04,9.42,21.04,21.04c0,5.2-1.88,9.95-5,13.62'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",me=({onPlayClick:s,isPlaying:i,onPrevClick:r,onNextClick:t,repeat:n,onRepeatClick:d,shuffle:a,onShuffleClick:u})=>e.jsxs("div",{className:"flex flex-row mt-4",children:[e.jsx(E,{src:a?oe:de,onClick:u}),e.jsx(E,{src:ie,onClick:r}),e.jsx(E,{className:"mr-2 ml-2",src:i?le:ne,onClick:s}),e.jsx(E,{src:ce,onClick:t}),e.jsx(E,{src:n?ue:xe,onClick:d})]}),E=({onClick:s,src:i,className:r})=>e.jsx("button",{onClick:s,children:e.jsx("img",{src:i,width:65,height:65,className:`drop-shadow-lg  ${r??""}`,alt:"Control Button"})}),ge=({progress:s,onChange:i,leftLabel:r,rightLabel:t})=>e.jsxs("div",{className:"flex flex-col sm:w-[500px] w-full pt-5",children:[e.jsx("input",{type:"range",min:"1",max:"100",value:s,step:"0.25",className:"slider",onChange:n=>{i(parseInt(n==null?void 0:n.target.value))}}),e.jsxs("div",{className:"flex w-full flex-row justify-between mt-1 text-primary",children:[e.jsx("span",{className:"text-xs text-ternary-dark dark:text-ternary-light",children:r}),e.jsx("span",{className:"text-xs text-ternary-dark dark:text-ternary-light",children:t})]})]}),pe=({title:s,artist:i,coverArtSrc:r})=>e.jsxs("div",{className:" w-full flex flex-col justify-center items-center sm:mb-0  ",children:[e.jsx("div",{className:"p-10 sm:p-0 sm:w-[200px] sm:h-[200px] sm:mb-4 ",children:e.jsx("img",{className:"drop-shadow-lg rounded-sm w-full",src:r,alt:"Cover Art"})}),e.jsx("span",{className:"text-2xl font-semibold text-ternary-dark dark:text-ternary-light drop-shadow-lg ",children:s}),e.jsx("span",{className:"text-base font-medium drop-shadow-lg  text-ternary-dark dark:text-ternary-light",children:i})]});function fe(s,i){let r=0,t=!1,n=!1;const d=[],a=new Audio;function u(){const p=y();i(p)}function y(){return{currentTrackMetadata:c(),currentTrackDuration:o(),currentTrackPlaybackPosition:m(),playbackState:l(),repeat:t,shuffle:n}}function c(){return r<s.length?s[r].metadata:null}function o(){return isNaN(a.duration)?null:a.duration}function m(){return isNaN(a.currentTime)?null:a.currentTime}function l(){return a.paused?"PAUSED":"PLAYING"}function x(){a.addEventListener("playing",u),a.addEventListener("pause",u),a.addEventListener("ended",j),a.addEventListener("timeupdate",u),a.addEventListener("loadeddata",u)}function N(){a.removeEventListener("playing",u),a.removeEventListener("pause",u),a.removeEventListener("ended",j),a.removeEventListener("timeupdate",u),a.removeEventListener("loadeddata",u)}function j(){t?k():_()}function k(){a.currentTime=0,a.play()}function b(p){a.src=s[p].audioSrc,a.load(),r=p}function g(){return n?w():f()}function f(){return(r+1)%s.length}function w(){if(s.length===1)return 0;const p=Math.floor(Math.random()*(s.length-1));return p<r?p:p+1}function L(){x(),b(0)}function A(){N(),a.pause()}function B(p){isNaN(p)||(a.currentTime=p)}function D(){n=!n,u()}function F(){t=!t,u()}function _(){d.push(r);const p=g();b(p),a.play()}function R(){if(d.length===0||a.currentTime>5)k();else{const p=d.pop();b(p),a.play()}}function O(){a.paused?a.play():a.pause()}function U(p){d.push(r),b(p),a.play(),u()}return L(),{setPlaybackPosition:B,toggleShuffle:D,toggleRepeat:F,playNextTrack:_,playPreviousTrack:R,togglePlayPause:O,playTrackByIndex:U,cleanup:A}}function he(s){const[i,r]=h.useState({currentTrackMetadata:null,currentTrackDuration:null,currentTrackPlaybackPosition:null,playbackState:"PAUSED",repeat:!1,shuffle:!1}),t=h.useRef(null);h.useEffect(()=>{const l=fe(s,r);return t.current=l,()=>{l.cleanup()}},[s]);function n(l){t.current&&t.current.setPlaybackPosition(l)}function d(){t.current&&t.current.toggleShuffle()}function a(){t.current&&t.current.toggleRepeat()}function u(){t.current&&t.current.togglePlayPause()}function y(){t.current&&t.current.playNextTrack()}function c(){t.current&&t.current.playPreviousTrack()}function o(){t.current&&t.current.cleanup()}function m(l){t.current&&t.current.playTrackByIndex(l)}return{setPlaybackPosition:n,playerState:i,playSelectedTrack:m,toggleShuffle:d,toggleRepeat:a,togglePlayPause:u,playNextTrack:y,playPreviousTrack:c,cleanup:o}}const ye="/ikhsan-portfolio/assets/lace-it-_n-udWot.mp3",ve="/ikhsan-portfolio/assets/I Wanna Be Yours-XTmK4Pu7.mp3",ke="/ikhsan-portfolio/assets/hey-jude-1r4Co5_P.mp3",be="/ikhsan-portfolio/assets/Whatever-Vcx1jA5M.mp3",je="/ikhsan-portfolio/assets/Wonderwall-UjK_X3E_.mp3",we="/ikhsan-portfolio/assets/gods-0C39sBQc.mp3",Ne="/ikhsan-portfolio/assets/penjaga-hati-ZMfp5jQ-.mp3",Se="/ikhsan-portfolio/assets/505-enJsjX13.mp3",Ee="/ikhsan-portfolio/assets/fix-you-OknGoB51.mp3",Pe="/ikhsan-portfolio/assets/life-goes-on--sUybZ60.mp3",Te="/ikhsan-portfolio/assets/1-Ml8ByOyy.jpg",I="/ikhsan-portfolio/assets/2-fXzDuxwD.png",Le="/ikhsan-portfolio/assets/3-vyWVRlAL.png",M="/ikhsan-portfolio/assets/4-AnHKjZ0n.png",Ae="/ikhsan-portfolio/assets/5-_fg7zKpw.png",_e="/ikhsan-portfolio/assets/6-o_72KFPR.png",Ie="/ikhsan-portfolio/assets/7-xZgJ7LO0.png",Me="/ikhsan-portfolio/assets/8-E0FzWMJR.png",P=[{audioSrc:ye,metadata:{title:"Lace It",artist:"Juice WRLD, Eminem, benny blanco",coverArtSrc:Te}},{audioSrc:ve,metadata:{title:"I Wanna Be Yours",artist:"Artict Monkeys",coverArtSrc:I}},{audioSrc:ke,metadata:{title:"Hey Jude",artist:"The Beatles",coverArtSrc:Le}},{audioSrc:be,metadata:{title:"Whatever",artist:"Oasis",coverArtSrc:M}},{audioSrc:je,metadata:{title:"Wonderwall",artist:"Oasis",coverArtSrc:M}},{audioSrc:we,metadata:{title:"Gods",artist:"Aespa",coverArtSrc:Ae}},{audioSrc:Ne,metadata:{title:"Penjaga Hati",artist:"Nadhif Basalamah",coverArtSrc:_e}},{audioSrc:Se,metadata:{title:"505",artist:"Artict Monkeys",coverArtSrc:I}},{audioSrc:Ee,metadata:{title:"Fix You",artist:"Coldplay",coverArtSrc:Ie}},{audioSrc:Pe,metadata:{title:"Life Goes On",artist:"BTS",coverArtSrc:Me}}],Ce=()=>{const{playNextTrack:s,playPreviousTrack:i,playSelectedTrack:r,playerState:t,togglePlayPause:n,toggleRepeat:d,toggleShuffle:a,setPlaybackPosition:u}=he(P),{repeat:y,playbackState:c,shuffle:o,currentTrackDuration:m,currentTrackPlaybackPosition:l,currentTrackMetadata:x}=t;function N(g){m!==null&&u(g/100*m)}function j(){return m===null||l===null||m===0?0:l/m*100}function k(g){if(g===null)return"";const f=Math.floor(g/60),w=Math.floor(g-f*60),L=`${f}`.padStart(2,"0"),A=`${w}`.padStart(2,"0");return`${L}:${A}`}const b=g=>{const f=P.find(w=>w.metadata.title===g);if(f){const w=P.indexOf(f);r(w)}};return e.jsxs("div",{className:"flex flex-col items-center ",children:[e.jsx(pe,{title:x==null?void 0:x.title,artist:x==null?void 0:x.artist,coverArtSrc:x==null?void 0:x.coverArtSrc}),e.jsx(ge,{rightLabel:k(m),leftLabel:k(l),onChange:N,progress:j()}),e.jsx(me,{shuffle:o,repeat:y,onShuffleClick:a,onRepeatClick:d,onPrevClick:i,onNextClick:s,onPlayClick:n,isPlaying:c==="PLAYING"}),e.jsxs("ul",{className:"self-start pt-10",children:[e.jsx("p",{className:"text-ternary-dark dark:text-ternary-light text-2-lg pb-2 ",children:"Most My Favorite Music So Far :"}),P.map(g=>{var f;return e.jsxs("li",{className:`cursor-pointer p-1 rounded-md mb-1 flex items-center ${((f=t.currentTrackMetadata)==null?void 0:f.title)===g.metadata.title&&t.playbackState==="PLAYING"?"bg-ternary-dark text-ternary-light dark:border-[1px] dark:border-ternary-light":"bg-gray-200"}`,children:[e.jsx(K,{className:"mr-2"}),e.jsxs("span",{onClick:()=>b(g.metadata.title),children:[g.metadata.title," - ",g.metadata.artist]})]},g.metadata.title)})]})]})},Be=()=>{const[s,i]=h.useState(1),r=Q();h.useEffect(()=>{r.start({opacity:1,y:0,transition:{duration:.5}})},[s,r]);const t=u=>{i(s===u?null:u)},[n,d]=h.useState(!1),a=()=>{d(!n)};return e.jsxs(v.div,{initial:{opacity:0,y:20},animate:r,className:"flex gap-10 mx-auto mt-8 sm:flex-row flex-col",children:[e.jsxs("div",{className:"w-[200px] h-fit bg-ternary-light p-5 rounded-lg border-2 dark:bg-ternary-dark dark:border-none",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4 text-ternary-dark dark:text-ternary-light",children:"Menu"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsx(v.li,{className:`cursor-pointer ${s===1?"text-blue-500 font-bold":"text-ternary-dark dark:text-ternary-light"}`,onClick:()=>t(1),children:"Hobies"}),e.jsx(v.li,{className:`cursor-pointer ${s===2?"text-blue-500 font-bold":"text-ternary-dark dark:text-ternary-light"}`,onClick:()=>{t(2),a()},children:"Favorite Music"})]})]}),e.jsxs("div",{className:"w-full border-2 dark:border-none",children:[s===1&&e.jsxs(v.div,{className:"bg-ternary-light dark:bg-ternary-dark p-5 rounded-md shadow-md border-2 dark:border-none",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs("h3",{className:"text-xl font-medium mb-2 text-ternary-dark dark:text-ternary-light",children:[" ","Personal Hobbies:"]}),e.jsx("p",{className:"text-ternary-dark dark:text-ternary-light",children:"🖥️ Coding / 🎹 Music / 📖 Learning / 📚 Reading / 🎨 Designing / 🏢 Tech / and more"})]}),s===2&&e.jsxs(v.div,{className:"bg-ternary-light dark:bg-ternary-dark p-5 rounded-md shadow-md",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("h3",{className:"text-xl text-center font-medium mb-2 text-ternary-dark dark:text-ternary-light",children:"Favorite Music"}),e.jsx(Ce,{})]})]})]})},De=()=>{const[s,i]=h.useState(!0),[r,t]=h.useState(!1),[n,d]=h.useState(!1),[a,u]=h.useState(!1);return e.jsxs("section",{id:"resume",className:"w-full py-0 sm:py-20",children:[e.jsx("div",{className:"flex justify-center items-center text-center"}),e.jsx("div",{children:e.jsxs("ul",{className:"w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg dark:bg-ternary-dark",children:[e.jsx("li",{onClick:()=>i(!0)&t(!1)&d(!1)&u(!1),className:`${s?"border-ternary-light rounded-lg text-white":"border-transparent"} resumeLi`,children:"Education"}),e.jsx("li",{onClick:()=>i(!1)&t(!0)&d(!1)&u(!1),className:`${r?"border-ternary-light rounded-lg text-white":"border-transparent"} resumeLi`,children:"Skills"}),e.jsx("li",{onClick:()=>i(!1)&t(!1)&d(!0)&u(!1),className:`${n?"border-ternary-light rounded-lg text-white":"border-transparent"} resumeLi`,children:"Experience"}),e.jsx("li",{onClick:()=>i(!1)&t(!1)&d(!1)&u(!0),className:`${a?"border-ternary-light rounded-lg text-white":"border-transparent"} resumeLi`,children:"Fun Fact"})]})}),s&&e.jsx(ae,{}),r&&e.jsx(re,{}),a&&e.jsx(Be,{}),n&&e.jsx(se,{})]})},Ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto sm:pt-0 pt-10",children:e.jsx(Y,{})}),e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto sm:pt-0 pt-32",children:e.jsx(De,{})}),e.jsx(v.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto"})]});export{Ze as default};
