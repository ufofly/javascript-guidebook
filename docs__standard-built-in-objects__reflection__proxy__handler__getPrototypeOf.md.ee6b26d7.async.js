(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[343],{d9mw:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(r);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"proxy---handlergetprototypeof"},l.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlergetprototypeof"},l.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.getPrototypeOf"),l.a.createElement("p",null,l.a.createElement("code",null,"handler.getPrototypeOf()")," \u65b9\u6cd5\u7528\u4e8e\u62e6\u622a\u83b7\u53d6\u5bf9\u8c61\u539f\u578b\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(o.a,{code:"const proxy = new Proxy(target, {\n  getPrototypeOf: function(target) {\n    // do something\n  },\n});\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"target")),l.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("h2",{id:"\u8bf4\u660e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),l.a.createElement("h3",{id:"\u62e6\u622a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},l.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"Object.getPropertyOf()")),l.a.createElement("li",null,l.a.createElement("code",null,"Reflect.getPrototypeOf()")),l.a.createElement("li",null,l.a.createElement("code",null,"__proto__")),l.a.createElement("li",null,l.a.createElement("code",null,"Object.prototype.isPrototypeOf()")),l.a.createElement("li",null,l.a.createElement("code",null,"instanceof"))),l.a.createElement("h3",{id:"\u7ea6\u675f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),l.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",l.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"getPrototypeOf()")," \u65b9\u6cd5\u8fd4\u56de\u7684\u4e0d\u662f\u5bf9\u8c61\u4e5f\u4e0d\u662f ",l.a.createElement("code",null,"null")),l.a.createElement("li",null,"\u76ee\u6807\u5bf9\u8c61\u662f\u4e0d\u53ef\u6269\u5c55\u7684\uff0c\u4e14 ",l.a.createElement("code",null,"getPrototypeOf()")," \u65b9\u6cd5\u8fd4\u56de\u7684\u539f\u578b\u4e0d\u662f\u76ee\u6807\u5bf9\u8c61\u672c\u8eab\u7684\u539f\u578b")),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement(o.a,{code:"const obj = {};\nconst proto = {};\nconst handler = {\n  getPrototypeOf(target) {\n    console.log(target === obj);\n    // true\n    console.log(this === handler);\n    // true\n    return proto;\n  },\n};\n\nconst proxy = new Proxy(obj, handler);\n\nconsole.log(Object.getPrototypeOf(proxy) === proto);\n// true\n",lang:"js"}),l.a.createElement("p",null,"\u4e94\u79cd\u89e6\u53d1 ",l.a.createElement("code",null,"getPrototypeOf()")," \u4ee3\u7406\u65b9\u6cd5\u7684\u65b9\u5f0f\uff1a"),l.a.createElement(o.a,{code:"const obj = {};\n\nconst proxy = new Proxy(obj, {\n  getPrototypeOf(target) {\n    return Array.prototype;\n  },\n});\n\nconsole.log(\n  Object.getPrototypeOf(proxy) === Array.prototype,\n  // true\n  Reflect.getPrototypeOf(proxy) === Array.prototype,\n  // true\n  proxy.__proto__ === Array.prototype,\n  // true\n  Array.prototype.isPrototypeOf(proxy),\n  // true\n  proxy instanceof Array\n  // true\n);\n",lang:"js"})))}}}]);