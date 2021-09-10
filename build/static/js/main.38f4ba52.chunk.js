(this["webpackJsonpcv-generator"]=this["webpackJsonpcv-generator"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),s=n.n(i),c=n(4),o=n(3),r=n(5),l=n(8),d=n.n(l),u={polish:{personalSection:"Informacje Osobiste",name:"Imi\u0119",enterYourName:"Wpisz swoje imi\u0119",secondName:"Nazwisko",enterYourSecondName:"Wpisz swoje nazwisko",title:"Tytu\u0142",enterYourTitle:"Wpisz sw\xf3j tytu\u0142",address:"Adres",enterYourAddress:"Wpisz sw\xf3j adres",phone:"Numer telefonu",enterYourPhone:"Wpisz sw\xf3j numer Telefonu",email:"Adres e-mail",enterYourEmail:"Wpisz sw\xf3j adres email",description:"Opis",enterDescription:"Napisz co\u015b o sobie",photo:"Zdj\u0119cie (opcjonalne)"},english:{personalSection:"Personal Information",name:"Name",enterYourName:"Enter your name",secondName:"Second Name",enterYourSecondName:"Enter your second name",title:"Title",enterYourTitle:"Enter your title",address:"Address",enterYourAddress:"Enter your address",phone:"Phone Number",enterYourPhone:"Enter your phone number",email:"E-mail address",enterYourEmail:"Enter your e-mail address",description:"Desription",enterDescription:"Write something about yourself.",photo:"Photo (optional)"}},j={polish:{experience:"Do\u015bwiadczenie",position:"Pozycja",enterPosition:"Wpisz stanowisko na kt\xf3rym pracowa\u0142e\u015b",company:"Firma",enterCompany:"Wpisz nazw\u0119 firmy, w kt\xf3rej pracowa\u0142e\u015b",city:"Miasto",enterCity:"Wpisz miasto",from:"Od",fromWhen:"Wpisz dat\u0119 rozpocz\u0119cia",to:"Do",toWhen:"Wpisz dat\u0119 zako\u0144czenia"},english:{experience:"Experience",position:"Position",enterPosition:"Enter position at which you worked at",company:"Company",enterCompany:"Enter name of the company",city:"City",enterCity:"Enter the city",from:"From",fromWhen:"Enter start date",to:"To",toWhen:"Enter end date"}},m={polish:{education:"Edukacja",facility:"Plac\xf3wka",enterFacility:"Wpisz miejsce nauki",city:"Miasto",enterCity:"Wpisz miasto",degree:"Stopie\u0144 naukowy",enterDegree:"Wpisz stopie\u0144 naukowy",subject:"Kierunek kszta\u0142cenia",enterSubject:"Wpisz kierunek kszta\u0142cenia",fromWhen:"Od",enterFromWhen:"Wpisz dat\u0119 rozpocz\u0119cia",toWhen:"Do",enterToWhen:"Wpisz dat\u0119 zako\u0144czenia"},english:{education:"Education",facility:"Facility",enterFacility:"Enter facility",city:"City",enterCity:"Enter city",degree:"Degree",enterDegree:"Enter your degree",subject:"Subject",enterSubject:"Enter the subject",fromWhen:"From",enterFromWhen:"Enter start date",toWhen:"To",enterToWhen:"Enter end date"}},p={polish:{skills:"Umiej\u0119tno\u015bci",enterSkill:"Wpisz swoj\u0105 umiejetno\u015b\u0107"},english:{skills:"Skills",enterSkill:"Enter your skill"}},h={polish:{interests:"Zainteresowania",enterInterest:"Wpisz zainteresowanie"},english:{interests:"Interests",enterInterest:"Enter your interest"}},b={polish:{fillTheForm:"Wype\u0142nij poni\u017csze pola",addPosition:"Dodaj pozycj\u0119",deletePosition:"Usu\u0144 pozycj\u0119",addSkill:"Dodaj umiej\u0119tno\u015b\u0107",deleteSkill:"Usu\u0144 umiej\u0119tno\u015b\u0107",addInterest:"Dodaj zainteresowanie",deleteInterest:"Usu\u0144 zainteresowanie",addEducation:"Dodaj edukacj\u0119",deleteEducation:"Usu\u0144 edukacj\u0119",generatePDF:"Wygeneruj plik PDF",loadExample:"Wczytaj przyk\u0142adowe dane",clearAll:"Wyczy\u015b\u0107 wszystkie pola"},english:{fillTheForm:"Fill the following fields",addPosition:"Add position",deletePosition:"Delete position",addSkill:"Add skill",deleteSkill:"Delete skill",addInterest:"Add interest",deleteInterest:"Delete interest",addEducation:"Add Education",deleteEducation:"Delete Education",generatePDF:"Generate PDF File",loadExample:"Load example data",clearAll:"Clear all fields"}},g={polish:{name:"Imi\u0119",secondName:"Nazwisko",title:"Tytu\u0142",profile:"Profil",experience:"Do\u015bwiadczenie",education:"Edukacja",skills:"Umiej\u0119tno\u015bci",interests:"Zainteresowania",contact:"Kontakt"},english:{name:"Name",secondName:"Surname",title:"Title",profile:"Profile",experience:"Experience",education:"Education",skills:"Skills",interests:"Interests",contact:"Contact"}},v=n(0),x=function(e){var t=e.name,n=e.description,a=e.prompt,i=e.onChangeInput,s=e.value;return Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsx)("label",{htmlFor:t,children:n}),Object(v.jsx)("input",{name:t,type:"text",placeholder:a,value:s||"",onChange:i})]})},O=function(e){var t=m[e.language],n=b[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(v.jsxs)("div",{id:"education-data",className:"section",children:[Object(v.jsx)("h2",{children:t.education}),Object(v.jsx)("button",{className:"add-button",onClick:c,children:n.addEducation}),a.map((function(e,a){return Object(v.jsxs)("div",{className:"education section-unit","data-index":a,children:[Object(v.jsx)(x,{name:"facility",description:t.facility,value:e.facility,prompt:t.enterFacility,onChangeInput:i}),Object(v.jsx)(x,{name:"city",description:t.city,value:e.city,prompt:t.enterCity,onChangeInput:i}),Object(v.jsx)(x,{name:"degree",description:t.degree,value:e.degree,prompt:t.enterDegree,onChangeInput:i}),Object(v.jsx)(x,{name:"subject",description:t.subject,value:e.subject,prompt:t.enterSubject,onChangeInput:i}),Object(v.jsx)(x,{name:"fromWhen",description:t.fromWhen,value:e.fromWhen,prompt:t.enterFromWhen,onChangeInput:i}),Object(v.jsx)(x,{name:"toWhen",description:t.toWhen,value:e.toWhen,prompt:t.enterToWhen,onChangeInput:i}),Object(v.jsx)("button",{className:"delete-button",onClick:s,children:n.deleteEducation})]},a)}))]})},f=function(e){var t=j[e.language],n=b[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(v.jsxs)("div",{id:"experience-data",className:"experience section",children:[Object(v.jsx)("h2",{children:t.experience}),Object(v.jsx)("button",{className:"add-button",onClick:c,children:n.addPosition}),a.map((function(e,a){return Object(v.jsxs)("div",{className:"experience section-unit","data-index":a,children:[Object(v.jsx)(x,{name:"position",description:t.position,value:e.position,prompt:t.enterPosition,onChangeInput:i}),Object(v.jsx)(x,{name:"company",description:t.company,value:e.company,prompt:t.enterCompany,onChangeInput:i}),Object(v.jsx)(x,{name:"city",description:t.city,value:e.city,prompt:t.enterCity,onChangeInput:i}),Object(v.jsx)(x,{name:"from",description:t.from,value:e.from,prompt:t.from,onChangeInput:i}),Object(v.jsx)(x,{name:"to",description:t.to,value:e.to,prompt:t.toWhen,onChangeInput:i}),Object(v.jsx)("button",{className:"delete-button",onClick:s,children:n.deletePosition})]},a)}))]})},N=function(e){var t=h[e.language],n=b[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(v.jsxs)("div",{id:"interests-data",className:"interests-section section",children:[Object(v.jsx)("h2",{children:t.interests}),Object(v.jsx)("button",{className:"add-button",onClick:c,children:n.addInterest}),a.map((function(e,a){return Object(v.jsxs)("div",{className:"interest section-unit","data-index":a,children:[Object(v.jsx)("input",{type:"text",name:"interest-name",placeholder:t.enterInterest,value:e["interest-name"]||"",onChange:i}),Object(v.jsx)("button",{className:"delete-button",onClick:s,children:n.deleteInterest})]},a)}))]})},y=function(e){var t=u[e.language],n=e.formData[0],a=e.onChangeInput,i=e.onImageChange;return Object(v.jsxs)("div",{id:"personal-data",className:"personaldata section",children:[Object(v.jsx)("h3",{children:t.personalSection}),Object(v.jsxs)("div",{className:"section-unit","data-index":"0",children:[Object(v.jsx)(x,{name:"name",description:t.name,value:n.name,prompt:t.enterYourName,onChangeInput:a}),Object(v.jsx)(x,{name:"secondName",description:t.secondName,value:n.secondName,prompt:t.enterYourSecondName,onChangeInput:a}),Object(v.jsx)(x,{name:"title",description:t.title,value:n.title,prompt:t.enterYourTitle,onChangeInput:a}),Object(v.jsx)(x,{name:"address",description:t.address,value:n.address,prompt:t.enterYourAddress,onChangeInput:a}),Object(v.jsx)(x,{name:"phone",description:t.phone,value:n.phone,prompt:t.enterYourPhone,onChangeInput:a}),Object(v.jsx)(x,{name:"email",description:t.email,value:n.email,prompt:t.enterYourEmail,onChangeInput:a}),Object(v.jsx)(x,{name:"description",description:t.description,value:n.description,prompt:t.enterDescription,onChangeInput:a}),Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsx)("label",{htmlFor:"image",children:t.photo}),Object(v.jsx)("input",{name:"image",type:"file",onChange:i})]})]})]})},k=function(e){var t=p[e.language],n=b[e.language],a=e.formData,i=e.onChangeInput,s=e.onDeleteUnit,c=e.onAddUnit;return Object(v.jsxs)("div",{id:"skills-data",className:"skills-section section",children:[Object(v.jsx)("h2",{children:t.skills}),Object(v.jsx)("button",{className:"add-button",onClick:c,children:n.addSkill}),a.map((function(e,a){return Object(v.jsxs)("div",{className:"skill section-unit","data-index":a,children:[Object(v.jsx)("input",{type:"text",name:"skill-name",placeholder:t.enterSkill,value:e["skill-name"]||"",onChange:i}),Object(v.jsx)("button",{className:"delete-button",onClick:s,children:n.deleteSkill})]},a)}))]})},C=function(e){var t=e.language,n=e.data,a=e.handleChange,i=e.deleteUnit,s=e.addUnit,c=e.onImageChange;return Object(v.jsx)("div",{className:"form-area",children:Object(v.jsxs)("form",{id:"fill-form",children:[Object(v.jsx)("h2",{className:"form-header",children:b[t].fillTheForm}),Object(v.jsx)(y,{formData:n["personal-data"],language:t,onChangeInput:a,onImageChange:c}),Object(v.jsx)(f,{formData:n["experience-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s}),Object(v.jsx)(O,{formData:n["education-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s}),Object(v.jsx)(k,{formData:n["skills-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s}),Object(v.jsx)(N,{formData:n["interests-data"],language:t,onChangeInput:a,onDeleteUnit:i,onAddUnit:s})]})})},I=n(2),D=n.n(I),z=function(e,t){var n=g[e.language],a=e.data["personal-data"][0],i=e.data["experience-data"],s=e.data["education-data"],c=e.data["skills-data"],o=e.data["interests-data"];return Object(v.jsxs)("div",{id:"generated-cv",ref:t,children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsxs)("div",{className:"name",children:[a.name||n.name," ",a.secondName||n.secondName]}),Object(v.jsx)("div",{className:"underline"}),Object(v.jsx)("div",{className:"title",children:a.title||n.title})]}),Object(v.jsxs)("div",{className:"main-area",children:[Object(v.jsx)("div",{className:"side-area",children:Object(v.jsxs)("div",{className:"cv-section",children:[Object(v.jsx)("div",{className:"cv-section-title",children:n.contact}),Object(v.jsx)("div",{className:"cv-section-title-underline"}),Object(v.jsx)("div",{className:"cv-section-data cv-contact-address",children:a.address}),Object(v.jsx)("div",{className:"cv-section-data cv-contact-phone",children:a.phone}),Object(v.jsx)("div",{className:"cv-section-data cv-contact-email",children:a.email})]})}),Object(v.jsxs)("div",{className:"center-area",children:[Object(v.jsxs)("div",{className:"cv-section",children:[Object(v.jsx)("div",{className:"cv-section-title",children:n.profile}),Object(v.jsx)("div",{className:"cv-section-title-underline"}),Object(v.jsx)("div",{className:"cv-section-data",children:a.description})]}),i.length>0&&Object(v.jsxs)("div",{className:"cv-section",children:[Object(v.jsx)("div",{className:"cv-section-title",children:n.experience}),Object(v.jsx)("div",{className:"cv-section-title-underline"}),Object(v.jsx)("div",{className:"cv-section-data",children:i.map((function(e){return Object(v.jsxs)("div",{className:"cv-section-unit",children:[Object(v.jsxs)("div",{className:"cv-experience-position",children:[e.position," / ",e.from,"-",e.to]}),Object(v.jsxs)("div",{className:"cv-experience-company",children:[e.company,", ",e.city]})]},D()())}))})]}),s.length>0&&Object(v.jsxs)("div",{className:"cv-section",children:[Object(v.jsx)("div",{className:"cv-section-title",children:n.education}),Object(v.jsx)("div",{className:"cv-section-title-underline"}),Object(v.jsx)("div",{className:"cv-section-data",children:s.map((function(e){return Object(v.jsxs)("div",{className:"cv-section-unit",children:[Object(v.jsxs)("div",{className:"cv-education-facility",children:[e.facility,", ",e.city," / ",e.fromWhen,"-",e.toWhen]}),Object(v.jsxs)("div",{className:"cv-education-degree",children:["Stopie\u0144: ",e.degree]}),Object(v.jsxs)("div",{className:"cv-education-subject",children:["Przedmiot: ",e.subject]})]},D()())}))})]}),c.length>0&&Object(v.jsxs)("div",{className:"cv-section",children:[Object(v.jsx)("div",{className:"cv-section-title",children:n.skills}),Object(v.jsx)("div",{className:"cv-section-title-underline"}),Object(v.jsx)("div",{className:"cv-section-data",children:c.map((function(e){return Object(v.jsx)("ul",{className:"cv-section-unit",children:Object(v.jsx)("li",{children:e["skill-name"]})},D()())}))})]}),o.length>0&&Object(v.jsxs)("div",{className:"cv-section",children:[Object(v.jsx)("div",{className:"cv-section-title",children:n.interests}),Object(v.jsx)("div",{className:"cv-section-title-underline"}),Object(v.jsx)("div",{className:"cv-section-data",children:o.map((function(e){return Object(v.jsx)("ul",{className:"cv-section-unit",children:Object(v.jsx)("li",{children:e["interest-name"]})},D()())}))})]})]})]})]})},W=Object(a.forwardRef)(z),E=function(e){var t=b[e.language],n=e.clearAllFields,a=e.loadExample;return Object(v.jsxs)("div",{className:"buttons-area",children:[Object(v.jsx)("button",{className:"load-example",onClick:a,children:t.loadExample}),Object(v.jsx)("button",{className:"clear-all",onClick:n,children:t.clearAll})]})},w={"personal-data":[{name:"Phillip J.",secondName:"Fry",title:"Delivery Boy",address:"New York",phone:"123 456 789",email:"planetexpress@gmail.com",description:"I am a delivery boy in the distant future. I'm looking for any job that would help out my career."}],"experience-data":[{position:"Delivery Boy",company:"Planet Express",city:"New York",from:"4034",to:"present"}],"education-data":[{facility:"State High School",city:"New York",degree:"-",subject:"-",fromWhen:"1998",toWhen:"2001"}],"skills-data":[{"skill-name":"Delivering"},{key:"kt1kfjdi","skill-name":"Juggling"}],"interests-data":[{"interest-name":"Being lazy"},{key:"kt1kgp0t","interest-name":"Coffe"}]},S=(n(15),function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)("polish"),l=Object(r.a)(s,2),u=l[0],j=l[1],m=Object(a.useState)({"personal-data":[{}],"experience-data":[{}],"education-data":[{}],"skills-data":[{}],"interests-data":[{}]}),p=Object(r.a)(m,2),h=p[0],g=p[1],x=Object(a.useRef)(),O=Object(a.useRef)(!0),f=function(e){e.preventDefault(),j(e.target.dataset.language)};Object(a.useEffect)((function(){if(O.current)O.current=!1;else if(null===n||void 0===n)document.querySelector(".image-preview").remove();else{var e=new FileReader;e.readAsDataURL(n),e.onload=function(e){var t,n=document.querySelector(".side-area");null===document.querySelector(".image-preview")?(t=document.createElement("img")).classList.add("image-preview"):t=document.querySelector(".image-preview"),t.src=this.result,n.prepend(t)}}}),[n]);return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("div",{className:"change-lang",children:[Object(v.jsx)("button",{className:"lang-button lang-pol","data-language":"polish",onClick:f}),Object(v.jsx)("button",{className:"lang-button lang-eng","data-language":"english",onClick:f})]}),Object(v.jsx)(C,{language:u,data:h,handleChange:function(e){var t=e.target.name,n=e.target.value,a=e.target.closest(".section").id,i=e.target.closest(".section-unit").dataset.index,s=JSON.parse(JSON.stringify(h[a]));void 0===s[i]&&s.push({}),s[i][t]=n,g(Object(o.a)(Object(o.a)({},h),{},Object(c.a)({},a,s)))},addUnit:function(e){e.preventDefault();var t=e.target.closest(".section").id,n=JSON.parse(JSON.stringify(h[t]));n.push({key:D()()}),g(Object(o.a)(Object(o.a)({},h),{},Object(c.a)({},t,n)))},deleteUnit:function(e){e.preventDefault();var t=e.target.closest(".section").id,n=e.target.closest(".section-unit").dataset.index,a=JSON.parse(JSON.stringify(h[t]));void 0!==a[n]&&a.splice(n,1),g(Object(o.a)(Object(o.a)({},h),{},Object(c.a)({},t,a)))},onImageChange:function(e){i(e.target.files[0])}}),Object(v.jsx)(d.a,{trigger:function(){return Object(v.jsx)("button",{className:"generate-pdf",children:b[u].generatePDF})},content:function(){return x.current}}),Object(v.jsx)(E,{loadExample:function(){g(w)},language:u,data:h,clearAllFields:function(){g({"personal-data":[{}],"experience-data":[{}],"education-data":[{}],"skills-data":[{}],"interests-data":[{}]})}}),Object(v.jsx)("div",{className:"cv-area",children:Object(v.jsx)(W,{language:u,ref:x,image:n,data:h})})]})});s.a.render(Object(v.jsx)(S,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.38f4ba52.chunk.js.map