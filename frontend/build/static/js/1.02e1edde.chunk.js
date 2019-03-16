webpackJsonp([1],{527:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(3),s=t.n(i),l=t(96),A=t(68),c=t(67),d=t(587),m=t(536),u=t(529),B=t(590),p=(t.n(B),t(100)),f=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),g=function(e){function n(){a(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.logout=e.logout.bind(e),e}return r(n,e),f(n,[{key:"componentDidMount",value:function(){var e=this.props.user.username;this.props.loansRequest(e)}},{key:"logout",value:function(){var e=this.props;(0,e.logoutRequest)(e.token)}},{key:"deleteItem",value:function(e){var n=this.props.token,t=this.props.match.params.username;this.props.deleteLoanRequest({token:n,id:e,username:t})}},{key:"render",value:function(){var e=this.props,n=e.loans,t=e.user;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null),s.a.createElement("main",{className:"main d-flex flex-column flex-lg-row"},s.a.createElement(d.a,{user:t,logout:this.logout}),s.a.createElement("div",{className:"profilePage__loanList"},s.a.createElement(m.a,{user:t,loans:n,deleteItem:this.deleteItem}))))}}]),n}(s.a.Component),x=function(e){return{loansRequest:function(n){return e(A.b.loansRequest(n))},logoutRequest:function(n){return e(c.a.logoutRequest(n))},deleteLoanRequest:function(n){var t=n.token,a=n.id,o=n.username;e(p.b.removeLoanRequest({token:t,id:a,username:o}))}}},b=function(e){return{user:e.authStore.user,token:e.authStore.token,loans:e.userStore.loans}};n.default=Object(l.b)(b,x)(g)},529:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(33),i=t(530);t.n(i);n.a=function(){return o.a.createElement("header",{className:"header flex-column flex-lg-row justify-content-lg-start"},o.a.createElement("h1",{className:"header__heading "},o.a.createElement(r.b,{className:"header__headingLink",to:"/"},o.a.createElement("img",{className:"header__headingLogo",src:"/images/logo.svg",alt:""}),"Libros")),o.a.createElement("nav",{className:"navigation d-flex justify-content-center justify-content-lg-start"},o.a.createElement("ul",{className:"navigation__list"},o.a.createElement("li",{className:"navigation__element"},o.a.createElement(r.b,{className:"navigation__link",to:"/search/0"},o.a.createElement("img",{src:"/images/search.svg","aria-hidden":"true",alt:""}),"Wyszukiwarka")),o.a.createElement("li",{className:"navigation__element"},o.a.createElement(r.b,{className:"navigation__link",to:"/profile"}," ",o.a.createElement("img",{src:"/images/profile.svg","aria-hidden":"true",alt:""})," Konto")))))}},530:function(e,n,t){var a=t(531);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(512)(a,o);a.locals&&(e.exports=a.locals)},531:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".header{background:#991313;display:-ms-flexbox;display:flex;min-height:8vh;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:1em;padding:15px}.header__heading{font-size:1.2em}.header__headingLink{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__headingLink:hover{color:#fff;text-decoration:none}.header__headingLogo{height:50px;margin-left:20px;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__login{width:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header__loginLink{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff}.header__loginLink img{height:40px}.navigation{margin-left:40px;width:50%}.navigation__list{display:-ms-flexbox;display:flex;list-style-type:none;margin:0}.navigation__element{margin:5px}.navigation__link{color:#fff;text-decoration:none;font-family:Open Sans,sans-serif;background:#c61d1d;padding:8px;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navigation__link img{width:24px;height:24px}.navigation__link:hover{color:#eee;text-decoration:none}.navigation__link:focus{color:#c0c6db;text-decoration:underline}","",{version:3,sources:["F:/Projekty/Libros/frontend/src/components/Header/index.css"],names:[],mappings:"AAAA,QACE,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,cAAe,AACf,YAAc,CACf,AAED,iBACE,eAAiB,CAClB,AACD,qBACE,WAAa,AACb,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CAEzB,AACD,2BACE,WAAa,AACb,oBAAsB,CACvB,AAED,qBACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AACD,eACE,UAAW,AAEX,oBAAoB,AAEpB,aAAa,AACb,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,mBACE,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,mBAAoB,AACxB,UAAa,CACd,AACD,uBACE,WAAa,CACd,AAED,YACE,iBAAkB,AAClB,SAAW,CACZ,AACD,kBACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,QAAU,CACX,AAED,qBACE,UAAY,CACb,AACD,kBACE,WAAa,AACb,qBAAsB,AACtB,iCAAqC,AACrC,mBAAoB,AACpB,YAAa,AACb,kBAAmB,AAEnB,oBAAoB,AAEpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AAED,sBACE,WAAY,AACZ,WAAY,CACb,AAED,wBACE,WAAe,AACf,oBAAsB,CACvB,AAED,wBACE,cAAe,AACf,yBAA2B,CAC5B",file:"index.css",sourcesContent:['.header {\r\n  background: #991313;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 8vh;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  font-size: 1em;\r\n  padding: 15px;\r\n}\r\n\r\n.header__heading {\r\n  font-size: 1.2em;\r\n}\r\n.header__headingLink {\r\n  color: white;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n \r\n}\r\n.header__headingLink:hover {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.header__headingLogo {\r\n  height: 50px;\r\n  margin-left: 20px;\r\n  margin-right: 10px;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.header__login {\r\n  width: 50%;\r\n\r\n  display:-ms-flexbox;\r\n\r\n  display:flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n\r\n.header__loginLink {\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  color: white;\r\n}\r\n.header__loginLink img {\r\n  height: 40px;\r\n}\r\n\r\n.navigation {\r\n  margin-left: 40px;\r\n  width: 50%;\r\n}\r\n.navigation__list {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n\r\n.navigation__element {\r\n  margin: 5px;\r\n}\r\n.navigation__link {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-family: "Open Sans", sans-serif;\r\n  background: #c61d1d;\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n\r\n  display:-ms-flexbox;\r\n\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.navigation__link img {\r\n  width: 24px;\r\n  height:24px;\r\n}\r\n\r\n.navigation__link:hover {\r\n  color: #eeeeee;\r\n  text-decoration: none;\r\n}\r\n\r\n.navigation__link:focus {\r\n  color: #c0c6db;\r\n  text-decoration: underline;\r\n}'],sourceRoot:""}])},532:function(e,n,t){"use strict";function a(e){var n=new Date(e),t=["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Listopad","Listopad","Grudzien"];return n.getDate()+" "+t[n.getMonth()]+" "+n.getFullYear()}function o(e,n){return((e.getTime()-n.getTime())/1e3/60/60/24).toFixed(0)}n.b=a,n.a=o},536:function(e,n,t){"use strict";function a(e){var n=e.loan,t=e.deleteItem,a=function(){t(n._id)};return i.a.createElement("tr",null,i.a.createElement("th",{className:"loanList__cell"},n.title),i.a.createElement("th",{className:"loanList__cell"},n.author),i.a.createElement("th",{className:"loanList__cell"},Object(s.b)(n.date)),i.a.createElement("th",{className:"loanList__cell"},Object(s.b)(n.term)),i.a.createElement("th",{className:"loanList__cell"},A(Object(s.a)(new Date(n.term),new Date))," dni"),i.a.createElement("th",{className:"loanList__cell"},i.a.createElement("button",{onClick:a},"Usu\u0144 ",i.a.createElement("img",{src:"",alt:""}))))}function o(e){var n=e.loans,t=e.deleteItem;return i.a.createElement(i.a.Fragment,null,i.a.createElement("table",{className:"loanList__table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"loanList__cell"},"Title"),i.a.createElement("th",{className:"loanList__cell"},"Autor"),i.a.createElement("th",{className:"loanList__cell"},"Data wypo\u017cyczenia"),i.a.createElement("th",{className:"loanList__cell"},"Data oddania"),i.a.createElement("th",{className:"loanList__cell"},"Pozosta\u0142o"),i.a.createElement("th",{className:"loanList__cell"}))),i.a.createElement("tbody",null,n.map(function(e){return i.a.createElement(a,{loan:e,key:e._id,deleteItem:t})}))))}var r=t(3),i=t.n(r),s=t(532),l=t(537),A=(t.n(l),function(e){return e<0?i.a.createElement("span",{className:"loanList__outdated"},e):i.a.createElement("span",{className:""},e)});n.a=o},537:function(e,n,t){var a=t(538);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(512)(a,o);a.locals&&(e.exports=a.locals)},538:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".loanList__table{border:1px solid #000;font-size:1em;margin-top:25px}.loanList__cell{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border:1px solid #000;padding:8px 35px;text-align:center}.loanList__outdated{color:red}","",{version:3,sources:["F:/Projekty/Libros/frontend/src/components/UserLoanList/index.css"],names:[],mappings:"AAAA,iBACE,sBAAwB,AACxB,cAAe,AACf,eAAiB,CAClB,AAED,gBACE,0BAA2B,AAC3B,uBAAwB,AACxB,kBAAmB,AACnB,sBAAwB,AACxB,iBAA2B,AAC3B,iBAAmB,CACpB,AAED,oBACE,SAAW,CACZ",file:"index.css",sourcesContent:[".loanList__table {\n  border: 1px solid black;\n  font-size: 1em;\n  margin-top: 25px;\n}\n\n.loanList__cell {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid black;\n  padding: 8px 35px 8px 35px;\n  text-align: center;\n}\n\n.loanList__outdated {\n  color: red;\n}"],sourceRoot:""}])},587:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(33),i=t(588);t.n(i);n.a=function(e){var n=e.user,t=e.logout;return o.a.createElement("div",{className:"profileBar d-flex flex-column align-items-center"},o.a.createElement("h2",{className:"profileBar__username"},n.username),o.a.createElement("div",{className:"profileBar__links col-8"},o.a.createElement("button",{className:"profileBar__btn",onClick:t},"Wyloguj"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/"},"Zarezerwuj ksi\u0105\u017cke"),1===n.permission?o.a.createElement(o.a.Fragment,null,o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/addBook"},"Dodaj ksi\u0105\u017cke"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/removeBook"},"Usu\u0144 ksi\u0105\u017cke"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/loan"},"Wypo\u017cycz"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/users/0"},"U\u017cytkownicy"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/loans/0"},"Wypo\u017cyczenia"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/addPublisher"},"Dodaj wydawnictwo"),o.a.createElement(r.b,{className:"profileBar__btn",to:"/admin/addCategory"},"Dodaj kategorie")):null))}},588:function(e,n,t){var a=t(589);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(512)(a,o);a.locals&&(e.exports=a.locals)},589:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".profileBar{min-width:30%;padding:35px;margin-top:25px}.profileBar__links{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100%}.profileBar__btn{display:inline-block;vertical-align:middle;text-align:center;white-space:nowrap;background:#991313;padding:.375rem .75rem;margin:10px;border:1px solid transparent;border-radius:.25rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;font-size:1rem;line-height:1.5;color:#fff;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-o-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.profileBar__btn:hover{text-decoration:none;color:#fff;background:#b12323}","",{version:3,sources:["F:/Projekty/Libros/frontend/src/components/ProfileBar/index.css"],names:[],mappings:"AAAA,YACE,cAAe,AACf,aAAc,AACd,eAAiB,CAClB,AAED,mBACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,eAAiB,CAClB,AAED,iBACE,qBAAsB,AACtB,sBAAuB,AACvB,kBAAmB,AACnB,mBAAoB,AAEpB,mBAAoB,AAEpB,uBAA0B,AAC1B,YAAa,AACb,6BAA8B,AAC9B,qBAAuB,AAEvB,yBAA0B,AAEvB,sBAAuB,AAEtB,qBAAsB,AAElB,iBAAkB,AAC1B,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,WAAa,AAEb,8IACuE,AAEvE,sIACuE,AAEvE,iIAC+D,AAE/D,8HAC+D,AAE/D,iKACqG,CACtG,AAED,uBACE,qBAAsB,AACtB,WAAa,AAEb,kBAAoB,CACrB",file:"index.css",sourcesContent:[".profileBar {\n  min-width: 30%;\n  padding: 35px;\n  margin-top: 25px;\n}\n\n.profileBar__links {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100%;\n}\n\n.profileBar__btn {\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  white-space: nowrap;\n\n  background: #991313;\n\n  padding: 0.375rem 0.75rem;\n  margin: 10px;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n\n  -webkit-user-select: none;\n\n     -moz-user-select: none;\n\n      -ms-user-select: none;\n\n          user-select: none;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: white;\n\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n\n.profileBar__btn:hover {\n  text-decoration: none;\n  color: white;\n\n  background: #b12323;\n}\n\n/*.profileBar__link {\n  background: #991313;\n  color: white;\n\n  display:flex;\n  min-width: fit-content;\n  max-width: 100%;\n  height: fit-content;\n  white-space: 0;\n  padding: 8px;\n  margin-top: 10px;\n  border: 0;\n  border-radius: 4px;\n} */\n"],sourceRoot:""}])},590:function(e,n,t){var a=t(591);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!1};o.transform=void 0;t(512)(a,o);a.locals&&(e.exports=a.locals)},591:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".profilePage__loanList{margin-top:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}","",{version:3,sources:["F:/Projekty/Libros/frontend/src/container/Profile/index.css"],names:[],mappings:"AAAA,uBACE,gBAAiB,AACjB,oBAAoB,AACpB,aAAa,AACb,qBAAsB,AAClB,sBAAwB,CAC7B",file:"index.css",sourcesContent:[".profilePage__loanList {\n  margin-top: 50px;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=1.02e1edde.chunk.js.map