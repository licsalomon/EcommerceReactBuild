(this["webpackJsonptp-final"]=this["webpackJsonptp-final"]||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(32),o=a.n(r),s=(a(59),a(60),a(24)),i=a(14),l=a(13),d=a(23),j=a(78),b=a(27),u=a(44),O=a(37),h=c.a.createContext({}),p=a(3),x={card:{width:"18rem",marginBottom:"10px"},button:{marginLeft:"5px"},link:{color:"#FFFFFF"}};var m=function(e){var t=e.data,a=(e.titulo,!1!==e.verDetalle),c=e.id,r=e.data,o=r.price,i=r.name,d=r.description,j=Object(n.useState)(""),m=Object(l.a)(j,2),g=(m[0],m[1]),f=function(){console.log("dasds"),t.stock-1==0?g("No hay stock"):g("Gracias por su compra")};return Object(p.jsx)(h.Consumer,{children:function(e){return Object(p.jsx)(u.a,{children:Object(p.jsxs)(b.a,{style:x.card,children:[Object(p.jsx)(b.a.Header,{as:"h4",children:i}),Object(p.jsxs)(b.a.Body,{children:[Object(p.jsxs)(b.a.Title,{children:["Description: ",d,"  "]}),Object(p.jsx)("br",{}),Object(p.jsxs)(b.a.Subtitle,{className:"mb-2 text-muted",children:["SKU:",c]}),Object(p.jsx)("br",{}),Object(p.jsxs)(b.a.Text,{children:["$",o]}),e.userLogin&&Object(p.jsx)(O.a,{variant:"primary",onClick:f,children:"Comprar"}),a&&Object(p.jsx)(O.a,{style:x.button,variant:"primary",children:Object(p.jsx)(s.b,{style:x.link,to:"/detalle/"+c,children:"Ver Detalle"})})]})]})})}})},g=a(25),f=a(21);d.a.initializeApp({apiKey:"AIzaSyBYAsWpKPhoVgX_7aKmNR2UsTKqUE3FgDo",authDomain:"tpreact-dabe6.firebaseapp.com",projectId:"tpreact-dabe6",storageBucket:"tpreact-dabe6.appspot.com",messagingSenderId:"18449897830",appId:"1:18449897830:web:b5035ba4c0d844d74090a7",measurementId:"G-72SR5HFNEF"}),d.a.analytics(),d.a.auth=d.a.auth(),d.a.db=d.a.firestore();var v=d.a;var y=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!0),s=Object(l.a)(o,2),i=s[0],b=s[1];return Object(n.useEffect)((function(){d.a.db.collection("productos").get().then((function(e){console.log(e.docs),r(e.docs),b(!1),console.log("productos",e.docs)}))}),[]),i?Object(p.jsx)("div",{children:"loading..."}):Object(p.jsx)(j.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),c.map((function(e){return Object(p.jsx)(m,{id:e.id,data:e.data()},e.id)}))]})})},S=a(33),C=a(49);var w=function(e){return Object(p.jsx)(C.a.Link,{as:s.b,to:e.path,children:e.label})};var I=function(e){return Object(p.jsxs)(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(p.jsx)(S.a.Brand,{href:"#home",children:"Ecommerce"}),Object(p.jsx)(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsxs)(S.a.Collapse,{id:"responsive-navbar-nav",children:[Object(p.jsxs)(C.a,{className:"mr-auto",children:[Object(p.jsx)(w,{path:"/",label:"Inicio"}),Object(p.jsx)(w,{path:"/login",label:"Login"}),Object(p.jsx)(w,{path:"/registro",label:"Registro"})]}),Object(p.jsx)(C.a,{})]})]})},E=a(15),L={h1:{marginTop:"1%",marginBotton:"1%"}};var k=function(){var e=Object(n.useState)({nombre:"",apellido:"",email:"",password:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(l.a)(r,2),s=o[0],i=o[1],d=Object(n.useState)({variant:"",text:""}),j=Object(l.a)(d,2),b=(j[0],j[1]),u=function(e){var t=e.target.name,n=e.target.value;console.log(t,n),c(Object(f.a)(Object(f.a)({},a),{},Object(g.a)({},t,n)))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:L.h1,children:" Registro "}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!0),console.log(a),v.auth.createUserWithEmailAndPassword(a.email,a.password).then((function(e){console.log("Registro",e.user.uid),v.db.collection("usuarios").add({nombre:a.nombre,apellido:a.apellido,email:a.email,userId:e.user.uid}).then((function(e){i(!1),b({variant:"success",text:"Registro Exitoso!"}),console.log(e)})).catch((function(e){i(!1),b({variant:"danger",text:"Ha ocurrido un error"}),console.log("Error add",e)}))})).catch((function(e){i(!1),b({variant:"danger",text:"Ha ocurrido un error"}),console.log("Error dasdsa",e)}))},children:[Object(p.jsxs)(E.a.Group,{controlId:"formGroupEmail",children:[Object(p.jsx)(E.a.Label,{children:"Nombre"}),Object(p.jsx)(E.a.Control,{name:"nombre",type:"text",placeholder:"Ingrese su nombre",value:a.nombre,onChange:u})]}),Object(p.jsxs)(E.a.Group,{controlId:"formGroupEmail",children:[Object(p.jsx)(E.a.Label,{children:"Apellido"}),Object(p.jsx)(E.a.Control,{name:"apellido",type:"text",placeholder:"Ingrese su apellido",value:a.apellido,onChange:u})]}),Object(p.jsxs)(E.a.Group,{controlId:"formGroupEmail",children:[Object(p.jsx)(E.a.Label,{children:"Email"}),Object(p.jsx)(E.a.Control,{name:"email",type:"email",placeholder:"Ingrese su email",value:a.email,onChange:u})]}),Object(p.jsxs)(E.a.Group,{controlId:"formGroupPassword",children:[Object(p.jsx)(E.a.Label,{children:"Contrase\xf1a"}),Object(p.jsx)(E.a.Control,{name:"password",type:"password",placeholder:"Ingrese su contrase\xf1a",value:a.password,onChange:u})]}),Object(p.jsx)(O.a,{variant:"primary",loading:s,type:"submit",children:"Registrarse"})]})]})};var F=function(){var e=Object(n.useContext)(h),t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),d=(s[0],s[1]),b=Object(i.e)(),u=function(e){var t=e.target.name,a=e.target.value;console.log(t,a),r(Object(f.a)(Object(f.a)({},c),{},Object(g.a)({},t,a)))};return Object(p.jsx)(j.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:" Login "}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d(!0),console.log(c),v.auth.signInWithEmailAndPassword(c.email,c.password).then((function(t){d(!1),console.log("Uid",t.user.uid),v.db.collection("usuarios").where("userId","==",t.user.uid).get().then((function(t){var a;e.loginUser(null===(a=t.docs[0])||void 0===a?void 0:a.data())})),console.log("Login Ok",t),b.push("/")})).catch((function(e){d(!1),console.log("Error",e),console.log("Error",e.code)}))},children:[Object(p.jsxs)(E.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(E.a.Label,{children:"Email address"}),Object(p.jsx)(E.a.Control,{id:"email",name:"email",type:"email",value:c.email,onChange:u})]}),Object(p.jsxs)(E.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(E.a.Label,{htmlFor:"password",children:"Password"}),Object(p.jsx)(E.a.Control,{id:"psd",name:"password",type:"password",value:c.password,onChange:u})]}),Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("br",{}),Object(p.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]})]})]})})};var G=function(e){var t=e.match.params.id,a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)(!0),i=Object(l.a)(s,2),d=i[0],j=i[1],b=Object(n.useState)(""),u=Object(l.a)(b,2);return u[0],u[1],Object(n.useEffect)((function(){v.db.doc("productos/"+t).get().then((function(e){console.log("Doc",e),o(e),j(!1)}))}),[]),d?Object(p.jsx)("div",{children:"loading..."}):Object(p.jsx)("div",{children:Object(p.jsx)(m,{id:r.id,data:r.data(),verDetalle:!1,extendida:!0})})},B={container:{backgroundColor:"#000025",color:"#ffffff",fontSize:"1vw",marginTop:"3%",padding:"0.5%"}};var D=function(e){return Object(p.jsx)(j.a,{fluid:!0,style:B.container,children:Object(p.jsx)("div",{children:Object(p.jsx)("h5",{children:" Development by Laura Salom\xf3n- 2021"})})})},T={container:{display:"flex",alingText:"center",backgroundColor:"#000025",color:"#ffffff",fontSize:"3vw",marginBotton:"3%",padding:"2%",textAlign:"center"}};var P=function(e){return Object(p.jsx)(j.a,{fluid:!0,style:T.container,children:Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Technology shop"})})})};var A=function(){return Object(p.jsxs)(s.a,{children:[Object(p.jsx)(P,{}),Object(p.jsx)(I,{}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(i.a,{path:"/",component:y,exact:!0}),Object(p.jsx)(i.a,{path:"/registro",component:k,exact:!0}),Object(p.jsx)(i.a,{path:"/login",component:F,exact:!0}),Object(p.jsx)(i.a,{path:"/detalle/:id",component:G,exact:!0})]}),Object(p.jsx)(D,{})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};a(72);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),R()}},[[73,1,2]]]);
//# sourceMappingURL=main.3cd47896.chunk.js.map