!function(){var e,t,a={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),message:document.querySelector("textarea")};a.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),a.form.addEventListener("input",(function(){var e=a.email.value,t=a.message.value,r={email:e,message:t},m=JSON.stringify(r);localStorage.setItem("feedback-form-state",m)})),e=localStorage.getItem("feedback-form-state"),(t=JSON.parse(e))&&(a.email.value=t.email,a.message.value=t.message)}();
//# sourceMappingURL=03-feedback.bfa88911.js.map
