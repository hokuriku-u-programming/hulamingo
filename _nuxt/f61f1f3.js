(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{434:function(e,t,n){"use strict";n.r(t);var o,c=n(35),r=(n(99),n(2),n(4),n(204)),d=n(203),l=Object(d.a)({apiKey:"AIzaSyDKGbDKCY0yKZ4Hw3VRAqEre1YnsZ_Zq8w",authDomain:"hulamingo-be5e0.firebaseapp.com",projectId:"hulamingo-be5e0",storageBucket:"hulamingo-be5e0.appspot.com",messagingSenderId:"107963883252",appId:"1:107963883252:web:97a2c0b0720c1ce289c8a1",measurementId:"G-B3GSJS9CXN"}),h=Object(r.f)(l),f={name:"Reader",data:function(){return{result:""}},methods:{onDecode:function(e){this.result=e,this.checkBook()},onLoaded:function(){console.log("Loaded")},checkBook:(o=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n,q;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(r.b)(h,"books"),n=this,q=Object(r.g)(t,Object(r.j)("isbn","==",this.result)),e.next=5,Object(r.e)(q);case 5:e.sent.forEach((function(e){Object(r.i)(e.ref,{flag:1}).then((function(e){n.$router.push("/user/book_rend")}))}));case 7:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),debug:function(){this.result="9784401359189",this.checkBook()}}},m=f,k=n(60),component=Object(k.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("steram-barcode-reader",{on:{decode:e.onDecode,loaded:e.onLoaded}}),e._v(" "),n("span",[e._v(e._s(e.result))]),e._v(" "),n("button",{staticClass:"btn btn-primary btn-sm mx-2",on:{click:e.debug}},[e._v("貸し出す")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);