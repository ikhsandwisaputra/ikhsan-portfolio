import{j as e,r as a,k as b,L as k}from"./index-BdZ6SSBm.js";import{A as v}from"./aos-BlrWVSq0.js";import{w as o}from"./Static2-Cz81OpAf.js";import{a as N}from"./index.esm-BTy9oN6F.js";import{F as w}from"./index.esm-CFxytIaJ.js";const C=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"loader relative w-32 h-32 rounded-full rotate-45 text-lime-400 mx-auto"}),e.jsx("h3",{className:"animate-pulse text-center text-xl dark:text-white",children:"Loading..."})]}),S=()=>{const[h,g]=a.useState(!0);a.useEffect(()=>{v.init();const r=setTimeout(()=>{g(!1)},1e3);return()=>clearTimeout(r)},[]);const[u,p]=a.useState(""),[s,f]=a.useState(""),[n,c]=a.useState("REACT"),[x,l]=a.useState(""),[i,d]=a.useState(!1),j=[...new Set(o.map(r=>r.category))],m=[...new Set(o.flatMap(r=>r.tech))].filter(r=>r.toLowerCase().includes(x.toLowerCase())),y=o.filter(r=>r.title.toLowerCase().includes(u.toLowerCase())&&(s===""||r.category===s)&&(n===""||r.tech.includes(n)));return e.jsx("div",{name:"work",className:"w-full  sm:py-32 py-10",children:e.jsxs("div",{className:"max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full dark:text-white text-ternary-dark text-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl text-center font-bold inline mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600  sm:mt-20 pb-12 dark:from-blue-200 dark:to-green-200",children:"Work Gallery"}),e.jsx("h3",{className:`font-general-regular \r
                        text-center text-secondary-dark\r
                        dark:text-ternary-light\r
                        text-md\r
                        sm:text-xl\r
                        mb-3\r
                        `,children:"Explore projects based on titles or refine your search by category."})]}),h?e.jsx(e.Fragment,{children:e.jsx(C,{})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap sm:flex-row flex-col my-10  gap-2",children:[e.jsxs("div",{className:"flex justify-between gap-2 items-center",children:[e.jsx(b,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"}),e.jsx("input",{type:"text",placeholder:"Search projects...",className:`font-general-medium \r
                     pl-3\r
                     pr-1\r
                     sm:px-4\r
                     py-2\r
                     border \r
                 border-gray-200\r
                     dark:border-secondary-dark\r
                     rounded-lg\r
                     text-sm\r
                     sm:text-md\r
                     bg-secondary-light\r
                     dark:bg-ternary-dark\r
                     text-primary-dark\r
                     dark:text-ternary-light`,onChange:r=>p(r.target.value)})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsx("div",{children:e.jsxs("select",{className:`font-general-medium \r
                     px-4\r
                     sm:px-6\r
                     py-2\r
                     border\r
                     dark:border-secondary-dark\r
                     rounded-lg\r
                     text-sm\r
                     sm:text-md\r
                     dark:font-medium\r
                     bg-secondary-light\r
                     dark:bg-ternary-dark\r
                     text-primary-dark\r
                     dark:text-ternary-light`,value:s,onChange:r=>f(r.target.value),children:[e.jsx("option",{value:"",children:"All Categories"}),j.map(r=>e.jsx("option",{value:r,className:"text-sm ",children:r},r))]})}),e.jsxs("div",{className:"relative w-full min-w-[200px] text-center",children:[e.jsxs("button",{type:"button",onClick:()=>d(!i),className:"font-general-medium w-full px-4 py-2 border rounded-lg text-left bg-secondary-light dark:bg-ternary-dark flex justify-between items-center",children:[e.jsx("span",{children:n||"Pilih Teknologi"}),e.jsx("svg",{className:`w-4 h-4 transition-transform ${i?"rotate-188":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),i&&e.jsxs("div",{className:"absolute z-10 mt-2 w-full bg-secondary-light dark:bg-ternary-dark border rounded-lg shadow-lg",children:[e.jsx("div",{className:"p-2",children:e.jsx("input",{type:"text",placeholder:"Cari teknologi...",value:x,onChange:r=>l(r.target.value),className:`w-full px-3 py-2 border rounded-md text-sm  text-primary-dark\r
                    dark:text-ternary-dark`})}),e.jsxs("ul",{className:"max-h-60 overflow-y-auto",children:[e.jsx("li",{onClick:()=>{c(""),d(!1),l("")},className:"px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer font-medium",children:"Semua Tech"}),m.map(r=>e.jsx("li",{onClick:()=>{c(r),d(!1),l("")},className:"px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer",children:r},r)),m.length===0&&e.jsx("li",{className:"px-4 py-2 text-sm text-gray-500",children:"Tidak ditemukan."})]})]})]})]})]}),e.jsx("div",{className:"max-w-[1000px] w-full grid sm:grid-cols-3 sm:gap-8 gap-1 sm:px-4 px-3 mt-7",children:y.slice().sort((r,t)=>t.id-r.id).map(r=>e.jsx(k,{to:`/projects/${r.idProjects}`,"aria-label":`Detail ${r.title}`,children:e.jsxs("div",{rel:"noreferrer",className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark overflow-hidden border-2 dark:border-none","data-aos":"fade-up","data-aos-duration":r.duration,"data-aos-easing":"linear",children:[e.jsx("img",{src:r.imgUrl,alt:"work",className:"w-full h-36 md:h-48 object-cover"}),e.jsxs("div",{className:"w-full p-5 text-ternary-dark dark:text-ternary-light",children:[e.jsx("h3",{className:"text-lg md:text-xl mb-2 md:mb-3 font-semibold",children:r.title}),e.jsx("p",{className:"flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm mb-3",children:r.tech.map(t=>e.jsx("span",{className:"inline-block px-2 py-1 bg-slate-300 dark:bg-slate-800 rounded-md",children:t},t))}),e.jsxs("div",{className:"flex gap-2",children:[r.githubUrl&&e.jsx("span",{className:"text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer",onClick:t=>{t.stopPropagation()},children:e.jsx("a",{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"text-ternary-dark dark:text-ternary-light",children:e.jsx(N,{})})}),r.webUrl&&e.jsx("span",{className:"text-lg w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer",onClick:t=>{t.stopPropagation()},children:e.jsx("a",{href:r.webUrl,target:"_blank",rel:"noopener noreferrer",className:"text-ternary-dark dark:text-ternary-light",children:e.jsx(w,{})})})]})]})]})},r.title))})]})]})})},q=()=>e.jsx(e.Fragment,{children:e.jsx(S,{})});export{q as default};
