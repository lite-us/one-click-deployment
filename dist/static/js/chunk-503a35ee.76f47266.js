(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-503a35ee"],{"3cd1":function(t,n,e){"use strict";var s=e("d587"),o=e.n(s);o.a},6505:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"tron-content"},[e("div",{staticClass:"tron-filter-section"},[e("div",[e("el-steps",{attrs:{active:t.currentStep,"align-center":"",type:"mini"}},[e("el-step",{attrs:{title:t.$t("tronPluginConsensusModule")},on:{click:function(n){return t.stepClickFun(1)}}}),t._v(" "),e("el-step",{attrs:{title:t.$t("tronPluginTransactionModule")},on:{click:function(n){return t.stepClickFun(2)}}}),t._v(" "),e("el-step",{attrs:{title:t.$t("tronPluginDatabaseModule")},on:{click:function(n){return t.stepClickFun(3)}}})],1)],1)]),t._v(" "),1==t.currentStep?e("el-form",{ref:"pluginOnsensusDialogForm",staticClass:"pluginSettingForm",attrs:{model:t.pluginOnsensusForm,rules:t.pluginRules,"label-position":"left"}},[e("el-row",{attrs:{gutter:12}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{on:{click:function(n){t.baseContentShow=!t.baseContentShow}}},[e("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronPluginConsensusModule"))+"\n                        ")]),t._v(" "),t.baseContentShow?e("div",[e("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{prop:"consensus"}},[e("el-radio-group",{model:{value:t.pluginOnsensusForm.consensus,callback:function(n){t.$set(t.pluginOnsensusForm,"consensus",n)},expression:"pluginOnsensusForm.consensus"}},[e("el-radio",{attrs:{label:"dpos"}},[t._v("DPOS")]),t._v(" "),e("el-radio",{attrs:{label:"pbft"}},[t._v("PBFT")]),t._v(" "),e("br"),t._v(" "),e("el-radio",{staticStyle:{margin:"15px 0"},attrs:{label:3}},[t._v(t._s(t.$t("tronPluginCustomConsensusModule"))+"：")])],1),t._v(" "),e("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.pluginOnsensusForm.consensusContent,callback:function(n){t.$set(t.pluginOnsensusForm,"consensusContent",n)},expression:"pluginOnsensusForm.consensusContent"}})],1)],1):t._e()])],1)],1),t._v(" "),e("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[e("router-link",{attrs:{to:{path:"/setting/list"}}},[e("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("tronSettingPreviousStep")))])],1),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.saveData("pluginOnsensusDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1):t._e(),t._v(" "),2==t.currentStep?e("el-form",{ref:"transcationDialogForm",staticClass:"transcationDialogForm",attrs:{model:t.pluginTransactionForm,rules:t.transcationRules,"label-position":"left"}},[e("el-row",{attrs:{gutter:12}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{on:{click:function(n){t.transcationContentShow=!t.transcationContentShow}}},[e("i",{class:t.transcationContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronPluginTransactionModule"))+"\n                        ")]),t._v(" "),t.transcationContentShow?e("div",[e("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{prop:"transaction"}},[e("el-checkbox-group",{model:{value:t.pluginTransactionForm.transaction,callback:function(n){t.$set(t.pluginTransactionForm,"transaction",n)},expression:"pluginTransactionForm.transaction"}},[e("el-checkbox",{attrs:{label:"AccountUpdate"}}),t._v(" "),e("el-checkbox",{attrs:{label:"TransferaSSET"}}),t._v(" "),e("el-checkbox",{attrs:{label:"VoteWitness"}}),t._v(" "),e("el-checkbox",{attrs:{label:"AccountCreate"}}),t._v(" "),e("el-checkbox",{attrs:{label:"UnfreezeAsset"}}),t._v(" "),e("el-checkbox",{attrs:{label:"FreezeBalance"}}),t._v(" "),e("el-checkbox",{attrs:{label:"UpdateAsset"}}),t._v(" "),e("el-checkbox",{attrs:{label:"SetAccountId"}}),t._v(" "),e("br"),t._v(" "),e("el-checkbox",{staticStyle:{margin:"15px 0"},attrs:{label:9}},[t._v(t._s(t.$t("tronPluginCustomTradingModule")))]),t._v(" "),e("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.pluginTransactionForm.transactionContent,callback:function(n){t.$set(t.pluginTransactionForm,"transactionContent",n)},expression:"pluginTransactionForm.transactionContent"}})],1)],1)],1):t._e()])],1)],1),t._v(" "),e("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.previousStepFun()}}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.saveTranstionData("transcationDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1):t._e(),t._v(" "),3==t.currentStep?e("el-form",{ref:"dbFormDialogForm",staticClass:"dbSettingForm",attrs:{model:t.plugindbForm,rules:t.plugindbRules,"label-width":"200px","label-position":"left"}},[3==t.currentStep?e("el-row",{attrs:{gutter:12}},[e("el-col",{attrs:{span:24}},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{on:{click:function(n){t.dbsettingContentShow=!t.dbsettingContentShow}}},[e("i",{class:t.dbsettingContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronPluginTransactionModule"))+"\n                        ")]),t._v(" "),t.dbsettingContentShow?e("div",[e("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"dbsetting",prop:"dbsetting"}},[e("el-radio-group",{model:{value:t.plugindbForm.dbsetting,callback:function(n){t.$set(t.plugindbForm,"dbsetting",n)},expression:"plugindbForm.dbsetting"}},[e("el-radio",{attrs:{label:"leveldb"}},[t._v("leveldb")]),t._v(" "),e("el-radio",{attrs:{label:"rockdb"}},[t._v("rockdb")]),t._v(" "),e("br"),t._v(" "),e("el-radio",{staticStyle:{margin:"15px 0"},attrs:{label:3}},[t._v(t._s(t.$t("tronPluginCustomDatabaseModule")))])],1),t._v(" "),e("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.plugindbForm.dbsettingContent,callback:function(n){t.$set(t.plugindbForm,"dbsettingContent",n)},expression:"plugindbForm.dbsettingContent"}})],1)],1):t._e()])],1)],1):t._e(),t._v(" "),e("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.previousStepFun()}}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.saveDBData("dbFormDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1):t._e()],1)])},o=[],r=(e("ac6a"),e("c5f6"),e("75fc")),i=e("b775");function a(){return Object(i["a"])({url:"/pluginConfig",method:"get"})}function l(t){return Object(i["a"])({url:"/dbEngine",method:"post",params:t})}function c(t){return Object(i["a"])({url:"/transaction",headers:{"Content-Type":"application/json"},transformRequest:[function(t){return t=JSON.stringify(t),t}],method:"post",data:t})}function u(t){return Object(i["a"])({url:"/consensus",method:"post",params:t})}var g={name:"pluginlist",data:function(){return{currentStep:1,baseContentShow:!0,transcationContentShow:!0,dbsettingContentShow:!0,pluginOnsensusForm:{consensus:"dpos",consensusContent:""},pluginTransactionForm:{transaction:[],transactionContent:""},plugindbForm:{dbsetting:"leveldb",dbsettingContent:""},pluginRules:{consensus:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]},transcationRules:{transaction:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]},plugindbRules:{dbsetting:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]}}},created:function(){this.pluginConfigFun(),this.getCurrentStepFun()},methods:{pluginConfigFun:function(){var t=this;a().then((function(t){return t.data})).then((function(n){"dpos"!=n.consensus&&"pbft"!=n.consensus?t.pluginOnsensusForm={consensus:3,consensusContent:n.consensus}:t.pluginOnsensusForm={consensus:n.consensus,consensusContent:""},""!=n.customTransaction?(t.pluginTransactionForm.transactionContent=n.customTransaction,t.pluginTransactionForm.transaction=[].concat(Object(r["a"])(n.transaction),[9])):t.pluginTransactionForm.transaction=n.transaction,"leveldb"!=n.dbEngine&&"rockdb"!=n.dbEngine?t.plugindbForm={dbsetting:3,dbsettingContent:n.dbEngine}:t.plugindbForm={dbsetting:n.dbEngine,dbsettingContent:""}})).catch((function(t){console.log(t)}))},getCurrentStepFun:function(){var t=sessionStorage.getItem("pluginstep")||1;0!=this.currentStep&&(t=t||this.currentStep),this.currentStep=Number(t),this.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:this.currentStep})},previousStepFun:function(t){this.currentStep=this.currentStep-1,this.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:this.currentStep}),this.pluginConfigFun()},saveData:function(t){var n=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log(n.pluginOnsensusForm),3==n.pluginOnsensusForm.consensus&&(n.pluginOnsensusForm.consensus=n.pluginOnsensusForm.consensusContent),u({consensus:n.pluginOnsensusForm.consensus}).then((function(t){n.$message.success(n.$t("tronPluginConsensusSaveSuccess")),n.currentStep=n.currentStep+1,n.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:n.currentStep}),n.pluginConfigFun()})).catch((function(t){console.log(t)}))}))},saveTranstionData:function(t){var n=this;this.$refs[t].validate((function(t){t&&(""!=n.pluginTransactionForm.transactionContent&&n.pluginTransactionForm.transaction.forEach((function(t,e){9===t&&n.pluginTransactionForm.transaction.splice(e,1)})),console.log(n.pluginTransactionForm),c({transaction:n.pluginTransactionForm.transaction,customTransaction:n.pluginTransactionForm.transactionContent}).then((function(t){n.$message.success(n.$t("tronPluginInputSaveSuccess")),n.currentStep=n.currentStep+1,n.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:n.currentStep}),n.pluginConfigFun()})).catch((function(t){console.log(t)})))}))},saveDBData:function(t){var n=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;3==n.plugindbForm.dbsetting&&(n.plugindbForm.dbsetting=n.plugindbForm.dbsettingContent),l({dbEngine:n.plugindbForm.dbsetting}).then((function(t){n.$message.success(n.$t("tronPluginInputSaveSuccess")),n.$router.push({path:"/node/list",query:{deploy:1}})})).catch((function(t){console.log(t)}))}))}}},p=g,d=(e("3cd1"),e("2877")),b=Object(d["a"])(p,s,o,!1,null,"def61f24",null);n["default"]=b.exports},aa77:function(t,n,e){var s=e("5ca1"),o=e("be13"),r=e("79e5"),i=e("fdef"),a="["+i+"]",l="​",c=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),g=function(t,n,e){var o={},a=r((function(){return!!i[t]()||l[t]()!=l})),c=o[t]=a?n(p):i[t];e&&(o[e]=c),s(s.P+s.F*a,"String",o)},p=g.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(u,"")),t};t.exports=g},c5f6:function(t,n,e){"use strict";var s=e("7726"),o=e("69a8"),r=e("2d95"),i=e("5dbc"),a=e("6a99"),l=e("79e5"),c=e("9093").f,u=e("11e9").f,g=e("86cc").f,p=e("aa77").trim,d="Number",b=s[d],m=b,f=b.prototype,h=r(e("2aeb")(f))==d,v="trim"in String.prototype,S=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){n=v?n.trim():p(n,3);var e,s,o,r=n.charCodeAt(0);if(43===r||45===r){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===r){switch(n.charCodeAt(1)){case 66:case 98:s=2,o=49;break;case 79:case 111:s=8,o=55;break;default:return+n}for(var i,l=n.slice(2),c=0,u=l.length;c<u;c++)if(i=l.charCodeAt(c),i<48||i>o)return NaN;return parseInt(l,s)}}return+n};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof b&&(h?l((function(){f.valueOf.call(e)})):r(e)!=d)?i(new m(S(n)),e,b):S(n)};for(var F,C=e("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;C.length>_;_++)o(m,F=C[_])&&!o(b,F)&&g(b,F,u(m,F));b.prototype=f,f.constructor=b,e("2aba")(s,d,b)}},d587:function(t,n,e){},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);