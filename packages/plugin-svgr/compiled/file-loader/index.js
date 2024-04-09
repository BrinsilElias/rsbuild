(()=>{"use strict";var e={43:(e,t,i)=>{const r=i(86);e.exports=r.default;e.exports.raw=r.raw},86:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:true});t["default"]=loader;t.raw=void 0;var r=_interopRequireDefault(i(17));var o=i(72);var a=i(14);var n=_interopRequireDefault(i(284));var s=i(318);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function loader(e){const t=(0,o.getOptions)(this);(0,a.validate)(n.default,t,{name:"File Loader",baseDataPath:"options"});const i=t.context||this.rootContext;const u=t.name||"[contenthash].[ext]";const p=(0,o.interpolateName)(this,u,{context:i,content:e,regExp:t.regExp});let l=p;if(t.outputPath){if(typeof t.outputPath==="function"){l=t.outputPath(p,this.resourcePath,i)}else{l=r.default.posix.join(t.outputPath,p)}}let c=`__webpack_public_path__ + ${JSON.stringify(l)}`;if(t.publicPath){if(typeof t.publicPath==="function"){c=t.publicPath(p,this.resourcePath,i)}else{c=`${t.publicPath.endsWith("/")?t.publicPath:`${t.publicPath}/`}${p}`}c=JSON.stringify(c)}if(t.postTransformPublicPath){c=t.postTransformPublicPath(c)}if(typeof t.emitFile==="undefined"||t.emitFile){const t={};if(typeof u==="string"){let e=u;const i=e.indexOf("?");if(i>=0){e=e.substr(0,i)}const r=/\[([^:\]]+:)?(hash|contenthash)(:[^\]]+)?]/gi.test(e);if(r===true){t.immutable=true}}t.sourceFilename=(0,s.normalizePath)(r.default.relative(this.rootContext,this.resourcePath));this.emitFile(l,e,null,t)}const f=typeof t.esModule!=="undefined"?t.esModule:true;return`${f?"export default":"module.exports ="} ${c};`}const u=true;t.raw=u},318:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.normalizePath=normalizePath;function normalizePath(e,t){if(e==="\\"||e==="/"){return"/"}const i=e.length;if(i<=1){return e}let r="";if(i>4&&e[3]==="\\"){const t=e[2];if((t==="?"||t===".")&&e.slice(0,2)==="\\\\"){e=e.slice(2);r="//"}}const o=e.split(/[/\\]+/);if(t!==false&&o[o.length-1]===""){o.pop()}return r+o.join("/")}},14:e=>{e.exports=require("./schema-utils")},72:e=>{e.exports=require("@rsbuild/shared/loader-utils2")},17:e=>{e.exports=require("path")},284:e=>{e.exports=JSON.parse('{"additionalProperties":true,"properties":{"name":{"description":"The filename template for the target file(s) (https://github.com/webpack-contrib/file-loader#name).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"outputPath":{"description":"A filesystem path where the target file(s) will be placed (https://github.com/webpack-contrib/file-loader#outputpath).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"publicPath":{"description":"A custom public path for the target file(s) (https://github.com/webpack-contrib/file-loader#publicpath).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"postTransformPublicPath":{"description":"A custom transformation function for post-processing the publicPath (https://github.com/webpack-contrib/file-loader#posttransformpublicpath).","instanceof":"Function"},"context":{"description":"A custom file context (https://github.com/webpack-contrib/file-loader#context).","type":"string"},"emitFile":{"description":"Enables/Disables emit files (https://github.com/webpack-contrib/file-loader#emitfile).","type":"boolean"},"regExp":{"description":"A Regular Expression to one or many parts of the target file path. The capture groups can be reused in the name property using [N] placeholder (https://github.com/webpack-contrib/file-loader#regexp).","anyOf":[{"type":"string"},{"instanceof":"RegExp"}]},"esModule":{"description":"By default, file-loader generates JS modules that use the ES modules syntax.","type":"boolean"}},"type":"object"}')}};var t={};function __nccwpck_require__(i){var r=t[i];if(r!==undefined){return r.exports}var o=t[i]={exports:{}};var a=true;try{e[i](o,o.exports,__nccwpck_require__);a=false}finally{if(a)delete t[i]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var i=__nccwpck_require__(43);module.exports=i})();