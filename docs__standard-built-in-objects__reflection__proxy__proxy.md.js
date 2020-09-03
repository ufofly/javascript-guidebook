(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[362],{wMoQ:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(l);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"proxy"},r.a.createElement("a",{"aria-hidden":"true",href:"#proxy"},r.a.createElement("span",{className:"icon icon-link"})),"Proxy"),r.a.createElement("p",null,"Proxy \u5bf9\u8c61\u7528\u4e8e\u4fee\u6539\u67d0\u4e9b\u64cd\u4f5c\u7684\u9ed8\u8ba4\u884c\u4e3a\uff08\u5982\u5c5e\u6027\u67e5\u627e\u3001\u8d4b\u503c\u3001\u679a\u4e3e\u3001\u51fd\u6570\u8c03\u7528\u7b49\uff09\uff0c\u7b49\u540c\u4e8e\u5728\u8bed\u8a00\u5c42\u9762\u505a\u51fa\u4fee\u6539\uff0c\u6240\u4ee5\u5c5e\u4e8e\u4e00\u79cd ",r.a.createElement("strong",null,"\u5143\u7f16\u7a0b"),"\uff08meta programming\uff09\uff0c\u5373\u5bf9\u7f16\u7a0b\u8bed\u8a00\u8fdb\u884c\u7f16\u7a0b\u3002"),r.a.createElement("p",null,"Proxy \u53ef\u4ee5\u7406\u89e3\u6210\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42 ",r.a.createElement("strong",null,"\u62e6\u622a"),"\uff0c\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u56e0\u6b64\u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\uff0c\u53ef\u4ee5\u5bf9\u5916\u754c\u7684\u8bbf\u95ee\u8fdb\u884c\u8fc7\u6ee4\u548c\u6539\u5199\u3002Proxy \u8fd9\u4e2a\u8bcd\u7684\u539f\u610f\u662f\u4ee3\u7406\uff0c\u7528\u5728\u8fd9\u91cc\u8868\u793a\u7531\u5b83\u6765 ",r.a.createElement("strong",null,"\u4ee3\u7406")," \u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4ee5\u8bd1\u4e3a ",r.a.createElement("strong",null,"\u4ee3\u7406\u5668"),"\u3002"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"handler"),"\uff1a\u5305\u542b\u6355\u6349\u5668\uff08Trap\uff09\u7684\u5360\u4f4d\u7b26\u5bf9\u8c61\uff0c\u53ef\u8bd1\u4e3a\u5904\u7406\u5668\u5bf9\u8c61"),r.a.createElement("li",null,r.a.createElement("code",null,"traps"),"\uff1a\u63d0\u4f9b\u5c5e\u6027\u8bbf\u95ee\u7684\u65b9\u6cd5\uff0c\u8fd9\u7c7b\u4f3c\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u6355\u83b7\u5668\u7684\u6982\u5ff5"),r.a.createElement("li",null,r.a.createElement("code",null,"target"),"\uff1a\u88ab Proxy \u5904\u7406\u865a\u62df\u5316\u7684\u5bf9\u8c61\uff0c\u5b83\u5e38\u88ab\u4f5c\u4e3a\u4ee3\u7406\u7684\u5b58\u50a8\u540e\u7aef\uff0c\u6839\u636e\u76ee\u6807\u9a8c\u8bc1\u5173\u4e8e\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55\u6027\u6216\u4e0d\u53ef\u914d\u7f6e\u5c5e\u6027\u7684\u4e0d\u53d8\u91cf\uff08\u4fdd\u6301\u4e0d\u53d8\u7684\u8bed\u4e49\uff09")),r.a.createElement("p",null,"ES6 \u539f\u751f\u63d0\u4f9b Proxy \u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u751f\u6210 Proxy \u5b9e\u4f8b\u3002"),r.a.createElement(o.a,{code:"const proxy = new Proxy(target, handler);\n",lang:"js"}),r.a.createElement("p",null,"Proxy \u5bf9\u8c61\u7684\u6240\u6709\u7528\u6cd5\uff0c\u90fd\u662f\u4e0a\u9762\u8fd9\u79cd\u5f62\u5f0f\uff0c\u4e0d\u540c\u7684\u53ea\u662f ",r.a.createElement("code",null,"handler")," \u53c2\u6570\u7684\u5199\u6cd5\u3002\u5176\u4e2d\uff0c",r.a.createElement("code",null,"new Proxy()")," \u8868\u793a\u751f\u6210\u4e00\u4e2a Proxy \u5b9e\u4f8b\uff0c",r.a.createElement("code",null,"target")," \u53c2\u6570\u8868\u793a\u6240\u8981\u62e6\u622a\u7684\u76ee\u6807\u5bf9\u8c61\uff0c",r.a.createElement("code",null,"handler")," \u53c2\u6570\u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u6765\u5b9a\u5236\u62e6\u622a\u884c\u4e3a\u3002"),r.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5"),r.a.createElement(o.a,{code:"const proxy = new Proxy(\n  {},\n  {\n    get: function(target, propKey, receiver) {\n      console.log(`Getting ${propKey}!`);\n      return Reflect.get(target, propKey, receiver);\n    },\n    set: function(target, proxyKey, value, receiver) {\n      console.log(`Getting ${propKey}!`);\n      return Reflect.set(target, propKey, value, receiver);\n    },\n  }\n);\n",lang:"js"}),r.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u5bf9\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u67b6\u8bbe\u4e86\u4e00\u5c42\u62e6\u622a\uff0c\u91cd\u5b9a\u4e49\u4e86\u5c5e\u6027\u7684\u8bfb\u53d6\uff08",r.a.createElement("code",null,"get"),"\uff09\u548c\u8bbe\u7f6e\uff08",r.a.createElement("code",null,"set"),"\uff09\u884c\u4e3a\u3002\u8fd9\u91cc\u6682\u65f6\u5148\u4e0d\u89e3\u91ca\u5177\u4f53\u7684\u8bed\u6cd5\uff0c\u53ea\u770b\u8fd0\u884c\u7ed3\u679c\u3002\u5bf9\u8bbe\u7f6e\u4e86\u62e6\u622a\u884c\u4e3a\u7684\u5bf9\u8c61 ",r.a.createElement("code",null,"proxy"),"\uff0c\u53bb\u8bfb\u5199\u5b83\u7684\u5c5e\u6027\uff0c\u5c31\u4f1a\u5f97\u5230\u4e0b\u9762\u7684\u7ed3\u679c\u3002"),r.a.createElement(o.a,{code:"proxy.count = 1;\n// Setting count!\n\n++proxy.count;\n// Getting count!\n// Setting count!\n// 2\n",lang:"js"}),r.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u8bf4\u660e\uff0cProxy \u5b9e\u9645\u4e0a\u91cd\u8f7d\uff08Overload\uff09\u4e86\u70b9\u8fd0\u7b97\u7b26\uff0c\u5373\u7528\u81ea\u5df1\u7684\u5b9a\u4e49\u8986\u76d6\u4e86\u8bed\u8a00\u7684\u539f\u59cb\u5b9a\u4e49\u3002"),r.a.createElement("h2",{id:"this-\u6307\u5411\u95ee\u9898"},r.a.createElement("a",{"aria-hidden":"true",href:"#this-\u6307\u5411\u95ee\u9898"},r.a.createElement("span",{className:"icon icon-link"})),"this \u6307\u5411\u95ee\u9898"),r.a.createElement("p",null,"\u867d\u7136 Proxy \u53ef\u4ee5\u4ee3\u7406\u9488\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u4f46\u5b83\u4e0d\u662f\u76ee\u6807\u5bf9\u8c61\u7684\u900f\u660e\u4ee3\u7406\uff0c\u5373\u4e0d\u505a\u4efb\u4f55\u62e6\u622a\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u65e0\u6cd5\u4fdd\u8bc1\u4e0e\u76ee\u6807\u5bf9\u8c61\u7684\u884c\u4e3a\u4e00\u81f4\u3002\u4e3b\u8981\u539f\u56e0\u5c31\u662f Proxy \u4ee3\u7406\u7684\u60c5\u51b5\u4e0b\uff0c\u76ee\u6807\u5bf9\u8c61\u5185\u90e8\u7684 ",r.a.createElement("code",null,"this")," \u5173\u952e\u5b57\u4f1a\u6307\u5411 Proxy \u4ee3\u7406\u3002"),r.a.createElement(o.a,{code:"const target = {\n  foo: function() {\n    console.log(this === proxy);\n  },\n};\n\nconst handler = {};\n\nconst proxy = new Proxy(target, handler);\n\nconsole.log(target.foo());\n// false\nconsole.log(proxy.foo());\n// true\n",lang:"js"}),r.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u4e00\u65e6 ",r.a.createElement("code",null,"proxy")," \u4ee3\u7406 ",r.a.createElement("code",null,"target.foo"),"\uff0c\u540e\u8005\u5185\u90e8\u7684 ",r.a.createElement("code",null,"this")," \u5c31\u662f\u6307\u5411 ",r.a.createElement("code",null,"proxy"),"\uff0c\u800c\u4e0d\u662f ",r.a.createElement("code",null,"target"),"\u3002"),r.a.createElement("h2",{id:"\u5d4c\u5957\u652f\u6301"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5d4c\u5957\u652f\u6301"},r.a.createElement("span",{className:"icon icon-link"})),"\u5d4c\u5957\u652f\u6301"),r.a.createElement("p",null,"Proxy \u4e5f\u662f\u4e0d\u652f\u6301\u5d4c\u5957\u7684\uff0c\u8fd9\u70b9\u548c ",r.a.createElement("code",null,"Object.defineProperty()")," \u662f\u4e00\u6837\u7684\u3002\u56e0\u6b64\u4e0e\u9700\u8981\u901a\u8fc7\u9010\u5c42\u904d\u5386\u6765\u89e3\u51b3\u3002Proxy \u7684\u5199\u6cd5\u662f\u5728 ",r.a.createElement("code",null,"get")," \u91cc\u9762\u9012\u5f52\u8c03\u7528 Proxy \u5e76\u8fd4\u56de\u3002"),r.a.createElement(o.a,{code:"const data = {\n  info: {\n    name: 'Eason',\n    blogs: ['Webpack', 'Babel', 'React'],\n  },\n};\n\nconst handler = {\n  get(target, key, receiver) {\n    console.log('GET', key);\n    // \u9012\u5f52\u521b\u5efa\u5e76\u8fd4\u56de\n    if (typeof target[key] === 'object' && target[key] !== null) {\n      return new Proxy(target[key], handler);\n    }\n\n    return Reflect.get(target, key, receiver);\n  },\n  set(target, key, value, receiver) {\n    console.log('SET', key, value);\n\n    return Reflect.set(target, key, value, receiver);\n  },\n};\n\nconst proxy = new Proxy(data, handler);\n\n// \u4ee5\u4e0b\u4e24\u6bb5\u4ee3\u7801\u80fd\u591f\u8fdb\u5165 set\nproxy.info.name = 'Zoe';\nproxy.info.blogs.push('proxy');\n",lang:"js"}),r.a.createElement("h2",{id:"proxy-\u4e0e-objectdefineproperty"},r.a.createElement("a",{"aria-hidden":"true",href:"#proxy-\u4e0e-objectdefineproperty"},r.a.createElement("span",{className:"icon icon-link"})),"Proxy \u4e0e Object.defineProperty"),r.a.createElement("p",null,"ES5 \u63d0\u4f9b\u4e86 ",r.a.createElement("code",null,"Object.defineProperty")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e0a\u5b9a\u4e49\u4e00\u4e2a\u65b0\u5c5e\u6027\uff0c\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5bf9\u8c61\u7684\u73b0\u6709\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\u3002"),r.a.createElement("p",null,r.a.createElement("code",null,"Object.defineProperty")," \u7684\u4e09\u4e2a\u4e3b\u8981\u95ee\u9898\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u65e0\u6cd5\u76d1\u542c\u6570\u7ec4\u53d8\u5316\uff0cVue \u901a\u8fc7 Hack \u6539\u5199\u516b\u79cd\u6570\u7ec4\u65b9\u6cd5\u5b9e\u73b0"),r.a.createElement("li",null,"\u53ea\u80fd\u52ab\u6301\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u56e0\u6b64\u5bf9\u9700\u8981\u53cc\u5411\u7ed1\u5b9a\u7684\u5c5e\u6027\u9700\u8981\u663e\u5f0f\u5730\u5b9a\u4e49"),r.a.createElement("li",null,"\u5fc5\u987b\u6df1\u5c42\u904d\u5386\u5d4c\u5957\u7684\u5bf9\u8c61")),r.a.createElement("p",null,"\u4e0e Proxy \u7684\u533a\u522b\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"Proxy \u53ef\u4ee5\u76f4\u63a5\u76d1\u542c\u6570\u7ec4\u7684\u53d8\u5316"),r.a.createElement("li",null,"Proxy \u53ef\u4ee5\u76f4\u63a5\u76d1\u542c\u5bf9\u8c61\u800c\u975e\u5c5e\u6027"),r.a.createElement("li",null,"Proxy \u76f4\u63a5\u53ef\u4ee5\u52ab\u6301\u6574\u4e2a\u5bf9\u8c61\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u4e0d\u7ba1\u662f\u64cd\u4f5c\u4fbf\u5229\u7a0b\u5ea6\u8fd8\u662f\u5e95\u5c42\u529f\u80fd\u4e0a\u90fd\u8fdc\u5f3a\u4e8e ",r.a.createElement("code",null,"Object.defineProperty")),r.a.createElement("li",null,"Proxy \u6709\u591a\u8fbe 13 \u4e2d\u62e6\u622a\u65b9\u6cd5\uff0c\u4e0d\u9650\u4e8e ",r.a.createElement("code",null,"apply"),"\u3001",r.a.createElement("code",null,"ownKeys"),"\u3001",r.a.createElement("code",null,"deleteProperty"),"\u3001",r.a.createElement("code",null,"has")," \u7b49\u7b49\u662f ",r.a.createElement("code",null,"Object.defineProperty")," \u4e0d\u5177\u5907\u7684")),r.a.createElement("p",null,"Proxy \u7684\u52a3\u52bf\uff1a"),r.a.createElement("p",null,"Proxy \u7684\u52a3\u52bf\u5c31\u662f\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u800c\u4e14\u65e0\u6cd5\u7528 Polyfill \u78e8\u5e73\u3002"),r.a.createElement("h2",{id:"\u5e94\u7528\u573a\u666f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5e94\u7528\u573a\u666f"},r.a.createElement("span",{className:"icon icon-link"})),"\u5e94\u7528\u573a\u666f"),r.a.createElement("h3",{id:"\u7ba1\u9053"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7ba1\u9053"},r.a.createElement("span",{className:"icon icon-link"})),"\u7ba1\u9053"),r.a.createElement("p",null,"\u5728\u6700\u65b0\u7684 ECMAScript \u63d0\u6848\u4e2d\uff0c\u51fa\u73b0\u4e86\u539f\u751f\u7684\u7ba1\u9053\u64cd\u4f5c\u7b26 ",r.a.createElement("code",null,"|>"),"\uff0c\u5728 RxJS \u548c Node.js \u4e2d\u90fd\u6709\u7c7b\u4f3c\u7684 ",r.a.createElement("code",null,"pipe")," \u6982\u5ff5\u3002"),r.a.createElement("p",null,"\u4f7f\u7528 Proxy \u4e5f\u53ef\u4ee5\u5b9e\u73b0 ",r.a.createElement("code",null,"pipe")," \u529f\u80fd\uff0c\u53ea\u8981\u4f7f\u7528 ",r.a.createElement("code",null,"get")," \u5bf9\u5c5e\u6027\u8bbf\u95ee\u8fdb\u884c\u62e6\u622a\u5c31\u80fd\u8f7b\u6613\u5b9e\u73b0\uff0c\u5c06\u8bbf\u95ee\u7684\u65b9\u6cd5\u90fd\u653e\u5230 ",r.a.createElement("code",null,"stack")," \u6570\u7ec4\u91cc\u9762\uff0c\u4e00\u65e6\u6700\u540e\u8bbf\u95ee\u4e86 ",r.a.createElement("code",null,"execute")," \u5c31\u8fd4\u56de\u7ed3\u679c\u3002"),r.a.createElement(o.a,{code:"const pipe = value => {\n  const stack = [];\n  const proxy = new Proxy(\n    {},\n    {\n      get(target, prop) {\n        if (prop === 'execute') {\n          return stack.reduce(function(val, fn) {\n            return fn(val);\n          }, value);\n        }\n        stack.push(window[porp]);\n        return proxy;\n      },\n    }\n  );\n  return proxy;\n};\n\nconst double = n => n * 2;\nconst pow = n => n * n;\n\nconsole.log(pipe(3).double.pow.execute);\n",lang:"js"}),r.a.createElement("h3",{id:"\u8fd0\u7b97\u7b26\u91cd\u8f7d"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8fd0\u7b97\u7b26\u91cd\u8f7d"},r.a.createElement("span",{className:"icon icon-link"})),"\u8fd0\u7b97\u7b26\u91cd\u8f7d"),r.a.createElement("p",null,r.a.createElement("code",null,"in")," \u64cd\u4f5c\u7b26\u7528\u4e8e\u68c0\u67e5\u6307\u5b9a\u7684\u5c5e\u6027\u662f\u5426\u4f4d\u4e8e\u6307\u5b9a\u7684\u5bf9\u8c61\u6216\u5176\u539f\u578b\u94fe\u4e2d\uff0c\u4f46\u5b83\u4e5f\u662f\u8bed\u6cd5\u4e0a\u6700\u4f18\u96c5\u7684\u91cd\u8f7d\u64cd\u4f5c\u7b26\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8fde\u7eed ",r.a.createElement("code",null,"range")," \u51fd\u6570\u6765\u6bd4\u8f83\u6570\u5b57\u3002"),r.a.createElement(o.a,{code:"const range = (min, max) => {\n  return new Proxy(Object.create(null), {\n    has: (_, prop) => +prop >= min && +prop <= max,\n  });\n};\n",lang:"js"}),r.a.createElement("p",null,"\u4e0e Python \u4e0d\u540c\uff0cPython \u4f7f\u7528\u751f\u6210\u5668\u4e0e\u6709\u9650\u7684\u6574\u6570\u5e8f\u5217\u8fdb\u884c\u6bd4\u8f83\uff0c\u8fd9\u79cd\u65b9\u6cd5\u652f\u6301\u5341\u8fdb\u5236\u6bd4\u8f83\uff0c\u53ef\u4ee5\u6269\u5c55\u4e3a\u652f\u6301\u5176\u4ed6\u6570\u503c\u8303\u56f4\u3002"),r.a.createElement(o.a,{code:"const num = 11;\nconst data = [1, 5, num, 50, 100];\n\nif (num in range(1, 100)) {\n  // do something\n}\n\ndata.filter(n => n in range(1, 10));\n// [1, 5]\n",lang:"js"}),r.a.createElement("p",null,"\u5c3d\u7ba1\u8fd9\u4e2a\u7528\u4f8b\u4e0d\u80fd\u89e3\u51b3\u590d\u6742\u7684\u95ee\u9898\uff0c\u4f46\u5b83\u786e\u5b9e\u63d0\u4f9b\u4e86\u5e72\u51c0\u3001\u53ef\u8bfb\u548c\u53ef\u91cd\u7528\u7684\u4ee3\u7801\u3002"),r.a.createElement("p",null,"\u9664\u4e86 ",r.a.createElement("code",null,"in")," \u8fd0\u7b97\u7b26\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u91cd\u8f7d ",r.a.createElement("code",null,"delete")," \u548c ",r.a.createElement("code",null,"new"),"\u3002"),r.a.createElement("h3",{id:"\u901a\u8fc7\u5c5e\u6027\u67e5\u627e\u6570\u7ec4\u4e2d\u7684\u7279\u5b9a\u5bf9\u8c61"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u901a\u8fc7\u5c5e\u6027\u67e5\u627e\u6570\u7ec4\u4e2d\u7684\u7279\u5b9a\u5bf9\u8c61"},r.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7\u5c5e\u6027\u67e5\u627e\u6570\u7ec4\u4e2d\u7684\u7279\u5b9a\u5bf9\u8c61"),r.a.createElement("p",null,"\u4ee5\u4e0b\u4ee3\u7406\u4e3a\u6570\u7ec4\u6269\u5c55\u4e86\u4e00\u4e9b\u5b9e\u7528\u5de5\u5177\u3002\u5982\u4f60\u6240\u89c1\uff0c\u901a\u8fc7 Proxy\uff0c\u6211\u4eec\u53ef\u4ee5\u7075\u6d3b\u5730\u5b9a\u4e49\u5c5e\u6027\uff0c\u800c\u4e0d\u9700\u8981\u5b9e\u7528 ",r.a.createElement("code",null,"Object.defineProperties")," \u65b9\u6cd5\u3002\u4ee5\u4e0b\u4f8b\u5b50\u53ef\u4ee5\u7528\u4e8e\u901a\u8fc7\u5355\u5143\u683c\u6765\u67e5\u627e\u8868\u683c\u4e2d\u7684\u4e00\u884c\u3002"),r.a.createElement(o.a,{code:"const data = [\n  { name: 'Firefox', type: 'browser' },\n  { name: 'SeaMonkey', type: 'browser' },\n  { name: 'Thunderbrid', type: 'mailer' },\n];\n\nconst products = new Proxy(data, {\n  get: function(target, prop) {\n    // \u9ed8\u8ba4\u884c\u4e3a\u662f\u8fd4\u56de\u5c5e\u6027\u503c\n    if (prop in target) {\n      return target[prop];\n    }\n\n    // \u83b7\u53d6 products \u7684 number\uff0c\u5b83\u662f products.length \u7684\u522b\u540d\n    if (typeof prop === 'number') {\n      return target.length;\n    }\n\n    let result,\n      types = {};\n\n    for (let item of target) {\n      if (item.name === prop) {\n        result = item;\n      }\n      if (types[item.type]) {\n        types[item.type].push(item);\n      } else {\n        types[item.type] = [item];\n      }\n    }\n\n    // \u901a\u8fc7 name \u83b7\u53d6 item\n    if (result) return result;\n\n    // \u901a\u8fc7 type \u83b7\u53d6 item\n    if (prop in types) return types[prop];\n\n    // \u83b7\u53d6 item type\n    if (prop === 'types') {\n      return Object.keys(types);\n    }\n\n    return undefined;\n  },\n});\n\nconsole.log(products[0]);\n// { name: 'Firefox', type: 'browser' }\n\nconsole.log(products['Firefox']);\n// { name: 'Firefox', type: 'browser' }\n\nconsole.log(products['Chrome']);\n// undefined\n\nconsole.log(products.browser);\n// [\n//   { name: 'Firefox', type: 'browser' },\n//   { name: 'SeaMonkey', type: 'browser' }\n// ]\n//\n\nconsole.log(products.types);\n// ['browser', 'mailer']\n\nconsole.log(products.number);\n// 3\n",lang:"js"}),r.a.createElement("h3",{id:"\u6269\u5c55\u6784\u9020\u51fd\u6570"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6269\u5c55\u6784\u9020\u51fd\u6570"},r.a.createElement("span",{className:"icon icon-link"})),"\u6269\u5c55\u6784\u9020\u51fd\u6570"),r.a.createElement("p",null,"\u65b9\u6cd5\u4ee3\u7406\u53ef\u4ee5\u8f7b\u677e\u5730\u901a\u8fc7\u4e00\u4e2a\u65b0\u6784\u9020\u51fd\u6570\u6765\u6269\u5c55\u4e00\u4e2a\u5df2\u6709\u7684\u6784\u9020\u51fd\u6570\u3002"),r.a.createElement(o.a,{code:"const extend = function(sup, base) {\n  const descriptor = Object.getOwnPropertyDescriptor(base.prototype, 'constructor');\n\n  base.prototype = Object.create(sup.prototype);\n\n  const handler = {\n    construct: function(target, args) {\n      const obj = Object.create(base.prototype);\n\n      this.apply(target, obj, args);\n\n      return obj;\n    },\n    apply: function(target, context, args) {\n      sup.apply(context, args);\n      base.apply(context, args);\n    },\n  };\n\n  const proxy = new Proxy(base, handler);\n\n  descriptor.value = proxy;\n\n  Object.defineProperty(base.prototype, 'constructor', descriptor);\n\n  return proxy;\n};\n",lang:"js"}),r.a.createElement("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),r.a.createElement(o.a,{code:"const Person = function(name) {\n  this.name = name;\n};\n\nconst Boy = extend(Person, function(name, age) {\n  this.age = age;\n});\n\nBoy.prototype.sex = 'Male';\n\nconst Peter = new Boy('Peter', 20);\n\nconsole.log(Peter.sex);\n// 'Male'\nconsole.log(Peter.name);\n// 'Peter'\nconsole.log(Peter.age);\n// 20\n",lang:"js"}),r.a.createElement("h3",{id:"\u526f\u4f5c\u7528"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u526f\u4f5c\u7528"},r.a.createElement("span",{className:"icon icon-link"})),"\u526f\u4f5c\u7528"),r.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Proxy \u6765\u521b\u5efa\u4e00\u4e2a\u5728\u8bfb\u5199\u5c5e\u6027\u65f6\u7684\u526f\u4f5c\u7528. \u51fa\u53d1\u70b9\u5728\u4e8e\u67d0\u4e9b\u7279\u5b9a\u7684\u5c5e\u6027\u88ab\u8bbf\u95ee\u6216\u8005\u5199\u5165\u65f6\u89e6\u53d1\u4e00\u4e9b\u51fd\u6570\u3002"),r.a.createElement(o.a,{code:"const dosomething = () => {\n  console.log('Do something after task completion');\n};\n\nconst handler = {\n  set: function(target, prop, value) {\n    if (prop === 'status' && value === 'complete') {\n      dosomething();\n    }\n\n    target[prop] = value;\n  },\n};\n\nconst tasks = new Proxy({}, handler);\n\ntasks.status = 'complete';\n",lang:"js"}),r.a.createElement("p",null,"\u5f53 ",r.a.createElement("code",null,"status")," \u5c5e\u6027\u5199\u5165\u5e76\u4e14\u503c\u4e3a ",r.a.createElement("code",null,"complete")," \u65f6\uff0c\u4f1a\u89e6\u53d1\u526f\u4f5c\u7528\u51fd\u6570 ",r.a.createElement("code",null,"dosomething()"),"\u3002"),r.a.createElement("h3",{id:"\u7f13\u5b58"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7f13\u5b58"},r.a.createElement("span",{className:"icon icon-link"})),"\u7f13\u5b58"),r.a.createElement("p",null,"\u5229\u7528\u4ecb\u5165\u5e72\u6d89\u5bf9\u8c61\u5c5e\u6027\u8bfb\u5199\u7684\u80fd\u529b\uff0c\u6211\u4eec\u80fd\u591f\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u5185\u5b58\u7684\u7f13\u5b58\uff0c\u5b83\u53ea\u4f1a\u5728\u503c\u8fc7\u671f\u524d\u8fd4\u56de\u503c\uff1a"),r.a.createElement(o.a,{code:"const cacheTarget = (target, ttl = 60) => {\n  const CREATED_AT = Date.now();\n  const isExpired = () => (Date.now() - CREATED_AT) > (ttl * 1000);\n  const handler = {\n    get: (target, prop) => isExpired() ? undefined : target[prop];\n  };\n\n  return new Proxy(target, handler);\n}\n\nconst cache = cacheTarget({ age: 25 }, 5);\n\nconsole.log(cache.age);\n\nsetTimeout(() => {\n  console.log(cache.age);\n}, 6 * 1000);\n",lang:"js"}),r.a.createElement("p",null,"\u8fd9\u91cc\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a Proxy\u3002\u5728\u83b7\u53d6 ",r.a.createElement("code",null,"target")," \u7684\u5c5e\u6027\u524d\uff0c\u8fd9\u4e2a Proxy \u7684 ",r.a.createElement("code",null,"handler")," \u9996\u5148\u4f1a\u68c0\u67e5 ",r.a.createElement("code",null,"target")," \u5bf9\u8c61\u662f\u5426\u8fc7\u671f\uff0c\u57fa\u4e8e\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u9488\u5bf9\u6bcf\u4e2a\u952e\u503c\u90fd\u8bbe\u7f6e\u4e00\u4e2a\u57fa\u4e8e TTLs \u6216\u8005\u5176\u4ed6\u673a\u5236\u7684\u8fc7\u671f\u68c0\u67e5\u3002"),r.a.createElement("h3",{id:"cookie-\u5bf9\u8c61"},r.a.createElement("a",{"aria-hidden":"true",href:"#cookie-\u5bf9\u8c61"},r.a.createElement("span",{className:"icon icon-link"})),"Cookie \u5bf9\u8c61"),r.a.createElement("p",null,"\u5982\u679c\u4f60\u66fe\u7ecf\u4e0e Cookie \u8fdb\u884c\u4ea4\u4e92\uff0c\u90a3\u4e48\u5fc5\u987b\u5904\u7406 ",r.a.createElement("code",null,"document.cookie"),"\u3002\u8fd9\u662f\u4e00\u4e2a\u4e0d\u5bfb\u5e38\u7684 API\uff0c\u56e0\u4e3a API \u662f\u4e00\u4e2a String\uff0c\u5b83\u8bfb\u51fa\u6240\u6709 Cookie\uff0c\u4ee5\u5206\u53f7\u5206\u9694\u3002"),r.a.createElement("p",null,r.a.createElement("code",null,"document.cookie")," \u662f\u4e00\u4e2a\u770b\u8d77\u6765\u50cf\u8fd9\u6837\u7684\u5b57\u7b26\u4e32\uff1a"),r.a.createElement(o.a,{code:"_octo=GH1.2.2591.47507; _ga=GA1.1.62208.4087; has_recent_activity=1\n",lang:"js"}),r.a.createElement("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0c\u5904\u7406 ",r.a.createElement("code",null,"document.cookie")," \u6bd4\u8f83\u9ebb\u70e6\u4e14\u5bb9\u6613\u51fa\u9519\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u7b80\u5355\u7684 Cookie \u6846\u67b6\uff0c\u53ef\u4ee5\u9002\u7528\u4e8e Proxy\u3002"),r.a.createElement(o.a,{code:"const getCookie = () => {\n  const cookies = document.cookie.split(';').reduce((acc, item) => ({\n    [item.substr(0, item.indexOf('=')).trim()]: item.substr(item.indexOf('=') + 1),\n    ...acc,\n  }));\n\n  const setCookie = (name, val) => (document.cookie = `${name}=${val}`);\n\n  const deleteCookie = name =>\n    (document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`);\n\n  return new Proxy(cookies, {\n    set: (obj, prop, val) => (setCookie(prop, val), Reflect.set(obj, prop, val)),\n    deleteProperty: (obj, prop) => (deleteCookie(prop), Reflect.deleteProperty(obj, prop)),\n  });\n};\n",lang:"js"}),r.a.createElement("p",null,"\u6b64\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u952e\u503c\u5bf9\u5bf9\u8c61\uff0c\u4f46\u4ee3\u7406 ",r.a.createElement("code",null,"document.cookie")," \u8fdb\u884c\u6301\u4e45\u6027\u7684\u6240\u6709\u66f4\u6539\u3002"),r.a.createElement(o.a,{code:"let docCookies = getCookies();\n\ndocCookies.has_recent_activity;\n// 1\ndocCookies.has_recent_activity = '2';\n// 2\ndelete docCookies['has_recent_activity'];\n// true\n",lang:"js"}),r.a.createElement("p",null,"\u5728 11 \u884c\u4ee3\u7801\u4e2d\uff0c\u4fee\u6539 Cookie \u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u4ea4\u4e92\uff0c\u5c3d\u7ba1\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fd8\u9700\u8981\u8bf8\u5982\u5b57\u7b26\u4e32\u89c4\u8303\u5316\u4e4b\u7c7b\u7684\u9644\u52a0\u529f\u80fd\u3002"),r.a.createElement("h3",{id:"\u65e5\u5fd7\u548c\u7edf\u8ba1"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u65e5\u5fd7\u548c\u7edf\u8ba1"},r.a.createElement("span",{className:"icon icon-link"})),"\u65e5\u5fd7\u548c\u7edf\u8ba1"),r.a.createElement("p",null,"\u5728\u505a\u670d\u52a1\u7aef\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 Proxy \u4ee3\u7406\u51fd\u6570\uff0c\u7edf\u4e00\u4e00\u6bb5\u65f6\u95f4\u5185\u8c03\u7528\u7684\u6b21\u6570\u3002"),r.a.createElement("p",null,"\u5728\u540e\u671f\u505a\u6027\u80fd\u5206\u6790\u65f6\u53ef\u80fd\u4f1a\u80fd\u591f\u7528\u4e0a\uff1a"),r.a.createElement(o.a,{code:"function noop() {}\n\nconst proxyFunction = new Proxy(noop, {\n  apply(target, context, args) {\n    logger();\n\n    return target.apply(context, args);\n  },\n});\n",lang:"js"}),r.a.createElement("p",null,"\u6216\u8005\uff1a"),r.a.createElement(o.a,{code:"const data = {\n  name: 'Jerry',\n  author: 'Lauren Weisberger'\n}\n\nconst proxy = new Proxy(data, {\n  set (target, key, value) => {\n    console.log('\u8bbe\u7f6e', key, ':', target[key], '->', value);\n\n    target[key] = value;\n  }\n})\n\nproxy.name = 'Notebook';\n// \u8bbe\u7f6e name : The Devil wears prada -> Notebook\nproxy.name = 'asdf';\n// \u8bbe\u7f6e name : Notebook -> asdf\n",lang:"js"}),r.a.createElement("p",null,"\u5982\u4e0a\u8ff0\u4f8b\u5b50\u4e00\u6837\uff0c\u6765\u5b9a\u4f4d\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u5230\u5e95\u662f\u4ec0\u4e48\u65f6\u5019\u88ab\u4fee\u6539\uff0c\u5e76\u4e14\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 console.trace \u7b49\u65b9\u6cd5\u6765\u6392\u67e5\u662f\u5728\u4ec0\u4e48\u5730\u65b9\u88ab\u4fee\u6539\u4e86\u3002"),r.a.createElement("p",null,"\u6269\u5c55\u5230\u5176\u4ed6\u7c7b\u578b\u7684 handler\uff0c\u4f60\u5bf9\u67d0\u4e2a\u5bf9\u8c61\u5305\u4e86\u4e00\u5c42 Proxy \u4e4b\u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u77e5\u9053\u5b83\u4e0a\u9762\u7684\u5c5e\u6027\u662f\u4ec0\u4e48\u65f6\u5019\u4ec0\u4e48\u5730\u65b9\u88ab\u8bfb\u53d6\u3001\u88ab\u8c03\u7528\u3001\u88ab\u521d\u59cb\u5316\u3001\u88ab\u5220\u9664\u3001\u88ab\u5b58\u53d6 property \u7b49\u7b49\u3002"),r.a.createElement("p",null,"\u542c\u8d77\u6765\u6392\u67e5\u52a8\u6001\u7c7b\u578b\u7684\u95ee\u9898\u53ef\u4ee5\u53d8\u5f97\u66f4\u7b80\u5355\u4e86\u3002\u5982\u679c\u6709\u4e86\u6d41\u884c\u7684\u5bf9\u8c61\u76d1\u63a7\u5e93\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4e3b\u9700\u8981\u5f15\u5165\u8fd9\u4e2a\u5e93\u7136\u540e\u5305\u4e00\u4e0b\u9700\u8981\u76d1\u63a7\u7684\u5bf9\u8c61\u5c31\u53ef\u4ee5\u628a\u8fd9\u4e2a\u5bf9\u8c61\u5b8c\u6574\u7684\u64cd\u4f5c\u8bb0\u5f55\u90fd\u6253\u5370\u51fa\u6765\u4e86\u3002"),r.a.createElement("h3",{id:"\u52a8\u6001\u4ee3\u7406"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u52a8\u6001\u4ee3\u7406"},r.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u4ee3\u7406"),r.a.createElement("p",null,"\u7b80\u5355\u5b9e\u73b0\u4ee3\u7406\uff1a"),r.a.createElement(o.a,{code:"const axios = require('axios');\n\nconst instance = axios.create({ baseURL: 'http://localhost:3000/api' });\nconst METHODS = ['get', 'post', 'patch'];\n\n// proxy api\nconst api = new Proxy(\n  {},\n  {\n    // proxy api.${name}\n    get: (_, name) =>\n      new Proxy(\n        {},\n        {\n          // proxy api.${name}.${method}\n          get: (_, method) =>\n            METHODS.includes(method) &&\n            new Proxy(() => {}, {\n              // proxy api.${name}.${method}()\n              apply: (_, self, [config]) =>\n                instance.request({\n                  url: name, // /api/${name}\n                  method, // ${method}\n                  ...config,\n                }),\n            }),\n        }\n      ),\n  }\n);\n",lang:"js"}),r.a.createElement("p",null,"\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u662f\uff1a"),r.a.createElement(o.a,{code:"// GET /api/user?id=12\napi.user\n  .get({ params: { id: 12 } })\n  .then(user => console.log(user))\n  .catch(console.error);\n\n// POST /api/register\napi.register\n  .post({ body: { username: 'xxx', passworld: 'xxxx' } })\n  .then(res => console.log(res))\n  .catch(console.error);\n",lang:"js"}),r.a.createElement("p",null,"\u8bbe\u8ba1\u6a21\u5f0f\u4e2d\u6709\u4e00\u79cd\u4e2d\u4ecb\u8005\u6a21\u5f0f\uff08Mediator pattern\uff09\uff0c\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e2d\uff0c\u53ef\u4ee5\u628a Proxy \u5f53\u505a\u5bf9\u8c61\u4e4b\u95f4\u7684\u4ea4\u4e92\u65f6\u5019\u7684\u4e2d\u4ecb\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5b9a\u4e49\u4e0d\u540c\u7684\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u53ea\u9700\u8981 Proxy \u5bf9\u5916\u4fdd\u8bc1\u4e00\u81f4\u7684\u4f53\u9a8c\u5373\u53ef\u3002"),r.a.createElement("p",null,"\u66f4\u957f\u8fdc\u4e00\u70b9\u6765\u8bf4\uff0c\u901a\u8fc7 Proxy \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u70ed\u91cd\u8f7d\u7684\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8ba9 Proxy \u6307\u5411\u65b0 require \u7684\u4ee3\u7801\u6765\u66ff\u6362\u65e7\u7248\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u70ed\u91cd\u8f7d\u800c\u5bf9\u5f00\u53d1\u8005\u9690\u85cf\u8fd9\u4e2a\u7ec6\u8282\u3002"),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://mp.weixin.qq.com/s/USybqGEQHW8ncuzVe1g_Rw",target:"_blank",rel:"noopener noreferrer"},"\u4f60\u4e0d\u77e5\u9053\u7684 Proxy\uff1aES6 Proxy \u53ef\u4ee5\u505a\u54ea\u4e9b\u6709\u610f\u601d\u7684\u4e8b\u60c5\uff1f",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651557259&idx=1&sn=3aa73167ba3e5f073c0181d65fe2b966&chksm=80255a4ab752d35c0771a981a594d2811cbec39c80f21e37314c1d7aa083b478e91915e8c9cc&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},"\u5982\u4f55\u4f7f\u7528 Proxy \u6765\u4ee3\u7406 JavaScript \u91cc\u7684\u7c7b",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);