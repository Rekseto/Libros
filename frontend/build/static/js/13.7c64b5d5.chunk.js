webpackJsonp([13],{516:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function o(e,n,t){function a(){n(t,e._id)}return s.a.createElement("li",{className:"addCategoryPage__category"},s.a.createElement("span",{className:"addCategoryPage__categoryName"},e.name),s.a.createElement("button",{onClick:a,className:"addCategoryPage__submitButton submitButton"},"Usu\u0144"))}Object.defineProperty(n,"__esModule",{value:!0});var l=t(3),s=t.n(l),A=t(95),c=t(524),d=t(564),m=t(565),f=(t.n(m),t(96)),g=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),u=function(e){function n(){a(this,n);var e=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.submit=e.submit.bind(e),e}return i(n,e),g(n,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"submit",value:function(e,n){e.preventDefault();var t=this.props.token;this.props.addCategory(t,n.name)}},{key:"render",value:function(){var e=this.props,n=e.categories,t=e.deleteCategory,a=e.token;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null),s.a.createElement("main",{className:"addCategoryPage"},s.a.createElement("section",{className:"addCategoryPage__section"},s.a.createElement("h2",null,"Dodaj kategori\u0119"),s.a.createElement(d.a,{submit:this.submit}),s.a.createElement("ul",{className:"addCategoryPage__list"},n.map(function(e){return o(e,t,a)})))))}}]),n}(l.Component),p=function(e){return{addCategory:function(n,t){e(f.a.categoriesAddRequest(n,t))},fetchCategories:function(){e(f.a.categoriesFetchRequest())},deleteCategory:function(n,t){e(f.a.categoriesRemoveRequest(n,t))}}},C=function(e){return{token:e.authStore.token,categories:e.categoriesStore.categories}};n.default=Object(A.b)(C,p)(u)},524:function(e,n,t){"use strict";var a=t(3),r=t.n(a),i=t(33),o=t(525);t.n(o);n.a=function(){return r.a.createElement("header",{className:"header flex-column flex-lg-row justify-content-lg-start"},r.a.createElement("h1",{className:"header__heading "},r.a.createElement(i.b,{className:"header__headingLink",to:"/"},r.a.createElement("img",{className:"header__headingLogo",src:"/images/logo.svg",alt:""}),"Libros")),r.a.createElement("nav",{className:"navigation d-flex justify-content-center justify-content-lg-start"},r.a.createElement("ul",{className:"navigation__list"},r.a.createElement("li",{className:"navigation__element"},r.a.createElement(i.b,{className:"navigation__link",to:"/search/0"},r.a.createElement("img",{src:"/images/search.svg","aria-hidden":"true",alt:""}),"Wyszukiwarka")),r.a.createElement("li",{className:"navigation__element"},r.a.createElement(i.b,{className:"navigation__link",to:"/profile"}," ",r.a.createElement("img",{src:"/images/profile.svg","aria-hidden":"true",alt:""})," Konto")))))}},525:function(e,n,t){var a=t(526);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;t(507)(a,r);a.locals&&(e.exports=a.locals)},526:function(e,n,t){n=e.exports=t(506)(!0),n.push([e.i,".header{background:#991313;display:-ms-flexbox;display:flex;min-height:8vh;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:1em;padding:15px}.header__heading{font-size:1.2em}.header__headingLink{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__headingLink:hover{color:#fff;text-decoration:none}.header__headingLogo{height:50px;margin-left:20px;margin-right:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header__login{width:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.header__loginLink{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff}.header__loginLink img{height:40px}.navigation{margin-left:40px;width:50%}.navigation__list{display:-ms-flexbox;display:flex;list-style-type:none;margin:0}.navigation__element{margin:5px}.navigation__link{color:#fff;text-decoration:none;font-family:Open Sans,sans-serif;background:#c61d1d;padding:8px;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.navigation__link img{width:24px;height:24px}.navigation__link:hover{color:#eee;text-decoration:none}.navigation__link:focus{color:#c0c6db;text-decoration:underline}","",{version:3,sources:["f:/Projekty/Libros/frontend/src/components/Header/index.css"],names:[],mappings:"AAAA,QACE,mBAAoB,AACpB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,cAAe,AACf,YAAc,CACf,AAED,iBACE,eAAiB,CAClB,AACD,qBACE,WAAa,AACb,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CAEzB,AACD,2BACE,WAAa,AACb,oBAAsB,CACvB,AAED,qBACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AACD,eACE,UAAW,AAEX,oBAAoB,AAEpB,aAAa,AACb,qBAAsB,AAClB,sBAAwB,CAC7B,AAED,mBACE,oBAAoB,AACpB,aAAa,AACb,sBAAuB,AACnB,mBAAoB,AACxB,UAAa,CACd,AACD,uBACE,WAAa,CACd,AAED,YACE,iBAAkB,AAClB,SAAW,CACZ,AACD,kBACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,QAAU,CACX,AAED,qBACE,UAAY,CACb,AACD,kBACE,WAAa,AACb,qBAAsB,AACtB,iCAAqC,AACrC,mBAAoB,AACpB,YAAa,AACb,kBAAmB,AAEnB,oBAAoB,AAEpB,aAAa,AACb,sBAAuB,AACnB,kBAAoB,CACzB,AAED,sBACE,WAAY,AACZ,WAAY,CACb,AAED,wBACE,WAAe,AACf,oBAAsB,CACvB,AAED,wBACE,cAAe,AACf,yBAA2B,CAC5B",file:"index.css",sourcesContent:['.header {\r\n  background: #991313;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 8vh;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  font-size: 1em;\r\n  padding: 15px;\r\n}\r\n\r\n.header__heading {\r\n  font-size: 1.2em;\r\n}\r\n.header__headingLink {\r\n  color: white;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n \r\n}\r\n.header__headingLink:hover {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.header__headingLogo {\r\n  height: 50px;\r\n  margin-left: 20px;\r\n  margin-right: 10px;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.header__login {\r\n  width: 50%;\r\n\r\n  display:-ms-flexbox;\r\n\r\n  display:flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n}\r\n\r\n.header__loginLink {\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  color: white;\r\n}\r\n.header__loginLink img {\r\n  height: 40px;\r\n}\r\n\r\n.navigation {\r\n  margin-left: 40px;\r\n  width: 50%;\r\n}\r\n.navigation__list {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n\r\n.navigation__element {\r\n  margin: 5px;\r\n}\r\n.navigation__link {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-family: "Open Sans", sans-serif;\r\n  background: #c61d1d;\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n\r\n  display:-ms-flexbox;\r\n\r\n  display:flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.navigation__link img {\r\n  width: 24px;\r\n  height:24px;\r\n}\r\n\r\n.navigation__link:hover {\r\n  color: #eeeeee;\r\n  text-decoration: none;\r\n}\r\n\r\n.navigation__link:focus {\r\n  color: #c0c6db;\r\n  text-decoration: underline;\r\n}'],sourceRoot:""}])},564:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var l=t(3),s=t.n(l),A=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=function(e){function n(){r(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={name:""},e.onChange=e.onChange.bind(e),e}return o(n,e),A(n,[{key:"componentDidMount",value:function(){this.setState({isbn:this.props.isbn})}},{key:"onChange",value:function(e){this.setState(a({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,n=this.state,t=this.onChange;return s.a.createElement("form",{className:"addCategoryForm",onSubmit:function(t){return e.props.submit(t,n)}},s.a.createElement("div",{className:"addCategoryForm__inputGroup inputGroup"},s.a.createElement("label",{htmlFor:"name"},"Kategoria"),s.a.createElement("input",{className:"addCategoryForm__textInput textInput",type:"text",id:"name",name:"name",onChange:t,value:this.state.name,required:!0})),s.a.createElement("input",{className:"addCategoryForm__submit submitButton",type:"submit",value:"Dodaj kategorie"}))}}]),n}(l.Component);n.a=c},565:function(e,n,t){var a=t(566);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!1};r.transform=void 0;t(507)(a,r);a.locals&&(e.exports=a.locals)},566:function(e,n,t){n=e.exports=t(506)(!0),n.push([e.i,".addCategoryPage__section{width:100%;padding:90px}.addCategoryForm,.addCategoryPage__section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.addCategoryForm{-ms-flex-line-pack:center;align-content:center}.addCategoryPage__list{list-style-type:none;margin-top:60px}.addCategoryPage__category{display:grid;grid-template-columns:80% auto;-ms-flex-align:center;align-items:center}","",{version:3,sources:["f:/Projekty/Libros/frontend/src/container/AddCategoryPage/index.css"],names:[],mappings:"AAAA,0BACE,WAAY,AACZ,YAAc,CAOf,AAED,2CARE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,kBAAoB,CAYzB,AATD,iBAOE,0BAA2B,AACvB,oBAAsB,CAC3B,AAED,uBACE,qBAAsB,AACtB,eAAiB,CAClB,AACD,2BACE,aAAc,AACd,+BAAgC,AAChC,sBAAuB,AACnB,kBAAoB,CACzB",file:"index.css",sourcesContent:[".addCategoryPage__section {\n  width: 100%;\n  padding: 90px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.addCategoryForm {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.addCategoryPage__list {\n  list-style-type: none;\n  margin-top: 60px;\n}\n.addCategoryPage__category {\n  display: grid;\n  grid-template-columns: 80% auto;\n  -ms-flex-align: center;\n      align-items: center;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=13.7c64b5d5.chunk.js.map