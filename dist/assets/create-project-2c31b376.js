import{r as o,u as d,a as p,b as j,j as e,c as f,E as g,g as h,s as x}from"./index-d6ecaa80.js";function N(){const s=o.useRef(null),c=()=>{if(s.current)return s.current.getContent()},n=d(),i=p(),l=j(t=>t.projectSlice.projectCategoryArr);return o.useEffect(()=>{(async()=>{const r=await h(),a=x(r.content);n(a)})()},[]),e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"mb-5",children:"Create project"}),e.jsxs("form",{className:"container",onSubmit:t=>{t.preventDefault();let r=document.querySelector("#projectName").value,a=c(),m=document.querySelector("#categoryId").value;f({projectName:r,description:a,categoryId:m,alias:""}).then(()=>{alert("Create project successfully"),i("/home")}).catch(u=>{console.log(u)})},children:[e.jsxs("div",{className:"form-group mb-3",children:[e.jsx("p",{className:"fs-4",children:"Project name"}),e.jsx("input",{id:"projectName",className:"form-control fs-4"})]}),e.jsxs("div",{className:"form-group mb-3",children:[e.jsx("p",{className:"fs-4",children:"Description"}),e.jsx(g,{id:"description",onInit:(t,r)=>s.current=r,initialValue:"",init:{height:300,menubar:!1,plugins:["advlist","autolink","lists","link","image","charmap","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","preview","help","wordcount"],toolbar:"undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}})]}),e.jsxs("div",{className:"form-group mb-3",children:[e.jsx("p",{className:"fs-4",children:"Category"}),e.jsx("select",{id:"categoryId",className:"form-control fs-4",children:l.map((t,r)=>e.jsx("option",{value:t.id,children:t.projectCategoryName},r))})]}),e.jsx("button",{type:"submit",className:"btn btn-primary fs-4 mt-3",children:"Create project"})]})]})}export{N as default};
