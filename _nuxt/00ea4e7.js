(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3,8],{431:function(t,e,n){"use strict";n.r(e);var r=n(291),l=n(203),c=(Object(l.a)({apiKey:"AIzaSyDKGbDKCY0yKZ4Hw3VRAqEre1YnsZ_Zq8w",authDomain:"hulamingo-be5e0.firebaseapp.com",projectId:"hulamingo-be5e0",storageBucket:"hulamingo-be5e0.appspot.com",messagingSenderId:"107963883252",appId:"1:107963883252:web:97a2c0b0720c1ce289c8a1",measurementId:"G-B3GSJS9CXN"}),Object(r.c)()),o={methods:{logout:function(){var t=this;Object(r.f)(c).then((function(){t.$router.push("/login")})).catch((function(t){alert(ログアウト失敗)}))}}},d=n(60),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("ul",{staticClass:"navbar-nav flex-nowrap ms-auto"},[n("div",{staticClass:"col d-inline-flex"},[n("a",{staticClass:"btn btn-primary btn-sm mx-1 my-1",attrs:{role:"button",id:"add-new-1"},on:{click:t.logout}},[t._v("ログアウト")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link rounded-circle me-3",attrs:{id:"sidebarToggleTop",type:"button"}},[e("i",{staticClass:"fas fa-bars"})])}],!1,null,null,null);e.default=component.exports},433:function(t,e,n){"use strict";n.r(e);var r=n(60),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-dark d-none d-lg-inline align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0",staticStyle:{background:"#EE684B"}},[n("div",{staticClass:"container-fluid d-flex flex-column p-0"},[n("a",{staticClass:"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-2",attrs:{href:"/user/select"}},[n("div",{staticClass:"sidebar-brand-icon"},[n("img",{attrs:{src:"/img/Flamingo.png",width:"100%"}})]),t._v(" "),n("div",{staticClass:"sidebar-brand-text mx-3"},[n("span",[t._v("HU lamingo")])])]),t._v(" "),n("hr",{staticClass:"sidebar-divider my-0"}),t._v(" "),n("ul",{staticClass:"navbar-nav text-light",attrs:{id:"accordionSidebar"}},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/user/toppage"}},[n("i",{staticClass:"fas fa-tachometer-alt"}),n("span",[t._v("トップページ")])])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/user/book_list"}},[n("i",{staticClass:"fas fa-user"}),n("span",[t._v("書籍一覧")])])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/user/book_rend"}},[n("i",{staticClass:"fas fa-user-circle"}),n("span",[t._v("本を借りる/返す")])])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"/user/news_list"}},[n("i",{staticClass:"fas fa-user-circle"}),n("span",[t._v("お知らせ")])])]),t._v(" "),n("li",{staticClass:"nav-item"})]),t._v(" "),n("div",{staticClass:"text-center d-none d-md-inline"},[n("button",{staticClass:"btn rounded-circle border-0",attrs:{id:"sidebarToggle",type:"button"}})])])])}],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var r,l=n(35),c=(n(99),n(2),n(4),n(204)),o=n(292),d=n(203),v=n(291),f=n(433),m=n(431),_=Object(d.a)({apiKey:"AIzaSyDKGbDKCY0yKZ4Hw3VRAqEre1YnsZ_Zq8w",authDomain:"hulamingo-be5e0.firebaseapp.com",projectId:"hulamingo-be5e0",storageBucket:"hulamingo-be5e0.appspot.com",messagingSenderId:"107963883252",appId:"1:107963883252:web:97a2c0b0720c1ce289c8a1",measurementId:"G-B3GSJS9CXN"}),C=Object(c.f)(),h=Object(o.b)(_),x=(Object(v.c)(),{components:{UserNav:f.default,LogoutNav:m.default},data:function(){return{data:[]}},methods:{getUsersbooks:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var q,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q=Object(c.g)(Object(c.b)(C,"books"),Object(c.j)("flag","==",1)),t.next=3,Object(c.e)(q);case 3:t.sent.forEach((function(t){var n=Object(o.d)(h,"books/"+t.data().cover_imgpath);Object(o.a)(n).then((function(n){var r=t.data();r.cover_imgpath=n,e.data.push({data:r,ref:t.ref})}))}));case 5:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),returnBook:function(t){console.log(t);var e=this;Object(c.i)(t,{flag:0}).then((function(t){e.$router.push("/user/book_rend")}))}},mounted:function(){this.getUsersbooks(C)}}),y=x,k=n(60),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("UserNav"),t._v(" "),n("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[n("div",{attrs:{id:"content"}},[n("LogoutNav"),t._v(" "),n("div",{staticClass:"my-4"},[n("h1",{staticClass:"text-dark mx-3 h4"},[t._v("本を借りる/返す")]),t._v(" "),n("div",{staticClass:"row mx-3"},[n("div",{staticClass:"col-12 col-sm-12 col-lg-6 d-flex d-lg-inline-flex justify-content-end justify-content-sm-end align-items-sm-end justify-content-lg-start align-items-lg-center"},[n("span",{staticClass:"d-flex align-items-center mx-2"},[t._v("表示件数")]),t._v(" "),t._m(0),t._v(" "),n("button",{staticClass:"d-flex align-items-center mx-2 btn btn-success",on:{click:function(e){return t.$router.push("/barcode")}}},[t._v("本を借りる")])])])]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row d-xxl-flex"},t._l(t.data,(function(e){return n("div",{key:e.id,staticClass:"col-12 col-sm-12 col-lg-4 col-xl-3 d-flex justify-content-center col-4 my-4"},[n("div",{staticClass:"bg-light shadow-lg w-100",staticStyle:{"border-radius":"10px"}},[n("div",{staticClass:"d-flex d-xxl-flex justify-content-center justify-content-xxl-center my-3"},[n("img",{staticClass:"book-img",attrs:{height:"150",src:e.data.cover_imgpath}})]),t._v(" "),n("div",{staticClass:"my-1"},[n("h1",{staticClass:"text-center text-dark h3"},[t._v(t._s(e.data.title))])]),t._v(" "),n("div",{staticClass:"d-inline-flex justify-content-center my-3 w-100"},[n("div",{staticClass:"text-center mx-3"},[n("button",{staticClass:"btn btn-danger shadow-lg",attrs:{type:"button"},on:{click:function(n){return t.returnBook(e.ref)}}},[n("span",{staticClass:"h6",staticStyle:{color:"rgb(0,0,0)"}},[t._v("返却日：")]),n("span",{staticClass:"h6",staticStyle:{color:"rgb(0,0,0)"}},[t._v("12月29日")])])])])])])})),0)])],1),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._m(3)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline-flex justify-content-start py-1"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-primary dropdown-toggle",staticStyle:{"font-size":"1rem"},attrs:{"aria-expanded":"false","data-bs-toggle":"dropdown",type:"button"}},[t._v("100件")]),t._v(" "),n("div",{staticClass:"dropdown-menu"},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("20件")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("50件")]),n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("150件")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"d-flex justify-content-center"},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("4")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("5")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-white sticky-footer col-12"},[n("div",{staticClass:"container my-auto"},[n("div",{staticClass:"text-center my-auto copyright"},[n("span",[t._v("Copyright © Brand 2021")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"border rounded d-inline scroll-to-top",attrs:{href:"#page-top"}},[e("i",{staticClass:"fas fa-angle-up"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UserNav:n(433).default,LogoutNav:n(431).default})}}]);