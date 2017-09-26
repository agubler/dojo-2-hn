/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_hnpwa([0],{76:function(e,t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=n(1),c=n(10),a=n(13),u=n(80),p=n(81),l=n(78),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.properties.item;return e?[i.v("article",{classes:this.classes(l.article)},[i.v("h1",[i.v("a",{href:e.url,classes:this.classes(l.title)},[e.title])]),i.v("p",[(e.points||0)+" points",i.w(a.Link,{to:"user",params:{user:e.user||""},classes:this.classes(l.user)},[e.user?" by "+e.user:null])])]),i.v("div",{classes:this.classes(l.comments)},[i.v("h2",{classes:this.classes(l.commentCount)},[e.comments_count+" comments"]),i.v("div",e.comments.map(function(e,t){return i.w(u.Comment,{key:t,comment:e})}))])]:i.w(p.Loading,{})},t=o([c.theme(l)],t)}(c.ThemeableMixin(s.WidgetBase));t.Comments=f},77:function(e,t){e.exports={" _key":"comment",root:"pMN12bHs",padding:"UR0OJAIy",user:"_1dY2vtTm",time:"_2Qtl0SzL",comment:"_2va-73Cf"}},78:function(e,t){e.exports={" _key":"comments",article:"_2NGniQ8a",title:"_1L07Wn8k",user:"_3iYvUP2G",comments:"_2z1n0C37",commentCount:"_1lGsJjrS"}},79:function(e,t){e.exports={" _key":"loading",spinner:"_4Ju1HXhy","sk-scaleout":"hC-Nk2Mx"}},80:function(e,t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=n(1),c=n(10),a=n(13),u=n(77),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),n=t,t.prototype.render=function(){var e=this.properties.comment;return i.v("div",{classes:this.classes(u.root)},[i.v("header",{classes:this.classes(u.padding)},[i.w(a.Link,{to:"user",params:{user:e.user||""}},[e.user]),i.v("span",{classes:this.classes(u.time)},[e.time_ago])]),i.v("div",{innerHTML:e.content,classes:this.classes(u.comment)}),i.v("div",{classes:this.classes(u.padding)},e.comments.map(function(e,t){return i.w(n,{comment:e,key:t})}))])},t=n=o([c.theme(u)],t);var n}(c.ThemeableMixin(s.WidgetBase));t.Comment=p},81:function(e,t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),i=n(1),c=n(10),a=n(79),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return i.v("div",{key:this.properties.key,classes:this.classes(a.spinner)})},t=o([c.theme(a)],t)}(c.ThemeableMixin(s.WidgetBase));t.Loading=u}});
//# sourceMappingURL=Comments.js.map