import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form");a.querySelector(".textarea");a.addEventListener("input",s);a.addEventListener("submit",o);n();const r={email:"",message:""};function s(e){const t=e.target.name;r[t]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(r))}function n(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:t,message:l}=a.elements;t.value=e.email,l.value=e.message}function o(e){e.preventDefault();const{email:t,message:l}=a.elements;if(t.value===""||l.value===""){alert("Fill please all fields");return}localStorage.removeItem("feedback-form-state"),console.log({email:t.value,message:l.value}),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
