webpackJsonp([1],{441:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c,u=n(93),l=(n.n(u),n(94)),s=n.n(l),p=n(89),f=(n.n(p),n(90)),h=n.n(f),b=n(37),g=(n.n(b),n(49)),y=n.n(g),m=n(157),d=(n.n(m),n(158)),v=n.n(d),w=n(87),O=(n.n(w),n(88)),j=n.n(O),C=n(161),E=(n.n(C),n(162)),_=n.n(E),A=n(0),k=n.n(A),P=n(445),T=n(15),x=n(50),W=n(17),B=n(449),U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),L=(i=Object(T.b)(function(e){return e.user},{login:x.d,jumpUrl:x.b,errorMsg:x.a}))(c=Object(B.a)(c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.register=n.register.bind(n),n.handleLogin=n.handleLogin.bind(n),n}return a(t,e),U(t,[{key:"register",value:function(){this.props.jumpUrl("/register"),this.props.history.push("/register")}},{key:"handleLogin",value:function(){this.props.login(this.props.state)}},{key:"componentDidUpdate",value:function(){this.props.msg&&(_.a.info(this.props.msg,3),this.props.errorMsg(""))}},{key:"render",value:function(){var e=this;return k.a.createElement("div",null,k.a.createElement(s.a,null,this.props.redirectTo&&"/login"!==this.props.redirectTo?k.a.createElement(W.b,{to:this.props.redirectTo}):null,k.a.createElement(j.a,null),k.a.createElement(P.a,null),k.a.createElement(j.a,null),k.a.createElement(y.a,null,k.a.createElement(v.a,{onChange:function(t){return e.props.handleChange("user",t)}},"\u7528\u6237"),k.a.createElement(v.a,{type:"password",onChange:function(t){return e.props.handleChange("pwd",t)}},"\u5bc6\u7801")),k.a.createElement(j.a,null),k.a.createElement(h.a,{type:"primary",onClick:this.handleLogin},"\u767b\u5f55"),k.a.createElement(j.a,null),k.a.createElement(h.a,{onClick:this.register,type:"primary"},"\u6ce8\u518c")))}}]),t}(k.a.Component))||c)||c;t.default=L},445:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),u=n(446),l=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"logoWrapper"},c.a.createElement("img",{src:n(448),alt:""}))}}]),t}(c.a.Component);t.a=s},446:function(e,t,n){var r=n(447);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(440)(r,o);r.locals&&(e.exports=r.locals)},447:function(e,t,n){t=e.exports=n(439)(!0),t.push([e.i,".logoWrapper{width:100%;text-align:center;background:#fff}.logoWrapper img{width:100%}","",{version:3,sources:["/Users/bianguilong/MyWork/jobChat/src/component/logo/logo.css"],names:[],mappings:"AAAA,aACE,WAAY,AACZ,kBAAmB,AACnB,eAAiB,CAClB,AAED,iBACE,UAAY,CACb",file:"logo.css",sourcesContent:[".logoWrapper {\n  width: 100%;\n  text-align: center;\n  background: #fff;\n}\n\n.logoWrapper img {\n  width: 100%;\n}"],sourceRoot:""}])},448:function(e,t,n){e.exports=n.p+"static/media/jobChat.e3dc8103.jpg"},449:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return function(t){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t.handleChange=t.handleChange.bind(t),t}return i(n,t),s(n,[{key:"handleChange",value:function(e,t){this.setState(r({},e,t))}},{key:"render",value:function(){return l.a.createElement(e,Object.assign({handleChange:this.handleChange,state:this.state},this.props))}}]),n}(l.a.Component)}t.a=c;var u=n(0),l=n.n(u),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()}});
//# sourceMappingURL=1.b2549af7.chunk.js.map