webpackJsonp([8],{525:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),A=t.n(o),l=t(96),s=t(529),c=t(581),f=t(582),m=(t.n(f),t(99)),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),p=function(e){function n(){r(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.submit=e.submit.bind(e),e}return i(n,e),u(n,[{key:"submit",value:function(e,n){e.preventDefault(),this.props.removeBook(Object.assign({},n,{token:this.props.token}))}},{key:"render",value:function(){return A.a.createElement(A.a.Fragment,null,A.a.createElement(s.a,null),A.a.createElement("main",{className:"removeBookPage"},A.a.createElement("section",{className:"removeBookPage__section"},A.a.createElement(c.a,{submit:this.submit}))))}}]),n}(o.Component),B=function(e){return{removeBook:function(n){return e(m.a.bookRemoveRequest(n))}}},d=function(e){return{token:e.authStore.token}};n.default=Object(l.b)(d,B)(p)},529:function(e,n,t){"use strict";var r=t(3),a=t.n(r),i=t(33),o=t(530);t.n(o);n.a=function(){return a.a.createElement("header",{className:"header flex-column flex-lg-row justify-content-lg-start"},a.a.createElement("h1",{className:"header__heading "},a.a.createElement(i.b,{className:"header__headingLink",to:"/"},a.a.createElement("img",{className:"header__headingLogo",src:"/images/logo.svg",alt:""}),"Libros")),a.a.createElement("nav",{className:"navigation d-flex justify-content-center justify-content-lg-start"},a.a.createElement("ul",{className:"navigation__list"},a.a.createElement("li",{className:"navigation__element"},a.a.createElement(i.b,{className:"navigation__link",to:"/search/0"},a.a.createElement("img",{src:"/images/search.svg","aria-hidden":"true",alt:""}),"Wyszukiwarka")),a.a.createElement("li",{className:"navigation__element"},a.a.createElement(i.b,{className:"navigation__link",to:"/profile"}," ",a.a.createElement("img",{src:"/images/profile.svg","aria-hidden":"true",alt:""})," Konto")))))}},530:function(e,n,t){var r=t(531);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(512)(r,a);r.locals&&(e.exports=r.locals)},531:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".header{background:#991313;display:-ms-flexbox;display:flex;min-height:8vh;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:1em;padding:15px}.header__heading{font-size:1.2em}.header__headingLink{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__headingLink:hover{color:#fff;text-decoration:none}.header__headingLogo{height:50px;margin-left:20px;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__login{width:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header__loginLink{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff}.header__loginLink img{height:40px}.navigation{margin-left:40px;width:50%}.navigation__list{display:-ms-flexbox;display:flex;list-style-type:none;margin:0}.navigation__element{margin:5px}.navigation__link{color:#fff;text-decoration:none;font-family:Open Sans,sans-serif;background:#c61d1d;padding:8px;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navigation__link img{width:24px;height:24px}.navigation__link:hover{color:#eee;text-decoration:none}.navigation__link:focus{color:#c0c6db;text-decoration:underline}","",{version:3,sources:["F:/Projekty/Libros/frontend/src/components/Header/index.css"],names:[],mappings:"AAAA,QACE,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,cAAe,AACf,YAAc,CACf,AAED,iBACE,eAAiB,CAClB,AACD,qBACE,WAAa,AACb,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CAEzB,AACD,2BACE,WAAa,AACb,oBAAsB,CACvB,AAED,qBACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AACD,eACE,UAAW,AAEX,oBAAoB,AAEpB,aAAa,AACb,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,mBACE,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,mBAAoB,AACxB,UAAa,CACd,AACD,uBACE,WAAa,CACd,AAED,YACE,iBAAkB,AAClB,SAAW,CACZ,AACD,kBACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,QAAU,CACX,AAED,qBACE,UAAY,CACb,AACD,kBACE,WAAa,AACb,qBAAsB,AACtB,iCAAqC,AACrC,mBAAoB,AACpB,YAAa,AACb,kBAAmB,AAEnB,oBAAoB,AAEpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AAED,sBACE,WAAY,AACZ,WAAY,CACb,AAED,wBACE,WAAe,AACf,oBAAsB,CACvB,AAED,wBACE,cAAe,AACf,yBAA2B,CAC5B",file:"index.css",sourcesContent:['.header {\r\n  background: #991313;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 8vh;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  font-size: 1em;\r\n  padding: 15px;\r\n}\r\n\r\n.header__heading {\r\n  font-size: 1.2em;\r\n}\r\n.header__headingLink {\r\n  color: white;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n \r\n}\r\n.header__headingLink:hover {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.header__headingLogo {\r\n  height: 50px;\r\n  margin-left: 20px;\r\n  margin-right: 10px;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.header__login {\r\n  width: 50%;\r\n\r\n  display:-ms-flexbox;\r\n\r\n  display:flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n\r\n.header__loginLink {\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  color: white;\r\n}\r\n.header__loginLink img {\r\n  height: 40px;\r\n}\r\n\r\n.navigation {\r\n  margin-left: 40px;\r\n  width: 50%;\r\n}\r\n.navigation__list {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n\r\n.navigation__element {\r\n  margin: 5px;\r\n}\r\n.navigation__link {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-family: "Open Sans", sans-serif;\r\n  background: #c61d1d;\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n\r\n  display:-ms-flexbox;\r\n\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.navigation__link img {\r\n  width: 24px;\r\n  height:24px;\r\n}\r\n\r\n.navigation__link:hover {\r\n  color: #eeeeee;\r\n  text-decoration: none;\r\n}\r\n\r\n.navigation__link:focus {\r\n  color: #c0c6db;\r\n  text-decoration: underline;\r\n}'],sourceRoot:""}])},581:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var A=t(3),l=t.n(A),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=function(e){function n(){a(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={isbn:0},e.onChange=e.onChange.bind(e),e}return o(n,e),s(n,[{key:"onChange",value:function(e){this.setState(r({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,n=this.state,t=this.onChange;return l.a.createElement("form",{className:"removeBookForm",onSubmit:function(t){return e.props.submit(t,n)}},l.a.createElement("div",{className:"removeBookForm__inputGroup inputGroup"},l.a.createElement("label",{htmlFor:"isbn"},"ISBN"),l.a.createElement("input",{className:"removeBookForm__textInput textInput",type:"number",id:"isbn",name:"isbn",min:"0",onChange:t,value:this.state.isbn,required:!0})),l.a.createElement("input",{className:"removeBookForm__submit submitButton",type:"submit",value:"Usu\u0144 ksi\u0105\u017cke"}))}}]),n}(A.Component);n.a=c},582:function(e,n,t){var r=t(583);"string"===typeof r&&(r=[[e.i,r,""]]);var a={hmr:!1};a.transform=void 0;t(512)(r,a);r.locals&&(e.exports=r.locals)},583:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".removeBookPage__section{width:100%;padding:90px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.removeBookForm{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}","",{version:3,sources:["F:/Projekty/Libros/frontend/src/container/RemoveBookPage/index.css"],names:[],mappings:"AAAA,yBACE,WAAY,AACZ,aAAc,AACd,oBAAoB,AACpB,aAAa,AACb,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,gBACE,oBAAoB,AACpB,aAAa,AACb,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,oBAAsB,CAC3B",file:"index.css",sourcesContent:[".removeBookPage__section {\n  width: 100%;\n  padding: 90px;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.removeBookForm {\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=8.97bfa645.chunk.js.map