(this["webpackJsonpcv-generator"]=this["webpackJsonpcv-generator"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),s=n.n(i),c=n(4),o=n(3),r=n(8),l=n.n(r),d=n(10),u=n(5),m=n(9),j=n.n(m),p={polish:{personalSection:"Informacje Osobiste",name:"Imi\u0119",enterYourName:"Wpisz swoje imi\u0119",secondName:"Nazwisko",enterYourSecondName:"Wpisz swoje nazwisko",title:"Tytu\u0142",enterYourTitle:"Wpisz sw\xf3j tytu\u0142",address:"Adres",enterYourAddress:"Wpisz sw\xf3j adres",phone:"Numer telefonu",enterYourPhone:"Wpisz sw\xf3j numer Telefonu",email:"Adres e-mail",enterYourEmail:"Wpisz sw\xf3j adres email",description:"Opis",enterDescription:"Napisz co\u015b o sobie",photo:"Zdj\u0119cie (opcjonalne)"},english:{personalSection:"Personal Information",name:"Name",enterYourName:"Enter your name",secondName:"Second Name",enterYourSecondName:"Enter your second name",title:"Title",enterYourTitle:"Enter your title",address:"Address",enterYourAddress:"Enter your address",phone:"Phone Number",enterYourPhone:"Enter your phone number",email:"E-mail address",enterYourEmail:"Enter your e-mail address",description:"Desription",enterDescription:"Write something about yourself.",photo:"Photo (optional)"}},h={polish:{experience:"Do\u015bwiadczenie",position:"Pozycja",enterPosition:"Wpisz stanowisko na kt\xf3rym pracowa\u0142e\u015b",company:"Firma",enterCompany:"Wpisz nazw\u0119 firmy, w kt\xf3rej pracowa\u0142e\u015b",city:"Miasto",enterCity:"Wpisz miasto",from:"Od",fromWhen:"Wpisz dat\u0119 rozpocz\u0119cia",to:"Do",toWhen:"Wpisz dat\u0119 zako\u0144czenia"},english:{experience:"Experience",position:"Position",enterPosition:"Enter position at which you worked at",company:"Company",enterCompany:"Enter name of the company",city:"City",enterCity:"Enter the city",from:"From",fromWhen:"Enter start date",to:"To",toWhen:"Enter end date"}},b={polish:{education:"Edukacja",facility:"Plac\xf3wka",enterFacility:"Wpisz miejsce nauki",city:"Miasto",enterCity:"Wpisz miasto",degree:"Stopie\u0144 naukowy",enterDegree:"Wpisz stopie\u0144 naukowy",subject:"Kierunek kszta\u0142cenia",enterSubject:"Wpisz kierunek kszta\u0142cenia",fromWhen:"Od",enterFromWhen:"Wpisz dat\u0119 rozpocz\u0119cia",toWhen:"Do",enterToWhen:"Wpisz dat\u0119 zako\u0144czenia"},english:{education:"Education",facility:"Facility",enterFacility:"Enter facility",city:"City",enterCity:"Enter city",degree:"Degree",enterDegree:"Enter your degree",subject:"Subject",enterSubject:"Enter the subject",fromWhen:"From",enterFromWhen:"Enter start date",toWhen:"To",enterToWhen:"Enter end date"}},g={polish:{skills:"Umiej\u0119tno\u015bci",enterSkill:"Wpisz swoj\u0105 umiejetno\u015b\u0107"},english:{skills:"Skills",enterSkill:"Enter your skill"}},v={polish:{interests:"Zainteresowania",enterInterest:"Wpisz zainteresowanie"},english:{interests:"Interests",enterInterest:"Enter your interest"}},x={polish:{fillTheForm:"Wype\u0142nij poni\u017csze pola",addPosition:"Dodaj pozycj\u0119",deletePosition:"Usu\u0144 pozycj\u0119",addSkill:"Dodaj umiej\u0119tno\u015b\u0107",deleteSkill:"Usu\u0144 umiej\u0119tno\u015b\u0107",addInterest:"Dodaj zainteresowanie",deleteInterest:"Usu\u0144 zainteresowanie",addEducation:"Dodaj edukacj\u0119",deleteEducation:"Usu\u0144 edukacj\u0119",generatePDF:"Wygeneruj plik PDF",loadExample:"Wczytaj przyk\u0142adowe dane",clearAll:"Wyczy\u015b\u0107 wszystkie pola"},english:{fillTheForm:"Fill the following fields",addPosition:"Add position",deletePosition:"Delete position",addSkill:"Add skill",deleteSkill:"Delete skill",addInterest:"Add interest",deleteInterest:"Delete interest",addEducation:"Add Education",deleteEducation:"Usu\u0144 edukacj\u0119",generatePDF:"Generate PDF File",loadExample:"Load example data",clearAll:"Clear all fields"}},O={polish:{name:"Imi\u0119",secondName:"Nazwisko",title:"Tytu\u0142",profile:"Profil",experience:"Do\u015bwiadczenie",education:"Edukacja",skills:"Umiej\u0119tno\u015bci",interests:"Zainteresowania",contact:"Kontakt"},english:{name:"Name",secondName:"Surname",title:"Title",profile:"Profile",experience:"Experience",education:"Education",skills:"Skills",interests:"Interests",contact:"Contact"}},f=n(0),N=function(e){var t=e.name,n=e.description,a=e.prompt,i=e.onChangeInput,s=e.value;return Object(f.jsxs)("div",{className:"form-input",children:[Object(f.jsx)("label",{htmlFor:t,children:n}),Object(f.jsx)("input",{name:t,type:"text",placeholder:a,value:s||"",onChange:i})]})},y=function(e){var t=b[e.language],n=x[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(f.jsxs)("div",{id:"education-data",className:"section",children:[Object(f.jsx)("h2",{children:t.education}),Object(f.jsx)("button",{className:"add-button",onClick:c,children:n.addEducation}),a.map((function(e,a){return Object(f.jsxs)("div",{className:"education section-unit","data-index":a,children:[Object(f.jsx)(N,{name:"facility",description:t.facility,value:e.facility,prompt:t.enterFacility,onChangeInput:i}),Object(f.jsx)(N,{name:"city",description:t.city,value:e.city,prompt:t.enterCity,onChangeInput:i}),Object(f.jsx)(N,{name:"degree",description:t.degree,value:e.degree,prompt:t.enterDegree,onChangeInput:i}),Object(f.jsx)(N,{name:"subject",description:t.subject,value:e.subject,prompt:t.enterSubject,onChangeInput:i}),Object(f.jsx)(N,{name:"fromWhen",description:t.fromWhen,value:e.fromWhen,prompt:t.enterFromWhen,onChangeInput:i}),Object(f.jsx)(N,{name:"toWhen",description:t.toWhen,value:e.toWhen,prompt:t.enterToWhen,onChangeInput:i}),Object(f.jsx)("button",{className:"delete-button",onClick:s,children:n.deleteEducation})]},a)}))]})},k=function(e){var t=h[e.language],n=x[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(f.jsxs)("div",{id:"experience-data",className:"experience section",children:[Object(f.jsx)("h2",{children:t.experience}),Object(f.jsx)("button",{className:"add-button",onClick:c,children:n.addPosition}),a.map((function(e,a){return Object(f.jsxs)("div",{className:"experience section-unit","data-index":a,children:[Object(f.jsx)(N,{name:"position",description:t.position,value:e.position,prompt:t.enterPosition,onChangeInput:i}),Object(f.jsx)(N,{name:"company",description:t.company,value:e.company,prompt:t.enterCompany,onChangeInput:i}),Object(f.jsx)(N,{name:"city",description:t.city,value:e.city,prompt:t.enterCity,onChangeInput:i}),Object(f.jsx)(N,{name:"from",description:t.from,value:e.from,prompt:t.from,onChangeInput:i}),Object(f.jsx)(N,{name:"to",description:t.to,value:e.to,prompt:t.toWhen,onChangeInput:i}),Object(f.jsx)("button",{className:"delete-button",onClick:s,children:n.deletePosition})]},a)}))]})},C=function(e){var t=v[e.language],n=x[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(f.jsxs)("div",{id:"interests-data",className:"interests-section section",children:[Object(f.jsx)("h2",{children:t.interests}),Object(f.jsx)("button",{className:"add-button",onClick:c,children:n.addInterest}),a.map((function(e,a){return Object(f.jsxs)("div",{className:"interest section-unit","data-index":a,children:[Object(f.jsx)("input",{type:"text",name:"interest-name",placeholder:t.enterInterest,value:e["interest-name"]||"",onChange:i}),Object(f.jsx)("button",{className:"delete-button",onClick:s,children:n.deleteInterest})]},a)}))]})},I=function(e){var t=p[e.language],n=e.formData[0],a=e.onChangeInput,i=e.onImageChange;return Object(f.jsxs)("div",{id:"personal-data",className:"personaldata section",children:[Object(f.jsx)("h3",{children:t.personalSection}),Object(f.jsxs)("div",{className:"section-unit","data-index":"0",children:[Object(f.jsx)(N,{name:"name",description:t.name,value:n.name,prompt:t.enterYourName,onChangeInput:a}),Object(f.jsx)(N,{name:"secondName",description:t.secondName,value:n.secondName,prompt:t.enterYourSecondName,onChangeInput:a}),Object(f.jsx)(N,{name:"title",description:t.title,value:n.title,prompt:t.enterYourTitle,onChangeInput:a}),Object(f.jsx)(N,{name:"address",description:t.address,value:n.address,prompt:t.enterYourAddress,onChangeInput:a}),Object(f.jsx)(N,{name:"phone",description:t.phone,value:n.phone,prompt:t.enterYourPhone,onChangeInput:a}),Object(f.jsx)(N,{name:"email",description:t.email,value:n.email,prompt:t.enterYourEmail,onChangeInput:a}),Object(f.jsx)(N,{name:"description",description:t.description,value:n.description,prompt:t.enterDescription,onChangeInput:a}),Object(f.jsxs)("div",{className:"form-input",children:[Object(f.jsx)("label",{htmlFor:"image",children:t.photo}),Object(f.jsx)("input",{name:"image",type:"file",onChange:i})]})]})]})},z=function(e){var t=g[e.language],n=x[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(f.jsxs)("div",{id:"skills-data",className:"skills-section section",children:[Object(f.jsx)("h2",{children:t.skills}),Object(f.jsx)("button",{className:"add-button",onClick:c,children:n.addSkill}),a.map((function(e,a){return Object(f.jsxs)("div",{className:"skill section-unit","data-index":a,children:[Object(f.jsx)("input",{type:"text",name:"skill-name",placeholder:t.enterSkill,value:e["skill-name"]||"",onChange:i}),Object(f.jsx)("button",{className:"delete-button",onClick:s,children:n.deleteSkill})]},a)}))]})},D=function(e){var t=e.language,n=e.data,a=e.handleChange,i=e.deleteUnit,s=e.addUnit,c=e.onImageChange;return Object(f.jsx)("div",{className:"form-area",children:Object(f.jsxs)("form",{id:"fill-form",children:[Object(f.jsx)("h2",{className:"form-header",children:x[t].fillTheForm}),Object(f.jsx)(I,{formData:n["personal-data"],language:t,onChangeInput:a,onImageChange:c}),Object(f.jsx)(k,{formData:n["experience-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s}),Object(f.jsx)(y,{formData:n["education-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s}),Object(f.jsx)(z,{formData:n["skills-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s}),Object(f.jsx)(C,{formData:n["interests-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s})]})})},W=n(2),E=n.n(W),w=function(e){var t=O[e.language],n=e.data["personal-data"][0],a=e.data["experience-data"],i=e.data["education-data"],s=e.data["skills-data"],c=e.data["interests-data"];return Object(f.jsxs)("div",{id:"generated-cv",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsxs)("div",{className:"name",children:[n.name||t.name," ",n.secondName||t.secondName]}),Object(f.jsx)("div",{className:"underline"}),Object(f.jsx)("div",{className:"title",children:n.title||t.title})]}),Object(f.jsxs)("div",{className:"main-area",children:[Object(f.jsx)("div",{className:"side-area",children:Object(f.jsxs)("div",{className:"cv-section",children:[Object(f.jsx)("div",{className:"cv-section-title",children:t.contact}),Object(f.jsx)("div",{className:"cv-section-title-underline"}),Object(f.jsx)("div",{className:"cv-section-data cv-contact-address",children:n.address}),Object(f.jsx)("div",{className:"cv-section-data cv-contact-phone",children:n.phone}),Object(f.jsx)("div",{className:"cv-section-data cv-contact-email",children:n.email})]})}),Object(f.jsxs)("div",{className:"center-area",children:[Object(f.jsxs)("div",{className:"cv-section",children:[Object(f.jsx)("div",{className:"cv-section-title",children:t.profile}),Object(f.jsx)("div",{className:"cv-section-title-underline"}),Object(f.jsx)("div",{className:"cv-section-data",children:n.description})]}),a.length>0&&Object(f.jsxs)("div",{className:"cv-section",children:[Object(f.jsx)("div",{className:"cv-section-title",children:t.experience}),Object(f.jsx)("div",{className:"cv-section-title-underline"}),Object(f.jsx)("div",{className:"cv-section-data",children:a.map((function(e){return Object(f.jsxs)("div",{className:"cv-section-unit",children:[Object(f.jsxs)("div",{className:"cv-experience-position",children:[e.position," / ",e.from,"-",e.to]}),Object(f.jsxs)("div",{className:"cv-experience-company",children:[e.company,", ",e.city]})]},E()())}))})]}),i.length>0&&Object(f.jsxs)("div",{className:"cv-section",children:[Object(f.jsx)("div",{className:"cv-section-title",children:t.education}),Object(f.jsx)("div",{className:"cv-section-title-underline"}),Object(f.jsx)("div",{className:"cv-section-data",children:i.map((function(e){return Object(f.jsxs)("div",{className:"cv-section-unit",children:[Object(f.jsxs)("div",{className:"cv-education-facility",children:[e.facility,", ",e.city," / ",e.fromWhen,"-",e.toWhen]}),Object(f.jsxs)("div",{className:"cv-education-degree",children:["Stopie\u0144: ",e.degree]}),Object(f.jsxs)("div",{className:"cv-education-subject",children:["Przedmiot: ",e.subject]})]},E()())}))})]}),s.length>0&&Object(f.jsxs)("div",{className:"cv-section",children:[Object(f.jsx)("div",{className:"cv-section-title",children:t.skills}),Object(f.jsx)("div",{className:"cv-section-title-underline"}),Object(f.jsx)("div",{className:"cv-section-data",children:s.map((function(e){return Object(f.jsx)("ul",{className:"cv-section-unit",children:Object(f.jsx)("li",{children:e["skill-name"]})},E()())}))})]}),c.length>0&&Object(f.jsxs)("div",{className:"cv-section",children:[Object(f.jsx)("div",{className:"cv-section-title",children:t.interests}),Object(f.jsx)("div",{className:"cv-section-title-underline"}),Object(f.jsx)("div",{className:"cv-section-data",children:c.map((function(e){return Object(f.jsx)("ul",{className:"cv-section-unit",children:Object(f.jsx)("li",{children:e["interest-name"]})},E()())}))})]})]})]})]})},S=function(e){var t=x[e.language],n=e.clearAllFields,a=e.loadExample;return Object(f.jsxs)("div",{className:"buttons-area",children:[Object(f.jsx)("button",{className:"load-example",onClick:a,children:t.loadExample}),Object(f.jsx)("button",{className:"clear-all",onClick:n,children:t.clearAll})]})},P={"personal-data":[{name:"Phillip J.",secondName:"Fry",title:"Delivery Boy",address:"New York",phone:"123 456 789",email:"planetexpress@gmail.com",description:"I am a delivery boy in the distant future. I'm looking for any job that would help out my career."}],"experience-data":[{position:"Delivery Boy",company:"Planet Express",city:"New York",from:"4034",to:"present"}],"education-data":[{facility:"State High School",city:"New York",degree:"-",subject:"-",fromWhen:"1998",toWhen:"2001"}],"skills-data":[{"skill-name":"Delivering"},{key:"kt1kfjdi","skill-name":"Juggling"}],"interests-data":[{"interest-name":"Being lazy"},{key:"kt1kgp0t","interest-name":"Coffe"}]},U=(n(18),void 0),F=function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)("polish"),p=Object(u.a)(r,2),h=p[0],b=p[1],g=Object(a.useState)({"personal-data":[{}],"experience-data":[{}],"education-data":[{}],"skills-data":[{}],"interests-data":[{}]}),v=Object(u.a)(g,2),O=v[0],N=v[1],y=function(e){e.preventDefault(),b(e.target.dataset.language)},k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t.target.files[0]);case 2:void 0===i?document.querySelector(".image-preview").remove():((n=new FileReader).readAsDataURL(i),n.onload=function(e){var t,n=document.querySelector(".side-area");(t=null===document.querySelector(".image-preview")?document.createElement("img"):document.querySelector(".image-preview")).classList.add("image-preview"),t.src=this.result,n.prepend(t)});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"change-lang",children:[Object(f.jsx)("button",{className:"lang-button lang-pol","data-language":"polish",onClick:y}),Object(f.jsx)("button",{className:"lang-button lang-eng","data-language":"english",onClick:y})]}),Object(f.jsx)(D,{language:h,data:O,handleChange:function(e){var t=e.target.name,n=e.target.value,a=e.target.closest(".section").id,i=e.target.closest(".section-unit").dataset.index,s=JSON.parse(JSON.stringify(O[a]));void 0===s[i]&&s.push({}),s[i][t]=n,N(Object(o.a)(Object(o.a)({},O),{},Object(c.a)({},a,s)))},addUnit:function(e){e.preventDefault();var t=e.target.closest(".section").id,n=JSON.parse(JSON.stringify(O[t]));n.push({key:E()()}),N(Object(o.a)(Object(o.a)({},O),{},Object(c.a)({},t,n)))},deleteUnit:function(e){e.preventDefault();var t=e.target.closest(".section").id,n=e.target.closest(".section-unit").dataset.index,a=JSON.parse(JSON.stringify(O[t]));void 0!==a[n]&&a.splice(n,1),N(Object(o.a)(Object(o.a)({},O),{},Object(c.a)({},t,a)))},onImageChange:k}),Object(f.jsx)(j.a,{content:function(){return U.componentRef},children:Object(f.jsx)(m.PrintContextConsumer,{children:function(e){var t=e.handlePrint;return Object(f.jsx)("button",{className:"generate-pdf",onClick:t,children:x[h].generatePDF})}})}),Object(f.jsx)(S,{loadExample:function(){N(P)},language:h,data:O,clearAllFields:function(){N({"personal-data":[{}],"experience-data":[{}],"education-data":[{}],"skills-data":[{}],"interests-data":[{}]})}}),Object(f.jsx)("div",{className:"cv-area",children:Object(f.jsx)(w,{language:h,ref:function(e){return U.componentRef=e},image:i,data:O})})]})};s.a.render(Object(f.jsx)(F,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1f6e7892.chunk.js.map