(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[219],{nu2F:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),i=(a("B2uJ"),a("+su7"),a("qOys")),o=a.n(i);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u8bbe\u5907\u4e8b\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bbe\u5907\u4e8b\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bbe\u5907\u4e8b\u4ef6"),l.a.createElement("h3",{id:"orientationchange\u4e8b\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#orientationchange\u4e8b\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"orientationchange\u4e8b\u4ef6"),l.a.createElement("p",null,"\u82f9\u679c\u516c\u53f8\u4e3a\u79fb\u52a8 Safari \u4e2d\u6dfb\u52a0\u4e86 ",l.a.createElement("code",null,"orientationchange")," \u4e8b\u4ef6\uff0c\u4ee5\u4fbf\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u786e\u5b9a\u7528\u6237\u4f55\u65f6\u5c06\u8bbe\u5907\u7531\u6a2a\u5411\u67e5\u770b\u6a21\u5f0f\u5207\u6362\u4e3a\u7eb5\u5411\u67e5\u770b\u6a21\u5f0f\u3002\u79fb\u52a8 Safari \u7684 ",l.a.createElement("code",null,"window.orientation")," \u5c5e\u6027\u4e2d\u53ef\u80fd\u5305\u542b3\u4e2a\u503c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"0\uff1a\u8868\u793a\u8096\u50cf\u6a21\u5f0f"),l.a.createElement("li",null,"90\uff1a\u8868\u793a\u5411\u5de6\u65cb\u8f6c\u7684\u6a2a\u5411\u6a21\u5f0f\uff08\u201c\u4e3b\u5c4f\u5e55\u201d\u6309\u94ae\u5728\u53f3\u4fa7\uff09"),l.a.createElement("li",null,"-90\uff1a\u8868\u793a\u5411\u53f3\u65cb\u8f6c\u7684\u6a2a\u5411\u6a21\u5f0f\uff08\u201c\u4e3b\u5c4f\u5e55\u201d\u6309\u94ae\u5728\u5de6\u4fa7\uff09")),l.a.createElement("p",null,"\u76f8\u5173\u6587\u6863\u4e2d\u8fd8\u63d0\u5230\u4e00\u4e2a\u503c\uff0c\u5373180\u8868\u793a iPhone \u5934\u671d\u4e0b\uff1b\u4f46\u8fd9\u79cd\u6a21\u5f0f\u81f3\u4eca\u5c1a\u672a\u5f97\u5230\u652f\u6301\u3002"),l.a.createElement("p",null,"\u53ea\u8981\u7528\u6237\u6539\u53d8\u4e86\u8bbe\u5907\u7684\u67e5\u770b\u6a21\u5f0f\uff0c\u5c31\u4f1a\u89e6\u53d1 ",l.a.createElement("code",null,"orientationchange")," \u4e8b\u4ef6\u3002\u6b64\u65f6\u7684 ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u4e0d\u5305\u542b\u4efb\u4f55\u6709\u4ef7\u503c\u7684\u4fe1\u606f\uff0c\u56e0\u4e3a\u552f\u4e00\u76f8\u5173\u7684\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"window.orientation")," \u8bbf\u95ee\u5230\u3002\u4e0b\u9762\u662f\u4f7f\u7528\u8fd9\u4e2a\u4e8b\u4ef6\u7684\u5178\u578b\u793a\u4f8b\u3002"),l.a.createElement(o.a,{code:'EventUtil.addHandler(window, "load", function(event){\n    const div = document.getElementById(\'myDiv\');\n    div.innerHTML = "Current orientation is " + window.orientation;\n    EventUtil.addHandler(window, "orientationchange", function(event){\n        div.innerHTML = "Current orientation is " + window.orientation;\n    })\n})\n',lang:"js"}),l.a.createElement("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5f53\u89e6\u53d1 ",l.a.createElement("code",null,"load")," \u4e8b\u4ef6\u65f6\u4f1a\u663e\u793a\u6700\u521d\u7684\u65b9\u5411\u4fe1\u606f\u3002\u7136\u540e\uff0c\u6dfb\u52a0\u4e86\u5904\u7406 ",l.a.createElement("code",null,"orientationchange")," \u4e8b\u4ef6\u7684\u5904\u7406\u7a0b\u5e8f\u3002\u53ea\u8981\u53d1\u751f\u8fd9\u4e2a\u4e8b\u4ef6\uff0c\u5c31\u4f1a\u6709\u8868\u793a\u65b0\u65b9\u5411\u7684\u4fe1\u606f\u66f4\u65b0\u9875\u9762\u4e2d\u7684\u6d88\u606f\u3002"),l.a.createElement("p",null,"\u6240\u6709 iOS \u8bbe\u5907\u90fd\u652f\u6301 ",l.a.createElement("code",null,"orientationchange")," \u4e8b\u4ef6\u548c ",l.a.createElement("code",null,"window.orientation")," \u5c5e\u6027\u3002"),l.a.createElement("h3",{id:"mozorientation\u4e8b\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#mozorientation\u4e8b\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"MozOrientation\u4e8b\u4ef6"),l.a.createElement("p",null,"Firefox3.6\u4e3a\u68c0\u67e5\u8bbe\u5907\u7684\u65b9\u5411\u5f15\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a ",l.a.createElement("code",null,"MozOrientation")," \u7684\u65b0\u4e8b\u4ef6\u3002\uff08\u524d\u7f00 Moz \u8868\u793a\u8fd9\u662f\u7279\u5b9a\u4e8e\u6d4f\u89c8\u5668\u5f00\u53d1\u5546\u7684\u4e8b\u4ef6\uff0c\u4e0d\u662f\u6807\u51c6\u4e8b\u4ef6\u3002\uff09\u5f53\u8bbe\u5907\u7684\u52a0\u901f\u8ba1\u68c0\u6d4b\u5230\u8bbe\u5907\u65b9\u5411\u6539\u53d8\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u3002\u4f46\u8fd9\u4e2a\u4e8b\u4ef6\u4e0e iOS \u4e2d\u7684 ",l.a.createElement("code",null,"orientationchange")," \u4e8b\u4ef6\u4e0d\u540c\uff0c\u8be5\u4e8b\u4ef6\u53ea\u80fd\u63d0\u4f9b\u4e00\u4e2a\u5e73\u9762\u7684\u65b9\u5411\u53d8\u5316\u3002\u7531\u4e8e ",l.a.createElement("code",null,"MozOrientation")," \u4e8b\u4ef6\u662f\u5728 ",l.a.createElement("code",null,"window")," \u5bf9\u8c61\u4e0a\u89e6\u53d1\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u6765\u5904\u7406\u3002"),l.a.createElement(o.a,{code:'EventUtil.addHandler(window, "MozOrientation", function(event){\n    // \u54cd\u5e94\u4e8b\u4ef6\n})\n',lang:"js"}),l.a.createElement("p",null,"\u6b64\u65f6\u7684 ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u5305\u542b\u4e09\u4e2a\u5c5e\u6027\uff1ax\u3001y \u548c z\u3002\u8fd9\u51e0\u4e2a\u5c5e\u6027\u7684\u503c\u90fd\u4ecb\u4e8e1\u5230-1\u4e4b\u95f4\uff0c\u8868\u793a\u4e0d\u540c\u5750\u6807\u8f74\u4e0a\u7684\u65b9\u5411\u3002\u5728\u9759\u6b62\u72b6\u6001\u4e0b\uff0cx \u503c\u4e3a0\uff0cy \u503c\u4e3a0\uff0cz \u503c\u4e3a1\uff08\u8868\u793a\u8bbe\u5907\u5904\u4e8e\u7ad6\u76f4\u72b6\u6001\uff09\u3002\u5982\u679c\u8bbe\u5907\u5411\u53f3\u503e\u659c\uff0cx \u503c\u4f1a\u51cf\u5c11\uff1b\u53cd\u4e4b\uff0c\u5411\u5de6\u503e\u659c\uff0cx \u503c\u4f1a\u589e\u5927\u3002\u7c7b\u4f3c\u5730\uff0c\u5982\u679c\u8bbe\u5907\u5411\u8fdc\u79bb\u7528\u6237\u7684\u65b9\u5411\u503e\u659c"),l.a.createElement("h3",{id:"deviceorientation\u4e8b\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#deviceorientation\u4e8b\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"deviceorientation\u4e8b\u4ef6")))}}}]);