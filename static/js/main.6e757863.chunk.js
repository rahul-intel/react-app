(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(29),r=a.n(i),l=(a(37),a(9)),o=a(2),d=(a(38),a(39),a(5));var j=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=Object(o.g)();return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));n(void 0!==e&&null!==e)}),[i]),Object(s.jsx)("div",{className:"content-inner",children:Object(s.jsx)("div",{className:"text-center",children:a?Object(s.jsx)("div",{className:"dashboad-data",children:"Your Dashboard data"}):Object(s.jsx)("p",{className:"align-middle h3",children:"Please Login to access you account."})})})},b=a(18),m=a.n(b),u=a(31),h=a(11),O=a.n(h);var x=function(){var e=Object(o.f)(),t=Object(c.useState)(""),a=Object(d.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(""),l=Object(d.a)(r,2),j=l[0],b=l[1],h=Object(c.useState)(""),x=Object(d.a)(h,2),f=x[0],N=x[1],p=Object(c.useState)(""),v=Object(d.a)(p,2),g=v[0],y=v[1],A=Object(c.useState)(""),J=Object(d.a)(A,2),S=J[0],F=J[1],k=function(){var t=Object(u.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.a.post("http://3.7.46.64:7003/user/login",{email:n,password:j}).then((function(t){F(""),localStorage.setItem("user",JSON.stringify(t.data)),e.push("/")})).catch((function(e){F("Your Email ID or Password was Incorrect")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"content-inner",children:Object(s.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h3",{className:"card-title login-heading",children:"Login"}),Object(s.jsxs)("form",{action:"",autoComplete:"off",onSubmit:function(e){e.preventDefault(),N(""),y(""),n&&j?k():(""===n&&N("Email is required."),""===j&&y("Password is required."))},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{type:"text",className:"form-control",name:"email",autoComplete:"off",placeholder:"Email",onChange:function(e){i(e.target.value)}}),Object(s.jsx)("span",{className:"text-danger",children:f})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{type:"password",className:"form-control",name:"password",autoComplete:"off",placeholder:"Password",onChange:function(e){b(e.target.value)}}),Object(s.jsx)("span",{className:"text-danger",children:g})]}),Object(s.jsx)("div",{className:"form-group",children:S&&Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:S})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("button",{type:"submit",id:"sendlogin",className:"btn btn-primary mr-3",children:"login"})}),Object(s.jsx)("div",{className:"col-9 text-right pt-2",children:Object(s.jsxs)("span",{className:"align-bottom",children:["Don't have account? ",Object(s.jsx)("button",{className:"btn btn-link p-0 mb-1",onClick:function(t){e.push("/register")},id:"signup",children:"Sign up here"})]})})]})]})]})})})})})},f=a(13),N=a(19),p={firstname:"",lastname:"",email:"",password:""};var v=function(e){var t=Object(c.useState)(p),a=Object(d.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)({}),l=Object(d.a)(r,2),j=l[0],b=l[1],m=Object(o.f)(),u=function(e){i(Object(N.a)(Object(N.a)({},n),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(s.jsx)("div",{className:"content-inner",children:Object(s.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h3",{className:"card-title login-heading",children:"Register"}),Object(s.jsxs)("form",{action:"",autoComplete:"off",onSubmit:function(e){e.preventDefault(),function(){var e=!0,t={firstname:"",lastname:"",email:"",password:""};return""===n.firstname&&(t.firstname="First Name is required",e=!1),""===n.lastname&&(t.lastname="Last Name is required",e=!1),""===n.email?(t.email="Email is required",e=!1):n.email&&!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n.email)&&(t.email="Email is invalid",e=!1),""===n.password&&(t.password="Password is required",e=!1),b(t),e}()&&(console.log("good to go"),O.a.post("http://3.7.46.64:7003/user/signup",n).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(e.data)),m.push("/")})).catch((function(e){console.log(e)})))},children:[Object(s.jsxs)("div",{className:"row mb-5",children:[Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("input",{type:"text",name:"firstname",className:"form-control",placeholder:"First Name","aria-label":"First Name",onChange:u}),Object(s.jsx)("span",{className:"text-danger",children:null===j||void 0===j?void 0:j.firstname})]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("input",{type:"text",name:"lastname",className:"form-control",placeholder:"Last Name","aria-label":"Last Name",onChange:u}),Object(s.jsx)("span",{className:"text-danger",children:null===j||void 0===j?void 0:j.lastname})]})]}),Object(s.jsxs)("div",{className:"row mb-5",children:[Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"Email","aria-label":"Email",onChange:u}),Object(s.jsx)("span",{className:"text-danger",children:null===j||void 0===j?void 0:j.email})]}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password","aria-label":"Password",onChange:u}),Object(s.jsx)("span",{className:"text-danger",children:null===j||void 0===j?void 0:j.password})]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("button",{type:"submit",id:"sendlogin",className:"btn btn-primary",children:"Register"})}),Object(s.jsx)("div",{className:"col-9 text-right pt-2",children:Object(s.jsxs)("span",{className:"align-bottom",children:["Already have an account? ",Object(s.jsx)("button",{className:"btn btn-link p-0 mb-1",onClick:function(e){m.push("/login")},id:"siginBtn",children:"Sign in here"})]})})]})]})]})})})})})};var g=function(){var e=Object(o.f)();return Object(s.jsx)("button",{type:"button",className:"btn btn-success mr-3",onClick:function(){e.push("/login")},children:"Sign In"})};var y=function(){var e,t,a=Object(o.f)(),c=JSON.parse(localStorage.getItem("user"));return Object(s.jsxs)("div",{className:"user-block",children:[Object(s.jsx)("h5",{className:"font-weight-light pt-1",children:"Welcome "})," ",Object(s.jsxs)("h5",{className:"text-capitalize font-weight-bold ml-2 pt-1",children:[null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.firstname," ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.lastname]}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger ml-3",onClick:function(){var e;O.a.post("http://3.7.46.64:7003/user/logout",{access_token:null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.access_token}).then((function(e){localStorage.removeItem("user"),a.push("/")})).catch((function(e){console.log(e)}))},children:"Sign Out"})]})};var A=function(){var e=Object(o.f)();return Object(s.jsx)("button",{type:"button",className:"btn btn-secondary mr-3",onClick:function(){e.push("/register")},children:"Sign Up"})};var J=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],i=Object(o.g)();return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));n(void 0!==e&&null!==e)}),[i]),Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("nav",{className:"navbar fixed-top navbar-light bg-light",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsxs)(l.b,{exact:!0,to:"/",className:"nav-link logo-section",children:[Object(s.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",width:"50"})," ",Object(s.jsx)("span",{className:"navbar-brand mb-0 h1 pl-3",children:"React App Demo"})]}),Object(s.jsx)("div",{className:"justify-content-end",children:a?Object(s.jsx)(y,{}):"/login"!==i.pathname&&"/register"!==i.pathname&&Object(s.jsxs)("div",{children:[Object(s.jsx)(g,{})," ",Object(s.jsx)(A,{})]})})]})})})};var S=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(J,{}),Object(s.jsx)("div",{className:"Content",children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/register",children:Object(s.jsx)(v,{})}),Object(s.jsx)(o.a,{path:"/login",children:Object(s.jsx)(x,{})}),Object(s.jsx)(o.a,{path:"/",children:Object(s.jsx)(j,{})})]})})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),F()}},[[64,1,2]]]);
//# sourceMappingURL=main.6e757863.chunk.js.map