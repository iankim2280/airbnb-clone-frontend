(this["webpackJsonpairbnb-frontend"]=this["webpackJsonpairbnb-frontend"]||[]).push([[0],{102:function(e,a,n){e.exports=n(138)},115:function(e,a,n){},137:function(e,a,n){},138:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(10),c=n.n(l),i=n(32),o=n(27),m=n(79),s=n.n(m),u=(n(115),n(13)),d=n(4),p=n(5),g=n(14),f=n(15),E=n(16),b=n(17),h=n(167);function v(){var e=Object(d.a)(["\n  padding: 20px;\n  width: 320px;\n  height: 180px;\n  font-size: 2rem;\n  background-color: white;\n\n  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);\n  p:nth-child(3) {\n    font-size: 0.9rem;\n  }\n"]);return v=function(){return e},e}var y=p.a.section(v()),x=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(y,{class:"pd-15"},r.a.createElement(h.a,{href:"/profile",variant:"body2"},r.a.createElement("i",{class:"fa fa-code","aria-hidden":"true"}),r.a.createElement("p",{class:"title is-5"},"hello world"),r.a.createElement("p",null,"some infos")))}}]),n}(r.a.Component);function N(){var e=Object(d.a)(["\n  align-content: center;\n  justify-content: center;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n\n  @media only screen and (max-width: 1000px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n  }\n\n  @media only screen and (max-width: 750px) {\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(8, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n  }\n"]);return N=function(){return e},e}function w(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return w=function(){return e},e}function O(){var e=Object(d.a)(["\n  padding: 20px;\n  margin: 0 auto;\n  width: 80%;\n"]);return O=function(){return e},e}var j=p.a.section(O()),k=p.a.section(w()),C=p.a.section(N()),S=function(){return r.a.createElement(j,null,r.a.createElement(k,null,r.a.createElement(C,null,r.a.createElement(x,null))))},T=n(34);function I(){var e=Object(d.a)(["\n  width: 100%;\n  box-sizing: border-box;\n"]);return I=function(){return e},e}var L=p.a.div(I()),A=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){for(var e=[],a=1;a<4;a++)e.push({class:"card".concat(a)});return r.a.createElement(r.a.Fragment,null,e.map((function(e,a){return r.a.createElement(L,{key:a,className:e.class},r.a.createElement(h.a,{href:"/contents",style:{color:"black"},activeStyle:{color:"black"}},r.a.createElement("div",{className:"card-image shadowBox"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement(T.Img,{src:"https://picsum.photos/seed/picsum/600/400"}),r.a.createElement("div",{className:"text-block pd-10"},r.a.createElement("p",null,"Hello world"),r.a.createElement("p",null,"Unique activities we can do together, led by a world of hosts."))))))})))}}]),n}(r.a.Component);function B(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 50px;\n  grid-row-gap: 50px;\n  .card1 {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .card2 {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n  .card3 {\n    grid-area: 1 / 3 / 2 / 4;\n  }\n  @media only screen and (max-width: 1000px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 50px;\n    grid-row-gap: 50px;\n    .card1 {\n      grid-area: 1 / 1 / 2 / 2;\n    }\n    .card2 {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n    .card3 {\n      grid-area: 3 / 1 / 4 / 2;\n    }\n  }\n"]);return B=function(){return e},e}function z(){var e=Object(d.a)(["\n  width: 35%;\n  @media only screen and (max-width: 850px) {\n    width: 50%;\n  }\n  @media only screen and (max-width: 650px) {\n    width: 75%;\n  }\n  @media only screen and (max-width: 500px) {\n    width: 100%;\n  }\n"]);return z=function(){return e},e}function D(){var e=Object(d.a)(["\n  padding: 50px;\n"]);return D=function(){return e},e}var W=p.a.section(D()),U=p.a.h1(z()),_=p.a.section(B()),F=function(){return r.a.createElement("nav",{className:"mg-s20"},r.a.createElement("div",{className:"firstNav mg-t-10"},r.a.createElement("ul",{className:"firstNavUl mg-b-15"},r.a.createElement("li",null,"Place to stay"),r.a.createElement("li",null,"Experiences"),r.a.createElement("li",null,"Online Experiences"),r.a.createElement("li",{className:"blackBox"},"NEW"))),r.a.createElement(W,null,r.a.createElement(U,{className:"title is-1"},"We may be apart, but we\u2019ll get through this together.")),r.a.createElement(_,null,r.a.createElement(A,null)))},H=n(30),P=n(41),M=n.n(P),$=n(189),q=n(188),K=n(173),G=n(187),Y=n(174),V=n(48),X=n.n(V),J=n(139),R=n(171),Q=n(172),Z=Object(R.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),ee=function(){var e=Z(),a=Object(o.b)(),n=Object(u.g)(),l=Object(t.useState)(""),c=Object(H.a)(l,2),i=c[0],m=c[1],s=Object(t.useState)(""),d=Object(H.a)(s,2),p=d[0],g=d[1],f=function(e){var a=e.target,n=a.name,t=a.value;switch(n){case"email":m(t);break;case"password":g(t)}};return r.a.createElement(Q.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{className:e.avatar},r.a.createElement(X.a,null)),r.a.createElement(J.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){var t;e.preventDefault(),a((t={email:i,password:p},{type:"LOGIN",payload:M.a.post("http://localhost:5000/api/users/login",t,{withCredentials:!0}).then((function(e){return e.data}))})).then((function(e){console.log(e.payload),e.payload&&"ok"===e.payload.status&&(localStorage.setItem("TOKEN",e.payload.data.token),n.push("/"))}))}},r.a.createElement(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:i,onChange:f,autoComplete:"email",autoFocus:!0}),r.a.createElement(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:p,onChange:f,autoComplete:"current-password"}),r.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign In"),r.a.createElement(Y.a,{container:!0},r.a.createElement(Y.a,{item:!0},r.a.createElement(h.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))))))},ae=n(60),ne=n.n(ae),te=n(86),re=Object(R.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function le(){var e=re(),a=Object(t.useState)(""),n=Object(H.a)(a,2),l=n[0],c=n[1],i=Object(t.useState)(""),o=Object(H.a)(i,2),m=o[0],s=o[1],d=Object(t.useState)(""),p=Object(H.a)(d,2),g=p[0],f=p[1],E=Object(t.useState)(""),b=Object(H.a)(E,2),v=b[0],y=b[1],x=Object(u.g)(),N=function(e){var a=e.target,n=a.name,t=a.value;switch(n){case"firstName":c(t);break;case"lastName":s(t);break;case"email":f(t);break;case"password":y(t)}},w=function(){var e=Object(te.a)(ne.a.mark((function e(a){var n,t;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={firstName:l,lastName:m,email:g,password:v},e.prev=2,e.next=5,M.a.post("http://localhost:5000/api/users/signup",n,{withCredentials:!0}).then((function(e){return e.data}));case 5:t=e.sent,console.log(t),"ok"===t.status&&x.push("/login"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(Q.a,{component:"main",maxWidth:"xs"},r.a.createElement(K.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement($.a,{className:e.avatar},r.a.createElement(X.a,null)),r.a.createElement(J.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:w},r.a.createElement(Y.a,{container:!0,spacing:2},r.a.createElement(Y.a,{item:!0,xs:12,sm:6},r.a.createElement(G.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",value:l,onChange:N,autoFocus:!0})),r.a.createElement(Y.a,{item:!0,xs:12,sm:6},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",value:m,onChange:N,name:"lastName",autoComplete:"lname"})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:g,onChange:N,autoComplete:"email"})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:v,onChange:N,autoComplete:"current-password"}))),r.a.createElement(q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(Y.a,{container:!0,justify:"flex-end"},r.a.createElement(Y.a,{item:!0},r.a.createElement(h.a,{href:"/login",variant:"body2"},"Already have an account? Log in"))))))}var ce=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,[{name:"Cancellation flexibility"},{name:"Type of place"},{name:"Price"},{name:"Instant Book"},{name:"More filters"}].map((function(e,a){return r.a.createElement("button",{key:e.name+a,class:"button is-rounded"},e.name)})))}}]),n}(r.a.Component),ie=n(87),oe=n.n(ie);function me(){var e=Object(d.a)(["\n  margin-bottom: 0;\n  font-size: 0.7rem;\n"]);return me=function(){return e},e}function se(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  margin-bottom: 0;\n"]);return se=function(){return e},e}function ue(){var e=Object(d.a)(["\n  margin-bottom: 0;\n"]);return ue=function(){return e},e}function de(){var e=Object(d.a)(["\n  padding: 5px;\n"]);return de=function(){return e},e}function pe(){var e=Object(d.a)(["\n  width: 90%;\n"]);return pe=function(){return e},e}var ge=p.a.div(pe()),fe=p.a.div(de()),Ee=p.a.figure(ue()),be=p.a.ul(se()),he=p.a.p(me()),ve=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){for(var e=[],a=1;a<21;a++)e.push({class:"card card".concat(a),rating:Math.floor(6*Math.random())});return r.a.createElement(r.a.Fragment,null,e.map((function(e,a){return r.a.createElement(ge,{key:e.class,className:e.class},r.a.createElement(h.a,{href:"/details",style:{color:"black"},activeStyle:{color:"black"}},r.a.createElement("div",{class:"card-image"},r.a.createElement(Ee,{class:"image is-4by3"},r.a.createElement(T.Img,{className:"roundBorder",src:"https://picsum.photos/seed/picsum/600/400"}))),r.a.createElement(fe,{class:"card-content"},r.a.createElement("div",{class:"media"},r.a.createElement("div",{class:"media-content"},r.a.createElement(be,{class:"rating"},r.a.createElement("li",null,"Entire cottage\xb73 beds"),r.a.createElement("li",null,r.a.createElement(oe.a,{style:{color:"red",fontSize:"0.9rem"}}),e.rating)),r.a.createElement(he,{class:"subtitle is-6"},"Summer cottage on the shore"),r.a.createElement(he,{class:"subtitle is-6"},r.a.createElement("b",null,"$116 CAD"),"/night"),r.a.createElement(he,{class:"subtitle is-6"},"$580 CAD total"))))))})))}}]),n}(r.a.Component);function ye(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  .card1 {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .card2 {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n  .card3 {\n    grid-area: 1 / 3 / 2 / 4;\n  }\n  .card4 {\n    grid-area: 1 / 4 / 2 / 5;\n  }\n  .card5 {\n    grid-area: 1 / 5 / 2 / 6;\n  }\n  .card6 {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n  .card7 {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n  .card8 {\n    grid-area: 2 / 3 / 3 / 4;\n  }\n  .card9 {\n    grid-area: 2 / 4 / 3 / 5;\n  }\n  .card10 {\n    grid-area: 2 / 5 / 3 / 6;\n  }\n  .card11 {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n  .card12 {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n  .card13 {\n    grid-area: 3 / 3 / 4 / 4;\n  }\n  .card14 {\n    grid-area: 3 / 4 / 4 / 5;\n  }\n  .card15 {\n    grid-area: 3 / 5 / 4 / 6;\n  }\n  .card16 {\n    grid-area: 4 / 1 / 5 / 2;\n  }\n  .card17 {\n    grid-area: 4 / 2 / 5 / 3;\n  }\n  .card18 {\n    grid-area: 4 / 3 / 5 / 4;\n  }\n  .card19 {\n    grid-area: 4 / 4 / 5 / 5;\n  }\n  .card20 {\n    grid-area: 4 / 5 / 5 / 6;\n  }\n\n  @media only screen and (max-width: 1000px) {\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    .card1 {\n      grid-area: 1 / 1 / 2 / 2;\n    }\n    .card2 {\n      grid-area: 1 / 2 / 2 / 3;\n    }\n    .card3 {\n      grid-area: 1 / 3 / 2 / 4;\n    }\n    .card4 {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n    .card5 {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n    .card6 {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n    .card7 {\n      grid-area: 3 / 1 / 4 / 2;\n    }\n    .card8 {\n      grid-area: 3 / 2 / 4 / 3;\n    }\n    .card9 {\n      grid-area: 3 / 3 / 4 / 4;\n    }\n    .card10 {\n      grid-area: 4 / 1 / 5 / 2;\n    }\n    .card11 {\n      grid-area: 4 / 2 / 5 / 3;\n    }\n    .card12 {\n      grid-area: 4 / 3 / 5 / 4;\n    }\n    .card13 {\n      grid-area: 5 / 1 / 6 / 2;\n    }\n    .card14 {\n      grid-area: 5 / 2 / 6 / 3;\n    }\n    .card15 {\n      grid-area: 5 / 3 / 6 / 4;\n    }\n    .card16 {\n      grid-area: 6 / 1 / 7 / 2;\n    }\n    .card17 {\n      grid-area: 6 / 2 / 7 / 3;\n    }\n    .card18 {\n      grid-area: 6 / 3 / 7 / 4;\n    }\n    .card19,\n    .card20 {\n      display: none;\n    }\n  }\n\n  @media only screen and (max-width: 550px) {\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(10, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    .card {\n      margin-bottom: 16px;\n    }\n    .card1 {\n      grid-area: 1 / 1 / 2 / 2;\n    }\n    .card2 {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n    .card3 {\n      grid-area: 3 / 1 / 4 / 2;\n    }\n    .card4 {\n      grid-area: 4 / 1 / 5 / 2;\n    }\n    .card5 {\n      grid-area: 5 / 1 / 6 / 2;\n    }\n    .card6 {\n      grid-area: 6 / 1 / 7 / 2;\n    }\n    .card7 {\n      grid-area: 7 / 1 / 8 / 2;\n    }\n    .card8 {\n      grid-area: 8 / 1 / 9 / 2;\n    }\n    .card9 {\n      grid-area: 9 / 1 / 10 / 2;\n    }\n    .card10 {\n      grid-area: 10 / 1 / 11 / 2;\n    }\n    .card11,\n    .card12,\n    .card13,\n    .card14,\n    .card15,\n    .card16,\n    .card17,\n    .card18,\n    .card19,\n    .card20 {\n      display: none;\n    }\n  }\n"]);return ye=function(){return e},e}function xe(){var e=Object(d.a)(["\n  width: 90%;\n  font-size: 0.8rem;\n  margin: 15px 0;\n"]);return xe=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  font-weight: normal;\n"]);return Ne=function(){return e},e}function we(){var e=Object(d.a)(["\n  padding-top: 50px;\n  margin: 0 auto;\n  width: 80%;\n"]);return we=function(){return e},e}var Oe=p.a.section(we()),je=p.a.p(Ne()),ke=p.a.p(xe()),Ce=p.a.section(ye()),Se=function(){return r.a.createElement(Oe,null,r.a.createElement(je,{class:"title is-6 stays"},"225 stays"),r.a.createElement("p",{class:"title"},"Stays in Barrie"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(ce,null))),r.a.createElement(ke,{class:"mg-tb-15"},r.a.createElement("b",null,"Check travel restrictions before booking.")," The health and safety of our communities come first. TravelInfolease follow government guidelines and travel only if it's essential.",r.a.createElement(h.a,{href:"",class:"anchorButton"},"Learn more")),r.a.createElement(Ce,null,r.a.createElement(ve,null)))},Te=n(179),Ie=n(180),Le=n(181),Ae=n(182);function Be(){var e=Object(d.a)(["\n  margin-bottom: 0;\n"]);return Be=function(){return e},e}function ze(){var e=Object(d.a)(["\n  box-sizing: border-box;\n"]);return ze=function(){return e},e}function De(){var e=Object(d.a)(["\n  width: 100%;\n  box-sizing: border-box;\n"]);return De=function(){return e},e}var We=p.a.div(De()),Ue=p.a.div(ze()),_e=p.a.figure(Be()),Fe=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){for(var e=[],a=1;a<6;a++)e.push({class:"card div".concat(a," noBorder")});return r.a.createElement(r.a.Fragment,null,e.map((function(e,a){return r.a.createElement(We,{className:e.class},r.a.createElement(Ue,{className:"card-image"},r.a.createElement(_e,{className:"image"},r.a.createElement(T.Img,{src:"https://picsum.photos/seed/picsum/600/400"}))))})))}}]),n}(r.a.Component),He=n(175),Pe=n(176),Me=n(177),$e=n(178);function qe(){var e=Object(d.a)(["\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-bottom: 0;\n  }\n"]);return qe=function(){return e},e}function Ke(){var e=Object(d.a)(["\n  width: 90%;\n  margin: 0 auto;\n  .columns {\n    padding: 5px;\n    border-bottom: 0.1px solid lightgrey;\n\n    display: flex;\n    justify-content: space-between;\n    font-size: 0.8rem;\n    .column:first-child {\n      display: flex;\n      justify-content: flex-start;\n      flex-direction: column;\n      p {\n        margin-bottom: 8px;\n      }\n    }\n    .column:last-child {\n      display: flex;\n      align-items: flex-end;\n      flex-direction: column;\n      p {\n        margin-bottom: 8px;\n      }\n    }\n  }\n"]);return Ke=function(){return e},e}function Ge(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  p {\n    margin-bottom: 0;\n    padding: 4px;\n    font-size: 0.7rem;\n  }\n"]);return Ge=function(){return e},e}function Ye(){var e=Object(d.a)(["\n  border: 0.1px solid lightgrey;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  .div1 {\n    border-right: 0.1px solid lightgrey;\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .div2 {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n  .div3 {\n    border-top: 0.1px solid lightgrey;\n    grid-area: 2 / 1 / 3 / 3;\n  }\n"]);return Ye=function(){return e},e}function Ve(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  width: 50%;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(d.a)(["\n  padding-top: 15px;\n  display: flex;\n  justify-content: space-around;\n"]);return Xe=function(){return e},e}function Je(){var e=Object(d.a)(["\n  width: 80%;\n  margin: 0 auto;\n  position: sticky;\n  top: 100px;\n  border: 0.1px solid lightgrey;\n  border-radius: 10px;\n  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);\n"]);return Je=function(){return e},e}function Re(){var e=Object(d.a)([""]);return Re=function(){return e},e}function Qe(){var e=Object(d.a)([""]);return Qe=function(){return e},e}function Ze(){var e=Object(d.a)(["\n  font-size: 0.8rem;\n"]);return Ze=function(){return e},e}function ea(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ea=function(){return e},e}function aa(){var e=Object(d.a)([""]);return aa=function(){return e},e}function na(){var e=Object(d.a)(["\n  width: 35%;\n  @media only screen and (max-width: 850px) {\n    display: none;\n  }\n"]);return na=function(){return e},e}function ta(){var e=Object(d.a)(["\n  width: 65%;\n  @media only screen and (max-width: 850px) {\n    width: 65%;\n  }\n"]);return ta=function(){return e},e}function ra(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return ra=function(){return e},e}function la(){var e=Object(d.a)(["\n  padding-top: 50px;\n  border-top: 0.1px solid lightgrey;\n"]);return la=function(){return e},e}var ca=p.a.section(la()),ia=p.a.ul(ra()),oa=p.a.li(ta()),ma=p.a.li(na()),sa=p.a.div(aa()),ua=p.a.ul(ea()),da=p.a.li(Ze()),pa=p.a.div(Qe()),ga=p.a.div(Re()),fa=p.a.div(Je()),Ea=p.a.ul(Xe()),ba=p.a.li(Ve()),ha=p.a.div(Ye()),va=p.a.div(Ge()),ya=p.a.div(Ke()),xa=p.a.div(qe()),Na=function(){return r.a.createElement(ca,{className:""},r.a.createElement(ia,{className:"bookingList"},r.a.createElement(oa,{className:"bookingTabFirstList"},r.a.createElement(sa,null,r.a.createElement(pa,{className:"pd-b-20 border-b-lg"},r.a.createElement(ga,null,r.a.createElement("p",{className:"title is-4"},"Entire apartment hosted by The Lake At Blue Mountains"),r.a.createElement("p",null,"4 guests \xb7 1 bedroom \xb7 1 bed \xb7 1 bath"))),r.a.createElement(sa,{className:"homeInfo pd-t-25 pd-b-20 border-b-lg"},r.a.createElement("ul",{className:"homeInfoList"},r.a.createElement("li",{className:"homeInfoListItems"},r.a.createElement(He.a,null),r.a.createElement(ua,null,r.a.createElement(da,null,r.a.createElement("b",null,"Entire home")),r.a.createElement(da,null,r.a.createElement("p",null,"You\u2019ll have the apartment to yourself.")))),r.a.createElement("li",{className:"homeInfoListItems"},r.a.createElement(Pe.a,null),r.a.createElement(ua,null,r.a.createElement(da,null,r.a.createElement("b",null,"Self check-in")),r.a.createElement(da,null,r.a.createElement("p",null,"You can check in with the doorman.")))),r.a.createElement("li",{className:"homeInfoListItems"},r.a.createElement(Me.a,null),r.a.createElement(ua,null,r.a.createElement(da,null,r.a.createElement("b",null,"Clean and tidy")),r.a.createElement(da,null,r.a.createElement("p",null,"13 recent guests said this place was sparkling clean.")))),r.a.createElement("li",{className:"homeInfoListItems"},r.a.createElement($e.a,null),r.a.createElement(ua,null,r.a.createElement(da,null,r.a.createElement("b",null,"Cancellation policy")),r.a.createElement(da,null,r.a.createElement("p",null,"Cancel before 4:00 PM on Jun. 17 and get a 50% refund, minus the service fee.")))))),r.a.createElement("div",{className:"contactHost pd-t-25 pd-b-20 border-b-lg"},r.a.createElement("div",null,r.a.createElement("p",null,"Experience The Comforts of Home While You're Away & we are pet friendly!"),r.a.createElement("p",null,"All rental check-ins are \u201cnon contact/digital\u201d and every suite has it\u2019s own heating and cooling system (no shared air)! All\u2026",r.a.createElement("b",null,"read more")),r.a.createElement("p",null,r.a.createElement("b",null,"Contact host")))),r.a.createElement("div",{className:"arrangements pd-t-25 pd-b-20 border-b-lg"},r.a.createElement("p",{className:"title is-4"},"Sleeping arrangements"),r.a.createElement("ul",{className:"arrangementsContents"},r.a.createElement("li",null,r.a.createElement("div",{className:"shadowBox"},r.a.createElement("i",{className:"fa fa-bed","aria-hidden":"true"}),r.a.createElement("p",{className:"title is-6"},"Bedroom 1"),r.a.createElement("p",null,"1 queen bed"))),r.a.createElement("li",null,r.a.createElement("div",{className:"shadowBox"},r.a.createElement("i",{className:"fa fa-bed","aria-hidden":"true"}),r.a.createElement("p",{className:"title is-6"},"Common spaces"),r.a.createElement("p",null,"1 sofa bed"))))),r.a.createElement("div",{className:"amenities pd-t-25 pd-b-20 border-b-lg"},r.a.createElement("p",{className:"title is-4"},"Amenities"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-wifi","aria-hidden":"true"})," Wifi"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fas fa-parking"})," Free parking on premises"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-cube","aria-hidden":"true"})," Iron"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-laptop","aria-hidden":"true"}),"Laptop-friendly workspace"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-thermometer-empty","aria-hidden":"true"}),"Heating")),r.a.createElement("div",{className:"column"},r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-cutlery","aria-hidden":"true"})," Kitchen"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-battery-full","aria-hidden":"true"}),"Cable TV"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-shower","aria-hidden":"true"})," Hair dryer"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fas fa-tv"})," Tv"),r.a.createElement("p",{className:"mg-tb-10"},r.a.createElement("i",{className:"fa fa-object-group","aria-hidden":"true"}),"Indoor fireplace"))),r.a.createElement("button",{className:"button"},"Explore All")))),r.a.createElement(ma,null,r.a.createElement(fa,{className:" shadowBox"},r.a.createElement(Ea,{className:"pd-t-15"},r.a.createElement(ba,null,r.a.createElement("p",{className:"is-5"},r.a.createElement("b",{className:"title is-5"},"$129"),"/night")),r.a.createElement(ba,null,r.a.createElement(Te.a,null),"4.93(121)")),r.a.createElement(ha,{className:"bookingGrid shadowBox mg-15"},r.a.createElement(va,{className:"div1"},r.a.createElement("p",null,"CHECK-IN"),r.a.createElement("p",null,"2020-06-24")),r.a.createElement(va,{className:"div2"},r.a.createElement("p",null,"CHECKOUT"),r.a.createElement("p",null,"2020-06-26")),r.a.createElement(va,{className:"div3"},r.a.createElement("p",null,"GUESTS"),r.a.createElement("p",null,"1 guest"))),r.a.createElement(ya,{className:"bookingPrice"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"$129 X 2 nights"),r.a.createElement("p",null,"Cleaning fee"),r.a.createElement("p",null,"Service fee")),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,"$258"),r.a.createElement("p",null,"$79"),r.a.createElement("p",null,"$48")))),r.a.createElement(xa,{className:"total"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("p",null,r.a.createElement("b",null,"Total"))),r.a.createElement("div",{className:"column"},r.a.createElement("p",null,r.a.createElement("b",null,"$385")))),r.a.createElement("button",{className:"button is-danger"},"Reserve"),r.a.createElement("p",null,"You won't be charged yet"))))))};function wa(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  .div1 {\n    grid-area: 1 / 1 / 3 / 3;\n  }\n  .div2 {\n    grid-area: 1 / 3 / 2 / 4;\n  }\n  .div3 {\n    grid-area: 1 / 4 / 2 / 4;\n  }\n  .div4 {\n    grid-area: 2 / 3 / 3 /4;\n  }\n  .div5 {\n    grid-area: 2 / 4 / 4 / 4;\n  }\n  @media only screen and (max-width: 850px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n\n    .div1 {\n      grid-area: 1 / 1 / 3 / 3;\n      .card-image .image img {\n        width: 100%;\n      }\n    }\n    .div2,\n    .div3,\n    .div4,\n    .div5 {\n      display: none;\n    }\n  }\n"]);return wa=function(){return e},e}function Oa(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 15%;\n"]);return Oa=function(){return e},e}function ja(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 40%;\n"]);return ja=function(){return e},e}function ka(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n"]);return ka=function(){return e},e}function Ca(){var e=Object(d.a)([""]);return Ca=function(){return e},e}function Sa(){var e=Object(d.a)(["\n  padding-top: 50px;\n  margin: 0 auto;\n  width: 80%;\n"]);return Sa=function(){return e},e}var Ta=p.a.section(Sa()),Ia=p.a.nav(Ca()),La=p.a.ul(ka()),Aa=p.a.li(ja()),Ba=p.a.li(Oa()),za=p.a.section(wa()),Da=function(){return r.a.createElement(Ta,null,r.a.createElement(Ia,{className:"pageDetailNav mg-t-50"},r.a.createElement("p",{class:"title is-1"},"Full Studio Suite #3 - The Lake at Blue Mountains"),r.a.createElement(La,null,r.a.createElement(Aa,null,r.a.createElement("span",null,r.a.createElement(Te.a,{style:{color:"red",fontSize:"0.9rem"}}),"4.83(24)"),r.a.createElement("span",null,r.a.createElement(Ie.a,{style:{color:"red",fontSize:"0.9rem"}}),"Superhost"),r.a.createElement("span",null,"The Blue Mountains, Ontario, Canada")),r.a.createElement(Ba,null,r.a.createElement("span",null,r.a.createElement(Le.a,null),"Share"),r.a.createElement("span",null,r.a.createElement(Ae.a,null),"Save"))),r.a.createElement(za,{className:"cardCarousel mg-tb-15"},r.a.createElement(Fe,null))),r.a.createElement(Na,null))},Wa=(n(137),n(88)),Ua=n.n(Wa),_a=function(e){var a=e.isAuthenticated,n=Object(u.g)(),t=Object(o.b)();return r.a.createElement("header",{className:"contentsHeader fixedBefore"},r.a.createElement("div",{className:"logo"},r.a.createElement(h.a,{href:"/"},r.a.createElement("img",{className:"logoImage",src:Ua.a,alt:"Title and Logo"}))),r.a.createElement("div",{className:"middle"},r.a.createElement("ul",{className:"middleUl pd-10"},r.a.createElement("li",null,r.a.createElement("div",null,"LOCATION")),r.a.createElement("li",{className:"borderPadding"},r.a.createElement("div",null,"CHECK-IN / CHECKOUT")),r.a.createElement("li",{className:"borderPadding"},r.a.createElement("div",null,"GUESTS")),r.a.createElement("li",{className:"borderPadding"},r.a.createElement("i",{className:"fa fa-search"})))),r.a.createElement("div",{className:"menu mg-t-20"},a?r.a.createElement("button",{className:"button is-rounded",onClick:function(){t({type:"LOGOUT",payload:M.a.get("http://localhost:5000/api/users/logout",{withCredentials:!0}).then((function(e){return e.data}))}).then((function(e){"ok"===e.status&&(localStorage.setItem("TOKEN",void 0),n.push("/"))}))}},"Log out"):r.a.createElement("button",{className:"button is-rounded"},r.a.createElement(h.a,{href:"/login",variant:"body2"},"Log in"))))},Fa=n(183),Ha=n(184),Pa=n(185),Ma=n(186);function $a(){var e=Object(d.a)(["\n  margin: 8px 0;\n  list-style: none;\n  width: 20%;\n  display: flex;\n  justify-content: space-between;\n"]);return $a=function(){return e},e}function qa(){var e=Object(d.a)(["\n  margin: 8px 0;\n  list-style: none;\n  width: 40%;\n  display: flex;\n  // flex-direction: row;\n  justify-content: space-between;\n"]);return qa=function(){return e},e}function Ka(){var e=Object(d.a)(["\n  padding: 0 20px;\n  background-color: rgb(247, 247, 247);\n  display: flex;\n  justify-content: space-between;\n"]);return Ka=function(){return e},e}function Ga(){var e=Object(d.a)(["\n  width: 100%;\n"]);return Ga=function(){return e},e}var Ya=p.a.footer(Ga()),Va=p.a.section(Ka()),Xa=p.a.ul(qa()),Ja=p.a.ul($a()),Ra=function(){return r.a.createElement(Ya,null,r.a.createElement(Va,null,r.a.createElement(Xa,null,r.a.createElement("li",null,"\xa9 2020 Iankim. All rights reserved"),r.a.createElement("li",null,"Privacy"),r.a.createElement("li",null,"Terms"),r.a.createElement("li",null,"Sitemap")),r.a.createElement(Ja,null,r.a.createElement("li",null,r.a.createElement(Fa.a,null,"English(CA)")),r.a.createElement("li",null,"$ CAD"),r.a.createElement("li",null,r.a.createElement(Ha.a,null)),r.a.createElement("li",null,r.a.createElement(Pa.a,null)),r.a.createElement("li",null,r.a.createElement(Ma.a,null)))))},Qa=n(89);function Za(){var e=Object(d.a)(["\n  margin: 0 auto;\n  text-align: center;\n"]);return Za=function(){return e},e}var en=p.a.div(Za()),an=function(e){Object(Qa.a)(e);return r.a.createElement(en,null,r.a.createElement("p",{className:"pTitle mg-tb-10"},"More"),[{name:"Ottawa"},{name:"London"},{name:"Tokyo"},{name:"Seoul"},{name:"Los Angeles"},{name:"Ottawa"},{name:"Barrie"},{name:"Toronto"},{name:"New York"}].map((function(e,a){return r.a.createElement("p",{className:"mg-tb-10",key:a},e.name)})))},nn=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){return Object(g.a)(this,n),a.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){for(var e=[],a=1;a<5;a++)e.push({class:"column column".concat(a)});return r.a.createElement(r.a.Fragment,null,e.map((function(e,a){return r.a.createElement("div",{key:a,className:e.class},r.a.createElement(an,null))})))}}]),n}(r.a.Component);function tn(){var e=Object(d.a)(["\n  width: 90%;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  .column1 {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n  .column2 {\n    grid-area: 1 / 2 / 2 / 3;\n  }\n  .column3 {\n    grid-area: 1 / 3 / 2 / 4;\n  }\n  .column4 {\n    grid-area: 1 / 4 / 2 / 5;\n  }\n\n  @media only screen and (max-width: 850px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    .column1 {\n      grid-area: 1 / 1 / 2 / 2;\n    }\n    .column2 {\n      grid-area: 1 / 2 / 2 / 3;\n    }\n    .column3 {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n    .column4 {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n  }\n  @media only screen and (max-width: 450px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 1fr);\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    .column1 {\n      grid-area: 1 / 1 / 2 / 2;\n    }\n    .column2 {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n    .column3 {\n      grid-area: 3 / 1 / 4 / 2;\n    }\n    .column4 {\n      grid-area: 4 / 1 / 5 / 2;\n    }\n  }\n"]);return tn=function(){return e},e}function rn(){var e=Object(d.a)(["\n  margin-bottom: 0;\n"]);return rn=function(){return e},e}function ln(){var e=Object(d.a)(["\n  margin-top: 50px;\n  background-color: rgb(247, 247, 247);\n  padding: 20px;\n"]);return ln=function(){return e},e}var cn=[{name:"Ottawa"},{name:"London"},{name:"Tokyo"},{name:"Seoul"},{name:"Los Angeles"},{name:"Ottawa"},{name:"Barrie"},{name:"Toronto"},{name:"New York"}],on=p.a.section(ln()),mn=p.a.p(rn()),sn=p.a.div(tn()),un=function(e){Object(b.a)(n,e);var a=Object(E.a)(n);function n(){var e;Object(g.a)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={contents:[]},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.setState({contents:cn})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(on,null,r.a.createElement(mn,{className:"title is-4"},"Destinations for future trippers."," "),r.a.createElement(sn,{className:"columns"},r.a.createElement(nn,null))))}}]),n}(r.a.Component);var dn=function(){var e=localStorage.getItem("TOKEN"),a=Object(o.c)((function(e){return e.user})).isAuth;return e||(e=a),Object(t.useEffect)((function(){}),[e]),r.a.createElement("div",{className:"container1"},r.a.createElement(_a,{isAuthenticated:e}),e?r.a.createElement(u.d,null):r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:F}),r.a.createElement(u.b,{exact:!0,path:"/profile",component:null}),r.a.createElement(u.b,{path:"/login",component:ee}),r.a.createElement(u.b,{path:"/signup",component:le}),r.a.createElement(u.b,{path:"/account",component:S}),r.a.createElement(u.b,{path:"/contents",component:Se}),r.a.createElement(u.b,{path:"/details",component:Da}),r.a.createElement(u.a,{from:"*",to:"/"})),r.a.createElement(un,null),r.a.createElement(Ra,null))},pn=n(33),gn={isAuth:!1},fn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gn,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return{isAuth:"ok"===a.payload.status,loginStatus:a.payload};case"LOGOUT":return{isAuth:!1};default:return e}},En=Object(i.c)({user:fn}),bn=Object(i.a)(s.a)(i.d)(En,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(o.a,{store:bn},r.a.createElement(pn.a,null,r.a.createElement(dn,null))),document.getElementById("root"))},88:function(e,a,n){e.exports=n.p+"static/media/logo.a6f1ed9f.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.f7a5e198.chunk.js.map