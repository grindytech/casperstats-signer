!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,(function(){return(()=>{"use strict";var e={607:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(815),t)},815:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}s((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.Transfer=void 0;var i=r(979),u=r(446),a=function(){function e(e){this.rpc_api=e}return e.build_arguments=function(e,t,r,n,o){return{from_public_key:i.CLPublicKey.fromHex(e),to_public_key:i.CLPublicKey.fromHex(t),amount:u.BigNumber.from(r),fee:u.BigNumber.from(n),id:u.BigNumber.from(o)}},e.build_deploy=function(e,t,r,n,o,u){var a;a=new i.DeployUtil.DeployParams(t,e,1,18e5);var s=i.DeployUtil.ExecutableDeployItem.newTransfer(n,r,void 0,u),c=i.DeployUtil.standardPayment(o);return i.DeployUtil.makeDeploy(a,s,c)},e.prototype.broadcast_deploy=function(e,t){return n(this,void 0,void 0,(function(){var r;return o(this,(function(n){switch(n.label){case 0:return r=new i.DeployUtil.Deploy(e.hash,e.header,e.payment,e.session,t),[4,new i.CasperServiceByJsonRPC(this.rpc_api).deploy(r)];case 1:return[2,n.sent()]}}))}))},e.prototype.sign_deploy=function(e,t){return n(this,void 0,void 0,(function(){var r;return o(this,(function(n){switch(n.label){case 0:return r=i.DeployUtil.deployToJson(t),[4,i.Signer.sign(r,e,e)];case 1:return[2,n.sent().approvals]}}))}))},e.prototype.make_transfer=function(t,r,i,u,a,s){return n(this,void 0,void 0,(function(){var n,c,l;return o(this,(function(o){switch(o.label){case 0:return n=e.build_arguments(r,i,u,a,s),c=e.build_deploy(t,n.from_public_key,n.to_public_key,n.amount,n.fee,s),[4,this.sign_deploy(r,c)];case 1:return l=o.sent(),[4,this.broadcast_deploy(c,l)];case 2:return[2,o.sent()]}}))}))},e}();t.Transfer=a},446:e=>{e.exports=require("@ethersproject/bignumber")},979:e=>{e.exports=require("casper-js-sdk")}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(607)})()}));