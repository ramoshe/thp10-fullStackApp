(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(30),a=n.n(c),i=(n(43),n(4)),o=n(6),u=(n(44),n(5)),l=n(36),d=n(9),j=n.n(d),b=n(14),h=n(8),O=n(12),m=n(22),x=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c="http://localhost:5000/api"+e,a={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==n&&(a.body=JSON.stringify(n)),r){var i=btoa("".concat(s.emailAddress,":").concat(s.password));a.headers.Authorization="Basic ".concat(i)}return fetch(c,a)}},{key:"getUser",value:function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","GET",null,!0,{emailAddress:t,password:n});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.json().then((function(e){return e})));case 7:if(401!==r.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","POST",t);case 2:if(201!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllCourses",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","GET");case 2:if(200!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.json().then((function(e){return e})).catch((function(e){return console.log(e)})));case 7:if(400!==t.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCourse",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"GET");case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json().then((function(e){return e})).catch((function(e){return console.log(e)})));case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",t,!0,{emailAddress:n,password:r});case 2:if(201!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==s.status){e.next=11;break}return e.abrupt("return",s.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"updateCourse",value:function(){var e=Object(b.a)(j.a.mark((function e(t,n,r,s){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"PUT",n,!0,{emailAddress:r,password:s});case 2:if(204!==(c=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==c.status){e.next=11;break}return e.abrupt("return",c.json().then((function(e){return e.errors})).catch((function(e){return console.log(e)})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r,s){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t),"DELETE",null,!0,{emailAddress:n,password:r});case 2:if(204!==(s=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==s.status){e.next=11;break}return e.abrupt("return",s.json().then((function(e){return e.errors})).catch((function(e){return console.log(e)})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),p=n(18),f=n.n(p),g=n(0),v=s.a.createContext(),N=function(e){var t=f.a.get("authenticatedUser"),n=f.a.get("validCourseIDs"),s=Object(r.useState)(t?JSON.parse(t):null),c=Object(h.a)(s,2),a=c[0],i=c[1],o=Object(r.useState)(n||null),u=Object(h.a)(o,2),l=u[0],d=u[1],O=Object(r.useState)(new x),m=Object(h.a)(O,1)[0],p=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getUser(t,n);case 2:return null!==(r=e.sent)&&(r.password=n,i(r),f.a.set("authenticatedUser",JSON.stringify(r),{expires:1})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(g.jsx)(v.Provider,{value:{authenticatedUser:a,validCourseIDs:l,data:m,actions:{signIn:p,signOut:function(){i(null),f.a.remove("authenticatedUser")},setIDs:function(e){d(e),f.a.set("validCourseIDs",e,{expires:1})}}},children:e.children})},w=["component"],C=function(e){var t=e.component,n=Object(l.a)(e,w),s=Object(r.useContext)(v).authenticatedUser;return Object(g.jsx)(o.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return s?Object(g.jsx)(t,Object(u.a)({},e)):Object(g.jsx)(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},y=function(){var e=Object(r.useContext)(v).authenticatedUser,t="";return e&&(t="".concat(e.firstName," ").concat(e.lastName)),Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"wrap header--flex",children:[Object(g.jsx)("h1",{className:"header--logo",children:Object(g.jsx)(i.b,{to:"/",children:"Skills Academy Courses"})}),Object(g.jsx)("nav",{children:e?Object(g.jsxs)("ul",{className:"header--signedin",children:[Object(g.jsxs)("li",{children:["Welcome, ",t,"!"]}),Object(g.jsx)("li",{children:Object(g.jsx)(i.b,{to:"/signout",children:"Sign Out"})})]}):Object(g.jsxs)("ul",{className:"header--signedout",children:[Object(g.jsx)("li",{children:Object(g.jsx)(i.b,{to:"/signup",children:"Sign Up"})}),Object(g.jsx)("li",{children:Object(g.jsx)(i.b,{to:"/signin",children:"Sign In"})})]})})]})})},k=function(){var e=Object(r.useContext)(v),t=e.data,n=e.actions,s=Object(r.useState)([]),c=Object(h.a)(s,2),a=c[0],o=c[1],u=Object(r.useRef)(!1);return Object(r.useEffect)((function(){u.current||t.getAllCourses().then((function(e){o(e),n.setIDs(e.map((function(e){return e.id}))),u.current=!0}))}),[n,t]),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"wrap main--grid",children:[a.map((function(e){return Object(g.jsxs)(i.b,{className:"course--module course--link",to:"/courses/".concat(e.id),children:[Object(g.jsx)("h2",{className:"course--label",children:"Course"}),Object(g.jsx)("h3",{className:"course--title",children:e.title})]},e.id)})),Object(g.jsx)(i.b,{className:"course--module course--add--module",to:"/courses/create",children:Object(g.jsxs)("span",{className:"course--add--title",children:[Object(g.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add",children:Object(g.jsx)("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})}),"New Course"]})})]})})},S=n(2),T=function(e){var t=e.errors,n=null;return t&&t.length&&(n=Object(g.jsxs)("div",{className:"validation--errors",children:[Object(g.jsx)("h3",{children:"Validation errors"}),Object(g.jsx)("ul",{children:t.map((function(e,t){return Object(g.jsx)("li",{children:e},t)}))})]})),n},A=function(e){var t=e.cancel,n=e.errors,r=e.submit,s=e.submitButtonText,c=e.elements;return Object(g.jsxs)("div",{children:[Object(g.jsx)(T,{errors:n}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(e)},children:[c(),Object(g.jsx)("button",{className:"button",type:"submit",children:s}),Object(g.jsx)("button",{className:"button button-secondary",onClick:function(e){e.preventDefault(),t(e)},children:"Cancel"})]})]})},E=function(e){var t=Object(o.g)(),n=Object(r.useContext)(v).actions,s=Object(r.useState)({firstName:"",lastName:"",emailAddress:"",password:"",errors:[]}),c=Object(h.a)(s,2),a=c[0],l=c[1],d=a.emailAddress,j=a.password,b=a.errors,O=function(e){l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},e.target.name,e.target.value))}))};return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"form--centered",children:[Object(g.jsx)("h2",{children:"Sign In"}),Object(g.jsx)(A,{cancel:function(){t.push("/")},errors:b,submit:function(){var r=(e.location.state||{from:{pathname:"/"}}).from;n.signIn(d,j).then((function(e){null===e?(l({errors:["Sign-in was unsuccessful"]}),document.querySelector("FORM").reset()):(t.push(r),console.log("SUCCESS! ".concat(d," is now signed in!")))})).catch((function(e){console.log(e),t.push("/error")}))},submitButtonText:"Sign In",elements:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{htmlFor:"emailAddress",children:"Email Address"}),Object(g.jsx)("input",{id:"emailAddress",name:"emailAddress",type:"email",onChange:O}),Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{id:"password",name:"password",type:"password",onChange:O})]})}}),Object(g.jsxs)("p",{children:["Don't have an account? Click here to ",Object(g.jsx)(i.b,{to:"/signup",children:"sign up"}),"!"]})]})})},U=function(e){var t=Object(o.g)(),n=Object(r.useContext)(v),s=n.data,c=n.actions,a=Object(r.useState)({firstName:"",lastName:"",emailAddress:"",password:"",errors:[]}),l=Object(h.a)(a,2),d=l[0],j=l[1],b=d.errors,O=function(e){j((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},e.target.name,e.target.value))}))};return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"form--centered",children:[Object(g.jsx)("h2",{children:"Sign Up"}),Object(g.jsx)(A,{cancel:function(){t.push("/")},errors:b,submit:function(){var n=d.firstName,r=d.lastName,a=d.emailAddress,i=d.password,o={firstName:n,lastName:r,emailAddress:a,password:i},u=(e.location.state||{from:{pathname:"/"}}).from;s.createUser(o).then((function(e){e.length?(j({errors:e}),document.querySelector("FORM").reset()):c.signIn(a,i).then((function(){return t.push(u)}))})).catch((function(e){console.log(e),t.push("/error")}))},submitButtonText:"Sign Up",elements:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(g.jsx)("input",{id:"firstName",name:"firstName",type:"text",onChange:O}),Object(g.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(g.jsx)("input",{id:"lastName",name:"lastName",type:"text",onChange:O}),Object(g.jsx)("label",{htmlFor:"emailAddress",children:"Email Address"}),Object(g.jsx)("input",{id:"emailAddress",name:"emailAddress",type:"email",onChange:O}),Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)("input",{id:"password",name:"password",type:"password",onChange:O})]})}}),Object(g.jsxs)("p",{children:["Already have an account? Click here to ",Object(g.jsx)(i.b,{to:"/signin",children:"sign in"}),"!"]})]})})},F=function(){var e=Object(r.useContext)(v).actions;return Object(r.useEffect)((function(){return e.signOut()})),Object(g.jsx)(o.a,{to:"/"})},I=n(28),D=function(){var e=Object(o.i)().id,t=Object(r.useContext)(v),n=t.data,s=t.authenticatedUser,c=Object(r.useState)({}),a=Object(h.a)(c,2),u=a[0],l=a[1];return Object(r.useEffect)((function(){n.getCourse(e).then((function(e){return l(e)}))}),[n,e]),null===u?Object(g.jsx)(o.a,{to:"/notfound"}):Object(g.jsxs)("main",{children:[Object(g.jsx)("div",{className:"actions--bar",children:Object(g.jsxs)("div",{className:"wrap",children:[s&&s.id===u.userId?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.b,{className:"button",to:{pathname:"/courses/".concat(e,"/update"),state:{courseUserID:u.userId}},children:"Update Course"}),Object(g.jsx)(i.b,{className:"button",to:{pathname:"/courses/".concat(e,"/delete"),state:{courseUserID:u.userId}},children:"Delete Course"})]}):null,Object(g.jsx)(i.b,{className:"button button-secondary",to:"/",children:"Return to List"})]})}),Object(g.jsxs)("div",{className:"wrap",children:[Object(g.jsx)("h2",{children:"Course Detail"}),Object(g.jsx)("form",{children:Object(g.jsxs)("div",{className:"main--flex",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"course--detail--title",children:"Course"}),Object(g.jsx)("h4",{className:"course--name",children:u.title}),Object(g.jsx)("p",{children:u.user?"By ".concat(u.user.firstName," ").concat(u.user.lastName):null}),Object(g.jsx)(I.a,{children:u.description})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"course--detail--title",children:"Estimated Time"}),Object(g.jsx)("p",{children:u.estimatedTime}),Object(g.jsx)("h3",{className:"course--detail--title",children:"Materials Needed"}),Object(g.jsx)("ul",{className:"course--detail--list",children:Object(g.jsx)(I.a,{children:u.materialsNeeded})})]})]})})]})]})},B=function(){var e=Object(o.g)(),t=Object(r.useContext)(v),n=t.data,s=t.authenticatedUser,c=Object(r.useState)({}),a=Object(h.a)(c,2),i=a[0],l=a[1],d=s.firstName,j=s.lastName,b=function(e){l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},e.target.name,e.target.value))}))};return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"wrap",children:[Object(g.jsx)("h2",{children:"Create Course"}),Object(g.jsx)(A,{cancel:function(){e.push("/")},errors:i.errors,submit:function(){i.userId=s.id,n.createCourse(i,s.emailAddress,s.password).then((function(t){t.length?(console.log(t),l({errors:t})):e.push("/")})).catch((function(t){console.log(t),e.push("/error")}))},submitButtonText:"Create Course",elements:function(){return Object(g.jsxs)("div",{className:"main--flex",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"title",children:"Course Title"}),Object(g.jsx)("input",{id:"title",name:"title",type:"text",onChange:b}),Object(g.jsxs)("p",{children:["By ",d," ",j]}),Object(g.jsx)("label",{htmlFor:"description",children:"Course Description"}),Object(g.jsx)("textarea",{id:"description",name:"description",onChange:b})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"estimatedTime",children:"Estimated Time"}),Object(g.jsx)("input",{id:"estimatedTime",name:"estimatedTime",type:"text",onChange:b}),Object(g.jsx)("label",{htmlFor:"materialsNeeded",children:"Materials Needed"}),Object(g.jsx)("textarea",{id:"materialsNeeded",name:"materialsNeeded",onChange:b})]})]})}})]})})},L=function(){var e=Object(o.i)().id,t=Object(o.g)(),n=Object(r.useContext)(v),s=n.data,c=n.authenticatedUser,a=n.validCourseIDs,i=Object(r.useState)({}),l=Object(h.a)(i,2),d=l[0],j=l[1],b=(Object(o.h)().state||0).courseUserID;Object(r.useEffect)((function(){s.getCourse(e).then((function(e){return j(e)}))}),[s,e]);var O=function(e){j((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(S.a)({},e.target.name,e.target.value))}))};return console.log(a),a.includes(parseInt(e))?c.id!==b?Object(g.jsx)(o.a,{to:"/forbidden"}):Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"wrap",children:[Object(g.jsx)("h2",{children:"Update Course"}),Object(g.jsx)(A,{cancel:function(){t.push("/courses/".concat(e))},errors:d.errors,submit:function(){s.updateCourse(e,d,c.emailAddress,c.password).then((function(n){n.length?(console.log(n),j({errors:n})):t.push("/courses/".concat(e))})).catch((function(e){console.log(e),t.push("/error")}))},submitButtonText:"Update Course",elements:function(){return Object(g.jsxs)("div",{className:"main--flex",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"title",children:"Course Title"}),Object(g.jsx)("input",{id:"title",name:"title",type:"text",defaultValue:d.title,onChange:O}),Object(g.jsxs)("p",{children:["By ",c.firstName," ",c.lastName]}),Object(g.jsx)("label",{htmlFor:"description",children:"Course Description"}),Object(g.jsx)("textarea",{id:"description",name:"description",defaultValue:d.description,onChange:O})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"estimatedTime",children:"Estimated Time"}),Object(g.jsx)("input",{id:"estimatedTime",name:"estimatedTime",type:"text",defaultValue:d.estimatedTime,onChange:O}),Object(g.jsx)("label",{htmlFor:"materialsNeeded",children:"Materials Needed"}),Object(g.jsx)("textarea",{id:"materialsNeeded",name:"materialsNeeded",defaultValue:d.materialsNeeded,onChange:O})]})]})}})]})}):Object(g.jsx)(o.a,{to:"/notfound"})},P=function(){var e=Object(o.i)().id,t=Object(r.useContext)(v),n=t.data,s=t.authenticatedUser,c=t.validCourseIDs,a=Object(r.useState)([]),i=Object(h.a)(a,2),u=i[0],l=i[1],d=(Object(o.h)().state||0).courseUserID;return Object(r.useEffect)((function(){n.getCourse(e).then((function(e){return l(e)}))}),[n,e]),c.includes(parseInt(e))?s.id!==d?Object(g.jsx)(o.a,{to:"/forbidden"}):(n.deleteCourse(e,s.emailAddress,s.password),console.log("Deleted course: ".concat(u)),Object(g.jsx)(o.a,{to:"/"})):Object(g.jsx)(o.a,{to:"/notfound"})},R=function(){return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"form--centered",children:[Object(g.jsx)("h2",{children:"Not Found"}),Object(g.jsx)("p",{children:"Sorry, the requested page was not found."}),Object(g.jsx)(i.b,{className:"button button-secondary",to:"/",children:"Return to Course List"})]})})},M=function(){return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"form--centered",children:[Object(g.jsx)("h2",{children:"Access Denied"}),Object(g.jsx)("p",{children:"Sorry, you do not have access permission."}),Object(g.jsx)(i.b,{className:"button button-secondary",to:"/",children:"Return to Course List"}),Object(g.jsx)(i.b,{className:"button button-secondary",to:"/signin",children:"Switch Accounts"})]})})},J=function(){return Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"form--centered",children:[Object(g.jsx)("h2",{children:"Error"}),Object(g.jsx)("p",{children:"Sorry, there was an internal error."}),Object(g.jsx)(i.b,{className:"button button-secondary",to:"/",children:"Return to Course List"})]})})};var V=function(){return Object(g.jsxs)(i.a,{forceRefresh:!0,children:[Object(g.jsx)(y,{}),Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/",component:k}),Object(g.jsx)(C,{path:"/courses/create",component:B}),Object(g.jsx)(C,{path:"/courses/:id/update",component:L}),Object(g.jsx)(C,{path:"/courses/:id/delete",component:P}),Object(g.jsx)(o.b,{path:"/courses/:id",component:D}),Object(g.jsx)(o.b,{path:"/signin",component:E}),Object(g.jsx)(o.b,{path:"/signup",component:U}),Object(g.jsx)(o.b,{path:"/signout",component:F}),Object(g.jsx)(o.b,{path:"/notfound",component:R}),Object(g.jsx)(o.b,{path:"/forbidden",component:M}),Object(g.jsx)(o.b,{path:"/error",component:J}),Object(g.jsx)(o.b,{component:R})]})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(54),n(55),n(56);a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(N,{children:Object(g.jsx)(V,{})})}),document.getElementById("root")),G()}},[[57,1,2]]]);
//# sourceMappingURL=main.512483b4.chunk.js.map