(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[382],{"1POK":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(c);a("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"stringprototypematchall"},l.a.createElement("a",{"aria-hidden":"true",href:"#stringprototypematchall"},l.a.createElement("span",{className:"icon icon-link"})),"String.prototype.matchAll()"),l.a.createElement("p",null,l.a.createElement("code",null,"matchAll()")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u53ca\u5206\u7ec4\u6355\u83b7\u7ec4\u7684\u8fed\u4ee3\u5668\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(r.a,{code:"str.match(regexp);\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"regexp")),l.a.createElement("td",null,"\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5982\u679c\u4f20\u53c2\u975e\u6b63\u5219\u4f1a\u901a\u8fc7\u6784\u9020\u51fd\u6570\u8f6c\u6362"),l.a.createElement("td",null,"RegExp")))),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u83b7\u53d6\u5b57\u7b26\u4e32\u6240\u6709\u5339\u914d\u9879"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u83b7\u53d6\u5b57\u7b26\u4e32\u6240\u6709\u5339\u914d\u9879"},l.a.createElement("span",{className:"icon icon-link"})),"\u83b7\u53d6\u5b57\u7b26\u4e32\u6240\u6709\u5339\u914d\u9879"),l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"matchAll")," \u4f1a\u5f97\u5230\u4e00\u4e2a\u8fed\u4ee3\u5668\u7684\u8fd4\u56de\u503c\uff0c\u914d\u5408 ",l.a.createElement("code",null,"for...of"),"\u3001\u89e3\u6784\u8d4b\u503c\u6216\u8005 ",l.a.createElement("code",null,"Array.from")," \u53ef\u4ee5\u66f4\u65b9\u4fbf\u5b9e\u73b0\u529f\u80fd\uff1a"),l.a.createElement(r.a,{code:"const str = 'table football foosball';\nconst regexp = RegExp('foo[a-z]*', 'g');\nconst matches = str.matchAll(regexp);\n\nfor (const match of matches) {\n  console.log(match[0], match.index, match.index + match[0].length);\n}\n\nconst arr = Array.from(str.matchAll(regexp), m => m[0]);\n// ['football', 'foosball']\n",lang:"js"}),l.a.createElement("h3",{id:"\u6355\u83b7\u7ec4\u7684\u6700\u4f73\u9014\u5f84"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6355\u83b7\u7ec4\u7684\u6700\u4f73\u9014\u5f84"},l.a.createElement("span",{className:"icon icon-link"})),"\u6355\u83b7\u7ec4\u7684\u6700\u4f73\u9014\u5f84"),l.a.createElement("p",null,l.a.createElement("code",null,"matchAll")," \u7684\u53e6\u4e00\u4e2a\u4eae\u70b9\u662f\u66f4\u597d\u5730\u83b7\u53d6\u6355\u83b7\u7ec4\uff0c\u56e0\u4e3a\u5f53\u4f7f\u7528 ",l.a.createElement("code",null,"match")," \u548c ",l.a.createElement("code",null,"/g")," \u6807\u5fd7\u65b9\u5f0f\u83b7\u53d6\u5339\u914d\u4fe1\u606f\u65f6\uff0c\u6355\u83b7\u7ec4\u4f1a\u88ab\u5ffd\u7565\uff1a"),l.a.createElement(r.a,{code:"const regexp = /t(e)(st(\\d?))/g;\n\nconst str = 'test1test2';\n\nconst arr = str.match(regexp);\n\nconsole.log(arr);\n// ['test1', 'test2']\n",lang:"js"}),l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"matchAll")," \u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u83b7\u53d6\u5206\u7ec4\u6355\u83b7\uff1a"),l.a.createElement(r.a,{code:"const arr = [...str.matchAll(regexp)];\n\nconsole.log(arr[0]);\n// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]\nconsole.log(arr[1]);\n// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]\n",lang:"js"})))}}}]);