import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form");a.querySelector(".textarea");a.addEventListener("input",r);a.addEventListener("submit",m);n();let s={email:"",message:""};function r(e){const t=e.target.name;s[t]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(s))}function n(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;s=e;const{email:t,message:l}=a.elements;t.value=e.email,l.value=e.message}function m(e){e.preventDefault();const{email:t,message:l}=a.elements;if(t.value===""||l.value===""){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),console.log({email:t.value,message:l.value}),a.reset(),s={email:"",message:""}}
//# sourceMappingURL=commonHelpers2.js.map
