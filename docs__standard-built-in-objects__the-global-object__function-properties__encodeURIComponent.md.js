(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[403],{lMyu:function(e,n,a){"use strict";a.r(n);var t=a("55Ip"),l=a("q1tI"),c=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),o=a.n(r);a("5Yjd");n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"encodeuricomponent"},c.a.createElement("a",{"aria-hidden":"true",href:"#encodeuricomponent"},c.a.createElement("span",{className:"icon icon-link"})),"encodeURIComponent"),c.a.createElement("p",null,c.a.createElement("code",null,"encodeURIComponent()")," \u51fd\u6570\u7528\u4e8e\u5bf9\u7edf\u4e00\u8d44\u6e90\u6807\u8bc6\u7b26\uff08URI\uff09\u7684\u6709\u6548\u7ec4\u4ef6\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u8fd4\u56de\u7f16\u7801\u540e\u7684\u5b57\u7b26\u4e32\u3002"),c.a.createElement("p",null,"\u8be5\u51fd\u6570\u5c5e\u4e8e ",c.a.createElement("code",null,"Global")," \u5bf9\u8c61\uff0c\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u5747\u652f\u6301\u8be5\u51fd\u6570\u3002"),c.a.createElement("h2",{id:"\u8bed\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),c.a.createElement(o.a,{code:"encodeURIComponent(URIString);\n",lang:"js"}),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u53c2\u6570"),c.a.createElement("th",null,"\u7c7b\u578b"),c.a.createElement("th",null,"\u8bf4\u660e"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",null,"URIString")),c.a.createElement("td",null,c.a.createElement("code",null,"String")," \u7c7b\u578b"),c.a.createElement("td",null,"\u9700\u8981\u7f16\u7801\u7684 URI \u7ec4\u4ef6\u5b57\u7b26\u4e32")))),c.a.createElement("p",null,c.a.createElement("code",null,"encodeURIComponent()")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f ",c.a.createElement("code",null,"string")," \u7c7b\u578b\uff0c\u8fd4\u56de\u4e00\u4e2a\u7f16\u7801\u540e\u7684 URI \u7ec4\u4ef6\u5b57\u7b26\u4e32\u3002"),c.a.createElement("h2",{id:"\u8bf4\u660e"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},c.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5982\u679c\u8981\u5bf9\u4f7f\u7528",c.a.createElement("code",null,"encodeURIComponent()")," \u51fd\u6570\u7f16\u7801\u540e\u7684 URI \u7ec4\u4ef6\u5b57\u7b26\u4e32\u8fdb\u884c\u89e3\u7801\uff0c\u8bf7\u4f7f\u7528 ",c.a.createElement(t["a"],{to:"./decodeURIComponent"},"decodeURIComponent()")," \u51fd\u6570\u3002"),c.a.createElement("li",null,c.a.createElement("code",null,"encodeURIComponent()")," \u51fd\u6570\u4f1a\u7f16\u7801\u6240\u6709\u7684\u5b57\u7b26\u3002\u5982\u679c\u4f60\u60f3\u628a URI \u5f53\u4f5c\u8bf7\u6c42\u53c2\u6570\u4f20\u9012\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u672c\u51fd\u6570\u3002\u5982\u679c\u4f60\u53ea\u662f\u60f3\u7f16\u7801\u4e00\u4e2a\u5e26\u6709\u7279\u6b8a\u5b57\u7b26\uff08\u6bd4\u5982\u4e2d\u6587\uff09\u7684 URI\uff0c\u8fd9\u4e2a URI \u7528\u4f5c\u8bf7\u6c42\u5730\u5740\uff0c\u8bf7\u4f7f\u7528 ",c.a.createElement(t["a"],{to:"./encodeURI"},"encodeURI")," \u51fd\u6570\u3002")),c.a.createElement("h2",{id:"\u793a\u4f8b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},c.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),c.a.createElement("h3",{id:"\u6807\u51c6\u793a\u4f8b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6807\u51c6\u793a\u4f8b"},c.a.createElement("span",{className:"icon icon-link"})),"\u6807\u51c6\u793a\u4f8b"),c.a.createElement(o.a,{code:"// \u539f URI \u7ec4\u4ef6\nvar origin = 'ftp://192.168.0.100/\u5171\u4eab\u6587\u4ef6\u5939';\n\n// \u7f16\u7801 URI \u7ec4\u4ef6\nvar encodedUri = encodeURIComponent(origin);\ndocument.writeln(encodedUri); // ftp%3A%2F%2F192.168.0.100%2F%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B9\n\n// \u89e3\u7801 URI \u7ec4\u4ef6\nvar decodedUri = decodeURIComponent(encodedUri);\ndocument.writeln(decodedUri); // ftp://192.168.0.100/\u5171\u4eab\u6587\u4ef6\u5939\n",lang:"js"})))}}}]);