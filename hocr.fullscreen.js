!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 4)
}([function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, l = [], u = !1, f = -1;

    function d() {
        u && c && (u = !1, c.length ? l = c.concat(l) : f = -1, l.length && p())
    }

    function p() {
        if (!u) {
            var e = s(d);
            u = !0;
            for (var t = l.length; t;) {
                for (c = l, l = []; ++f < t;) c && c[f].run();
                f = -1, t = l.length
            }
            c = null, u = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function v(e, t) {
        this.fun = e, this.array = t
    }

    function h() {
    }

    o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new v(e, t)), 1 !== l.length || u || s(p)
    }, v.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) {
        return []
    }, o.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "", r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = r.sources.map(function (e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function (e, t, n) {
    var r, o, i = {}, a = (r = function () {
        return window && document && document.all && !window.atob
    }, function () {
        return void 0 === o && (o = r.apply(this, arguments)), o
    }), s = function (e) {
        var t = {};
        return function (e) {
            if (void 0 === t[e]) {
                var n = function (e) {
                    return document.querySelector(e)
                }.call(this, e);
                if (n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head
                } catch (e) {
                    n = null
                }
                t[e] = n
            }
            return t[e]
        }
    }(), c = null, l = 0, u = [], f = n(10);

    function d(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n], o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(y(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(y(r.parts[a], t));
                i[r.id] = {id: r.id, refs: 1, parts: s}
            }
        }
    }

    function p(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o], a = t.base ? i[0] + t.base : i[0], s = {css: i[1], media: i[2], sourceMap: i[3]};
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
        }
        return n
    }

    function v(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, o)
        }
    }

    function h(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function m(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", g(t, e.attrs), v(e, t), t
    }

    function g(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function y(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = t.transform(e.css))) return function () {
            };
            e.css = i
        }
        if (t.singleton) {
            var a = l++;
            n = c || (c = m(t)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", g(t, e.attrs), v(e, t), t
        }(t), r = function (e, t, n) {
            var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = f(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {type: "text/css"}), s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), o = function () {
            h(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = m(t), r = function (e, t) {
            var n = t.css, r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n; else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function () {
            h(n)
        });
        return r(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t)
            } else o()
        }
    }

    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = p(e, t);
        return d(n, t), function (e) {
            for (var r = [], o = 0; o < n.length; o++) {
                var a = n[o];
                (s = i[a.id]).refs--, r.push(s)
            }
            e && d(p(e, t), t);
            for (o = 0; o < r.length; o++) {
                var s;
                if (0 === (s = r[o]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete i[s.id]
                }
            }
        }
    };
    var b, _ = (b = [], function (e, t) {
        return b[e] = t, b.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, o); else {
            var i = document.createTextNode(o), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r, o = n(5), i = (r = o) && r.__esModule ? r : {default: r};
    n(8), n(11);
    var a = n(13);
    var s = document.querySelector("html").innerHTML;
    document.body.innerHTML = '<div id="app"/>', window.hocrapp = new i.default({
        el: "#app",
        components: {HocrViewer: a.HocrViewer},
        template: '<HocrViewer :hocr="hocr" />',
        data: {hocr: s}
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e, n, r) {
        var o = Object.freeze({});

        function i(e) {
            return void 0 === e || null === e
        }

        function a(e) {
            return void 0 !== e && null !== e
        }

        function s(e) {
            return !0 === e
        }

        function c(e) {
            return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
        }

        function l(e) {
            return null !== e && "object" == typeof e
        }

        var u = Object.prototype.toString;

        function f(e) {
            return u.call(e).slice(8, -1)
        }

        function d(e) {
            return "[object Object]" === u.call(e)
        }

        function p(e) {
            return "[object RegExp]" === u.call(e)
        }

        function v(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
        }

        function h(e) {
            return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e)
        }

        function m(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }

        function g(e, t) {
            for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
            return t ? function (e) {
                return n[e.toLowerCase()]
            } : function (e) {
                return n[e]
            }
        }

        var y = g("slot,component", !0), b = g("key,ref,slot,slot-scope,is");

        function _(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1) return e.splice(n, 1)
            }
        }

        var w = Object.prototype.hasOwnProperty;

        function E(e, t) {
            return w.call(e, t)
        }

        function x(e) {
            var t = Object.create(null);
            return function (n) {
                return t[n] || (t[n] = e(n))
            }
        }

        var k = /-(\w)/g, O = x(function (e) {
            return e.replace(k, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }), N = x(function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }), C = /\B([A-Z])/g, $ = x(function (e) {
            return e.replace(C, "-$1").toLowerCase()
        });

        function A(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }

            return n._length = e.length, n
        }

        function S(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
            return r
        }

        function T(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function j(e) {
            for (var t = {}, n = 0; n < e.length; n++) e[n] && T(t, e[n]);
            return t
        }

        function D(e, t, n) {
        }

        var I = function (e, t, n) {
            return !1
        }, M = function (e) {
            return e
        };

        function P(e, t) {
            if (e === t) return !0;
            var n = l(e), r = l(t);
            if (!n || !r) return !n && !r && String(e) === String(t);
            try {
                var o = Array.isArray(e), i = Array.isArray(t);
                if (o && i) return e.length === t.length && e.every(function (e, n) {
                    return P(e, t[n])
                });
                if (o || i) return !1;
                var a = Object.keys(e), s = Object.keys(t);
                return a.length === s.length && a.every(function (n) {
                    return P(e[n], t[n])
                })
            } catch (e) {
                return !1
            }
        }

        function V(e, t) {
            for (var n = 0; n < e.length; n++) if (P(e[n], t)) return n;
            return -1
        }

        function L(e) {
            var t = !1;
            return function () {
                t || (t = !0, e.apply(this, arguments))
            }
        }

        var H = "data-server-rendered", F = ["component", "directive", "filter"],
            R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
            U = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: "production" !== e.env.NODE_ENV,
                devtools: "production" !== e.env.NODE_ENV,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: I,
                isReservedAttr: I,
                isUnknownElement: I,
                getTagNamespace: D,
                parsePlatformTagName: M,
                mustUseProp: I,
                _lifecycleHooks: R
            };

        function z(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }

        function B(e, t, n, r) {
            Object.defineProperty(e, t, {value: n, enumerable: !!r, writable: !0, configurable: !0})
        }

        var q = /[^\w.$]/;
        var J, K = "__proto__" in {}, W = "undefined" != typeof window,
            Z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            G = Z && WXEnvironment.platform.toLowerCase(), X = W && window.navigator.userAgent.toLowerCase(),
            Y = X && /msie|trident/.test(X), Q = X && X.indexOf("msie 9.0") > 0, ee = X && X.indexOf("edge/") > 0,
            te = X && X.indexOf("android") > 0 || "android" === G,
            ne = X && /iphone|ipad|ipod|ios/.test(X) || "ios" === G, re = X && /chrome\/\d+/.test(X) && !ee,
            oe = {}.watch, ie = !1;
        if (W) try {
            var ae = {};
            Object.defineProperty(ae, "passive", {
                get: function () {
                    ie = !0
                }
            }), window.addEventListener("test-passive", null, ae)
        } catch (e) {
        }
        var se = function () {
            return void 0 === J && (J = !W && void 0 !== n && "server" === n.process.env.VUE_ENV), J
        }, ce = W && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function le(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }

        var ue, fe = "undefined" != typeof Symbol && le(Symbol) && "undefined" != typeof Reflect && le(Reflect.ownKeys);
        ue = "undefined" != typeof Set && le(Set) ? Set : function () {
            function e() {
                this.set = Object.create(null)
            }

            return e.prototype.has = function (e) {
                return !0 === this.set[e]
            }, e.prototype.add = function (e) {
                this.set[e] = !0
            }, e.prototype.clear = function () {
                this.set = Object.create(null)
            }, e
        }();
        var de = D, pe = D, ve = D, he = D;
        if ("production" !== e.env.NODE_ENV) {
            var me = "undefined" != typeof console, ge = /(?:^|[-_])(\w)/g;
            de = function (e, t) {
                var n = t ? ve(t) : "";
                U.warnHandler ? U.warnHandler.call(null, e, t, n) : me && !U.silent && console.error("[Vue warn]: " + e + n)
            }, pe = function (e, t) {
                me && !U.silent && console.warn("[Vue tip]: " + e + (t ? ve(t) : ""))
            }, he = function (e, t) {
                if (e.$root === e) return "<Root>";
                var n = "function" == typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e || {},
                    r = n.name || n._componentTag, o = n.__file;
                if (!r && o) {
                    var i = o.match(/([^/\\]+)\.vue$/);
                    r = i && i[1]
                }
                return (r ? "<" + r.replace(ge, function (e) {
                    return e.toUpperCase()
                }).replace(/[-_]/g, "") + ">" : "<Anonymous>") + (o && !1 !== t ? " at " + o : "")
            };
            ve = function (e) {
                if (e._isVue && e.$parent) {
                    for (var t = [], n = 0; e;) {
                        if (t.length > 0) {
                            var r = t[t.length - 1];
                            if (r.constructor === e.constructor) {
                                n++, e = e.$parent;
                                continue
                            }
                            n > 0 && (t[t.length - 1] = [r, n], n = 0)
                        }
                        t.push(e), e = e.$parent
                    }
                    return "\n\nfound in\n\n" + t.map(function (e, t) {
                        return "" + (0 === t ? "---\x3e " : function (e, t) {
                            for (var n = ""; t;) t % 2 == 1 && (n += e), t > 1 && (e += e), t >>= 1;
                            return n
                        }(" ", 5 + 2 * t)) + (Array.isArray(e) ? he(e[0]) + "... (" + e[1] + " recursive calls)" : he(e))
                    }).join("\n")
                }
                return "\n\n(found in " + he(e) + ")"
            }
        }
        var ye = 0, be = function () {
            this.id = ye++, this.subs = []
        };
        be.prototype.addSub = function (e) {
            this.subs.push(e)
        }, be.prototype.removeSub = function (e) {
            _(this.subs, e)
        }, be.prototype.depend = function () {
            be.target && be.target.addDep(this)
        }, be.prototype.notify = function () {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
        }, be.target = null;
        var _e = [];
        var we = function (e, t, n, r, o, i, a, s) {
            this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
        }, Ee = {child: {configurable: !0}};
        Ee.child.get = function () {
            return this.componentInstance
        }, Object.defineProperties(we.prototype, Ee);
        var xe = function (e) {
            void 0 === e && (e = "");
            var t = new we;
            return t.text = e, t.isComment = !0, t
        };

        function ke(e) {
            return new we(void 0, void 0, void 0, String(e))
        }

        function Oe(e, t) {
            var n = e.componentOptions,
                r = new we(e.tag, e.data, e.children, e.text, e.elm, e.context, n, e.asyncFactory);
            return r.ns = e.ns, r.isStatic = e.isStatic, r.key = e.key, r.isComment = e.isComment, r.fnContext = e.fnContext, r.fnOptions = e.fnOptions, r.fnScopeId = e.fnScopeId, r.isCloned = !0, t && (e.children && (r.children = Ne(e.children, !0)), n && n.children && (n.children = Ne(n.children, !0))), r
        }

        function Ne(e, t) {
            for (var n = e.length, r = new Array(n), o = 0; o < n; o++) r[o] = Oe(e[o], t);
            return r
        }

        var Ce = Array.prototype, $e = Object.create(Ce);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
            var t = Ce[e];
            B($e, e, function () {
                for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                var o, i = t.apply(this, n), a = this.__ob__;
                switch (e) {
                    case"push":
                    case"unshift":
                        o = n;
                        break;
                    case"splice":
                        o = n.slice(2)
                }
                return o && a.observeArray(o), a.dep.notify(), i
            })
        });
        var Ae = Object.getOwnPropertyNames($e), Se = {shouldConvert: !0}, Te = function (e) {
            (this.value = e, this.dep = new be, this.vmCount = 0, B(e, "__ob__", this), Array.isArray(e)) ? ((K ? je : De)(e, $e, Ae), this.observeArray(e)) : this.walk(e)
        };

        function je(e, t, n) {
            e.__proto__ = t
        }

        function De(e, t, n) {
            for (var r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                B(e, i, t[i])
            }
        }

        function Ie(e, t) {
            var n;
            if (l(e) && !(e instanceof we)) return E(e, "__ob__") && e.__ob__ instanceof Te ? n = e.__ob__ : Se.shouldConvert && !se() && (Array.isArray(e) || d(e)) && Object.isExtensible(e) && !e._isVue && (n = new Te(e)), t && n && n.vmCount++, n
        }

        function Me(t, n, r, o, i) {
            var a = new be, s = Object.getOwnPropertyDescriptor(t, n);
            if (!s || !1 !== s.configurable) {
                var c = s && s.get, l = s && s.set, u = !i && Ie(r);
                Object.defineProperty(t, n, {
                    enumerable: !0, configurable: !0, get: function () {
                        var e = c ? c.call(t) : r;
                        return be.target && (a.depend(), u && (u.dep.depend(), Array.isArray(e) && function e(t) {
                            for (var n = void 0, r = 0, o = t.length; r < o; r++) (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
                        }(e))), e
                    }, set: function (n) {
                        var s = c ? c.call(t) : r;
                        n === s || n != n && s != s || ("production" !== e.env.NODE_ENV && o && o(), l ? l.call(t, n) : r = n, u = !i && Ie(n), a.notify())
                    }
                })
            }
        }

        function Pe(t, n, r) {
            if (Array.isArray(t) && v(n)) return t.length = Math.max(t.length, n), t.splice(n, 1, r), r;
            if (n in t && !(n in Object.prototype)) return t[n] = r, r;
            var o = t.__ob__;
            return t._isVue || o && o.vmCount ? ("production" !== e.env.NODE_ENV && de("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), r) : o ? (Me(o.value, n, r), o.dep.notify(), r) : (t[n] = r, r)
        }

        function Ve(t, n) {
            if (Array.isArray(t) && v(n)) t.splice(n, 1); else {
                var r = t.__ob__;
                t._isVue || r && r.vmCount ? "production" !== e.env.NODE_ENV && de("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : E(t, n) && (delete t[n], r && r.dep.notify())
            }
        }

        Te.prototype.walk = function (e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) Me(e, t[n], e[t[n]])
        }, Te.prototype.observeArray = function (e) {
            for (var t = 0, n = e.length; t < n; t++) Ie(e[t])
        };
        var Le = U.optionMergeStrategies;

        function He(e, t) {
            if (!t) return e;
            for (var n, r, o, i = Object.keys(t), a = 0; a < i.length; a++) r = e[n = i[a]], o = t[n], E(e, n) ? d(r) && d(o) && He(r, o) : Pe(e, n, o);
            return e
        }

        function Fe(e, t, n) {
            return n ? function () {
                var r = "function" == typeof t ? t.call(n, n) : t, o = "function" == typeof e ? e.call(n, n) : e;
                return r ? He(r, o) : o
            } : t ? e ? function () {
                return He("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
            } : t : e
        }

        function Re(e, t) {
            return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e
        }

        function Ue(t, n, r, o) {
            var i = Object.create(t || null);
            return n ? ("production" !== e.env.NODE_ENV && qe(o, n, r), T(i, n)) : i
        }

        "production" !== e.env.NODE_ENV && (Le.el = Le.propsData = function (e, t, n, r) {
            return n || de('option "' + r + '" can only be used during instance creation with the `new` keyword.'), ze(e, t)
        }), Le.data = function (t, n, r) {
            return r ? Fe(t, n, r) : n && "function" != typeof n ? ("production" !== e.env.NODE_ENV && de('The "data" option should be a function that returns a per-instance value in component definitions.', r), t) : Fe(t, n)
        }, R.forEach(function (e) {
            Le[e] = Re
        }), F.forEach(function (e) {
            Le[e + "s"] = Ue
        }), Le.watch = function (t, n, r, o) {
            if (t === oe && (t = void 0), n === oe && (n = void 0), !n) return Object.create(t || null);
            if ("production" !== e.env.NODE_ENV && qe(o, n, r), !t) return n;
            var i = {};
            for (var a in T(i, t), n) {
                var s = i[a], c = n[a];
                s && !Array.isArray(s) && (s = [s]), i[a] = s ? s.concat(c) : Array.isArray(c) ? c : [c]
            }
            return i
        }, Le.props = Le.methods = Le.inject = Le.computed = function (t, n, r, o) {
            if (n && "production" !== e.env.NODE_ENV && qe(o, n, r), !t) return n;
            var i = Object.create(null);
            return T(i, t), n && T(i, n), i
        }, Le.provide = Fe;
        var ze = function (e, t) {
            return void 0 === t ? e : t
        };

        function Be(e) {
            /^[a-zA-Z][\w-]*$/.test(e) || de('Invalid component name: "' + e + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'), (y(e) || U.isReservedTag(e)) && de("Do not use built-in or reserved HTML elements as component id: " + e)
        }

        function qe(e, t, n) {
            d(t) || de('Invalid value for option "' + e + '": expected an Object, but got ' + f(t) + ".", n)
        }

        function Je(t, n, r) {
            "production" !== e.env.NODE_ENV && function (e) {
                for (var t in e.components) Be(t)
            }(n), "function" == typeof n && (n = n.options), function (t, n) {
                var r = t.props;
                if (r) {
                    var o, i, a = {};
                    if (Array.isArray(r)) for (o = r.length; o--;) "string" == typeof(i = r[o]) ? a[O(i)] = {type: null} : "production" !== e.env.NODE_ENV && de("props must be strings when using array syntax."); else if (d(r)) for (var s in r) i = r[s], a[O(s)] = d(i) ? i : {type: i}; else "production" !== e.env.NODE_ENV && de('Invalid value for option "props": expected an Array or an Object, but got ' + f(r) + ".", n);
                    t.props = a
                }
            }(n, r), function (t, n) {
                var r = t.inject;
                if (r) {
                    var o = t.inject = {};
                    if (Array.isArray(r)) for (var i = 0; i < r.length; i++) o[r[i]] = {from: r[i]}; else if (d(r)) for (var a in r) {
                        var s = r[a];
                        o[a] = d(s) ? T({from: a}, s) : {from: s}
                    } else "production" !== e.env.NODE_ENV && de('Invalid value for option "inject": expected an Array or an Object, but got ' + f(r) + ".", n)
                }
            }(n, r), function (e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = {bind: r, update: r})
                }
            }(n);
            var o = n.extends;
            if (o && (t = Je(t, o, r)), n.mixins) for (var i = 0, a = n.mixins.length; i < a; i++) t = Je(t, n.mixins[i], r);
            var s, c = {};
            for (s in t) l(s);
            for (s in n) E(t, s) || l(s);

            function l(e) {
                var o = Le[e] || ze;
                c[e] = o(t[e], n[e], r, e)
            }

            return c
        }

        function Ke(t, n, r, o) {
            if ("string" == typeof r) {
                var i = t[n];
                if (E(i, r)) return i[r];
                var a = O(r);
                if (E(i, a)) return i[a];
                var s = N(a);
                if (E(i, s)) return i[s];
                var c = i[r] || i[a] || i[s];
                return "production" !== e.env.NODE_ENV && o && !c && de("Failed to resolve " + n.slice(0, -1) + ": " + r, t), c
            }
        }

        function We(t, n, r, o) {
            var i = n[t], a = !E(r, t), s = r[t];
            if (Ye(Boolean, i.type) && (a && !E(i, "default") ? s = !1 : Ye(String, i.type) || "" !== s && s !== $(t) || (s = !0)), void 0 === s) {
                s = function (t, n, r) {
                    if (!E(n, "default")) return;
                    var o = n.default;
                    "production" !== e.env.NODE_ENV && l(o) && de('Invalid default value for prop "' + r + '": Props with type Object/Array must use a factory function to return the default value.', t);
                    if (t && t.$options.propsData && void 0 === t.$options.propsData[r] && void 0 !== t._props[r]) return t._props[r];
                    return "function" == typeof o && "Function" !== Xe(n.type) ? o.call(t) : o
                }(o, i, t);
                var c = Se.shouldConvert;
                Se.shouldConvert = !0, Ie(s), Se.shouldConvert = c
            }
            return "production" !== e.env.NODE_ENV && function (e, t, n, r, o) {
                if (e.required && o) return void de('Missing required prop: "' + t + '"', r);
                if (null == n && !e.required) return;
                var i = e.type, a = !i || !0 === i, s = [];
                if (i) {
                    Array.isArray(i) || (i = [i]);
                    for (var c = 0; c < i.length && !a; c++) {
                        var l = Ge(n, i[c]);
                        s.push(l.expectedType || ""), a = l.valid
                    }
                }
                if (!a) return void de('Invalid prop: type check failed for prop "' + t + '". Expected ' + s.map(N).join(", ") + ", got " + f(n) + ".", r);
                var u = e.validator;
                u && (u(n) || de('Invalid prop: custom validator check failed for prop "' + t + '".', r))
            }(i, t, s, o, a), s
        }

        var Ze = /^(String|Number|Boolean|Function|Symbol)$/;

        function Ge(e, t) {
            var n, r = Xe(t);
            if (Ze.test(r)) {
                var o = typeof e;
                (n = o === r.toLowerCase()) || "object" !== o || (n = e instanceof t)
            } else n = "Object" === r ? d(e) : "Array" === r ? Array.isArray(e) : e instanceof t;
            return {valid: n, expectedType: r}
        }

        function Xe(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
        }

        function Ye(e, t) {
            if (!Array.isArray(t)) return Xe(t) === Xe(e);
            for (var n = 0, r = t.length; n < r; n++) if (Xe(t[n]) === Xe(e)) return !0;
            return !1
        }

        function Qe(e, t, n) {
            if (t) for (var r = t; r = r.$parent;) {
                var o = r.$options.errorCaptured;
                if (o) for (var i = 0; i < o.length; i++) try {
                    if (!1 === o[i].call(r, e, t, n)) return
                } catch (e) {
                    et(e, r, "errorCaptured hook")
                }
            }
            et(e, t, n)
        }

        function et(e, t, n) {
            if (U.errorHandler) try {
                return U.errorHandler.call(null, e, t, n)
            } catch (e) {
                tt(e, null, "config.errorHandler")
            }
            tt(e, t, n)
        }

        function tt(t, n, r) {
            if ("production" !== e.env.NODE_ENV && de("Error in " + r + ': "' + t.toString() + '"', n), !W && !Z || "undefined" == typeof console) throw t;
            console.error(t)
        }

        var nt, rt, ot = [], it = !1;

        function at() {
            it = !1;
            var e = ot.slice(0);
            ot.length = 0;
            for (var t = 0; t < e.length; t++) e[t]()
        }

        var st, ct, lt, ut = !1;
        if (void 0 !== r && le(r)) rt = function () {
            r(at)
        }; else if ("undefined" == typeof MessageChannel || !le(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) rt = function () {
            setTimeout(at, 0)
        }; else {
            var ft = new MessageChannel, dt = ft.port2;
            ft.port1.onmessage = at, rt = function () {
                dt.postMessage(1)
            }
        }
        if ("undefined" != typeof Promise && le(Promise)) {
            var pt = Promise.resolve();
            nt = function () {
                pt.then(at), ne && setTimeout(D)
            }
        } else nt = rt;

        function vt(e, t) {
            var n;
            if (ot.push(function () {
                if (e) try {
                    e.call(t)
                } catch (e) {
                    Qe(e, t, "nextTick")
                } else n && n(t)
            }), it || (it = !0, ut ? rt() : nt()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
                n = e
            })
        }

        if ("production" !== e.env.NODE_ENV) {
            var ht = W && window.performance;
            ht && ht.mark && ht.measure && ht.clearMarks && ht.clearMeasures && (st = function (e) {
                return ht.mark(e)
            }, ct = function (e, t, n) {
                ht.measure(e, t, n), ht.clearMarks(t), ht.clearMarks(n), ht.clearMeasures(e)
            })
        }
        if ("production" !== e.env.NODE_ENV) {
            var mt = g("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),
                gt = function (e, t) {
                    de('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', e)
                }, yt = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
            if (yt) {
                var bt = g("stop,prevent,self,ctrl,shift,alt,meta,exact");
                U.keyCodes = new Proxy(U.keyCodes, {
                    set: function (e, t, n) {
                        return bt(t) ? (de("Avoid overwriting built-in modifier in config.keyCodes: ." + t), !1) : (e[t] = n, !0)
                    }
                })
            }
            var _t = {
                has: function (e, t) {
                    var n = t in e, r = mt(t) || "_" === t.charAt(0);
                    return n || r || gt(e, t), n || !r
                }
            }, wt = {
                get: function (e, t) {
                    return "string" != typeof t || t in e || gt(e, t), e[t]
                }
            };
            lt = function (e) {
                if (yt) {
                    var t = e.$options, n = t.render && t.render._withStripped ? wt : _t;
                    e._renderProxy = new Proxy(e, n)
                } else e._renderProxy = e
            }
        }
        var Et = new ue;

        function xt(e) {
            !function e(t, n) {
                var r, o;
                var i = Array.isArray(t);
                if (!i && !l(t) || Object.isFrozen(t)) return;
                if (t.__ob__) {
                    var a = t.__ob__.dep.id;
                    if (n.has(a)) return;
                    n.add(a)
                }
                if (i) for (r = t.length; r--;) e(t[r], n); else for (o = Object.keys(t), r = o.length; r--;) e(t[o[r]], n)
            }(e, Et), Et.clear()
        }

        var kt, Ot = x(function (e) {
            var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return {name: e = r ? e.slice(1) : e, once: n, capture: r, passive: t}
        });

        function Nt(e) {
            function t() {
                var e = arguments, n = t.fns;
                if (!Array.isArray(n)) return n.apply(null, arguments);
                for (var r = n.slice(), o = 0; o < r.length; o++) r[o].apply(null, e)
            }

            return t.fns = e, t
        }

        function Ct(t, n, r, o, a) {
            var s, c, l, u;
            for (s in t) c = t[s], l = n[s], u = Ot(s), i(c) ? "production" !== e.env.NODE_ENV && de('Invalid handler for event "' + u.name + '": got ' + String(c), a) : i(l) ? (i(c.fns) && (c = t[s] = Nt(c)), r(u.name, c, u.once, u.capture, u.passive, u.params)) : c !== l && (l.fns = c, t[s] = l);
            for (s in n) i(t[s]) && o((u = Ot(s)).name, n[s], u.capture)
        }

        function $t(e, t, n) {
            var r;
            e instanceof we && (e = e.data.hook || (e.data.hook = {}));
            var o = e[t];

            function c() {
                n.apply(this, arguments), _(r.fns, c)
            }

            i(o) ? r = Nt([c]) : a(o.fns) && s(o.merged) ? (r = o).fns.push(c) : r = Nt([o, c]), r.merged = !0, e[t] = r
        }

        function At(e, t, n, r, o) {
            if (a(t)) {
                if (E(t, n)) return e[n] = t[n], o || delete t[n], !0;
                if (E(t, r)) return e[n] = t[r], o || delete t[r], !0
            }
            return !1
        }

        function St(e) {
            return c(e) ? [ke(e)] : Array.isArray(e) ? function e(t, n) {
                var r = [];
                var o, l, u, f;
                for (o = 0; o < t.length; o++) i(l = t[o]) || "boolean" == typeof l || (u = r.length - 1, f = r[u], Array.isArray(l) ? l.length > 0 && (Tt((l = e(l, (n || "") + "_" + o))[0]) && Tt(f) && (r[u] = ke(f.text + l[0].text), l.shift()), r.push.apply(r, l)) : c(l) ? Tt(f) ? r[u] = ke(f.text + l) : "" !== l && r.push(ke(l)) : Tt(l) && Tt(f) ? r[u] = ke(f.text + l.text) : (s(t._isVList) && a(l.tag) && i(l.key) && a(n) && (l.key = "__vlist" + n + "_" + o + "__"), r.push(l)));
                return r
            }(e) : void 0
        }

        function Tt(e) {
            return a(e) && a(e.text) && !1 === e.isComment
        }

        function jt(e, t) {
            return (e.__esModule || fe && "Module" === e[Symbol.toStringTag]) && (e = e.default), l(e) ? t.extend(e) : e
        }

        function Dt(e) {
            return e.isComment && e.asyncFactory
        }

        function It(e) {
            if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (a(n) && (a(n.componentOptions) || Dt(n))) return n
            }
        }

        function Mt(e, t, n) {
            n ? kt.$once(e, t) : kt.$on(e, t)
        }

        function Pt(e, t) {
            kt.$off(e, t)
        }

        function Vt(e, t, n) {
            kt = e, Ct(t, n || {}, Mt, Pt, e), kt = void 0
        }

        function Lt(e, t) {
            var n = {};
            if (!e) return n;
            for (var r = 0, o = e.length; r < o; r++) {
                var i = e[r], a = i.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot) (n.default || (n.default = [])).push(i); else {
                    var s = a.slot, c = n[s] || (n[s] = []);
                    "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i)
                }
            }
            for (var l in n) n[l].every(Ht) && delete n[l];
            return n
        }

        function Ht(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
        }

        function Ft(e, t) {
            t = t || {};
            for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? Ft(e[n], t) : t[e[n].key] = e[n].fn;
            return t
        }

        var Rt = null, Ut = !1;

        function zt(e) {
            for (; e && (e = e.$parent);) if (e._inactive) return !0;
            return !1
        }

        function Bt(e, t) {
            if (t) {
                if (e._directInactive = !1, zt(e)) return
            } else if (e._directInactive) return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++) Bt(e.$children[n]);
                qt(e, "activated")
            }
        }

        function qt(e, t) {
            var n = e.$options[t];
            if (n) for (var r = 0, o = n.length; r < o; r++) try {
                n[r].call(e)
            } catch (n) {
                Qe(n, e, t + " hook")
            }
            e._hasHookEvent && e.$emit("hook:" + t)
        }

        var Jt = 100, Kt = [], Wt = [], Zt = {}, Gt = {}, Xt = !1, Yt = !1, Qt = 0;

        function en() {
            var t, n;
            for (Yt = !0, Kt.sort(function (e, t) {
                return e.id - t.id
            }), Qt = 0; Qt < Kt.length; Qt++) if (n = (t = Kt[Qt]).id, Zt[n] = null, t.run(), "production" !== e.env.NODE_ENV && null != Zt[n] && (Gt[n] = (Gt[n] || 0) + 1, Gt[n] > Jt)) {
                de("You may have an infinite update loop " + (t.user ? 'in watcher with expression "' + t.expression + '"' : "in a component render function."), t.vm);
                break
            }
            var r = Wt.slice(), o = Kt.slice();
            Qt = Kt.length = Wt.length = 0, Zt = {}, "production" !== e.env.NODE_ENV && (Gt = {}), Xt = Yt = !1, function (e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Bt(e[t], !0)
            }(r), function (e) {
                var t = e.length;
                for (; t--;) {
                    var n = e[t], r = n.vm;
                    r._watcher === n && r._isMounted && qt(r, "updated")
                }
            }(o), ce && U.devtools && ce.emit("flush")
        }

        var tn = 0, nn = function (t, n, r, o, i) {
            this.vm = t, i && (t._watcher = this), t._watchers.push(this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++tn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ue, this.newDepIds = new ue, this.expression = "production" !== e.env.NODE_ENV ? n.toString() : "", "function" == typeof n ? this.getter = n : (this.getter = function (e) {
                if (!q.test(e)) {
                    var t = e.split(".");
                    return function (e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }(n), this.getter || (this.getter = function () {
            }, "production" !== e.env.NODE_ENV && de('Failed watching path: "' + n + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', t))), this.value = this.lazy ? void 0 : this.get()
        };
        nn.prototype.get = function () {
            var e, t;
            e = this, be.target && _e.push(be.target), be.target = e;
            var n = this.vm;
            try {
                t = this.getter.call(n, n)
            } catch (e) {
                if (!this.user) throw e;
                Qe(e, n, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && xt(t), be.target = _e.pop(), this.cleanupDeps()
            }
            return t
        }, nn.prototype.addDep = function (e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
        }, nn.prototype.cleanupDeps = function () {
            for (var e = this.deps.length; e--;) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, nn.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
                var t = e.id;
                if (null == Zt[t]) {
                    if (Zt[t] = !0, Yt) {
                        for (var n = Kt.length - 1; n > Qt && Kt[n].id > e.id;) n--;
                        Kt.splice(n + 1, 0, e)
                    } else Kt.push(e);
                    Xt || (Xt = !0, vt(en))
                }
            }(this)
        }, nn.prototype.run = function () {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || l(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e, this.user) try {
                        this.cb.call(this.vm, e, t)
                    } catch (e) {
                        Qe(e, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, e, t)
                }
            }
        }, nn.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
        }, nn.prototype.depend = function () {
            for (var e = this.deps.length; e--;) this.deps[e].depend()
        }, nn.prototype.teardown = function () {
            if (this.active) {
                this.vm._isBeingDestroyed || _(this.vm._watchers, this);
                for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                this.active = !1
            }
        };
        var rn = {enumerable: !0, configurable: !0, get: D, set: D};

        function on(e, t, n) {
            rn.get = function () {
                return this[t][n]
            }, rn.set = function (e) {
                this[t][n] = e
            }, Object.defineProperty(e, n, rn)
        }

        function an(t) {
            t._watchers = [];
            var n = t.$options;
            n.props && function (t, n) {
                var r = t.$options.propsData || {}, o = t._props = {}, i = t.$options._propKeys = [], a = !t.$parent;
                Se.shouldConvert = a;
                var s = function (a) {
                    i.push(a);
                    var s = We(a, n, r, t);
                    if ("production" !== e.env.NODE_ENV) {
                        var c = $(a);
                        (b(c) || U.isReservedAttr(c)) && de('"' + c + '" is a reserved attribute and cannot be used as component prop.', t), Me(o, a, s, function () {
                            t.$parent && !Ut && de("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + a + '"', t)
                        })
                    } else Me(o, a, s);
                    a in t || on(t, "_props", a)
                };
                for (var c in n) s(c);
                Se.shouldConvert = !0
            }(t, n.props), n.methods && function (t, n) {
                var r = t.$options.props;
                for (var o in n) "production" !== e.env.NODE_ENV && (null == n[o] && de('Method "' + o + '" has an undefined value in the component definition. Did you reference the function correctly?', t), r && E(r, o) && de('Method "' + o + '" has already been defined as a prop.', t), o in t && z(o) && de('Method "' + o + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.')), t[o] = null == n[o] ? D : A(n[o], t)
            }(t, n.methods), n.data ? function (t) {
                var n = t.$options.data;
                d(n = t._data = "function" == typeof n ? function (e, t) {
                    try {
                        return e.call(t, t)
                    } catch (e) {
                        return Qe(e, t, "data()"), {}
                    }
                }(n, t) : n || {}) || (n = {}, "production" !== e.env.NODE_ENV && de("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", t));
                var r = Object.keys(n), o = t.$options.props, i = t.$options.methods, a = r.length;
                for (; a--;) {
                    var s = r[a];
                    "production" !== e.env.NODE_ENV && i && E(i, s) && de('Method "' + s + '" has already been defined as a data property.', t), o && E(o, s) ? "production" !== e.env.NODE_ENV && de('The data property "' + s + '" is already declared as a prop. Use prop default value instead.', t) : z(s) || on(t, "_data", s)
                }
                Ie(n, !0)
            }(t) : Ie(t._data = {}, !0), n.computed && function (t, n) {
                var r = t._computedWatchers = Object.create(null), o = se();
                for (var i in n) {
                    var a = n[i], s = "function" == typeof a ? a : a.get;
                    "production" !== e.env.NODE_ENV && null == s && de('Getter is missing for computed property "' + i + '".', t), o || (r[i] = new nn(t, s || D, D, sn)), i in t ? "production" !== e.env.NODE_ENV && (i in t.$data ? de('The computed property "' + i + '" is already defined in data.', t) : t.$options.props && i in t.$options.props && de('The computed property "' + i + '" is already defined as a prop.', t)) : cn(t, i, a)
                }
            }(t, n.computed), n.watch && n.watch !== oe && function (e, t) {
                for (var n in t) {
                    var r = t[n];
                    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) un(e, n, r[o]); else un(e, n, r)
                }
            }(t, n.watch)
        }

        var sn = {lazy: !0};

        function cn(t, n, r) {
            var o = !se();
            "function" == typeof r ? (rn.get = o ? ln(n) : r, rn.set = D) : (rn.get = r.get ? o && !1 !== r.cache ? ln(n) : r.get : D, rn.set = r.set ? r.set : D), "production" !== e.env.NODE_ENV && rn.set === D && (rn.set = function () {
                de('Computed property "' + n + '" was assigned to but it has no setter.', this)
            }), Object.defineProperty(t, n, rn)
        }

        function ln(e) {
            return function () {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) return t.dirty && t.evaluate(), be.target && t.depend(), t.value
            }
        }

        function un(e, t, n, r) {
            return d(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
        }

        function fn(t, n) {
            if (t) {
                for (var r = Object.create(null), o = fe ? Reflect.ownKeys(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }) : Object.keys(t), i = 0; i < o.length; i++) {
                    for (var a = o[i], s = t[a].from, c = n; c;) {
                        if (c._provided && s in c._provided) {
                            r[a] = c._provided[s];
                            break
                        }
                        c = c.$parent
                    }
                    if (!c) if ("default" in t[a]) {
                        var l = t[a].default;
                        r[a] = "function" == typeof l ? l.call(n) : l
                    } else "production" !== e.env.NODE_ENV && de('Injection "' + a + '" not found', n)
                }
                return r
            }
        }

        function dn(e, t) {
            var n, r, o, i, s;
            if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r); else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r); else if (l(e)) for (i = Object.keys(e), n = new Array(i.length), r = 0, o = i.length; r < o; r++) s = i[r], n[r] = t(e[s], s, r);
            return a(n) && (n._isVList = !0), n
        }

        function pn(t, n, r, o) {
            var i, a = this.$scopedSlots[t];
            if (a) r = r || {}, o && ("production" === e.env.NODE_ENV || l(o) || de("slot v-bind without argument expects an Object", this), r = T(T({}, o), r)), i = a(r) || n; else {
                var s = this.$slots[t];
                s && ("production" !== e.env.NODE_ENV && s._rendered && de('Duplicate presence of slot "' + t + '" found in the same render tree - this will likely cause render errors.', this), s._rendered = !0), i = s || n
            }
            var c = r && r.slot;
            return c ? this.$createElement("template", {slot: c}, i) : i
        }

        function vn(e) {
            return Ke(this.$options, "filters", e, !0) || M
        }

        function hn(e, t, n, r) {
            var o = U.keyCodes[t] || n;
            return o ? Array.isArray(o) ? -1 === o.indexOf(e) : o !== e : r ? $(r) !== t : void 0
        }

        function mn(t, n, r, o, i) {
            if (r) if (l(r)) {
                var a;
                Array.isArray(r) && (r = j(r));
                var s = function (e) {
                    if ("class" === e || "style" === e || b(e)) a = t; else {
                        var s = t.attrs && t.attrs.type;
                        a = o || U.mustUseProp(n, s, e) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                    }
                    e in a || (a[e] = r[e], i && ((t.on || (t.on = {}))["update:" + e] = function (t) {
                        r[e] = t
                    }))
                };
                for (var c in r) s(c)
            } else "production" !== e.env.NODE_ENV && de("v-bind without argument expects an Object or Array value", this);
            return t
        }

        function gn(e, t) {
            var n = this._staticTrees || (this._staticTrees = []), r = n[e];
            return r && !t ? Array.isArray(r) ? Ne(r) : Oe(r) : (bn(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
        }

        function yn(e, t, n) {
            return bn(e, "__once__" + t + (n ? "_" + n : ""), !0), e
        }

        function bn(e, t, n) {
            if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && _n(e[r], t + "_" + r, n); else _n(e, t, n)
        }

        function _n(e, t, n) {
            e.isStatic = !0, e.key = t, e.isOnce = n
        }

        function wn(t, n) {
            if (n) if (d(n)) {
                var r = t.on = t.on ? T({}, t.on) : {};
                for (var o in n) {
                    var i = r[o], a = n[o];
                    r[o] = i ? [].concat(i, a) : a
                }
            } else "production" !== e.env.NODE_ENV && de("v-on without argument expects an Object value", this);
            return t
        }

        function En(e) {
            e._o = yn, e._n = m, e._s = h, e._l = dn, e._t = pn, e._q = P, e._i = V, e._m = gn, e._f = vn, e._k = hn, e._b = mn, e._v = ke, e._e = xe, e._u = Ft, e._g = wn
        }

        function xn(e, t, n, r, i) {
            var a = i.options;
            this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || o, this.injections = fn(a.inject, r), this.slots = function () {
                return Lt(n, r)
            };
            var c = Object.create(r), l = s(a._compiled), u = !l;
            l && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || o), a._scopeId ? this._c = function (e, t, n, o) {
                var i = Tn(c, e, t, n, o, u);
                return i && (i.fnScopeId = a._scopeId, i.fnContext = r), i
            } : this._c = function (e, t, n, r) {
                return Tn(c, e, t, n, r, u)
            }
        }

        function kn(e, t) {
            for (var n in t) e[O(n)] = t[n]
        }

        En(xn.prototype);
        var On = {
            init: function (e, t, n, r) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) (e.componentInstance = function (e, t, n, r) {
                    var o = {_isComponent: !0, parent: t, _parentVnode: e, _parentElm: n || null, _refElm: r || null},
                        i = e.data.inlineTemplate;
                    a(i) && (o.render = i.render, o.staticRenderFns = i.staticRenderFns);
                    return new e.componentOptions.Ctor(o)
                }(e, Rt, n, r)).$mount(t ? e.elm : void 0, t); else if (e.data.keepAlive) {
                    var o = e;
                    On.prepatch(o, o)
                }
            }, prepatch: function (t, n) {
                var r = n.componentOptions;
                !function (t, n, r, i, a) {
                    "production" !== e.env.NODE_ENV && (Ut = !0);
                    var s = !!(a || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== o);
                    if (t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i), t.$options._renderChildren = a, t.$attrs = i.data && i.data.attrs || o, t.$listeners = r || o, n && t.$options.props) {
                        Se.shouldConvert = !1;
                        for (var c = t._props, l = t.$options._propKeys || [], u = 0; u < l.length; u++) {
                            var f = l[u];
                            c[f] = We(f, t.$options.props, n, t)
                        }
                        Se.shouldConvert = !0, t.$options.propsData = n
                    }
                    if (r) {
                        var d = t.$options._parentListeners;
                        t.$options._parentListeners = r, Vt(t, r, d)
                    }
                    s && (t.$slots = Lt(a, i.context), t.$forceUpdate()), "production" !== e.env.NODE_ENV && (Ut = !1)
                }(n.componentInstance = t.componentInstance, r.propsData, r.listeners, n, r.children)
            }, insert: function (e) {
                var t, n = e.context, r = e.componentInstance;
                r._isMounted || (r._isMounted = !0, qt(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, Wt.push(t)) : Bt(r, !0))
            }, destroy: function (e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                    if (!(n && (t._directInactive = !0, zt(t)) || t._inactive)) {
                        t._inactive = !0;
                        for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                        qt(t, "deactivated")
                    }
                }(t, !0) : t.$destroy())
            }
        }, Nn = Object.keys(On);

        function Cn(t, n, r, c, u) {
            if (!i(t)) {
                var f = r.$options._base;
                if (l(t) && (t = f.extend(t)), "function" == typeof t) {
                    var d;
                    if (i(t.cid) && void 0 === (t = function (t, n, r) {
                        if (s(t.error) && a(t.errorComp)) return t.errorComp;
                        if (a(t.resolved)) return t.resolved;
                        if (s(t.loading) && a(t.loadingComp)) return t.loadingComp;
                        if (!a(t.contexts)) {
                            var o = t.contexts = [r], c = !0, u = function () {
                                for (var e = 0, t = o.length; e < t; e++) o[e].$forceUpdate()
                            }, f = L(function (e) {
                                t.resolved = jt(e, n), c || u()
                            }), d = L(function (n) {
                                "production" !== e.env.NODE_ENV && de("Failed to resolve async component: " + String(t) + (n ? "\nReason: " + n : "")), a(t.errorComp) && (t.error = !0, u())
                            }), p = t(f, d);
                            return l(p) && ("function" == typeof p.then ? i(t.resolved) && p.then(f, d) : a(p.component) && "function" == typeof p.component.then && (p.component.then(f, d), a(p.error) && (t.errorComp = jt(p.error, n)), a(p.loading) && (t.loadingComp = jt(p.loading, n), 0 === p.delay ? t.loading = !0 : setTimeout(function () {
                                i(t.resolved) && i(t.error) && (t.loading = !0, u())
                            }, p.delay || 200)), a(p.timeout) && setTimeout(function () {
                                i(t.resolved) && d("production" !== e.env.NODE_ENV ? "timeout (" + p.timeout + "ms)" : null)
                            }, p.timeout))), c = !1, t.loading ? t.loadingComp : t.resolved
                        }
                        t.contexts.push(r)
                    }(d = t, f, r))) return function (e, t, n, r, o) {
                        var i = xe();
                        return i.asyncFactory = e, i.asyncMeta = {data: t, context: n, children: r, tag: o}, i
                    }(d, n, r, c, u);
                    n = n || {}, Dn(t), a(n.model) && function (e, t) {
                        var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
                        (t.props || (t.props = {}))[n] = t.model.value;
                        var o = t.on || (t.on = {});
                        a(o[r]) ? o[r] = [t.model.callback].concat(o[r]) : o[r] = t.model.callback
                    }(t.options, n);
                    var p = function (t, n, r) {
                        var o = n.options.props;
                        if (!i(o)) {
                            var s = {}, c = t.attrs, l = t.props;
                            if (a(c) || a(l)) for (var u in o) {
                                var f = $(u);
                                if ("production" !== e.env.NODE_ENV) {
                                    var d = u.toLowerCase();
                                    u !== d && c && E(c, d) && pe('Prop "' + d + '" is passed to component ' + he(r || n) + ', but the declared prop name is "' + u + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + f + '" instead of "' + u + '".')
                                }
                                At(s, l, u, f, !0) || At(s, c, u, f, !1)
                            }
                            return s
                        }
                    }(n, t, u);
                    if (s(t.options.functional)) return function (e, t, n, r, i) {
                        var s = e.options, c = {}, l = s.props;
                        if (a(l)) for (var u in l) c[u] = We(u, l, t || o); else a(n.attrs) && kn(c, n.attrs), a(n.props) && kn(c, n.props);
                        var f = new xn(n, c, i, r, e), d = s.render.call(null, f._c, f);
                        return d instanceof we && (d.fnContext = r, d.fnOptions = s, n.slot && ((d.data || (d.data = {})).slot = n.slot)), d
                    }(t, p, n, r, c);
                    var v = n.on;
                    if (n.on = n.nativeOn, s(t.options.abstract)) {
                        var h = n.slot;
                        n = {}, h && (n.slot = h)
                    }
                    !function (e) {
                        e.hook || (e.hook = {});
                        for (var t = 0; t < Nn.length; t++) {
                            var n = Nn[t], r = e.hook[n], o = On[n];
                            e.hook[n] = r ? $n(o, r) : o
                        }
                    }(n);
                    var m = t.options.name || u;
                    return new we("vue-component-" + t.cid + (m ? "-" + m : ""), n, void 0, void 0, void 0, r, {
                        Ctor: t,
                        propsData: p,
                        listeners: v,
                        tag: u,
                        children: c
                    }, d)
                }
                "production" !== e.env.NODE_ENV && de("Invalid Component definition: " + String(t), r)
            }
        }

        function $n(e, t) {
            return function (n, r, o, i) {
                e(n, r, o, i), t(n, r, o, i)
            }
        }

        var An = 1, Sn = 2;

        function Tn(t, n, r, o, l, u) {
            return (Array.isArray(r) || c(r)) && (l = o, o = r, r = void 0), s(u) && (l = Sn), function (t, n, r, o, l) {
                if (a(r) && a(r.__ob__)) return "production" !== e.env.NODE_ENV && de("Avoid using observed data object as vnode data: " + JSON.stringify(r) + "\nAlways create fresh vnode data objects in each render!", t), xe();
                a(r) && a(r.is) && (n = r.is);
                if (!n) return xe();
                "production" !== e.env.NODE_ENV && a(r) && a(r.key) && !c(r.key) && de("Avoid using non-primitive value as key, use string/number value instead.", t);
                Array.isArray(o) && "function" == typeof o[0] && ((r = r || {}).scopedSlots = {default: o[0]}, o.length = 0);
                l === Sn ? o = St(o) : l === An && (o = function (e) {
                    for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                    return e
                }(o));
                var u, f;
                if ("string" == typeof n) {
                    var d;
                    f = t.$vnode && t.$vnode.ns || U.getTagNamespace(n), u = U.isReservedTag(n) ? new we(U.parsePlatformTagName(n), r, o, void 0, void 0, t) : a(d = Ke(t.$options, "components", n)) ? Cn(d, r, t, o, n) : new we(n, r, o, void 0, void 0, t)
                } else u = Cn(n, r, t, o);
                return a(u) ? (f && function e(t, n, r) {
                    t.ns = n;
                    "foreignObject" === t.tag && (n = void 0, r = !0);
                    if (a(t.children)) for (var o = 0, c = t.children.length; o < c; o++) {
                        var l = t.children[o];
                        a(l.tag) && (i(l.ns) || s(r)) && e(l, n, r)
                    }
                }(u, f), u) : xe()
            }(t, n, r, o, l)
        }

        var jn = 0;

        function Dn(e) {
            var t = e.options;
            if (e.super) {
                var n = Dn(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = function (e) {
                        var t, n = e.options, r = e.extendOptions, o = e.sealedOptions;
                        for (var i in n) n[i] !== o[i] && (t || (t = {}), t[i] = In(n[i], r[i], o[i]));
                        return t
                    }(e);
                    r && T(e.extendOptions, r), (t = e.options = Je(n, e.extendOptions)).name && (t.components[t.name] = e)
                }
            }
            return t
        }

        function In(e, t, n) {
            if (Array.isArray(e)) {
                var r = [];
                n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];
                for (var o = 0; o < e.length; o++) (t.indexOf(e[o]) >= 0 || n.indexOf(e[o]) < 0) && r.push(e[o]);
                return r
            }
            return e
        }

        function Mn(t) {
            "production" === e.env.NODE_ENV || this instanceof Mn || de("Vue is a constructor and should be called with the `new` keyword"), this._init(t)
        }

        function Pn(t) {
            t.cid = 0;
            var n = 1;
            t.extend = function (t) {
                t = t || {};
                var r = this, o = r.cid, i = t._Ctor || (t._Ctor = {});
                if (i[o]) return i[o];
                var a = t.name || r.options.name;
                "production" !== e.env.NODE_ENV && a && Be(a);
                var s = function (e) {
                    this._init(e)
                };
                return (s.prototype = Object.create(r.prototype)).constructor = s, s.cid = n++, s.options = Je(r.options, t), s.super = r, s.options.props && function (e) {
                    var t = e.options.props;
                    for (var n in t) on(e.prototype, "_props", n)
                }(s), s.options.computed && function (e) {
                    var t = e.options.computed;
                    for (var n in t) cn(e.prototype, n, t[n])
                }(s), s.extend = r.extend, s.mixin = r.mixin, s.use = r.use, F.forEach(function (e) {
                    s[e] = r[e]
                }), a && (s.options.components[a] = s), s.superOptions = r.options, s.extendOptions = t, s.sealedOptions = T({}, s.options), i[o] = s, s
            }
        }

        function Vn(e) {
            return e && (e.Ctor.options.name || e.tag)
        }

        function Ln(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!p(e) && e.test(t)
        }

        function Hn(e, t) {
            var n = e.cache, r = e.keys, o = e._vnode;
            for (var i in n) {
                var a = n[i];
                if (a) {
                    var s = Vn(a.componentOptions);
                    s && !t(s) && Fn(n, i, r, o)
                }
            }
        }

        function Fn(e, t, n, r) {
            var o = e[t];
            !o || r && o.tag === r.tag || o.componentInstance.$destroy(), e[t] = null, _(n, t)
        }

        Mn.prototype._init = function (t) {
            var n, r, i = this;
            i._uid = jn++, "production" !== e.env.NODE_ENV && U.performance && st && (n = "vue-perf-start:" + i._uid, r = "vue-perf-end:" + i._uid, st(n)), i._isVue = !0, t && t._isComponent ? function (e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r, n._parentElm = t._parentElm, n._refElm = t._refElm;
                var o = r.componentOptions;
                n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
            }(i, t) : i.$options = Je(Dn(i.constructor), t || {}, i), "production" !== e.env.NODE_ENV ? lt(i) : i._renderProxy = i, i._self = i, function (e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (; n.$options.abstract && n.$parent;) n = n.$parent;
                    n.$children.push(e)
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
            }(i), function (e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && Vt(e, t)
            }(i), function (t) {
                t._vnode = null, t._staticTrees = null;
                var n = t.$options, r = t.$vnode = n._parentVnode, i = r && r.context;
                t.$slots = Lt(n._renderChildren, i), t.$scopedSlots = o, t._c = function (e, n, r, o) {
                    return Tn(t, e, n, r, o, !1)
                }, t.$createElement = function (e, n, r, o) {
                    return Tn(t, e, n, r, o, !0)
                };
                var a = r && r.data;
                "production" !== e.env.NODE_ENV ? (Me(t, "$attrs", a && a.attrs || o, function () {
                    !Ut && de("$attrs is readonly.", t)
                }, !0), Me(t, "$listeners", n._parentListeners || o, function () {
                    !Ut && de("$listeners is readonly.", t)
                }, !0)) : (Me(t, "$attrs", a && a.attrs || o, null, !0), Me(t, "$listeners", n._parentListeners || o, null, !0))
            }(i), qt(i, "beforeCreate"), function (t) {
                var n = fn(t.$options.inject, t);
                n && (Se.shouldConvert = !1, Object.keys(n).forEach(function (r) {
                    "production" !== e.env.NODE_ENV ? Me(t, r, n[r], function () {
                        de('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + r + '"', t)
                    }) : Me(t, r, n[r])
                }), Se.shouldConvert = !0)
            }(i), an(i), function (e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t)
            }(i), qt(i, "created"), "production" !== e.env.NODE_ENV && U.performance && st && (i._name = he(i, !1), st(r), ct("vue " + i._name + " init", n, r)), i.$options.el && i.$mount(i.$options.el)
        }, function (t) {
            var n = {
                get: function () {
                    return this._data
                }
            }, r = {
                get: function () {
                    return this._props
                }
            };
            "production" !== e.env.NODE_ENV && (n.set = function (e) {
                de("Avoid replacing instance root $data. Use nested data properties instead.", this)
            }, r.set = function () {
                de("$props is readonly.", this)
            }), Object.defineProperty(t.prototype, "$data", n), Object.defineProperty(t.prototype, "$props", r), t.prototype.$set = Pe, t.prototype.$delete = Ve, t.prototype.$watch = function (e, t, n) {
                if (d(t)) return un(this, e, t, n);
                (n = n || {}).user = !0;
                var r = new nn(this, e, t, n);
                return n.immediate && t.call(this, r.value), function () {
                    r.teardown()
                }
            }
        }(Mn), function (t) {
            var n = /^hook:/;
            t.prototype.$on = function (e, t) {
                if (Array.isArray(e)) for (var r = 0, o = e.length; r < o; r++) this.$on(e[r], t); else (this._events[e] || (this._events[e] = [])).push(t), n.test(e) && (this._hasHookEvent = !0);
                return this
            }, t.prototype.$once = function (e, t) {
                var n = this;

                function r() {
                    n.$off(e, r), t.apply(n, arguments)
                }

                return r.fn = t, n.$on(e, r), n
            }, t.prototype.$off = function (e, t) {
                var n = this;
                if (!arguments.length) return n._events = Object.create(null), n;
                if (Array.isArray(e)) {
                    for (var r = 0, o = e.length; r < o; r++) this.$off(e[r], t);
                    return n
                }
                var i = n._events[e];
                if (!i) return n;
                if (!t) return n._events[e] = null, n;
                if (t) for (var a, s = i.length; s--;) if ((a = i[s]) === t || a.fn === t) {
                    i.splice(s, 1);
                    break
                }
                return n
            }, t.prototype.$emit = function (t) {
                var n = this;
                if ("production" !== e.env.NODE_ENV) {
                    var r = t.toLowerCase();
                    r !== t && n._events[r] && pe('Event "' + r + '" is emitted in component ' + he(n) + ' but the handler is registered for "' + t + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + $(t) + '" instead of "' + t + '".')
                }
                var o = n._events[t];
                if (o) {
                    o = o.length > 1 ? S(o) : o;
                    for (var i = S(arguments, 1), a = 0, s = o.length; a < s; a++) try {
                        o[a].apply(n, i)
                    } catch (e) {
                        Qe(e, n, 'event handler for "' + t + '"')
                    }
                }
                return n
            }
        }(Mn), function (e) {
            e.prototype._update = function (e, t) {
                var n = this;
                n._isMounted && qt(n, "beforeUpdate");
                var r = n.$el, o = n._vnode, i = Rt;
                Rt = n, n._vnode = e, o ? n.$el = n.__patch__(o, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), Rt = i, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, e.prototype.$forceUpdate = function () {
                this._watcher && this._watcher.update()
            }, e.prototype.$destroy = function () {
                var e = this;
                if (!e._isBeingDestroyed) {
                    qt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || _(t.$children, e), e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), qt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                }
            }
        }(Mn), function (t) {
            En(t.prototype), t.prototype.$nextTick = function (e) {
                return vt(e, this)
            }, t.prototype._render = function () {
                var t, n = this, r = n.$options, i = r.render, a = r._parentVnode;
                if (n._isMounted) for (var s in n.$slots) {
                    var c = n.$slots[s];
                    (c._rendered || c[0] && c[0].elm) && (n.$slots[s] = Ne(c, !0))
                }
                n.$scopedSlots = a && a.data.scopedSlots || o, n.$vnode = a;
                try {
                    t = i.call(n._renderProxy, n.$createElement)
                } catch (r) {
                    if (Qe(r, n, "render"), "production" !== e.env.NODE_ENV) if (n.$options.renderError) try {
                        t = n.$options.renderError.call(n._renderProxy, n.$createElement, r)
                    } catch (e) {
                        Qe(e, n, "renderError"), t = n._vnode
                    } else t = n._vnode; else t = n._vnode
                }
                return t instanceof we || ("production" !== e.env.NODE_ENV && Array.isArray(t) && de("Multiple root nodes returned from render function. Render function should return a single root node.", n), t = xe()), t.parent = a, t
            }
        }(Mn);
        var Rn = [String, RegExp, Array], Un = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {include: Rn, exclude: Rn, max: [String, Number]},
                created: function () {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function () {
                    for (var e in this.cache) Fn(this.cache, e, this.keys)
                },
                watch: {
                    include: function (e) {
                        Hn(this, function (t) {
                            return Ln(e, t)
                        })
                    }, exclude: function (e) {
                        Hn(this, function (t) {
                            return !Ln(e, t)
                        })
                    }
                },
                render: function () {
                    var e = this.$slots.default, t = It(e), n = t && t.componentOptions;
                    if (n) {
                        var r = Vn(n), o = this.include, i = this.exclude;
                        if (o && (!r || !Ln(o, r)) || i && r && Ln(i, r)) return t;
                        var a = this.cache, s = this.keys,
                            c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        a[c] ? (t.componentInstance = a[c].componentInstance, _(s, c), s.push(c)) : (a[c] = t, s.push(c), this.max && s.length > parseInt(this.max) && Fn(a, s[0], s, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }
        };
        !function (t) {
            var n = {
                get: function () {
                    return U
                }
            };
            "production" !== e.env.NODE_ENV && (n.set = function () {
                de("Do not replace the Vue.config object, set individual fields instead.")
            }), Object.defineProperty(t, "config", n), t.util = {
                warn: de,
                extend: T,
                mergeOptions: Je,
                defineReactive: Me
            }, t.set = Pe, t.delete = Ve, t.nextTick = vt, t.options = Object.create(null), F.forEach(function (e) {
                t.options[e + "s"] = Object.create(null)
            }), t.options._base = t, T(t.options.components, Un), function (e) {
                e.use = function (e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = S(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
                }
            }(t), function (e) {
                e.mixin = function (e) {
                    return this.options = Je(this.options, e), this
                }
            }(t), Pn(t), function (t) {
                F.forEach(function (n) {
                    t[n] = function (t, r) {
                        return r ? ("production" !== e.env.NODE_ENV && "component" === n && Be(t), "component" === n && d(r) && (r.name = r.name || t, r = this.options._base.extend(r)), "directive" === n && "function" == typeof r && (r = {
                            bind: r,
                            update: r
                        }), this.options[n + "s"][t] = r, r) : this.options[n + "s"][t]
                    }
                })
            }(t)
        }(Mn), Object.defineProperty(Mn.prototype, "$isServer", {get: se}), Object.defineProperty(Mn.prototype, "$ssrContext", {
            get: function () {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Mn.version = "2.5.13";
        var zn = g("style,class"), Bn = g("input,textarea,option,select,progress"), qn = function (e, t, n) {
                return "value" === n && Bn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
            }, Jn = g("contenteditable,draggable,spellcheck"),
            Kn = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Wn = "http://www.w3.org/1999/xlink", Zn = function (e) {
                return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
            }, Gn = function (e) {
                return Zn(e) ? e.slice(6, e.length) : ""
            }, Xn = function (e) {
                return null == e || !1 === e
            };

        function Yn(e) {
            for (var t = e.data, n = e, r = e; a(r.componentInstance);) (r = r.componentInstance._vnode) && r.data && (t = Qn(r.data, t));
            for (; a(n = n.parent);) n && n.data && (t = Qn(t, n.data));
            return function (e, t) {
                if (a(e) || a(t)) return er(e, tr(t));
                return ""
            }(t.staticClass, t.class)
        }

        function Qn(e, t) {
            return {staticClass: er(e.staticClass, t.staticClass), class: a(e.class) ? [e.class, t.class] : t.class}
        }

        function er(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }

        function tr(e) {
            return Array.isArray(e) ? function (e) {
                for (var t, n = "", r = 0, o = e.length; r < o; r++) a(t = tr(e[r])) && "" !== t && (n && (n += " "), n += t);
                return n
            }(e) : l(e) ? function (e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t
            }(e) : "string" == typeof e ? e : ""
        }

        var nr = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
            rr = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            or = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            ir = function (e) {
                return rr(e) || or(e)
            };

        function ar(e) {
            return or(e) ? "svg" : "math" === e ? "math" : void 0
        }

        var sr = Object.create(null);
        var cr = g("text,number,password,search,email,tel,url");

        function lr(t) {
            if ("string" == typeof t) {
                var n = document.querySelector(t);
                return n || ("production" !== e.env.NODE_ENV && de("Cannot find element: " + t), document.createElement("div"))
            }
            return t
        }

        var ur = Object.freeze({
            createElement: function (e, t) {
                var n = document.createElement(e);
                return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
            }, createElementNS: function (e, t) {
                return document.createElementNS(nr[e], t)
            }, createTextNode: function (e) {
                return document.createTextNode(e)
            }, createComment: function (e) {
                return document.createComment(e)
            }, insertBefore: function (e, t, n) {
                e.insertBefore(t, n)
            }, removeChild: function (e, t) {
                e.removeChild(t)
            }, appendChild: function (e, t) {
                e.appendChild(t)
            }, parentNode: function (e) {
                return e.parentNode
            }, nextSibling: function (e) {
                return e.nextSibling
            }, tagName: function (e) {
                return e.tagName
            }, setTextContent: function (e, t) {
                e.textContent = t
            }, setAttribute: function (e, t, n) {
                e.setAttribute(t, n)
            }
        }), fr = {
            create: function (e, t) {
                dr(t)
            }, update: function (e, t) {
                e.data.ref !== t.data.ref && (dr(e, !0), dr(t))
            }, destroy: function (e) {
                dr(e, !0)
            }
        };

        function dr(e, t) {
            var n = e.data.ref;
            if (n) {
                var r = e.context, o = e.componentInstance || e.elm, i = r.$refs;
                t ? Array.isArray(i[n]) ? _(i[n], o) : i[n] === o && (i[n] = void 0) : e.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(o) < 0 && i[n].push(o) : i[n] = [o] : i[n] = o
            }
        }

        var pr = new we("", {}, []), vr = ["create", "activate", "update", "remove", "destroy"];

        function hr(e, t) {
            return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && a(e.data) === a(t.data) && function (e, t) {
                if ("input" !== e.tag) return !0;
                var n, r = a(n = e.data) && a(n = n.attrs) && n.type, o = a(n = t.data) && a(n = n.attrs) && n.type;
                return r === o || cr(r) && cr(o)
            }(e, t) || s(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && i(t.asyncFactory.error))
        }

        function mr(e, t, n) {
            var r, o, i = {};
            for (r = t; r <= n; ++r) a(o = e[r].key) && (i[o] = r);
            return i
        }

        var gr = {
            create: yr, update: yr, destroy: function (e) {
                yr(e, pr)
            }
        };

        function yr(e, t) {
            (e.data.directives || t.data.directives) && function (e, t) {
                var n, r, o, i = e === pr, a = t === pr, s = _r(e.data.directives, e.context),
                    c = _r(t.data.directives, t.context), l = [], u = [];
                for (n in c) r = s[n], o = c[n], r ? (o.oldValue = r.value, Er(o, "update", t, e), o.def && o.def.componentUpdated && u.push(o)) : (Er(o, "bind", t, e), o.def && o.def.inserted && l.push(o));
                if (l.length) {
                    var f = function () {
                        for (var n = 0; n < l.length; n++) Er(l[n], "inserted", t, e)
                    };
                    i ? $t(t, "insert", f) : f()
                }
                u.length && $t(t, "postpatch", function () {
                    for (var n = 0; n < u.length; n++) Er(u[n], "componentUpdated", t, e)
                });
                if (!i) for (n in s) c[n] || Er(s[n], "unbind", e, e, a)
            }(e, t)
        }

        var br = Object.create(null);

        function _r(e, t) {
            var n, r, o = Object.create(null);
            if (!e) return o;
            for (n = 0; n < e.length; n++) (r = e[n]).modifiers || (r.modifiers = br), o[wr(r)] = r, r.def = Ke(t.$options, "directives", r.name, !0);
            return o
        }

        function wr(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }

        function Er(e, t, n, r, o) {
            var i = e.def && e.def[t];
            if (i) try {
                i(n.elm, e, n, r, o)
            } catch (r) {
                Qe(r, n.context, "directive " + e.name + " " + t + " hook")
            }
        }

        var xr = [fr, gr];

        function kr(e, t) {
            var n = t.componentOptions;
            if (!(a(n) && !1 === n.Ctor.options.inheritAttrs || i(e.data.attrs) && i(t.data.attrs))) {
                var r, o, s = t.elm, c = e.data.attrs || {}, l = t.data.attrs || {};
                for (r in a(l.__ob__) && (l = t.data.attrs = T({}, l)), l) o = l[r], c[r] !== o && Or(s, r, o);
                for (r in(Y || ee) && l.value !== c.value && Or(s, "value", l.value), c) i(l[r]) && (Zn(r) ? s.removeAttributeNS(Wn, Gn(r)) : Jn(r) || s.removeAttribute(r))
            }
        }

        function Or(e, t, n) {
            if (Kn(t)) Xn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)); else if (Jn(t)) e.setAttribute(t, Xn(n) || "false" === n ? "false" : "true"); else if (Zn(t)) Xn(n) ? e.removeAttributeNS(Wn, Gn(t)) : e.setAttributeNS(Wn, t, n); else if (Xn(n)) e.removeAttribute(t); else {
                if (Y && !Q && "TEXTAREA" === e.tagName && "placeholder" === t && !e.__ieph) {
                    var r = function (t) {
                        t.stopImmediatePropagation(), e.removeEventListener("input", r)
                    };
                    e.addEventListener("input", r), e.__ieph = !0
                }
                e.setAttribute(t, n)
            }
        }

        var Nr = {create: kr, update: kr};

        function Cr(e, t) {
            var n = t.elm, r = t.data, o = e.data;
            if (!(i(r.staticClass) && i(r.class) && (i(o) || i(o.staticClass) && i(o.class)))) {
                var s = Yn(t), c = n._transitionClasses;
                a(c) && (s = er(s, tr(c))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
            }
        }

        var $r, Ar, Sr, Tr, jr, Dr, Ir, Mr = {create: Cr, update: Cr}, Pr = /[\w).+\-_$\]]/;

        function Vr(e) {
            var t, n, r, o, i, a = !1, s = !1, c = !1, l = !1, u = 0, f = 0, d = 0, p = 0;
            for (r = 0; r < e.length; r++) if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1); else if (s) 34 === t && 92 !== n && (s = !1); else if (c) 96 === t && 92 !== n && (c = !1); else if (l) 47 === t && 92 !== n && (l = !1); else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || f || d) {
                switch (t) {
                    case 34:
                        s = !0;
                        break;
                    case 39:
                        a = !0;
                        break;
                    case 96:
                        c = !0;
                        break;
                    case 40:
                        d++;
                        break;
                    case 41:
                        d--;
                        break;
                    case 91:
                        f++;
                        break;
                    case 93:
                        f--;
                        break;
                    case 123:
                        u++;
                        break;
                    case 125:
                        u--
                }
                if (47 === t) {
                    for (var v = r - 1, h = void 0; v >= 0 && " " === (h = e.charAt(v)); v--) ;
                    h && Pr.test(h) || (l = !0)
                }
            } else void 0 === o ? (p = r + 1, o = e.slice(0, r).trim()) : m();

            function m() {
                (i || (i = [])).push(e.slice(p, r).trim()), p = r + 1
            }

            if (void 0 === o ? o = e.slice(0, r).trim() : 0 !== p && m(), i) for (r = 0; r < i.length; r++) o = Lr(o, i[r]);
            return o
        }

        function Lr(e, t) {
            var n = t.indexOf("(");
            return n < 0 ? '_f("' + t + '")(' + e + ")" : '_f("' + t.slice(0, n) + '")(' + e + "," + t.slice(n + 1)
        }

        function Hr(e) {
            console.error("[Vue compiler]: " + e)
        }

        function Fr(e, t) {
            return e ? e.map(function (e) {
                return e[t]
            }).filter(function (e) {
                return e
            }) : []
        }

        function Rr(e, t, n) {
            (e.props || (e.props = [])).push({name: t, value: n}), e.plain = !1
        }

        function Ur(e, t, n) {
            (e.attrs || (e.attrs = [])).push({name: t, value: n}), e.plain = !1
        }

        function zr(e, t, n) {
            e.attrsMap[t] = n, e.attrsList.push({name: t, value: n})
        }

        function Br(e, t, n, r, o, i) {
            (e.directives || (e.directives = [])).push({
                name: t,
                rawName: n,
                value: r,
                arg: o,
                modifiers: i
            }), e.plain = !1
        }

        function qr(t, n, r, i, a, s) {
            var c;
            i = i || o, "production" !== e.env.NODE_ENV && s && i.prevent && i.passive && s("passive and prevent can't be used together. Passive handler can't prevent default event."), i.capture && (delete i.capture, n = "!" + n), i.once && (delete i.once, n = "~" + n), i.passive && (delete i.passive, n = "&" + n), "click" === n && (i.right ? (n = "contextmenu", delete i.right) : i.middle && (n = "mouseup")), i.native ? (delete i.native, c = t.nativeEvents || (t.nativeEvents = {})) : c = t.events || (t.events = {});
            var l = {value: r};
            i !== o && (l.modifiers = i);
            var u = c[n];
            Array.isArray(u) ? a ? u.unshift(l) : u.push(l) : c[n] = u ? a ? [l, u] : [u, l] : l, t.plain = !1
        }

        function Jr(e, t, n) {
            var r = Kr(e, ":" + t) || Kr(e, "v-bind:" + t);
            if (null != r) return Vr(r);
            if (!1 !== n) {
                var o = Kr(e, t);
                if (null != o) return JSON.stringify(o)
            }
        }

        function Kr(e, t, n) {
            var r;
            if (null != (r = e.attrsMap[t])) for (var o = e.attrsList, i = 0, a = o.length; i < a; i++) if (o[i].name === t) {
                o.splice(i, 1);
                break
            }
            return n && delete e.attrsMap[t], r
        }

        function Wr(e, t, n) {
            var r = n || {}, o = r.number, i = "$$v";
            r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (i = "_n(" + i + ")");
            var a = Zr(t, i);
            e.model = {value: "(" + t + ")", expression: '"' + t + '"', callback: "function ($$v) {" + a + "}"}
        }

        function Zr(e, t) {
            var n = function (e) {
                if ($r = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < $r - 1) return (Tr = e.lastIndexOf(".")) > -1 ? {
                    exp: e.slice(0, Tr),
                    key: '"' + e.slice(Tr + 1) + '"'
                } : {exp: e, key: null};
                Ar = e, Tr = jr = Dr = 0;
                for (; !Xr();) Yr(Sr = Gr()) ? eo(Sr) : 91 === Sr && Qr(Sr);
                return {exp: e.slice(0, jr), key: e.slice(jr + 1, Dr)}
            }(e);
            return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
        }

        function Gr() {
            return Ar.charCodeAt(++Tr)
        }

        function Xr() {
            return Tr >= $r
        }

        function Yr(e) {
            return 34 === e || 39 === e
        }

        function Qr(e) {
            var t = 1;
            for (jr = Tr; !Xr();) if (Yr(e = Gr())) eo(e); else if (91 === e && t++, 93 === e && t--, 0 === t) {
                Dr = Tr;
                break
            }
        }

        function eo(e) {
            for (var t = e; !Xr() && (e = Gr()) !== t;) ;
        }

        var to, no = "__r", ro = "__c";

        function oo(e, t, n, r, o) {
            var i;
            t = (i = t)._withTask || (i._withTask = function () {
                ut = !0;
                var e = i.apply(null, arguments);
                return ut = !1, e
            }), n && (t = function (e, t, n) {
                var r = to;
                return function o() {
                    null !== e.apply(null, arguments) && io(t, o, n, r)
                }
            }(t, e, r)), to.addEventListener(e, t, ie ? {capture: r, passive: o} : r)
        }

        function io(e, t, n, r) {
            (r || to).removeEventListener(e, t._withTask || t, n)
        }

        function ao(e, t) {
            if (!i(e.data.on) || !i(t.data.on)) {
                var n = t.data.on || {}, r = e.data.on || {};
                to = t.elm, function (e) {
                    if (a(e[no])) {
                        var t = Y ? "change" : "input";
                        e[t] = [].concat(e[no], e[t] || []), delete e[no]
                    }
                    a(e[ro]) && (e.change = [].concat(e[ro], e.change || []), delete e[ro])
                }(n), Ct(n, r, oo, io, t.context), to = void 0
            }
        }

        var so = {create: ao, update: ao};

        function co(e, t) {
            if (!i(e.data.domProps) || !i(t.data.domProps)) {
                var n, r, o = t.elm, s = e.data.domProps || {}, c = t.data.domProps || {};
                for (n in a(c.__ob__) && (c = t.data.domProps = T({}, c)), s) i(c[n]) && (o[n] = "");
                for (n in c) {
                    if (r = c[n], "textContent" === n || "innerHTML" === n) {
                        if (t.children && (t.children.length = 0), r === s[n]) continue;
                        1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                    }
                    if ("value" === n) {
                        o._value = r;
                        var l = i(r) ? "" : String(r);
                        lo(o, l) && (o.value = l)
                    } else o[n] = r
                }
            }
        }

        function lo(e, t) {
            return !e.composing && ("OPTION" === e.tagName || function (e, t) {
                var n = !0;
                try {
                    n = document.activeElement !== e
                } catch (e) {
                }
                return n && e.value !== t
            }(e, t) || function (e, t) {
                var n = e.value, r = e._vModifiers;
                if (a(r)) {
                    if (r.lazy) return !1;
                    if (r.number) return m(n) !== m(t);
                    if (r.trim) return n.trim() !== t.trim()
                }
                return n !== t
            }(e, t))
        }

        var uo = {create: co, update: co}, fo = x(function (e) {
            var t = {}, n = /:(.+)/;
            return e.split(/;(?![^(]*\))/g).forEach(function (e) {
                if (e) {
                    var r = e.split(n);
                    r.length > 1 && (t[r[0].trim()] = r[1].trim())
                }
            }), t
        });

        function po(e) {
            var t = vo(e.style);
            return e.staticStyle ? T(e.staticStyle, t) : t
        }

        function vo(e) {
            return Array.isArray(e) ? j(e) : "string" == typeof e ? fo(e) : e
        }

        var ho, mo = /^--/, go = /\s*!important$/, yo = function (e, t, n) {
            if (mo.test(t)) e.style.setProperty(t, n); else if (go.test(n)) e.style.setProperty(t, n.replace(go, ""), "important"); else {
                var r = _o(t);
                if (Array.isArray(n)) for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o]; else e.style[r] = n
            }
        }, bo = ["Webkit", "Moz", "ms"], _o = x(function (e) {
            if (ho = ho || document.createElement("div").style, "filter" !== (e = O(e)) && e in ho) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < bo.length; n++) {
                var r = bo[n] + t;
                if (r in ho) return r
            }
        });

        function wo(e, t) {
            var n = t.data, r = e.data;
            if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
                var o, s, c = t.elm, l = r.staticStyle, u = r.normalizedStyle || r.style || {}, f = l || u,
                    d = vo(t.data.style) || {};
                t.data.normalizedStyle = a(d.__ob__) ? T({}, d) : d;
                var p = function (e, t) {
                    var n, r = {};
                    if (t) for (var o = e; o.componentInstance;) (o = o.componentInstance._vnode) && o.data && (n = po(o.data)) && T(r, n);
                    (n = po(e.data)) && T(r, n);
                    for (var i = e; i = i.parent;) i.data && (n = po(i.data)) && T(r, n);
                    return r
                }(t, !0);
                for (s in f) i(p[s]) && yo(c, s, "");
                for (s in p) (o = p[s]) !== f[s] && yo(c, s, null == o ? "" : o)
            }
        }

        var Eo = {create: wo, update: wo};

        function xo(e, t) {
            if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
                return e.classList.add(t)
            }) : e.classList.add(t); else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
        }

        function ko(e, t) {
            if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
                return e.classList.remove(t)
            }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
            }
        }

        function Oo(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && T(t, No(e.name || "v")), T(t, e), t
                }
                return "string" == typeof e ? No(e) : void 0
            }
        }

        var No = x(function (e) {
                return {
                    enterClass: e + "-enter",
                    enterToClass: e + "-enter-to",
                    enterActiveClass: e + "-enter-active",
                    leaveClass: e + "-leave",
                    leaveToClass: e + "-leave-to",
                    leaveActiveClass: e + "-leave-active"
                }
            }), Co = W && !Q, $o = "transition", Ao = "animation", So = "transition", To = "transitionend",
            jo = "animation", Do = "animationend";
        Co && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (So = "WebkitTransition", To = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (jo = "WebkitAnimation", Do = "webkitAnimationEnd"));
        var Io = W ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
            return e()
        };

        function Mo(e) {
            Io(function () {
                Io(e)
            })
        }

        function Po(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t), xo(e, t))
        }

        function Vo(e, t) {
            e._transitionClasses && _(e._transitionClasses, t), ko(e, t)
        }

        function Lo(e, t, n) {
            var r = Fo(e, t), o = r.type, i = r.timeout, a = r.propCount;
            if (!o) return n();
            var s = o === $o ? To : Do, c = 0, l = function () {
                e.removeEventListener(s, u), n()
            }, u = function (t) {
                t.target === e && ++c >= a && l()
            };
            setTimeout(function () {
                c < a && l()
            }, i + 1), e.addEventListener(s, u)
        }

        var Ho = /\b(transform|all)(,|$)/;

        function Fo(e, t) {
            var n, r = window.getComputedStyle(e), o = r[So + "Delay"].split(", "), i = r[So + "Duration"].split(", "),
                a = Ro(o, i), s = r[jo + "Delay"].split(", "), c = r[jo + "Duration"].split(", "), l = Ro(s, c), u = 0,
                f = 0;
            return t === $o ? a > 0 && (n = $o, u = a, f = i.length) : t === Ao ? l > 0 && (n = Ao, u = l, f = c.length) : f = (n = (u = Math.max(a, l)) > 0 ? a > l ? $o : Ao : null) ? n === $o ? i.length : c.length : 0, {
                type: n,
                timeout: u,
                propCount: f,
                hasTransform: n === $o && Ho.test(r[So + "Property"])
            }
        }

        function Ro(e, t) {
            for (; e.length < t.length;) e = e.concat(e);
            return Math.max.apply(null, t.map(function (t, n) {
                return Uo(t) + Uo(e[n])
            }))
        }

        function Uo(e) {
            return 1e3 * Number(e.slice(0, -1))
        }

        function zo(t, n) {
            var r = t.elm;
            a(r._leaveCb) && (r._leaveCb.cancelled = !0, r._leaveCb());
            var o = Oo(t.data.transition);
            if (!i(o) && !a(r._enterCb) && 1 === r.nodeType) {
                for (var s = o.css, c = o.type, u = o.enterClass, f = o.enterToClass, d = o.enterActiveClass, p = o.appearClass, v = o.appearToClass, h = o.appearActiveClass, g = o.beforeEnter, y = o.enter, b = o.afterEnter, _ = o.enterCancelled, w = o.beforeAppear, E = o.appear, x = o.afterAppear, k = o.appearCancelled, O = o.duration, N = Rt, C = Rt.$vnode; C && C.parent;) N = (C = C.parent).context;
                var $ = !N._isMounted || !t.isRootInsert;
                if (!$ || E || "" === E) {
                    var A = $ && p ? p : u, S = $ && h ? h : d, T = $ && v ? v : f, j = $ && w || g,
                        D = $ && "function" == typeof E ? E : y, I = $ && x || b, M = $ && k || _,
                        P = m(l(O) ? O.enter : O);
                    "production" !== e.env.NODE_ENV && null != P && qo(P, "enter", t);
                    var V = !1 !== s && !Q, H = Ko(D), F = r._enterCb = L(function () {
                        V && (Vo(r, T), Vo(r, S)), F.cancelled ? (V && Vo(r, A), M && M(r)) : I && I(r), r._enterCb = null
                    });
                    t.data.show || $t(t, "insert", function () {
                        var e = r.parentNode, n = e && e._pending && e._pending[t.key];
                        n && n.tag === t.tag && n.elm._leaveCb && n.elm._leaveCb(), D && D(r, F)
                    }), j && j(r), V && (Po(r, A), Po(r, S), Mo(function () {
                        Po(r, T), Vo(r, A), F.cancelled || H || (Jo(P) ? setTimeout(F, P) : Lo(r, c, F))
                    })), t.data.show && (n && n(), D && D(r, F)), V || H || F()
                }
            }
        }

        function Bo(t, n) {
            var r = t.elm;
            a(r._enterCb) && (r._enterCb.cancelled = !0, r._enterCb());
            var o = Oo(t.data.transition);
            if (i(o) || 1 !== r.nodeType) return n();
            if (!a(r._leaveCb)) {
                var s = o.css, c = o.type, u = o.leaveClass, f = o.leaveToClass, d = o.leaveActiveClass,
                    p = o.beforeLeave, v = o.leave, h = o.afterLeave, g = o.leaveCancelled, y = o.delayLeave,
                    b = o.duration, _ = !1 !== s && !Q, w = Ko(v), E = m(l(b) ? b.leave : b);
                "production" !== e.env.NODE_ENV && a(E) && qo(E, "leave", t);
                var x = r._leaveCb = L(function () {
                    r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), _ && (Vo(r, f), Vo(r, d)), x.cancelled ? (_ && Vo(r, u), g && g(r)) : (n(), h && h(r)), r._leaveCb = null
                });
                y ? y(k) : k()
            }

            function k() {
                x.cancelled || (t.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), p && p(r), _ && (Po(r, u), Po(r, d), Mo(function () {
                    Po(r, f), Vo(r, u), x.cancelled || w || (Jo(E) ? setTimeout(x, E) : Lo(r, c, x))
                })), v && v(r, x), _ || w || x())
            }
        }

        function qo(e, t, n) {
            "number" != typeof e ? de("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && de("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context)
        }

        function Jo(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function Ko(e) {
            if (i(e)) return !1;
            var t = e.fns;
            return a(t) ? Ko(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
        }

        function Wo(e, t) {
            !0 !== t.data.show && zo(t)
        }

        var Zo = function (t) {
            var n, r, o = {}, l = t.modules, u = t.nodeOps;
            for (n = 0; n < vr.length; ++n) for (o[vr[n]] = [], r = 0; r < l.length; ++r) a(l[r][vr[n]]) && o[vr[n]].push(l[r][vr[n]]);

            function f(e) {
                var t = u.parentNode(e);
                a(t) && u.removeChild(t, e)
            }

            function d(e, t) {
                return !t && !e.ns && !(U.ignoredElements.length && U.ignoredElements.some(function (t) {
                    return p(t) ? t.test(e.tag) : t === e.tag
                })) && U.isUnknownElement(e.tag)
            }

            var v = 0;

            function h(t, n, r, i, c) {
                if (t.isRootInsert = !c, !function (e, t, n, r) {
                    var i = e.data;
                    if (a(i)) {
                        var c = a(e.componentInstance) && i.keepAlive;
                        if (a(i = i.hook) && a(i = i.init) && i(e, !1, n, r), a(e.componentInstance)) return m(e, t), s(c) && function (e, t, n, r) {
                            for (var i, s = e; s.componentInstance;) if (s = s.componentInstance._vnode, a(i = s.data) && a(i = i.transition)) {
                                for (i = 0; i < o.activate.length; ++i) o.activate[i](pr, s);
                                t.push(s);
                                break
                            }
                            y(n, e.elm, r)
                        }(e, t, n, r), !0
                    }
                }(t, n, r, i)) {
                    var l = t.data, f = t.children, p = t.tag;
                    a(p) ? ("production" !== e.env.NODE_ENV && (l && l.pre && v++, d(t, v) && de("Unknown custom element: <" + p + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', t.context)), t.elm = t.ns ? u.createElementNS(t.ns, p) : u.createElement(p, t), E(t), b(t, f, n), a(l) && w(t, n), y(r, t.elm, i), "production" !== e.env.NODE_ENV && l && l.pre && v--) : s(t.isComment) ? (t.elm = u.createComment(t.text), y(r, t.elm, i)) : (t.elm = u.createTextNode(t.text), y(r, t.elm, i))
                }
            }

            function m(e, t) {
                a(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, _(e) ? (w(e, t), E(e)) : (dr(e), t.push(e))
            }

            function y(e, t, n) {
                a(e) && (a(n) ? n.parentNode === e && u.insertBefore(e, t, n) : u.appendChild(e, t))
            }

            function b(t, n, r) {
                if (Array.isArray(n)) {
                    "production" !== e.env.NODE_ENV && C(n);
                    for (var o = 0; o < n.length; ++o) h(n[o], r, t.elm, null, !0)
                } else c(t.text) && u.appendChild(t.elm, u.createTextNode(String(t.text)))
            }

            function _(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return a(e.tag)
            }

            function w(e, t) {
                for (var r = 0; r < o.create.length; ++r) o.create[r](pr, e);
                a(n = e.data.hook) && (a(n.create) && n.create(pr, e), a(n.insert) && t.push(e))
            }

            function E(e) {
                var t;
                if (a(t = e.fnScopeId)) u.setAttribute(e.elm, t, ""); else for (var n = e; n;) a(t = n.context) && a(t = t.$options._scopeId) && u.setAttribute(e.elm, t, ""), n = n.parent;
                a(t = Rt) && t !== e.context && t !== e.fnContext && a(t = t.$options._scopeId) && u.setAttribute(e.elm, t, "")
            }

            function x(e, t, n, r, o, i) {
                for (; r <= o; ++r) h(n[r], i, e, t)
            }

            function k(e) {
                var t, n, r = e.data;
                if (a(r)) for (a(t = r.hook) && a(t = t.destroy) && t(e), t = 0; t < o.destroy.length; ++t) o.destroy[t](e);
                if (a(t = e.children)) for (n = 0; n < e.children.length; ++n) k(e.children[n])
            }

            function O(e, t, n, r) {
                for (; n <= r; ++n) {
                    var o = t[n];
                    a(o) && (a(o.tag) ? (N(o), k(o)) : f(o.elm))
                }
            }

            function N(e, t) {
                if (a(t) || a(e.data)) {
                    var n, r = o.remove.length + 1;
                    for (a(t) ? t.listeners += r : t = function (e, t) {
                        function n() {
                            0 == --n.listeners && f(e)
                        }

                        return n.listeners = t, n
                    }(e.elm, r), a(n = e.componentInstance) && a(n = n._vnode) && a(n.data) && N(n, t), n = 0; n < o.remove.length; ++n) o.remove[n](e, t);
                    a(n = e.data.hook) && a(n = n.remove) ? n(e, t) : t()
                } else f(e.elm)
            }

            function C(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var r = e[n], o = r.key;
                    a(o) && (t[o] ? de("Duplicate keys detected: '" + o + "'. This may cause an update error.", r.context) : t[o] = !0)
                }
            }

            function $(e, t, n, r) {
                for (var o = n; o < r; o++) {
                    var i = t[o];
                    if (a(i) && hr(e, i)) return o
                }
            }

            function A(t, n, r, c) {
                if (t !== n) {
                    var l = n.elm = t.elm;
                    if (s(t.isAsyncPlaceholder)) a(n.asyncFactory.resolved) ? D(t.elm, n, r) : n.isAsyncPlaceholder = !0; else if (s(n.isStatic) && s(t.isStatic) && n.key === t.key && (s(n.isCloned) || s(n.isOnce))) n.componentInstance = t.componentInstance; else {
                        var f, d = n.data;
                        a(d) && a(f = d.hook) && a(f = f.prepatch) && f(t, n);
                        var p = t.children, v = n.children;
                        if (a(d) && _(n)) {
                            for (f = 0; f < o.update.length; ++f) o.update[f](t, n);
                            a(f = d.hook) && a(f = f.update) && f(t, n)
                        }
                        i(n.text) ? a(p) && a(v) ? p !== v && function (t, n, r, o, s) {
                            var c, l, f, d = 0, p = 0, v = n.length - 1, m = n[0], g = n[v], y = r.length - 1, b = r[0],
                                _ = r[y], w = !s;
                            for ("production" !== e.env.NODE_ENV && C(r); d <= v && p <= y;) i(m) ? m = n[++d] : i(g) ? g = n[--v] : hr(m, b) ? (A(m, b, o), m = n[++d], b = r[++p]) : hr(g, _) ? (A(g, _, o), g = n[--v], _ = r[--y]) : hr(m, _) ? (A(m, _, o), w && u.insertBefore(t, m.elm, u.nextSibling(g.elm)), m = n[++d], _ = r[--y]) : hr(g, b) ? (A(g, b, o), w && u.insertBefore(t, g.elm, m.elm), g = n[--v], b = r[++p]) : (i(c) && (c = mr(n, d, v)), i(l = a(b.key) ? c[b.key] : $(b, n, d, v)) ? h(b, o, t, m.elm) : hr(f = n[l], b) ? (A(f, b, o), n[l] = void 0, w && u.insertBefore(t, f.elm, m.elm)) : h(b, o, t, m.elm), b = r[++p]);
                            d > v ? x(t, i(r[y + 1]) ? null : r[y + 1].elm, r, p, y, o) : p > y && O(0, n, d, v)
                        }(l, p, v, r, c) : a(v) ? (a(t.text) && u.setTextContent(l, ""), x(l, null, v, 0, v.length - 1, r)) : a(p) ? O(0, p, 0, p.length - 1) : a(t.text) && u.setTextContent(l, "") : t.text !== n.text && u.setTextContent(l, n.text), a(d) && a(f = d.hook) && a(f = f.postpatch) && f(t, n)
                    }
                }
            }

            function S(e, t, n) {
                if (s(n) && a(e.parent)) e.parent.data.pendingInsert = t; else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
            }

            var T = !1, j = g("attrs,class,staticClass,staticStyle,key");

            function D(t, n, r, o) {
                var i, c = n.tag, l = n.data, u = n.children;
                if (o = o || l && l.pre, n.elm = t, s(n.isComment) && a(n.asyncFactory)) return n.isAsyncPlaceholder = !0, !0;
                if ("production" !== e.env.NODE_ENV && !function (e, t, n) {
                    return a(t.tag) ? 0 === t.tag.indexOf("vue-component") || !d(t, n) && t.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()) : e.nodeType === (t.isComment ? 8 : 3)
                }(t, n, o)) return !1;
                if (a(l) && (a(i = l.hook) && a(i = i.init) && i(n, !0), a(i = n.componentInstance))) return m(n, r), !0;
                if (a(c)) {
                    if (a(u)) if (t.hasChildNodes()) if (a(i = l) && a(i = i.domProps) && a(i = i.innerHTML)) {
                        if (i !== t.innerHTML) return "production" === e.env.NODE_ENV || "undefined" == typeof console || T || (T = !0, console.warn("Parent: ", t), console.warn("server innerHTML: ", i), console.warn("client innerHTML: ", t.innerHTML)), !1
                    } else {
                        for (var f = !0, p = t.firstChild, v = 0; v < u.length; v++) {
                            if (!p || !D(p, u[v], r, o)) {
                                f = !1;
                                break
                            }
                            p = p.nextSibling
                        }
                        if (!f || p) return "production" === e.env.NODE_ENV || "undefined" == typeof console || T || (T = !0, console.warn("Parent: ", t), console.warn("Mismatching childNodes vs. VNodes: ", t.childNodes, u)), !1
                    } else b(n, u, r);
                    if (a(l)) {
                        var h = !1;
                        for (var g in l) if (!j(g)) {
                            h = !0, w(n, r);
                            break
                        }
                        !h && l.class && xt(l.class)
                    }
                } else t.data !== n.text && (t.data = n.text);
                return !0
            }

            return function (t, n, r, c, l, f) {
                if (!i(n)) {
                    var d, p = !1, v = [];
                    if (i(t)) p = !0, h(n, v, l, f); else {
                        var m = a(t.nodeType);
                        if (!m && hr(t, n)) A(t, n, v, c); else {
                            if (m) {
                                if (1 === t.nodeType && t.hasAttribute(H) && (t.removeAttribute(H), r = !0), s(r)) {
                                    if (D(t, n, v)) return S(n, v, !0), t;
                                    "production" !== e.env.NODE_ENV && de("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
                                }
                                d = t, t = new we(u.tagName(d).toLowerCase(), {}, [], void 0, d)
                            }
                            var g = t.elm, y = u.parentNode(g);
                            if (h(n, v, g._leaveCb ? null : y, u.nextSibling(g)), a(n.parent)) for (var b = n.parent, w = _(n); b;) {
                                for (var E = 0; E < o.destroy.length; ++E) o.destroy[E](b);
                                if (b.elm = n.elm, w) {
                                    for (var x = 0; x < o.create.length; ++x) o.create[x](pr, b);
                                    var N = b.data.hook.insert;
                                    if (N.merged) for (var C = 1; C < N.fns.length; C++) N.fns[C]()
                                } else dr(b);
                                b = b.parent
                            }
                            a(y) ? O(0, [t], 0, 0) : a(t.tag) && k(t)
                        }
                    }
                    return S(n, v, p), n.elm
                }
                a(t) && k(t)
            }
        }({
            nodeOps: ur, modules: [Nr, Mr, so, uo, Eo, W ? {
                create: Wo, activate: Wo, remove: function (e, t) {
                    !0 !== e.data.show ? Bo(e, t) : t()
                }
            } : {}].concat(xr)
        });
        Q && document.addEventListener("selectionchange", function () {
            var e = document.activeElement;
            e && e.vmodel && ri(e, "input")
        });
        var Go = {
            inserted: function (e, t, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? $t(n, "postpatch", function () {
                    Go.componentUpdated(e, t, n)
                }) : Xo(e, t, n.context), e._vOptions = [].map.call(e.options, ei)) : ("textarea" === n.tag || cr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", ni), te || (e.addEventListener("compositionstart", ti), e.addEventListener("compositionend", ni)), Q && (e.vmodel = !0)))
            }, componentUpdated: function (e, t, n) {
                if ("select" === n.tag) {
                    Xo(e, t, n.context);
                    var r = e._vOptions, o = e._vOptions = [].map.call(e.options, ei);
                    if (o.some(function (e, t) {
                        return !P(e, r[t])
                    })) (e.multiple ? t.value.some(function (e) {
                        return Qo(e, o)
                    }) : t.value !== t.oldValue && Qo(t.value, o)) && ri(e, "change")
                }
            }
        };

        function Xo(e, t, n) {
            Yo(e, t, n), (Y || ee) && setTimeout(function () {
                Yo(e, t, n)
            }, 0)
        }

        function Yo(t, n, r) {
            var o = n.value, i = t.multiple;
            if (!i || Array.isArray(o)) {
                for (var a, s, c = 0, l = t.options.length; c < l; c++) if (s = t.options[c], i) a = V(o, ei(s)) > -1, s.selected !== a && (s.selected = a); else if (P(ei(s), o)) return void(t.selectedIndex !== c && (t.selectedIndex = c));
                i || (t.selectedIndex = -1)
            } else "production" !== e.env.NODE_ENV && de('<select multiple v-model="' + n.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(o).slice(8, -1), r)
        }

        function Qo(e, t) {
            return t.every(function (t) {
                return !P(t, e)
            })
        }

        function ei(e) {
            return "_value" in e ? e._value : e.value
        }

        function ti(e) {
            e.target.composing = !0
        }

        function ni(e) {
            e.target.composing && (e.target.composing = !1, ri(e.target, "input"))
        }

        function ri(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n)
        }

        function oi(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : oi(e.componentInstance._vnode)
        }

        var ii = {
            model: Go, show: {
                bind: function (e, t, n) {
                    var r = t.value, o = (n = oi(n)).data && n.data.transition,
                        i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    r && o ? (n.data.show = !0, zo(n, function () {
                        e.style.display = i
                    })) : e.style.display = r ? i : "none"
                }, update: function (e, t, n) {
                    var r = t.value;
                    r !== t.oldValue && ((n = oi(n)).data && n.data.transition ? (n.data.show = !0, r ? zo(n, function () {
                        e.style.display = e.__vOriginalDisplay
                    }) : Bo(n, function () {
                        e.style.display = "none"
                    })) : e.style.display = r ? e.__vOriginalDisplay : "none")
                }, unbind: function (e, t, n, r, o) {
                    o || (e.style.display = e.__vOriginalDisplay)
                }
            }
        }, ai = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        };

        function si(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? si(It(t.children)) : e
        }

        function ci(e) {
            var t = {}, n = e.$options;
            for (var r in n.propsData) t[r] = e[r];
            var o = n._parentListeners;
            for (var i in o) t[O(i)] = o[i];
            return t
        }

        function li(e, t) {
            if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {props: t.componentOptions.propsData})
        }

        var ui = {
            name: "transition", props: ai, abstract: !0, render: function (t) {
                var n = this, r = this.$slots.default;
                if (r && (r = r.filter(function (e) {
                    return e.tag || Dt(e)
                })).length) {
                    "production" !== e.env.NODE_ENV && r.length > 1 && de("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                    var o = this.mode;
                    "production" !== e.env.NODE_ENV && o && "in-out" !== o && "out-in" !== o && de("invalid <transition> mode: " + o, this.$parent);
                    var i = r[0];
                    if (function (e) {
                        for (; e = e.parent;) if (e.data.transition) return !0
                    }(this.$vnode)) return i;
                    var a = si(i);
                    if (!a) return i;
                    if (this._leaving) return li(t, i);
                    var s = "__transition-" + this._uid + "-";
                    a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : c(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                    var l = (a.data || (a.data = {})).transition = ci(this), u = this._vnode, f = si(u);
                    if (a.data.directives && a.data.directives.some(function (e) {
                        return "show" === e.name
                    }) && (a.data.show = !0), f && f.data && !function (e, t) {
                        return t.key === e.key && t.tag === e.tag
                    }(a, f) && !Dt(f) && (!f.componentInstance || !f.componentInstance._vnode.isComment)) {
                        var d = f.data.transition = T({}, l);
                        if ("out-in" === o) return this._leaving = !0, $t(d, "afterLeave", function () {
                            n._leaving = !1, n.$forceUpdate()
                        }), li(t, i);
                        if ("in-out" === o) {
                            if (Dt(a)) return u;
                            var p, v = function () {
                                p()
                            };
                            $t(l, "afterEnter", v), $t(l, "enterCancelled", v), $t(d, "delayLeave", function (e) {
                                p = e
                            })
                        }
                    }
                    return i
                }
            }
        }, fi = T({tag: String, moveClass: String}, ai);

        function di(e) {
            e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
        }

        function pi(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }

        function vi(e) {
            var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, o = t.top - n.top;
            if (r || o) {
                e.data.moved = !0;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
            }
        }

        delete fi.mode;
        var hi = {
            Transition: ui, TransitionGroup: {
                props: fi, render: function (t) {
                    for (var n = this.tag || this.$vnode.data.tag || "span", r = Object.create(null), o = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], s = ci(this), c = 0; c < i.length; c++) {
                        var l = i[c];
                        if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) a.push(l), r[l.key] = l, (l.data || (l.data = {})).transition = s; else if ("production" !== e.env.NODE_ENV) {
                            var u = l.componentOptions, f = u ? u.Ctor.options.name || u.tag || "" : l.tag;
                            de("<transition-group> children must be keyed: <" + f + ">")
                        }
                    }
                    if (o) {
                        for (var d = [], p = [], v = 0; v < o.length; v++) {
                            var h = o[v];
                            h.data.transition = s, h.data.pos = h.elm.getBoundingClientRect(), r[h.key] ? d.push(h) : p.push(h)
                        }
                        this.kept = t(n, null, d), this.removed = p
                    }
                    return t(n, null, a)
                }, beforeUpdate: function () {
                    this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                }, updated: function () {
                    var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
                    e.length && this.hasMove(e[0].elm, t) && (e.forEach(di), e.forEach(pi), e.forEach(vi), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
                        if (e.data.moved) {
                            var n = e.elm, r = n.style;
                            Po(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(To, n._moveCb = function e(r) {
                                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(To, e), n._moveCb = null, Vo(n, t))
                            })
                        }
                    }))
                }, methods: {
                    hasMove: function (e, t) {
                        if (!Co) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach(function (e) {
                            ko(n, e)
                        }), xo(n, t), n.style.display = "none", this.$el.appendChild(n);
                        var r = Fo(n);
                        return this.$el.removeChild(n), this._hasMove = r.hasTransform
                    }
                }
            }
        };
        Mn.config.mustUseProp = qn, Mn.config.isReservedTag = ir, Mn.config.isReservedAttr = zn, Mn.config.getTagNamespace = ar, Mn.config.isUnknownElement = function (e) {
            if (!W) return !0;
            if (ir(e)) return !1;
            if (e = e.toLowerCase(), null != sr[e]) return sr[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? sr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : sr[e] = /HTMLUnknownElement/.test(t.toString())
        }, T(Mn.options.directives, ii), T(Mn.options.components, hi), Mn.prototype.__patch__ = W ? Zo : D, Mn.prototype.$mount = function (t, n) {
            return function (t, n, r) {
                var o;
                return t.$el = n, t.$options.render || (t.$options.render = xe, "production" !== e.env.NODE_ENV && (t.$options.template && "#" !== t.$options.template.charAt(0) || t.$options.el || n ? de("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", t) : de("Failed to mount component: template or render function not defined.", t))), qt(t, "beforeMount"), o = "production" !== e.env.NODE_ENV && U.performance && st ? function () {
                    var e = t._name, n = t._uid, o = "vue-perf-start:" + n, i = "vue-perf-end:" + n;
                    st(o);
                    var a = t._render();
                    st(i), ct("vue " + e + " render", o, i), st(o), t._update(a, r), st(i), ct("vue " + e + " patch", o, i)
                } : function () {
                    t._update(t._render(), r)
                }, new nn(t, o, D, null, !0), r = !1, null == t.$vnode && (t._isMounted = !0, qt(t, "mounted")), t
            }(this, t = t && W ? lr(t) : void 0, n)
        }, Mn.nextTick(function () {
            U.devtools && (ce ? ce.emit("init", Mn) : "production" !== e.env.NODE_ENV && re && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), "production" !== e.env.NODE_ENV && !1 !== U.productionTip && W && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")
        }, 0);
        var mi = /\{\{((?:.|\n)+?)\}\}/g, gi = /[-.*+?^${}()|[\]\/\\]/g, yi = x(function (e) {
            var t = e[0].replace(gi, "\\$&"), n = e[1].replace(gi, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
        });

        function bi(e, t) {
            var n = t ? yi(t) : mi;
            if (n.test(e)) {
                for (var r, o, i, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                    (o = r.index) > c && (s.push(i = e.slice(c, o)), a.push(JSON.stringify(i)));
                    var l = Vr(r[1].trim());
                    a.push("_s(" + l + ")"), s.push({"@binding": l}), c = o + r[0].length
                }
                return c < e.length && (s.push(i = e.slice(c)), a.push(JSON.stringify(i))), {
                    expression: a.join("+"),
                    tokens: s
                }
            }
        }

        var _i = {
            staticKeys: ["staticClass"], transformNode: function (t, n) {
                var r = n.warn || Hr, o = Kr(t, "class");
                "production" !== e.env.NODE_ENV && o && bi(o, n.delimiters) && r('class="' + o + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.'), o && (t.staticClass = JSON.stringify(o));
                var i = Jr(t, "class", !1);
                i && (t.classBinding = i)
            }, genData: function (e) {
                var t = "";
                return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
            }
        };
        var wi, Ei = {
                staticKeys: ["staticStyle"], transformNode: function (t, n) {
                    var r = n.warn || Hr, o = Kr(t, "style");
                    o && ("production" !== e.env.NODE_ENV && bi(o, n.delimiters) && r('style="' + o + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'), t.staticStyle = JSON.stringify(fo(o)));
                    var i = Jr(t, "style", !1);
                    i && (t.styleBinding = i)
                }, genData: function (e) {
                    var t = "";
                    return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
                }
            }, xi = function (e) {
                return (wi = wi || document.createElement("div")).innerHTML = e, wi.textContent
            }, ki = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
            Oi = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
            Ni = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
            Ci = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
            $i = "[a-zA-Z_][\\w\\-\\.]*", Ai = "((?:" + $i + "\\:)?" + $i + ")", Si = new RegExp("^<" + Ai),
            Ti = /^\s*(\/?)>/, ji = new RegExp("^<\\/" + Ai + "[^>]*>"), Di = /^<!DOCTYPE [^>]+>/i, Ii = /^<!--/,
            Mi = /^<!\[/, Pi = !1;
        "x".replace(/x(.)?/g, function (e, t) {
            Pi = "" === t
        });
        var Vi = g("script,style,textarea", !0), Li = {},
            Hi = {"&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t"},
            Fi = /&(?:lt|gt|quot|amp);/g, Ri = /&(?:lt|gt|quot|amp|#10|#9);/g, Ui = g("pre,textarea", !0),
            zi = function (e, t) {
                return e && Ui(e) && "\n" === t[0]
            };

        function Bi(e, t) {
            var n = t ? Ri : Fi;
            return e.replace(n, function (e) {
                return Hi[e]
            })
        }

        var qi, Ji, Ki, Wi, Zi, Gi, Xi, Yi, Qi = /^@|^v-on:/, ea = /^v-|^@|^:/, ta = /(.*?)\s+(?:in|of)\s+(.*)/,
            na = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ra = /^\(|\)$/g, oa = /:(.*)$/, ia = /^:|^v-bind:/, aa = /\.[^.]+/g,
            sa = x(xi);

        function ca(t, n, r) {
            return {
                type: 1, tag: t, attrsList: n, attrsMap: function (t) {
                    for (var n = {}, r = 0, o = t.length; r < o; r++) "production" === e.env.NODE_ENV || !n[t[r].name] || Y || ee || qi("duplicate attribute: " + t[r].name), n[t[r].name] = t[r].value;
                    return n
                }(n), parent: r, children: []
            }
        }

        function la(t, n) {
            qi = n.warn || Hr, Gi = n.isPreTag || I, Xi = n.mustUseProp || I, Yi = n.getTagNamespace || I, Ki = Fr(n.modules, "transformNode"), Wi = Fr(n.modules, "preTransformNode"), Zi = Fr(n.modules, "postTransformNode"), Ji = n.delimiters;
            var r, o, i = [], a = !1 !== n.preserveWhitespace, s = !1, c = !1, l = !1;

            function u(e) {
                l || (l = !0, qi(e))
            }

            function f(e) {
                e.pre && (s = !1), Gi(e.tag) && (c = !1);
                for (var t = 0; t < Zi.length; t++) Zi[t](e, n)
            }

            return function (t, n) {
                for (var r, o, i = [], a = n.expectHTML, s = n.isUnaryTag || I, c = n.canBeLeftOpenTag || I, l = 0; t;) {
                    if (r = t, o && Vi(o)) {
                        var u = 0, f = o.toLowerCase(),
                            d = Li[f] || (Li[f] = new RegExp("([\\s\\S]*?)(</" + f + "[^>]*>)", "i")),
                            p = t.replace(d, function (e, t, r) {
                                return u = r.length, Vi(f) || "noscript" === f || (t = t.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), zi(f, t) && (t = t.slice(1)), n.chars && n.chars(t), ""
                            });
                        l += t.length - p.length, t = p, C(f, l - u, l)
                    } else {
                        var v = t.indexOf("<");
                        if (0 === v) {
                            if (Ii.test(t)) {
                                var h = t.indexOf("--\x3e");
                                if (h >= 0) {
                                    n.shouldKeepComment && n.comment(t.substring(4, h)), k(h + 3);
                                    continue
                                }
                            }
                            if (Mi.test(t)) {
                                var m = t.indexOf("]>");
                                if (m >= 0) {
                                    k(m + 2);
                                    continue
                                }
                            }
                            var g = t.match(Di);
                            if (g) {
                                k(g[0].length);
                                continue
                            }
                            var y = t.match(ji);
                            if (y) {
                                var b = l;
                                k(y[0].length), C(y[1], b, l);
                                continue
                            }
                            var _ = O();
                            if (_) {
                                N(_), zi(o, t) && k(1);
                                continue
                            }
                        }
                        var w = void 0, E = void 0, x = void 0;
                        if (v >= 0) {
                            for (E = t.slice(v); !(ji.test(E) || Si.test(E) || Ii.test(E) || Mi.test(E) || (x = E.indexOf("<", 1)) < 0);) v += x, E = t.slice(v);
                            w = t.substring(0, v), k(v)
                        }
                        v < 0 && (w = t, t = ""), n.chars && w && n.chars(w)
                    }
                    if (t === r) {
                        n.chars && n.chars(t), "production" !== e.env.NODE_ENV && !i.length && n.warn && n.warn('Mal-formatted tag at end of template: "' + t + '"');
                        break
                    }
                }

                function k(e) {
                    l += e, t = t.substring(e)
                }

                function O() {
                    var e = t.match(Si);
                    if (e) {
                        var n, r, o = {tagName: e[1], attrs: [], start: l};
                        for (k(e[0].length); !(n = t.match(Ti)) && (r = t.match(Ci));) k(r[0].length), o.attrs.push(r);
                        if (n) return o.unarySlash = n[1], k(n[0].length), o.end = l, o
                    }
                }

                function N(e) {
                    var t = e.tagName, r = e.unarySlash;
                    a && ("p" === o && Ni(t) && C(o), c(t) && o === t && C(t));
                    for (var l = s(t) || !!r, u = e.attrs.length, f = new Array(u), d = 0; d < u; d++) {
                        var p = e.attrs[d];
                        Pi && -1 === p[0].indexOf('""') && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);
                        var v = p[3] || p[4] || p[5] || "",
                            h = "a" === t && "href" === p[1] ? n.shouldDecodeNewlinesForHref : n.shouldDecodeNewlines;
                        f[d] = {name: p[1], value: Bi(v, h)}
                    }
                    l || (i.push({
                        tag: t,
                        lowerCasedTag: t.toLowerCase(),
                        attrs: f
                    }), o = t), n.start && n.start(t, f, l, e.start, e.end)
                }

                function C(t, r, a) {
                    var s, c;
                    if (null == r && (r = l), null == a && (a = l), t && (c = t.toLowerCase()), t) for (s = i.length - 1; s >= 0 && i[s].lowerCasedTag !== c; s--) ; else s = 0;
                    if (s >= 0) {
                        for (var u = i.length - 1; u >= s; u--) "production" !== e.env.NODE_ENV && (u > s || !t) && n.warn && n.warn("tag <" + i[u].tag + "> has no matching end tag."), n.end && n.end(i[u].tag, r, a);
                        i.length = s, o = s && i[s - 1].tag
                    } else "br" === c ? n.start && n.start(t, [], !0, r, a) : "p" === c && (n.start && n.start(t, [], !1, r, a), n.end && n.end(t, r, a))
                }

                C()
            }(t, {
                warn: qi,
                expectHTML: n.expectHTML,
                isUnaryTag: n.isUnaryTag,
                canBeLeftOpenTag: n.canBeLeftOpenTag,
                shouldDecodeNewlines: n.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: n.shouldDecodeNewlinesForHref,
                shouldKeepComment: n.comments,
                start: function (t, a, l) {
                    var d = o && o.ns || Yi(t);
                    Y && "svg" === d && (a = function (e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e[n];
                            va.test(r.name) || (r.name = r.name.replace(ha, ""), t.push(r))
                        }
                        return t
                    }(a));
                    var p, v = ca(t, a, o);
                    d && (v.ns = d), "style" !== (p = v).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || se() || (v.forbidden = !0, "production" !== e.env.NODE_ENV && qi("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + t + ">, as they will not be parsed."));
                    for (var h = 0; h < Wi.length; h++) v = Wi[h](v, n) || v;

                    function m(t) {
                        "production" !== e.env.NODE_ENV && ("slot" !== t.tag && "template" !== t.tag || u("Cannot use <" + t.tag + "> as component root element because it may contain multiple nodes."), t.attrsMap.hasOwnProperty("v-for") && u("Cannot use v-for on stateful component root element because it renders multiple elements."))
                    }

                    if (s || (!function (e) {
                        null != Kr(e, "v-pre") && (e.pre = !0)
                    }(v), v.pre && (s = !0)), Gi(v.tag) && (c = !0), s ? function (e) {
                        var t = e.attrsList.length;
                        if (t) for (var n = e.attrs = new Array(t), r = 0; r < t; r++) n[r] = {
                            name: e.attrsList[r].name,
                            value: JSON.stringify(e.attrsList[r].value)
                        }; else e.pre || (e.plain = !0)
                    }(v) : v.processed || (fa(v), function (e) {
                        var t = Kr(e, "v-if");
                        if (t) e.if = t, da(e, {exp: t, block: e}); else {
                            null != Kr(e, "v-else") && (e.else = !0);
                            var n = Kr(e, "v-else-if");
                            n && (e.elseif = n)
                        }
                    }(v), function (e) {
                        null != Kr(e, "v-once") && (e.once = !0)
                    }(v), ua(v, n)), r ? i.length || (r.if && (v.elseif || v.else) ? (m(v), da(r, {
                        exp: v.elseif,
                        block: v
                    })) : "production" !== e.env.NODE_ENV && u("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.")) : m(r = v), o && !v.forbidden) if (v.elseif || v.else) !function (t, n) {
                        var r = function (t) {
                            var n = t.length;
                            for (; n--;) {
                                if (1 === t[n].type) return t[n];
                                "production" !== e.env.NODE_ENV && " " !== t[n].text && qi('text "' + t[n].text.trim() + '" between v-if and v-else(-if) will be ignored.'), t.pop()
                            }
                        }(n.children);
                        r && r.if ? da(r, {
                            exp: t.elseif,
                            block: t
                        }) : "production" !== e.env.NODE_ENV && qi("v-" + (t.elseif ? 'else-if="' + t.elseif + '"' : "else") + " used on element <" + t.tag + "> without corresponding v-if.")
                    }(v, o); else if (v.slotScope) {
                        o.plain = !1;
                        var g = v.slotTarget || '"default"';
                        (o.scopedSlots || (o.scopedSlots = {}))[g] = v
                    } else o.children.push(v), v.parent = o;
                    l ? f(v) : (o = v, i.push(v))
                },
                end: function () {
                    var e = i[i.length - 1], t = e.children[e.children.length - 1];
                    t && 3 === t.type && " " === t.text && !c && e.children.pop(), i.length -= 1, o = i[i.length - 1], f(e)
                },
                chars: function (n) {
                    if (o) {
                        if (!Y || "textarea" !== o.tag || o.attrsMap.placeholder !== n) {
                            var r, i, l = o.children;
                            if (n = c || n.trim() ? "script" === (r = o).tag || "style" === r.tag ? n : sa(n) : a && l.length ? " " : "") !s && " " !== n && (i = bi(n, Ji)) ? l.push({
                                type: 2,
                                expression: i.expression,
                                tokens: i.tokens,
                                text: n
                            }) : " " === n && l.length && " " === l[l.length - 1].text || l.push({type: 3, text: n})
                        }
                    } else "production" !== e.env.NODE_ENV && (n === t ? u("Component template requires a root element, rather than just text.") : (n = n.trim()) && u('text "' + n + '" outside root element will be ignored.'))
                },
                comment: function (e) {
                    o.children.push({type: 3, text: e, isComment: !0})
                }
            }), r
        }

        function ua(t, n) {
            var r, o;
            (o = Jr(r = t, "key")) && ("production" !== e.env.NODE_ENV && "template" === r.tag && qi("<template> cannot be keyed. Place the key on real elements instead."), r.key = o), t.plain = !t.key && !t.attrsList.length, function (e) {
                var t = Jr(e, "ref");
                t && (e.ref = t, e.refInFor = function (e) {
                    var t = e;
                    for (; t;) {
                        if (void 0 !== t.for) return !0;
                        t = t.parent
                    }
                    return !1
                }(e))
            }(t), function (t) {
                if ("slot" === t.tag) t.slotName = Jr(t, "name"), "production" !== e.env.NODE_ENV && t.key && qi("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead."); else {
                    var n;
                    "template" === t.tag ? (n = Kr(t, "scope"), "production" !== e.env.NODE_ENV && n && qi('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.', !0), t.slotScope = n || Kr(t, "slot-scope")) : (n = Kr(t, "slot-scope")) && ("production" !== e.env.NODE_ENV && t.attrsMap["v-for"] && qi("Ambiguous combined usage of slot-scope and v-for on <" + t.tag + "> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.", !0), t.slotScope = n);
                    var r = Jr(t, "slot");
                    r && (t.slotTarget = '""' === r ? '"default"' : r, "template" === t.tag || t.slotScope || Ur(t, "slot", r))
                }
            }(t), function (e) {
                var t;
                (t = Jr(e, "is")) && (e.component = t);
                null != Kr(e, "inline-template") && (e.inlineTemplate = !0)
            }(t);
            for (var i = 0; i < Ki.length; i++) t = Ki[i](t, n) || t;
            !function (t) {
                var n, r, o, i, a, s, c, l = t.attrsList;
                for (n = 0, r = l.length; n < r; n++) if (o = i = l[n].name, a = l[n].value, ea.test(o)) if (t.hasBindings = !0, (s = pa(o)) && (o = o.replace(aa, "")), ia.test(o)) o = o.replace(ia, ""), a = Vr(a), c = !1, s && (s.prop && (c = !0, "innerHtml" === (o = O(o)) && (o = "innerHTML")), s.camel && (o = O(o)), s.sync && qr(t, "update:" + O(o), Zr(a, "$event"))), c || !t.component && Xi(t.tag, t.attrsMap.type, o) ? Rr(t, o, a) : Ur(t, o, a); else if (Qi.test(o)) o = o.replace(Qi, ""), qr(t, o, a, s, !1, qi); else {
                    var u = (o = o.replace(ea, "")).match(oa), f = u && u[1];
                    f && (o = o.slice(0, -(f.length + 1))), Br(t, o, i, a, f, s), "production" !== e.env.NODE_ENV && "model" === o && ma(t, a)
                } else {
                    if ("production" !== e.env.NODE_ENV) {
                        var d = bi(a, Ji);
                        d && qi(o + '="' + a + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.')
                    }
                    Ur(t, o, JSON.stringify(a)), !t.component && "muted" === o && Xi(t.tag, t.attrsMap.type, o) && Rr(t, o, "true")
                }
            }(t)
        }

        function fa(t) {
            var n;
            if (n = Kr(t, "v-for")) {
                var r = function (e) {
                    var t = e.match(ta);
                    if (!t) return;
                    var n = {};
                    n.for = t[2].trim();
                    var r = t[1].trim().replace(ra, ""), o = r.match(na);
                    o ? (n.alias = r.replace(na, ""), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = r;
                    return n
                }(n);
                r ? T(t, r) : "production" !== e.env.NODE_ENV && qi("Invalid v-for expression: " + n)
            }
        }

        function da(e, t) {
            e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
        }

        function pa(e) {
            var t = e.match(aa);
            if (t) {
                var n = {};
                return t.forEach(function (e) {
                    n[e.slice(1)] = !0
                }), n
            }
        }

        var va = /^xmlns:NS\d+/, ha = /^NS\d+:/;

        function ma(e, t) {
            for (var n = e; n;) n.for && n.alias === t && qi("<" + e.tag + ' v-model="' + t + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'), n = n.parent
        }

        function ga(e) {
            return ca(e.tag, e.attrsList.slice(), e.parent)
        }

        var ya = [_i, Ei, {
            preTransformNode: function (e, t) {
                if ("input" === e.tag) {
                    var n = e.attrsMap;
                    if (n["v-model"] && (n["v-bind:type"] || n[":type"])) {
                        var r = Jr(e, "type"), o = Kr(e, "v-if", !0), i = o ? "&&(" + o + ")" : "",
                            a = null != Kr(e, "v-else", !0), s = Kr(e, "v-else-if", !0), c = ga(e);
                        fa(c), zr(c, "type", "checkbox"), ua(c, t), c.processed = !0, c.if = "(" + r + ")==='checkbox'" + i, da(c, {
                            exp: c.if,
                            block: c
                        });
                        var l = ga(e);
                        Kr(l, "v-for", !0), zr(l, "type", "radio"), ua(l, t), da(c, {
                            exp: "(" + r + ")==='radio'" + i,
                            block: l
                        });
                        var u = ga(e);
                        return Kr(u, "v-for", !0), zr(u, ":type", r), ua(u, t), da(c, {
                            exp: o,
                            block: u
                        }), a ? c.else = !0 : s && (c.elseif = s), c
                    }
                }
            }
        }];
        var ba, _a, wa = {
            expectHTML: !0,
            modules: ya,
            directives: {
                model: function (t, n, r) {
                    Ir = r;
                    var o = n.value, i = n.modifiers, a = t.tag, s = t.attrsMap.type;
                    if ("production" !== e.env.NODE_ENV && "input" === a && "file" === s && Ir("<" + t.tag + ' v-model="' + o + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'), t.component) return Wr(t, o, i), !1;
                    if ("select" === a) !function (e, t, n) {
                        var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                        r = r + " " + Zr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), qr(e, "change", r, null, !0)
                    }(t, o, i); else if ("input" === a && "checkbox" === s) !function (e, t, n) {
                        var r = n && n.number, o = Jr(e, "value") || "null", i = Jr(e, "true-value") || "true",
                            a = Jr(e, "false-value") || "false";
                        Rr(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === i ? ":(" + t + ")" : ":_q(" + t + "," + i + ")")), qr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat([$$v]))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + Zr(t, "$$c") + "}", null, !0)
                    }(t, o, i); else if ("input" === a && "radio" === s) !function (e, t, n) {
                        var r = n && n.number, o = Jr(e, "value") || "null";
                        Rr(e, "checked", "_q(" + t + "," + (o = r ? "_n(" + o + ")" : o) + ")"), qr(e, "change", Zr(t, o), null, !0)
                    }(t, o, i); else if ("input" === a || "textarea" === a) !function (t, n, r) {
                        var o = t.attrsMap.type;
                        if ("production" !== e.env.NODE_ENV) {
                            var i = t.attrsMap["v-bind:value"] || t.attrsMap[":value"];
                            if (i) {
                                var a = t.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
                                Ir(a + '="' + i + '" conflicts with v-model on the same element because the latter already expands to a value binding internally')
                            }
                        }
                        var s = r || {}, c = s.lazy, l = s.number, u = s.trim, f = !c && "range" !== o,
                            d = c ? "change" : "range" === o ? no : "input", p = "$event.target.value";
                        u && (p = "$event.target.value.trim()"), l && (p = "_n(" + p + ")");
                        var v = Zr(n, p);
                        f && (v = "if($event.target.composing)return;" + v), Rr(t, "value", "(" + n + ")"), qr(t, d, v, null, !0), (u || l) && qr(t, "blur", "$forceUpdate()")
                    }(t, o, i); else {
                        if (!U.isReservedTag(a)) return Wr(t, o, i), !1;
                        "production" !== e.env.NODE_ENV && Ir("<" + t.tag + ' v-model="' + o + "\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.")
                    }
                    return !0
                }, text: function (e, t) {
                    t.value && Rr(e, "textContent", "_s(" + t.value + ")")
                }, html: function (e, t) {
                    t.value && Rr(e, "innerHTML", "_s(" + t.value + ")")
                }
            },
            isPreTag: function (e) {
                return "pre" === e
            },
            isUnaryTag: ki,
            mustUseProp: qn,
            canBeLeftOpenTag: Oi,
            isReservedTag: ir,
            getTagNamespace: ar,
            staticKeys: function (e) {
                return e.reduce(function (e, t) {
                    return e.concat(t.staticKeys || [])
                }, []).join(",")
            }(ya)
        }, Ea = x(function (e) {
            return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""))
        });

        function xa(e, t) {
            e && (ba = Ea(t.staticKeys || ""), _a = t.isReservedTag || I, function e(t) {
                t.static = function (e) {
                    if (2 === e.type) return !1;
                    if (3 === e.type) return !0;
                    return !(!e.pre && (e.hasBindings || e.if || e.for || y(e.tag) || !_a(e.tag) || function (e) {
                        for (; e.parent;) {
                            if ("template" !== (e = e.parent).tag) return !1;
                            if (e.for) return !0
                        }
                        return !1
                    }(e) || !Object.keys(e).every(ba)))
                }(t);
                if (1 === t.type) {
                    if (!_a(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                    for (var n = 0, r = t.children.length; n < r; n++) {
                        var o = t.children[n];
                        e(o), o.static || (t.static = !1)
                    }
                    if (t.ifConditions) for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                        var s = t.ifConditions[i].block;
                        e(s), s.static || (t.static = !1)
                    }
                }
            }(e), function e(t, n) {
                if (1 === t.type) {
                    if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
                    if (t.staticRoot = !1, t.children) for (var r = 0, o = t.children.length; r < o; r++) e(t.children[r], n || !!t.for);
                    if (t.ifConditions) for (var i = 1, a = t.ifConditions.length; i < a; i++) e(t.ifConditions[i].block, n)
                }
            }(e, !1))
        }

        var ka = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            Oa = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
            Na = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]},
            Ca = function (e) {
                return "if(" + e + ")return null;"
            }, $a = {
                stop: "$event.stopPropagation();",
                prevent: "$event.preventDefault();",
                self: Ca("$event.target !== $event.currentTarget"),
                ctrl: Ca("!$event.ctrlKey"),
                shift: Ca("!$event.shiftKey"),
                alt: Ca("!$event.altKey"),
                meta: Ca("!$event.metaKey"),
                left: Ca("'button' in $event && $event.button !== 0"),
                middle: Ca("'button' in $event && $event.button !== 1"),
                right: Ca("'button' in $event && $event.button !== 2")
            };

        function Aa(e, t, n) {
            var r = t ? "nativeOn:{" : "on:{";
            for (var o in e) r += '"' + o + '":' + Sa(o, e[o]) + ",";
            return r.slice(0, -1) + "}"
        }

        function Sa(e, t) {
            if (!t) return "function(){}";
            if (Array.isArray(t)) return "[" + t.map(function (t) {
                return Sa(e, t)
            }).join(",") + "]";
            var n = Oa.test(t.value), r = ka.test(t.value);
            if (t.modifiers) {
                var o = "", i = "", a = [];
                for (var s in t.modifiers) if ($a[s]) i += $a[s], Na[s] && a.push(s); else if ("exact" === s) {
                    var c = t.modifiers;
                    i += Ca(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                        return !c[e]
                    }).map(function (e) {
                        return "$event." + e + "Key"
                    }).join("||"))
                } else a.push(s);
                return a.length && (o += function (e) {
                    return "if(!('button' in $event)&&" + e.map(Ta).join("&&") + ")return null;"
                }(a)), i && (o += i), "function($event){" + o + (n ? t.value + "($event)" : r ? "(" + t.value + ")($event)" : t.value) + "}"
            }
            return n || r ? t.value : "function($event){" + t.value + "}"
        }

        function Ta(e) {
            var t = parseInt(e, 10);
            if (t) return "$event.keyCode!==" + t;
            var n = Na[e];
            return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key)"
        }

        var ja = {
            on: function (t, n) {
                "production" !== e.env.NODE_ENV && n.modifiers && de("v-on without argument does not support modifiers."), t.wrapListeners = function (e) {
                    return "_g(" + e + "," + n.value + ")"
                }
            }, bind: function (e, t) {
                e.wrapData = function (n) {
                    return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
                }
            }, cloak: D
        }, Da = function (e) {
            this.options = e, this.warn = e.warn || Hr, this.transforms = Fr(e.modules, "transformCode"), this.dataGenFns = Fr(e.modules, "genData"), this.directives = T(T({}, ja), e.directives);
            var t = e.isReservedTag || I;
            this.maybeComponent = function (e) {
                return !t(e.tag)
            }, this.onceId = 0, this.staticRenderFns = []
        };

        function Ia(e, t) {
            var n = new Da(t);
            return {
                render: "with(this){return " + (e ? Ma(e, n) : '_c("div")') + "}",
                staticRenderFns: n.staticRenderFns
            }
        }

        function Ma(t, n) {
            if (t.staticRoot && !t.staticProcessed) return Pa(t, n);
            if (t.once && !t.onceProcessed) return Va(t, n);
            if (t.for && !t.forProcessed) return function (t, n, r, o) {
                var i = t.for, a = t.alias, s = t.iterator1 ? "," + t.iterator1 : "",
                    c = t.iterator2 ? "," + t.iterator2 : "";
                "production" !== e.env.NODE_ENV && n.maybeComponent(t) && "slot" !== t.tag && "template" !== t.tag && !t.key && n.warn("<" + t.tag + ' v-for="' + a + " in " + i + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', !0);
                return t.forProcessed = !0, (o || "_l") + "((" + i + "),function(" + a + s + c + "){return " + (r || Ma)(t, n) + "})"
            }(t, n);
            if (t.if && !t.ifProcessed) return La(t, n);
            if ("template" !== t.tag || t.slotTarget) {
                if ("slot" === t.tag) return function (e, t) {
                    var n = e.slotName || '"default"', r = Ra(e, t), o = "_t(" + n + (r ? "," + r : ""),
                        i = e.attrs && "{" + e.attrs.map(function (e) {
                            return O(e.name) + ":" + e.value
                        }).join(",") + "}", a = e.attrsMap["v-bind"];
                    !i && !a || r || (o += ",null");
                    i && (o += "," + i);
                    a && (o += (i ? "" : ",null") + "," + a);
                    return o + ")"
                }(t, n);
                var r;
                if (t.component) r = function (e, t, n) {
                    var r = t.inlineTemplate ? null : Ra(t, n, !0);
                    return "_c(" + e + "," + Ha(t, n) + (r ? "," + r : "") + ")"
                }(t.component, t, n); else {
                    var o = t.plain ? void 0 : Ha(t, n), i = t.inlineTemplate ? null : Ra(t, n, !0);
                    r = "_c('" + t.tag + "'" + (o ? "," + o : "") + (i ? "," + i : "") + ")"
                }
                for (var a = 0; a < n.transforms.length; a++) r = n.transforms[a](t, r);
                return r
            }
            return Ra(t, n) || "void 0"
        }

        function Pa(e, t) {
            return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + Ma(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
        }

        function Va(t, n) {
            if (t.onceProcessed = !0, t.if && !t.ifProcessed) return La(t, n);
            if (t.staticInFor) {
                for (var r = "", o = t.parent; o;) {
                    if (o.for) {
                        r = o.key;
                        break
                    }
                    o = o.parent
                }
                return r ? "_o(" + Ma(t, n) + "," + n.onceId++ + "," + r + ")" : ("production" !== e.env.NODE_ENV && n.warn("v-once can only be used inside v-for that is keyed. "), Ma(t, n))
            }
            return Pa(t, n)
        }

        function La(e, t, n, r) {
            return e.ifProcessed = !0, function e(t, n, r, o) {
                if (!t.length) return o || "_e()";
                var i = t.shift();
                return i.exp ? "(" + i.exp + ")?" + a(i.block) + ":" + e(t, n, r, o) : "" + a(i.block);

                function a(e) {
                    return r ? r(e, n) : e.once ? Va(e, n) : Ma(e, n)
                }
            }(e.ifConditions.slice(), t, n, r)
        }

        function Ha(t, n) {
            var r = "{", o = function (e, t) {
                var n = e.directives;
                if (!n) return;
                var r, o, i, a, s = "directives:[", c = !1;
                for (r = 0, o = n.length; r < o; r++) {
                    i = n[r], a = !0;
                    var l = t.directives[i.name];
                    l && (a = !!l(e, i, t.warn)), a && (c = !0, s += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                }
                if (c) return s.slice(0, -1) + "]"
            }(t, n);
            o && (r += o + ","), t.key && (r += "key:" + t.key + ","), t.ref && (r += "ref:" + t.ref + ","), t.refInFor && (r += "refInFor:true,"), t.pre && (r += "pre:true,"), t.component && (r += 'tag:"' + t.tag + '",');
            for (var i = 0; i < n.dataGenFns.length; i++) r += n.dataGenFns[i](t);
            if (t.attrs && (r += "attrs:{" + Ba(t.attrs) + "},"), t.props && (r += "domProps:{" + Ba(t.props) + "},"), t.events && (r += Aa(t.events, !1, n.warn) + ","), t.nativeEvents && (r += Aa(t.nativeEvents, !0, n.warn) + ","), t.slotTarget && !t.slotScope && (r += "slot:" + t.slotTarget + ","), t.scopedSlots && (r += function (e, t) {
                return "scopedSlots:_u([" + Object.keys(e).map(function (n) {
                    return Fa(n, e[n], t)
                }).join(",") + "])"
            }(t.scopedSlots, n) + ","), t.model && (r += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
                var a = function (t, n) {
                    var r = t.children[0];
                    "production" === e.env.NODE_ENV || 1 === t.children.length && 1 === r.type || n.warn("Inline-template components must have exactly one child element.");
                    if (1 === r.type) {
                        var o = Ia(r, n.options);
                        return "inlineTemplate:{render:function(){" + o.render + "},staticRenderFns:[" + o.staticRenderFns.map(function (e) {
                            return "function(){" + e + "}"
                        }).join(",") + "]}"
                    }
                }(t, n);
                a && (r += a + ",")
            }
            return r = r.replace(/,$/, "") + "}", t.wrapData && (r = t.wrapData(r)), t.wrapListeners && (r = t.wrapListeners(r)), r
        }

        function Fa(e, t, n) {
            return t.for && !t.forProcessed ? function (e, t, n) {
                var r = t.for, o = t.alias, i = t.iterator1 ? "," + t.iterator1 : "",
                    a = t.iterator2 ? "," + t.iterator2 : "";
                return t.forProcessed = !0, "_l((" + r + "),function(" + o + i + a + "){return " + Fa(e, t, n) + "})"
            }(e, t, n) : "{key:" + e + ",fn:" + ("function(" + String(t.slotScope) + "){return " + ("template" === t.tag ? t.if ? t.if + "?" + (Ra(t, n) || "undefined") + ":undefined" : Ra(t, n) || "undefined" : Ma(t, n)) + "}") + "}"
        }

        function Ra(e, t, n, r, o) {
            var i = e.children;
            if (i.length) {
                var a = i[0];
                if (1 === i.length && a.for && "template" !== a.tag && "slot" !== a.tag) return (r || Ma)(a, t);
                var s = n ? function (e, t) {
                    for (var n = 0, r = 0; r < e.length; r++) {
                        var o = e[r];
                        if (1 === o.type) {
                            if (Ua(o) || o.ifConditions && o.ifConditions.some(function (e) {
                                return Ua(e.block)
                            })) {
                                n = 2;
                                break
                            }
                            (t(o) || o.ifConditions && o.ifConditions.some(function (e) {
                                return t(e.block)
                            })) && (n = 1)
                        }
                    }
                    return n
                }(i, t.maybeComponent) : 0, c = o || za;
                return "[" + i.map(function (e) {
                    return c(e, t)
                }).join(",") + "]" + (s ? "," + s : "")
            }
        }

        function Ua(e) {
            return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
        }

        function za(e, t) {
            return 1 === e.type ? Ma(e, t) : 3 === e.type && e.isComment ? (r = e, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : qa(JSON.stringify(n.text))) + ")";
            var n, r
        }

        function Ba(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e[n];
                t += '"' + r.name + '":' + qa(r.value) + ","
            }
            return t.slice(0, -1)
        }

        function qa(e) {
            return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }

        var Ja = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"),
            Ka = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"),
            Wa = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

        function Za(e) {
            var t = [];
            return e && function e(t, n) {
                if (1 === t.type) {
                    for (var r in t.attrsMap) if (ea.test(r)) {
                        var o = t.attrsMap[r];
                        o && ("v-for" === r ? Xa(t, 'v-for="' + o + '"', n) : Qi.test(r) ? Ga(o, r + '="' + o + '"', n) : Qa(o, r + '="' + o + '"', n))
                    }
                    if (t.children) for (var i = 0; i < t.children.length; i++) e(t.children[i], n)
                } else 2 === t.type && Qa(t.expression, t.text, n)
            }(e, t), t
        }

        function Ga(e, t, n) {
            var r = e.replace(Wa, ""), o = r.match(Ka);
            o && "$" !== r.charAt(o.index - 1) && n.push('avoid using JavaScript unary operator as property name: "' + o[0] + '" in expression ' + t.trim()), Qa(e, t, n)
        }

        function Xa(e, t, n) {
            Qa(e.for || "", t, n), Ya(e.alias, "v-for alias", t, n), Ya(e.iterator1, "v-for iterator", t, n), Ya(e.iterator2, "v-for iterator", t, n)
        }

        function Ya(e, t, n, r) {
            if ("string" == typeof e) try {
                new Function("var " + e + "=_")
            } catch (o) {
                r.push("invalid " + t + ' "' + e + '" in expression: ' + n.trim())
            }
        }

        function Qa(e, t, n) {
            try {
                new Function("return " + e)
            } catch (o) {
                var r = e.replace(Wa, "").match(Ja);
                r ? n.push('avoid using JavaScript keyword as property name: "' + r[0] + '"\n  Raw expression: ' + t.trim()) : n.push("invalid expression: " + o.message + " in\n\n    " + e + "\n\n  Raw expression: " + t.trim() + "\n")
            }
        }

        function es(e, t) {
            try {
                return new Function(e)
            } catch (n) {
                return t.push({err: n, code: e}), D
            }
        }

        var ts, ns, rs = (ts = function (e, t) {
            var n = la(e.trim(), t);
            !1 !== t.optimize && xa(n, t);
            var r = Ia(n, t);
            return {ast: n, render: r.render, staticRenderFns: r.staticRenderFns}
        }, function (t) {
            function n(n, r) {
                var o = Object.create(t), i = [], a = [];
                if (o.warn = function (e, t) {
                    (t ? a : i).push(e)
                }, r) for (var s in r.modules && (o.modules = (t.modules || []).concat(r.modules)), r.directives && (o.directives = T(Object.create(t.directives || null), r.directives)), r) "modules" !== s && "directives" !== s && (o[s] = r[s]);
                var c = ts(n, o);
                return "production" !== e.env.NODE_ENV && i.push.apply(i, Za(c.ast)), c.errors = i, c.tips = a, c
            }

            return {
                compile: n, compileToFunctions: function (t) {
                    var n = Object.create(null);
                    return function (r, o, i) {
                        var a = (o = T({}, o)).warn || de;
                        if (delete o.warn, "production" !== e.env.NODE_ENV) try {
                            new Function("return 1")
                        } catch (e) {
                            e.toString().match(/unsafe-eval|CSP/) && a("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")
                        }
                        var s = o.delimiters ? String(o.delimiters) + r : r;
                        if (n[s]) return n[s];
                        var c = t(r, o);
                        "production" !== e.env.NODE_ENV && (c.errors && c.errors.length && a("Error compiling template:\n\n" + r + "\n\n" + c.errors.map(function (e) {
                            return "- " + e
                        }).join("\n") + "\n", i), c.tips && c.tips.length && c.tips.forEach(function (e) {
                            return pe(e, i)
                        }));
                        var l = {}, u = [];
                        return l.render = es(c.render, u), l.staticRenderFns = c.staticRenderFns.map(function (e) {
                            return es(e, u)
                        }), "production" !== e.env.NODE_ENV && (c.errors && c.errors.length || !u.length || a("Failed to generate render function:\n\n" + u.map(function (e) {
                            var t = e.err, n = e.code;
                            return t.toString() + " in\n\n" + n + "\n"
                        }).join("\n"), i)), n[s] = l
                    }
                }(n)
            }
        })(wa).compileToFunctions;

        function os(e) {
            return (ns = ns || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ns.innerHTML.indexOf("&#10;") > 0
        }

        var is = !!W && os(!1), as = !!W && os(!0), ss = x(function (e) {
            var t = lr(e);
            return t && t.innerHTML
        }), cs = Mn.prototype.$mount;
        Mn.prototype.$mount = function (t, n) {
            if ((t = t && lr(t)) === document.body || t === document.documentElement) return "production" !== e.env.NODE_ENV && de("Do not mount Vue to <html> or <body> - mount to normal elements instead."), this;
            var r = this.$options;
            if (!r.render) {
                var o = r.template;
                if (o) if ("string" == typeof o) "#" === o.charAt(0) && (o = ss(o), "production" === e.env.NODE_ENV || o || de("Template element not found or is empty: " + r.template, this)); else {
                    if (!o.nodeType) return "production" !== e.env.NODE_ENV && de("invalid template option:" + o, this), this;
                    o = o.innerHTML
                } else t && (o = function (e) {
                    if (e.outerHTML) return e.outerHTML;
                    var t = document.createElement("div");
                    return t.appendChild(e.cloneNode(!0)), t.innerHTML
                }(t));
                if (o) {
                    "production" !== e.env.NODE_ENV && U.performance && st && st("compile");
                    var i = rs(o, {
                        shouldDecodeNewlines: is,
                        shouldDecodeNewlinesForHref: as,
                        delimiters: r.delimiters,
                        comments: r.comments
                    }, this), a = i.render, s = i.staticRenderFns;
                    r.render = a, r.staticRenderFns = s, "production" !== e.env.NODE_ENV && U.performance && st && (st("compile end"), ct("vue " + this._name + " compile", "compile", "compile end"))
                }
            }
            return cs.call(this, t, n)
        }, Mn.compile = rs, t.default = Mn
    }.call(t, n(1), n(0), n(6).setImmediate)
}, function (e, t, n) {
    (function (e) {
        var r = Function.prototype.apply;

        function o(e, t) {
            this._id = e, this._clearFn = t
        }

        t.setTimeout = function () {
            return new o(r.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new o(r.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e && e.close()
        }, o.prototype.unref = o.prototype.ref = function () {
        }, o.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(7), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }).call(t, n(0))
}, function (e, t, n) {
    (function (e, t) {
        !function (e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, o, i, a, s, c = 1, l = {}, u = !1, f = e.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
                    t.nextTick(function () {
                        v(e)
                    })
                } : !function () {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0, n = e.onmessage;
                        return e.onmessage = function () {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (e) {
                    v(e.data)
                }, r = function (e) {
                    i.port2.postMessage(e)
                }) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement, r = function (e) {
                    var t = f.createElement("script");
                    t.onreadystatechange = function () {
                        v(e), t.onreadystatechange = null, o.removeChild(t), t = null
                    }, o.appendChild(t)
                }) : r = function (e) {
                    setTimeout(v, 0, e)
                } : (a = "setImmediate$" + Math.random() + "$", s = function (t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && v(+t.data.slice(a.length))
                }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function (t) {
                    e.postMessage(a + t, "*")
                }), d.setImmediate = function (e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var o = {callback: e, args: t};
                    return l[c] = o, r(c), c++
                }, d.clearImmediate = p
            }

            function p(e) {
                delete l[e]
            }

            function v(e) {
                if (u) setTimeout(v, 0, e); else {
                    var t = l[e];
                    if (t) {
                        u = !0;
                        try {
                            !function (e) {
                                var t = e.callback, r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            p(e), u = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, n(0), n(1))
}, function (e, t, n) {
    var r = n(9);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {hmr: !0, transform: void 0};
    n(3)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(2)(void 0)).push([e.i, "/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n", ""])
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function (e, t, n) {
    var r = n(12);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = {hmr: !0, transform: void 0};
    n(3)(r, o);
    r.locals && (e.exports = r.locals)
}, function (e, t, n) {
    (e.exports = n(2)(void 0)).push([e.i, '/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n', ""])
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n, r, o, i, a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        "undefined" != typeof self && self, i = function () {
            return function (e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {i: r, l: !1, exports: {}};
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }

                return n.m = e, n.c = t, n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 9)
            }([function (e, t, n) {
                var r = n(14), o = n(5);
                e.exports = {HocrDOM: r, HocrPropertyParser: o}
            }, function (e, t) {
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map(function (t) {
                            var n = function (e, t) {
                                var n = e[1] || "", r = e[3];
                                if (!r) return n;
                                if (t && "function" == typeof btoa) {
                                    var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                        i = r.sources.map(function (e) {
                                            return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                        });
                                    return [n].concat(i).concat([o]).join("\n")
                                }
                                var a;
                                return [n].join("\n")
                            }(t, e);
                            return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                        }).join("")
                    }, t.i = function (e, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            "number" == typeof i && (r[i] = !0)
                        }
                        for (o = 0; o < e.length; o++) {
                            var a = e[o];
                            "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                        }
                    }, t
                }
            }, function (e, t, n) {
                var r = "undefined" != typeof document;
                if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var o = n(13), i = {}, a = r && (document.head || document.getElementsByTagName("head")[0]), s = null,
                    c = 0, l = !1, u = function () {
                    }, f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function d(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t], r = i[n.id];
                        if (r) {
                            r.refs++;
                            for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                            for (; o < n.parts.length; o++) r.parts.push(v(n.parts[o]));
                            r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                        } else {
                            var a = [];
                            for (o = 0; o < n.parts.length; o++) a.push(v(n.parts[o]));
                            i[n.id] = {id: n.id, refs: 1, parts: a}
                        }
                    }
                }

                function p() {
                    var e = document.createElement("style");
                    return e.type = "text/css", a.appendChild(e), e
                }

                function v(e) {
                    var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
                    if (r) {
                        if (l) return u;
                        r.parentNode.removeChild(r)
                    }
                    if (f) {
                        var o = c++;
                        r = s || (s = p()), t = g.bind(null, r, o, !1), n = g.bind(null, r, o, !0)
                    } else r = p(), t = function (e, t) {
                        var n = t.css, r = t.media, o = t.sourceMap;
                        r && e.setAttribute("media", r);
                        o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                        if (e.styleSheet) e.styleSheet.cssText = n; else {
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n))
                        }
                    }.bind(null, r), n = function () {
                        r.parentNode.removeChild(r)
                    };
                    return t(e), function (r) {
                        if (r) {
                            if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                            t(e = r)
                        } else n()
                    }
                }

                e.exports = function (e, t, n) {
                    l = n;
                    var r = o(e, t);
                    return d(r), function (t) {
                        for (var n = [], a = 0; a < r.length; a++) {
                            var s = r[a];
                            (c = i[s.id]).refs--, n.push(c)
                        }
                        t ? d(r = o(e, t)) : r = [];
                        for (a = 0; a < n.length; a++) {
                            var c;
                            if (0 === (c = n[a]).refs) {
                                for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                                delete i[c.id]
                            }
                        }
                    }
                };
                var h, m = (h = [], function (e, t) {
                    return h[e] = t, h.filter(Boolean).join("\n")
                });

                function g(e, t, n, r) {
                    var o = n ? "" : r.css;
                    if (e.styleSheet) e.styleSheet.cssText = m(t, o); else {
                        var i = document.createTextNode(o), a = e.childNodes;
                        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                    }
                }
            }, function (e, t) {
                e.exports = function (e, t, n, r, o, i) {
                    var a, c = e = e || {}, l = s(e.default);
                    "object" !== l && "function" !== l || (a = e, c = e.default);
                    var u, f = "function" == typeof c ? c.options : c;
                    if (t && (f.render = t.render, f.staticRenderFns = t.staticRenderFns, f._compiled = !0), n && (f.functional = !0), o && (f._scopeId = o), i ? (u = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
                    }, f._ssrRegister = u) : r && (u = r), u) {
                        var d = f.functional, p = d ? f.render : f.beforeCreate;
                        d ? (f._injectStyles = u, f.render = function (e, t) {
                            return u.call(t), p(e, t)
                        }) : f.beforeCreate = p ? [].concat(p, u) : [u]
                    }
                    return {esModule: a, exports: c, options: f}
                }
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = n(0), o = s(n(6)), i = s(n(18)), a = s(n(19));

                function s(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                t.default = {
                    name: "HocrViewer",
                    components: {HocrToolbar: o.default},
                    props: {
                        hocr: {type: String, required: !0},
                        initialZoom: {type: Number, default: 1},
                        featureBackgroundImage: {type: Boolean, default: !1},
                        featureContentEditable: {type: Boolean, default: !0},
                        featureFont: {type: Boolean, default: !0},
                        featureLayout: {type: Boolean, default: !0},
                        featureScaleFont: {type: Boolean, default: !1},
                        featureTransparentText: {type: Boolean, default: !1},
                        featureTooltip: {type: Boolean, default: !1},
                        featureHighlight: {type: Boolean, default: !0},
                        featureHighlightPage: {type: Boolean, default: !1},
                        featureHighlightNotPage: {type: Boolean, default: !1},
                        featureHighlightBlank: {type: Boolean, default: !0},
                        featureHighlightInlineNotBlank: {type: Boolean, default: !0},
                        featureHighlightInlineBlank: {type: Boolean, default: !1},
                        featureHighlightLine: {type: Boolean, default: !0},
                        featureHighlightPar: {type: Boolean, default: !0},
                        featureHighlightCarea: {type: Boolean, default: !0},
                        featureDisableEmStrong: {type: Boolean, default: !0},
                        enableToolbar: {type: Boolean, default: !0},
                        expandToolbar: {type: Boolean, default: !1},
                        imagePrefix: {type: String, default: ""},
                        font: {type: String, default: "sans-serif"},
                        fontsAvailable: {
                            type: Object, default: function () {
                                return {
                                    "sans-serif": {},
                                    serif: {},
                                    monospace: {},
                                    UnifrakturCook: {cssUrl: "https://fonts.googleapis.com/css?family=UnifrakturCook:700"},
                                    UnifrakturMaguntia: {cssUrl: "https://fonts.googleapis.com/css?family=UnifrakturMaguntia"},
                                    "Old Standard TT": {cssUrl: "https://fonts.googleapis.com/css?family=Old+Standard+TT"},
                                    Cardo: {cssUrl: "https://fonts.googleapis.com/css?family=Cardo"},
                                    "Noto Serif": {cssUrl: "https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700&subset=latin-ext"},
                                    "Libre Baskerville": {cssUrl: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&subset=latin-ext"}
                                }
                            }
                        }
                    },
                    data: function () {
                        var e = this;
                        return {
                            enableLayout: !1,
                            config: i.default,
                            featuresEnabled: Object.keys(this.$props).filter(function (t) {
                                return t.startsWith("feature") && e[t]
                            }).map(function (e) {
                                return e.replace("feature", "")
                            }),
                            fontFamily: this.font,
                            currentZoom: this.initialZoom
                        }
                    },
                    computed: {
                        classList: function () {
                            var e = {"hocr-viewer": !0, "hocr-viewer-toolbar-enabled": this.enableToolbar};
                            return this.featuresEnabled.map(function (t) {
                                return e["hocr-viewer-feature-" + t] = !0
                            }), e
                        }, containerStyle: function () {
                            var e = r.HocrDOM.queryHocr(this.hocrDom, "page");
                            if (!e) return console.warn("No .ocr_page element found. Is this hOCR?"), {};
                            var t = r.HocrDOM.getHocrProperties(r.HocrDOM.queryHocr(e)).bbox, n = t[3] - t[1];
                            return {
                                transform: "scale(" + this.currentZoom + ")",
                                "transform-origin": "top left",
                                height: n + "px"
                            }
                        }, featuresAvailable: function () {
                            var e = {};
                            return Object.keys(this.$props).filter(function (e) {
                                return e.startsWith("feature")
                            }).map(function (e) {
                                return e.replace("feature", "")
                            }).map(function (t) {
                                t in e || (e[t] = !0)
                            }), Object.assign(e, a.default), e
                        }, features: function () {
                            var e = this, t = {};
                            return Object.keys(a.default).map(function (n) {
                                if (e.featuresEnabled.includes(n)) {
                                    var r = a.default[n];
                                    t[n] = "function" != typeof r || new r(e)
                                }
                            }), t
                        }, hocrDom: function () {
                            var e = this;
                            console.log("enter hocrDom");
                            /*###############################################*/
                            window.waitInterval = setInterval(function () {
                                if (document.getElementsByClassName('ocr_page').length > 0 && document.getElementsByClassName('ocr_page')[0].style) {
                                    document.getElementsByClassName('ocr_page')[0].style.backgroundImage = "url(image.jpg)";
                                    var nodes = document.getElementsByTagName('details')[0].querySelector('ul').children;
                                    for (var i = 0; i < nodes.length; i++) {
                                        if (nodes[i].attributes.class.value == 'checked' && [2,3,4,5].indexOf(i) == -1) {
                                            nodes[i].click();
                                        } else if (nodes[i].attributes.class.value != 'checked' && [2,3,4,5].indexOf(i) != -1) {
                                            nodes[i].click();
                                        }
                                    }
                                    var nodes = document.getElementsByTagName('details')[1].querySelector('ul').children;
                                    for (var i = 0; i < nodes.length; i++) {
                                        if (nodes[i].attributes.class.value == 'checked') {
                                            nodes[i].click();
                                        }
                                    }
                                    document.getElementsByClassName('hocrjs-toolbar')[0].style.display = 'none';
                                    document.getElementsByClassName('ocr_page')[0].style.backgroundImage = "url(image.jpg)";
                                    $('.hocr-viewer.hocr-viewer-toolbar-enabled > .hocr-viewer-container').css('margin-left', '0px');
                                    try {
                                        stringHighlight();
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    clearInterval(window.waitInterval);

                                }
                            }, 100);

                            /*###############################################*/
                            var t = document.createElement("div");
                            return t.innerHTML = this.hocr, Object.keys(this.features).map(function (n) {
                                e.features[n].apply && e.features[n].apply(t)
                            }), t
                        }, currentZoomRounded: function () {
                            return Math.floor(1e4 * this.currentZoom) / 100
                        }
                    },
                    methods: {
                        isFeatureEnabled: function (e) {
                            return this.featuresEnabled.includes(e)
                        }, toggleFeature: function (e) {
                            this.isFeatureEnabled(e) ? this.featuresEnabled.splice(this.featuresEnabled.indexOf(e), 1) : this.featuresEnabled.push(e)
                        }, zoom: function (e) {
                            var t = this.$el.querySelector(".hocr-viewer-container"),
                                n = r.HocrDOM.getHocrProperties(r.HocrDOM.queryHocr(t)).bbox;
                            "string" == typeof e && ("height" === e ? e = window.innerHeight / n[3] : "width" === e ? e = window.innerWidth / n[2] : "reset" === e ? e = 1 : e.match(/^[+-]/) ? e = this.currentZoom + parseFloat(e) : console.error("Bad scaleFactor: '" + e + "'")), this.currentZoom = e, this.$emit("scale-to", this.config.scaleFactor)
                        }
                    }
                }
            }, function (e, t) {
                e.exports = function () {
                    function e() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        c(this, e), Object.assign(this, {
                            debug: !1,
                            allowUnknown: !1,
                            allowUnknownEngineSpecific: !0,
                            allowInvalidNumbers: !1,
                            disableCardinalityChecks: !1
                        }, n), this.parsers = {
                            baseline: this.numberParser([parseFloat, parseInt]),
                            bbox: this.numberParser(parseInt, {min: 0}, {length: 4}),
                            cflow: this.stringParser({collapse: !0}),
                            cuts: function (e) {
                                return e.map(function (e) {
                                    return t.numberParser(parseInt)(e.split(","))
                                })
                            },
                            hardbreak: this.booleanParser({collapse: !0}),
                            image: this.stringParser({collapse: !0}),
                            imagemd5: this.stringParser({collapse: !0}),
                            lpageno: this.stringParser({collapse: !0}),
                            ppageno: this.numberParser(parseInt, {min: 0}, {collapse: !0}),
                            nlp: this.numberParser(parseFloat, {min: 0, max: 100}),
                            order: this.numberParser(parseInt, {min: 0}, {collapse: !0}),
                            poly: this.numberParser(parseInt, {min: 0}, {minLength: 4, modulo: 2}),
                            scan_res: this.numberParser(parseInt, {min: 0}),
                            textangle: this.numberParser(parseFloat, {}, {collapse: !0}),
                            x_bboxes: this.numberParser(parseInt, {min: 0}),
                            x_font: this.stringParser({collapse: !0}),
                            x_fsize: this.numberParser(parseInt, {min: 0}),
                            x_confs: this.numberParser(parseFloat, {min: 0, max: 100}),
                            x_scanner: this.stringParser(),
                            x_source: this.stringParser(),
                            x_wconf: this.numberParser(parseFloat, {min: 0, max: 100})
                        }
                    }

                    return a(e, [{
                        key: "checkCardinality", value: function (e, t) {
                            var n = t.length, r = void 0 === n ? -1 : n, o = t.modulo, i = void 0 === o ? -1 : o,
                                a = t.collapse, s = void 0 !== a && a, c = t.minLength, l = void 0 === c ? 0 : c,
                                u = t.maxLength, f = void 0 === u ? Number.MAX_VALUE : u;
                            if (this.disableCardinalityChecks) return e;
                            if (s && (r = 1), r > -1 && e.length != r) throw Error("Incorrect number of arguments (" + e.length + " != " + r + ")");
                            if (i > -1 && r % i > 0) throw Error("Number of arguments not a multiple of " + i + " (" + e.length + ")");
                            if (s) return e[0];
                            if (e.length < l) throw Error("Not enough arguments (" + e.length + " < " + l + ")");
                            if (e.length > f) throw Error("Too many arguments (" + e.length + " > " + l + ")");
                            return e
                        }
                    }, {
                        key: "booleanParser", value: function () {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return function (n) {
                                return e.checkCardinality(n.map(function (e) {
                                    return Boolean.valueOf()(e)
                                }), t)
                            }
                        }
                    }, {
                        key: "stringParser", value: function () {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return function (n) {
                                return e.checkCardinality(n, t)
                            }
                        }
                    }, {
                        key: "numberParser", value: function (e) {
                            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = n.min, o = void 0 === r ? -Number.MAX_VALUE : r, i = n.max,
                                a = void 0 === i ? Number.MAX_VALUE : i,
                                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return Array.isArray(e) || (e = [e]), function (n) {
                                var r = 0;
                                return t.checkCardinality(n.map(function (n) {
                                    var i = e[r++ % e.length](n);
                                    if (!t.allowInvalidNumbers) {
                                        if (Number.isNaN(i)) throw Error("Not a number: '" + n + "'");
                                        if (i < o || i > a) throw Error("Not in range [" + o + ".." + a + "]: '" + n + "'")
                                    }
                                    return i
                                }), s)
                            }
                        }
                    }, {
                        key: "parse", value: function (e) {
                            var t = this.tokenize(e);
                            this.debug && console.log("tokenize('" + e + ")", t);
                            for (var n = {}, r = 0; r < t.length; r++) {
                                var o = t[r], i = void 0;
                                if (o in this.parsers) i = this.parsers[o]; else {
                                    if (!(this.allowUnknown || o.startsWith("x_") && this.allowUnknownEngineSpecific)) throw Error("Unknown property '" + o + "' in '" + e + "'");
                                    i = this.stringParser()
                                }
                                var a = [], s = void 0;
                                for (s = r + 1; s < t.length && ";" !== t[s]; s++) a.push(t[s]);
                                r = s;
                                try {
                                    a = i(a)
                                } catch (t) {
                                    throw console.log("Parse error in '" + e + "'"), t
                                }
                                n[o] = a
                            }
                            return this.debug && console.log("propertyMap", n), n
                        }
                    }, {
                        key: "tokenize", value: function (e) {
                            for (var t = [], n = e.split(""), r = !1, o = !1, i = [], a = "", s = function () {
                                t.push(i.join("")), i = []
                            }, c = 0; c < n.length; c++) {
                                var l = c > 0 ? n[c - 1] : "";
                                "'" !== (a = n[c]) || "\\" == l || r ? '"' !== a || "\\" == l || o ? o || r || ";" !== a ? o || r || !a.match(/\s/) ? i.push(a) : i.length > 0 && s() : (i.length > 0 && s(), ";" !== t[t.length - 1] && t.push(";")) : (r && s(), r = !r) : (o && s(), o = !o)
                            }
                            return i.length > 0 && s(), t
                        }
                    }]), e
                }()
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = n(7), o = n.n(r);
                for (var i in r) "default" !== i && function (e) {
                    n.d(t, e, function () {
                        return r[e]
                    })
                }(i);
                var a = n(17), s = !1;
                var c = function (e) {
                    s || n(15)
                }, l = n(3)(o.a, a.a, !1, c, null, null);
                l.options.__file = "src/components/HocrToolbar/index.vue", t.default = l.exports
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    name: "HocrToolbar",
                    computed: {
                        classList: function () {
                            return {"hocrjs-toolbar": !0, expanded: this.expanded}
                        }
                    },
                    props: {expandedInitial: {type: Boolean, default: !1}},
                    data: function () {
                        return {expanded: this.expandedInitial}
                    },
                    methods: {
                        toggle: function () {
                            this.expanded = !this.expanded
                        }
                    }
                }
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }();
                var o = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }

                    return r(e, null, [{
                        key: "removeCssFragment", value: function (e, t) {
                            var n = document.querySelector("#" + e);
                            n && n.remove()
                        }
                    }, {
                        key: "addCssFragment", value: function (e, t) {
                            var n = document.querySelector("#" + e);
                            n || ((n = document.createElement("style")).id = e, document.head.appendChild(n)), n.appendChild(document.createTextNode(t))
                        }
                    }]), e
                }();
                t.default = o
            }, function (e, t, n) {
                var r = i(n(10)), o = i(n(6));

                function i(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                e.exports = {HocrViewer: r.default, HocrToolbar: o.default}
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = n(4), o = n.n(r);
                for (var i in r) "default" !== i && function (e) {
                    n.d(t, e, function () {
                        return r[e]
                    })
                }(i);
                var a = n(27), s = !1;
                var c = function (e) {
                    s || n(11)
                }, l = n(3)(o.a, a.a, !1, c, null, null);
                l.options.__file = "src/components/HocrViewer/index.vue", t.default = l.exports
            }, function (e, t, n) {
                var r = n(12);
                "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
                n(2)("0cee75f0", r, !1)
            }, function (e, t, n) {
                (e.exports = n(1)(void 0)).push([e.i, '/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n.hocr-viewer.hocr-viewer-toolbar-enabled > .hocr-viewer-container {\n  transform: rotate(0);\n  margin-left: 1em;\n}\n.hocr-viewer .hocr-viewer-container {\n  min-height: 100vh;\n  position: relative !important;\n  -webkit-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  transform: rotate(0deg);\n  /* .transform(scale(0.7)); */\n  /* position: relative !important; */\n}\n.hocr-viewer .hocr-viewer-container > div {\n    overflow: auto;\n}\n.hocr-viewer .hocr-viewer-container p {\n    margin: 0;\n}\n.hocr-viewer *[class^="ocr"]:hover::before {\n  display: none;\n}\n.hocr-viewer.hocr-viewer-feature-Layout *[class^="ocr"] {\n  position: fixed;\n  white-space: nowrap;\n  justify-content: left;\n  /* align horizontal */\n  align-items: center;\n  /* align vertical */\n}\n.hocr-viewer.hocr-viewer-feature-Layout.hocr-viewer-feature-Tooltip *[class^="ocr"]:hover::before {\n  display: block;\n  background: white;\n  color: black !important;\n  border: 1px solid black;\n  font-family: monospace;\n  position: absolute;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 100%;\n  height: 15px;\n  top: -15px;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight {\n  margin: -1px;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightNotPage *[class^="ocr"]:not(.ocr_page) {\n    border: 3px solid red;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightNotPage *[class^="ocr"]:not(.ocr_page):hover {\n      background: rgba(255, 153, 153, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPage .ocr_page {\n    border: 3px solid #8B4513;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPage .ocr_page:hover {\n      background: rgba(231, 143, 80, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineNotBlank .ocr_line *[class^="ocr"]:not(.hocrjs-blank) {\n    border: 3px solid green;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineNotBlank .ocr_line *[class^="ocr"]:not(.hocrjs-blank):hover {\n      background: rgba(26, 255, 26, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineBlank .ocr_line *[class^="ocr"].hocrjs-blank {\n    border: 3px solid #1aff1a;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineBlank .ocr_line *[class^="ocr"].hocrjs-blank:hover {\n      background: rgba(179, 255, 179, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightLine *[class^="ocr"][class*="line"] {\n    border: 3px solid gold;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightLine *[class^="ocr"][class*="line"]:hover {\n      background: rgba(255, 239, 153, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPar .ocr_par {\n    border: 3px solid purple;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPar .ocr_par:hover {\n      background: rgba(255, 26, 255, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightCarea .ocr_carea {\n    border: 3px solid blue;\n}\n.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightCarea .ocr_carea:hover {\n      background: rgba(153, 153, 255, 0.2);\n}\n.hocr-viewer.hocr-viewer-feature-BackgroundImage {\n  background-repeat: no-repeat;\n}\n.hocr-viewer.hocr-viewer-feature-BackgroundImage .ocr_page {\n    background-size: contain;\n}\n.hocr-viewer.hocr-viewer-feature-DisableEmStrong em {\n  font-style: normal;\n}\n.hocr-viewer.hocr-viewer-feature-DisableEmStrong strong {\n  font-weight: normal;\n}\n.hocr-viewer.hocr-viewer-feature-TransparentText .ocr_page {\n  color: transparent;\n}\n', ""])
            }, function (e, t) {
                e.exports = function (e, t) {
                    for (var n = [], r = {}, o = 0; o < t.length; o++) {
                        var i = t[o], a = i[0], s = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
                        r[a] ? r[a].parts.push(s) : n.push(r[a] = {id: a, parts: [s]})
                    }
                    return n
                }
            }, function (e, t, n) {
                function r(e) {
                    var t;
                    if (e.debug) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        (t = console).log.apply(t, ["# ", new Date].concat(r))
                    }
                }

                var o = new (n(5)), i = function () {
                    function e() {
                        c(this, e)
                    }

                    return a(e, null, [{
                        key: "isHocrElement", value: function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return void 0 === n._isHocrElement && (n._isHocrElement = !!Array.from(e.classList).find(function (e) {
                                return e.startsWith("ocr")
                            })), n._isHocrElement
                        }
                    }, {
                        key: "getHocrProperties", value: function (t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = n.propertyParser;
                            return i || (i = o), r._hocr || (e.isHocrElement(t, n, r) ? r._hocr = i.parse(t.getAttribute("title")) : r._hocr = {}), r._hocr
                        }
                    }, {
                        key: "queryHocr", value: function () {
                            return Array.from(e.queryHocrAll.apply(e, arguments))[0]
                        }
                    }, {
                        key: "queryHocrAll", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            (Array.isArray(t) || "string" == typeof t) && (t = {class: t}), t.tag = t.tag || "*", t.clauses = t.clauses || "", t.title && (t.clauses += '[title*="' + t.title + '"]'), t.class = t.class || "", "string" == typeof t.class && (t.class = [t.class]);
                            var o = t.class.map(function (e) {
                                return 0 === e.indexOf("ocr") ? e : "" === e ? "ocr" : 0 !== e.indexOf("x_") ? "ocr_" + e : "ocr" + e
                            }).map(function (e) {
                                return t.tag + '[class^="' + e + '"]' + t.clauses
                            }).join(",");
                            r(n, "findByOcrClass:", o);
                            var i = e.querySelectorAll(o), a = Array.from(i);
                            return t.terminal && (a = a.filter(function (e) {
                                if (!e.querySelector('*[class^="ocr"]')) return e
                            })), t.nonTerminal && (a = a.filter(function (e) {
                                if (e.querySelector('*[class^="ocr"]')) return e
                            })), t.filter && (r(n, {query: t}), a = a.filter(t.filter)), Object.create(a, i.prototype)
                        }
                    }, {
                        key: "extendPrototypes", value: function (t, n) {
                            var r = t.Element, o = t.Document;
                            [r.prototype, o.prototype].forEach(function (t) {
                                ["queryHocr", "queryHocrAll"].forEach(function (n) {
                                    t[n] = function () {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            r = arguments[1], o = t.context || this;
                                        return e[n](o, t, r)
                                    }
                                }), Object.defineProperty(t, "_hocr", {
                                    enumerable: !1,
                                    writable: !0
                                }), Object.defineProperty(t, "hocr", {
                                    get: function () {
                                        return e.getHocrProperties(this, n, this)
                                    }
                                }), Object.defineProperty(t, "_isHocrElement", {
                                    enumerable: !0,
                                    writable: !0
                                }), Object.defineProperty(t, "isHocrElement", {
                                    get: function () {
                                        return e.isHocrElement(this, n, this)
                                    }
                                })
                            }), e._initialized = !0
                        }
                    }]), e
                }();
                e.exports = i
            }, function (e, t, n) {
                var r = n(16);
                "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
                n(2)("199fb537", r, !1)
            }, function (e, t, n) {
                (e.exports = n(1)(void 0)).push([e.i, "\n@charset \"UTF-8\";\n/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n.hocrjs-toolbar {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  height: 100%;\n  border: none;\n}\n.hocrjs-toolbar .toggler {\n    float: left;\n    position: fixed;\n    left: 0;\n    font-family: monospace;\n    color: white;\n    background: #333;\n    height: 100vh;\n    width: 1em;\n}\n.hocrjs-toolbar .toggler .toggler-inner {\n      font-size: 1.5em;\n      top: 40vh;\n      position: fixed;\n}\n.hocrjs-toolbar .toggler .toggler-hide {\n      display: none;\n}\n.hocrjs-toolbar .toggler .toggler-show {\n      display: block;\n}\n.hocrjs-toolbar .wrapper {\n    position: fixed;\n    margin-left: 1em;\n    background-color: rgba(180, 180, 190, 0.85);\n    overflow: hidden;\n    left: -32em;\n    transition: all 0.5s ease;\n    height: 100vh;\n}\n.hocrjs-toolbar.expanded {\n    border-right: 3px solid #333;\n}\n.hocrjs-toolbar.expanded .wrapper {\n      padding-left: .5em;\n      padding-right: .5em;\n      width: 15em;\n      left: 0;\n}\n.hocrjs-toolbar.expanded .toggler-show {\n      display: none;\n}\n.hocrjs-toolbar.expanded .toggler-hide {\n      display: block;\n}\n.hocrjs-toolbar ul.features {\n    list-style-type: none;\n    padding: 0;\n}\n.hocrjs-toolbar ul.features li {\n      background-color: #ffcccc;\n      margin-bottom: 2px;\n      padding: 5px 0;\n}\n.hocrjs-toolbar ul.features li:before {\n        content: '\\2717   ';\n}\n.hocrjs-toolbar ul.features li.checked {\n        background-color: #ccffcc;\n}\n.hocrjs-toolbar ul.features li.checked:before {\n          content: '\\2713   ';\n}\n.hocrjs-toolbar ul.features li input[type='checkbox'] {\n        display: none;\n}\n.hocrjs-toolbar ul.features li label {\n        width: 100%;\n}\n.hocrjs-toolbar summary {\n    font-size: 120%;\n}\n.hocrjs-toolbar summary span.font {\n      font-size: 100%;\n}\n.hocrjs-toolbar select.font {\n    width: 80%;\n    font-size: 110%;\n}\n", ""])
            }, function (e, t, n) {
                var r = function () {
                    var e = this, t = e.$createElement, n = e._self._c || t;
                    return n("div", {class: e.classList}, [n("div", {
                        staticClass: "toggler",
                        on: {click: e.toggle}
                    }, [e._m(0), e._v(" "), e._m(1)]), e._v(" "), n("div", {staticClass: "wrapper"}, [n("details", {attrs: {open: ""}}, [n("summary", [e._v("Features")]), e._v(" "), n("ul", {staticClass: "features"}, e._l(Object.keys(e.$parent.featuresAvailable), function (t) {
                        return t.match(/Highlight[A-Z]/) ? e._e() : n("li", {
                            key: t,
                            class: {checked: e.$parent.isFeatureEnabled(t)},
                            on: {
                                click: function (n) {
                                    e.$parent.toggleFeature(t)
                                }
                            }
                        }, [n("label", [e._v(e._s(t))])])
                    }))]), e._v(" "), n("details", {attrs: {open: ""}}, [n("summary", [e._v("Highlighting")]), e._v(" "), n("ul", {staticClass: "features"}, e._l(Object.keys(e.$parent.featuresAvailable), function (t) {
                        return t.match(/Highlight[A-Z]/) ? n("li", {
                            key: t,
                            class: {checked: e.$parent.isFeatureEnabled(t)},
                            on: {
                                click: function (n) {
                                    e.$parent.toggleFeature(t)
                                }
                            }
                        }, [n("input", {attrs: {type: "checkbox"}}), e._v(" "), n("label", [e._v(e._s(t))])]) : e._e()
                    }))]), e._v(" "), n("details", {
                        staticClass: "hocr-toolbar-zoom",
                        attrs: {open: ""}
                    }, [n("summary", [e._v("Zoom: "), n("span", {staticClass: "zoom"}, [e._v(e._s(e.$parent.currentZoomRounded))]), e._v("%\n      ")]), e._v(" "), n("button", {
                        staticClass: "zoom",
                        on: {
                            click: function (t) {
                                e.$parent.zoom("-0.1")
                            }
                        }
                    }, [e._v("-")]), e._v(" "), n("input", {
                        attrs: {type: "range", min: "0", max: "5", step: ".02"},
                        domProps: {value: e.$parent.currentZoom},
                        on: {
                            change: function (t) {
                                e.$parent.currentZoom = t.target.value
                            }
                        }
                    }), e._v(" "), n("button", {
                        staticClass: "zoom", on: {
                            click: function (t) {
                                e.$parent.zoom("+0.1")
                            }
                        }
                    }, [e._v("+")]), e._v(" "), n("p", [n("button", {
                        staticClass: "zoom", on: {
                            click: function (t) {
                                e.$parent.zoom("height")
                            }
                        }
                    }, [e._v("Fit height")]), e._v(" "), n("button", {
                        staticClass: "zoom", on: {
                            click: function (t) {
                                e.$parent.zoom("width")
                            }
                        }
                    }, [e._v("Fit width")]), e._v(" "), n("button", {
                        staticClass: "zoom", on: {
                            click: function (t) {
                                e.$parent.zoom("reset")
                            }
                        }
                    }, [e._v("100 %")])])]), e._v(" "), e.$parent.isFeatureEnabled("Font") ? n("details", {attrs: {open: ""}}, [e._m(2), e._v(" "), n("select", {
                        staticClass: "font",
                        on: {
                            change: function (t) {
                                e.$parent.fontFamily = t.target.value
                            }
                        }
                    }, e._l(e.$parent.fontsAvailable, function (t, r) {
                        return n("option", {
                            key: r,
                            style: {"font-size": "large", "font-family": r},
                            domProps: {value: r}
                        }, [e._v("\n          " + e._s(r) + "\n        ")])
                    }))]) : e._e()])])
                };
                r._withStripped = !0;
                var o = {
                    render: r, staticRenderFns: [function () {
                        var e = this, t = e.$createElement, n = e._self._c || t;
                        return n("div", {staticClass: "toggler-inner toggler-show"}, [e._v("\n      >"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br")])
                    }, function () {
                        var e = this, t = e.$createElement, n = e._self._c || t;
                        return n("div", {staticClass: "toggler-inner toggler-hide"}, [e._v("\n      <"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br")])
                    }, function () {
                        var e = this.$createElement, t = this._self._c || e;
                        return t("summary", [this._v("Font: "), t("span", {staticClass: "font"})])
                    }]
                };
                t.a = o
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                    features: {
                        disableEmStrong: {enabled: !1},
                        contentEditable: {enabled: !1},
                        tooltips: {enabled: !0, styleId: "hocr-viewer-tooltip-style"},
                        transparentText: {enabled: !1}
                    }
                }
            }, function (e, t, n) {
                var r = u(n(20)), o = u(n(21)), i = u(n(22)), a = u(n(23)), s = u(n(24)), c = u(n(25)), l = u(n(26));

                function u(e) {
                    return e && e.__esModule ? e : {default: e}
                }

                e.exports = {
                    BackgroundImage: r.default,
                    ContentEditable: o.default,
                    Font: i.default,
                    HighlightBlank: a.default,
                    Layout: s.default,
                    ScaleFont: c.default,
                    Tooltip: l.default
                }
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = n(0);
                var i = function () {
                    function e(t) {
                        var n = t.imagePrefix, r = void 0 === n ? "" : n;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.imagePrefix = r
                    }

                    return r(e, [{
                        key: "apply", value: function (e) {
                            var t = this, n = o.HocrDOM.queryHocr(e, "page");
                            o.HocrDOM.queryHocrAll(e, {title: "image"}).forEach(function (e) {
                                var r = o.HocrDOM.getHocrProperties(e).image;
                                n.style.backgroundImage = "url(" + t.imagePrefix + r + ")"
                            })
                        }
                    }]), e
                }();
                t.default = i
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = n(0);
                var i = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }

                    return r(e, [{
                        key: "$emit", value: function () {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            console.log({args: t})
                        }
                    }, {
                        key: "apply", value: function (e) {
                            var t = this;
                            o.HocrDOM.queryHocrAll(e, {class: ["line", "x_word"], clauses: ""}).forEach(function (e) {
                                e.setAttribute("contentEditable", "true"), e.addEventListener("input", function () {
                                    return t.$emit("contentEdited", e)
                                })
                            })
                        }
                    }]), e
                }();
                t.default = i
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), i = n(0), a = n(8), s = (r = a) && r.__esModule ? r : {default: r};
                var c = function () {
                    function e(t) {
                        var n = t.fontFamily, r = void 0 === n ? "x" : n, o = t.fontsAvailable;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.fontFamily = r;
                        s.default.removeCssFragment("hocr-view-font-styles"), Object.keys(o).forEach(function (e) {
                            var t = o[e].cssUrl;
                            t && s.default.addCssFragment("hocr-view-font-styles", '@import "' + t + '";\n')
                        })
                    }

                    return o(e, [{
                        key: "apply", value: function (e) {
                            var t = this;
                            i.HocrDOM.queryHocrAll(e).forEach(function (e) {
                                e.style.fontFamily = t.fontFamily
                            })
                        }
                    }]), e
                }();
                t.default = c
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = n(0);
                var i = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }

                    return r(e, [{
                        key: "apply", value: function (e) {
                            o.HocrDOM.queryHocrAll(e).forEach(function (e) {
                                "" === e.innerHTML.trim() && e.classList.add("hocrjs-blank")
                            })
                        }
                    }]), e
                }();
                t.default = i
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = n(0);
                var i = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }

                    return r(e, [{
                        key: "apply", value: function (e) {
                            o.HocrDOM.queryHocrAll(e, {title: "bbox"}).forEach(function (e) {
                                var t = o.HocrDOM.getHocrProperties(e).bbox;
                                e.style.position = "fixed", e.style.left = t[0] + "px", e.style.top = t[1] + "px", e.style.width = t[2] - t[0] + "px", e.style.height = t[3] - t[1] + "px"
                            })
                        }
                    }]), e
                }();
                t.default = i
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), o = n(0);
                var i = function () {
                    function e(t) {
                        var n = t.fontFamily, r = void 0 === n ? "x" : n;
                        t.fonts;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.fontFamily = r, this.maxFontSize = 128, this.minFontSize = 2, this.wrapClass = "hocr-viewer-wrap", this.cache = {}
                    }

                    return r(e, [{
                        key: "apply", value: function (e) {
                            var t = this;
                            console.time("toggleScaleFont");
                            var n = document.createElement("span");
                            n.classList.add(this.wrapClass), document.body.appendChild(n), o.HocrDOM.queryHocrAll(e, {terminal: !0}).forEach(function (e) {
                                return t.scaleFont(e, n)
                            }), n.remove(), console.timeEnd("toggleScaleFont")
                        }
                    }, {
                        key: "scaleFont", value: function (e, t) {
                            var n = e.textContent.trim();
                            if (0 !== n.length) {
                                if (!(n in this.cache)) {
                                    t.style.fontFamily = e.style.fontFamily, t.innerHTML = n;
                                    var r = parseInt(e.style.height.replace("px", "")),
                                        o = parseInt(e.style.width.replace("px", "")), i = Math.min(o, r);
                                    if (i <= this.minFontSize) this.cache[n] = this.minFontSize; else {
                                        for (t.style.fontSize = i + "px", i > this.minFontSize && t.offsetHeight > r && (i -= t.offsetHeight - r, t.style.fontSize = i + "px"); i > this.minFontSize && t.offsetWidth > o;) t.style.fontSize = --i + "px";
                                        this.cache[n] = i - 1
                                    }
                                }
                                e.style.fontSize = this.cache[n] + "px"
                            }
                        }
                    }]), e
                }();
                t.default = i
            }, function (e, t, n) {
                Object.defineProperty(t, "__esModule", {value: !0});
                var r, o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }

                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(), i = n(0), a = n(8), s = (r = a) && r.__esModule ? r : {default: r};
                var c = function () {
                    function e() {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.styleId = "hocr-viewer-tooltip-style"
                    }

                    return o(e, [{
                        key: "apply", value: function (e) {
                            var t = {}, n = !0, r = !1, o = void 0;
                            try {
                                for (var a, c = i.HocrDOM.queryHocrAll(e)[Symbol.iterator](); !(n = (a = c.next()).done); n = !0) {
                                    t[a.value.getAttribute("class")] = !0
                                }
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    !n && c.return && c.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            console.log("Detected OCR classes", Object.keys(t)), s.default.removeCssFragment(this.styleId), s.default.addCssFragment(this.styleId, Object.keys(t).map(function (e) {
                                return "." + e + ':hover::before { content: "' + e + '"; }\n'
                            }).join("\n"))
                        }
                    }]), e
                }();
                t.default = c
            }, function (e, t, n) {
                var r = function () {
                    var e = this, t = e.$createElement, n = e._self._c || t;
                    return n("div", {class: e.classList}, [e.enableToolbar ? n("hocr-toolbar", {attrs: {expandedInitial: e.expandToolbar}}) : e._e(), e._v(" "), n("div", {
                        staticClass: "hocr-viewer-container",
                        style: e.containerStyle,
                        domProps: {innerHTML: e._s(e.hocrDom.innerHTML)}
                    })], 1)
                };
                r._withStripped = !0;
                var o = {render: r, staticRenderFns: []};
                t.a = o
            }])
        }, "object" === s(t) && "object" === s(e) ? e.exports = i() : (r = [], void 0 === (o = "function" == typeof(n = i) ? n.apply(t, r) : n) || (e.exports = o))
    }).call(t, n(14)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}]);