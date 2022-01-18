(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Profile.5e739c63.jpg"},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(6),i=c.n(a),n=(c(12),c(2)),l=(c(13),c(14),c(0));var r=function(){return Object(l.jsx)("div",{class:"section",children:Object(l.jsxs)("div",{class:"container",children:[Object(l.jsxs)("div",{class:"content-section",children:[Object(l.jsx)("div",{class:"title",children:Object(l.jsx)("h2",{children:"Hi, I'm Blake Hyland"})}),Object(l.jsxs)("div",{class:"content",children:[Object(l.jsx)("h4",{children:"Web Developer"}),Object(l.jsx)("p",{children:"My name is Blake Hyland. I grew up in the great state of Texas, but I am currently located in Utah. I've also had the privledge to live in Brazil and New York. Although I have a Master's Degree in Accounting, my passion lies in web development. I am pursuing earning certificates in Full-Stack development by the end of 2021. When i'm not busy improving myself in my coding journey, I enjoy playing soccer and exploring the beautiful mountains of Utah."})]})]}),Object(l.jsx)("div",{class:"image-section",children:Object(l.jsx)("img",{className:"resize",src:c(16).default})})]})})},j=(c(17),c.p+"static/media/resume.5ef9ba99.pdf");var b=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"download",children:Object(l.jsx)("a",{className:"resumeLink",href:j,download:!0,children:Object(l.jsx)("strong",{children:"Download my Resume!"})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"GraphQL"}),Object(l.jsx)("br",{})]})]})]})},h=c(3),o=c(5);c(18);var d=c(7);var u=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(n.a)(e,2),c=t[0],a=t[1],i=c.name,r=c.email,j=c.message,b=Object(s.useState)(""),u=Object(n.a)(b,2),O=u[0],x=u[1];function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),x(t?"":"Your email is invalid.")}else e.target.value.length?x(""):x("".concat(e.target.name," is required."));O||a(Object(o.a)(Object(o.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("div",{class:"section",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{children:"Fill out the form below to get in touch with me"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),d.a.sendForm("service_5lswd3i","template_2vuixvi",e.target,"user_fRuHWJWZ6XotsOCcL42AS").then((function(e){console.log(e)}),window.location.reload()).catch((function(e){return console.log(e)}))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",defaultValue:i,onBlur:m,name:"name"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",defaultValue:r,name:"email",onBlur:m})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",defaultValue:j,onBlur:m,rows:"5"})]}),O&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:O})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},O=[{title:"About",url:"#"},{title:"Projects",url:"#"},{title:"Contact",url:"#"},{title:"Resume",url:"#"}];c(19);var x=function(e){var t=e.setCurrentPage,c=e.title,a=e.currentPage,i=Object(s.useState)(!1),r=Object(n.a)(i,2),j=r[0],b=r[1],h=Object(s.useState)(O[0].title),o=Object(n.a)(h,2),d=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{className:"NavbarItems",children:[Object(l.jsx)("h2",{className:"navbar-name",children:c}),Object(l.jsxs)("a",{href:"#",className:"toggle-button",onClick:function(){b(!j)},children:[Object(l.jsx)("span",{className:"bar"}),Object(l.jsx)("span",{className:"bar"}),Object(l.jsx)("span",{className:"bar"})]}),Object(l.jsx)("div",{className:j?"mobile-links":"navbar-links",children:Object(l.jsx)("ul",{children:O.map((function(e,c){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"nav-links "+(a===e.title?"Active":""),href:e.url,onClick:function(){t(e.title),u(e.title)},children:e.title})},c)}))})})]}),Object(l.jsx)("h1",{className:j?"mobile-hero-text":"hero-text",children:function(){switch(d){case"Projects":return"Projects";case"Contact":return"Contact Me";case"Resume":return"Resume";default:return"About"}}()})]})};c(20);var m=function(e){var t=e.setCurrentPage,c=e.currentPage;return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"hero-image",children:Object(l.jsx)("nav",{children:Object(l.jsx)(x,{setCurrentPage:t,title:"Blake Hyland",currentPage:c})})})})};c(21);var g=function(){return Object(l.jsx)("section",{id:"projects",class:"Portfolio",children:Object(l.jsx)("div",{class:"myProjects",children:Object(l.jsxs)("div",{class:"project-container",children:[Object(l.jsx)("a",{class:"secondary image1",href:"https://obscure-stream-43810.herokuapp.com/",target:"_blank",children:Object(l.jsx)("div",{class:"project-display ",children:Object(l.jsxs)("div",{class:"project-title",children:[Object(l.jsx)("h3",{children:"Shop-Shop-Shop"}),Object(l.jsx)("a",{className:"github-link",href:"https://github.com/bhyland95/Project1",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})}),Object(l.jsx)("a",{class:"secondary image2",href:"https://quiet-journey-83566.herokuapp.com/",target:"_blank",children:Object(l.jsx)("div",{class:"project-display",children:Object(l.jsxs)("div",{class:"project-title",children:[Object(l.jsx)("h3",{children:"Ethical Social Media"}),Object(l.jsx)("a",{className:"github-link",href:"https://github.com/bhyland95/Ethical-Social-Media",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})}),Object(l.jsx)("a",{class:"secondary image3",href:"https://peaceful-gorge-13766.herokuapp.com/",target:"_blank",children:Object(l.jsx)("div",{class:"project-display",children:Object(l.jsxs)("div",{class:"project-title",children:[Object(l.jsx)("h3",{children:"SubscripZen"}),Object(l.jsx)("a",{className:"github-link",href:"https://github.com/bhyland95/Subscripzen",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})}),Object(l.jsx)("a",{class:"secondary image4",href:"https://bhyland95.github.io/photo-port/",target:"_blank",children:Object(l.jsx)("div",{class:"project-display",children:Object(l.jsxs)("div",{class:"project-title",children:[Object(l.jsx)("h3",{children:"Photo Port"}),Object(l.jsx)("a",{className:"github-link",href:"https://github.com/bhyland95/photo-port",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})}),Object(l.jsx)("a",{class:"secondary image5",href:"https://bhyland95.github.io/food-festival/",target:"_blank",children:Object(l.jsx)("div",{class:"project-display",children:Object(l.jsxs)("div",{class:"project-title",children:[Object(l.jsx)("h3",{children:"Food Festival"}),Object(l.jsx)("a",{className:"github-link",href:"https://github.com/bhyland95/food-festival",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})}),Object(l.jsx)("a",{class:"secondary image6",href:"https://quiet-earth-87101.herokuapp.com/",target:"_blank",children:Object(l.jsx)("div",{class:"project-display",children:Object(l.jsxs)("div",{class:"project-title",children:[Object(l.jsx)("h3",{children:"Deep Thoughts"}),Object(l.jsx)("a",{className:"github-link",href:"https://github.com/bhyland95/deep-thoughts",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})})]})})})};c(22),c(23);var f=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("a",{href:"https://www.instagram.com/blakehyland/",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-instagram"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/blake-hyland/",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-linkedin"})}),Object(l.jsx)("a",{href:"https://github.com/bhyland95",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})})};var p=function(){var e=Object(s.useState)(O[0].title),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{setCurrentPage:a,currentPage:c}),Object(l.jsx)("main",{children:function(){switch(c){case"Projects":return Object(l.jsx)(g,{});case"Contact":return Object(l.jsx)(u,{});case"Resume":return Object(l.jsx)(b,{});default:return Object(l.jsx)(r,{})}}()}),Object(l.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};i.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),v()}],[[24,1,2]]]);
//# sourceMappingURL=main.f6e3b454.chunk.js.map