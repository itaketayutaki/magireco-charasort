(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d075a38"],{"465c":function(t,s,e){"use strict";e("7d6d")},"7d6d":function(t,s,e){},"96eb":function(t,s,e){"use strict";e.r(s);var i=e("7a23");const o=Object(i["F"])("data-v-7af09aed");Object(i["u"])("data-v-7af09aed");const c={class:"section"},l={class:"container is-widescreen has-text-centered"},h=Object(i["h"])("div",{class:"block"},[Object(i["h"])("p",null,"途中経過はオートセーブされます。")],-1),a={class:"block"},r={class:"block"},n={class:"block"},g={key:0},u=Object(i["h"])("hr",null,null,-1),f={class:"block"};Object(i["s"])();const S=o((t,s,e,o,S,p)=>(Object(i["r"])(),Object(i["d"])("section",c,[Object(i["h"])("div",l,[h,Object(i["h"])("div",a,[Object(i["h"])("button",{class:"button choice",onClick:s[1]||(s[1]=s=>t.choose(!0,!1))},Object(i["A"])(t.lefts[0]),1),Object(i["h"])("button",{class:"button choice",onClick:s[2]||(s[2]=s=>t.choose(!1,!0))},Object(i["A"])(t.rights[0]),1)]),Object(i["h"])("div",r,[Object(i["h"])("button",{class:"button",onClick:s[3]||(s[3]=s=>t.choose(!1,!1))},"選べない！")]),Object(i["h"])("div",n,[Object(i["h"])("progress",{class:"progress is-primary",value:t.progress,max:"100"},Object(i["A"])(t.progress),9,["value"]),Object(i["g"])(" 進捗: "+Object(i["A"])(t.progress)+"% ",1),t.progress>=100?(Object(i["r"])(),Object(i["d"])("p",g,"何故か知りませんが割と頻繁に進捗が100%を超えます。")):Object(i["e"])("",!0)]),u,Object(i["h"])("div",f,[Object(i["h"])("button",{class:"button is-danger",onClick:s[4]||(s[4]=(...s)=>t.restart&&t.restart(...s))},"やめる")])])])));let p=[];function m(t){for(let s=t.length;s>1;s--){const e=Math.floor(Math.random()*s);[t[e],t[s-1]]=[t[s-1],t[e]]}return t}function b(t){return t.map(t=>[t]).slice()}var d=Object(i["i"])({name:"HelloWorld",props:{msg:String},data(){return{finalResults:[],tempResults:[],nextProcessingStocks:[[]],lefts:[],rights:[],count:0}},methods:{initLeftsRights(){this.lefts=this.nextProcessingStocks.shift(),this.rights=this.nextProcessingStocks.shift()},startNextTurn(){this.nextProcessingStocks=this.finalResults.slice(),this.finalResults.splice(0),this.initLeftsRights()},choose(t,s){if(t?(this.tempResults.push(this.lefts.shift()),this.count+=1):s?(this.tempResults.push(this.rights.shift()),this.count+=1):(this.tempResults.push(this.lefts.shift()),this.tempResults.push(this.rights.shift()),this.count+=2),!this.lefts.length||!this.rights.length){if(this.tempResults=this.tempResults.concat(this.lefts,this.rights),this.finalResults.push(this.tempResults.slice()),this.tempResults.splice(0),!(this.nextProcessingStocks.length>=2))return 1===this.nextProcessingStocks.length?(this.finalResults.push(this.nextProcessingStocks.shift().slice()),void this.startNextTurn()):void(1===this.finalResults.length?this.finish():this.startNextTurn());this.initLeftsRights()}},restart(){window.confirm("これまでの結果を破棄してトップに戻りますか？")&&(localStorage.clear(),this.$router.push({name:"Home"}))},finish(){localStorage.setItem("result",JSON.stringify(this.finalResults.shift())),this.$router.push({name:"CharasortResult"})},saveLocalStorage(){localStorage.setItem("finalResults",JSON.stringify(this.finalResults)),localStorage.setItem("tempResults",JSON.stringify(this.tempResults)),localStorage.setItem("nextProcessingStocks",JSON.stringify(this.nextProcessingStocks)),localStorage.setItem("lefts",JSON.stringify(this.lefts)),localStorage.setItem("rights",JSON.stringify(this.rights)),localStorage.setItem("count",String(this.count))}},computed:{progress(){const t=Math.round(this.count/(p.length*Math.log(p.length))*100);return Number.isNaN(t)?0:t}},watch:{count(){this.saveLocalStorage()},finalResults(){this.saveLocalStorage()},tempResults(){this.saveLocalStorage()},nextProcessingStocks(){this.saveLocalStorage()},lefts(){this.saveLocalStorage()},rights(){this.saveLocalStorage()}},mounted(){localStorage.getItem("selectedCharactors")?(p=JSON.parse(localStorage.getItem("selectedCharactors")),localStorage.getItem("count")?(this.finalResults=JSON.parse(localStorage.getItem("finalResults")),this.tempResults=JSON.parse(localStorage.getItem("tempResults")),this.nextProcessingStocks=JSON.parse(localStorage.getItem("nextProcessingStocks")),this.lefts=JSON.parse(localStorage.getItem("lefts")),this.rights=JSON.parse(localStorage.getItem("rights")),this.count=Number(localStorage.getItem("count")),this.nextProcessingStocks.length||1!==this.finalResults.length||this.finish()):(this.nextProcessingStocks=b(m(p)),this.initLeftsRights())):this.$router.push({name:"Home"})}});e("465c");d.render=S,d.__scopeId="data-v-7af09aed";s["default"]=d}}]);
//# sourceMappingURL=chunk-5d075a38.ddd24068.js.map