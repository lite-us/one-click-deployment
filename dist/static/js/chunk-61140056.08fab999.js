(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61140056"],{"012e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewBranchDialog"},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(e){t.genesisContentShow=!t.genesisContentShow}}},[r("i",{class:t.genesisContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                    "+t._s(t.$t("tronSettingGenesis"))+"\n                ")]),t._v(" "),t.genesisContentShow?r("el-form",{ref:"genesisSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{"label-width":"200px","label-position":"left"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"asset"},[r("el-button",{staticClass:"newAsset",on:{click:function(e){return t.newAssetFun()}}},[t._v("new asset")]),t._v(" "),t._l(t.detailInfoData.genesis_block_assets,(function(e,n){return r("el-row",{key:n},[r("el-button",{staticStyle:{width:"100%"},on:{click:function(r){return t.currentAssetFun(e,n)}}},[t._v(t._s(e.accountName))])],1)}))],2)]),t._v(" "),r("el-col",{attrs:{span:12}},[r("div",{staticClass:"witeness"},[r("el-button",{staticClass:"newWiteness"},[t._v("witeness")]),t._v(" "),t._l(t.detailInfoData.genesis_block_witnesses,(function(e,n){return r("el-row",{key:n},[r("el-button",{staticStyle:{width:"100%"},on:{click:function(r){return t.currenWitenessFun(e,n)}}},[t._v(t._s(e.address))])],1)}))],2)])],1)],1):t._e()],1)],1)],1),t._v(" "),r("div",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveAllData()}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1),t._v(" "),r("el-dialog",{attrs:{center:"",width:"700px",title:t.$t("tronAssetSetting"),visible:t.innerAssetVisible},on:{"update:visible":function(e){t.innerAssetVisible=e}}},[r("el-form",{ref:"assetDialogForm",attrs:{rules:t.assetRules,model:t.assetForm,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"accountName",prop:"accountName"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.assetForm.accountName,callback:function(e){t.$set(t.assetForm,"accountName",e)},expression:"assetForm.accountName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"accountType",prop:"accountType"}},[r("el-select",{attrs:{placeholder:t.$t("tronSettingSelectPlaceholder")},model:{value:t.assetForm.accountType,callback:function(e){t.$set(t.assetForm,"accountType",e)},expression:"assetForm.accountType"}},t._l(t.accountTypeOptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"address",prop:"address"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.assetForm.address,callback:function(e){t.$set(t.assetForm,"address",e)},expression:"assetForm.address"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"balance",prop:"balance"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.assetForm.balance,callback:function(e){t.$set(t.assetForm,"balance",e)},expression:"assetForm.balance"}})],1),t._v(" "),r("el-form-item",{staticClass:"textCenter",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData("assetDialogForm")}}},[t._v(t._s(t.$t("tronSettingSave")))]),t._v(" "),r("el-button",{on:{click:function(e){t.innerAssetVisible=!1}}},[t._v(t._s(t.$t("tronSettingCancel")))])],1)],1)],1),t._v(" "),r("el-dialog",{attrs:{center:"",width:"700px",title:t.$t("tronWitenessSetting"),visible:t.innerWitenessVisible},on:{"update:visible":function(e){t.innerWitenessVisible=e}}},[r("el-form",{ref:"witenessDialogForm",attrs:{rules:t.witenessRules,model:t.witenessForm,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{label:"address",prop:"address"}},[t._v("\n                "+t._s(t.witenessForm.address)+"\n                ")]),t._v(" "),r("el-form-item",{attrs:{label:"url",prop:"url"}},[t._v("\n                "+t._s(t.witenessForm.url)+"\n                ")]),t._v(" "),r("el-form-item",{attrs:{label:"voteCount",prop:"voteCount"}},[t._v("\n                "+t._s(t.witenessForm.voteCount)+"\n                ")])],1)],1)],1)},o=[],s=(r("ac6a"),r("93b6")),i=r("61f7"),a=r("d01b"),l=r.n(a),c={name:"genesisSetting",props:["detailInfoData"],data:function(){var t=this,e=function(e,r,n){Object(i["b"])(r)?n():n(new Error(t.$t("tronSettingNumberPlaceholder")))},r=function(e,r,n){r>0x8000000000000000||r<-0x8000000000000000?n(new Error(t.$t("tronSettingNumberPlaceholder"))):n()},n=function(e,r,n){l.a.isAddress(r)?n():n(new Error(t.$t("tronSettingAddressPlaceholder")))},o=function(e,r,n){var o=l.a.address.fromPrivateKey(r);console.log(o),l.a.isAddress(o)?n():n(new Error(t.$t("tronSettingAddressPlaceholder")))};return{classLoading:!1,genesisContentShow:!0,assetEditStatus:0,currentAssetEditInd:"",currentWitenessEditInd:"",witenessEditStatus:0,innerAssetVisible:!1,innerWitenessVisible:!1,genesisSetting:{genesis_block_assets:[],genesis_block_witnesses:[]},accountTypeOptions:[{value:"AssetIssue",label:"AssetIssue"},{value:"Contract",label:"Contract"}],assetRules:{accountName:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],accountType:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],address:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:n,trigger:"blur"}],balance:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:r,trigger:"blur"}]},assetForm:{accountName:"",accountType:"",address:"",balance:""},witenessRules:{address:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:n,trigger:"blur"}],url:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},voteCount:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:e,trigger:"blur"}],privateKey:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{required:!0,validator:o,trigger:"blur"}]},witenessForm:{address:"",url:"",voteCount:"",privateKey:""}}},methods:{newAssetFun:function(){this.assetForm={accountName:"",accountType:"",address:"",balance:""},this.innerAssetVisible=!0},newWitenessFun:function(){this.witenessForm={address:"",url:"",voteCount:"",privateKey:""},this.innerWitenessVisible=!0},currentAssetFun:function(t,e){this.assetForm=t,this.assetEditStatus=1,this.currentAssetEditInd=e,this.innerAssetVisible=!0},currenWitenessFun:function(t,e){this.witenessForm=t,this.witenessEditStatus=1,this.currentWitenessEditInd=e,this.innerWitenessVisible=!0},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log(e.assetForm),0==e.assetEditStatus?e.genesisSetting.genesis_block_assets.push(e.assetForm):e.genesisSetting.genesis_block_assets[e.currentAssetEditInd]=e.assetForm;var r={assets:e.genesisSetting.genesis_block_assets};console.log(r),Object(s["e"])(r).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingGenesisSaveSuccess")),e.innerAssetVisible=!1,e.assetEditStatus=0})).catch((function(t){console.log(t)}))}))},saveWitenessData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log(e.witenessForm),0==e.witenessEditStatus?e.genesisSetting.genesis_block_witnesses.push(e.witenessForm):e.genesisSetting.genesis_block_witnesses[e.currentWitenessEditInd]=e.witenessForm,console.log(e.genesisSetting,"genesisSetting");var r=e.genesisSetting.genesis_block_assets,n=e.genesisSetting.genesis_block_witnesses;n.forEach((function(t){t.url='"'.concat(t.url,'"')}));var o={assets:r,witness:n};console.log(o)}))},saveAllData:function(){var t=this,e={assets:this.genesisSetting.genesis_block_assets};Object(s["e"])(e).then((function(e){t.$emit("addSettingSuccess",!0),t.$message.success(t.$t("tronSettingGenesisSaveSuccess"))})).catch((function(t){console.log(t)}))}},watch:{detailInfoData:function(t){this.baseSettingForm=this.detailInfoData,this.genesisSetting=this.detailInfoData}}},d=c,g=(r("e7a6"),r("2877")),m=Object(g["a"])(d,n,o,!1,null,"0c492c0e",null);e["a"]=m.exports},"02bd":function(t,e,r){},"0e3f":function(t,e,r){"use strict";var n=r("14a8"),o=r.n(n);o.a},1:function(t,e){},"14a8":function(t,e,r){},2:function(t,e){},3282:function(t,e,r){},"33af":function(t,e,r){},"3a28":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewBranchDialog"},[r("el-form",{ref:"crossSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:t.branchRules,model:t.baseSettingForm,"label-width":"200px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(e){t.baseContentShow=!t.baseContentShow}}},[r("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                        "+t._s(t.$t("tronSettingHttp"))+"\n                    ")]),t._v(" "),t.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"maxHttpConnectNumber",prop:"node_maxHttpConnectNumber"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_maxHttpConnectNumber,callback:function(e){t.$set(t.baseSettingForm,"node_maxHttpConnectNumber",e)},expression:"baseSettingForm.node_maxHttpConnectNumber"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"httpFullNodePort",prop:"node_http_fullNodePort"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_http_fullNodePort,callback:function(e){t.$set(t.baseSettingForm,"node_http_fullNodePort",e)},expression:"baseSettingForm.node_http_fullNodePort"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"httpSolidityPort",prop:"node_http_solidityPort"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_http_solidityPort,callback:function(e){t.$set(t.baseSettingForm,"node_http_solidityPort",e)},expression:"baseSettingForm.node_http_solidityPort"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"rpcPort",prop:"node_rpc_port"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_rpc_port,callback:function(e){t.$set(t.baseSettingForm,"node_rpc_port",e)},expression:"baseSettingForm.node_rpc_port"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"rpcSolidityPort",prop:"node_rpc_solidityPort"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_rpc_solidityPort,callback:function(e){t.$set(t.baseSettingForm,"node_rpc_solidityPort",e)},expression:"baseSettingForm.node_rpc_solidityPort"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"listenPort",prop:"node_listen_port"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_listen_port,callback:function(e){t.$set(t.baseSettingForm,"node_listen_port",e)},expression:"baseSettingForm.node_listen_port"}})],1)],1):t._e()])],1)],1),t._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.previousStepFun}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData("crossSettingDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1)],1)},o=[],s=r("93b6"),i=r("61f7"),a={name:"networkSetting",props:["detailInfoData"],data:function(){var t=this,e=function(e,r,n){Object(i["b"])(r)?n():n(new Error(t.$t("tronSettingNumberPlaceholder")))};return{baseContentShow:!0,baseSettingForm:{node_maxHttpConnectNumber:"",node_http_solidityPort:"",node_http_fullNodePort:"",node_rpc_port:"",node_rpc_solidityPort:"",listenPort:""},branchRules:{node_maxHttpConnectNumber:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_http_fullNodePort:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_http_solidityPort:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_rpc_port:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_rpc_solidityPort:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_listen_port:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var r={maxHttpConnectNumber:e.baseSettingForm.node_maxHttpConnectNumber,rpcPort:e.baseSettingForm.node_rpc_port,rpcSolidityPort:e.baseSettingForm.node_rpc_solidityPort,httpFullNodePort:e.baseSettingForm.node_http_fullNodePort,httpSolidityPort:e.baseSettingForm.node_http_solidityPort,listenPort:e.baseSettingForm.node_listen_port};Object(s["f"])(r).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingNetworkSaveSuccess")),e.dialogVisible=!1})).catch((function(t){console.log(t)}))}))}},watch:{detailInfoData:function(t){this.baseSettingForm=this.detailInfoData}}},l=a,c=(r("f445"),r("2877")),d=Object(c["a"])(l,n,o,!1,null,"76d3a173",null);e["a"]=d.exports},"5a6c":function(t,e,r){"use strict";var n=r("3282"),o=r.n(n);o.a},"5c00":function(t,e,r){},6068:function(t,e,r){},a673:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tronp2pSettingForm"},[r("el-form",{ref:"p2pSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:t.p2pSettingRules,model:t.p2pSettingForm,"label-width":"250px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(e){t.baseContentShow=!t.baseContentShow}}},[r("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                        "+t._s(t.$t("tronSettingP2p"))+"\n                    ")]),t._v(" "),t.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"p2pVersion",prop:"node_p2p_version"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.p2pSettingForm.node_p2p_version,callback:function(e){t.$set(t.p2pSettingForm,"node_p2p_version",e)},expression:"p2pSettingForm.node_p2p_version"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"maxActionNodes",prop:"node_maxActiveNodes"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.p2pSettingForm.node_maxActiveNodes,callback:function(e){t.$set(t.p2pSettingForm,"node_maxActiveNodes",e)},expression:"p2pSettingForm.node_maxActiveNodes"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"node_maxActiveNodesWithSameIp",prop:"node_maxActiveNodesWithSameIp"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.p2pSettingForm.node_maxActiveNodesWithSameIp,callback:function(e){t.$set(t.p2pSettingForm,"node_maxActiveNodesWithSameIp",e)},expression:"p2pSettingForm.node_maxActiveNodesWithSameIp"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"activeConnectFactor",prop:"node_activeConnectFactor"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,step:.1,maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.p2pSettingForm.node_activeConnectFactor,callback:function(e){t.$set(t.p2pSettingForm,"node_activeConnectFactor",e)},expression:"p2pSettingForm.node_activeConnectFactor"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"connectFactor",prop:"connectFactor"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,step:.1,maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.p2pSettingForm.connectFactor,callback:function(e){t.$set(t.p2pSettingForm,"connectFactor",e)},expression:"p2pSettingForm.connectFactor"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"seedNode",prop:"seedNode"}},[r("el-checkbox-group",{on:{change:t.checkBoxChangeFun},model:{value:t.p2pSettingForm.defalutSelectedIp,callback:function(e){t.$set(t.p2pSettingForm,"defalutSelectedIp",e)},expression:"p2pSettingForm.defalutSelectedIp"}},t._l(t.seedNodeIpList,(function(e,n){return r("el-checkbox",{key:n,staticClass:"checkBox",attrs:{label:e.ip}},[r("el-input",{attrs:{size:"small",placeholder:t.$t("tronSettingPortPlaceholder"),disabled:""},model:{value:e.port,callback:function(r){t.$set(e,"port",r)},expression:"item.port"}},[r("template",{staticStyle:{width:"100px"},slot:"prepend"},[t._v(t._s(e.ip))])],2)],1)})),1)],1)],1):t._e()])],1)],1),t._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.previousStepFun}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData("p2pSettingDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1)],1)},o=[],s=(r("8e6e"),r("456d"),r("4f7f"),r("5df3"),r("1c4c"),r("28a5"),r("ac6a"),r("bd86")),i=r("2f62"),a=r("93b6"),l=r("61f7");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={name:"p2pSettingDialog",props:["detailInfoData","seedNodeIpList"],computed:d({},Object(i["b"])(["tronSetting"])),data:function(){var t=this,e=function(e,r,n){Object(l["b"])(r)?n():n(new Error(t.$t("tronSettingNumberPlaceholder")))};return{baseContentShow:!0,p2pSettingForm:{node_p2p_version:"",node_maxActiveNodes:"",node_maxActiveNodesWithSameIp:"",connectFactor:"",node_activeConnectFactor:""},checkedSeedNodeList:[],p2pSettingRules:{node_p2p_version:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_maxActiveNodes:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_maxActiveNodesWithSameIp:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_activeConnectFactor:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],connectFactor:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},checkBoxChangeFun:function(t){console.log(t),this.checkedSeedNodeList=t},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var r={p2pVersion:e.p2pSettingForm.node_p2p_version,maxActiveNodes:e.p2pSettingForm.node_maxActiveNodes,nodeActiveConnectFactor:e.p2pSettingForm.node_activeConnectFactor,nodeMaxActiveNodesWithSameIp:e.p2pSettingForm.node_maxActiveNodesWithSameIp,connectFactor:e.p2pSettingForm.connectFactor},n=e.p2pSettingForm.seed_node_ip_list,o=[],s=[];n&&null!=n&&(n.forEach((function(t){s.push(t.split(":")[0])})),e.checkedSeedNodeList=Array.from(new Set(e.checkedSeedNodeList.concat(s)))),e.seedNodeIpList.forEach((function(t){e.checkedSeedNodeList.forEach((function(e){e==t.ip&&o.push(t)}))}));var i=[];o.forEach((function(t){i.push("".concat(t.ip,'":"').concat(t.port))})),Object(a["h"])(r,i).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingp2pSaveSuccess"))})).catch((function(t){console.log(t)}))}))}},watch:{detailInfoData:function(t){this.p2pSettingForm=d({},this.detailInfoData),console.log(this.p2pSettingForm)}}},m=g,u=(r("dfb5"),r("2877")),p=Object(u["a"])(m,n,o,!1,null,"440c7418",null);e["a"]=p.exports},c31b:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewBranchDialog"},[r("div",{staticClass:"tronp2pSettingForm"},[r("el-form",{ref:"dbSettingDialogForm",staticClass:"trondbSettingForm",attrs:{rules:t.dbSettingRules,model:t.dbSettingForm,"label-width":"250px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(e){t.baseContentShow=!t.baseContentShow}}},[r("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronSettingDb"))+"\n                        ")]),t._v(" "),t.baseContentShow?r("div",[r("el-form-item",{staticClass:"mgt20",attrs:{label:t.$t("tronSettingwriteSynchronously"),prop:"storage_db_sync"}},[r("el-switch",{model:{value:t.dbSettingForm.storage_db_sync,callback:function(e){t.$set(t.dbSettingForm,"storage_db_sync",e)},expression:"dbSettingForm.storage_db_sync"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("tronSettingOpenTransaction"),prop:"storage_transHistory_switch"}},[r("el-switch",{attrs:{"active-value":"on","inactive-value":"off"},model:{value:t.dbSettingForm.storage_transHistory_switch,callback:function(e){t.$set(t.dbSettingForm,"storage_transHistory_switch",e)},expression:"dbSettingForm.storage_transHistory_switch"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("tronSelectDatabaseConfiguration"),prop:"storage_db_engine"}},[r("el-radio-group",{model:{value:t.dbSettingForm.storage_db_engine,callback:function(e){t.$set(t.dbSettingForm,"storage_db_engine",e)},expression:"dbSettingForm.storage_db_engine"}},[r("el-radio",{attrs:{label:"LEVELDB"}},[t._v("leveldb")]),t._v(" "),r("el-radio",{attrs:{label:"ROCKSDB"}},[t._v("rocksdb")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("tronSettingIndexDirectory"),prop:"storage_index_directory"}},[r("el-switch",{attrs:{"active-value":"index"},model:{value:t.dbSettingForm.storage_index_directory,callback:function(e){t.$set(t.dbSettingForm,"storage_index_directory",e)},expression:"dbSettingForm.storage_index_directory"}})],1),t._v(" "),r("el-form-item",{attrs:{label:t.$t("tronSettingNeedToUpdateAsset"),prop:"storage_needToUpdateAsset"}},[r("el-switch",{model:{value:t.dbSettingForm.storage_needToUpdateAsset,callback:function(e){t.$set(t.dbSettingForm,"storage_needToUpdateAsset",e)},expression:"dbSettingForm.storage_needToUpdateAsset"}})],1)],1):t._e()])],1)],1),t._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.previousStepFun}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData("dbSettingDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1)],1)])},o=[],s=r("93b6"),i={name:"dbetting",props:["detailInfoData"],data:function(){return{baseContentShow:!0,dbSettingForm:{},radioVal:0,dbSettingRules:{storage_db_sync:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"}],storage_transHistory_switch:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},storage_db_engine:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},storage_index_directory:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},storage_needToUpdateAsset:{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"}}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;var r={isDBSync:e.dbSettingForm.storage_db_sync,isOpenTransaction:e.dbSettingForm.storage_transHistory_switch,dbEnine:e.dbSettingForm.storage_db_engine,indexDirectory:e.dbSettingForm.storage_index_directory,needToUpdateAsset:e.dbSettingForm.storage_needToUpdateAsset};Object(s["d"])(r).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingDBSaveSuccess"))})).catch((function(t){console.log(t)}))}))}},watch:{detailInfoData:function(t){this.dbSettingForm=this.detailInfoData}}},a=i,l=(r("dbc3"),r("2877")),c=Object(l["a"])(a,n,o,!1,null,"6525543c",null);e["a"]=c.exports},dbc3:function(t,e,r){"use strict";var n=r("02bd"),o=r.n(n);o.a},dfb5:function(t,e,r){"use strict";var n=r("5c00"),o=r.n(n);o.a},e2d6:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewBranchDialog"},[r("el-form",{ref:"baseSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:t.branchRules,model:t.baseSettingForm,"label-width":"230px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(e){t.baseContentShow=!t.baseContentShow}}},[r("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                        "+t._s(t.$t("tronSettingBase"))+"\n                    ")]),t._v(" "),t.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"chainId",prop:"chainId"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.chainId,callback:function(e){t.$set(t.baseSettingForm,"chainId",e)},expression:"baseSettingForm.chainId"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"chainName",prop:"chainName"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.chainName,callback:function(e){t.$set(t.baseSettingForm,"chainName",e)},expression:"baseSettingForm.chainName"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"blockProducedTimeOut",prop:"block_proposalExpireTime"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.block_proposalExpireTime,callback:function(e){t.$set(t.baseSettingForm,"block_proposalExpireTime",e)},expression:"baseSettingForm.block_proposalExpireTime"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"blockMaintenanceTimeInterval",prop:"block_maintenanceTimeInterval"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.block_maintenanceTimeInterval,callback:function(e){t.$set(t.baseSettingForm,"block_maintenanceTimeInterval",e)},expression:"baseSettingForm.block_maintenanceTimeInterval"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"nodeBlockProducedTimeOut",prop:"node_blockProducedTimeOut"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_blockProducedTimeOut,callback:function(e){t.$set(t.baseSettingForm,"node_blockProducedTimeOut",e)},expression:"baseSettingForm.node_blockProducedTimeOut"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"nodeMinParticipationRate",prop:"node_minParticipationRate"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.node_minParticipationRate,callback:function(e){t.$set(t.baseSettingForm,"node_minParticipationRate",e)},expression:"baseSettingForm.node_minParticipationRate"}})],1)],1):t._e()])],1)],1),t._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.previousStepFun}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData("baseSettingDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1)],1)},o=[],s=r("93b6"),i=r("61f7"),a={name:"baseSetting",props:["detailInfoData","editStatus"],data:function(){var t=this,e=function(e,r,n){Object(i["b"])(r)?n():n(new Error(t.$t("tronSettingNumberPlaceholder")))};return{classLoading:!1,baseSettingForm:{},baseContentShow:!0,branchRules:{chainId:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],chainName:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}],block_proposalExpireTime:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],block_maintenanceTimeInterval:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_blockProducedTimeOut:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],node_minParticipationRate:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log(e.baseSettingForm);var r={chainId:e.baseSettingForm.chainId,chainName:e.baseSettingForm.chainName,blockProducedTimeOut:e.baseSettingForm.node_blockProducedTimeOut,maintenanceTimeInterval:e.baseSettingForm.block_maintenanceTimeInterval,proposalExpireTime:e.baseSettingForm.block_proposalExpireTime,minParticipationRate:e.baseSettingForm.node_minParticipationRate};Object(s["a"])(r).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingBaseSaveSuccess"))})).catch((function(t){console.log(t)}))}))}},watch:{detailInfoData:function(t){this.baseSettingForm=this.detailInfoData}}},l=a,c=(r("0e3f"),r("2877")),d=Object(c["a"])(l,n,o,!1,null,"2595af62",null);e["a"]=d.exports},e7a6:function(t,e,r){"use strict";var n=r("33af"),o=r.n(n);o.a},eae2:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"viewBranchDialog"},[r("el-form",{ref:"crossSettingDialogForm",staticClass:"tronbaseSettingForm",attrs:{rules:t.branchRules,model:t.baseSettingForm,"label-width":"200px","label-position":"left"}},[r("el-row",{attrs:{gutter:12}},[r("el-col",{attrs:{span:24}},[r("el-card",{attrs:{shadow:"hover"}},[r("div",{on:{click:function(e){t.baseContentShow=!t.baseContentShow}}},[r("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                        "+t._s(t.$t("tronSettingP2p"))+"\n                    ")]),t._v(" "),t.baseContentShow?r("div",[r("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{label:"enableCrossChain",prop:"enableCrossChain"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.baseSettingForm.enableCrossChain,callback:function(e){t.$set(t.baseSettingForm,"enableCrossChain",e)},expression:"baseSettingForm.enableCrossChain"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"maxValidatorNumber",prop:"maxValidatorNumber"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.maxValidatorNumber,callback:function(e){t.$set(t.baseSettingForm,"maxValidatorNumber",e)},expression:"baseSettingForm.maxValidatorNumber"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"minValidatorNumber",prop:"minValidatorNumber"}},[r("el-input",{attrs:{maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.minValidatorNumber,callback:function(e){t.$set(t.baseSettingForm,"minValidatorNumber",e)},expression:"baseSettingForm.minValidatorNumber"}})],1),t._v(" "),r("el-form-item",{staticClass:"baseFormItem",attrs:{label:"crossChainFee",prop:"crossChainFee"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0,step:.01,maxlength:50,placeholder:t.$t("tronSettingPlaceholder")},model:{value:t.baseSettingForm.crossChainFee,callback:function(e){t.$set(t.baseSettingForm,"crossChainFee",e)},expression:"baseSettingForm.crossChainFee"}})],1)],1):t._e()])],1)],1),t._v(" "),r("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.previousStepFun}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.saveData("crossSettingDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1)],1)},o=[],s=r("93b6"),i=r("61f7"),a={name:"corssChain",props:["detailInfoData"],data:function(){var t=this,e=function(e,r,n){Object(i["b"])(r)?n():n(new Error(t.$t("tronSettingNumberPlaceholder")))},r=function(e,r,n){Object(i["c"])(r)?n():n(new Error(t.$t("validTwoDecimal")))};return{baseContentShow:!0,baseSettingForm:{},branchRules:{enableCrossChain:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"}],maxValidatorNumber:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],minValidatorNumber:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},{message:this.$t("tronSettingNumberPlaceholder"),validator:e,trigger:"blur"}],crossChainFee:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"change"},{message:this.$t("tronSettingNumberTwoDecimal"),validator:r,trigger:"blur"}]}}},methods:{previousStepFun:function(){this.$emit("previousSettingStep",!0)},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(s["c"])(e.baseSettingForm).then((function(t){e.$emit("addSettingSuccess",!0),e.$message.success(e.$t("tronSettingCrossChainSaveSuccess")),e.$router.push({path:"/plugin/list"})})).catch((function(t){console.log(t)}))}))}},watch:{detailInfoData:function(t){this.baseSettingForm=this.detailInfoData}}},l=a,c=(r("5a6c"),r("2877")),d=Object(c["a"])(l,n,o,!1,null,"58cda8d4",null);e["a"]=d.exports},f445:function(t,e,r){"use strict";var n=r("6068"),o=r.n(n);o.a}}]);