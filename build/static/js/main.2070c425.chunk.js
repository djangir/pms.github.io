(this.webpackJsonpuserdata=this.webpackJsonpuserdata||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(4),l=n.n(o),s=(n(13),n(2)),r=(n(14),n(3)),i=n(5),d={value:["value 1","value 2","value 3"],pendingData:["value 4","value 5","value 6"],completeData:["value 7","value 8","value 9"]},u=Object(i.b)({name:"updateData",data:d,reducers:{addValue:function(e,t){e.value.unshift(t.payload)},removeValue:function(e,t){e.value.splice(t.payload,1)},updateValue:function(e,t){e.value.splice(t.payload[0],1,t.payload[1])},pendingData:function(e,t){e.pendingData.unshift(t.payload)},removePendingData:function(e,t){e.pendingData.splice(t.payload,1)},updatePendingData:function(e,t){e.pendingData.splice(t.payload[0],1,t.payload[1])},completeData:function(e,t){e.completeData.unshift(t.payload)},removeCompleteData:function(e,t){e.completeData.splice(t.payload,1)},updateCompleteData:function(e,t){e.completeData.splice(t.payload[0],1,t.payload[1])},deleteAllData:function(e,t){e.value=[],e.pendingData=[],e.completeData=[]},deleteValue:function(e,t){e.value=[]},deletePendingData:function(e,t){e.pendingData=[]},deleteCompleteData:function(e,t){e.completeData=[]}}}),m=u.reducer,b=u.actions,j=b.addValue,x=b.removeValue,p=b.pendingData,h=b.removePendingData,v=b.completeData,g=b.removeCompleteData,O=b.updateCompleteData,f=b.updatePendingData,D=b.updateValue,N=b.deleteAllData,y=b.deleteValue,w=b.deletePendingData,k=b.deleteCompleteData,C=n(0);var P=function(e){var t=Object(r.b)(),n=c.a.useState(e.text),a=Object(s.a)(n,2),o=a[0],l=a[1],i=c.a.useState("d-none"),d=Object(s.a)(i,2),u=d[0],m=d[1],b=c.a.useState("d-block"),N=Object(s.a)(b,2),y=N[0],w=N[1],k=c.a.useState("contents"),P=Object(s.a)(k,2),F=P[0],S=P[1];function V(){"removePendingData"===e.removeFunction?t(f([e.number,o])):"removeCompleteData"===e.removeFunction?t(O([e.number,o])):t(D([e.number,o])),m("d-none"),w("d-block"),S("contents")}return Object(C.jsxs)("div",{className:"h4 m-2 my-3 p-2",children:[Object(C.jsxs)("div",{className:"row",children:[Object(C.jsxs)("div",{className:"col-10",children:[Object(C.jsx)("div",{className:y,children:Object(C.jsxs)("p",{style:{textAlign:"justify",wordBreak:"break-all"},children:[" ",e.text]})}),Object(C.jsx)("div",{className:u,children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("input",{type:"text",className:"form-control",onKeyDown:function(e){27===e.keyCode?(m("d-none"),w("d-block"),S("contents")):13===e.keyCode&&V()},placeholder:o,value:o,onChange:function(e){return l(e.target.value)}}),Object(C.jsx)("span",{className:"input-group-text",style:{cursor:"pointer"},onClick:V,children:" Save "})]})})]}),e.completeRemove?null:Object(C.jsx)("div",{style:{display:F},children:Object(C.jsx)("h3",{className:"col-2 text-center h1",style:{cursor:"pointer",maxHeight:"65px",maxWidth:"75px"},onClick:function(){m("d-block"),w("d-none"),S("none")},children:" \u270e "})})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"btn btn-outline-danger btn-warning mx-2 rounded-circle",onClick:function(){"removePendingData"===e.removeFunction?(t(j(e.text)),t(h(e.number))):"removeCompleteData"===e.removeFunction?(t(j(e.text)),t(g(e.number))):(t(p(e.text)),t(x(e.number)))},children:"\u27a4"}),Object(C.jsx)("span",{className:"btn btn-outline-warning btn-success mx-2 rounded-circle",onClick:function(){"removePendingData"===e.removeFunction?(t(v(e.text)),t(h(e.number))):"removeCompleteData"===e.removeFunction?(t(p(e.text)),t(g(e.number))):(t(v(e.text)),t(x(e.number)))},children:"\u2713"}),Object(C.jsx)("span",{className:"btn btn-outline-secondary btn-light  mx-2 rounded-circle",onClick:function(){"removePendingData"===e.removeFunction?(t(v(e.text)),t(h(e.number))):"removeCompleteData"===e.removeFunction?(t(j(e.text)),t(g(e.number))):(t(p(e.text)),t(x(e.number)))},children:"\u21c4"}),e.completeRemove?Object(C.jsx)("span",{className:"btn btn-warning btn-outline-danger ms-3 rounded-circle",onClick:function(){return t(g(e.number))},children:" X "}):null]})]})};var F=function(){var e="btn btn-success btn-outline-warning",t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)("d-none"),d=Object(s.a)(i,2),u=d[0],m=d[1],b=Object(a.useState)(e),x=Object(s.a)(b,2),p=x[0],h=x[1],v=Object(r.c)((function(e){return e})),g=v.value,O=v.pendingData,f=v.completeData,D=Object(r.b)();function F(){var t=document.getElementById("post");""!==o.replace(/\s/g,"")?(D(j(o)),l(""),m("d-none"),h(e)):(alert(" Write Something .... "),t.focus())}function S(){window.confirm("Delete All Data")&&D(N())}return c.a.useEffect((function(){var t=function(t){var n=document.getElementById("post");107===t.keyCode?(m("fixed-bottom d-block"),h("d-none"),n.focus()):27===t.keyCode?(l(""),m("d-none"),h(e)):123===t.keyCode?t.preventDefault():46===t.keyCode&&S()};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("h1",{className:"text-center m-3",children:[Object(C.jsx)("span",{className:"text-danger",children:" P "}),Object(C.jsx)("span",{className:"text-warning",children:" M "}),Object(C.jsx)("span",{className:"text-success",children:" S "})]}),Object(C.jsxs)("div",{className:"text-center h5",style:{marginTop:-25},children:[Object(C.jsx)("span",{className:"text-danger text-decoration-underline",children:" post "}),Object(C.jsx)("span",{className:"text-warning text-decoration-underline",children:" management "}),Object(C.jsx)("span",{className:"text-success text-decoration-underline",children:" system "})]}),Object(C.jsxs)("div",{className:"text-end me-3",children:[Object(C.jsx)("button",{className:p,onClick:function(){m("fixed-bottom d-block"),h("d-none")},children:"Add Data"}),Object(C.jsx)("button",{className:"btn btn-success btn-outline-warning mx-2",onClick:S,children:" Empty ! "})]}),Object(C.jsx)("hr",{className:"mx-3"}),Object(C.jsxs)("div",{className:"row w-100 mb-5",children:[Object(C.jsxs)("div",{className:"col-md-4 py-3 bg-danger text-white",children:[Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("p",{className:"text-center h2 text-decoration-underline col-8",children:" To Do "}),Object(C.jsx)("div",{className:"col-3 text-end",onClick:function(){return D(y())},children:Object(C.jsx)("p",{className:"h1 btn-outline-danger btn-warning w-50 text-center rounded-circle",style:{fontWeight:"bold",cursor:"pointer"},children:" \u2421   "})})]}),Object(C.jsx)("div",{className:"border-right ",children:g.map((function(e,t){return Object(C.jsx)(P,{btntext:"Pending",text:e,removeFunction:"removeValue",number:t},t)}))})]}),Object(C.jsxs)("div",{className:"col-md-4 py-3 bg-warning",children:[Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("p",{className:"text-center h2 text-decoration-underline col-8",children:" Doing "}),Object(C.jsx)("div",{className:"col-3 text-end",onClick:function(){return D(w())},children:Object(C.jsx)("p",{className:"h1 btn-outline-warning btn-danger w-50 text-center rounded-circle",style:{fontWeight:"bold",cursor:"pointer"},children:" \u2421   "})})]}),Object(C.jsx)("div",{className:"border-right",children:O.map((function(e,t){return Object(C.jsx)(P,{text:e,btntext:"Complete",removeFunction:"removePendingData",number:t},t)}))})]}),Object(C.jsxs)("div",{className:"col-md-4 py-3 bg-success text-white",children:[Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("p",{className:"text-center h2 text-decoration-underline col-8",children:" Done "}),Object(C.jsx)("div",{className:"col-3 text-end",onClick:function(){return D(k())},children:Object(C.jsx)("p",{className:"h1 btn-outline-success btn-warning w-50 text-center rounded-circle",style:{fontWeight:"bold",cursor:"pointer"},children:" \u2421   "})})]}),Object(C.jsx)("div",{className:"border-right",children:f.map((function(e,t){return Object(C.jsx)(P,{text:e,btntext:"Post",completeRemove:"Remove Data",removeFunction:"removeCompleteData",number:t},t)}))})]})]}),Object(C.jsx)("div",{className:u,children:Object(C.jsxs)("div",{className:"input-group bottomFix p-1 bg-dark text-white",children:[Object(C.jsx)("input",{type:"text",onKeyDown:function(e){13===e.keyCode&&F()},id:"post",value:o,onChange:function(e){return l(e.target.value)},className:"form-control ms-2 my-2  bg-dark text-white",placeholder:" Post Here ..."}),Object(C.jsx)("button",{onClick:F,className:" bg-dark text-white input-group-text mb-2 me-2 ",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"30",fill:"currentColor",style:{transform:"rotate(45deg)"},viewBox:"0 0 16 16",children:Object(C.jsx)("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"})})})]})})]})},S=Object(i.a)({reducer:m,preloadedState:d});l.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(r.a,{store:S,children:Object(C.jsx)(F,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2070c425.chunk.js.map