webpackJsonp([12],{519:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=t(3),s=t.n(r),A=t(96),l=t(529),c=t(563),m=t(564),d=(t.n(m),t(100)),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),f=function(e){function n(){a(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.submit=e.submit.bind(e),e}return o(n,e),u(n,[{key:"submit",value:function(e,n){e.preventDefault(),this.props.addLoan(Object.assign({},n,{token:this.props.token}))}},{key:"render",value:function(){var e=this.props.book;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null),s.a.createElement("main",{className:"addLoanPage"},s.a.createElement("section",{className:"addLoanPage__section"},s.a.createElement(c.a,{isbn:e.isbn,submit:this.submit}))))}}]),n}(r.Component),p=function(e){return{addLoan:function(n){return e(d.b.addLoanRequest(n))}}},B=function(e){return{token:e.authStore.token,book:e.bookStore.book}};n.default=Object(A.b)(B,p)(f)},529:function(e,n,t){"use strict";var a=t(3),i=t.n(a),o=t(33),r=t(530);t.n(r);n.a=function(){return i.a.createElement("header",{className:"header flex-column flex-lg-row justify-content-lg-start"},i.a.createElement("h1",{className:"header__heading "},i.a.createElement(o.b,{className:"header__headingLink",to:"/"},i.a.createElement("img",{className:"header__headingLogo",src:"/images/logo.svg",alt:""}),"Libros")),i.a.createElement("nav",{className:"navigation d-flex justify-content-center justify-content-lg-start"},i.a.createElement("ul",{className:"navigation__list"},i.a.createElement("li",{className:"navigation__element"},i.a.createElement(o.b,{className:"navigation__link",to:"/search/0"},i.a.createElement("img",{src:"/images/search.svg","aria-hidden":"true",alt:""}),"Wyszukiwarka")),i.a.createElement("li",{className:"navigation__element"},i.a.createElement(o.b,{className:"navigation__link",to:"/profile"}," ",i.a.createElement("img",{src:"/images/profile.svg","aria-hidden":"true",alt:""})," Konto")))))}},530:function(e,n,t){var a=t(531);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!1};i.transform=void 0;t(512)(a,i);a.locals&&(e.exports=a.locals)},531:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".header{background:#991313;display:-ms-flexbox;display:flex;min-height:8vh;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:1em;padding:15px}.header__heading{font-size:1.2em}.header__headingLink{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__headingLink:hover{color:#fff;text-decoration:none}.header__headingLogo{height:50px;margin-left:20px;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__login{width:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header__loginLink{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff}.header__loginLink img{height:40px}.navigation{margin-left:40px;width:50%}.navigation__list{display:-ms-flexbox;display:flex;list-style-type:none;margin:0}.navigation__element{margin:5px}.navigation__link{color:#fff;text-decoration:none;font-family:Open Sans,sans-serif;background:#c61d1d;padding:8px;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navigation__link img{width:24px;height:24px}.navigation__link:hover{color:#eee;text-decoration:none}.navigation__link:focus{color:#c0c6db;text-decoration:underline}","",{version:3,sources:["/projects/Libros/frontend/src/components/Header/index.css"],names:[],mappings:"AAAA,QACE,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,cAAe,AACf,YAAc,CACf,AAED,iBACE,eAAiB,CAClB,AACD,qBACE,WAAa,AACb,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CAEzB,AACD,2BACE,WAAa,AACb,oBAAsB,CACvB,AAED,qBACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AACD,eACE,UAAW,AAEX,oBAAoB,AAEpB,aAAa,AACb,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,mBACE,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,mBAAoB,AACxB,UAAa,CACd,AACD,uBACE,WAAa,CACd,AAED,YACE,iBAAkB,AAClB,SAAW,CACZ,AACD,kBACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,QAAU,CACX,AAED,qBACE,UAAY,CACb,AACD,kBACE,WAAa,AACb,qBAAsB,AACtB,iCAAqC,AACrC,mBAAoB,AACpB,YAAa,AACb,kBAAmB,AAEnB,oBAAoB,AAEpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AAED,sBACE,WAAY,AACZ,WAAY,CACb,AAED,wBACE,WAAe,AACf,oBAAsB,CACvB,AAED,wBACE,cAAe,AACf,yBAA2B,CAC5B",file:"index.css",sourcesContent:['.header {\n  background: #991313;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 8vh;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 1em;\n  padding: 15px;\n}\n\n.header__heading {\n  font-size: 1.2em;\n}\n.header__headingLink {\n  color: white;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align: center;\n      align-items: center;\n \n}\n.header__headingLink:hover {\n  color: white;\n  text-decoration: none;\n}\n\n.header__headingLogo {\n  height: 50px;\n  margin-left: 20px;\n  margin-right: 10px;\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.header__login {\n  width: 50%;\n\n  display:-ms-flexbox;\n\n  display:flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.header__loginLink {\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-align: center;\n      align-items: center;\n  color: white;\n}\n.header__loginLink img {\n  height: 40px;\n}\n\n.navigation {\n  margin-left: 40px;\n  width: 50%;\n}\n.navigation__list {\n  display: -ms-flexbox;\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n}\n\n.navigation__element {\n  margin: 5px;\n}\n.navigation__link {\n  color: white;\n  text-decoration: none;\n  font-family: "Open Sans", sans-serif;\n  background: #c61d1d;\n  padding: 8px;\n  border-radius: 4px;\n\n  display:-ms-flexbox;\n\n  display:flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.navigation__link img {\n  width: 24px;\n  height:24px;\n}\n\n.navigation__link:hover {\n  color: #eeeeee;\n  text-decoration: none;\n}\n\n.navigation__link:focus {\n  color: #c0c6db;\n  text-decoration: underline;\n}'],sourceRoot:""}])},563:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s=t(3),A=t.n(s),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=function(e){function n(){i(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={username:"",isbn:0,days:0},e.onChange=e.onChange.bind(e),e}return r(n,e),l(n,[{key:"componentDidMount",value:function(){this.setState({isbn:this.props.isbn})}},{key:"onChange",value:function(e){this.setState(a({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,n=this.state,t=this.onChange;return A.a.createElement("form",{className:"addLoanForm",onSubmit:function(t){return e.props.submit(t,n)}},A.a.createElement("div",{className:"addLoanForm__inputGroup inputGroup"},A.a.createElement("label",{htmlFor:"username"},"Nazwa u\u017cytkownika"),A.a.createElement("input",{className:"addLoanForm__textInput textInput",type:"text",id:"username",name:"username",onChange:t,value:this.state.username,required:!0})),A.a.createElement("div",{className:"addLoanForm__inputGroup inputGroup"},A.a.createElement("label",{htmlFor:"isbn"},"ISBN"),A.a.createElement("input",{className:"addLoanForm__textInput textInput",type:"number",id:"isbn",name:"isbn",onChange:t,value:this.state.isbn,required:!0,min:"0"})),A.a.createElement("div",{className:"addLoanForm__inputGroup inputGroup"},A.a.createElement("label",{htmlFor:"days"},"Dni wypo\u017cyczenia"),A.a.createElement("input",{className:"addLoanForm__textInput textInput",type:"number",id:"days",name:"days",onChange:t,value:this.state.days,required:!0})),A.a.createElement("input",{className:"addLoanForm__submit submitButton",type:"submit",value:"Wypo\u017cycz"}))}}]),n}(s.Component);n.a=c},564:function(e,n,t){var a=t(565);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!1};i.transform=void 0;t(512)(a,i);a.locals&&(e.exports=a.locals)},565:function(e,n,t){n=e.exports=t(511)(!0),n.push([e.i,".addLoanPage__section{width:100%;padding:90px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.addLoanForm{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}","",{version:3,sources:["/projects/Libros/frontend/src/container/AddLoanPage/index.css"],names:[],mappings:"AAAA,sBACI,WAAY,AACZ,aAAc,AACd,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,sBAAwB,CAC3B,AAED,aACE,oBAAoB,AACpB,aAAa,AACb,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,mBAAoB,AACxB,0BAA2B,AACvB,oBAAsB,CAC3B",file:"index.css",sourcesContent:[".addLoanPage__section {\n    width: 100%;\n    padding: 90px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n}\n\n.addLoanForm {\n  display:-ms-flexbox;\n  display:flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=12.1ad90100.chunk.js.map