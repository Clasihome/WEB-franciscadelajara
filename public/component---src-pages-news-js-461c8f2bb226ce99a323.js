(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FJi0:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("JzyJ"),l=n("MX8y"),o=n("vOnD"),c=o.b.div.withConfig({componentId:"jjvxkv-0"})(["background-image:linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(",");height:100vh;background-size:cover;background-position:center;background-repeat:no-repeat;display:flex;justify-content:flex-start;align-items:center;margin:0;@media(min-width:768px){height:50vh;}"],(function(e){return e.theme.news.hero.background})),m=o.b.h1.withConfig({componentId:"jjvxkv-1"})(["color:#fff;font-weight:300;font-size:36px;width:100%;text-align:center;@media(min-width:768px){font-size:50px;width:50%;}"]),u=function(){var e=Object(a.useContext)(l.a);return r.a.createElement(c,null,r.a.createElement(m,null,e.news.hero.title))},d=n("wBNj"),s=n("q7Nl"),p=o.b.nav.withConfig({componentId:"sc-53dvip-0"})(["display:flex;justify-content:center;align-items:center;padding:2rem 0;"]),f=o.b.button.withConfig({componentId:"sc-53dvip-1"})(["background:transparent;border:none;cursor:pointer;transition:250ms ease;"]),g=Object(o.b)(f).withConfig({componentId:"sc-53dvip-2"})(["color:#919191;margin:0 1rem;&:hover{color:",";}"],(function(e){return e.theme.main.primaryColor})),E=o.b.svg.withConfig({componentId:"sc-53dvip-3"})(["fill:#919191;transition:250ms ease;",":hover &{fill:",";}"],f,(function(e){return e.theme.main.primaryColor})),h=o.b.nav.withConfig({componentId:"sc-53dvip-4"})(["color:#919191;display:flex;align-items:center;margin-bottom:2rem;"]),b=o.b.span.withConfig({componentId:"sc-53dvip-5"})([""]),w=o.b.ul.withConfig({componentId:"sc-53dvip-6"})(["list-style:none;margin:0 1rem;padding:0;display:flex;"]),v=o.b.button.withConfig({componentId:"sc-53dvip-7"})(["background-color:",";color:",";border:none;cursor:pointer;width:106px;height:34px;border-radius:25px;"],(function(e){return e.active?e.theme.main.primaryColor:"transparent"}),(function(e){return e.active?"#fff":"#000"})),C=function(){Object(a.useContext)(l.a).office.officeId;var e=Object(a.useContext)(l.a).news.items,t=Object(a.useState)(e),n=t[0],i=t[1],o=Object(a.useState)("TODAS"),c=o[0],m=o[1];return Object(a.useEffect)((function(){switch(c){case"TODAS":return i(e);case"LEGALES":return i(e.filter((function(e){return"Legales"===e.tag})));case"NOTICIAS":return i(e.filter((function(e){return"Noticias"===e.tag})));default:return i(e)}}),[c]),r.a.createElement(d.Container,null,r.a.createElement("div",{style:{paddingTop:"5rem"}},r.a.createElement(d.Row,null,r.a.createElement(d.Col,{xs:12},r.a.createElement(h,null,r.a.createElement(b,null,"Categorias: "),r.a.createElement(w,null,r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return m("TODAS")},active:"TODAS"===c},"Todas")),r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return m("LEGALES")},active:"LEGALES"===c},"Legales")),r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return m("NOTICIAS")},active:"NOTICIAS"===c},"Noticias"))))),n.map((function(e){return r.a.createElement(d.Col,{key:e.id,xs:12,md:4,style:{margin:"1rem 0"}},r.a.createElement(s.d,e))})),r.a.createElement(d.Col,{xs:12},r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(E,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},r.a.createElement("path",{d:"m0.28783 6.3069 6.0345-6.0196c0.38387-0.38312 1.0062-0.38312 1.3899 0 0.38371 0.38278 0.38371 1.0036 0 1.3863l-5.3396 5.3264 5.3394 5.3262c0.38371 0.383 0.38371 1.0037 0 1.3865-0.38371 0.3829-1.006 0.3829-1.3899 0l-6.0345-6.0197c-0.19186-0.19148-0.28767-0.44217-0.28767-0.69299 0-0.25094 0.096005-0.50181 0.28783-0.6932z"}))),r.a.createElement(g,null,"1"),r.a.createElement(g,null,"2"),r.a.createElement(g,null,"3"),r.a.createElement(g,null,"4"),r.a.createElement(g,null,"5"),r.a.createElement(f,null,r.a.createElement(E,{width:"8",height:"14",fill:"none",version:"1.1",viewBox:"0 0 8 14"},r.a.createElement("path",{d:"m7.7122 7.6931-6.0345 6.0196c-0.38387 0.3831-1.0062 0.3831-1.3899 0-0.38371-0.3828-0.38371-1.0036 0-1.3864l5.3396-5.3264-5.3394-5.3262c-0.38371-0.38293-0.38371-1.0037 0-1.3865 0.38371-0.38293 1.0061-0.38293 1.3899 0l6.0345 6.0197c0.19185 0.19148 0.28767 0.44217 0.28767 0.69299 0 0.25094-0.096 0.50181-0.28783 0.6932z"}))))))))},x=n("nrwI");t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(u,null),r.a.createElement(C,null),r.a.createElement(d.Container,null,r.a.createElement(d.Row,null,r.a.createElement(d.Col,{xs:12},r.a.createElement(x.a,null)))))}},nrwI:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("vOnD"),l=n("wBNj"),o=(n("MX8y"),n("qTur")),c=n("Wbzz"),m=i.b.div.withConfig({componentId:"sc-5j4wy4-0"})(["padding:2rem 0;border-top:1px solid #dadada;border-bottom:1px solid #dadada;"]),u=i.b.p.withConfig({componentId:"sc-5j4wy4-1"})(["text-align:center;@media(min-width:768px){text-align:left;}"]);t.a=function(){return r.a.createElement(m,null,r.a.createElement(l.Container,null,r.a.createElement(l.Row,{align:"center"},r.a.createElement(l.Col,{xs:12,md:9},r.a.createElement(u,null,"¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.")),r.a.createElement(l.Col,{xs:12,md:3},r.a.createElement(o.a,{outlined:!0,primary:!0,block:!0,onClick:function(){return Object(c.b)("/contact")}},"Contáctanos")))))}}}]);
//# sourceMappingURL=component---src-pages-news-js-461c8f2bb226ce99a323.js.map