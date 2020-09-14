(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(32),c=n.n(i),o=n(5),l=n(27),u=n.n(l),s=n(25),d=n(8),f=n(2),m=n(3),p=n(52),h=n.n(p),v={bg:"#16191c",border:"#78818633",text:"#788186",textBorder:"#28c358"},g={green:"#28c358",mainButton:"#0735bf"};function b(){var e=Object(f.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n"]);return b=function(){return e},e}var E=m.a.div(b());function x(e){var t=e.style;return r.a.createElement(E,{style:t},r.a.createElement(h.a,{color:g.green,size:150}))}var w=n(58),j=n(10),O=n.n(j),y=n(17),k=n(55),P=n.n(k),C=function(){var e=P.a.create();return e.defaults.baseURL="http://localhost:4000",e.interceptors.request.use((function(e){return e.headers={"Content-Type":"application/json"},e})),e}(),_="OPEN_MODAL",q="CLOSE_MODAL",V="QUESTION_MODAL",M="CONFIRM_MODAL",z=function(e){return{type:_,payload:{name:V,data:e||{},closable:!0}}},H=function(){return{type:q}},Z="SET_QUIZ",A="SET_PAGE_COUNT",S="SET_COUNT",I="SET_LOADING",G="SET_ACTIVE_PAGE",B="SET_ERROR",T=function(e){return function(){var t=Object(y.a)(O.a.mark((function t(n){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:I,data:!0}),t.next=3,C.get("quiz",{params:{page:e}});case 3:a=t.sent,r=a.data,n({type:Z,data:r.quiz}),n({type:A,data:r.pageCount}),n({type:S,data:r.count}),n({type:G,data:e}),n({type:I,data:!1});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(y.a)(O.a.mark((function t(n,a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:B,data:e});case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};function L(){var e=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    height: 50px;\n"]);return L=function(){return e},e}function R(){var e=Object(f.a)(["\n    color: ",";\n    margin-right: 20px;\n    font-size: 16px;\n    cursor: pointer;\n"]);return R=function(){return e},e}var D=m.a.span(R(),(function(e){return e.active&&g.green})),Q=m.a.span(L());function U(e){var t=e.pageCount,n=e.activePage,a=Object(o.b)();return r.a.createElement(Q,null,Object(w.a)(Array(t).keys()).map((function(e){return r.a.createElement(D,{key:e,active:n===e+1,onClick:function(){a(T(e+1))}},e+1)})))}function W(){var e=Object(f.a)(["\n    flex:  ",";\n    padding: 20px 30px;\n    color: #909599;\n    font-size: 12px;\n    border-right: 1px solid #e3e3e7;\n    justify-content: center;\n    align-items: center;\n"]);return W=function(){return e},e}function F(){var e=Object(f.a)(["\n    display: flex;\n    flex: 1;\n    background-color: #f6f6f7;\n    border: 1px solid #e3e3e7;\n"]);return F=function(){return e},e}var J=m.a.div(F()),K=m.a.div(W(),(function(e){return e.tile}));function Y(){return r.a.createElement(J,null,r.a.createElement(K,{tile:1.5},"Photo"),r.a.createElement(K,{tile:5},"Answers"),r.a.createElement(K,{tile:3},"Tags"),r.a.createElement(K,{tile:.5},"Actionss"))}function X(){var e=Object(f.a)(["\n   width: 24px;\n   height: 24px;\n   background: ",";\n   margin-right: 5px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   color: white;\n"]);return X=function(){return e},e}function $(){var e=Object(f.a)(["\n    width: 240px;\n    height: 30px;\n    align-items: center;\n    display: flex;\n    margin-bottom: 10px;\n    padding: 2px 0;\n"]);return $=function(){return e},e}function ee(){var e=Object(f.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n"]);return ee=function(){return e},e}var te=Object(m.a)(K)(ee()),ne=m.a.div($()),ae=m.a.div(X(),(function(e){return e.correct?"green":"#707070"}));function re(e){var t=e.question;return r.a.createElement(te,{tile:5},r.a.createElement(ne,null,r.a.createElement(ae,{correct:!0},"1"),t.title),t.answers.map((function(e,t){return r.a.createElement(ne,{key:t},r.a.createElement(ae,null,t+1),e)})))}var ie=n(7);function ce(e){var t=e.name,n=e.color,a=e.onClick,i=e.style,c={overView:r.a.createElement("svg",{id:"Group_10","data-name":"Group 10",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{id:"Path_15","data-name":"Path 15",d:"M0,0H24V24H0Z",fill:"none"}),r.a.createElement("path",{id:"Path_16",className:"pathclass","data-name":"Path 16",d:"M13,21V11h8V21ZM3,13V3h8V13Zm6-2V5H5v6ZM3,21V15h8v6Zm2-2H9V17H5Zm10,0h4V13H15ZM13,3h8V9H13Zm2,2V7h4V5Z",fill:"currentColor"})),question:r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19.5",viewBox:"0 0 20 19.5"},r.a.createElement("path",{id:"Path_13",className:"pathclass","data-name":"Path 13",d:"M6.455,19,2,22.5V4A1,1,0,0,1,3,3H21a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1ZM11,14v2h2V14ZM8.567,8.813l1.962.393A1.5,1.5,0,1,1,12,11H11v2h1A3.5,3.5,0,1,0,8.567,8.813Z",transform:"translate(-2 -3)",fill:"currentColor"})),collection:r.a.createElement("svg",{id:"Group_41","data-name":"Group 41",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{id:"Path_39","data-name":"Path 39",d:"M0,0H24V24H0Z",fill:"none"}),r.a.createElement("path",{id:"Path_40",className:"pathclass","data-name":"Path 40",d:"M20,3a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3ZM11.189,13.158,5,14.25V19h7.218l-1.03-5.842ZM19,5H11.781l2.468,14H19ZM9.75,5H5v7.218l5.842-1.03Z",fill:"currentColor"})),user:r.a.createElement("svg",{id:"Group_45","data-name":"Group 45",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{id:"Path_43","data-name":"Path 43",d:"M0,0H24V24H0Z",fill:"none"}),r.a.createElement("path",{id:"Path_44",className:"pathclass","data-name":"Path 44",d:"M12,20h8v2H12a10,10,0,1,1,8-4H17.292A8,8,0,1,0,12,20Zm0-10a2,2,0,1,1,2-2A2,2,0,0,1,12,10ZM8,14a2,2,0,1,1,2-2A2,2,0,0,1,8,14Zm8,0a2,2,0,1,1,2-2A2,2,0,0,1,16,14Zm-4,4a2,2,0,1,1,2-2A2,2,0,0,1,12,18Z",fill:"currentColor"})),edit:r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("g",{id:"Group_29","data-name":"Group 29",opacity:"0.4"},r.a.createElement("path",{id:"Path_32","data-name":"Path 32",d:"M0,0H16V16H0Z",fill:"none"}),r.a.createElement("path",{id:"Path_33",className:"quizedit","data-name":"Path 33",d:"M5.752,12.5H3V9.719l7.415-7.5a.643.643,0,0,1,.917,0l1.835,1.855a.661.661,0,0,1,0,.927ZM3,13.812H14.673v1.311H3Z",transform:"translate(-0.836 -0.566)",fill:"currentColor"}))),delete:r.a.createElement("svg",{id:"Group_77","data-name":"Group 77",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{id:"Path_34","data-name":"Path 34",d:"M0,0H16V16H0Z",fill:"none"}),r.a.createElement("path",{id:"Path_35",className:"quizedit","data-name":"Path 35",d:"M5.32,4.656V2.664A.664.664,0,0,1,5.984,2H11.3a.664.664,0,0,1,.664.664V4.656h3.32V5.984H13.953v8.632a.664.664,0,0,1-.664.664h-9.3a.664.664,0,0,1-.664-.664V5.984H2V4.656ZM6.648,3.328V4.656h3.984V3.328Z",fill:"currentColor",transform:"translate(-0.64 -0.64)"})),add:r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"8",viewBox:"0 0 8 8"},r.a.createElement("g",{id:"Group_14","data-name":"Group 14",transform:"translate(-1608.5 -225.5)"},r.a.createElement("path",{id:"Path_23","data-name":"Path 23",d:"M1605.735,225.5v8",transform:"translate(6.765 0)",fill:"none",stroke:"#fff",strokeWidth:"1.5"}),r.a.createElement("path",{id:"Path_24","data-name":"Path 24",d:"M0,0V8",transform:"translate(1608.5 229.5) rotate(-90)",fill:"currentColor",stroke:"#fff",strokeWidth:"1.5"}))),close:r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17.53",height:"17.531",viewBox:"0 0 17.53 17.531"},r.a.createElement("g",{id:"Group_90","data-name":"Group 90",transform:"translate(8.765 -6.644) rotate(45)"},r.a.createElement("path",{id:"Path_23","data-name":"Path 23",d:"M1605.735,225.5v21.792",transform:"translate(-1594.839 -225.5)",fill:"none",stroke:"#16191c",strokeWidth:"3"})," ",r.a.createElement("path",{id:"Path_24","data-name":"Path 24",d:"M0,0V21.792",transform:"translate(0 10.896) rotate(-90)",fill:"none",stroke:"#16191c",strokeWidth:"3"}))),image:r.a.createElement("svg",{id:"Group_87","data-name":"Group 87",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},r.a.createElement("path",{id:"Path_52","data-name":"Path 52",d:"M0,0H20V20H0Z",fill:"none"})," ",r.a.createElement("path",{id:"Path_53","data-name":"Path 53",d:"M17,4.667H3.667V16.333L11.41,8.588a.833.833,0,0,1,1.178,0L17,13.008ZM2,3.828A.833.833,0,0,1,2.827,3H17.84a.827.827,0,0,1,.827.828V17.173A.833.833,0,0,1,17.84,18H2.827A.828.828,0,0,1,2,17.172ZM7,9.667A1.667,1.667,0,1,1,8.667,8,1.667,1.667,0,0,1,7,9.667Z",transform:"translate(-0.333 -0.5)",fill:"#0735bf"}))};return r.a.createElement("div",{style:Object(ie.a)({},i,{display:"flex",color:n,cursor:"pointer"}),onClick:a},c[t])}function oe(){var e=Object(f.a)(["\n    display: flex;\n    align-items: center;\n"]);return oe=function(){return e},e}var le=Object(m.a)(K)(oe());function ue(e){var t=e.questionId,n=Object(o.b)();return r.a.createElement(le,{tile:.5,style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},r.a.createElement(ce,{name:"edit",color:"#989898",onClick:function(){return n(z({questionId:t}))}}),r.a.createElement(ce,{name:"delete",color:"#989898",onClick:function(){n({type:_,payload:{name:M,data:{title:"Are you sure?",confirm:function(){return n((e=t,function(){var t=Object(y.a)(O.a.mark((function t(n,a){var r,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().quiz.questions,t.next=4,C.post("delete_quiz",{id:e});case 4:t.sent.data,i=r.filter((function(t){return t._id!==e})),n({type:Z,data:i}),n(H()),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),n(N(!0));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()));var e}}||{},closable:!0}})}}))}var se=n(29);function de(){var e=Object(f.a)(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 7px;\n    height: 100%;\n    background: ",";\n    transition: 0.3s;\n    opacity: ","\n"]);return de=function(){return e},e}function fe(){var e=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    position: relative;\n"]);return fe=function(){return e},e}function me(){var e=Object(f.a)(["\n    margin-right: 18px;\n    cursor: pointer;\n"]);return me=function(){return e},e}function pe(){var e=Object(f.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n"]);return pe=function(){return e},e}function he(){var e=Object(f.a)(["\n    width: 120px;\n    height: 80px;\n    border-radius: 2px;\n    overflow: hidden;\n    cursor: pointer;\n"]);return he=function(){return e},e}var ve=m.a.div(he()),ge=m.a.img(pe()),be=m.a.input(me()),Ee=Object(m.a)(K)(fe()),xe=m.a.div(de(),g.mainButton,(function(e){return e.visible?1:0}));function we(e){var t=e.image,n=Object(a.useState)(!1),i=Object(se.a)(n,2),c=i[0],o=i[1],l=function(){return o(!c)};return r.a.createElement(Ee,{tile:1.5},r.a.createElement(xe,{visible:c}),r.a.createElement(be,{type:"checkbox",checked:c,onChange:l}),r.a.createElement(ve,null,r.a.createElement(ge,{src:t,alt:"movie",onClick:l})))}function je(e){var t=e.tags;return r.a.createElement(le,{tile:3},t.map((function(e,t){return r.a.createElement("span",{key:t,style:{marginRight:5}},e,",")})))}function Oe(){var e=Object(f.a)(["\n    background: white;\n"]);return Oe=function(){return e},e}var ye=Object(m.a)(J)(Oe());function ke(e){var t=e.question;return r.a.createElement(ye,null,r.a.createElement(we,{image:t.image}),r.a.createElement(re,{question:t}),r.a.createElement(je,{tags:t.tags}),r.a.createElement(ue,{questionId:t._id}))}function Pe(){var e=Object(f.a)(["\n    display: flex;\n    background: ",';\n    color: white;\n    height: 40px;\n    width: 150px;\n    border-radius: 3px;\n    justify-content: space-around;\n    font-family: "Poppins", sans-serif;\n    padding: 0 20px;\n    align-items: center;\n\n    &:hover {\n        opacity: 0.8;\n    }\n']);return Pe=function(){return e},e}function Ce(){var e=Object(f.a)(["\n    font-size: 30px;\n    font-weight: 600;\n"]);return Ce=function(){return e},e}function _e(){var e=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"]);return _e=function(){return e},e}var qe=m.a.div(_e()),Ve=m.a.h3(Ce()),Me=m.a.button(Pe(),g.mainButton);function ze(e){var t=e.count,n=Object(o.b)();return r.a.createElement(qe,null,r.a.createElement(Ve,null,"Quiz Questions"),r.a.createElement("span",null,t," Questions"),r.a.createElement(Me,{onClick:function(){n(z())}},r.a.createElement(ce,{name:"add"}),"Add question"))}function He(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 50px 20px;\n"]);return He=function(){return e},e}var Ze=m.a.div(He());function Ae(){var e=Object(o.c)((function(e){return e.quiz})),t=e.questions,n=e.count,a=e.pageCount,i=e.activePage;return r.a.createElement(Ze,null,r.a.createElement(ze,{count:n}),r.a.createElement(Y,null),null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(ke,{key:e._id,question:e})})),r.a.createElement(U,{pageCount:a,activePage:i}))}function Se(){var e=Object(o.c)((function(e){return e.quiz})),t=e.loading,n=e.questions,i=Object(o.b)();return Object(a.useEffect)((function(){n.length||i(T(1))}),[i,n]),t?r.a.createElement(x,null):r.a.createElement("div",null,r.a.createElement(Ae,null))}function Ie(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 31px;\n    background: ",";\n    color: white;\n    height: 200px;\n"]);return Ie=function(){return e},e}var Ge=m.a.div(Ie(),g.green);function Be(){return r.a.createElement(Ge,null,"Page Not Found")}function Te(){var e=Object(f.a)(["\n    font-size: 12px;\n"]);return Te=function(){return e},e}function Ne(){var e=Object(f.a)(["\n    font-weight: 700;\n"]);return Ne=function(){return e},e}function Le(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-left: 10px;\n"]);return Le=function(){return e},e}function Re(){var e=Object(f.a)(["\n    border-radius: 10px;\n    object-fit: cover;\n"]);return Re=function(){return e},e}function De(){var e=Object(f.a)(["\n    display: flex;\n"]);return De=function(){return e},e}var Qe=m.a.div(De()),Ue=m.a.img(Re()),We=m.a.div(Le()),Fe=m.a.span(Ne()),Je=m.a.span(Te());function Ke(){return r.a.createElement(Qe,null,r.a.createElement(Ue,{src:"/assets/avatar.png"}),r.a.createElement(We,null,r.a.createElement(Fe,null,"Davit Bakuradze"),r.a.createElement(Je,null,"Administrator")))}function Ye(){var e=Object(f.a)(["\n    display: flex;\n"]);return Ye=function(){return e},e}function Xe(){var e=Object(f.a)(["\n    display: flex;\n    height: 100px;\n    border-bottom: 1px solid ",";\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 50px;\n"]);return Xe=function(){return e},e}var $e=m.a.header(Xe(),v.border),et=m.a.div(Ye());function tt(){return r.a.createElement($e,null,r.a.createElement(et,null,r.a.createElement(ce,{name:"question",color:g.green}),r.a.createElement("span",{style:{marginLeft:10}},"Questions")),r.a.createElement(Ke,null))}function nt(){var e=Object(f.a)(["\n    margin-right: 10px;\n"]);return nt=function(){return e},e}function at(){var e=Object(f.a)(["\n    height: 60px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: ",";\n    border: 2px solid transparent;\n    border-radius: 6px;\n    padding: 0 30px;\n    cursor: pointer;\n    &:hover {\n        color: #fff;\n        border: 2px solid ",";\n        box-shadow: 0 0 5px ",";\n        transition: all 0.4s ease-in-out;\n    }\n"]);return at=function(){return e},e}var rt=m.a.div(at(),v.text,v.textBorder,v.textBorder),it=m.a.div(nt());function ct(e){var t=e.name,n=e.icon;return r.a.createElement(rt,null,r.a.createElement(it,null,r.a.createElement(ce,{name:n})),t)}function ot(){var e=Object(f.a)(["\n    display: flex;\n    height: 100px;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid ",";\n    margin-bottom: 60px;\n"]);return ot=function(){return e},e}function lt(){var e=Object(f.a)(["\n    height: 100vh;\n    background-color: ",";\n    padding: 0 20px;\n    position: fixed;\n"]);return lt=function(){return e},e}var ut=m.a.div(lt(),v.bg),st=m.a.div(ot(),v.border);function dt(){return r.a.createElement("aside",null,r.a.createElement(ut,null,r.a.createElement(s.b,{to:"/"},r.a.createElement(st,null,r.a.createElement("img",{src:"/assets/logo.svg",alt:"lokokino"}))),r.a.createElement(s.b,{to:"/"},r.a.createElement(ct,{name:"Questions",icon:"question"})),r.a.createElement(s.b,{to:"/movies"},r.a.createElement(ct,{name:"Movies",icon:"overView"})),r.a.createElement(ct,{name:"Collections",icon:"collection"}),r.a.createElement(ct,{name:"User",icon:"user"}),"\u10e1            "))}function ft(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return ft=function(){return e},e}function mt(){var e=Object(f.a)(["\n    display: grid;\n    grid-template-columns: 250px auto;\n"]);return mt=function(){return e},e}var pt=m.a.div(mt()),ht=m.a.div(ft());function vt(e){var t=e.children;return r.a.createElement(pt,null,r.a.createElement(dt,null),r.a.createElement(ht,null,r.a.createElement(tt,null),t))}function gt(e){var t=e.movies;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("span",{key:e._id},t," ",e.title,r.a.createElement("br",null))})))}var bt="SET_MOVIES",Et="SET_LOADING";function xt(){var e=Object(o.c)((function(e){return e.movies})),t=e.loading,n=e.movieList,i=Object(o.b)();return Object(a.useEffect)((function(){var e;n.length||i((e=1,function(){var t=Object(y.a)(O.a.mark((function t(n){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:Et,data:!0}),t.next=3,C.get("movies",{params:{page:e}});case 3:a=t.sent,r=a.data,n({type:bt,data:r.data}),n({type:Et,data:!1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[i,n]),t?r.a.createElement(x,null):r.a.createElement("div",null,r.a.createElement(gt,{movies:n}))}var wt=function(){return r.a.createElement(s.a,null,r.a.createElement(vt,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0},r.a.createElement(Se,null)),r.a.createElement(d.a,{path:"/movies",exact:!0},r.a.createElement(xt,null)),r.a.createElement(d.a,{path:"*"},r.a.createElement(Be,null)))))},jt=n(23);function Ot(){var e=Object(f.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid blue;\n"]);return Ot=function(){return e},e}function yt(){var e=Object(f.a)(["\n    width: 150px;\n    height: 40px;\n    background-color: blue;\n    color: white;\n    font-size: 14px;\n    font-family: 'Poppins';\n    border-radius: 10px;\n    margin-right: 20px;\n"]);return yt=function(){return e},e}function kt(){var e=Object(f.a)(["\n    padding: 50px 0;\n    width: 500px;\n    flex-direction: column;\n    height: 200px;\n    background: white;\n    border-radius: 10px;\n    justify-content: space-around;\n    display: flex;\n    align-items: center;\n"]);return kt=function(){return e},e}var Pt=m.a.div(kt()),Ct=m.a.button(yt()),_t=Object(m.a)(Ct)(Ot());function qt(e){var t=e.data,n=t.confirm,a=t.title,i=Object(o.b)();return r.a.createElement(Pt,null,a,r.a.createElement("div",null,r.a.createElement(_t,{onClick:function(){return i(H())}},"No"),r.a.createElement(Ct,{onClick:n},"Yes")))}var Vt=n(104);function Mt(){var e=Object(f.a)(["\n    display: flex;\n    margin-top: 90px;\n    justify-content: flex-end;\n    align-items: center; \n"]);return Mt=function(){return e},e}function zt(){var e=Object(f.a)(['\n    width: 100%;\n    height: 56px;\n    background: #e5eaf9;\n    border-radius: 6px;\n    color: #0735bf;\n    font-size: 14px;\n    font-family: "Poppins", sans-serif;\n    display: flex;\n    margin-top: 15px;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n']);return zt=function(){return e},e}function Ht(){var e=Object(f.a)(["\n    height: 56px;\n    width: 582px;\n    margin-bottom: 18px;\n    background-color: ",";\n    padding-left: 28px;\n    border:",';\n    font-family: "Poppins", sans-serif;\n    font-size: 14px;\n    border-radius: 6px;\n']);return Ht=function(){return e},e}function Zt(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Zt=function(){return e},e}function At(){var e=Object(f.a)(["\n    object-fit: cover;\n    width: 100%;\n    height: 300px;\n    border-radius: 6px;\n    filter: blur(",");\n"]);return At=function(){return e},e}function St(){var e=Object(f.a)(["\n    display: grid;\n    grid-template-columns: 490px 610px;\n    grid-column-gap: 52px;\n    margin: 17px 0;\n"]);return St=function(){return e},e}function It(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    font-size: 20px;\n"]);return It=function(){return e},e}function Gt(){var e=Object(f.a)(["\n    background: white;\n    flex-direction: column;\n    position: relative;\n    width: 1150px;\n    height: 500px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: 10px;\n    padding: 50px 50px;\n"]);return Gt=function(){return e},e}var Bt=m.a.div(Gt()),Tt=m.a.div(It()),Nt=m.a.div(St()),Lt=m.a.img(At(),(function(e){return e.loading})),Rt=m.a.div(Zt()),Dt=m.a.input(Ht(),(function(e){return e.correct?"#eaf8ef":"#fafafa"}),(function(e){return e.correct?"1px solid #28c358":"1px solid #dcdce0"})),Qt=m.a.button(zt()),Ut=m.a.div(Mt());function Wt(e){var t=e.data,n=e.close,i=Object(o.c)((function(e){return e.quiz})),c=i.questions,l=i.error,s=Object(o.b)(),d=Object(a.useRef)(null),f=Object(a.useRef)(null),m=Object(a.useRef)(null),p=Object(a.useState)({title:"",answers:[],tags:[],image:null}),h=Object(se.a)(p,2),v=h[0],g=h[1],b=Object(a.useState)(!1),E=Object(se.a)(b,2),w=E[0],j=E[1];Object(a.useEffect)((function(){if(f.current=u.a.storage(),m.current=u.a.storage().ref(),t.questionId){var e=c.find((function(e){var n=e._id;return t.questionId===n}));g({title:e.title,tags:e.tags.join(","),image:e.image,answer1:e.answers[0],answer2:e.answers[1],answer3:e.answers[2]})}}),[t]);var k=function(e){var t=e.target;g(Object(ie.a)({},v,Object(jt.a)({},t.name,t.value))),l&&s(N(!1))};return r.a.createElement(Bt,{onClick:function(e){return e.stopPropagation()}},r.a.createElement(Tt,null,t.questionId?"Edit Question":"Add Question",r.a.createElement(ce,{name:"close",onClick:n,onChange:k})),r.a.createElement(Nt,null,r.a.createElement("div",null,r.a.createElement("div",{style:{position:"relative"}},w&&r.a.createElement(x,null),r.a.createElement(Lt,{src:v.image||"https://placekitten.com/900/500",loading:w?"3px":0})),r.a.createElement(Qt,{onClick:function(){return d.current.click()}},r.a.createElement(ce,{name:"image",style:{marginRight:5}})," Change image"),r.a.createElement(Dt,{placeholder:"type tags here",defaultValue:v.tags,name:"tags",onChange:k,style:{marginTop:15,width:462}}),r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=m.current.child("images/".concat(Object(Vt.a)()));j(!0),n.put(t).then((function(e){return n.getDownloadURL()})).then((function(e){g(Object(ie.a)({},v,{image:e})),j(!1)}))},style:{display:"none"},ref:d})),r.a.createElement(Rt,null,r.a.createElement(Dt,{correct:!0,placeholder:"correct answer",defaultValue:v.title,name:"title",onChange:k}),r.a.createElement(Dt,{placeholder:"type answer here",defaultValue:v.answer1,name:"answer1",onChange:k}),r.a.createElement(Dt,{placeholder:"type answer here",defaultValue:v.answer2,name:"answer2",onChange:k}),r.a.createElement(Dt,{placeholder:"type answer here",defaultValue:v.answer3,name:"answer3",onChange:k}),r.a.createElement("span",{style:{color:"red",fontSize:12}},l?"form is invalid":""),r.a.createElement(Ut,null,r.a.createElement("span",{style:{marginRight:10,cursor:"pointer"},onClick:n},"Cancel"),r.a.createElement(Me,{onClick:function(){var e,n=v.title,a=v.image,r=(null===(e=v.tags)||void 0===e?void 0:e.split(","))||[],i=[v.answer1,v.answer2,v.answer3];if(!t.questionId)return s(function(e){return function(){var t=Object(y.a)(O.a.mark((function t(n,a){var r,i,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().quiz.questions,t.prev=1,t.next=4,C.post("quiz",e);case 4:i=t.sent,c=i.data,r.unshift(c.question),r.pop(),n({type:Z,data:r}),n(H()),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n(N(!0));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}({title:n,image:a,answers:i,tags:r}));s(function(e){return function(){var t=Object(y.a)(O.a.mark((function t(n,a){var r,i,c,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().quiz.questions,t.next=4,C.put("quiz/".concat(e.id),e);case 4:i=t.sent,c=i.data,o=r.findIndex((function(t){return t._id===e.id})),r[o]=c.question,n({type:Z,data:r}),n(H()),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),n(N(!0));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}()}({title:n,image:a,answers:i,tags:r,id:t.questionId}))}},"Save Question")))))}function Ft(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0, 0.8);\n    z-index: 20;\n"]);return Ft=function(){return e},e}var Jt=m.a.div(Ft()),Kt=function(e){var t,n=e.name,a=e.data,i=e.close,c=e.closable,o=(t={},Object(jt.a)(t,V,r.a.createElement(Wt,{close:i,data:a})),Object(jt.a)(t,M,r.a.createElement(qt,{close:i,data:a})),t);return r.a.createElement(Jt,{className:"app-modal",onClick:c&&i,style:null===n?{display:"none"}:{display:"flex"}},o[n]||null)},Yt={apiKey:"AIzaSyBsWyqeu1desgh3d2dmMT8nhp0attb1gSo",authDomain:"moviequiz-fe630.firebaseapp.com",databaseURL:"https://moviequiz-fe630.firebaseio.com",projectId:"moviequiz-fe630",storageBucket:"moviequiz-fe630.appspot.com",messagingSenderId:"834534998015",appId:"1:834534998015:web:a5a8f140dbc7bb262731ca"};var Xt=function(){var e=Object(o.c)((function(e){return e.modal})),t=e.data,n=e.name,i=e.closable;Object(a.useEffect)((function(){u.a.initializeApp(Yt)}),[]);var c=Object(o.b)();return r.a.createElement("div",{className:"App"},r.a.createElement(wt,null),r.a.createElement(Kt,{data:t,name:n,close:function(){return c(H())},closable:i}))},$t=n(22),en=n(56),tn=n(57),nn="SET_USER",an={user:null},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case nn:return Object(ie.a)({},e,{user:t.data});default:return Object(ie.a)({},e)}},cn={questions:[],pageCount:!0,count:!0,loading:!0,activePage:1,error:null},on=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:cn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(ie.a)({},e,{questions:t.data});case A:return Object(ie.a)({},e,{pageCount:t.data});case S:return Object(ie.a)({},e,{count:t.data});case G:return Object(ie.a)({},e,{activePage:t.data});case B:return Object(ie.a)({},e,{error:t.data});case I:return Object(ie.a)({},e,{loading:t.data});default:return Object(ie.a)({},e)}},ln={name:null,data:{},closable:!0},un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(ie.a)({},e,{name:t.payload.name,data:t.payload.data,closable:t.payload.closable});case q:return Object(ie.a)({},e,{name:null,data:null});default:return Object(ie.a)({},e)}},sn={movieList:[],pageCount:!0,count:!0,loading:!0,activePage:1,error:null},dn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case bt:return Object(ie.a)({},e,{movieList:t.data});case Et:return Object(ie.a)({},e,{loading:t.data});default:return Object(ie.a)({},e)}},fn=Object($t.createStore)(Object($t.combineReducers)({auth:rn,quiz:on,modal:un,movies:dn}),Object(tn.composeWithDevTools)(Object($t.applyMiddleware)(en.a)));n(100);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:fn},r.a.createElement(Xt,null))),document.getElementById("root"))},59:function(e,t,n){e.exports=n(101)}},[[59,1,2]]]);
//# sourceMappingURL=main.355a52f4.chunk.js.map