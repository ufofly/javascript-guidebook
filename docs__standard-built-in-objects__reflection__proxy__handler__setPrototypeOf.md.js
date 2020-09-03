(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[361],{fyjg:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"proxy---handlersetprototypeof"},l.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlersetprototypeof"},l.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.setPrototypeOf"),l.a.createElement("p",null,l.a.createElement("code",null,"handler.setPrototypeOf()")," \u65b9\u6cd5\u7528\u4e8e\u62e6\u622a ",l.a.createElement("code",null,"Object.setPrototypeOf")," \u64cd\u4f5c\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  setPrototypeOf: function(target, prototype) {\n    // do something\n  },\n});\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"target")),l.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("h2",{id:"\u8bf4\u660e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),l.a.createElement("h3",{id:"\u62e6\u622a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},l.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"Object.setPrototypeOf()")),l.a.createElement("li",null,l.a.createElement("code",null,"Reflect.setPrototypeOf()"))),l.a.createElement("h3",{id:"\u7ea6\u675f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),l.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",l.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c ",l.a.createElement("code",null,"target")," \u4e0d\u53ef\u6269\u5c55\uff0c\u539f\u578b\u53c2\u6570\u5fc5\u987b\u4e0e ",l.a.createElement("code",null,"Object.getPrototypeOf(target)")," \u7684\u503c\u76f8\u540c")),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u5982\u4f55\u62e6\u622a ",l.a.createElement("code",null,"Object.setPrototypeOf()"),"\uff1a"),l.a.createElement(c.a,{code:"const handler = {\n  setPrototypeOf(target, proto) {\n    throw new Error('Changing the prototype is forbidden');\n  },\n};\n\nconst proto = {};\n\nconst target = function() {};\n\nconst proxy = new Proxy(target, handler);\n\nObject.setPrototypeOf(proxy, proto);\n// Error: Changing the prototype is forbidden\n",lang:"js"}),l.a.createElement("p",null,"\u6ce8\u610f\uff0c\u8be5\u65b9\u6cd5\u53ea\u80fd\u8fd4\u56de\u5e03\u5c14\u503c\uff0c\u5426\u5219\u4f1a\u88ab\u81ea\u52a8\u8f6c\u4e3a\u5e03\u5c14\u503c\u3002\u53e6\u5916\uff0c\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55\uff08non-extensible\uff09\uff0c",l.a.createElement("code",null,"setPrototypeOf()")," \u65b9\u6cd5\u4e0d\u5f97\u6539\u53d8\u76ee\u6807\u5bf9\u8c61\u7684\u539f\u578b\u3002")))}}}]);