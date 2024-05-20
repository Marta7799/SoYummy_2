"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{9063:function(n,e,t){t.d(e,{Z:function(){return f}});var r,o,i,a,s,c=t(168),d=t(4709),l=d.Z.h1(r||(r=(0,c.Z)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: -0.56px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: ","px;\n    letter-spacing: -0.88px;\n  }\n"])),(function(n){return n.theme.colors.pageTitleColor}),(function(n){return n.theme.fontSizes[28]}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.lineHeights[1]}),(function(n){return n.theme.fontSizes[32]}),(function(n){return n.theme.fontSizes[44]})),u=d.Z.div(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 76px;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    left: 187px;\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: 116px;\n    left: 228px;\n  }\n"])),(function(n){return n.theme.colors.accentColor})),p=(0,d.Z)(u)(i||(i=(0,c.Z)(["\n  top: 106px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 89px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: 129px;\n    left: 1149px;\n  }\n"]))),m=d.Z.div(a||(a=(0,c.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    top: 200px;\n    left: 706px;\n  }\n"])),(function(n){return n.theme.colors.pageTitleColor})),h=d.Z.section(s||(s=(0,c.Z)(["\n  position: relative;\n  padding-top: 114px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 136px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 164px;\n  }\n"]))),x=t(184),f=function(n){var e=n.title;return(0,x.jsxs)(h,{children:[(0,x.jsx)(l,{children:e}),(0,x.jsx)(u,{}),(0,x.jsx)(p,{}),(0,x.jsx)(m,{})]})}},6659:function(n,e,t){t.d(e,{Z:function(){return r.Z}});var r=t(9063)},5390:function(n,e,t){t.d(e,{X:function(){return r}});var r=function(n){if(n<0)return"0 min";var e=Math.floor(n/60),t=n%60;return 0===e?"".concat(t," min"):0===t?"".concat(e,e>1?" hours":" hour"):"".concat(e," h ").concat(t," min")}},2461:function(n,e,t){t.r(e),t.d(e,{default:function(){return ge}});var r,o=t(2791),i=t(4420),a=t(4543),s=t(6739),c=t(2730),d=t(5861),l=t(9439),u=t(4687),p=t.n(u),m=t(5705),h=t(7689),x=t(8007),f=[{id:1,time:"5"},{id:2,time:"10"},{id:3,time:"15"},{id:4,time:"20"},{id:5,time:"40"},{id:6,time:"45"},{id:7,time:"50"},{id:8,time:"60"},{id:9,time:"65"},{id:10,time:"70"},{id:11,time:"80"},{id:12,time:"85"},{id:13,time:"90"},{id:14,time:"95"},{id:15,time:"100"},{id:16,time:"105"},{id:17,time:"110"},{id:18,time:"115"},{id:19,time:"120"}],g=f.map((function(n){return n.time})),b=x.Ry().shape({photo:x.nK().required("You need to provide a file").test("fileSize","To limit the file size to a maximum of 3MB",(function(n){return n.size<=3e6})).test("type","Only the following formats are accepted: .jpeg, .jpg, .bmp, .png, .svg, and .webp",(function(n){return n&&("image/jpeg"===n.type||"image/bmp"===n.type||"image/png"===n.type)})),title:x.Z_().required("Please enter the recipe title").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Title must contain letters"),about:x.Z_().required("Please describe the recipe").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Describe must contain letters"),category:x.Z_().required("Please choose a category for your recipe"),time:x.Z_().required("Please select the cooking time").oneOf(g),ingredients:x.IX().of(x.Ry().shape({value:x.Z_().required("Please select an ingredient"),measure:x.Z_().required("Please enter the measure"),label:x.Z_().optional()})),preparation:x.IX().of(x.Z_().required("Please enter the recipe")).test("notEmptyStrings","Please enter the recipe",(function(n){return n&&n[0]&&n[0].length>0&&/[^\s\n]/.test(n[0])&&n.every((function(n){return n&&n.length>0}))}))}),w=t(5600),v=t(3057),j=t(9273),Z=t(536),y=t(1413),C=t(168),_=t(4709),k=_.Z.p(r||(r=(0,C.Z)(["\n  color: ",";\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.colors.errorColor})),z=t(184),F=function(n){var e=n.name,t=n.style;return(0,z.jsx)(m.Bc,{name:e,render:function(n){return(0,z.jsx)(k,{style:t,children:n})}})};var S=t.p+"static/media/sprite.2907ddde8e16a69e5625ef68527eb9d4.svg",P=function(n,e,t,r){var o=e(t,n);return e(r,n)&&o},T=t(5390),q=t(974),B=t(9308);var D=(0,q.Z)("div",{target:"e1qs9a0m10"})({name:"1uwh63m",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:67px;padding-top:97px;@media screen and (min-width: 768px){flex-direction:row;padding-bottom:104px;}"}),N=(0,q.Z)("div",{target:"e1qs9a0m9"})("margin-bottom:32px;text-align:center;@media screen and (min-width: 768px){margin-right:32px;margin-bottom:0;}transition:scale ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";&:focus,&:hover{scale:1.01;}"),I=(0,q.Z)("div",{target:"e1qs9a0m8"})("width:279px;height:268px;transition:box-shadow ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";@media screen and (min-width: 1280px){width:357px;height:344px;}&.error{box-shadow:0 0 5px ",(function(n){return n.theme.colors.errorColor}),";border-radius:8px;}"),L=(0,q.Z)("label",{target:"e1qs9a0m7"})(""),A=(0,q.Z)("div",{target:"e1qs9a0m6"})("width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-shrink:0;background-color:",(function(n){return n.theme.colors.accentColor}),";border-radius:8px;cursor:pointer;&:active{transform:scale(1.01);}"),E=(0,q.Z)("img",{target:"e1qs9a0m5"})({name:"1weeyao",styles:"width:100%;height:100%;border-radius:8px"}),O=(0,q.Z)("div",{target:"e1qs9a0m4"})({name:"17io7zi",styles:"display:flex;flex-direction:column;width:100%;@media screen and (min-width: 1280px){width:393px;}"}),R=(0,q.Z)("div",{target:"e1qs9a0m3"})("position:relative;display:flex;flex-direction:column;height:40px;border-bottom:1px solid ",(function(n){return n.theme.colors.inputBorderColor}),";transition:box-shadow ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";:not(:last-child){margin-bottom:24px;}&:focus,&:hover{box-shadow:0 5px 5px -5px ",(function(n){return n.theme.colors.boxShadow}),";}&.error{box-shadow:0 5px 5px -5px ",(function(n){return n.theme.colors.errorColor}),";}@media screen and (min-width: 768px){height:43px;:not(:last-child){margin-bottom:32px;}}@media screen and (min-width: 1280px){:not(:last-child){margin-bottom:40px;}}"),M=(0,q.Z)(m.gN,{target:"e1qs9a0m2"})("font-family:'Poppins';font-size:12px;border:none;background-color:transparent;padding:0;color:",(function(n){return n.theme.colors.primaryTextColor}),";height:100%;outline:none;padding-top:23px;caret-color:",(function(n){return n.theme.colors.primaryTextColor}),";@media screen and (min-width: 768px){font-size:14px;}"),X=(0,q.Z)("label",{target:"e1qs9a0m1"})("position:absolute;top:0;left:0;font-size:14px;color:",(function(n){return n.theme.colors.formLabelColor}),";pointer-events:none;@media screen and (min-width: 768px){font-size:16px;}"),Y=(0,q.Z)(B.ZP,{target:"e1qs9a0m0"})("position:absolute;top:4px;right:0;.custom-select{&__control{box-shadow:none;background-color:transparent;border:none;min-height:20px;min-width:87px;font-size:12px;line-height:1;font-weight:500;cursor:pointer;&:hover{",R,"{box-shadow:0 5px 5px -5px ",(function(n){return n.theme.colors.boxShadow}),";}}&:hover,&--is-focused{box-shadow:0 0 5px ",(function(n){return n.theme.colors.boxShadow}),";border-radius:6px;}@media screen and (min-width: 768px){font-size:14px;min-width:94px;}}&__input-container{padding:1px;margin:0;}&__menu{font-size:12px;padding:4px 4px 4px 14px;margin:0;width:123px;top:28px;right:0px;box-shadow:0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03);border:none;border-radius:6px;background-color:",(function(n){return n.theme.colors.menuBgColor}),";color:",(function(n){return n.theme.colors.formLabelColor}),";@media screen and (min-width: 768px){width:132px;font-size:14px;}}&__menu-list{height:calc(6 * 22px + 2px);@media screen and (min-width: 768px){height:calc(6 * 27px);}}&__placeholder{color:",(function(n){return n.theme.colors.selectPlaceholderColor}),";line-height:1;letter-spacing:-0.28px;font-weight:400;}&__value-container{padding:0px 8px;}&__single-value{color:",(function(n){return n.theme.colors.formLabelColor}),";line-height:1;letter-spacing:-0.28px;}&__option{font-size:12px;padding:3px 0;margin-bottom:4px;font-size:12px;letter-spacing:-0.24px;cursor:pointer;@media screen and (min-width: 768px){font-size:14px;}}&__option--is-focused{background-color:",(function(n){return n.theme.colors.menuFocusColor}),";}&__option--is-selected{background-color:",(function(n){return n.theme.colors.menuSelectColor}),";}&__indicator-separator{display:none;}&__indicator{padding:0;cursor:pointer;color:",(function(n){return n.theme.colors.accentColor}),";transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";&:hover,&:focus{transform:scale(1.1);color:",(function(n){return n.theme.colors.accentColor}),";}}&__menu-list::-webkit-scrollbar{width:4px;height:0px;}&__menu-list::-webkit-scrollbar-track{background:transparent;}&__menu-list::-webkit-scrollbar-thumb{padding:4px 0;border-radius:12px;background:",(function(n){return n.theme.colors.menuScrollbarThumbColor}),";transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";cursor:pointer;}&__menu-list::-webkit-scrollbar-thumb:hover{background:",(function(n){return n.theme.colors.menuSelectColor}),";}}"),U=function(n){var e=n.file,t=n.handleFileChange,r=(0,i.v9)(w.DS),o=r.map((function(n){return{value:n._id,label:n.name}})),a=f.map((function(n){return{value:n.time,label:(0,T.X)(n.time)}})),s=(0,m.u6)(),c=s.setFieldValue,d=s.errors,l=s.touched;return(0,z.jsxs)(D,{children:[(0,z.jsxs)(N,{children:[(0,z.jsx)(m.gN,{name:"photo",type:"file",children:function(n){var r=n.field;return(0,z.jsxs)(I,{className:P("title",m.u9,d,l)?"error":"",children:[(0,z.jsx)(L,{htmlFor:r.name,children:(0,z.jsx)(A,{children:e?(0,z.jsx)(E,{src:URL.createObjectURL(e),alt:"Uploaded"}):(0,z.jsxs)("svg",{width:64,height:64,children:[(0,z.jsx)("use",{href:"".concat(S,"#capture")}),(0,z.jsx)("use",{href:"".concat(S,"#photo-camera"),width:24,height:24,x:20,y:20})]})})}),(0,z.jsx)("input",{accept:"image/*",type:"file",id:r.name,style:{display:"none"},onChange:function(n){c("photo",n.target.files[0]),t(n)}})]})}}),(0,z.jsx)(F,{name:"photo",style:{paddingTop:"5px"}})]}),(0,z.jsxs)(O,{children:[(0,z.jsxs)(R,{className:P("title",m.u9,d,l)?"error":"",children:[(0,z.jsx)(X,{htmlFor:"title",children:"Enter item title"}),(0,z.jsx)(M,{name:"title",id:"title",type:"text"}),(0,z.jsx)(F,{name:"title",style:{paddingTop:"5px"}})]}),(0,z.jsxs)(R,{className:P("about",m.u9,d,l)?"error":"",children:[(0,z.jsx)(X,{htmlFor:"about",children:"Enter about recipe"}),(0,z.jsx)(M,{name:"about",id:"about",type:"text"}),(0,z.jsx)(F,{name:"about",style:{paddingTop:"5px"}})]}),(0,z.jsxs)(R,{className:P("category",m.u9,d,l)?"error":"",children:[(0,z.jsx)(X,{htmlFor:"category",children:"Category"}),(0,z.jsx)(Y,{name:"category",as:"select",options:o,classNamePrefix:"custom-select",isSearchable:!1,onChange:function(n){c("category",n.label)},children:r.map((function(n){var e=n._id,t=n.name;return(0,z.jsx)("option",{value:t,children:t},e)}))}),(0,z.jsx)(F,{name:"category",style:(0,y.Z)({position:"absolute"},window.innerWidth>=768?{bottom:"-21px"}:{bottom:"-19px"})})]}),(0,z.jsxs)(R,{className:P("time",m.u9,d,l)?"error":"",children:[(0,z.jsx)(X,{htmlFor:"time",children:"Cooking time"}),(0,z.jsx)(Y,{name:"time",as:"select",options:a,classNamePrefix:"custom-select",onChange:function(n){return c("time",n.value)},isSearchable:!1,children:f.map((function(n){var e=n.id,t=n.time;return(0,z.jsx)("option",{value:t,children:t},e)}))}),(0,z.jsx)(F,{name:"time",style:(0,y.Z)({position:"absolute"},window.innerWidth>=768?{bottom:"-21px"}:{bottom:"-19px"})})]})]})]})},V=t(3433),W=function(n){return n.ingredients.ingredientsList};var G=(0,q.Z)("div",{target:"eftt0nu4"})("position:absolute;top:0;right:0;border-radius:18px;border:1px solid ",(function(n){return n.theme.colors.counterBrdColor}),";"),J=(0,q.Z)("svg",{target:"eftt0nu3"})("stroke:",(function(n){return n.theme.colors.counterBrdColor}),";transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";@media screen and (min-width: 768px){width:16px;height:16px;}"),H=(0,q.Z)("button",{target:"eftt0nu2"})("width:auto;outline:none;height:auto;padding:0;background:none;border:none;transition:box-shadow ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";cursor:pointer;&:active{transform:scale(1.01);}&:hover{",J,"{stroke:",(function(n){return n.theme.colors.accentColor}),";stroke-opacity:1;}}&:focus{box-shadow:0 0 5px ",(function(n){return n.theme.colors.boxShadow}),";border-radius:4px;",J,"{stroke:",(function(n){return n.theme.colors.accentColor}),";stroke-opacity:1;}}"),K=(0,q.Z)("span",{target:"eftt0nu1"})("color:",(function(n){return n.theme.colors.svgCrossColor}),";margin-left:14px;margin-right:14px;font-size:14px;line-height:1.3;@media screen and (min-width: 768px){font-size:16px;}"),Q=(0,q.Z)("div",{target:"eftt0nu0"})({name:"1dy5vju",styles:"padding:7px 14px;display:flex"}),$=function(n){var e=n.remove,t=n.push,r=n.ingredients;return(0,z.jsx)(G,{children:(0,z.jsxs)(Q,{children:[(0,z.jsx)(H,{type:"button",onClick:function(){r.length>1&&e(r.length-1)},children:(0,z.jsx)(J,{width:14,height:14,children:(0,z.jsx)("use",{href:"".concat(S,"#minus")})})}),(0,z.jsx)(K,{children:r.length}),(0,z.jsx)(H,{type:"button",onClick:function(){return t({id:"",measure:""})},children:(0,z.jsx)(J,{width:14,height:14,children:(0,z.jsx)("use",{href:"".concat(S,"#plus")})})})]})})};var nn,en,tn,rn,on,an,sn,cn,dn,ln,un,pn,mn,hn,xn,fn,gn,bn,wn,vn,jn,Zn,yn=(0,q.Z)("div",{target:"e160gzhj9"})({name:"ryfeq5",styles:"position:relative;margin-bottom:100px"}),Cn=(0,q.Z)("h2",{target:"e160gzhj8"})("color:",(function(n){return n.theme.colors.secondaryTextColor}),";font-size:24px;font-weight:600;line-height:1;letter-spacing:-0.48px;margin-bottom:24px;@media screen and (min-width: 768px){margin-bottom:36px;}"),_n=(0,q.Z)("div",{target:"e160gzhj7"})({name:"w7nyri",styles:"margin-right:14px;min-width:194px;@media screen and (min-width: 768px){margin-right:32px;min-width:398px;}"}),kn=(0,q.Z)("div",{target:"e160gzhj6"})(".error{box-shadow:0 0 5px ",(function(n){return n.theme.colors.errorColor}),";border-radius:8px;}transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";"),zn=(0,q.Z)(B.ZP,{target:"e160gzhj5"})("box-shadow:none;.custom-select{&__control{font-family:'Poppins';border:",(function(n){return n.theme.colors.selectBrdColor}),";border-radius:6px;box-shadow:none;background-color:",(function(n){return n.theme.colors.selectBgColor}),";font-size:14px;line-height:1;cursor:text;&:hover,&--is-focused{box-shadow:0 0 5px ",(function(n){return n.theme.colors.boxShadow}),";border-radius:6px;}.error{box-shadow:0 0 5px ",(function(n){return n.theme.colors.boxShadow}),";border-radius:8px;}@media screen and (min-width: 768px){font-size:18px;}}&__placeholder{color:",(function(n){return n.theme.colors.selectPlaceholderColor}),";line-height:1;letter-spacing:-0.28px;}&__input-container{color:",(function(n){return n.theme.colors.primaryTextColor}),";}&__menu{padding:4px 4px 4px 18px;margin:0;box-shadow:0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03);border:none;border-radius:6px;background-color:",(function(n){return n.theme.colors.menuBgColor}),";color:",(function(n){return n.theme.colors.formLabelColor}),";}&__menu-list{height:calc(6 * 24px + 2px);@media screen and (min-width: 768px){height:calc(6 * 27px + 2px);}}&__value-container{padding:12px 8px;}&__single-value{color:",(function(n){return n.theme.colors.primaryTextColor}),";line-height:1;letter-spacing:-0.28px;}&__option{margin:6px 0;padding:2px 0;font-size:12px;letter-spacing:-0.24px;cursor:pointer;@media screen and (min-width: 768px){font-size:14px;}}&__option--is-focused{background-color:",(function(n){return n.theme.colors.menuFocusColor}),";}&__option--is-selected{background-color:",(function(n){return n.theme.colors.menuSelectColor}),";}&__indicator-separator{display:none;}&__indicator{cursor:pointer;color:",(function(n){return n.theme.colors.accentColor}),";transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";&:hover,&:focus{transform:scale(1.1);color:",(function(n){return n.theme.colors.accentColor}),";}}&__menu-list::-webkit-scrollbar{width:4px;height:0px;}&__menu-list::-webkit-scrollbar-track{background:transparent;}&__menu-list::-webkit-scrollbar-thumb{padding:4px 0;border-radius:12px;background:",(function(n){return n.theme.colors.menuScrollbarThumbColor}),";transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";cursor:pointer;}&__menu-list::-webkit-scrollbar-thumb:hover{background:",(function(n){return n.theme.colors.menuSelectColor}),";}}"),Fn=(0,q.Z)("div",{target:"e160gzhj4"})({name:"1d0i03h",styles:"margin-right:8px;width:109px;@media screen and (min-width: 768px){margin-right:40px;width:214px;}"}),Sn=(0,q.Z)(m.gN,{target:"e160gzhj3"})("outline:none;width:109px;height:54px;padding:0 0 0 5px;border:",(function(n){return n.theme.colors.selectBrdColor}),";border-radius:6px;background-color:",(function(n){return n.theme.colors.selectBgColor}),";color:",(function(n){return n.theme.colors.primaryTextColor}),";font-size:14px;line-height:1;letter-spacing:-0.28px;font-family:'Poppins';caret-color:",(function(n){return n.theme.colors.primaryTextColor}),";transition:box-shadow ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";cursor:text;&::placeholder{color:",(function(n){return n.theme.colors.selectPlaceholder}),";opacity:1;}&:focus,&:hover{box-shadow:0 0 5px ",(function(n){return n.theme.colors.boxShadow}),";border-radius:6px;}@media screen and (min-width: 768px){font-size:18px;height:59px;width:214px;}&.error{box-shadow:0 0 5px ",(function(n){return n.theme.colors.errorColor}),";border-radius:6px;}"),Pn=(0,q.Z)("div",{target:"e160gzhj2"})({name:"1eea9sv",styles:"display:flex;margin-bottom:18px"}),Tn=(0,q.Z)("svg",{target:"e160gzhj1"})("stroke:",(function(n){return n.theme.colors.svgCrossColor}),";@media screen and (min-width: 768px){width:20px;height:20px;}transition:stroke ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";"),qn=(0,q.Z)("button",{target:"e160gzhj0"})("padding:0;outline:none;border:none;background-color:transparent;transition:box-shadow ",(function(n){return n.theme.transforms.transitionDuration})," ",(function(n){return n.theme.transforms.timingFunction}),";cursor:pointer;&:active{transform:scale(1.01);}&:hover{",Tn,"{stroke:",(function(n){return n.theme.colors.accentColor}),";}}&:focus{box-shadow:0 0 5px ",(function(n){return n.theme.colors.boxShadow}),";border-radius:4px;",Tn,"{stroke:",(function(n){return n.theme.colors.accentColor}),";}}"),Bn=function(){var n=(0,i.v9)(W).map((function(n){return{value:n._id,label:n.name}}));return(0,z.jsxs)(yn,{children:[(0,z.jsx)(Cn,{children:"Ingredients"}),(0,z.jsx)(m.F2,{validateOnChange:!0,name:"ingredients",children:function(e){var t=e.push,r=e.form,o=r.values,i=r.setFieldValue,a=r.errors,s=r.touched,c=o.ingredients,d=function(n){var e=(0,V.Z)(c);e.length>1&&(e.splice(n,1),i("ingredients",e))};return(0,z.jsxs)("div",{children:[(0,z.jsx)($,{remove:d,push:t,ingredients:c}),c.map((function(e,t){return(0,z.jsxs)(Pn,{children:[(0,z.jsxs)(_n,{children:[(0,z.jsx)(kn,{className:P("ingredients[".concat(t,"].value"),m.u9,a,s)?"error":"",children:(0,z.jsx)(zn,{className:P("ingredients[".concat(t,"].value"),m.u9,a,s)?"error":"",value:e.value?e:null,classNamePrefix:"custom-select",name:c[t].id,placeholder:"Select ingredient",options:n,onChange:function(n){return function(n,e){var t=(0,V.Z)(c);t[e]=(0,y.Z)((0,y.Z)({},t[e]),n),i("ingredients",t)}(n,t)}})}),(0,z.jsx)(F,{name:"ingredients[".concat(t,"].value"),style:{marginTop:"5px"}})]}),(0,z.jsxs)(Fn,{children:[(0,z.jsx)(Sn,{name:"ingredients[".concat(t,"].measure"),type:"text",autoComplete:"off",value:c[t].measure||"",onChange:function(n){!function(n,e){var t=(0,V.Z)(c);t[n]=(0,y.Z)((0,y.Z)({},t[n]),{},{measure:e}),i("ingredients",t)}(t,n.target.value)},placeholder:"Enter measure",className:P("ingredients[".concat(t,"].measure"),m.u9,a,s)?"error":""}),(0,z.jsx)(F,{name:"ingredients[".concat(t,"].measure"),style:{marginTop:"5px"}})]}),(0,z.jsx)(qn,{type:"button",onClick:function(){d(t)},children:(0,z.jsx)(Tn,{width:18,height:18,children:(0,z.jsx)("use",{href:"".concat(S,"#delete-button")})})})]},t)}))]})}})]})},Dn=(0,_.Z)(Cn)(nn||(nn=(0,C.Z)(["\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Nn=_.Z.div(en||(en=(0,C.Z)(["\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),In=(0,_.Z)(m.gN)(tn||(tn=(0,C.Z)(["\n  outline: none;\n  width: 100%;\n  height: 154px;\n  resize: none;\n  border: ",";\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n  background-color: ",";\n  padding: 10px 16px;\n\n  color: ",";\n  font-family: 'Poppins';\n  font-size: 14px;\n  letter-spacing: -0.28px;\n\n  caret-color: ",";\n\n  transition: box-shadow ","\n    ",";\n\n  &::placeholder {\n    color: ",";\n    opacity: 1;\n  }\n\n  &:focus,\n  &:hover {\n    box-shadow: 0 0 5px ",";\n    border-radius: 6px;\n  }\n\n  &.error {\n    box-shadow: 0 0 5px var(--error-color);\n    border-radius: 6px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 505px;\n    height: 224px;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.colors.selectBrdColor}),(function(n){return n.theme.colors.selectBgColor}),(function(n){return n.theme.colors.primaryTextColor}),(function(n){return n.theme.colors.primaryTextColor}),(function(n){return n.theme.transforms.transitionDuration}),(function(n){return n.theme.transforms.timingFunction}),(function(n){return n.theme.colors.selectPlaceholder}),(function(n){return n.theme.colors.boxShadow})),Ln=function(){var n=(0,o.useState)([""]),e=(0,l.Z)(n,2),t=e[0],r=e[1],i=(0,m.u6)(),a=i.errors,s=i.touched,c=i.values;return(0,z.jsxs)(Nn,{children:[(0,z.jsx)(Dn,{children:"Recipe Preparation"}),(0,z.jsx)(In,{name:"preparation",as:"textarea",placeholder:"Enter recipe",onChange:function(n){var e=n.target.value;r([e]);var o=t[0].split("\n").map((function(n){return 0===n.length?"\n":n})),a=o.length>1?o:[e];i.setFieldValue("preparation",a)},value:c.preparation.join("\n"),className:P("preparation",m.u9,a,s)?"error":""}),a.preparation&&(0,z.jsx)(F,{name:"preparation"})]})},An=t(1953),En={photo:"",title:"",about:"",category:"",time:"",ingredients:[{value:"",measure:"",label:""},{value:"",measure:"",label:""},{value:"",measure:"",label:""}],preparation:[""]},On=function(){var n=(0,o.useState)(null),e=(0,l.Z)(n,2),t=e[0],r=e[1],s=(0,h.s0)(),c=(0,i.v9)(w.F),u=(0,i.v9)(w.zh),x=(0,i.I0)();(0,o.useEffect)((function(){if(!u)return c&&(x((0,j.bG)()),(0,v.U)("Congratulations! You have added a recipe.")),c&&s("/recipes/".concat(c)),function(){x((0,An.FA)(""))};(0,v.E)("Oops... Something went wrong.")}),[u,c,s,x]);var f=function(){var n=(0,d.Z)(p().mark((function n(e,r){var o,i,s,c;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=r.resetForm,i=r.setSubmitting,s=JSON.stringify({title:e.title,description:e.about,category:e.category,time:e.time,ingredients:e.ingredients.map((function(n){return{id:n.value,measure:n.measure}})),instructions:e.preparation}),(c=new FormData).append("recipeImg",t),c.append("data",s),o(En),i(!0),n.next=9,x(a.A.addOwnRecipe(c));case 9:i(!1);case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return(0,z.jsx)(m.J9,{initialValues:En,validationSchema:b,onSubmit:f,children:(0,z.jsxs)(m.l0,{children:[(0,z.jsx)(U,{handleFileChange:function(n){var e=n.target.files[0];r(e)},file:t}),(0,z.jsx)(Bn,{}),(0,z.jsx)(Ln,{}),(0,z.jsx)(Z.Z,{nameButton:"Add",type:"submit",bgColor:function(n){return n.theme.colors.mainButtonColor},textColor:function(n){return n.theme.colors.whiteColor},hoverStyles:{styleFirst:"color"},hoverParams:{paramFirst:function(n){return n.theme.colors.hoverMainButtonColor}},focusParams:{paramFirst:function(n){return n.theme.colors.hoverMainButtonColor}},cofByMedia768:{font:1,padX:1.17,padY:1.333},cofByMedia1280:{font:1,padX:1.17,padY:1.333}})]})})},Rn=t(6659),Mn=function(n,e){if(n.length<=e)return n;var t=n.lastIndexOf(" ",e);if(t<=0)return n.slice(0,e-1)+"...";var r=n.slice(0,t);return r[r.length-1].match(/[A-Za-z0-9]/)||(r=r.slice(0,-1)),r+"..."},Xn=function(n,e){return Math.random()-.5},Yn=t(1087),Un=(0,_.Z)(Yn.OL)(rn||(rn=(0,C.Z)(["\n  outline: none;\n  width: 343px;\n  padding-bottom: 13px;\n  border-bottom: 1px solid ",";\n  display: flex;\n\n  transition: box-shadow ","\n    ",";\n\n  &:focus {\n    box-shadow: 0 0 5px ",";\n    border-radius: 6px;\n  }\n\n  &:hover {\n    scale: 1.02;\n  }\n\n  transition: scale ","\n    ",";\n\n  @media (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 319px;\n    gap: 11px;\n  }\n"])),(function(n){return n.theme.colors.popularCardBrdColor}),(function(n){return n.theme.transforms.transitionDuration}),(function(n){return n.theme.transforms.timingFunction}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.transforms.transitionDuration}),(function(n){return n.theme.transforms.timingFunction})),Vn=_.Z.div(on||(on=(0,C.Z)(["\n  width: 104px;\n  height: 85px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    width: 102px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 97px;\n  }\n"]))),Wn=_.Z.img(an||(an=(0,C.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n"]))),Gn=_.Z.div(sn||(sn=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n"]))),Jn=_.Z.h3(cn||(cn=(0,C.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.25;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryTextColor})),Hn=_.Z.p(dn||(dn=(0,C.Z)(["\n  font-size: 12px;\n  line-height: 1.3;\n  color: ",";\n"])),(function(n){return n.theme.colors.popularRecipeDescriptionColor})),Kn=function(n){var e=n._id,t=n.title,r=n.description,o=n.thumb;return(0,z.jsxs)(Un,{to:"/recipes/".concat(e),children:[(0,z.jsx)(Vn,{children:(0,z.jsx)(Wn,{src:o})}),(0,z.jsxs)(Gn,{children:[(0,z.jsx)(Jn,{children:t}),(0,z.jsx)(Hn,{children:r})]})]})},Qn=_.Z.svg(ln||(ln=(0,C.Z)(["\n  width: 100%;\n  height: 300px;\n  fill: ",";\n  margin-bottom: 15px;\n\n  @media screen and (min-width: 1280px) {\n    width: 319px;\n    height: 319px;\n  }\n"])),(function(n){return n.theme.colors.accentColor})),$n=(0,_.Z)(Jn)(un||(un=(0,C.Z)(["\n  text-align: center;\n"]))),ne=function(){return(0,z.jsxs)("div",{children:[(0,z.jsx)(Qn,{children:(0,z.jsx)("use",{href:"".concat(S,"#cat")})}),(0,z.jsx)($n,{children:"No new popular recipes yet"})]})},ee=_.Z.ul(pn||(pn=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n  }\n\n  @media (min-width: 1280px) {\n    flex-direction: column;\n    gap: 24px;\n  }\n"]))),te=_.Z.li(mn||(mn=(0,C.Z)(["\n  @media (min-width: 768px) and (max-width: 1279px) {\n    &:nth-of-type(3),\n    &:nth-of-type(4) {\n      display: none;\n    }\n  }\n"]))),re=function(){var n=(0,i.v9)(w.Gn),e=(0,o.useMemo)((function(){return(0,V.Z)(n).sort(Xn).slice(0,4)}),[n]);return(0,z.jsx)(z.Fragment,{children:n.length>0?(0,z.jsx)(ee,{children:e.map((function(n){var e=n._id,t=n.title,r=n.description,o=n.thumb;return(0,z.jsx)(te,{children:(0,z.jsx)(Kn,{_id:e,title:t,description:Mn(r,70),thumb:o})},e)}))}):(0,z.jsx)(ne,{})})},oe=t(6346),ie=t(4957),ae=_.Z.div(hn||(hn=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n\n  @media (min-width: 1280px) {\n    width: 782px;\n    margin-right: 121px;\n  }\n"]))),se=function(){return(0,z.jsx)(ae,{children:(0,z.jsx)(ie.Z,{})})},ce=t(1048),de=_.Z.div(xn||(xn=(0,C.Z)(["\n  /* padding-top: 12px; */\n\n  @media (min-width: 768px) {\n    /* padding-top: 20px; */\n  }\n  @media (min-width: 1280px) {\n    /* padding-top: 55px; */\n  }\n"]))),le=_.Z.div(fn||(fn=(0,C.Z)(["\n  @media (min-width: 1280px) {\n    display: flex;\n  }\n"]))),ue=_.Z.div(gn||(gn=(0,C.Z)(["\n  padding-bottom: 100px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 200px;\n  }\n\n  @media (min-width: 1280px) {\n    padding-top: 100px;\n    margin-left: 121px;\n  }\n"]))),pe=_.Z.section(bn||(bn=(0,C.Z)(["\n  padding-bottom: 72px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 100px;\n  }\n  @media (min-width: 1280px) {\n    padding-bottom: 200px;\n  }\n"]))),me=_.Z.section(wn||(wn=(0,C.Z)([""]))),he=(0,_.Z)(Cn)(vn||(vn=(0,C.Z)(["\n  margin-bottom: 32px;\n"]))),xe=_.Z.section(jn||(jn=(0,C.Z)(["\n  display: none;\n  @media (min-width: 1280px) {\n    display: block;\n    padding-bottom: 100px;\n  }\n"]))),fe=(0,_.Z)(Cn)(Zn||(Zn=(0,C.Z)(["\n  margin-bottom: 40px;\n"]))),ge=function(){var n=(0,i.I0)(),e=(0,i.v9)(ce.P);(0,o.useEffect)((function(){n(s.x.getIngredientsList()),n(a.A.getCategoryList()),n(a.A.getPopularRecipes())}),[n]);var t=(0,i.v9)(W);return(0,z.jsxs)(c.t,{children:[(0,z.jsx)(de,{children:(0,z.jsx)(Rn.Z,{title:"Add recipe"})}),(0,z.jsxs)(le,{children:[(0,z.jsx)(pe,{children:t?(0,z.jsx)(On,{}):(0,z.jsx)(se,{})}),(0,z.jsxs)(ue,{children:[(0,z.jsxs)(xe,{children:[(0,z.jsx)(fe,{children:"Follow us"}),(0,z.jsx)(oe.Z,{wFacebook:26,hFacebook:26,wYoutube:28,hYoutube:22,wTwitter:25,hTwitter:22,wInstagram:24,hInstagram:24,hoverColor:"light"===e?"#1E1F28":"#fafafa",flex:"start",boxShadow:"0 0 5px rgba(217, 217, 217, 1)",outline:"none",borderRadius:"4px",iconColor:function(n){return n.theme.colors.accentColor}})]}),(0,z.jsxs)(me,{children:[(0,z.jsx)(he,{children:"Popular recipe"}),(0,z.jsx)(re,{})]})]})]})]})}}}]);
//# sourceMappingURL=461.b4b34393.chunk.js.map