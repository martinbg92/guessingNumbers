(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8599:function(e){e.exports={min:1,max:1e10}},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},4369:function(e,n,t){"use strict";t.r(n);var r=t(4051),o=t.n(r),s=t(5893),a=t(9008),i=t.n(a),c=t(7160),u=t.n(c),l=t(3723),m=t(7294),d=t(9669),_=t.n(d);function h(e,n,t,r,o,s,a){try{var i=e[s](a),c=i.value}catch(u){return void t(u)}i.done?n(c):Promise.resolve(c).then(r,o)}var p=t(8599);n.default=function(){var e=(0,m.useState)(""),n=e[0],t=e[1],r=(0,m.useState)(""),a=r[0],c=r[1],d=(0,m.useState)({}),f=d[0],x=d[1],b=function(){var e={},t=!0,r=new RegExp("^([0-9])*$");return" "==n?(e.empty="Cannot send empty field",t=!1):r.test(n)?Number(n)>=p.min&&Number(n)<=p.max&&(e.outRange="The number must be between "+p.min+" and "+p.max,t=!1):(e.numeric="The field to send must be numeric",t=!1),x(e),t},w=function(){var e,t=(e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:if(!e.sent){e.next=7;break}return t={number:Number(n)},e.next=7,_().post("http://localhost:5000/api/guesser/postNumberEntered",t,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"content-type","Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS"}}).then((function(e){c(e.data.comment)})).catch((function(e){console.error("Something went wrong!",e),alert("Something was wrong!")}));case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(e){h(s,r,o,a,i,"next",e)}function i(e){h(s,r,o,a,i,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:u().container,children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:"Create Next App"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{className:u().main,children:[(0,s.jsx)("h1",{children:"Welcome to the Guesser program!"}),(0,s.jsx)(l.Z,{children:(0,s.jsxs)(l.Z.Field,{children:[(0,s.jsx)("label",{children:"Enter a number to guess "}),(0,s.jsx)("input",{type:"password",id:"enteredNumber",name:"enteredNumber",onChange:function(e){t(e.target.value)},value:n,required:!0}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{className:u().button,onClick:w,children:" Guess my number"}),(0,s.jsx)("span",{className:u().error,children:f.empty}),(0,s.jsx)("span",{className:u().error,children:f.numeric}),(0,s.jsx)("span",{className:u().error,children:f.outRange}),""!==a?(0,s.jsxs)("h3",{children:["Your number is ",(0,s.jsxs)("span",{children:[" ",a]})," "]}):""]})})]}),(0,s.jsx)("footer",{className:u().footer,children:(0,s.jsx)("span",{className:u().logo,children:"  Powered by Mart\xedn Barreto"})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",error:"Home_error__m2kA6",button:"Home_button__Zs7A2"}}},function(e){e.O(0,[157,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);