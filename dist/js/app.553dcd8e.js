(function(t){function e(e){for(var a,n,i=e[0],l=e[1],u=e[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},s={app:0},o=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[r("h1",{staticClass:"logo"},[t._v("AddcarApp El Foro")])]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[r("div",{staticClass:"navbar-nav"},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"data-ancla":"true",to:"/"}},[t._v("Inicio ")])],1),null!==t.store.auth.id?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"data-ancla":"true",to:"/perfil"}},[t._v("Perfil ")])],1):t._e(),null===t.store.auth.id?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Iniciar Sesión ")])],1):t._e(),null===t.store.auth.id?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/registro"}},[t._v("Registrarme ")])],1):r("li",{staticClass:"nav-item"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:t.logout}},[t._v(t._s(t.store.auth.email)+" (Cerrar Sesión) ")])])])])])],1)]),null!=t.store.status.mensaje?r("BaseNotificacion",{attrs:{titulo:t.store.status.titulo,mensaje:t.store.status.mensaje,tipo:t.store.status.tipo},on:{close:function(e){return t.closeNotification()}}}):t._e(),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],n=r("5530"),i={debug:!1,status:{mensaje:null,titulo:null,tipo:null},auth:{id:null,email:null,usuario:null,imagen:null},setStatus:function(t){this.debug&&console.log("Store :: setStatus invocado con: ",t),this.status=Object(n["a"])(Object(n["a"])({},this.status),t)},clearStatus:function(){this.debug&&console.log("Store :: clearStatus invocado"),this.status={mensaje:null,titulo:null,tipo:null}}},l=i,u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-dismissible",class:["alert-"+t.tipo]},[null!=t.titulo?r("h3",{staticClass:"alert-heading"},[t._v(" "+t._s(t.titulo)+" ")]):t._e(),t._v(" "+t._s(t.mensaje)+" "),t.closable?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Cerrar"},on:{click:function(e){return t.$emit("close")}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]):t._e()])},c=[],d={name:"BaseNotificacion",components:{},props:{mensaje:{type:String,required:!0},tipo:{type:String,default:"primary"},closable:{type:Boolean,default:!0},titulo:String},data:function(){return{}},computed:{},methods:{}},m=d,p=r("2877"),f=Object(p["a"])(m,u,c,!1,null,null,null),v=f.exports,h=(r("d3b7"),"http://localhost/Parcial-02_Progra-III-CW_2020/mvc/public/api"),g="http://localhost/Parcial-02_Progra-III-CW_2020/mvc/public/imgs",b={id:null,email:null,usuario:null,imagen:null},C={login:function(t){return fetch("".concat(h,"/login"),{method:"POST",body:JSON.stringify(t),credentials:"include"}).then((function(t){return t.json()})).then((function(t){if(console.log(t),!t.success)return!1;var e=t.data.usuario;return b=Object(n["a"])({},e),Object(n["a"])({},b)}))},logout:function(){return fetch("".concat(h,"/logout"),{method:"POST",credentials:"include"}).then((function(t){return t.json()})).then((function(t){return b={id:null,email:null,usuario:null,imagen:null},t}))},logUser:function(t){b=Object(n["a"])({},t)},isLogged:function(){return null!==b.id}},_=C,y={name:"App",components:{BaseNotificacion:v},data:function(){return{store:l}},mounted:function(){null!==localStorage.getItem("user")&&(this.store.auth=JSON.parse(localStorage.getItem("user")),_.logUser(this.store.auth))},methods:{closeNotification:function(){this.store.clearStatus()},logout:function(){var t=this;_.logout().then((function(e){t.store.auth={id:null,email:null,usuario:null,imagen:null},t.estaCargando=!1,localStorage.removeItem("user"),t.store.clearStatus(),t.$router.push("/login")}))}}},w=y,j=Object(p["a"])(w,s,o,!1,null,null,null),P=j.exports,x=(r("45fc"),r("8c4f")),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"home"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md col-lg posteos"},[r("h2",[t._v("Posteos Frecuentes")]),null!==t.store.auth.id?r("div",{staticClass:"nuevoPost"},[r("router-link",{attrs:{to:"/PosteoNuevo"}},[t._v(" Crear nuevo tema ")])],1):t._e(),t.estaCargando?r("SpinnerLoader"):r("ListadoPosteos",{attrs:{posteos:t.posteosOrdenados},on:{delete:function(e){return t.refrescarPosteos()}}})],1)])])])},O=[],k=(r("fb6a"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row px-2"},t._l(t.posteos,(function(t){return r("PosteosMiniatura",{key:t.id_posteo,attrs:{posteo:t}})})),1)}),S=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-lg-6 col-xl-3 px-1"},[r("div",{staticClass:"posteo"},[r("h3",[r("router-link",{attrs:{to:"/posteos/"+t.posteo.id_posteo}},[t._v(t._s(t.posteo.titulo)+" ")])],1),r("p",[t._v("creado por: "),r("br"),t._v(" "),r("i",[t._v(t._s(t.posteo.email))])]),r("hr"),r("ul",[r("li",[r("span",{staticClass:"badge badge-pill badge-primary"},[t._v(t._s(t.posteo.fecha))])]),null!==t.store.auth.id?r("li",[r("router-link",{staticClass:"fav",attrs:{to:""}})],1):t._e()])])])},$=[],I=(r("99af"),r("2909")),L=(r("96cf"),r("1da1")),A=null,U={getAll:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h,"/posteos"),{});case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,A=r.data,t.abrupt("return",Object(I["a"])(A));case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getByPk:function(t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/posteos/").concat(t),{credentials:"include"});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",Object(n["a"])({},a.data));case 7:case"end":return e.stop()}}),e)})))()},create:function(t){return fetch("".concat(h,"/posteos"),{method:"POST",body:JSON.stringify(t),credentials:"include"}).then((function(t){return t.json()})).then((function(t){return t}))},edit:function(t,e){return fetch("".concat(h,"/posteos.php?id=").concat(t),{method:"PUT",body:JSON.stringify(e),credentials:"include"}).then((function(t){return t.json()})).then((function(t){return t}))},deleteItem:function(t){return fetch("".concat(h,"/posteos/").concat(t),{method:"DELETE",credentials:"include"}).then((function(t){return t.json()})).then((function(t){return t.success}))}},B=U,G={name:"PosteosMiniatura",props:["posteo"],data:function(){return{store:l}},methods:{eliminar:function(t){var e=this;B.deleteItem(t).then((function(t){t?(e.store.setStatus({titulo:"Éxito",mensaje:"El producto se eliminó exitosamente.",tipo:"success"}),e.$emit("delete")):e.store.setStatus({titulo:"Error",mensaje:"Ocurrió un error. El posteo NO se pudo eliminar.",tipo:"danger"})}))}}},T=G,q=Object(p["a"])(T,N,$,!1,null,"a8eeba5c",null),R=q.exports,D={name:"ListadoPosteos",components:{PosteosMiniatura:R},props:{posteos:{type:Array,required:!0}}},J=D,M=Object(p["a"])(J,k,S,!1,null,"766f3e9c",null),F=M.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid",attrs:{id:"loader"}},[r("div",{attrs:{id:"circularG"}},[r("div",{staticClass:"circularG",attrs:{id:"circularG_1"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_2"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_3"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_4"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_5"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_6"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_7"}}),r("div",{staticClass:"circularG",attrs:{id:"circularG_8"}})])])}],W={name:"SpinnerLoader"},z=W,K=(r("6e6b"),Object(p["a"])(z,V,H,!1,null,"2e19098f",null)),Q=K.exports,X={name:"Home",components:{SpinnerLoader:Q,ListadoPosteos:F},data:function(){return{store:l,estaCargando:!0,posteos:[]}},computed:{posteosOrdenados:function(){var t=this.posteos.slice();return t.reverse(),t}},methods:{refrescarPosteos:function(){var t=this;this.estaCargando=!0,B.getAll().then((function(e){t.estaCargando=!1,t.posteos=e,console.log(e)}))}},mounted:function(){var t=this;this.estaCargando=!0,B.getAll().then((function(e){t.estaCargando=!1,t.posteos=e}))}},Y=X,Z=Object(p["a"])(Y,E,O,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"perfil"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[null===t.store.auth.usuario?r("h2",{staticClass:"m-0"},[t._v(t._s(t.store.auth.email))]):r("h2",{staticClass:"m-0"},[t._v(t._s(t.store.auth.usuario))]),r("p",[t._v("Detalles del Perfil")])]),t.editarUser?r("PerfilDatos",{on:{click:function(e){return t.editarUsuario()}}}):r("PerfilEditar",{on:{click:function(e){return t.editarUsuario()}}}),r("div",{staticClass:"col-12 col-md col-lg-4 posteos"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-12 px-1"},[r("div",{staticClass:"posteo"},[r("h3",[t._v("Próximamente")]),r("p",[t._v("Podrás ver tus posteos aquí! 😀... ")]),r("hr"),r("ul",[t._m(1),r("li",[r("router-link",{staticClass:"fav",attrs:{to:""}})],1)])])])])])],1)])])},rt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12"},[r("h2",[t._v("¡Atenti!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("span",{staticClass:"badge badge-pill badge-primary"},[t._v("Acá iría la fecha")])])}],at={create:function(t){return fetch("".concat(h,"/registrarUsuario"),{method:"POST",body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){return t}))},getByPk:function(t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/usuarios/").concat(t),{credentials:"include"});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",Object(n["a"])({},a.data));case 7:case"end":return e.stop()}}),e)})))()},edit:function(t,e){return fetch("".concat(h,"/usuarios/").concat(t),{method:"PUT",body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(t){return t}))}},st=at,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-12 col-lg"},[r("div",{staticClass:"row  rounded border p-3 mb-5 mb-md-5 mr-lg-5 bg-light"},[null!=t.status.mensaje?r("BaseNotificacion",{attrs:{titulo:t.status.titulo,mensaje:t.status.mensaje,tipo:t.status.tipo}}):t._e(),t.estaCargando?r("SpinnerLoader"):t._e(),r("div",{staticClass:"col-12 col-md col-lg bg-light"},[r("h3",{staticClass:"bg-light"},[t._v("Edita tus datos personales")]),r("form",{attrs:{action:"#",id:"form-login",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.grabar(t.usuario)}}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"usuario"}},[t._v("Modifica tu nombre de usuario ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.usuario,expression:"usuario.usuario"}],staticClass:"form-control",attrs:{type:"text",id:"usuario",placeholder:"Modifica tu nombre de usuario",disabled:t.estaCargando,"aria-describedby":null!=t.errores.usuario?"usuario-error":""},domProps:{value:t.usuario.usuario},on:{input:function(e){e.target.composing||t.$set(t.usuario,"usuario",e.target.value)}}}),null!=t.errores.usuario?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.usuario?"display: block":"display: none",attrs:{id:"usuario-error"}},[t._v(" "+t._s(t.errores.usuario[0])+" ")]):t._e()]),r("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("Confirmar edición ")])])])],1)])},nt=[],it=r("53ca"),lt={name:"PerfilEditar",components:{BaseNotificacion:v,SpinnerLoader:Q},data:function(){return{store:l,estaCargando:!1,editarUser:!1,usuarios:[],usuario:{usuario:null,imagen:null},errores:{usuario:null},status:{titulo:null,mensaje:null,tipo:"info"}}},computed:{},methods:{grabar:function(t){var e=this;if(this.estaCargando)return null;this.estaCargando=!0,st.edit(t.id,t).then((function(t){!1!==t?(e.estaCargando=!1,e.errores={usuario:null},e.store.setStatus({titulo:"Éxito",mensaje:"El usuario se editó exitosamente.",tipo:"success"}),e.store.auth={id:t.data.id,email:t.data.email,usuario:t.data.usuario,imagen:t.data.imagen},localStorage.setItem("user",JSON.stringify(e.store.auth)),e.$emit("click",e.editarUser),e.store.clearStatus()):("object"==Object(it["a"])(t.errores)&&(e.errores=t.errores),e.status.titulo="Error",e.status.mensaje="Ocurrió un error al tratar de editar el usuario.",e.status.tipo="danger")}))}},mounted:function(){var t=this,e=l.auth.id;st.getByPk(e).then((function(e){t.usuario=e}))}},ut=lt,ct=Object(p["a"])(ut,ot,nt,!1,null,"021887a4",null),dt=ct.exports,mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-md-12 col-lg"},[r("div",{staticClass:"row  rounded border p-3 mr-lg-4 bg-light mb-5 mb-md-5"},[r("div",{staticClass:"col-6 col-md-4 col-lg-4 bg-light"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:t.imagenPath,alt:t.usuario.email}})]),r("div",{staticClass:"col-12 mt-3 md-md-0 col-md-8 col-lg bg-light"},[r("h3",{staticClass:"bg-light"},[t._v("Tus datos personales")]),r("p",{staticClass:"bg-light"},[t._v("Correo Electrónico: "),r("span",[t._v(t._s(t.usuario.email))])]),r("p",{staticClass:"bg-light"},[t._v("Nombre de usuario: "),null===t.usuario.usuario?r("span",{staticClass:"text-danger"},[r("i",[r("u",[r("span",{on:{click:function(e){return t.$emit("click",t.editarUser)}}},[t._v("¡Agrega Uno!")])])])]):r("span",[t._v(t._s(t.usuario.usuario))])]),r("hr"),r("button",{staticClass:"btn btn-primary float-right",attrs:{type:"button"},on:{click:function(e){return t.$emit("click",t.editarUser)}}},[t._v("Edita tu perfil ")])])])])},pt=[],ft={name:"PerfilDatos",data:function(){return{usuario:{id:null,usuario:null,email:null,imagen:null,password:null},editarUser:!1}},computed:{imagenPath:function(){return"".concat(g,"/perfil/").concat(l.auth.imagen)},tieneImagen:function(){return null!==l.auth.imagen&&""!==l.auth.imagen}},mounted:function(){var t=this,e=l.auth.id;st.getByPk(e).then((function(e){t.usuario=e}))}},vt=ft,ht=Object(p["a"])(vt,mt,pt,!1,null,"fbc272d2",null),gt=ht.exports,bt={name:"Perfil",components:{PerfilDatos:gt,PerfilEditar:dt},data:function(){return{store:l,editarUser:!0}},methods:{editarUsuario:function(){this.editarUser?this.editarUser=!1:this.editarUser=!0}},mounted:function(){var t=this,e=l.auth.id;st.getByPk(e).then((function(e){t.usuario=e}))}},Ct=bt,_t=Object(p["a"])(Ct,et,rt,!1,null,"30388219",null),yt=_t.exports,wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"posteo"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[null!==t.store.auth.id?r("div",{staticClass:"nuevoPost col-12 "},[r("router-link",{attrs:{to:"/ComentarioNuevo/"+this.$route.params.id}},[t._v(" Comentá este posteo ")])],1):t._e(),r("Posteo"),t.estaCargando?r("SpinnerLoader"):r("ComentariosLista",{attrs:{comentarios:t.comentariosOrdenados}})],1)])])},jt=[],Pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-11"},t._l(t.comentarios,(function(t){return r("ComentarioPosteo",{key:t.id_producto,attrs:{comentario:t}})})),1)},xt=[],Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comentarios"},[r("p",[t._v(t._s(t.comentario.email))]),r("p",[t._v(t._s(t.comentario.fecha))]),r("p",[t._v(t._s(t.comentario.cuerpo))])])},Ot=[],kt={name:"ComentarioPosteo",props:["comentario"],data:function(){return{store:l}},methods:{}},St=kt,Nt=Object(p["a"])(St,Et,Ot,!1,null,"e6cf9f1a",null),$t=Nt.exports,It={name:"ComentariosLista",components:{ComentarioPosteo:$t},props:{comentarios:{type:Array,required:!0}}},Lt=It,At=Object(p["a"])(Lt,Pt,xt,!1,null,null,null),Ut=At.exports,Bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 posteos"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-3 col-lg-3 user"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-4 col-md-12 col-lg-12"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:t.imagenPath,alt:t.posteo.email}})]),r("div",{staticClass:"col col-md col-lg"},[r("small",[t._v("Creado por:")]),r("h2",[t._v(t._s(t.posteo.email))]),r("small",[t._v("Fecha de creación: "+t._s(t.posteo.fecha))])])])]),r("div",{staticClass:"col-12 col-md col-lg tema"},[r("h2",{staticClass:"titulo"},[t._v(t._s(t.posteo.titulo))]),r("hr"),r("p",{staticClass:"cuerpo"},[t._v(t._s(t.posteo.cuerpo))])])])])},Gt=[],Tt={name:"Posteo",props:{},data:function(){return{store:l,posteo:{id_posteo:null,titulo:null,cuerpo:null,fecha:null,id_usuario:null,email:null,userImg:null}}},computed:{imagenPath:function(){return"".concat(g,"/perfil/").concat(this.posteo.userImg)},tieneImagen:function(){return null!==this.posteo.userImg&&""!==this.posteo.userImg}},methods:{},mounted:function(){var t=this,e=this.$route.params.id;B.getByPk(e).then((function(e){t.posteo=e}))}},qt=Tt,Rt=Object(p["a"])(qt,Bt,Gt,!1,null,null,null),Dt=Rt.exports,Jt=null,Mt={getAll:function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h,"/comentarios"),{credentials:"include"});case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,Jt=r.data,t.abrupt("return",Object(I["a"])(Jt));case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getByPk:function(t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"/comentarios/").concat(t),{credentials:"include"});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,Jt=a.data,e.abrupt("return",Object(I["a"])(Jt));case 8:case"end":return e.stop()}}),e)})))()},create:function(t,e){return fetch("".concat(h,"/comentarios/").concat(t),{method:"POST",body:JSON.stringify(e),credentials:"include"}).then((function(t){return t.json()})).then((function(t){return t}))},edit:function(t,e){return fetch("".concat(h,"/comentarios/").concat(t),{method:"PUT",body:JSON.stringify(e),credentials:"include"}).then((function(t){return t.json()})).then((function(t){return t}))},deleteItem:function(t){return fetch("".concat(h,"/comentarios/").concat(t),{method:"DELETE",credentials:"include"}).then((function(t){return t.json()})).then((function(t){return t.success}))}},Ft=Mt,Vt={name:"PosteosVer",components:{SpinnerLoader:Q,Posteo:Dt,ComentariosLista:Ut},data:function(){return{store:l,estaCargando:!0,comentarios:[]}},computed:{comentariosOrdenados:function(){var t=this.comentarios.slice();return t.reverse(),t}},methods:{refrescarComentarios:function(){var t=this;this.estaCargando=!0,Ft.getAll().then((function(e){t.estaCargando=!1,t.comentarios=e}))}},mounted:function(){var t=this;this.estaCargando=!0;var e=this.$route.params.id;Ft.getByPk(e).then((function(e){t.estaCargando=!1,t.comentarios=e}))}},Ht=Vt,Wt=Object(p["a"])(Ht,wt,jt,!1,null,null,null),zt=Wt.exports,Kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"iniciarSesion"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"logo col-12"},[r("router-link",{attrs:{to:"/"}},[r("h2",{staticClass:"logo"},[t._v("addcar app")])])],1),r("div",{staticClass:"form col-12"},[r("h2",[t._v("Inicia sesión en el foro")]),r("p",[t._v("Para poder gestionar tu cuenta")]),r("login-form")],1),r("div",{staticClass:"col-12 text-center"},[r("hr"),r("router-link",{staticClass:"btn",attrs:{to:"/registro"}},[t._v("¿No estás registrado?")]),r("router-link",{staticClass:"btn",attrs:{to:"/"}},[t._v("Volver a la página de inicio")])],1)])])])},Qt=[],Xt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#",id:"form-login",method:"GET"},on:{submit:function(e){return e.preventDefault(),t.login(t.credenciales)}}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Ingresa tu usuario")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.credenciales.email,expression:"credenciales.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"Ingresa tu usuario"},domProps:{value:t.credenciales.email},on:{input:function(e){e.target.composing||t.$set(t.credenciales,"email",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Ingresa tu password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.credenciales.password,expression:"credenciales.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password",placeholder:"Ingresa tu password"},domProps:{value:t.credenciales.password},on:{input:function(e){e.target.composing||t.$set(t.credenciales,"password",e.target.value)}}})]),t._m(0)])},Yt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button"},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[t._v("Identificarme")])])}],Zt={name:"login-form",props:{},data:function(){return{credenciales:{email:null,password:null},status:{titulo:null,mensaje:null,tipo:"info"},store:l}},computed:{},methods:{login:function(t){var e=this;_.login(t).then((function(t){!1!==t?(e.status={titulo:"Éxito",mensaje:"Bienvenido al Foro de ADDCARD!",status:"success"},e.store.auth={id:t.id,email:t.email,usuario:t.usuario,imagen:t.imagen},localStorage.setItem("user",JSON.stringify(e.store.auth)),e.$router.push("/perfil")):e.status={titulo:"Error",mensaje:"Las credenciales son incorrectas. Intenta nuevamente.",tipo:"danger."}}))}}},te=Zt,ee=Object(p["a"])(te,Xt,Yt,!1,null,null,null),re=ee.exports,ae={name:"Login",components:{LoginForm:re},props:{},data:function(){return{}},mounted:function(){null!==localStorage.getItem("user")&&this.$router.push("/")},computed:{},methods:{}},se=ae,oe=Object(p["a"])(se,Kt,Qt,!1,null,null,null),ne=oe.exports,ie=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"registro"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"logo col-12"},[r("router-link",{attrs:{to:"/"}},[r("h2",{staticClass:"logo"},[t._v("addcar app")])])],1),t._m(0),r("div",{staticClass:"col-12"},[r("p",[t._v("Completando el siguiente formulario.")]),r("NewUserLogin")],1),r("div",{staticClass:"col-12"},[r("hr"),r("router-link",{staticClass:"btn",attrs:{to:"/"}},[t._v("Volver a la página de incio")])],1)])])])},le=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"redes col-12"},[r("h2",[t._v("Registra tu usuario")])])}],ue=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.grabar(t.usuario)}}},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Ingresá tu correo ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.email,expression:"usuario.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Ingresá tu correo","aria-describedby":null!=t.errores.email?"email-error":""},domProps:{value:t.usuario.email},on:{input:function(e){e.target.composing||t.$set(t.usuario,"email",e.target.value)}}}),null!=t.errores.email?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.email?"display: block":"display: none",attrs:{id:"email-error"}},[t._v(" "+t._s(t.errores.email[0])+" ")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"verificarEmail"}},[t._v("Ingresá nuevamente tu correo ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.verificarEmail,expression:"usuario.verificarEmail"}],staticClass:"form-control",attrs:{type:"email",id:"verificarEmail",placeholder:"Ingresá nuevamente tu correo","aria-describedby":null!=t.errores.verificarEmail?"verificarEmail-error":""},domProps:{value:t.usuario.verificarEmail},on:{input:function(e){e.target.composing||t.$set(t.usuario,"verificarEmail",e.target.value)}}}),null!=t.errores.verificarEmail?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.verificarEmail?"display: block":"display: none",attrs:{id:"verificarEmail-error"}},[t._v(" "+t._s(t.errores.verificarEmail[0])+" ")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Ingrese su password ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.password,expression:"usuario.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Ingresá tu password","aria-describedby":null!=t.errores.password?"password-error":""},domProps:{value:t.usuario.password},on:{input:function(e){e.target.composing||t.$set(t.usuario,"password",e.target.value)}}}),null!=t.errores.password?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.password?"display: block":"display: none",attrs:{id:"password-error"}},[t._v(" "+t._s(t.errores.password[0])+" ")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"passwordConfirm"}},[t._v("Ingresá nuevamente tu password ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.usuario.verificarPassword,expression:"usuario.verificarPassword"}],staticClass:"form-control",attrs:{type:"password",id:"passwordConfirm",placeholder:"Ingresá nuevamente tu password","aria-describedby":null!=t.errores.verificarPassword?"verificarPassword-error":""},domProps:{value:t.usuario.verificarPassword},on:{input:function(e){e.target.composing||t.$set(t.usuario,"verificarPassword",e.target.value)}}}),null!=t.errores.verificarPassword?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.verificarPassword?"display: block":"display: none",attrs:{id:"verificarPassword-error"}},[t._v(" "+t._s(t.errores.verificarPassword[0])+" ")]):t._e()]),t._m(0)])},ce=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button"},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[t._v("Crear usuario ")])])}],de={name:"NewUserLogin",components:{},data:function(){return{store:l,usuario:{email:null,password:null,verificarEmail:null,verificarPassword:null},errores:{email:null,verificarEmail:null,password:null,verificarPassword:null},status:{titulo:null,mensaje:null,tipo:"info"}}},computed:{},methods:{grabar:function(t){var e=this;st.create(t).then((function(t){t.success?(e.usuario={id:null,usuario:null,email:null},e.errores={email:null,verificarEmail:null,password:null,verificarPassword:null},e.store.setStatus({titulo:"Éxito",mensaje:"El usuario se creó exitosamente.",tipo:"success"}),e.$router.push("/login")):(e.errores=t.errores,e.status.titulo="Error",e.status.mensaje="Ocurrió un error al tratar de grabar el usuario.",e.status.tipo="danger")}))}}},me=de,pe=Object(p["a"])(me,ue,ce,!1,null,"40f440d6",null),fe=pe.exports,ve={name:"Registro",components:{NewUserLogin:fe},props:{},data:function(){return{}},computed:{},methods:{}},he=ve,ge=Object(p["a"])(he,ie,le,!1,null,"3551fb39",null),be=ge.exports,Ce=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"posteoNuevo"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-md-10 col-lg-12 "},[r("h2",[t._v("Nuevo post!")]),r("PosteoNuevoForm")],1)])])])},_e=[],ye=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.grabar(t.posteo)}}},[null!=t.status.mensaje?r("BaseNotificacion",{attrs:{titulo:t.status.titulo,mensaje:t.status.mensaje,tipo:t.status.tipo}}):t._e(),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"titulo"}},[t._v("Asunto del posteo ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.posteo.titulo,expression:"posteo.titulo"}],staticClass:"form-control",attrs:{type:"text",id:"titulo",placeholder:"Asunto del posteo",disabled:t.estaCargando,"aria-describedby":null!=t.errores.titulo?"titulo-error":""},domProps:{value:t.posteo.titulo},on:{input:function(e){e.target.composing||t.$set(t.posteo,"titulo",e.target.value)}}}),null!=t.errores.titulo?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.titulo?"display: block":"display: none",attrs:{id:"titulo-error"}},[t._v(" "+t._s(t.errores.titulo[0])+" ")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"cuerpo"}},[t._v("Escribe sobre el tema que quieres hablar ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.posteo.cuerpo,expression:"posteo.cuerpo"}],staticClass:"form-control",attrs:{id:"cuerpo",name:"textarea",placeholder:"Escribe sobre el tema que quieres hablar",rows:"6",disabled:t.estaCargando,"aria-describedby":null!=t.errores.cuerpo?"cuerpo-error":""},domProps:{value:t.posteo.cuerpo},on:{input:function(e){e.target.composing||t.$set(t.posteo,"cuerpo",e.target.value)}}}),null!=t.errores.cuerpo?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.cuerpo?"display: block":"display: none",attrs:{id:"cuerpo-error"}},[t._v(" "+t._s(t.errores.cuerpo[0])+" ")]):t._e()]),t.estaCargando?r("SpinnerLoader"):r("div",{staticClass:"button"},[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v("Crear nuevo tema ")]),r("router-link",{staticClass:"btn btn-block btn-outline-secondary",attrs:{to:"/",type:"button"}},[t._v(" Volver al inicio ")])],1)],1)},we=[],je={name:"PosteoNuevoForm",components:{SpinnerLoader:Q,BaseNotificacion:v},props:{},data:function(){return{store:l,estaCargando:!1,posteo:{titulo:null,cuerpo:null,fecha:null,email:l.auth.email,id_usuario:l.auth.id},errores:{titulo:null,cuerpo:null},status:{titulo:null,mensaje:null,tipo:"info"}}},computed:{},methods:{grabar:function(t){var e=this;if(this.estaCargando)return null;this.estaCargando=!0,B.create(t).then((function(t){e.estaCargando=!1,t.success?(e.posteo={titulo:null,cuerpo:null,fecha:null,email:null,id_usuario:null},e.errores={titulo:null,cuerpo:null},e.store.setStatus({titulo:"Éxito",mensaje:"El posteo se creó exitosamente.",tipo:"success"}),Ve.push("/")):(e.errores=t.errores,e.status.titulo="Error",e.status.mensaje="Ocurrió un error al tratar de grabar el posteo.",e.status.tipo="danger")}))}}},Pe=je,xe=Object(p["a"])(Pe,ye,we,!1,null,"0007bfde",null),Ee=xe.exports,Oe={name:"PosteoNuevo",components:{PosteoNuevoForm:Ee},props:{},data:function(){return{}},computed:{},methods:{}},ke=Oe,Se=Object(p["a"])(ke,Ce,_e,!1,null,null,null),Ne=Se.exports,$e=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container-fluid",attrs:{id:"posteoNuevo"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-md-10 col-lg-12 "},[r("h2",[t._v("Nuevo Comentario!")]),r("ComentarioNuevoForm")],1)])])])},Ie=[],Le=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.grabar(t.comentario)}}},[null!=t.status.mensaje?r("BaseNotificacion",{attrs:{titulo:t.status.titulo,mensaje:t.status.mensaje,tipo:t.status.tipo}}):t._e(),r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only",attrs:{for:"cuerpo"}},[t._v("Escribe sobre el tema que quieres hablar ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comentario.cuerpo,expression:"comentario.cuerpo"}],staticClass:"form-control",attrs:{id:"cuerpo",name:"textarea",placeholder:"Escribe sobre el tema que quieres hablar",rows:"6",disabled:t.estaCargando,"aria-describedby":null!=t.errores.cuerpo?"cuerpo-error":""},domProps:{value:t.comentario.cuerpo},on:{input:function(e){e.target.composing||t.$set(t.comentario,"cuerpo",e.target.value)}}}),null!=t.errores.cuerpo?r("div",{staticClass:"invalid-feedback",style:null!=t.errores.cuerpo?"display: block":"display: none",attrs:{id:"cuerpo-error"}},[t._v(" "+t._s(t.errores.cuerpo[0])+" ")]):t._e()]),t.estaCargando?r("SpinnerLoader"):r("div",{staticClass:"button"},[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v("Enviar Comentario ")]),r("router-link",{staticClass:"btn btn-block btn-outline-secondary",attrs:{to:"/posteos/"+this.$route.params.id,type:"button"}},[t._v(" Volver al posteo ")])],1)],1)},Ae=[],Ue={name:"ComentarioNuevoForm",components:{SpinnerLoader:Q,BaseNotificacion:v},props:{},data:function(){return{store:l,estaCargando:!1,comentario:{cuerpo:null,fecha:null,id_usuario:l.auth.id},errores:{cuerpo:null},status:{titulo:null,mensaje:null,tipo:"info"}}},computed:{},methods:{grabar:function(t){var e=this;if(this.estaCargando)return null;this.estaCargando=!0;var r=this.$route.params.id;Ft.create(r,t).then((function(t){e.estaCargando=!1,t.success?(e.comentario={cuerpo:null,fecha:null,id_usuario:null},e.errores={cuerpo:null},e.store.setStatus({titulo:"Éxito",mensaje:"El comentario se creó exitosamente.",tipo:"success"}),Ve.push("/")):(e.errores=t.errores,e.status.titulo="Error",e.status.mensaje="Ocurrió un error al tratar de grabar el comentario.",e.status.tipo="danger")}))}}},Be=Ue,Ge=Object(p["a"])(Be,Le,Ae,!1,null,"4b260772",null),Te=Ge.exports,qe={name:"ComentarioNuevo",components:{ComentarioNuevoForm:Te},props:{},data:function(){return{}},computed:{},methods:{}},Re=qe,De=Object(p["a"])(Re,$e,Ie,!1,null,null,null),Je=De.exports;a["a"].use(x["a"]);var Me=[{path:"/",name:"Home",component:tt},{path:"/posteonuevo",name:"PosteoNuevo",component:Ne,meta:{requiresAuth:!0}},{path:"/ComentarioNuevo/:id",name:"ComentarioNuevo",component:Je,meta:{requiresAuth:!0}},{path:"/posteos/:id",name:"PosteosVer",component:zt},{path:"/perfil",name:"Perfil",component:yt,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:ne},{path:"/registro",name:"Registro",component:be}],Fe=new x["a"]({routes:Me});Fe.beforeEach((function(t,e,r){t.matched.some((function(t){return t.meta.requiresAuth}))?_.isLogged()?r():r({path:"/login"}):r()}));var Ve=Fe;r("21b6"),r("f507"),r("9537"),r("ccd1"),r("d48d");a["a"].config.productionTip=!1,new a["a"]({router:Ve,render:function(t){return t(P)}}).$mount("#app")},"6e6b":function(t,e,r){"use strict";r("e687")},ccd1:function(t,e,r){},e687:function(t,e,r){}});
//# sourceMappingURL=app.553dcd8e.js.map