(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{"14pR":function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u51fd\u6570\u67ef\u91cc\u5316"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u67ef\u91cc\u5316"},t.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u67ef\u91cc\u5316"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u67ef\u91cc\u5316\uff08\u82f1\u8bed\uff1aCurrying\uff09\uff0c\u53c8\u8bd1\u4e3a\u5361\u745e\u5316\u6216\u52a0\u91cc\u5316\uff0c\u662f\u4e00\u79cd\u5c06\u4f7f\u7528\u591a\u4e2a\u53c2\u6570\u7684\u4e00\u4e2a\u51fd\u6570\u8f6c\u6362\u6210\u4e00\u7cfb\u5217\u4f7f\u7528\u4e00\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u7684\u6280\u672f\u3002")),t.a.createElement("p",null,"\u6982\u5ff5\u7740\u5b9e\u8ba9\u6211\u7422\u78e8\u4e86\u534a\u5929\uff0c\u8f6c\u6362\u6210\u4ee3\u7801\u5927\u6982\u662f\u8fd9\u6837\u7684\u3002"),t.a.createElement(c.a,{code:"// \u4f20\u7edf\u5199\u6cd5\nfn(1, 2, 3, 4)\n\n// \u67ef\u91cc\u5316\nfn(1)(2)(3)(4)\n",lang:"js"}),t.a.createElement("p",null,"\u5047\u8bbe\u8fd9\u4e2a\u51fd\u6570\u662f\u7528\u4e8e\u6c42\u548c\uff0c\u90a3\u4e48\u5c31\u662f\u628a\u672c\u6765\u63a5\u6536\u591a\u4e2a\u53c2\u6570\u4e00\u6b21\u6027\u6c42\u548c\u7684\u51fd\u6570\u6539\u6210\u4e86\u63a5\u6536\u5355\u4e00\u53c2\u6570\u9010\u4e2a\u6c42\u548c\u7684\u51fd\u6570\u3002\u8fd9\u6837\u662f\u4e0d\u662f\u5bb9\u6613\u7406\u89e3\u4e86\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u793a\u4f8b\u4e00\uff1a\u5b9e\u73b0\u4e00\u4e2a\u67ef\u91cc\u5316\u6c42\u548c\u51fd\u6570")),t.a.createElement(c.a,{code:"const currying = function(fn){\n  var args = [];\n\n  return function(){\n    if(!!arguments.length) {\n      [].push.apply(args, arguments);\n\n      return arguments.callee;\n    }\n\n    return fn.apply(this, args);\n  }\n}\n\nconst sum = (function(num){\n  let ret = 0;\n\n  return function(){\n    for(let i = 0, len = arguments.length; i < len; i++) {\n      ret += arguments[i];\n    }\n\n    return ret;\n  }\n})();\n\nconst newSum = currying(sum);\n\nnewSum(1)(2)(3)(4)();\n// 10\n",lang:"js"}),t.a.createElement("p",null,"\u770b\u8d77\u6765\u633a\u5de7\u5999\uff0c\u4f46\u662f\u8fd9\u79cd\u6848\u4f8b\u660e\u6446\u7740\u5c31\u50cf\u4e0d\u4ece\u5b9e\u9645\u51fa\u53d1\u7684\u9762\u8bd5\u9898\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u793a\u4f8b\u4e8c\uff1a\u67e5\u8be2\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\u67d0\u503c")),t.a.createElement(c.a,{code:"const find = function(arr, value){\n  return arr.indexOf(value) !== -1;\n}\n",lang:"js"}),t.a.createElement("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u51fd\u6570\u7528\u4e8e\u67e5\u8be2\u6570\u7ec4\u4e2d\u662f\u5426\u67d0\u4e2a\u503c\uff0c\u6bcf\u6b21\u4f7f\u7528\u90fd\u9700\u8981\u8fd9\u6837\u8c03\u7528\u3002"),t.a.createElement(c.a,{code:"find(arr, 1);\nfind(arr, 2);\n",lang:"js"}),t.a.createElement("p",null,"\u65e2\u7136 ",t.a.createElement("code",null,"arr")," \u662f\u4e2a\u56fa\u5b9a\u53c2\u6570\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5148\u4fdd\u5b58\u4e00\u4e2a\u63a5\u6536\u8fc7 ",t.a.createElement("code",null,"arr")," \u7684\u51fd\u6570\uff0c\u518d\u7528\u8fd9\u4e2a\u51fd\u6570\u53bb\u5904\u7406\u53d8\u5316\u7684\u53c2\u6570\u3002"),t.a.createElement(c.a,{code:"const collection = [5, 4, 3, 2, 1]\nconst findInCollection = currying(find)(collection);\n\nfindInCollection(1);\nfindInCollection(2);\n",lang:"js"}),t.a.createElement("p",null,"\u51fd\u6570\u67ef\u91cc\u5316\u7684\u7528\u9014\u53ef\u4ee5\u7406\u89e3\u4e3a\uff1a\u53c2\u6570\u590d\u7528\u3002\u672c\u8d28\u4e0a\u662f\u964d\u4f4e\u901a\u7528\u6027\uff0c\u63d0\u9ad8\u9002\u7528\u6027\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u67ef\u91cc\u5316\u7b80\u4fbf\u5b9e\u73b0")),t.a.createElement(c.a,{code:"var curry = fn =>\n    judge = (...args) =>\n        args.length === fn.length\n            ? fn(...args)\n            : (arg) => judge(...args, arg)\n",lang:"js"}),t.a.createElement("h2",{id:"\u53cd\u67ef\u91cc\u5316"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u53cd\u67ef\u91cc\u5316"},t.a.createElement("span",{className:"icon icon-link"})),"\u53cd\u67ef\u91cc\u5316"),t.a.createElement("p",null,"\u4e0e\u67ef\u91cc\u5316\u76f8\u5bf9\u5e94\u3002"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u67ef\u91cc\u5316\u662f\u4e3a\u4e86\u7f29\u5c0f\u9002\u7528\u8303\u56f4\uff0c\u521b\u5efa\u4e00\u4e2a\u9488\u5bf9\u6027\u66f4\u5f3a\u7684\u51fd\u6570\uff1b"),t.a.createElement("li",null,"\u53cd\u67ef\u91cc\u5316\u5219\u662f\u6269\u5927\u9002\u7528\u8303\u56f4\uff0c\u521b\u5efa\u4e00\u4e2a\u5e94\u7528\u8303\u56f4\u66f4\u5e7f\u7684\u51fd\u6570\u3002")),t.a.createElement("p",null,"\u5bf9\u5e94\u7684\u4ee3\u7801\u8f6c\u6362\u5c31\u53d8\u6210\u8fd9\u6837\u3002"),t.a.createElement(c.a,{code:"fn(1)(2)(3)(4)  ->  fn(1, 2, 3, 4)\n",lang:"js"}),t.a.createElement("p",null,"\u5b9e\u4f8b"),t.a.createElement(c.a,{code:"Array.forEach = function(){\n  const fn = [].pop.call(arguments);\n\n  const arr = arguments.length > 1 ? arguments : arguments[0];\n\n  return [].forEach.call(arr, fn);\n}\n\nArray.forEach(1, 2, 3, function(i){\n  console.log(i);\n  // 1 2 3\n});\n\nArray.forEach('123', function(i){\n  console.log(i);\n  // 1 2 3\n});\n\nArray.forEach({\n  '0': 1,\n  '1': 2,\n  '2': 3,\n  'length': 3\n}, function(i){\n  console.log(i);\n  // 1 2 3\n});\n",lang:"js"}),t.a.createElement("p",null,"\u7c7b\u6570\u7ec4\u501f\u7528 Array \u539f\u578b\u51fd\u6570\uff0c\u662f\u5f88\u5e38\u89c1\u7684\u5e94\u7528\u4e86\u3002\u8fd9\u4e2a\u4f8b\u5b50\u5e94\u7528 ",t.a.createElement("code",null,"call")," \u51fd\u6570\u63d0\u53d6\u51fa\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u63a5\u6536\u66f4\u591a\u7684\u53c2\u6570\u548c\u7c7b\u578b\uff0c\u9002\u7528\u6027\u66f4\u5e7f\u3002"),t.a.createElement("hr",null),t.a.createElement("p",null,t.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("a",{href:"https://github.com/mqyqingfeng/Blog/issues/42",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd JavaScript \u4e13\u9898\u4e4b\u51fd\u6570\u67ef\u91cc\u5316",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),t.a.createElement("li",null,t.a.createElement("a",{href:"https://juejin.im/entry/5815876c8ac247004fb6d132",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd JavaScript \u9ad8\u9636\u51fd\u6570\u4ecb\u7ecd",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);