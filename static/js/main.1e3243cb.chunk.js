(window["webpackJsonpvk-list-date"]=window["webpackJsonpvk-list-date"]||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);a(99),a(125),a(127),a(128),a(130),a(131),a(132),a(133),a(134),a(135),a(136),a(137),a(139),a(140),a(141),a(142),a(143),a(144),a(145),a(146),a(147),a(148),a(150),a(151),a(152),a(153),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(167);var n,r,c=a(0),l=a.n(c),u=a(62),i=a.n(u),s=a(33),o=a.n(s),p=a(64),m=a.n(p),d=a(93),b=a(48),f=a(97),E=a.n(f),v=a(96),h=a.n(v),w=(a(176),a(94)),g=a.n(w),j=a(63),O=a.n(j),x=a(38),k=a.n(x),y=a(95),A=a.n(y),z=a(37),D=a.n(z),I=new Date,K=new Date(2019,9,28),U=new Date(2019,11,30),V=new Date(2020,2,23);K-I>0?r=K:U-I>0?r=U:V-I>0&&(r=V),n=Math.round((r-I)/1e3/60/60/24);var W,_=["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"][(W=n)%100>4&&W%100<20?2:[2,0,1,1,1,2][W%10<5?W%10:5]],S=function(e){var t=e.id;e.go,e.fetchedUser;return l.a.createElement(g.a,{id:t},l.a.createElement(O.a,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u0430\u043d\u0438\u043a\u0443\u043b"),l.a.createElement(A.a,{title:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u0430\u043d\u0438\u043a\u0443\u043b"},l.a.createElement(D.a,null,l.a.createElement(k.a,{size:"xl",level:"2"},"\ud83c\udf27 \u041e\u0441\u0435\u043d\u043d\u0438\u0435 \u043a\u0430\u043d\u0438\u043a\u0443\u043b\u044b \u043d\u0430\u0447\u043d\u0443\u0442\u0441\u044f 28-\u0433\u043e \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u0438 \u043f\u0440\u043e\u0434\u043b\u044f\u0442\u0441\u044f \u0434\u043e 4-\u0433\u043e \u043d\u043e\u044f\u0431\u0440\u044f.")),l.a.createElement(D.a,null,l.a.createElement(k.a,{size:"xl",level:"2"},"\u2744 \u0417\u0438\u043c\u043d\u0438\u0435 \u043a\u0430\u043d\u0438\u043a\u0443\u043b\u044b \u043d\u0430\u0447\u043d\u0443\u0442\u0441\u044f 30-\u0433\u043e \u0434\u0435\u043a\u0430\u0431\u0440\u044f \u0438 \u043f\u0440\u043e\u0434\u043b\u044f\u0442\u0441\u044f \u0434\u043e 12-\u0433\u043e \u044f\u043d\u0432\u0430\u0440\u044f.")),l.a.createElement(D.a,null,l.a.createElement(k.a,{size:"xl",level:"2"},"\ud83c\udf31 \u0412\u0435\u0441\u0435\u043d\u043d\u0438\u0435 \u043a\u0430\u043d\u0438\u043a\u0443\u043b\u044b \u043d\u0430\u0447\u043d\u0443\u0442\u0441\u044f 23-\u0433\u043e \u043c\u0430\u0440\u0442\u0430 \u0438 \u043f\u0440\u043e\u0434\u043b\u044f\u0442\u0441\u044f \u0434\u043e 30-\u0433\u043e \u043c\u0430\u0440\u0442\u0430.")),l.a.createElement(D.a,null,l.a.createElement(k.a,{size:"xl",level:"2"},"\u23f1 \u041a\u0430\u043d\u0438\u043a\u0443\u043b\u044b \u043d\u0430\u0441\u0442\u0443\u043f\u044f\u0442 \u0447\u0435\u0440\u0435\u0437 ",n," ",_,"."))))},C=function(){var e=Object(c.useState)("home"),t=Object(b.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),u=Object(b.a)(r,2),i=u[0],s=u[1],p=Object(c.useState)(l.a.createElement(h.a,{size:"large"})),f=Object(b.a)(p,2),v=f[0],w=f[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,s(t),w(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.send("VKWebAppGetCommunityAuthToken",{app_id:7177550,group_id:137849330,scope:"app_widget"}),o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);return l.a.createElement(E.a,{activePanel:a,popout:v},l.a.createElement(S,{id:"home",fetchedUser:i,go:function(e){n(e.currentTarget.dataset.to)}}))};o.a.send("VKWebAppInit"),i.a.render(l.a.createElement(C,null),document.getElementById("root"))},98:function(e,t,a){e.exports=a(197)}},[[98,1,2]]]);
//# sourceMappingURL=main.1e3243cb.chunk.js.map