(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[377],{UoiE:function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"stringprototypeincludes"},a.a.createElement("a",{"aria-hidden":"true",href:"#stringprototypeincludes"},a.a.createElement("span",{className:"icon icon-link"})),"String.prototype.includes()"),a.a.createElement("p",null,a.a.createElement("code",null,"includes()")," \u65b9\u6cd5\u7528\u4e8e\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u5305\u542b\u5728\u53e6\u4e00\u4e2a\u5b57\u7b26\u4e32\u4e2d\uff0c\u6839\u636e\u60c5\u51b5\u8fd4\u56de ",a.a.createElement("code",null,"true")," \u6216 ",a.a.createElement("code",null,"false"),"\u3002"),a.a.createElement("h2",{id:"\u8bed\u6cd5"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},a.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),a.a.createElement(c.a,{code:"str.includes( searchString [, startIndex] )\n",lang:"js"}),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"searchString")),a.a.createElement("td",null,"\u8981\u5728\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u7684\u5b57\u7b26\u4e32"),a.a.createElement("td",null,"string")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"startIndex")),a.a.createElement("td",null,"\u4ece\u5f53\u524d\u5b57\u7b26\u4e32\u6307\u5b9a\u7d22\u5f15\u4f4d\u7f6e\u5f00\u53d1\u641c\u7d22\u5b50\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u4e3a 0\uff0c\u5305\u542b\u8be5\u7d22\u5f15"),a.a.createElement("td",null,"number")))),a.a.createElement("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u4f60\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u5426\u5305\u542b\u53e6\u5916\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002"),a.a.createElement("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u641c\u7d22\u5339\u914d\u7684\u5b57\u7b26\u4e32\u662f\u533a\u5206\u5927\u5c0f\u5199\u7684\u3002"),a.a.createElement("h2",{id:"\u793a\u4f8b"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),a.a.createElement(c.a,{code:"var str = 'To be, or not to be, that is the question.';\n\nconsole.log(str.includes('To be'));\n// true\n\nconsole.log(str.includes('question'));\n// true\n\nconsole.log(str.includes('nonexistent'));\n// false\n\nconsole.log(str.includes('To be', 1));\n// false\n\nconsole.log(str.includes('TO BE'));\n// false\n",lang:"js"}),a.a.createElement("h2",{id:"polyfill"},a.a.createElement("a",{"aria-hidden":"true",href:"#polyfill"},a.a.createElement("span",{className:"icon icon-link"})),"Polyfill"),a.a.createElement(c.a,{code:"if (!String.prototype.includes) {\n  String.prototype.includes = function(searchString, startIndex) {\n    'use strict';\n\n    if (typeof startIndex !== 'number') {\n      startIndex = 0;\n    }\n\n    if (startIndex + searchString.length > this.length) {\n      return false;\n    } else {\n      return this.indexOf(searchString, startIndex) !== -1;\n    }\n  };\n}\n",lang:"js"})))}}}]);