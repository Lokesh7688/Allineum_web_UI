// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{"function": "__e"}, {"function": "__cid"}],
            "tags": [{"function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1}],
            "predicates": [{"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js"}],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []


    };


    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, ba = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, da = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: ba(a)}
    }, fa = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf; else {
        var ia;
        a:{
            var ja = {a: !0}, ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {
            }
            ia = !1
        }
        ha = ia ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ha, oa = function (a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Aj = b.prototype
    }, pa = this || self, qa = function (a) {
        return a
    };
    var ra = function () {
    }, sa = function (a) {
        return "function" == typeof a
    }, h = function (a) {
        return "string" == typeof a
    }, ta = function (a) {
        return "number" == typeof a && !isNaN(a)
    }, ua = Array.isArray, va = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    }, wa = function (a, b) {
        if (a && ua(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    }, xa = function (a, b) {
        if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b -
            a + 1) + a)
    }, Ba = function (a, b) {
        for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
        return !1
    }, Ca = function (a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }, Ea = function (a) {
        return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }, Ga = function (a) {
        return Math.round(Number(a)) || 0
    }, Ha = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, La = function (a) {
        var b = [];
        if (ua(a)) for (var c =
            0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, Ma = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, Na = function () {
        return new Date(Date.now())
    }, Oa = function () {
        return Na().getTime()
    }, ya = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    ya.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    ya.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    var Pa = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        }, Qa = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {
                    }
                }
            }
        }, Sa = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        }, Ta = function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !0;
            return !1
        }, Va = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        }, Wa = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        }, Xa = /^\w{1,9}$/,
        Ya = function (a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ca(a, function (d, e) {
                Xa.test(d) && e && c.push(d)
            });
            return c.join(b)
        };
    var Za, $a = function () {
        if (void 0 === Za) {
            var a = null, b = pa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: qa, createScript: qa, createScriptURL: qa})
                } catch (c) {
                    pa.console && pa.console.error(c.message)
                }
                Za = a
            } else Za = a
        }
        return Za
    };
    var bb = function (a, b) {
        this.o = b === ab ? a : ""
    };
    bb.prototype.toString = function () {
        return this.o + ""
    };
    var ab = {}, eb = function (a) {
        var b = $a(), c = b ? b.createScriptURL(a) : a;
        return new bb(c, ab)
    };
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var gb;
    a:{
        var hb = pa.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                gb = ib;
                break a
            }
        }
        gb = ""
    }
    var jb = function (a) {
        return -1 != gb.indexOf(a)
    };
    var lb = {}, mb = function (a, b, c) {
        this.o = c === lb ? a : ""
    };
    mb.prototype.toString = function () {
        return this.o.toString()
    };
    var nb = function (a) {
        return a instanceof mb && a.constructor === mb ? a.o : "type_error:SafeHtml"
    }, ob = function (a) {
        var b = $a(), c = b ? b.createHTML(a) : a;
        return new mb(c, null, lb)
    }, pb = new mb(pa.trustedTypes && pa.trustedTypes.emptyHTML || "", 0, lb);

    function qb(a, b) {
        a.src = b instanceof bb && b.constructor === bb ? b.o : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };var rb = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }, ub = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var vb = function (a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }(function () {
        var a = document.createElement("div"), b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = nb(pb);
        return !c.parentElement
    }), wb = function (a, b) {
        if (vb()) for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = nb(b)
    };
    var l = window, B = document, xb = navigator, yb = B.currentScript && B.currentScript.src, zb = function (a, b) {
            var c = l[a];
            l[a] = void 0 === c ? b : c;
            return l[a]
        }, Ab = function (a) {
            var b = B.getElementsByTagName("script")[0] || B.body || B.head;
            b.parentNode.insertBefore(a, b)
        }, Bb = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, Cb = {async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1}, Db = function (a, b, c, d) {
            var e = B.createElement("script");
            d && Ca(d, function (f, g) {
                f = f.toLowerCase();
                Cb.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            qb(e, eb(a));
            Bb(e, b);
            c && (e.onerror = c);
            Ab(e);
            return e
        }, Eb = function () {
            if (yb) {
                var a = yb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        }, Ib = function (a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = B.body && B.body.lastChild || B.body || B.head;
            d.parentNode.insertBefore(c,
                d);
            Bb(c, b);
            void 0 !== a && (c.src = a);
            return c
        }, Jb = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        }, Kb = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, Lb = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }, G = function (a) {
            l.setTimeout(a, 0)
        }, Mb = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        }, Nb = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        }, Ob = function (a) {
            var b = B.createElement("div"), c = ob("A<div>" + a + "</div>");
            wb(b, c);
            b = b.lastChild;
            for (var d = []; b.firstChild;) d.push(b.removeChild(b.firstChild));
            return d
        }, Pb = function (a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Qb = function (a) {
            xb.sendBeacon && xb.sendBeacon(a) || Jb(a)
        }, Rb = function (a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        }, Sb = function (a) {
            var b = B.featurePolicy;
            return b && sa(b.features) ? -1 !== b.features().indexOf(a) : !1
        };/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Yb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Zb = function (a) {
        if (null == a) return String(a);
        var b = Yb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, $b = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, ac = function (a) {
        if (!a || "object" != Zb(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !$b(a, "constructor") && !$b(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || $b(a, b)
    }, H = function (a, b) {
        var c = b || ("array" == Zb(a) ? [] : {}), d;
        for (d in a) if ($b(a, d)) {
            var e = a[d];
            "array" == Zb(e) ? ("array" != Zb(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : ac(e) ? (ac(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e
        }
        return c
    };
    var bc = function (a) {
        if (void 0 === a || ua(a) || ac(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var cc = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            Mg: a("consent"),
            Ng: a("consent_always_fire"),
            af: a("convert_case_to"),
            bf: a("convert_false_to"),
            cf: a("convert_null_to"),
            df: a("convert_true_to"),
            ef: a("convert_undefined_to"),
            ij: a("debug_mode_metadata"),
            kj: a("event_data_overrides"),
            mb: a("function"),
            Hh: a("instance_name"),
            Jh: a("live_only"),
            Kh: a("malware_disabled"),
            Lh: a("metadata"),
            lj: a("original_activity_id"),
            mj: a("original_vendor_template_id"),
            Nh: a("once_per_event"),
            Hf: a("once_per_load"),
            oj: a("priority_override"),
            pj: a("respected_consent_types"),
            Lf: a("setup_tags"),
            Nf: a("tag_id"),
            Of: a("teardown_tags")
        }
    }();
    var zc;
    var Ac = [], Bc = [], Cc = [], Jc = [], Kc = [], Lc = {}, Mc, Nc, Oc, Pc = function (a, b) {
        var c = a["function"];
        if (!c) throw Error("Error: No function name given for function call.");
        var d = Lc[c], e = {}, f;
        for (f in a) if (a.hasOwnProperty(f)) if (0 === f.indexOf("vtp_")) d && b && b.Zf && b.Zf(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f]; else if (f === cc.Ng.toString() && a[f]) {
        }
        d && b && b.Yf && (e.vtp_gtmCachedValues = b.Yf);
        return void 0 !== d ? d(e) : zc(c, e, b)
    }, Rc = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = Qc(a[e], b, c));
        return d
    }, Qc = function (a, b, c) {
        if (ua(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(Qc(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var g = Ac[f];
                    if (!g || b.He(g)) return;
                    c[f] = !0;
                    try {
                        var k = Rc(g, b, c);
                        k.vtp_gtmEventId = b.id;
                        d = Pc(k, b);
                        Oc && (d = Oc.bi(d, k))
                    } catch (z) {
                        b.mg && b.mg(z, Number(f)), d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var m = 1; m < a.length; m += 2) d[Qc(a[m], b, c)] = Qc(a[m + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                        var q = Qc(a[p], b, c);
                        Nc && (n = n || q === Nc.Zc);
                        d.push(q)
                    }
                    return Nc && n ? Nc.fi(d) : d.join("");
                case "escape":
                    d = Qc(a[1], b, c);
                    if (Nc && ua(a[1]) && "macro" === a[1][0] && Nc.Ai(a)) return Nc.Qi(d);
                    d = String(d);
                    for (var t = 2; t < a.length; t++) dc[a[t]] && (d = dc[a[t]](d));
                    return d;
                case "tag":
                    var u = a[1];
                    if (!Jc[u]) throw Error("Unable to resolve tag reference " +
                        u + ".");
                    return d = {dg: a[2], index: u};
                case "zb":
                    var r = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                    r["function"] = a[1];
                    var v = Sc(r, b, c), x = !!a[4];
                    return x || 2 !== v ? x !== (1 === v) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Sc = function (a, b, c) {
        try {
            return Mc(Rc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Vc = function (a) {
        function b(t) {
            for (var u = 0; u < t.length; u++) d[t[u]] = !0
        }

        for (var c = [], d = [], e = Tc(a), f = 0; f < Bc.length; f++) {
            var g = Bc[f], k = Uc(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else null === k && b(g.block || []);
        }
        for (var p = [], q = 0; q < Jc.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }, Uc = function (a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e) return !1;
            if (2 === e) return null
        }
        for (var f =
            a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (2 === k) return null;
            if (1 === k) return !1
        }
        return !0
    }, Tc = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = Sc(Cc[c], a));
            return b[c]
        }
    };
    var Wc = {
        bi: function (a, b) {
            b[cc.af] && "string" === typeof a && (a = 1 == b[cc.af] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(cc.cf) && null === a && (a = b[cc.cf]);
            b.hasOwnProperty(cc.ef) && void 0 === a && (a = b[cc.ef]);
            b.hasOwnProperty(cc.df) && !0 === a && (a = b[cc.df]);
            b.hasOwnProperty(cc.bf) && !1 === a && (a = b[cc.bf]);
            return a
        }
    };
    var M = {
        fc: "_ee",
        dd: "_syn_or_mod",
        rj: "_uei",
        be: "_eu",
        nj: "_pci",
        Db: "event_callback",
        Pc: "event_timeout",
        Da: "gtag.config",
        La: "gtag.get",
        xa: "purchase",
        Bb: "refund",
        hb: "begin_checkout",
        yb: "add_to_cart",
        zb: "remove_from_cart",
        Wg: "view_cart",
        hf: "add_to_wishlist",
        Ka: "view_item",
        Tb: "view_promotion",
        Kc: "select_promotion",
        Fd: "select_item",
        Ab: "view_item_list",
        ff: "add_payment_info",
        Vg: "add_shipping_info",
        Oa: "value_key",
        Wa: "value_callback",
        Ea: "allow_ad_personalization_signals",
        Zb: "restricted_data_processing",
        Vb: "allow_google_signals",
        Ha: "cookie_expires",
        Wb: "cookie_update",
        ac: "session_duration",
        Tc: "session_engaged_time",
        Pa: "user_properties",
        qa: "transport_url",
        R: "ads_data_redaction",
        ya: "user_data",
        Xb: "first_party_collection",
        D: "ad_storage",
        I: "analytics_storage",
        Ze: "region",
        $e: "wait_for_update",
        Ga: "conversion_linker",
        Fa: "conversion_cookie_prefix",
        fa: "value",
        da: "currency",
        Bf: "trip_type",
        X: "items",
        uf: "passengers",
        Id: "allow_custom_scripts",
        bc: "session_id",
        zf: "quantity",
        Za: "transaction_id",
        kb: "language",
        Nc: "country",
        Lc: "allow_enhanced_conversions",
        Nd: "aw_merchant_id",
        Ld: "aw_feed_country",
        Md: "aw_feed_language",
        Kd: "discount",
        na: "developer_id",
        Uc: "delivery_postal_code",
        Td: "estimated_delivery_date",
        Rd: "shipping",
        Yd: "new_customer",
        Od: "customer_lifetime_value",
        Sd: "enhanced_conversions",
        Ub: "page_view",
        oa: "linker",
        O: "domains",
        Gb: "decorate_forms",
        rf: "enhanced_conversions_automatic_settings",
        fh: "auto_detection_enabled",
        sf: "ga_temp_client_id"
    };
    M.Gd = "user_engagement", M.Qg = "app_remove", M.Rg = "app_store_refund", M.Sg = "app_store_subscription_cancel", M.Tg = "app_store_subscription_convert", M.Ug = "app_store_subscription_renew", M.Xg = "first_open", M.Yg = "first_visit", M.Zg = "in_app_purchase", M.$g = "session_start", M.ah = "user_data_login", M.bh = "user_data_logout", M.dh = "allow_display_features", M.Ma = "campaign", M.gh = "content", M.hh = "id", M.ih = "medium", M.jh = "name", M.kh = "source", M.lh = "term", M.Cb = "client_id", M.ma = "cookie_domain", M.Mc = "cookie_name", M.ib = "cookie_path",
        M.Na = "cookie_flags", M.kf = "custom_map", M.Vd = "groups", M.jj = "non_interaction", M.Hb = "page_location", M.tf = "page_path", M.Ya = "page_referrer", M.Zd = "page_title", M.$b = "send_page_view", M.lb = "send_to", M.$d = "session_engaged", M.Rc = "_logged_in_state", M.ae = "session_number", M.Dh = "tracking_id", M.$a = "url_passthrough", M.Fb = "accept_incoming", M.Yb = "url_position", M.xf = "phone_conversion_number", M.vf = "phone_conversion_callback", M.wf = "phone_conversion_css_class", M.yf = "phone_conversion_options", M.zh = "phone_conversion_ids",
        M.yh = "phone_conversion_country_code", M.jf = "aw_remarketing", M.Jd = "aw_remarketing_only", M.Hd = "gclid", M.eh = "auid", M.qh = "affiliation", M.qf = "tax", M.Qd = "list_name", M.pf = "checkout_step", M.nf = "checkout_option", M.rh = "coupon", M.sh = "promotions", M.Ib = "user_id", M.Ah = "retoken", M.ca = "cookie_prefix", M.lf = "disable_merchant_reported_purchases", M.ph = "dc_natural_search", M.oh = "dc_custom_params", M.wh = "method", M.Ch = "search_term", M.nh = "content_type", M.xh = "optimize_id", M.th = "experiments", M.Xa = "google_signals", M.Qc = "google_tld",
        M.Vc = "update", M.Ud = "firebase_id", M.Eb = "ga_restrict_domain", M.Oc = "event_settings", M.Pd = "dynamic_event_settings", M.cc = "user_data_settings", M.Bh = "screen_name", M.vh = "_x_19", M.jb = "_ecid", M.uh = "_x_20", M.Xd = "internal_traffic_results", M.Af = "traffic_type", M.Sc = "referral_exclusion_definition", M.Wd = "ignore_referrer", M.mh = "content_group";
    M.Ef = [M.xa, M.Bb, M.hb, M.yb, M.zb, M.Wg, M.hf, M.Ka, M.Tb, M.Kc, M.Ab, M.Fd, M.ff, M.Vg];
    M.Df = [M.Ea, M.Vb, M.Wb];
    M.Ff = [M.Ha, M.Pc, M.ac, M.Tc];
    var wd = {}, xd = function (a, b) {
        wd[a] = wd[a] || [];
        wd[a][b] = !0
    }, yd = function (a) {
        for (var b = [], c = wd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var zd = function (a) {
        xd("GTM", a)
    };
    var Ad = new function (a, b) {
        this.o = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Cd = function () {
        var a = Bd;
        if (a.Fe && a.hasOwnProperty("Fe")) return a.Fe;
        var b = new a;
        return a.Fe = b
    };
    var Bd = function () {
        var a = {};
        this.o = function () {
            var b = Ad.o, c = Ad.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function () {
            a[Ad.o] = !0
        }
    };
    var Dd = [];

    function Kd() {
        var a = zb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ld,
            update: Md,
            addListener: Nd,
            notifyListeners: Od,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Ld(a, b, c, d, e, f) {
        var g = Kd();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries, m = k[a] || {}, n = m.region, p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {region: p, initial: "granted" === b, update: m.update, quiet: q};
                if ("" !== d || !1 !== m.initial) k[a] = t;
                q && l.setTimeout(function () {
                    k[a] === t && t.quiet && (t.quiet = !1, Pd(a), Od(), xd("TAGGING", 2))
                }, f)
            }
        }
    }

    function Md(a, b) {
        var c = Kd();
        c.active = !0;
        if (void 0 != b) {
            var d = Qd(a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Qd(a);
            f.quiet ? (f.quiet = !1, Pd(a)) : g !== d && Pd(a)
        }
    }

    function Nd(a, b) {
        Dd.push({ue: a, oi: b})
    }

    function Pd(a) {
        for (var b = 0; b < Dd.length; ++b) {
            var c = Dd[b];
            ua(c.ue) && -1 !== c.ue.indexOf(a) && (c.qg = !0)
        }
    }

    function Od(a) {
        for (var b = 0; b < Dd.length; ++b) {
            var c = Dd[b];
            if (c.qg) {
                c.qg = !1;
                try {
                    c.oi({ai: a})
                } catch (d) {
                }
            }
        }
    }

    var Qd = function (a) {
            var b = Kd().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        }, Rd = function (a) {
            return (Kd().entries[a] || {}).initial
        }, Sd = function (a) {
            return !(Kd().entries[a] || {}).quiet
        }, Td = function () {
            return Cd().o() ? Kd().active : !1
        }, Ud = function () {
            return Kd().usedDefault
        }, Vd = function (a, b) {
            Kd().addListener(a, b)
        }, Wd = function (a) {
            Kd().notifyListeners(a)
        }, Xd = function (a, b) {
            function c() {
                for (var e = 0; e < b.length; e++) if (!Sd(b[e])) return !0;
                return !1
            }

            if (c()) {
                var d = !1;
                Vd(b, function (e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Yd = function (a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Qd(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }

            var d = h(b) ? [b] : b, e = {};
            c().length !== d.length && Vd(d, function (f) {
                var g = c();
                0 < g.length && (f.ue = g, a(f))
            })
        };

    function Zd(a) {
        for (var b = [], c = 0; c < $d.length; c++) {
            var d = a($d[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }

    var $d = [M.D, M.I], ae = function (a) {
        var b = a[M.Ze];
        b && zd(40);
        var c = a[M.$e];
        c && zd(41);
        for (var d = ua(b) ? b : [b], e = {Pb: 0}; e.Pb < d.length; e = {Pb: e.Pb}, ++e.Pb) Ca(a, function (f) {
            return function (g, k) {
                if (g !== M.Ze && g !== M.$e) {
                    var m = d[f.Pb];
                    Kd().set(g, k, m, "IN", "IN-RJ", c)
                }
            }
        }(e))
    }, be = 0, ce = function (a, b) {
        Ca(a, function (e, f) {
            Kd().update(e, f)
        });
        Wd(b);
        var c = Oa(), d = c - be;
        be && 0 <= d && 1E3 > d && zd(66);
        be = c
    }, de = function (a) {
        var b = Qd(a);
        return void 0 != b ? b : !0
    }, ee = function () {
        return "G1" + Zd(Qd)
    }, fe = function () {
        return "G1" +
            Zd(Rd)
    }, ge = function (a, b) {
        Yd(a, b)
    }, he = function (a, b) {
        Xd(a, b)
    };
    var je = function (a) {
        return ie ? B.querySelectorAll(a) : null
    }, ke = function (a, b) {
        if (!ie) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!B.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, le = !1;
    if (B.querySelectorAll) try {
        var me = B.querySelectorAll(":root");
        me && 1 == me.length && me[0] == B.documentElement && (le = !0)
    } catch (a) {
    }
    var ie = le;
    var ne, oe = !1, pe = function (a) {
        if (!oe) {
            oe = !0;
            ne = ne || {}
        }
        return ne[a]
    };
    var qe = function (a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle) return !0;
        var c = l.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity, g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = l.getComputedStyle(d,
                null))
        }
        return !1
    };
    var ze = /:[0-9]+$/, Ae = function (a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }, De = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = Be(a.protocol) || Be(l.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : l.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
            (a.hostname = (a.hostname || l.location.hostname).replace(ze, "").toLowerCase());
        return Ce(a, b, c, d, e)
    }, Ce = function (a, b, c, d, e) {
        var f, g = Be(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Ee(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(ze, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || xd("TAGGING",
                    1);
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                0 <= va(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Ae(f, e, void 0));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, Be = function (a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }, Ee = function (a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }, Ne = function (a) {
        var b = B.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || xd("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(ze, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }, Oe = function (a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function (p) {
                return void 0 != p
            }).join("&")
        }

        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = Ne(a), f = a.split(/[?#]/)[0], g = e.search, k = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === k[0] && (k = k.substring(1));
        g = c(g);
        k = c(k);
        "" !== g && (g = "?" + g);
        "" !== k && (k = "#" + k);
        var m = "" + f + g + k;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    };
    var Pe = {}, Qe = !0, Re = !1;
    Pe.Kg = "true";
    var Se = function (a) {
        if ("false" === Pe.Kg || !Qe) return !1;
        if (Re) return !0;
        var b = pe("AW-" + a);
        return !!b && !!b.preAutoPii
    };
    var Te = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), Ue = new RegExp(/@(gmail|googlemail)\./i),
        Ve = new RegExp(/support|noreply/i), We = "SCRIPT STYLE IMG SVG PATH BR".split(" "), Xe = ["BR"], Ye = {};

    function Ze(a) {
        var b;
        if (a === B.body) b = "body"; else {
            var c;
            if (a.id) c = "#" + a.id; else {
                var d;
                if (a.parentElement) {
                    var e;
                    a:{
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                                e = g + 1;
                                break a
                            }
                            e = -1
                        } else e = 1
                    }
                    d = Ze(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }

    function $e(a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }

    function af(a) {
        if (0 == a.length) return null;
        var b;
        b = $e(a, function (c) {
            return !Ve.test(c.wa)
        });
        b = $e(b, function (c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = $e(b, function (c) {
            return !qe(c.element)
        });
        return b[0]
    }

    var bf = function (a) {
        a = a || {De: !0, Ee: !0};
        a.eb = a.eb || {email: !0, phone: !0, Wf: !0};
        var b, c = a, d = !!c.De + "." + !!c.Ee;
        c && c.od && c.od.length && (d += "." + c.od.join("."));
        c && c.eb && (d += "." + c.eb.email + "." + c.eb.phone + "." + c.eb.Wf);
        b = d;
        var e = Ye[b];
        if (e && 200 > Oa() - e.timestamp) return e.result;
        var f;
        var g = [], k = B.body;
        if (k) {
            for (var m = k.querySelectorAll("*"), n = 0; n < m.length && 1E4 > n; n++) {
                var p = m[n];
                if (!(0 <= We.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                    for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++) if (!(0 <=
                        Xe.indexOf(p.children[t].tagName.toUpperCase()))) {
                        q = !0;
                        break
                    }
                    q || g.push(p)
                }
            }
            f = {elements: g, status: 1E4 < m.length ? "2" : "1"}
        } else f = {elements: g, status: "4"};
        var u = f, r = u.status, v;
        if (a.eb && a.eb.email) {
            for (var x = u.elements, z = [], w = 0; w < x.length; w++) {
                var y = x[w], A = y.textContent;
                y.value && (A = y.value);
                if (A) {
                    var C = A.match(Te);
                    if (C) {
                        var F = C[0], E;
                        if (l.location) {
                            var D = Ce(l.location, "host", !0);
                            E = 0 <= F.toLowerCase().indexOf(D)
                        } else E = !1;
                        E || z.push({element: y, wa: F})
                    }
                }
            }
            var K;
            var J = a && a.od;
            if (J && 0 !== J.length) {
                for (var L = [], P =
                    0; P < z.length; P++) {
                    for (var N = !0, I = 0; I < J.length; I++) {
                        var T = J[I];
                        if (T && ke(z[P].element, T)) {
                            N = !1;
                            break
                        }
                    }
                    N && L.push(z[P])
                }
                K = L
            } else K = z;
            v = af(K);
            10 < z.length && (r = "3")
        }
        var U = [];
        if (v) {
            var ea = v.element, R = {wa: v.wa, tagName: ea.tagName, type: 1};
            a.De && (R.querySelector = Ze(ea));
            a.Ee && (R.isVisible = !qe(ea));
            U.push(R)
        }
        var V = {elements: U, status: r};
        Ye[b] = {timestamp: Oa(), result: V};
        return V
    }, cf = function (a) {
        return a.tagName + ":" + a.isVisible + ":" + a.wa.length + ":" + Ue.test(a.wa)
    };
    var df = function (a) {
            return void 0 === a || null === a ? "" : h(a) ? Ma(String(a)) : "e0"
        }, ff = function (a) {
            return a.replace(ef, "")
        }, hf = function (a) {
            return gf(a.replace(/\s/g, ""))
        }, gf = function (a) {
            return Ma(a.replace(jf, "").toLowerCase())
        }, lf = function (a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return kf.test(a) ? a : "e0"
        }, nf = function (a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (mf.test(c)) return c
            }
            return "e0"
        },
        qf = function (a, b, c) {
            window.Promise || c([], []);
            Promise.all(a.map(function (d) {
                return d.value && of(d.name) ? pf(d.value).then(function (e) {
                    d.value = e
                }) : Promise.resolve()
            })).then(function () {
                c(a, b)
            }).catch(function () {
                c([], [])
            })
        }, pf = function (a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (l.crypto && l.crypto.subtle) try {
                var b = rf(a);
                return l.crypto.subtle.digest("SHA-256", b).then(function (c) {
                    var d = Array.from(new Uint8Array(c)).map(function (e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return l.btoa(d).replace(/\+/g,
                        "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function () {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        }, rf = function (a) {
            var b;
            if (l.TextEncoder) b = (new l.TextEncoder("utf-8")).encode(a); else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        jf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, mf = /^\S+@\S+\.\S+$/, kf = /^\+\d{11,15}$/, ef = /[.~]/g,
        sf = {},
        tf = (sf.email = "em", sf.phone_number = "pn", sf.first_name = "fn", sf.last_name = "ln", sf.street = "sa", sf.city = "ct", sf.region = "rg", sf.country = "co", sf.postal_code = "pc", sf.error_code = "ec", sf),
        uf = function (a, b, c) {
            function d(r, v, x) {
                var z = r[v];
                ua(z) || (z = [z]);
                for (var w = 0; w < z.length; ++w) {
                    var y = df(z[w]);
                    "" !== y && g.push({name: v, value: x(y), index: void 0})
                }
            }

            function e(r, v, x, z) {
                var w = df(r[v]);
                "" !== w && g.push({
                    name: v, value: x(w),
                    index: z
                })
            }

            function f(r) {
                return function (v) {
                    zd(64);
                    return r(v)
                }
            }

            var g = [], k = [];
            if ("https:" === l.location.protocol) {
                var m = function (r, v) {
                    var x = r[v];
                    ua(x) || (x = [x]);
                    for (var z = 0; z < x.length; ++z) {
                        var w = df(x[z]);
                        if ("" !== w) return w
                    }
                    return null
                };
                d(a, "email", nf);
                var n = m(a, "email");
                if (n) for (var p = 0; p < b.length; p++) k.push(b[p].wa.toLowerCase() ===
                    n.toLowerCase());
                d(a, "phone_number", lf);
                d(a, "first_name", f(hf));
                d(a, "last_name", f(hf));
                var q = a.home_address || {};
                d(q, "street", f(gf));
                d(q, "city", f(gf));
                d(q, "postal_code", f(ff));
                d(q, "region", f(gf));
                d(q, "country", f(ff));
                var t = a.address || {};
                ua(t) || (t = [t]);
                for (var u = 0; u < t.length; u++) e(t[u], "first_name", hf, u), e(t[u], "last_name", hf, u), e(t[u], "street", gf, u), e(t[u], "city", gf, u), e(t[u], "postal_code", ff, u), e(t[u], "region", gf, u), e(t[u], "country", ff, u);
                qf(g, k, c)
            } else g.push({name: "error_code", value: "e3", index: void 0}), c(g, k)
        }, vf = function (a, b, c) {
            uf(a, b, function (d, e) {
                for (var f = ["tv.1"], g = 0, k = 0; k < d.length; ++k) {
                    var m = d[k].name, n = d[k].value, p = d[k].index, q = tf[m];
                    q && n && (!of(m) || /^e\d+$/.test(n) || /^[0-9A-Za-z_-]{43}$/.test(n)) && (void 0 !== p && (q += p), f.push(q + "." + n), g++)
                }
                1 === d.length && "error_code" === d[0].name && (g = 0);
                c(encodeURIComponent(f.join("~")), e, g)
            })
        }, wf = function (a, b) {
            if (l.Promise) try {
                return new Promise(function (c) {
                    vf(a, b, function (d, e, f) {
                        c({
                            yc: d, mc: e,
                            xj: f
                        })
                    })
                })
            } catch (c) {
            }
        }, of = function (a) {
            return -1 !== ["email", "phone_number", "first_name", "last_name", "street"].indexOf(a)
        };
    var xf = function () {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.remoteConfig = {};
        this.globalConfig = {};
        this.onSuccess = function () {
        };
        this.onFailure = function () {
        };
        this.setContainerTypeLoaded = function () {
        };
        this.getContainerTypeLoaded = function () {
        };
        this.eventId = void 0;
        this.isGtmEvent = !1
    }, yf = function (a) {
        var b = new xf;
        b.eventModel = a;
        return b
    }, zf = function (a, b) {
        a.targetConfig = b;
        return a
    }, Af = function (a, b) {
        a.containerConfig = b;
        return a
    }, Bf = function (a, b) {
        a.remoteConfig = b;
        return a
    }, Cf = function (a,
                      b) {
        a.globalConfig = b;
        return a
    }, Df = function (a, b) {
        a.onSuccess = b;
        return a
    }, Ef = function (a, b) {
        a.setContainerTypeLoaded = b;
        return a
    }, Ff = function (a, b) {
        a.getContainerTypeLoaded = b;
        return a
    }, Gf = function (a, b) {
        a.onFailure = b;
        return a
    };
    xf.prototype.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var Hf = function (a) {
        function b(d) {
            for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
        }

        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        return Object.keys(c)
    }, If = function (a, b, c) {
        function d(g) {
            ac(g) && Ca(g, function (k, m) {
                f = !0;
                e[k] = m
            })
        }

        var e = {}, f = !1;
        c && 1 !== c || (d(a.globalConfig[b]), d(a.remoteConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
        c && 2 !== c || d(a.eventModel[b]);
        return f ? e : void 0
    };
    var Jf = {}, O = null, Kf = Math.random();
    Jf.M = "UA-206791012-1";
    Jf.cd = "9d0";
    Jf.Pg = "ChAI8O37iQYQ0tSst4aGqflgEicAl5ArBFts/2MEou48EdmkUI/gGXL4WfMY0UAxycCygmCSZCXe1D8aAhFr";
    var Lf = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Mf = {__paused: !0, __tg: !0}, Nf;
    for (Nf in Lf) Lf.hasOwnProperty(Nf) && (Mf[Nf] = !0);
    var Of = "www.googletagmanager.com/gtm.js";
    Of = "www.googletagmanager.com/gtag/js";
    var Pf = Of, Qf = Ha(""), Rf = null, Sf = null, Tf = "https://www.googletagmanager.com/a?id=" + Jf.M + "&cv=1",
        Uf = {}, Vf = {}, Wf = function () {
            var a = O.sequence || 1;
            O.sequence = a + 1;
            return a
        };
    Jf.Og = "";
    var Xf = "";
    Jf.qj = Xf;
    var Yf = {}, Zf = new ya, $f = {}, ag = {}, dg = {
        name: "dataLayer", set: function (a, b) {
            H(Wa(a, b), $f);
            bg()
        }, get: function (a) {
            return cg(a, 2)
        }, reset: function () {
            Zf = new ya;
            $f = {};
            bg()
        }
    }, cg = function (a, b) {
        return 2 != b ? Zf.get(a) : eg(a)
    }, eg = function (a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = $f, e = 0; e < c.length; e++) {
            if (null === d) return !1;
            if (void 0 === d) break;
            d = d[c[e]];
            if (-1 !== va(b, d)) return
        }
        return d
    }, fg = function (a, b) {
        ag.hasOwnProperty(a) || (Zf.set(a, b), H(Wa(a, b), $f), bg())
    }, bg = function (a) {
        Ca(ag, function (b, c) {
            Zf.set(b, c);
            H(Wa(b,
                void 0), $f);
            H(Wa(b, c), $f);
            a && delete ag[b]
        })
    }, hg = function (a, b, c) {
        Yf[a] = Yf[a] || {};
        Yf[a][b] = gg(b, c)
    }, gg = function (a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? eg(a) : Zf.get(a);
        "array" === Zb(d) || "object" === Zb(d) ? c = H(d) : c = d;
        return c
    }, ig = function (a, b) {
        if (Yf[a]) return Yf[a][b]
    }, jg = function (a, b) {
        Yf[a] && delete Yf[a][b]
    };
    var kg = function (a, b, c) {
        if (c) {
            var d = c.selector_type, e = String(c.value), f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), k = 0; k < g.length; k++) {
                    var m = g[k].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = cg(m.substring(10)); else {
                            var n = m.split(".");
                            f = l[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && ie) {
                var q = je(e);
                q && 0 < q.length && (f = Nb(q[0]) || Ma(q[0].value))
            }
            f && (a[b] = f)
        }
    }, lg = function (a) {
        if (a) {
            var b = {};
            kg(b, "email",
                a.email);
            kg(b, "phone_number", a.phone);
            b.address = [];
            for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                var e = {};
                kg(e, "first_name", c[d].first_name);
                kg(e, "last_name", c[d].last_name);
                kg(e, "street", c[d].street);
                kg(e, "city", c[d].city);
                kg(e, "region", c[d].region);
                kg(e, "country", c[d].country);
                kg(e, "postal_code", c[d].postal_code);
                b.address.push(e)
            }
            return b
        }
    }, mg = function (a) {
        if (a) switch (a.mode) {
            case "selectors":
                return lg(a.selectors);
            case "auto_detect":
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = bf({
                        De: !1, Ee: !1,
                        od: c.exclude_element_selectors, eb: {email: !!c.email, phone: !!c.phone, Wf: !!c.address}
                    }).elements, e = {};
                    if (0 < d.length) for (var f = 0; f < d.length; f++) {
                        var g = d[f];
                        if (1 === g.type) {
                            e.email = g.wa;
                            break
                        }
                    }
                    b = e
                } else b = void 0;
                return b
        }
    }, ng = function (a) {
        switch (a.enhanced_conversions_mode) {
            case "manual":
                var b = a.enhanced_conversions_manual_var;
                return void 0 !== b ? b : l.enhanced_conversion_data;
            case "automatic":
                return lg(a[M.rf])
        }
    };
    var og = {}, pg = function (a, b) {
        if (l._gtmexpgrp && l._gtmexpgrp.hasOwnProperty(a)) return l._gtmexpgrp[a];
        void 0 === og[a] && (og[a] = Math.floor(Math.random() * b));
        return og[a]
    };
    var qg = function (a) {
        var b = 1, c, d, e;
        if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };

    function rg(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="), k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };

    function sg(a) {
        return "null" !== a.origin
    };var xg = function (a, b, c, d) {
        return vg(d) ? rg(a, String(b || wg()), c) : []
    }, Ag = function (a, b, c, d, e) {
        if (vg(e)) {
            var f = yg(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = zg(f, function (g) {
                    return g.ld
                }, b);
                if (1 === f.length) return f[0].id;
                f = zg(f, function (g) {
                    return g.zc
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function Bg(a, b, c, d) {
        var e = wg(), f = window;
        sg(f) && (f.document.cookie = a);
        var g = wg();
        return e != g || void 0 != c && 0 <= xg(b, g, !1, d).indexOf(c)
    }

    var Fg = function (a, b, c) {
        function d(u, r, v) {
            if (null == v) return delete g[r], u;
            g[r] = v;
            return u + "; " + r + "=" + v
        }

        function e(u, r) {
            if (null == r) return delete g[r], u;
            g[r] = !0;
            return u + "; " + r
        }

        if (!vg(c.Ta)) return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Cg(b), f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var k;
        c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.wj);
        f = d(f, "samesite",
            c.yj);
        c.zj && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = Dg(), p = 0; p < n.length; ++p) {
                var q = "none" !== n[p] ? n[p] : void 0, t = d(f, "domain", q);
                t = e(t, c.flags);
                if (!Eg(q, c.path) && Bg(t, a, b, c.Ta)) return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return Eg(m, c.path) ? 1 : Bg(f, a, b, c.Ta) ? 0 : 1
    }, Gg = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Fg(a, b, c)
    };

    function zg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g], m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function yg(a, b, c) {
        for (var d = [], e = xg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."), k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({id: g.join("."), ld: 1 * m[0] || 1, zc: 1 * m[1] || 1}))
            }
        }
        return d
    }

    var Cg = function (a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }, Hg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Ig = /(^|\.)doubleclick\.net$/i, Eg = function (a, b) {
        return Ig.test(window.document.location.hostname) || "/" === b && Hg.test(a)
    }, wg = function () {
        return sg(window) ? window.document.cookie : ""
    }, Dg = function () {
        var a = [], b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Ig.test(e) || Hg.test(e) || a.push("none");
        return a
    }, vg = function (a) {
        if (!Cd().o() || !a || !Td()) return !0;
        if (!Sd(a)) return !1;
        var b = Qd(a);
        return null == b ? !0 : !!b
    };
    var Jg = function (a) {
        var b = Math.round(2147483647 * Math.random()), c = b;
        a && (c = b ^ qg(a) & 2147483647);
        return [c, Math.round(Oa() / 1E3)].join(".")
    }, Mg = function (a, b, c, d, e) {
        var f = Kg(b);
        return Ag(a, f, Lg(c), d, e)
    }, Ng = function (a, b, c, d) {
        var e = "" + Kg(c), f = Lg(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }, Kg = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, Lg = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };

    function Og(a, b, c) {
        var d, e = Number(null != a.qb ? a.qb : void 0);
        0 !== e && (d = new Date((b || Oa()) + 1E3 * (e || 7776E3)));
        return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d}
    };var Pg = ["1"], Qg = {}, Tg = function (a, b) {
        b = void 0 === b ? !0 : b;
        var c = Rg(a.prefix);
        if (!Qg[c] && !Sg(c, a.path, a.domain) && b) {
            var d = Rg(a.prefix), e = Jg(), f = Ng(e, "1", a.domain, a.path), g = Og(a);
            g.Ta = "ad_storage";
            if (0 === Gg(d, f, g)) {
                var k = zb("google_tag_data", {});
                k._gcl_au ? xd("GTM", 57) : k._gcl_au = e
            }
            Sg(c, a.path, a.domain)
        }
    };

    function Sg(a, b, c) {
        var d = Mg(a, b, c, Pg, "ad_storage");
        d && (Qg[a] = d);
        return d
    }

    function Rg(a) {
        return (a || "_gcl") + "_au"
    };var Ug = function (a) {
        for (var b = [], c = B.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({Ve: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0})
        }
        b.sort(function (g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function Vg(a, b) {
        var c = Ug(a), d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Ve] || (d[c[e].Ve] = []);
                var g = {version: f[0], timestamp: 1E3 * Number(f[1]), ra: f[2]};
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ve].push(g)
            }
        }
        return d
    };

    function Wg() {
        for (var a = Xg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Yg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var Xg, Zg;

    function $g(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++), p = Zg[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }

        Xg = Xg || Yg();
        Zg = Zg || Wg();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), g = b(64), k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };var ah;
    var eh = function () {
        var a = bh, b = ch, c = dh(), d = function (g) {
            a(g.target || g.srcElement || {})
        }, e = function (g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            Kb(B, "mousedown", d);
            Kb(B, "keyup", d);
            Kb(B, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this)
            };
            c.init = !0
        }
    }, fh = function (a, b, c, d, e) {
        var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
        dh().decorators.push(f)
    }, gh = function (a, b, c) {
        for (var d = dh().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g =
                d[f], k;
            if (k = !c || g.forms) a:{
                var m = g.domains, n = a, p = !!g.sameHost;
                if (m && (p || n !== B.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
                    if (m[q].test(n)) {
                        k = !0;
                        break a
                    }
                } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && Sa(e, g.callback())
            }
        }
        return e
    }, dh = function () {
        var a = zb("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };
    var hh = /(.*?)\*(.*?)\*(.*)/, ih = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        jh = /^(?:www\.|m\.|amp\.)+/, kh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function lh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    var nh = function (a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                b.push(c);
                var e = b, f = e.push, g, k = String(d);
                Xg = Xg || Yg();
                Zg = Zg || Wg();
                for (var m = [], n = 0; n < k.length; n += 3) {
                    var p = n + 1 < k.length, q = n + 2 < k.length, t = k.charCodeAt(n),
                        u = p ? k.charCodeAt(n + 1) : 0, r = q ? k.charCodeAt(n + 2) : 0, v = t >> 2,
                        x = (t & 3) << 4 | u >> 4, z = (u & 15) << 2 | r >> 6, w = r & 63;
                    q || (w = 64, p || (z = 64));
                    m.push(Xg[v], Xg[x], Xg[z], Xg[w])
                }
                g = m.join("");
                f.call(e, g)
            }
        }
        var y = b.join("*");
        return ["1", mh(y),
            y].join("*")
    }, mh = function (a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = ah)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        ah = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ah[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }, ph = function () {
        return function (a) {
            var b = Ne(l.location.href),
                c = b.search.replace("?", ""), d = Ae(c, "_gl", !0) || "";
            a.query = oh(d) || {};
            var e = De(b, "fragment").match(lh("_gl"));
            a.fragment = oh(e && e[3] || "") || {}
        }
    }, qh = function (a) {
        var b = ph(), c = dh();
        c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
        var d = {}, e = c.data;
        e && (Sa(d, e.query), a && Sa(d, e.fragment));
        return d
    }, oh = function (a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a:{
                    for (var d = a, e = 0; 3 > e; ++e) {
                        var f = hh.exec(d);
                        if (f) {
                            c = f;
                            break a
                        }
                        d = decodeURIComponent(d)
                    }
                    c = void 0
                }
                var g = c;
                if (g && "1" === g[1]) {
                    var k = g[3], m;
                    a:{
                        for (var n = g[2], p = 0; p <
                        b; ++p) if (n === mh(k, p)) {
                            m = !0;
                            break a
                        }
                        m = !1
                    }
                    if (m) {
                        for (var q = {}, t = k ? k.split("*") : [], u = 0; u < t.length; u += 2) q[t[u]] = $g(t[u + 1]);
                        return q
                    }
                }
            }
        } catch (r) {
        }
    };

    function rh(a, b, c, d) {
        function e(p) {
            var q = p, t = lh(a).exec(q), u = q;
            if (t) {
                var r = t[2], v = t[4];
                u = t[1];
                v && (u = u + r + v)
            }
            p = u;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n
        }

        d = void 0 === d ? !1 : d;
        var f = kh.exec(c);
        if (!f) return "";
        var g = f[1], k = f[2] || "", m = f[3] || "", n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function sh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = gh(b, 1, c), e = gh(b, 2, c), f = gh(b, 3, c);
        if (Ta(d)) {
            var g = nh(d);
            c ? th("_gl", g, a) : uh("_gl", g, a, !1)
        }
        if (!c && Ta(e)) {
            var k = nh(e);
            uh("_gl", k, a, !0)
        }
        for (var m in f) if (f.hasOwnProperty(m)) a:{
            var n = m, p = f[m], q = a;
            if (q.tagName) {
                if ("a" === q.tagName.toLowerCase()) {
                    uh(n, p, q, void 0);
                    break a
                }
                if ("form" === q.tagName.toLowerCase()) {
                    th(n, p, q);
                    break a
                }
            }
            "string" == typeof q && rh(n, p, q, void 0)
        }
    }

    function uh(a, b, c, d) {
        if (c.href) {
            var e = rh(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }

    function th(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = B.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = rh(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }

    var bh = function (a) {
        try {
            var b;
            a:{
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || sh(e, e.hostname)
            }
        } catch (g) {
        }
    }, ch = function (a) {
        try {
            if (a.action) {
                var b = De(Ne(a.action), "host");
                sh(a, b)
            }
        } catch (c) {
        }
    }, vh = function (a, b, c, d) {
        eh();
        fh(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }, wh = function (a, b) {
        eh();
        fh(a, [Ce(l.location, "host", !0)], b, !0, !0)
    }, xh = function () {
        var a = B.location.hostname, b = ih.exec(B.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(jh, ""), m = e.replace(jh, ""), n;
        if (!(n = k === m)) {
            var p = "." + m;
            n = k.substring(k.length - p.length, k.length) === p
        }
        return n
    }, yh = function (a, b) {
        return !1 === a ? !1 : a || b || xh()
    };
    var zh = {};
    var Ah = /^\w+$/, Bh = /^[\w-]+$/, Ch = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb"},
        Dh = function () {
            if (!Cd().o() || !Td()) return !0;
            var a = Qd("ad_storage");
            return null == a ? !0 : !!a
        }, Eh = function (a, b) {
            Sd("ad_storage") ? Dh() ? a() : Yd(a, "ad_storage") : b ? xd("TAGGING", 3) : Xd(function () {
                Eh(a, !0)
            }, ["ad_storage"])
        }, Gh = function (a) {
            return Fh(a).map(function (b) {
                return b.ra
            })
        }, Fh = function (a) {
            var b = [];
            if (!sg(l) || !B.cookie) return b;
            var c = xg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d =
                {Gc: d.Gc}, e++) {
                var f = Hh(c[e]);
                if (null != f) {
                    var g = f, k = g.version;
                    d.Gc = g.ra;
                    var m = g.timestamp, n = g.labels, p = wa(b, function (q) {
                        return function (t) {
                            return t.ra === q.Gc
                        }
                    }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Ih(p.labels, n || [])) : b.push({
                        version: k,
                        ra: d.Gc,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function (q, t) {
                return t.timestamp - q.timestamp
            });
            return Jh(b)
        };

    function Ih(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Kh(a) {
        return a && "string" == typeof a && a.match(Ah) ? a : "_gcl"
    }

    var Mh = function () {
        var a = Ne(l.location.href), b = De(a, "query", !1, void 0, "gclid"), c = De(a, "query", !1, void 0, "gclsrc"),
            d = De(a, "query", !1, void 0, "wbraid"), e = De(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Ae(f, "gclid", void 0);
            c = c || Ae(f, "gclsrc", void 0);
            d = d || Ae(f, "wbraid", void 0)
        }
        return Lh(b, c, e, d)
    }, Lh = function (a, b, c, d) {
        var e = {}, f = function (g, k) {
            e[k] || (e[k] = []);
            e[k].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && Bh.test(d) && (e.gbraid = d, f(d, "gb"));
        if (void 0 !== a && a.match(Bh)) switch (b) {
            case void 0:
                f(a,
                    "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
        }
        c && f(c, "dc");
        return e
    }, Oh = function (a) {
        var b = Mh();
        Eh(function () {
            Nh(b, !1, a)
        })
    };

    function Nh(a, b, c, d, e) {
        function f(x, z) {
            var w = Ph(x, g);
            w && (Gg(w, z, k), m = !0)
        }

        c = c || {};
        e = e || [];
        var g = Kh(c.prefix);
        d = d || Oa();
        var k = Og(c, d, !0);
        k.Ta = "ad_storage";
        var m = !1, n = Math.round(d / 1E3), p = function (x) {
            var z = ["GCL", n, x];
            0 < e.length && z.push(e.join("."));
            return z.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == zh.enable_gbraid_cookie_write ? 0 : zh.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0], t = Ph("gb",
                g), u = !1;
            if (!b) for (var r = Fh(t), v = 0; v < r.length; v++) r[v].ra === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }

    var Rh = function (a, b) {
        var c = qh(!0);
        Eh(function () {
            for (var d = Kh(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== Ch[f]) {
                    var g = Ph(f, d), k = c[g];
                    if (k) {
                        var m = Math.min(Qh(k), Oa()), n;
                        b:{
                            var p = m;
                            if (sg(l)) for (var q = xg(g, B.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t) if (Qh(q[t]) > p) {
                                n = !0;
                                break b
                            }
                            n = !1
                        }
                        if (!n) {
                            var u = Og(b, m, !0);
                            u.Ta = "ad_storage";
                            Gg(g, k, u)
                        }
                    }
                }
            }
            Nh(Lh(c.gclid, c.gclsrc), !1, b)
        })
    }, Ph = function (a, b) {
        var c = Ch[a];
        if (void 0 !== c) return b + c
    }, Qh = function (a) {
        return 0 !== Sh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
    };

    function Hh(a) {
        var b = Sh(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ra: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Sh(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Bh.test(a[2]) ? [] : a
    }

    var Th = function (a, b, c, d, e) {
        if (ua(b) && sg(l)) {
            var f = Kh(e), g = function () {
                for (var k = {}, m = 0; m < a.length; ++m) {
                    var n = Ph(a[m], f);
                    if (n) {
                        var p = xg(n, B.cookie, void 0, "ad_storage");
                        p.length && (k[n] = p.sort()[p.length - 1])
                    }
                }
                return k
            };
            Eh(function () {
                vh(g, b, c, d)
            })
        }
    }, Jh = function (a) {
        return a.filter(function (b) {
            return Bh.test(b.ra)
        })
    }, Uh = function (a, b) {
        if (sg(l)) {
            for (var c = Kh(b.prefix), d = {}, e = 0; e < a.length; e++) Ch[a[e]] && (d[a[e]] = Ch[a[e]]);
            Eh(function () {
                Ca(d, function (f, g) {
                    var k = xg(c + g, B.cookie, void 0, "ad_storage");
                    k.sort(function (u,
                                     r) {
                        return Qh(r) - Qh(u)
                    });
                    if (k.length) {
                        var m = k[0], n = Qh(m), p = 0 !== Sh(m.split(".")).length ? m.split(".").slice(3) : [], q = {},
                            t;
                        t = 0 !== Sh(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [t];
                        Nh(q, !0, b, n, p)
                    }
                })
            })
        }
    };

    function Vh(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1
    }

    var Wh = function (a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }

        if (Td()) {
            var c = Mh();
            if (Vh(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                wh(function () {
                    return d
                }, 3);
                wh(function () {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function Xh(a, b) {
        var c = Kh(b), d = Ph(a, c);
        if (!d) return 0;
        for (var e = Fh(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Yh(a) {
        var b = 0, c;
        for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };var Zh = /^\d+\.fls\.doubleclick\.net$/;

    function $h(a, b) {
        Sd(M.D) ? de(M.D) ? a() : Yd(a, M.D) : b ? zd(42) : he(function () {
            $h(a, !0)
        }, [M.D])
    }

    function ai(a) {
        var b = Ne(l.location.href), c = De(b, "host", !1);
        if (c && c.match(Zh)) {
            var d = De(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function bi(a, b, c) {
        if ("aw" === a || "dc" === a || "gb" === a) {
            var d = ai("gcl" + a);
            if (d) return d.split(".")
        }
        var e = Kh(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !de(M.D) && c, g;
            g = Mh()[a] || [];
            if (0 < g.length) return f ? ["0"] : g
        }
        var k = Ph(a, e);
        return k ? Gh(k) : []
    }

    var ci = function (a, b) {
        return bi("aw", a, b)
    }, di = function (a, b) {
        return bi("dc", a, b)
    };

    function ei(a) {
        var b = [];
        Ca(a, function (c, d) {
            d = Jh(d);
            for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
            e.length && b.push(c + ":" + e.join(","))
        });
        return b.join(";")
    }

    var fi = function (a) {
        var b = ai("gac");
        return b ? !de(M.D) && a ? "0" : decodeURIComponent(b) : ei(Dh() ? Vg() : {})
    }, gi = function (a) {
        var b = ai("gacgb");
        return b ? !de(M.D) && a ? "0" : decodeURIComponent(b) : ei(Dh() ? Vg("_gac_gb", !0) : {})
    }, hi = function (a) {
        var b = Mh(), c = [], d = b.gclid, e = b.dclid, f = b.gclsrc || "aw";
        !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({ra: d, ye: f});
        e && c.push({ra: e, ye: "ds"});
        $h(function () {
            Tg(a);
            var g = Qg[Rg(a.prefix)];
            if (g && 0 < c.length) for (var k = O.joined_auid = O.joined_auid || {}, m = 0; m < c.length; m++) {
                var n = c[m], p = n.ra, q = n.ye, t = (a.prefix || "_gcl") + "." + q + "." + p;
                if (!k[t]) {
                    var u = "https://adservice.google.com/pagead/regclk";
                    u = "gb" === q ? u + "?gbraid=" + p + "&auid=" + g : u + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
                    Qb(u);
                    k[t] = !0
                }
            }
        })
    }, ii = function (a) {
        var b;
        if (ai("gclaw") || ai("gac") || 0 < (Mh().aw || []).length) b =
            !1; else {
            var c;
            if (0 < (Mh().gb || []).length) c = !0; else {
                var d = Math.max(Xh("aw", a), Yh(Dh() ? Vg() : {}));
                c = Math.max(Xh("gb", a), Yh(Dh() ? Vg("_gac_gb", !0) : {})) > d
            }
            b = c
        }
        return b
    };

    function ji(a) {
        var b = xb && xb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };var ki = /[A-Z]+/, li = /\s/, mi = function (a) {
        if (h(a) && (a = Ma(a), !li.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (ki.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], N: d}
                }
            }
        }
    }, oi = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = mi(a[c]);
            d && (b[d.id] = d)
        }
        ni(b);
        var e = [];
        Ca(b, function (f, g) {
            e.push(g)
        });
        return e
    };

    function ni(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.N[1] && b.push(d.containerId)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var pi = function () {
        var a = !1;
        return a
    };
    var ri = function (a, b, c, d) {
        return (2 === qi() || d || "http:" != l.location.protocol ? a : b) + c
    }, qi = function () {
        var a = Eb(), b;
        if (1 === a) a:{
            var c = Pf;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, g = B.getElementsByTagName("script"), k = 0; k < g.length && 100 > k; k++) {
                var m = g[k].src;
                if (m) {
                    m = m.toLowerCase();
                    if (0 === m.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === f && 0 === m.indexOf(d) && (f = 2)
                }
            }
            b = f
        } else b = a;
        return b
    };
    var ti = function (a, b, c) {
            if (l[a.functionName]) return b.Le && G(b.Le), l[a.functionName];
            var d = si();
            l[a.functionName] = d;
            if (a.fd) for (var e = 0; e < a.fd.length; e++) l[a.fd[e]] = l[a.fd[e]] || si();
            a.sd && void 0 === l[a.sd] && (l[a.sd] = c);
            Db(ri("https://", "http://", a.Se), b.Le, b.Ni);
            return d
        }, si = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        }, ui = {functionName: "_googWcmImpl", sd: "_googWcmAk", Se: "www.gstatic.com/wcm/loader.js"},
        vi = {functionName: "_gaPhoneImpl", sd: "ga_wpid", Se: "www.gstatic.com/gaphone/loader.js"},
        wi = {Lg: "", Oh: "5"}, xi = {
            functionName: "_googCallTrackingImpl",
            fd: [vi.functionName, ui.functionName],
            Se: "www.gstatic.com/call-tracking/call-tracking_" + (wi.Lg || wi.Oh) + ".js"
        }, yi = {}, zi = function (a, b, c, d) {
            zd(22);
            if (c) {
                d = d || {};
                var e = ti(ui, d, a), f = {ak: a, cl: b};
                void 0 === d.Ra && (f.autoreplace = c);
                e(2, d.Ra, f, c, 0, Na(), d.options)
            }
        }, Ai = function (a, b, c, d) {
            zd(21);
            if (b && c) {
                d = d || {};
                for (var e = {countryNameCode: c, destinationNumber: b, retrievalTime: Na()}, f = 0; f < a.length; f++) {
                    var g = a[f];
                    yi[g.id] ||
                    (g && "AW" === g.prefix && !e.adData && 2 <= g.N.length ? (e.adData = {
                        ak: g.N[0],
                        cl: g.N[1]
                    }, yi[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {gaWpid: g.containerId}, yi[g.id] = !0))
                }
                (e.gaData || e.adData) && ti(xi, d)(d.Ra, e, d.options)
            }
        }, Bi = function () {
            var a = !1;
            return a
        }, Ci = function (a, b) {
            if (a) if (pi()) {
            } else {
                if (h(a)) {
                    var c =
                        mi(a);
                    if (!c) return;
                    a = c
                }
                var d = void 0, e = !1, f = b.getWithConfig(M.zh);
                if (f && ua(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var k = mi(f[g]);
                        k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = b.getWithConfig(M.xf), n;
                    if (m) {
                        ua(m) ? n = m : n = [m];
                        var p = b.getWithConfig(M.vf), q = b.getWithConfig(M.wf), t = b.getWithConfig(M.yf),
                            u = b.getWithConfig(M.yh), r = p || q, v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var x = 0; x < n.length; x++) if (x < v) if (d) Ai(d, n[x], u, {
                            Ra: r,
                            options: t
                        }); else if ("AW" === a.prefix &&
                            a.N[1]) Bi() ? Ai([a], n[x], u || "US", {Ra: r, options: t}) : zi(a.N[0], a.N[1], n[x], {
                            Ra: r,
                            options: t
                        }); else if ("UA" === a.prefix) if (Bi()) Ai([a], n[x], u || "US", {Ra: r}); else {
                            var z = a.containerId, w = n[x], y = {Ra: r};
                            zd(23);
                            if (w) {
                                y = y || {};
                                var A = ti(vi, y, z), C = {};
                                void 0 !== y.Ra ? C.receiver = y.Ra : C.replace = w;
                                C.ga_wpid = z;
                                C.destination = w;
                                A(2, Na(), C)
                            }
                        }
                    }
                }
            }
        };
    var Di = function (a, b) {
        var c = a ? ng(a) : l.enhanced_conversion_data, d = (a || {}).enhanced_conversions_mode;
        if (l.Promise) try {
            return c ? wf(c, b).then(function (e) {
                e.se = d;
                return e
            }) : Promise.resolve({yc: "", mc: [], se: d})
        } catch (e) {
        }
    };

    function Ei(a) {
        if (de(M.D)) return a;
        a = a.replace(/&url=([^&#]+)/, function (b, c) {
            var d = Oe(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        });
        a = a.replace(/&ref=([^&#]+)/, function (b, c) {
            var d = Oe(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d)
        });
        return a
    }

    function Fi() {
        if (Qf || !0 !== l._gtmdgs && !ji("11")) return -1;
        var a = Ga('1');
        return pg(1, 100) < a ? pg(2, 2) : -1
    }

    function Gi() {
        return -1 !== xb.userAgent.toLowerCase().indexOf("firefox")
    }

    function Hi(a) {
        var b;
        if (!a || !a.length) return;
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
        }
        b = c.join(",");
        return b
    }

    function Ii() {
        var a = !1;
        return a
    }

    var Ji = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Ki = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, Li = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, Mi = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ni = function () {
        var a = !1;
        a = !0;
        return a
    }, Pi = function (a) {
        var b = cg("gtm.allowlist") || cg("gtm.whitelist");
        b && zd(9);
        Ni() && (b = "google gtagfl lcl zone oid op".split(" "));
        var c = b && Va(La(b), Ki), d = cg("gtm.blocklist") ||
            cg("gtm.blacklist");
        d || (d = cg("tagTypeBlacklist")) && zd(3);
        d ? zd(8) : d = [];
        Oi() && (d = La(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= va(La(d), "google") && zd(2);
        var e = d && Va(La(d), Li), f = {};
        return function (g) {
            var k = g && g[cc.mb];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k]) return f[k];
            var m = Vf[k] || [], n = a(k, m);
            if (b) {
                var p;
                if (p =
                    n) a:{
                    if (0 > va(c, k)) if (m && 0 < m.length) for (var q = 0; q < m.length; q++) {
                        if (0 > va(c, m[q])) {
                            zd(11);
                            p = !1;
                            break a
                        }
                    } else {
                        p = !1;
                        break a
                    }
                    p = !0
                }
                n = p
            }
            var t = !1;
            if (d) {
                var u = 0 <= va(e, k);
                if (u) t = u; else {
                    var r = Ba(e, m || []);
                    r && zd(10);
                    t = r
                }
            }
            var v = !n || t;
            v || !(0 <= va(m, "sandboxedScripts")) || c && -1 !== va(c, "sandboxedScripts") || (v = Ba(e, Mi));
            return f[k] = v
        }
    }, Oi = function () {
        return Ji.test(l.location && l.location.hostname)
    };
    var Qi = !1, Ri = 0, Si = [];

    function Ti(a) {
        if (!Qi) {
            var b = B.createEventObject, c = "complete" == B.readyState, d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Qi = !0;
                for (var e = 0; e < Si.length; e++) G(Si[e])
            }
            Si.push = function () {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function Ui() {
        if (!Qi && 140 > Ri) {
            Ri++;
            try {
                B.documentElement.doScroll("left"), Ti()
            } catch (a) {
                l.setTimeout(Ui, 50)
            }
        }
    }

    var Vi = function (a) {
        Qi ? a() : Si.push(a)
    };
    var Xi = function (a, b) {
        this.o = !1;
        this.F = [];
        this.P = {tags: []};
        this.ba = !1;
        this.s = this.C = 0;
        Wi(this, a, b)
    }, Yi = function (a, b, c, d) {
        if (Mf.hasOwnProperty(b) || "__zone" === b) return -1;
        var e = {};
        ac(d) && (e = H(d, e));
        e.id = c;
        e.status = "timeout";
        return a.P.tags.push(e) - 1
    }, Zi = function (a, b, c, d) {
        var e = a.P.tags[b];
        e && (e.status = c, e.executionTime = d)
    }, $i = function (a) {
        if (!a.o) {
            for (var b = a.F, c = 0; c < b.length; c++) b[c]();
            a.o = !0;
            a.F.length = 0
        }
    }, Wi = function (a, b, c) {
        sa(b) && aj(a, b);
        c && l.setTimeout(function () {
            return $i(a)
        }, Number(c))
    }, aj = function (a,
                      b) {
        var c = Qa(function () {
            return G(function () {
                b(Jf.M, a.P)
            })
        });
        a.o ? c() : a.F.push(c)
    }, bj = function (a) {
        a.C++;
        return Qa(function () {
            a.s++;
            a.ba && a.s >= a.C && $i(a)
        })
    };
    var cj = function () {
        function a(d) {
            return !ta(d) || 0 > d ? 0 : d
        }

        if (!O._li && l.performance && l.performance.timing) {
            var b = l.performance.timing.navigationStart, c = ta(dg.get("gtm.start")) ? dg.get("gtm.start") : 0;
            O._li = {cst: a(c - b), cbt: a(Sf - b)}
        }
    }, dj = function (a) {
        l.performance && l.performance.mark(Jf.M + "_" + a + "_start")
    }, ej = function (a) {
        if (l.performance) {
            var b = Jf.M + "_" + a + "_start", c = Jf.M + "_" + a + "_duration";
            l.performance.measure(c, b);
            var d = l.performance.getEntriesByName(c)[0];
            l.performance.clearMarks(b);
            l.performance.clearMeasures(c);
            var e = O._p || {};
            void 0 === e[a] && (e[a] = d.duration, O._p = e);
            return d.duration
        }
    }, hj = function () {
        if (l.performance && l.performance.now) {
            var a = O._p || {};
            a.PAGEVIEW = l.performance.now();
            O._p = a
        }
    };
    var ij = {}, jj = function () {
        return l.GoogleAnalyticsObject && l[l.GoogleAnalyticsObject]
    }, kj = !1;
    var lj = function (a) {
        l.GoogleAnalyticsObject || (l.GoogleAnalyticsObject = a || "ga");
        var b = l.GoogleAnalyticsObject;
        if (l[b]) l.hasOwnProperty(b) || zd(12); else {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Na());
            l[b] = c
        }
        cj();
        return l[b]
    }, mj = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = jj();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    }, nj = function (a) {
        if (!Td()) return;
        var b = jj();
        b(a + "require", "linker");
        b(a + "linker:passthrough",
            !0);
    };

    function oj() {
        return l.GoogleAnalyticsObject || "ga"
    }

    var pj = function (a) {
    }, qj = function (a, b) {
        return function () {
            var c = jj(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), k = f.get("hitCallback"), m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };
    var xj = function (a) {
        }, Bj = function (a) {
        }, Cj =
            function () {
                return "&tc=" + Jc.filter(function (a) {
                    return a
                }).length
            }, Fj = function () {
            2022 <= Dj().length && Ej()
        }, Gj = function (a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        }, Ij = function () {
            Hj || (Hj = l.setTimeout(Ej, 500))
        }, Ej = function () {
            Hj && (l.clearTimeout(Hj), Hj = void 0);
            void 0 === Jj || Kj[Jj] && !Lj && !Mj || (Nj[Jj] || Oj.Bi() || 0 >= Pj-- ? (zd(1), Nj[Jj] = !0) : (Oj.Wi(), Jb(Dj(!0)), Kj[Jj] = !0, Qj = Rj = Sj = Mj = Lj = ""))
        }, Dj = function (a) {
            var b = Jj;
            if (void 0 === b) return "";
            var c = yd("GTM"), d = yd("TAGGING");
            return [Tj, Kj[b] ? "" : "&es=1",
                Uj[b], xj(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Cj(), Lj, Mj, Sj, Rj, Bj(a), Qj, "&z=0"].join("")
        }, Wj = function () {
            Tj = Vj()
        }, Vj = function () {
            return [Tf, "&v=3&t=t", "&pid=" + xa(), "&rv=" + Jf.cd].join("")
        }, Aj = ["L", "S", "Y"], wj = ["S", "E"], Xj = {sampleRate: "0.005000", Hg: "", Gg: Number("5")},
        Yj = 0 <= B.location.search.indexOf("?gtm_latency=") || 0 <= B.location.search.indexOf("&gtm_latency="), Zj;
    if (!(Zj = Yj)) {
        var ak = Math.random(), bk = Xj.sampleRate;
        Zj = ak < bk
    }
    var ck = Zj, dk = {label: Jf.M + " Container", children: [{label: "Initialization", children: []}]}, Tj = Vj(),
        Kj = {}, Lj = "", Mj = "", Qj = "", Rj = "", zj = {}, yj = !1, vj = {}, ek = {}, Sj = "", Jj = void 0, Uj = {},
        Nj = {}, Hj = void 0, fk = 5;
    0 < Xj.Gg && (fk = Xj.Gg);
    var Oj = function (a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
        return {
            Bi: function () {
                return c < a ? !1 : Oa() - d[c % a] < b
            }, Wi: function () {
                var f = c++ % a;
                d[f] = Oa()
            }
        }
    }(fk, 1E3), Pj = 1E3, hk = function (a, b) {
        if (ck && !Nj[a] && Jj !==
            a) {
            Ej();
            Jj = a;
            Qj = Lj = "";
            Uj[a] = "&e=" + Gj(b) + "&eid=" + a;
            Ij();
        }
    }, ik = function (a, b, c, d) {
        if (ck && b) {
            var e, f = String(b[cc.mb] || "").replace(/_/g, "");
            0 === f.indexOf("cvt") && (f = "cvt");
            e = f;
            var g = c + e;
            if (!Nj[a]) {
                a !== Jj && (Ej(), Jj = a);
                Lj = Lj ? Lj + "." + g : "&tr=" + g;
                var k = b["function"];
                if (!k) throw Error("Error: No function name given for function call.");
                var m = (Lc[k] ? "1" : "2") + e;
                Qj = Qj ? Qj + "." + m : "&ti=" + m;
                Ij();
                Fj()
            }
        }
    };
    var pk = function (a, b, c) {
        if (ck && !Nj[a]) {
            a !== Jj && (Ej(), Jj = a);
            var d = c + b;
            Mj = Mj ? Mj + "." + d : "&epr=" + d;
            Ij();
            Fj()
        }
    }, qk = function (a, b, c) {
    };
    var rk = {
        active: !0, isAllowed: function () {
            return !0
        }
    }, sk = function (a) {
        var b = O.zones;
        return b ? b.checkState(Jf.M, a) : rk
    }, tk = function (a) {
        var b = O.zones;
        !b && a && (b = O.zones = a());
        return b
    };

    function uk() {
    }

    function vk() {
    };

    function wk(a, b, c, d) {
        var e = Jc[a], f = xk(a, b, c, d);
        if (!f) return null;
        var g = Qc(e[cc.Lf], c, []);
        if (g && g.length) {
            var k = g[0];
            f = wk(k.index, {onSuccess: f, onFailure: 1 === k.dg ? b.terminate : f, terminate: b.terminate}, c, d)
        }
        return f
    }

    function xk(a, b, c, d) {
        function e() {
            if (f[cc.Kh]) k(); else {
                var x = Rc(f, c, []);
                var z = x[cc.Mg];
                if (null != z) for (var w = 0; w < z.length; w++) if (!de(z[w])) {
                    k();
                    return
                }
                var y = Yi(c.nb, String(f[cc.mb]), Number(f[cc.Nf]), x[cc.Lh]), A = !1;
                x.vtp_gtmOnSuccess = function () {
                    if (!A) {
                        A = !0;
                        var E = Oa() - F;
                        ik(c.id, Jc[a], "5", E);
                        Zi(c.nb, y, "success",
                            E);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function () {
                    if (!A) {
                        A = !0;
                        var E = Oa() - F;
                        ik(c.id, Jc[a], "6", E);
                        Zi(c.nb, y, "failure", E);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                ik(c.id, f, "1");
                var C = function () {
                    var E = Oa() - F;
                    ik(c.id, f, "7", E);
                    Zi(c.nb, y, "exception", E);
                    A || (A = !0, k())
                };
                var F = Oa();
                try {
                    Pc(x, c)
                } catch (E) {
                    C(E)
                }
            }
        }

        var f = Jc[a], g = b.onSuccess, k = b.onFailure, m = b.terminate;
        if (c.He(f)) return null;
        var n = Qc(f[cc.Of], c, []);
        if (n && n.length) {
            var p = n[0], q = wk(p.index, {onSuccess: g, onFailure: k, terminate: m}, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.dg ? m : q
        }
        if (f[cc.Hf] || f[cc.Nh]) {
            var t = f[cc.Hf] ? Kc :
                c.cj, u = g, r = k;
            if (!t[a]) {
                e = Qa(e);
                var v = yk(a, t, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function () {
                t[a](u, r)
            }
        }
        return e
    }

    function yk(a, b, c) {
        var d = [], e = [];
        b[a] = zk(d, e, c);
        return {
            onSuccess: function () {
                b[a] = Ak;
                for (var f = 0; f < d.length; f++) d[f]()
            }, onFailure: function () {
                b[a] = Bk;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function zk(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ak(a) {
        a()
    }

    function Bk(a, b) {
        b()
    };var Ek = function (a, b) {
        for (var c = [], d = 0; d < Jc.length; d++) if (a[d]) {
            var e = Jc[d];
            var f = bj(b.nb);
            try {
                var g = wk(d, {onSuccess: f, onFailure: f, terminate: f}, b, d);
                if (g) {
                    var k = c, m = k.push, n = d, p = e["function"];
                    if (!p) throw"Error: No function name given for function call.";
                    var q = Lc[p];
                    m.call(k, {Bg: n, rg: q ? q.priorityOverride || 0 : 0, ni: g})
                } else Ck(d, b), f()
            } catch (r) {
                f()
            }
        }
        var t = b.nb;
        t.ba = !0;
        t.s >= t.C && $i(t);
        c.sort(Dk);
        for (var u = 0; u < c.length; u++) c[u].ni();
        return 0 < c.length
    };

    function Dk(a, b) {
        var c, d = b.rg, e = a.rg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var g = a.Bg, k = b.Bg;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function Ck(a, b) {
        if (!ck) return;
        var c = function (d) {
            var e = b.He(Jc[d]) ? "3" : "4", f = Qc(Jc[d][cc.Lf], b, []);
            f && f.length && c(f[0].index);
            ik(b.id, Jc[d], e);
            var g = Qc(Jc[d][cc.Of], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }

    var Fk = !1, Lk = function (a) {
        var b = Oa(), c = a["gtm.uniqueEventId"], d = a.event;
        if ("gtm.js" === d) {
            if (Fk) return !1;
            Fk = !0;
        }
        var g = sk(c), k = !1;
        if (!g.active) {
            if ("gtm.js" !== d) return !1;
            k = !0;
            g = sk(Number.MAX_SAFE_INTEGER)
        }
        hk(c, d);
        var m = a.eventCallback, n = a.eventTimeout, p = m;
        var q = {
            id: c, name: d, He: Pi(g.isAllowed), cj: [], mg: function () {
                zd(6)
            }, Zf: Gk(c), nb: new Xi(p, n)
        };
        q.Yf = Hk();
        Ik(c, q.nb);
        var t = Vc(q);
        k && (t = Jk(t));
        var u = Ek(t, q);
        "gtm.js" !== d && "gtm.sync" !== d || pj(Jf.M);
        return Kk(t, u)
    };

    function Gk(a) {
        return function (b) {
            ck && (bc(b) || qk(a, "input", b))
        }
    }

    function Ik(a, b) {
        hg(a, "event", 1);
        hg(a, "ecommerce", 1);
        hg(a, "gtm");
        hg(a, "eventModel");
    }

    function Hk() {
        var a = {};
        a.event = gg("event", 1);
        a.ecommerce = gg("ecommerce", 1);
        a.gtm = gg("gtm");
        a.eventModel = gg("eventModel");
        return a
    }

    function Jk(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Lf[String(Jc[c][cc.mb])] && (b[c] = !0);
        return b
    }

    function Kk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && Jc[c] && !Mf[String(Jc[c][cc.mb])]) return !0;
        return !1
    }

    function Mk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ne("" + c + b).href
        }
    }

    function Nk(a, b) {
        return Ok() ? Mk(a, b) : void 0
    }

    function Ok() {
        var a = !1;
        return a
    };var Pk;
    if (3 === Jf.cd.length) Pk = "g"; else {
        var Qk = "G";
        Qk = "g";
        Pk = Qk
    }
    var Rk = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Pk, OPT: "o"}, Sk = function (a) {
        var b = Jf.M.split("-"), c = b[0].toUpperCase(), d = Rk[c] || "i",
            e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
        if (3 === Jf.cd.length) {
            var g = "w";
            g = pi() ? "s" : "o";
            f = "2" + g
        } else f = "";
        return f + d + Jf.cd + e
    };

    function Tk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };var Uk = function (a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    var Vk = function () {
        return jb("iPhone") && !jb("iPod") && !jb("iPad")
    };
    jb("Opera");
    jb("Trident") || jb("MSIE");
    jb("Edge");
    !jb("Gecko") || -1 != gb.toLowerCase().indexOf("webkit") && !jb("Edge") || jb("Trident") || jb("MSIE") || jb("Edge");
    -1 != gb.toLowerCase().indexOf("webkit") && !jb("Edge") && jb("Mobile");
    jb("Macintosh");
    jb("Windows");
    jb("Linux") || jb("CrOS");
    var Wk = pa.navigator || null;
    Wk && (Wk.appVersion || "").indexOf("X11");
    jb("Android");
    Vk();
    jb("iPad");
    jb("iPod");
    Vk() || jb("iPad") || jb("iPod");
    gb.toLowerCase().indexOf("kaios");
    var Xk = function (a, b) {
        for (var c = a, d = 0; 50 > d; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b])
            } catch (k) {
                e = !1
            }
            if (e) return c;
            var f;
            a:{
                try {
                    var g = c.parent;
                    if (g && g != c) {
                        f = g;
                        break a
                    }
                } catch (k) {
                }
                f = null
            }
            if (!(c = f)) break
        }
        return null
    }, Yk = function (a) {
        var b = B;
        b = void 0 === b ? window.document : b;
        if (!a || !b.head) return null;
        var c = document.createElement("meta");
        b.head.appendChild(c);
        c.httpEquiv = "origin-trial";
        c.content = a;
        return c
    };
    var Zk = function () {
    };
    var $k = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, al = function (a, b) {
        this.s = a;
        this.o = null;
        this.F = {};
        this.ba = 0;
        this.P = void 0 === b ? 500 : b;
        this.C = null
    };
    oa(al, Zk);
    var cl = function (a) {
        return "function" === typeof a.s.__tcfapi || null != bl(a)
    };
    al.prototype.addEventListener = function (a) {
        var b = {}, c = ub(function () {
            return a(b)
        }), d = 0;
        -1 !== this.P && (d = setTimeout(function () {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.P));
        var e = function (f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = $k(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            dl(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    al.prototype.removeEventListener = function (a) {
        a && a.listenerId && dl(this, "removeEventListener", null, a.listenerId)
    };
    var fl = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g) return !1;
        var k = c;
        2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
        var m;
        if (0 === k) if (a.purpose && a.vendor) {
            var n = el(a.vendor.consents, void 0 === d ? "755" : d);
            m = n && "1" === b && a.purposeOneTreatment && ("DE" === a.publisherCC || "CH" === a.publisherCC) ? !0 : n && el(a.purpose.consents, b)
        } else m = !0; else m = 1 === k ? a.purpose &&
        a.vendor ? el(a.purpose.legitimateInterests, b) && el(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }, el = function (a, b) {
        return !(!a || !a[b])
    }, dl = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.s.__tcfapi) {
            var e = a.s.__tcfapi;
            e(b, 2, c, d)
        } else if (bl(a)) {
            gl(a);
            var f = ++a.ba;
            a.F[f] = c;
            if (a.o) {
                var g = {};
                a.o.postMessage((g.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, g), "*")
            }
        } else c({}, !1)
    }, bl = function (a) {
        if (a.o) return a.o;
        a.o = Xk(a.s, "__tcfapiLocator");
        return a.o
    }, gl = function (a) {
        a.C ||
        (a.C = function (b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, Uk(a.s, a.C))
    };
    var hl = !0;
    hl = !1;
    var il = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3}, jl = Tk("", 550), kl = Tk("", 500);

    function ll() {
        var a = O.tcf || {};
        return O.tcf = a
    }

    var ml = function (a, b) {
        this.C = a;
        this.o = b;
        this.s = Oa();
    }, nl = function (a) {
    }, ol = function (a) {
    }, ul = function () {
        var a = ll(), b = new al(l, hl ? 3E3 : -1), c = new ml(b, a);
        if ((pl() ? !0 === l.gtag_enable_tcf_support : !1 !== l.gtag_enable_tcf_support) && !a.active && ("function" === typeof l.__tcfapi || cl(b))) {
            a.active = !0;
            a.Bc = {};
            ql();
            var d = null;
            hl ? d = l.setTimeout(function () {
                rl(a);
                sl(a);
                d = null
            }, kl) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function (e) {
                    d && (clearTimeout(d), d = null);
                    if (0 !== e.internalErrorState) rl(a), sl(a), nl(c);
                    else {
                        var f;
                        a.gdprApplies = e.gdprApplies;
                        if (!1 === e.gdprApplies) f = tl(), b.removeEventListener(e); else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                            var g = {}, k;
                            for (k in il) if (il.hasOwnProperty(k)) if ("1" === k) {
                                var m = e, n = !0;
                                n = void 0 === n ? !1 : n;
                                var p;
                                var q = m;
                                !1 === q.gdprApplies ? p = !0 : (void 0 === q.internalErrorState && (q.internalErrorState = $k(q)), p = "error" === q.cmpStatus || 0 !== q.internalErrorState || "loaded" === q.cmpStatus && ("tcloaded" === q.eventStatus || "useractioncomplete" ===
                                    q.eventStatus) ? !0 : !1);
                                g["1"] = p ? !1 === m.gdprApplies || "tcunavailable" === m.tcString || void 0 === m.gdprApplies && !n || "string" !== typeof m.tcString || !m.tcString.length ? !0 : fl(m, "1", 0) : !1
                            } else g[k] = fl(e, k, il[k]);
                            f = g
                        }
                        f && (a.tcString = e.tcString || "tcempty", a.Bc = f, sl(a), nl(c))
                    }
                }), ol(c)
            } catch (e) {
                d && (clearTimeout(d), d = null), rl(a), sl(a)
            }
        }
    };

    function rl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        hl && (a.Bc = tl())
    }

    function ql() {
        var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = jl, a);
        ae(b)
    }

    var pl = function () {
        var a = !1;
        a = !0;
        return a
    };

    function tl() {
        var a = {}, b;
        for (b in il) il.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function sl(a) {
        var b = {}, c = (b.ad_storage = a.Bc["1"] ? "granted" : "denied", b);
        vl();
        ce(c, 0)
    }

    var wl = function () {
        var a = ll();
        if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
    }, vl = function () {
        var a = ll();
        return a.active ? a.tcString || "" : ""
    }, xl = function () {
        var a = ll();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }, yl = function (a) {
        if (!il.hasOwnProperty(String(a))) return !0;
        var b = ll();
        return b.active && b.Bc ? !!b.Bc[String(a)] : !0
    };
    var zl = !1;
    var Al = !1;

    function Bl(a) {
        var b = String(l.location).split(/[?#]/)[0], c = Jf.Pg || l._CONSENT_MODE_SALT;
        return a ? c ? String(qg(b + a + c)) : "0" : ""
    }

    function Cl(a) {
        function b(r) {
            var v;
            O.reported_gclid || (O.reported_gclid = {});
            v = O.reported_gclid;
            var x;
            x = !g || Td() && !de(M.D) ? m + (r ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (r ? "gcu" : "gcs");
            if (!v[x]) {
                v[x] = !0;
                var z = [], w = {}, y = function (J, L) {
                    L && (z.push(J + "=" + encodeURIComponent(L)), w[J] = !0)
                }, A = "https://www.google.com";
                if (Td()) {
                    var C = de(M.D);
                    y("gcs", ee());
                    r && y("gcu", "1");
                    Ud() && y("gcd", fe());
                    O.dedupe_gclid || (O.dedupe_gclid = "" + Jg());
                    y("rnd", O.dedupe_gclid);
                    if ((!m || n && "aw.ds" !== n) && de(M.D)) {
                        var F = Gh("_gcl_aw");
                        y("gclaw", F.join("."))
                    }
                    y("url", String(l.location).split(/[?#]/)[0]);
                    y("dclid", Dl(d, p));
                    var E = !1;
                    E = !0;
                    C || !d && !E || (A = "https://pagead2.googlesyndication.com")
                }
                y("gdpr_consent", vl()), y("gdpr", xl());
                "1" === qh(!1)._up && y("gtm_up", "1");
                y("gclid", Dl(d, m));
                y("gclsrc", n);
                if (!(w.gclid || w.dclid || w.gclaw) && (y("gbraid", Dl(d, q)), !w.gbraid && Td() && de(M.D))) {
                    var D = Gh("_gcl_gb");
                    y("gclgb", D.join("."))
                }
                y("gtm", Sk(!e));
                g && de(M.D) && (Tg(f || {}), y("auid", Qg[Rg(f.prefix)] || ""));
                zl || a.kd && y("did", a.kd), Al && (a.Mb && y("gdid", a.Mb), a.Lb && y("edid", a.Lb));
                var K = A + "/pagead/landing?" + z.join("&");
                Qb(K)
            }
        }

        var c = !!a.te, d = !!a.sa, e = a.U, f = void 0 === a.hd ? {} : a.hd, g = void 0 === a.td ? !0 : a.td, k = Mh(),
            m = k.gclid || "", n = k.gclsrc, p = k.dclid || "", q = k.gbraid || "",
            t = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q), u = Td();
        if (t || u) u ? he(function () {
            b();
            de(M.D) || ge(function (r) {
                return b(!0, r.ai)
            }, M.D)
        }, [M.D]) : b()
    }

    function Dl(a, b) {
        var c = a && !de(M.D);
        return b && c ? "0" : b
    }

    var El = ["aw", "dc", "gb"];

    function Fl(a, b, c, d) {
        var e = a.Fg, f = a.callback, g = a.ng;
        if ("function" === typeof f) if (e === M.Hd && void 0 === g) {
            var k = d(b.prefix, c);
            0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k)
        } else e === M.eh ? (zd(65), Tg(b, !1), f(Qg[Rg(b.prefix)])) : f(g)
    }

    function Gl(a, b) {
        var c = a.lg, d = a.Dg;
        a.Kb && (yh(c[M.Fb], !!c[M.O]) && Rh(El, b), Oh(b), Uh(El, b), hi(b));
        c[M.O] && Th(El, c[M.O], c[M.Yb], !!c[M.Gb], b.prefix);
        d && Wh(["aw", "dc", "gb"])
    };var Hl = !1;
    var Il = function () {
        this.o = {}
    }, Jl = function (a, b, c) {
        null != c && (a.o[b] = c)
    }, Kl = function (a) {
        return Object.keys(a.o).map(function (b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.o[b])
        }).join("&")
    }, Ml = function (a, b, c, d, e) {
    };
    var Ol = !1, Pl = Number("200");

    function Ql() {
        if (!l.Promise) return !1;
        sa(B.interestCohort) || Ol || (Ol = !0, Yk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
        return sa(B.interestCohort)
    }

    function Rl() {
        var a = O.floc;
        if (a) {
            var b = a.ts, c = a.floc;
            if (b && c && 1E3 > Oa() - b) return Promise.resolve(c)
        }
        var d = void 0;
        try {
            d = Promise.race([B.interestCohort().then(function (e) {
                O.floc = {ts: Oa(), floc: e};
                return e
            }), new Promise(function (e) {
                l.setTimeout(function () {
                    return e()
                }, Pl)
            })]).catch(function () {
            })
        } catch (e) {
            return
        }
        return d
    }

    var Qm = function () {
        var a = !0;
        yl(7) && yl(9) && yl(10) || (a = !1);
        var b = !0;
        b = !1;
        b && !Pm() && (a = !1);
        return a
    }, Pm = function () {
        var a = !0;
        yl(3) && yl(4) || (a = !1);
        return a
    };
    var Um = function (a, b) {
        var c = b.getWithConfig(M.Oa), d = b.getWithConfig(M.Wa), e = b.getWithConfig(c);
        if (void 0 === e) {
            var f = void 0;
            Rm.hasOwnProperty(c) ? f = Rm[c] : Sm.hasOwnProperty(c) && (f = Sm[c]);
            1 === f && (f = Tm(c));
            h(f) ? jj()(function () {
                var g = jj().getByName(a).get(f);
                d(g)
            }) : d(void 0)
        } else d(e);
    }, Vm = function (a, b) {
        var c = a[M.Yb];
        mj(b + ".", a[M.O] || "", void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[M.Gb])
    }, Zm = function (a, b, c) {
        if (Td() && (!c.isGtmEvent || !Wm[a])) {
            var d =
                !de(M.I), e = function () {
                var f, g, k = jj(), m = Xm(a, b, "", c), n, p = m.Ba._useUp;
                if (c.isGtmEvent || Ym(b, m.Ba)) {
                    var q = !0;
                    if (c.isGtmEvent) {
                        f = "gtm" + Wf();
                        g = m.Ba;
                        m.gtmTrackerName && (g.name = f);
                        q = !1;
                        q = !0;
                    }
                    q && k(function () {
                        var u = k.getByName(b);
                        u && (n = u.get("clientId"));
                        c.isGtmEvent || k.remove(b)
                    });
                    k("create", a, c.isGtmEvent ? g : m.Ba);
                    d && de(M.I) && (d = !1, k(function () {
                        var u = jj().getByName(c.isGtmEvent ? f : b);
                        !u || u.get("clientId") == n && p || (c.isGtmEvent ? m.oc["&gcu"] = "1" : m.ka["&gcu"] = "1", u.set(m.oc), c.isGtmEvent ? u.send("pageview") : u.send("pageview", m.ka))
                    }));
                    c.isGtmEvent && k(function () {
                        k.remove(f)
                    })
                }
            };
            Yd(e, M.I);
            Yd(e, M.D);
            c.isGtmEvent &&
            (Wm[a] = !0)
        }
    }, gn = function (a, b, c) {
        function d() {
            var D = c.getWithConfig("custom_map");
            k(function () {
                if (!c.isGtmEvent && ac(D)) {
                    var K = r.ka, J = m().getByName(n), L;
                    for (L in D) if (D.hasOwnProperty(L) && /^(dimension|metric)\d+$/.test(L) && void 0 != D[L]) {
                        var P = J.get(Tm(D[L]));
                        $m(K, L, P)
                    }
                }
            })
        }

        function e() {
            if (r.displayfeatures) {
                var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {cookieName: D})
            }
        }

        var f = a, g = "https://www.google-analytics.com/analytics.js",
            k = c.isGtmEvent ? lj(c.getWithConfig("gaFunctionName")) :
                lj();
        if (sa(k)) {
            var m = jj, n;
            c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function (D) {
                var K = [].slice.call(arguments, 0);
                K[0] = n ? n + "." + K[0] : "" + K[0];
                k.apply(window, K)
            }, q = function () {
                var D = function (N, I) {
                    for (var T = 0; I && T < I.length; T++) p(N, I[T])
                }, K = c.isGtmEvent, J = K ? an(r) : bn(b, c);
                if (J) {
                    p("require", "ec", "ec.js");
                    K && J.ve && p("set", "&cu", J.ve);
                    var L = J.action;
                    if (K || "impressions" === L) if (D("ec:addImpression", J.kg), !K) return;
                    if ("promo_click" === L || "promo_view" ===
                        L || K && J.Ac) {
                        var P = J.Ac;
                        D("ec:addPromo", P);
                        if (P && 0 < P.length && "promo_click" === L) {
                            K ? p("ec:setAction", L, J.ab) : p("ec:setAction", L);
                            return
                        }
                        if (!K) return
                    }
                    "promo_view" !== L && "impressions" !== L && (D("ec:addProduct", J.rb), p("ec:setAction", L, J.ab))
                }
            }, t = function (D) {
                if (D) {
                    var K = {};
                    if (ac(D)) for (var J in cn) cn.hasOwnProperty(J) && dn(cn[J], J, D[J], K);
                    p("require", "linkid", K)
                }
            }, u = function () {
                if (pi()) {
                } else {
                    var D = c.getWithConfig(M.xh);
                    D && (p("require",
                        D, {dataLayer: "dataLayer"}), p("require", "render"))
                }
            }, r = Xm(f, n, b, c), v = function (D, K, J) {
                J && (K = "" + K);
                r.ka[D] = K
            };
            !c.isGtmEvent && Ym(n, r.Ba) && (k(function () {
                m() && m().remove(n)
            }), en[n] = !1);
            k("create", f, r.Ba);
            if (r.Ba._x_19 && !c.isGtmEvent) {
                var x = Nk(r.Ba._x_19, "/analytics.js");
                x && (g = x)
            }
            if (c.isGtmEvent ? r.oc._x_19 : r.Ba._x_19) {
                var z = c.isGtmEvent ? r.oc._x_20 : r.Ba._x_20;
                z && !en[n] && (en[n] = !0, k(qj(n, z)))
            }
            c.isGtmEvent ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(r.linkAttribution));
            var w = r[M.oa];
            w && w[M.O] && Vm(w, n);
            p("set", r.oc);
            c.isGtmEvent && r.enableLinkId && p("require", "linkid", "linkid.js");
            c.isGtmEvent && Td() && Zm(f, n, c);
            if (b === M.Ub) if (c.isGtmEvent) {
                e();
                if (r.remarketingLists) {
                    var y = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "adfeatures", {cookieName: y})
                }
                q();
                p("send", "pageview");
                r.Ba._useUp && nj(n + ".")
            } else u(), p("send", "pageview", r.ka); else b === M.Da ? (u(), Ci(f, c), c.getWithConfig(M.$a) && (Wh(["aw", "dc"]), nj(n + ".")), 0 != r.sendPageView && p("send", "pageview", r.ka), Zm(f, n, c)) : b === M.La ? Um(n,
                c) : "screen_view" === b ? p("send", "screenview", r.ka) : "timing_complete" === b ? (r.ka.hitType = "timing", v("timingCategory", r.eventCategory, !0), c.isGtmEvent ? v("timingVar", r.timingVar, !0) : v("timingVar", r.name, !0), v("timingValue", Ga(r.value)), void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0), p("send", r.ka)) : "exception" === b ? p("send", "exception", r.ka) : "optimize.callback" === b || "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (r.ka.hitType = "social", v("socialNetwork", r.socialNetwork, !0), v("socialAction",
                r.socialAction, !0), v("socialTarget", r.socialTarget, !0)) : ((c.isGtmEvent || 0 <= va([M.Ab, "select_content", M.Ka, M.yb, M.zb, M.hb, "set_checkout_option", M.xa, M.Bb, M.Tb, "checkout_progress"], b)) && q(), c.isGtmEvent && e(), r.ka.hitType = "event", v("eventCategory", r.eventCategory, !0), v("eventAction", r.eventAction || b, !0), void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0), void 0 !== r.value && v("eventValue", Ga(r.value))), p("send", r.ka));
            var A = !1;
            var C = fn;
            A && (C = c.getContainerTypeLoaded("UA"));
            if (!C && !c.isGtmEvent) {
                fn = !0;
                A && c.setContainerTypeLoaded("UA", !0);
                cj();
                var F = function () {
                    A && c.setContainerTypeLoaded("UA", !1);
                    c.onFailure()
                }, E = function () {
                    m().loaded || F()
                };
                pi() ? G(E) : Db(g, E, F)
            }
        } else G(c.onFailure)
    }, hn = function (a, b, c, d) {
        he(function () {
            gn(a, b, d)
        }, [M.I, M.D])
    }, kn = function (a, b) {
        function c(f) {
            function g(p, q) {
                for (var t = 0; t < q.length; t++) {
                    var u = q[t];
                    if (f[u]) {
                        m[p] = f[u];
                        break
                    }
                }
            }

            function k() {
                if (f.category) m.category = f.category; else {
                    for (var p = "", q = 0; q < jn.length; q++) void 0 !== f[jn[q]] && (p && (p += "/"), p += f[jn[q]]);
                    p && (m.category = p)
                }
            }

            var m = H(f), n = !1;
            if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]),
                g("position", ["list_position", "creative_slot", "index"]), k();
            g("listPosition", ["list_position"]);
            g("creative", ["creative_name"]);
            g("list", ["list_name"]);
            g("position", ["list_position", "creative_slot"]);
            return m
        }

        b = void 0 === b ? !1 : b;
        for (var d = [], e = 0; a && e < a.length; e++) a[e] && ac(a[e]) && d.push(c(a[e]));
        return d.length ? d : void 0
    }, ln = function (a) {
        return de(a)
    }, mn = !1;
    var nn = !1;
    var fn, en = {}, Wm = {}, Rm = {
            client_id: 1,
            client_storage: "storage",
            cookie_name: 1,
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_path: 1,
            cookie_update: 1,
            cookie_flags: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            use_amp_client_id: 1,
            store_gac: 1,
            conversion_linker: "storeGac"
        }, on = {
            name: !0,
            clientId: !0,
            sampleRate: !0,
            siteSpeedSampleRate: !0,
            alwaysSendReferrer: !0,
            allowAnchor: !0,
            allowLinker: !0,
            cookieName: !0,
            cookieDomain: !0,
            cookieExpires: !0,
            cookiePath: !0,
            cookieUpdate: !0,
            cookieFlags: !0,
            legacyCookieDomain: !0,
            legacyHistoryImport: !0,
            storage: !0,
            useAmpClientId: !0,
            storeGac: !0,
            _cd2l: !0,
            _useUp: !0,
            _cs: !0
        }, pn = {anonymize_ip: 1}, Sm = {
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignKeyword",
                content: "campaignContent",
                id: "campaignId"
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        }, qn = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        }, rn = {
            eventCategory: !0,
            eventAction: !0,
            eventLabel: !0,
            timingVar: !0,
            value: !0,
            socialNetwork: !0,
            socialAction: !0,
            socialTarget: !0,
            gaFunctionName: !0,
            displayfeatures: !0,
            remarketingLists: !0,
            enableLinkId: !0,
            enableRecaptcha: !0,
            linker: !0,
            gtmEcommerceData: !0,
            gtmTrackerName: !0
        }, jn = ["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"],
        cn = {cookie_name: 1, cookie_expires: "duration", levels: 1}, sn = {
            anonymize_ip: 1,
            fatal: 1,
            non_interaction: 1,
            use_amp_client_id: 1,
            send_page_view: 1,
            store_gac: 1,
            conversion_linker: 1
        }, dn = function (a, b, c, d) {
            if (void 0 !== c) if (sn[b] && (c = Ha(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Tm(b)] = c; else if (h(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        }, Tm = function (a) {
            return a && h(a) ? a.replace(/(_[a-z])/g, function (b) {
                    return b[1].toUpperCase()
                }) :
                a
        }, tn = function (a) {
            var b = "general";
            0 <= va([M.ff, M.yb, M.hf, M.hb, "checkout_progress", M.xa, M.Bb, M.zb, "set_checkout_option"], a) ? b = "ecommerce" : 0 <= va("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
            return b
        }, $m = function (a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        }, un = function (a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id, f = d.variant;
                        void 0 != e && void 0 !=
                        f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        }, Xm = function (a, b, c, d) {
            function e(P, N) {
                void 0 !== N && (m[P] = N)
            }

            var f = function (P) {
                return d.getWithConfig(P)
            }, g = {}, k = {}, m = {}, n = {}, p = un(f(M.th));
            !d.isGtmEvent && p && $m(k, "exp", p);
            m["&gtm"] = Sk(!0);
            Td() && (n._cs = ln);
            var q = f("custom_map");
            if (!d.isGtmEvent && ac(q)) for (var t in q) if (q.hasOwnProperty(t) && /^(dimension|metric)\d+$/.test(t) && void 0 != q[t]) {
                var u = f(String(q[t]));
                void 0 !== u && $m(k, t, u)
            }
            for (var r = Hf(d), v = 0; v < r.length; ++v) {
                var x = r[v];
                if (d.isGtmEvent) {
                    var z = f(x);
                    rn.hasOwnProperty(x) ? g[x] = z : on.hasOwnProperty(x) ? n[x] = z : "currencyCode" != x && (m[x] = z)
                } else {
                    var w = void 0;
                    w = "developer_id" != x ? f(x) : If(d, x);
                    if (qn.hasOwnProperty(x)) dn(qn[x], x, w, g); else if (pn.hasOwnProperty(x)) dn(pn[x], x, w, m); else if (Sm.hasOwnProperty(x)) dn(Sm[x], x, w, k); else if (Rm.hasOwnProperty(x)) dn(Rm[x], x, w, n); else if (/^(dimension|metric|content_group)\d+$/.test(x)) dn(1, x, w, k); else if ("developer_id" === x) {
                        if (!mn) {
                            var y = Ya(w);
                            y && (k["&did"] = y)
                        }
                        if (nn) {
                            var A = Ya(If(d, x, 1), ".");
                            A && (k["&gdid"] = A);
                            var C = Ya(If(d, x, 2), ".");
                            C && (k["&edid"] = C)
                        }
                    } else x === M.ca && 0 > va(r, M.Mc) && (n.cookieName = w + "_ga")
                }
            }
            !1 !== f(M.dh) && !1 !== f(M.Vb) && Qm() || (m.allowAdFeatures = !1);
            if (!1 === f(M.Ea) || !Pm()) {
                var F = d.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
                F = "allowAdPersonalizationSignals";
                m[F] = !1
            }
            !d.isGtmEvent && f(M.$a) && (n._useUp = !0);
            if (d.isGtmEvent) {
                n.name = n.name || g.gtmTrackerName;
                var E = m.hitCallback;
                m.hitCallback = function () {
                    sa(E) && E();
                    d.onSuccess()
                }
            } else {
                $m(n, "cookieDomain", "auto");
                $m(m, "forceSSL", !0);
                $m(g, "eventCategory", tn(c));
                0 <= va(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && $m(k, "nonInteraction", !0);
                "login" === c || "sign_up" === c || "share" === c ? $m(g, "eventLabel", f(M.wh)) : "search" === c || "view_search_results" === c ? $m(g, "eventLabel", f(M.Ch)) : "select_content" === c && $m(g, "eventLabel", f(M.nh));
                var D = g[M.oa] || {}, K = D[M.Fb];
                K || 0 != K && D[M.O] ? n.allowLinker = !0 : !1 === K && $m(n, "useAmpClientId",
                    !1);
                k.hitCallback = d.onSuccess;
                n.name = b
            }
            Td() && (m["&gcs"] = ee(), de(M.I) || (n.storage = "none"), de(M.D) || (m.allowAdFeatures = !1, n.storeGac = !1));
            var J = f(M.qa) || f(M.vh) || cg("gtag.remote_config." + a + ".url", 2),
                L = f(M.uh) || cg("gtag.remote_config." + a + ".dualId", 2);
            if (J) {
                d.isGtmEvent || (n._x_19 = J);
                n._cd2l = !0;
            }
            L && !d.isGtmEvent && (n._x_20 = L);
            g.ka = k;
            g.oc = m;
            g.Ba = n;
            return g
        }, an = function (a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.ve = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.kg = "impressions" === b.translateIfKeyEquals ?
                    kn(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Ac = "promoView" === b.translateIfKeyEquals ? kn(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Ac = "promoClick" === b.translateIfKeyEquals ? kn(f, !0) : f;
                c.ab = b.promoClick.actionField;
                return c
            }
            for (var g in b) if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var k = b[g].products;
                c.rb = "products" === b.translateIfKeyEquals ?
                    kn(k, !0) : k;
                c.ab = b[g].actionField;
                break
            }
            return Object.keys(c).length ? c : null
        }, bn = function (a, b) {
            function c(u) {
                return {
                    id: d(M.Za),
                    affiliation: d(M.qh),
                    revenue: d(M.fa),
                    tax: d(M.qf),
                    shipping: d(M.Rd),
                    coupon: d(M.rh),
                    list: d(M.Qd) || u
                }
            }

            for (var d = function (u) {
                return b.getWithConfig(u)
            }, e = d(M.X), f, g = 0; e && g < e.length && !(f = e[g][M.Qd]); g++) ;
            var k = d("custom_map");
            if (ac(k)) for (var m = 0; e && m < e.length; ++m) {
                var n = e[m], p;
                for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && $m(n, p, n[k[p]])
            }
            var q = null,
                t = d(M.sh);
            a === M.xa || a === M.Bb ? q = {action: a, ab: c(), rb: kn(e)} : a === M.yb ? q = {
                action: "add",
                rb: kn(e)
            } : a === M.zb ? q = {action: "remove", rb: kn(e)} : a === M.Ka ? q = {
                action: "detail",
                ab: c(f),
                rb: kn(e)
            } : a === M.Ab ? q = {action: "impressions", kg: kn(e)} : "view_promotion" === a ? q = {
                action: "promo_view",
                Ac: kn(t)
            } : "select_content" === a && t && 0 < t.length ? q = {
                action: "promo_click",
                Ac: kn(t)
            } : "select_content" === a ? q = {
                action: "click",
                ab: {list: d(M.Qd) || f},
                rb: kn(e)
            } : a === M.hb || "checkout_progress" === a ? q = {
                action: "checkout", rb: kn(e), ab: {
                    step: a === M.hb ? 1 : d(M.pf),
                    option: d(M.nf)
                }
            } : "set_checkout_option" === a && (q = {action: "checkout_option", ab: {step: d(M.pf), option: d(M.nf)}});
            q && (q.ve = d(M.da));
            return q
        }, vn = {}, Ym = function (a, b) {
            var c = vn[a];
            vn[a] = H(b);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var wn = !1;
    var xn = !1;
    xn = !0;

    function yn() {
        var a = O;
        return a.gcq = a.gcq || new zn
    }

    var An = function (a, b, c) {
        yn().register(a, b, c)
    }, Bn = function (a, b, c, d) {
        yn().push("event", [b, a], c, d)
    }, Cn = function (a, b) {
        yn().push("config", [a], b)
    }, Dn = function (a, b, c, d) {
        yn().push("get", [a, b], c, d)
    }, En = {}, Fn = function () {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.s = {};
        this.C = null;
        this.o = !1
    }, Gn = function (a, b, c, d, e) {
        this.type = a;
        this.C = b;
        this.U = c || "";
        this.o = d;
        this.s = e
    }, zn = function () {
        this.s = {};
        this.C = {};
        this.o = [];
        this.F = {AW: !1, UA: !1};
        this.enableDeferrableCommandAfterConfig =
            wn
    }, Hn = function (a, b) {
        var c = mi(b);
        return a.s[c.containerId] = a.s[c.containerId] || new Fn
    }, In = function (a, b, c) {
        if (b) {
            var d = mi(b);
            if (d && 1 === Hn(a, b).status) {
                Hn(a, b).status = 2;
                var e = {};
                ck && (e.timeoutId = l.setTimeout(function () {
                    zd(38);
                    Ij()
                }, 3E3));
                a.push("require", [e], d.containerId);
                En[d.containerId] = Oa();
                if (pi()) {
                } else {
                    var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                        k = ("http:" != l.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                        m = Nk(c, g) || k;
                    Db(m)
                }
            }
        }
    }, Jn = function (a, b, c, d) {
        if (d.U) {
            var e = Hn(a, d.U), f = e.C;
            if (f) {
                var g = H(c), k = H(e.targetConfig[d.U]), m = H(e.containerConfig), n = H(e.remoteConfig), p = H(a.C),
                    q = cg("gtm.uniqueEventId"), t = mi(d.U).prefix, u = Qa(function () {
                        var v = g[M.Db];
                        v && G(v)
                    }), r = Ff(Ef(Gf(Df(Cf(Bf(Af(zf(yf(g), k), m), n), p), function () {
                        pk(q, t, "2");
                        xn && u()
                    }), function () {
                        pk(q, t, "3");
                        xn && u()
                    }), function (v, x) {
                        a.F[v] = x
                    }), function (v) {
                        return a.F[v]
                    });
                try {
                    pk(q, t, "1");
                    f(d.U, b, d.C, r)
                } catch (v) {
                    pk(q, t, "4");
                }
            }
        }
    };
    zn.prototype.register = function (a, b, c) {
        var d = Hn(this, a);
        if (3 !== d.status) {
            d.C = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), d.remoteConfig = c);
            var e = mi(a), f = En[e.containerId];
            if (void 0 !== f) {
                var g = O[e.containerId].bootstrap, k = e.prefix.toUpperCase();
                O[e.containerId]._spx && (k = k.toLowerCase());
                var m = cg("gtm.uniqueEventId"), n = k, p = Oa() - g;
                if (ck && !Nj[m]) {
                    m !== Jj && (Ej(), Jj = m);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Rj = Rj ? Rj + "," + q : "&cl=" + q
                }
                delete En[e.containerId]
            }
            this.flush()
        }
    };
    zn.prototype.push = function (a, b, c, d) {
        var e = Math.floor(Oa() / 1E3);
        In(this, c, b[0][M.qa] || this.C[M.qa]);
        wn && c && Hn(this, c).o && (d = !1);
        this.o.push(new Gn(a, e, c, b, d));
        d || this.flush()
    };
    zn.prototype.insert = function (a, b, c) {
        var d = Math.floor(Oa() / 1E3);
        0 < this.o.length ? this.o.splice(1, 0, new Gn(a, d, c, b, !1)) : this.o.push(new Gn(a, d, c, b, !1))
    };
    zn.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.o.length;) {
            var f = this.o[0];
            if (f.s) wn ? !f.U || Hn(this, f.U).o ? (f.s = !1, this.o.push(f)) : c.push(f) : (f.s = !1, this.o.push(f)), this.o.shift(); else {
                switch (f.type) {
                    case "require":
                        if (3 !== Hn(this, f.U).status && !a) {
                            wn && this.o.push.apply(this.o, c);
                            return
                        }
                        ck && l.clearTimeout(f.o[0].timeoutId);
                        break;
                    case "set":
                        Ca(f.o[0], function (t, u) {
                            H(Wa(t, u), b.C)
                        });
                        break;
                    case "config":
                        e.Ja = {};
                        Ca(f.o[0], function (t) {
                            return function (u, r) {
                                H(Wa(u, r), t.Ja)
                            }
                        }(e));
                        var g = !!e.Ja[M.Vc];
                        delete e.Ja[M.Vc];
                        var k = Hn(this, f.U), m = mi(f.U), n = m.containerId === m.id;
                        g || (n ? k.containerConfig = {} : k.targetConfig[f.U] = {});
                        k.o && g || Jn(this, M.Da, e.Ja, f);
                        k.o = !0;
                        delete e.Ja[M.fc];
                        n ? H(e.Ja, k.containerConfig) : H(e.Ja, k.targetConfig[f.U]);
                        wn && (d = !0);
                        break;
                    case "event":
                        e.Fc = {};
                        Ca(f.o[0], function (t) {
                            return function (u, r) {
                                H(Wa(u, r), t.Fc)
                            }
                        }(e));
                        Jn(this, f.o[1], e.Fc, f);
                        break;
                    case "get":
                        var p = {}, q = (p[M.Oa] = f.o[0], p[M.Wa] = f.o[1], p);
                        Jn(this, M.La, q, f)
                }
                this.o.shift();
                Kn(this, f)
            }
            e = {Ja: e.Ja, Fc: e.Fc}
        }
        wn && (this.o.push.apply(this.o,
            c), d && this.flush())
    };
    var Kn = function (a, b) {
        if ("require" !== b.type) if (b.U) for (var c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.s) if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s) for (var g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]()
        }
    };
    zn.prototype.getRemoteConfig = function (a) {
        return Hn(this, a).remoteConfig
    };
    zn.prototype.getCommandListeners = function (a) {
        return Hn(this, a).s
    };
    var Ln = function (a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": Rb(a, "className"),
            "gtm.elementId": a["for"] || Mb(a, "id") || "",
            "gtm.elementTarget": a.formTarget || Rb(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Rb(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }, Mn = function (a) {
        O.hasOwnProperty("autoEventsSettings") || (O.autoEventsSettings = {});
        var b = O.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, Nn = function (a, b, c) {
        Mn(a)[b] = c
    }, On = function (a, b, c, d) {
        var e = Mn(a), f = Pa(e, b, d);
        e[b] = c(f)
    }, Pn = function (a, b, c) {
        var d = Mn(a);
        return Pa(d, b, c)
    };
    var Qn = ["input", "select", "textarea"], Rn = ["button", "hidden", "image", "reset", "submit"], Sn = function (a) {
        var b = a.tagName.toLowerCase();
        return !wa(Qn, function (c) {
            return c === b
        }) || "input" === b && wa(Rn, function (c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    }, Tn = function (a) {
        return a.form ? a.form.tagName ? a.form : B.getElementById(a.form) : Pb(a, ["form"], 100)
    }, Un = function (a, b, c) {
        if (!a.elements) return 0;
        for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
            var g = a.elements[e];
            if (Sn(g)) {
                if (g.dataset[c] === d) return f;
                f++
            }
        }
        return 0
    };
    var Vn = !!l.MutationObserver, Wn = void 0, Xn = function (a) {
        if (!Wn) {
            var b = function () {
                var c = B.body;
                if (c) if (Vn) (new MutationObserver(function () {
                    for (var e = 0; e < Wn.length; e++) G(Wn[e])
                })).observe(c, {childList: !0, subtree: !0}); else {
                    var d = !1;
                    Kb(c, "DOMNodeInserted", function () {
                        d || (d = !0, G(function () {
                            d = !1;
                            for (var e = 0; e < Wn.length; e++) G(Wn[e])
                        }))
                    })
                }
            };
            Wn = [];
            B.body ? b() : G(b)
        }
        Wn.push(a)
    };
    var Zn = !1, $n = [];

    function ao() {
        if (!Zn) {
            Zn = !0;
            for (var a = 0; a < $n.length; a++) G($n[a])
        }
    }

    var bo = function (a) {
        Zn ? G(a) : $n.push(a)
    };

    function co(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    var eo = new ya;

    function fo(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d, f = eo.get(e);
            f || (f = new RegExp(b, d), eo.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function go(a, b) {
        function c(g) {
            var k = Ne(g), m = De(k, "protocol"), n = De(k, "host", !0), p = De(k, "port"),
                q = De(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" == m && "80" == p || "https" == m && "443" == p) m = "web", p = "default";
            return [m, n, p, q]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    }

    function ho(a) {
        return io(a) ? 1 : 0
    }

    function io(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({arg1: c[d], any_of: void 0}, e);
                if (ho(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a:{
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var k = 0; k < g.length; k++) if (b[g[k]]) {
                                f = b[g[k]](c);
                                break a
                            }
                        } catch (n) {
                        }
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return co(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= va(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return fo(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return go(b, c)
        }
        return !1
    };Object.freeze({dl: 1, id: 1});
    var jo = {}, ko = function (a, b) {
        b = b.toString().split(",");
        for (var c = 0; c < b.length; c++) {
            var d = jo[b[c]] || [];
            jo[b[c]] = d;
            0 > va(d, a) && d.push(a)
        }
    }, lo = function (a) {
        Ca(jo, function (b, c) {
            var d = va(c, a);
            0 <= d && c.splice(d, 1)
        })
    };
    var mo = "HA GF G UA AW DC".split(" "), no = !1;
    no = !0;
    var oo = !1, po = !1;

    function qo(a, b) {
        var c = {event: a};
        b && (c.eventModel = H(b), b[M.Db] && (c.eventCallback = b[M.Db]), b[M.Pc] && (c.eventTimeout = b[M.Pc]));
        return c
    }

    function ro(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {value: Wf()});
        return a["gtm.uniqueEventId"]
    }

    function so() {
        if (!oo && !O.gtagRegistered) {
            oo = O.gtagRegistered = !0;
            O.addTargetToGroup = function (c) {
                ko(c, "default")
            };
        }
        return oo
    }

    var to = {
        config: function (a) {
            var b, c = ro(a);
            if (2 > a.length || !h(a[1])) return;
            var d = {};
            if (2 < a.length) {
                if (void 0 != a[2] && !ac(a[2]) || 3 < a.length) return;
                d = a[2]
            }
            var e = mi(a[1]);
            if (!e) return;
            lo(e.id);
            ko(e.id, d[M.Vd] || "default");
            delete d[M.Vd];
            po || zd(43);
            if (so() && -1 !== va(mo, e.prefix)) {
                "G" === e.prefix && (d[M.fc] = !0);
                no && delete d[M.Db];
                Cn(d, e.id);
                return
            }
            fg("gtag.targets." + e.id, void 0);
            fg("gtag.targets." + e.id, H(d));
            var f = {};
            f[M.lb] = e.id;
            b = qo(M.Da, f);
            b["gtm.uniqueEventId"] = c;
            return b
        }, consent: function (a) {
            function b() {
                so() && H(a[2], {subcommand: a[1]})
            }

            if (3 === a.length) {
                zd(39);
                var c = Wf(), d = a[1];
                "default" === d ? (b(), ae(a[2])) : "update" === d && (b(), ce(a[2], c))
            }
        }, event: function (a) {
            var b = a[1];
            if (!(2 > a.length) && h(b)) {
                var c;
                if (2 < a.length) {
                    if (!ac(a[2]) && void 0 != a[2] || 3 < a.length) return;
                    c = a[2]
                }
                var d = qo(b, c), e = ro(a);
                d["gtm.uniqueEventId"] = e;
                var f;
                var g = c && c[M.lb];
                void 0 === g && (g = cg(M.lb, 2), void 0 === g && (g = "default"));
                if (h(g) || ua(g)) {
                    for (var k = g.toString().replace(/\s+/g,
                        "").split(","), m = [], n = 0; n < k.length; n++) if (0 <= k[n].indexOf("-")) m.push(k[n]); else {
                        var p = jo[k[n]];
                        p && p.length && (m = m.concat(p))
                    }
                    f = oi(m)
                } else f = void 0;
                var q = f;
                if (!q) return;
                for (var t = so(), u = [], r = 0; t && r < q.length; r++) {
                    var v = q[r];
                    if (-1 !== va(mo, v.prefix)) {
                        var x = H(c);
                        "G" === v.prefix && (x[M.fc] = !0);
                        no && delete x[M.Db];
                        Bn(b, x, v.id)
                    }
                    u.push(v.id)
                }
                d.eventModel = d.eventModel || {};
                0 < q.length ? d.eventModel[M.lb] = u.join() : delete d.eventModel[M.lb];
                po || zd(43);
                return d
            }
        }, get: function (a) {
            zd(53);
            if (4 !== a.length || !h(a[1]) || !h(a[2]) || !sa(a[3])) return;
            var b = mi(a[1]), c = String(a[2]), d = a[3];
            if (!b) return;
            po || zd(43);
            if (!so() || -1 === va(mo, b.prefix)) return;
            Wf();
            var e = {};
            uk(H((e[M.Oa] = c, e[M.Wa] = d, e)));
            Dn(c, function (f) {
                G(function () {
                    return d(f)
                })
            }, b.id);
        }, js: function (a) {
            if (2 == a.length && a[1].getTime) {
                po = !0;
                so();
                var b = {};
                return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = ro(a), b
            }
        }, policy: function () {
        }, set: function (a) {
            var b;
            2 == a.length && ac(a[1]) ?
                b = H(a[1]) : 3 == a.length && h(a[1]) && (b = {}, ac(a[2]) || ua(a[2]) ? b[a[1]] = H(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (Wf(), so()) {
                    H(b);
                    var c = H(b);
                    yn().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    }, uo = {policy: !0};
    var vo = function (a, b) {
        var c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            var d = !0, e;
            for (e in c) if (c.hasOwnProperty(e) && !0 === c[e]) {
                d = !1;
                break
            }
            d && (c.end(), c.end = null)
        }
    }, xo = function (a) {
        var b = wo(), c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Oo = function (a) {
        if (No(a)) return a;
        this.o = a
    };
    Oo.prototype.wi = function () {
        return this.o
    };
    var No = function (a) {
        return !a || "object" !== Zb(a) || ac(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Oo.prototype.getUntrustedUpdateValue = Oo.prototype.wi;
    var Po = [], Qo = !1, Ro = !1, So = function (a) {
        return l["dataLayer"].push(a)
    }, To = function (a) {
        var b = O["dataLayer"], c = b ? b.subscribers : 1, d = 0, e = a;
        return function () {
            ++d === c && (e(), e = null)
        }
    };

    function Uo(a) {
        var b = a._clear;
        Ca(a, function (d, e) {
            "_clear" !== d && (b && fg(d, void 0), fg(d, e))
        });
        Rf || (Rf = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Wf(), a["gtm.uniqueEventId"] = c, fg("gtm.uniqueEventId", c));
        return Lk(a)
    }

    function Vo() {
        var a = Po[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function Wo() {
        for (var a = !1; !Ro && 0 < Po.length;) {
            if (!Qo && Vo()) {
                var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d);
                Po.unshift(c, e);
                Qo = !0
            }
            Ro = !0;
            delete $f.eventModel;
            bg();
            var g = Po.shift();
            if (null != g) {
                var k = No(g);
                if (k) {
                    var m = g;
                    g = No(m) ? m.getUntrustedUpdateValue() : void 0;
                    for (var n = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], p = 0; p < n.length; p++) {
                        var q = n[p], t = cg(q, 1);
                        if (ua(t) || ac(t)) t = H(t);
                        ag[q] = t
                    }
                }
                try {
                    if (sa(g)) try {
                        g.call(dg)
                    } catch (A) {
                    } else if (ua(g)) {
                        var u = g;
                        if (h(u[0])) {
                            var r = u[0].split("."), v = r.pop(), x = u.slice(1), z = cg(r.join("."), 2);
                            if (void 0 !== z && null !== z) try {
                                z[v].apply(z, x)
                            } catch (A) {
                            }
                        }
                    } else {
                        if (Ea(g)) {
                            a:{
                                var w = g;
                                if (w.length &&
                                    h(w[0])) {
                                    var y = to[w[0]];
                                    if (y && (!k || !uo[w[0]])) {
                                        g = y(w);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                Ro = !1;
                                continue
                            }
                        }
                        a = Uo(g) || a
                    }
                } finally {
                    k && bg(!0)
                }
            }
            Ro = !1
        }
        return !a
    }

    function Xo() {
        var b = Wo();
        try {
            vo(l["dataLayer"], Jf.M)
        } catch (c) {
        }
        return b
    }

    var Zo = function () {
        var a = zb("dataLayer", []), b = zb("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Vi(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        bo(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function () {
            var e;
            if (0 < O.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++) e[f] = new Oo(arguments[f])
            } else e = [].slice.call(arguments, 0);
            var g = c.apply(a, e);
            Po.push.apply(Po, e);
            if (300 <
                this.length) for (zd(4); 300 < this.length;) this.shift();
            var k = "boolean" !== typeof g || g;
            return Wo() && k
        };
        var d = a.slice(0);
        Po.push.apply(Po, d);
        if (Yo()) {
            G(Xo)
        }
    }, Yo = function () {
        var a = !0;
        return a
    };
    var $o = {};
    $o.Zc = new String("undefined");
    var ap = function (a) {
        this.o = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === $o.Zc ? b : a[d]);
            return c.join("")
        }
    };
    ap.prototype.toString = function () {
        return this.o("undefined")
    };
    ap.prototype.valueOf = ap.prototype.toString;
    $o.Ph = ap;
    $o.ne = {};
    $o.fi = function (a) {
        return new ap(a)
    };
    var bp = {};
    $o.Xi = function (a, b) {
        var c = Wf();
        bp[c] = [a, b];
        return c
    };
    $o.$f = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
            var d = bp[c];
            if (d && "function" === typeof d[b]) d[b]();
            bp[c] = void 0
        }
    };
    $o.Ai = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    $o.Qi = function (a) {
        if (a === $o.Zc) return a;
        var b = Wf();
        $o.ne[b] = a;
        return 'google_tag_manager["' + Jf.M + '"].macro(' + b + ")"
    };
    $o.Li = function (a, b, c) {
        a instanceof $o.Ph && (a = a.o($o.Xi(b, c)), b = ra);
        return {xi: a, onSuccess: b}
    };
    var mp = l.clearTimeout, np = l.setTimeout, Q = function (a, b, c) {
        if (pi()) {
            b && G(b)
        } else return Db(a, b, c, void 0)
    }, op = function () {
        return new Date
    }, pp = function () {
        return l.location.href
    }, qp = function (a) {
        return De(Ne(a), "fragment")
    }, rp = function (a) {
        return Ee(Ne(a))
    }, sp = function (a, b) {
        return cg(a, b || 2)
    }, tp = function (a, b, c) {
        var d;
        b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = So(a)) : d = So(a);
        return d
    }, up = function (a, b) {
        l[a] = b
    }, W = function (a,
                     b, c) {
        b && (void 0 === l[a] || c && !l[a]) && (l[a] = b);
        return l[a]
    }, vp = function (a, b, c) {
        return xg(a, b, void 0 === c ? !0 : !!c)
    }, wp = function (a, b, c) {
        return 0 === Gg(a, b, c)
    }, xp = function (a, b) {
        if (pi()) {
            b && G(b)
        } else Ib(a, b)
    }, yp = function (a) {
        return !!Pn(a, "init", !1)
    }, zp = function (a) {
        Nn(a, "init", !0)
    }, Ap = function (a) {
        var b = Pf + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        Q(ri("https://", "http://", b))
    }, Bp = function (a, b, c) {
        ck && (bc(a) || qk(c, b, a))
    };

    var Cp = $o.Li;
    var Zp = encodeURI, X = encodeURIComponent, $p = Jb;
    var aq = function (a, b) {
        if (!a) return !1;
        var c = De(Ne(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var bq = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function Jr() {
        return l.gaGlobal = l.gaGlobal || {}
    }

    var Kr = function () {
        var a = Jr();
        a.hid = a.hid || xa();
        return a.hid
    }, Lr = function (a, b) {
        var c = Jr();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var ls = function () {
        if (sa(l.__uspapi)) {
            var a = "";
            try {
                l.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {
            }
            return a
        }
    };
    var Ks = window, Ls = document, Ms = function (a) {
        var b = Ks._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Ks["ga-disable-" + a]) return !0;
        try {
            var c = Ks.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = rg("AMP_TOKEN", String(Ls.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return Ls.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var Ns = {};

    function Qs(a) {
        delete a.eventModel[M.fc];
        Ss(a.eventModel)
    }

    var Ss = function (a) {
        Ca(a, function (c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[M.Pa] || {};
        Ca(b, function (c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Vs = function (a, b, c) {
        Bn(b, c, a)
    }, Ws = function (a, b, c) {
        Bn(b, c, a, !0)
    }, $s = function (a, b) {
    };

    function Xs(a, b) {
    }

    var Z = {g: {}};

    Z.g.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.m = !0;
            Z.__e.priorityOverride = 0
        })(function (a) {
            var b = String(ig(a.vtp_gtmEventId, "event"));
            a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
            return b
        })
    }();

    Z.g.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.m = !0;
            Z.__v.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = sp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            Bp(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();
    Z.g.rep = ["google"], function () {
        (function (a) {
            Z.__rep = a;
            Z.__rep.h = "rep";
            Z.__rep.m = !0;
            Z.__rep.priorityOverride = 0
        })(function (a) {
            var b;
            switch (mi(a.vtp_containerId).prefix) {
                case "AW":
                    b = lm;
                    break;
                case "DC":
                    b = Bm;
                    break;
                case "GF":
                    b = Gm;
                    break;
                case "HA":
                    b = Lm;
                    break;
                case "UA":
                    b = hn;
                    break;
                default:
                    G(a.vtp_gtmOnFailure);
                    return
            }
            G(a.vtp_gtmOnSuccess);
            An(a.vtp_containerId, b, a.vtp_remoteConfig || {})
        })
    }();


    Z.g.cid = ["google"], function () {
        (function (a) {
            Z.__cid = a;
            Z.__cid.h = "cid";
            Z.__cid.m = !0;
            Z.__cid.priorityOverride = 0
        })(function () {
            return Jf.M
        })
    }();


    Z.g.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.h = "get";
            Z.__get.m = !0;
            Z.__get.priorityOverride = 0
        })(function (a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ? Ws : Vs)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess()
        })
    }();


    Z.g.gtagua = ["google"], function () {
        (function (a) {
            Z.__gtagua = a;
            Z.__gtagua.h = "gtagua";
            Z.__gtagua.m = !0;
            Z.__gtagua.priorityOverride = 0
        })(function (a) {
            G(a.vtp_gtmOnSuccess)
        })
    }();


    var at = {};
    at.macro = function (a) {
        if ($o.ne.hasOwnProperty(a)) return $o.ne[a]
    }, at.onHtmlSuccess = $o.$f(!0), at.onHtmlFailure = $o.$f(!1);
    at.dataLayer = dg;
    at.callback = function (a) {
        Uf.hasOwnProperty(a) && sa(Uf[a]) && Uf[a]();
        delete Uf[a]
    };
    at.bootstrap = 0;
    at._spx = !1;

    function bt() {
        O[Jf.M] = at;
        Sa(Vf, Z.g);
        Nc = Nc || $o;
        Oc = Wc
    }

    function ct() {
        var a = !1;
        a && dj("INIT");
        Cd().s();
        O = l.google_tag_manager = l.google_tag_manager || {};
        ul();
        zh.enable_gbraid_cookie_write = !0;
        var b = !!O[Jf.M];
        if (b) {
            var c = O.zones;
            c && c.unregisterChild(Jf.M);
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Ac.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) Jc.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) Cc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++) u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                Bc.push(u)
            }
            Lc = Z;
            Mc = ho;
            bt();
            Zo();
            Qi = !1;
            Ri = 0;
            if ("interactive" == B.readyState && !B.createEventObject || "complete" == B.readyState) Ti(); else {
                Kb(B, "DOMContentLoaded", Ti);
                Kb(B, "readystatechange", Ti);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !l.frameElement
                    } catch (A) {
                    }
                    v &&
                    Ui()
                }
                Kb(l, "load", Ti)
            }
            Zn = !1;
            "complete" === B.readyState ? ao() : Kb(l, "load", ao);
            ck && l.setInterval(Wj, 864E5);
            Sf = (new Date).getTime();
            at.bootstrap = Sf;
            if (a) {
                var y = ej("INIT");
            }
        }
    }

    (function (a) {
        if (!l["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (B.referrer) {
                var c = Ne(B.referrer);
                b = "cct.google" === Ce(c, "host")
            }
            if (!b) {
                var d = xg("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (l["__TAGGY_INSTALLED"] = !0, Db("https://cct.google/taggy/agent.js"))
        }
        var f = function () {
            var n = l["google.tagmanager.debugui2.queue"];
            n || (n = [], l["google.tagmanager.debugui2.queue"] = n, Db("https://www.googletagmanager.com/debug/bootstrap"));
            var p = {messageType: "CONTAINER_STARTING", data: {scriptSource: yb, containerProduct: "GTM", debug: !1}};
            p.data.resume = function () {
                a()
            };
            p.data.containerProduct =
                "OGT";
            Jf.Og && (p.data.initialPublish = !0);
            n.push(p)
        }, g = "x" === De(l.location, "query", !1, void 0, "gtm_debug");
        if (!g && B.referrer) {
            var k = Ne(B.referrer);
            g = "tagassistant.google.com" === Ce(k, "host")
        }
        if (!g) {
            var m = xg("__TAG_ASSISTANT");
            g = m.length && m[0].length
        }
        !g && l.__TAG_ASSISTANT_API && (g = !0);
        !g && B.documentElement.hasAttribute("data-tag-assistant-present") && (g = !0);
        g && yb ? f() : a()
    })(ct);

})()
