import { jsxs as ue, jsx as X, Fragment as xe } from "react/jsx-runtime";
import z from "react";
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oe(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var fe = { exports: {} }, te = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe;
function we() {
  if (pe) return j;
  pe = 1;
  var i = typeof Symbol == "function" && Symbol.for, F = i ? Symbol.for("react.element") : 60103, R = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, y = i ? Symbol.for("react.strict_mode") : 60108, c = i ? Symbol.for("react.profiler") : 60114, s = i ? Symbol.for("react.provider") : 60109, u = i ? Symbol.for("react.context") : 60110, b = i ? Symbol.for("react.async_mode") : 60111, x = i ? Symbol.for("react.concurrent_mode") : 60111, O = i ? Symbol.for("react.forward_ref") : 60112, A = i ? Symbol.for("react.suspense") : 60113, m = i ? Symbol.for("react.suspense_list") : 60120, d = i ? Symbol.for("react.memo") : 60115, e = i ? Symbol.for("react.lazy") : 60116, t = i ? Symbol.for("react.block") : 60121, f = i ? Symbol.for("react.fundamental") : 60117, l = i ? Symbol.for("react.responder") : 60118, W = i ? Symbol.for("react.scope") : 60119;
  function S(n) {
    if (typeof n == "object" && n !== null) {
      var V = n.$$typeof;
      switch (V) {
        case F:
          switch (n = n.type, n) {
            case b:
            case x:
            case p:
            case c:
            case y:
            case A:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case u:
                case O:
                case e:
                case d:
                case s:
                  return n;
                default:
                  return V;
              }
          }
        case R:
          return V;
      }
    }
  }
  function h(n) {
    return S(n) === x;
  }
  return j.AsyncMode = b, j.ConcurrentMode = x, j.ContextConsumer = u, j.ContextProvider = s, j.Element = F, j.ForwardRef = O, j.Fragment = p, j.Lazy = e, j.Memo = d, j.Portal = R, j.Profiler = c, j.StrictMode = y, j.Suspense = A, j.isAsyncMode = function(n) {
    return h(n) || S(n) === b;
  }, j.isConcurrentMode = h, j.isContextConsumer = function(n) {
    return S(n) === u;
  }, j.isContextProvider = function(n) {
    return S(n) === s;
  }, j.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === F;
  }, j.isForwardRef = function(n) {
    return S(n) === O;
  }, j.isFragment = function(n) {
    return S(n) === p;
  }, j.isLazy = function(n) {
    return S(n) === e;
  }, j.isMemo = function(n) {
    return S(n) === d;
  }, j.isPortal = function(n) {
    return S(n) === R;
  }, j.isProfiler = function(n) {
    return S(n) === c;
  }, j.isStrictMode = function(n) {
    return S(n) === y;
  }, j.isSuspense = function(n) {
    return S(n) === A;
  }, j.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === p || n === x || n === c || n === y || n === A || n === m || typeof n == "object" && n !== null && (n.$$typeof === e || n.$$typeof === d || n.$$typeof === s || n.$$typeof === u || n.$$typeof === O || n.$$typeof === f || n.$$typeof === l || n.$$typeof === W || n.$$typeof === t);
  }, j.typeOf = S, j;
}
var C = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ue() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, F = i ? Symbol.for("react.element") : 60103, R = i ? Symbol.for("react.portal") : 60106, p = i ? Symbol.for("react.fragment") : 60107, y = i ? Symbol.for("react.strict_mode") : 60108, c = i ? Symbol.for("react.profiler") : 60114, s = i ? Symbol.for("react.provider") : 60109, u = i ? Symbol.for("react.context") : 60110, b = i ? Symbol.for("react.async_mode") : 60111, x = i ? Symbol.for("react.concurrent_mode") : 60111, O = i ? Symbol.for("react.forward_ref") : 60112, A = i ? Symbol.for("react.suspense") : 60113, m = i ? Symbol.for("react.suspense_list") : 60120, d = i ? Symbol.for("react.memo") : 60115, e = i ? Symbol.for("react.lazy") : 60116, t = i ? Symbol.for("react.block") : 60121, f = i ? Symbol.for("react.fundamental") : 60117, l = i ? Symbol.for("react.responder") : 60118, W = i ? Symbol.for("react.scope") : 60119;
    function S(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === p || o === x || o === c || o === y || o === A || o === m || typeof o == "object" && o !== null && (o.$$typeof === e || o.$$typeof === d || o.$$typeof === s || o.$$typeof === u || o.$$typeof === O || o.$$typeof === f || o.$$typeof === l || o.$$typeof === W || o.$$typeof === t);
    }
    function h(o) {
      if (typeof o == "object" && o !== null) {
        var G = o.$$typeof;
        switch (G) {
          case F:
            var re = o.type;
            switch (re) {
              case b:
              case x:
              case p:
              case c:
              case y:
              case A:
                return re;
              default:
                var de = re && re.$$typeof;
                switch (de) {
                  case u:
                  case O:
                  case e:
                  case d:
                  case s:
                    return de;
                  default:
                    return G;
                }
            }
          case R:
            return G;
        }
      }
    }
    var n = b, V = x, q = u, _ = s, N = F, B = O, H = p, D = e, K = d, k = R, Q = c, Y = y, Z = A, $ = !1;
    function ee(o) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(o) || h(o) === b;
    }
    function r(o) {
      return h(o) === x;
    }
    function a(o) {
      return h(o) === u;
    }
    function T(o) {
      return h(o) === s;
    }
    function v(o) {
      return typeof o == "object" && o !== null && o.$$typeof === F;
    }
    function g(o) {
      return h(o) === O;
    }
    function M(o) {
      return h(o) === p;
    }
    function E(o) {
      return h(o) === e;
    }
    function P(o) {
      return h(o) === d;
    }
    function w(o) {
      return h(o) === R;
    }
    function I(o) {
      return h(o) === c;
    }
    function U(o) {
      return h(o) === y;
    }
    function L(o) {
      return h(o) === A;
    }
    C.AsyncMode = n, C.ConcurrentMode = V, C.ContextConsumer = q, C.ContextProvider = _, C.Element = N, C.ForwardRef = B, C.Fragment = H, C.Lazy = D, C.Memo = K, C.Portal = k, C.Profiler = Q, C.StrictMode = Y, C.Suspense = Z, C.isAsyncMode = ee, C.isConcurrentMode = r, C.isContextConsumer = a, C.isContextProvider = T, C.isElement = v, C.isForwardRef = g, C.isFragment = M, C.isLazy = E, C.isMemo = P, C.isPortal = w, C.isProfiler = I, C.isStrictMode = U, C.isSuspense = L, C.isValidElementType = S, C.typeOf = h;
  }()), C;
}
var ye;
function Ee() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? te.exports = we() : te.exports = Ue()), te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ne, he;
function Ae() {
  if (he) return ne;
  he = 1;
  var i = Object.getOwnPropertySymbols, F = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
  function p(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function y() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var b = Object.getOwnPropertyNames(s).map(function(O) {
        return s[O];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var x = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(O) {
        x[O] = O;
      }), Object.keys(Object.assign({}, x)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ne = y() ? Object.assign : function(c, s) {
    for (var u, b = p(c), x, O = 1; O < arguments.length; O++) {
      u = Object(arguments[O]);
      for (var A in u)
        F.call(u, A) && (b[A] = u[A]);
      if (i) {
        x = i(u);
        for (var m = 0; m < x.length; m++)
          R.call(u, x[m]) && (b[x[m]] = u[x[m]]);
      }
    }
    return b;
  }, ne;
}
var oe, be;
function le() {
  if (be) return oe;
  be = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oe = i, oe;
}
var ie, me;
function Pe() {
  return me || (me = 1, ie = Function.call.bind(Object.prototype.hasOwnProperty)), ie;
}
var ae, ge;
function je() {
  if (ge) return ae;
  ge = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var F = le(), R = {}, p = Pe();
    i = function(c) {
      var s = "Warning: " + c;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function y(c, s, u, b, x) {
    if (process.env.NODE_ENV !== "production") {
      for (var O in c)
        if (p(c, O)) {
          var A;
          try {
            if (typeof c[O] != "function") {
              var m = Error(
                (b || "React class") + ": " + u + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            A = c[O](s, O, b, u, null, F);
          } catch (e) {
            A = e;
          }
          if (A && !(A instanceof Error) && i(
            (b || "React class") + ": type specification of " + u + " `" + O + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof A + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), A instanceof Error && !(A.message in R)) {
            R[A.message] = !0;
            var d = x ? x() : "";
            i(
              "Failed " + u + " type: " + A.message + (d ?? "")
            );
          }
        }
    }
  }
  return y.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (R = {});
  }, ae = y, ae;
}
var se, Se;
function Ce() {
  if (Se) return se;
  Se = 1;
  var i = Ee(), F = Ae(), R = le(), p = Pe(), y = je(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(u) {
    var b = "Warning: " + u;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return se = function(u, b) {
    var x = typeof Symbol == "function" && Symbol.iterator, O = "@@iterator";
    function A(r) {
      var a = r && (x && r[x] || r[O]);
      if (typeof a == "function")
        return a;
    }
    var m = "<<anonymous>>", d = {
      array: l("array"),
      bigint: l("bigint"),
      bool: l("boolean"),
      func: l("function"),
      number: l("number"),
      object: l("object"),
      string: l("string"),
      symbol: l("symbol"),
      any: W(),
      arrayOf: S,
      element: h(),
      elementType: n(),
      instanceOf: V,
      node: B(),
      objectOf: _,
      oneOf: q,
      oneOfType: N,
      shape: D,
      exact: K
    };
    function e(r, a) {
      return r === a ? r !== 0 || 1 / r === 1 / a : r !== r && a !== a;
    }
    function t(r, a) {
      this.message = r, this.data = a && typeof a == "object" ? a : {}, this.stack = "";
    }
    t.prototype = Error.prototype;
    function f(r) {
      if (process.env.NODE_ENV !== "production")
        var a = {}, T = 0;
      function v(M, E, P, w, I, U, L) {
        if (w = w || m, U = U || P, L !== R) {
          if (b) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var G = w + ":" + P;
            !a[G] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), a[G] = !0, T++);
          }
        }
        return E[P] == null ? M ? E[P] === null ? new t("The " + I + " `" + U + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new t("The " + I + " `" + U + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : r(E, P, w, I, U);
      }
      var g = v.bind(null, !1);
      return g.isRequired = v.bind(null, !0), g;
    }
    function l(r) {
      function a(T, v, g, M, E, P) {
        var w = T[v], I = Y(w);
        if (I !== r) {
          var U = Z(w);
          return new t(
            "Invalid " + M + " `" + E + "` of type " + ("`" + U + "` supplied to `" + g + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return f(a);
    }
    function W() {
      return f(s);
    }
    function S(r) {
      function a(T, v, g, M, E) {
        if (typeof r != "function")
          return new t("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside arrayOf.");
        var P = T[v];
        if (!Array.isArray(P)) {
          var w = Y(P);
          return new t("Invalid " + M + " `" + E + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected an array."));
        }
        for (var I = 0; I < P.length; I++) {
          var U = r(P, I, g, M, E + "[" + I + "]", R);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return f(a);
    }
    function h() {
      function r(a, T, v, g, M) {
        var E = a[T];
        if (!u(E)) {
          var P = Y(E);
          return new t("Invalid " + g + " `" + M + "` of type " + ("`" + P + "` supplied to `" + v + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(r);
    }
    function n() {
      function r(a, T, v, g, M) {
        var E = a[T];
        if (!i.isValidElementType(E)) {
          var P = Y(E);
          return new t("Invalid " + g + " `" + M + "` of type " + ("`" + P + "` supplied to `" + v + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(r);
    }
    function V(r) {
      function a(T, v, g, M, E) {
        if (!(T[v] instanceof r)) {
          var P = r.name || m, w = ee(T[v]);
          return new t("Invalid " + M + " `" + E + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected ") + ("instance of `" + P + "`."));
        }
        return null;
      }
      return f(a);
    }
    function q(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), s;
      function a(T, v, g, M, E) {
        for (var P = T[v], w = 0; w < r.length; w++)
          if (e(P, r[w]))
            return null;
        var I = JSON.stringify(r, function(L, o) {
          var G = Z(o);
          return G === "symbol" ? String(o) : o;
        });
        return new t("Invalid " + M + " `" + E + "` of value `" + String(P) + "` " + ("supplied to `" + g + "`, expected one of " + I + "."));
      }
      return f(a);
    }
    function _(r) {
      function a(T, v, g, M, E) {
        if (typeof r != "function")
          return new t("Property `" + E + "` of component `" + g + "` has invalid PropType notation inside objectOf.");
        var P = T[v], w = Y(P);
        if (w !== "object")
          return new t("Invalid " + M + " `" + E + "` of type " + ("`" + w + "` supplied to `" + g + "`, expected an object."));
        for (var I in P)
          if (p(P, I)) {
            var U = r(P, I, g, M, E + "." + I, R);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return f(a);
    }
    function N(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var a = 0; a < r.length; a++) {
        var T = r[a];
        if (typeof T != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $(T) + " at index " + a + "."
          ), s;
      }
      function v(g, M, E, P, w) {
        for (var I = [], U = 0; U < r.length; U++) {
          var L = r[U], o = L(g, M, E, P, w, R);
          if (o == null)
            return null;
          o.data && p(o.data, "expectedType") && I.push(o.data.expectedType);
        }
        var G = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new t("Invalid " + P + " `" + w + "` supplied to " + ("`" + E + "`" + G + "."));
      }
      return f(v);
    }
    function B() {
      function r(a, T, v, g, M) {
        return k(a[T]) ? null : new t("Invalid " + g + " `" + M + "` supplied to " + ("`" + v + "`, expected a ReactNode."));
      }
      return f(r);
    }
    function H(r, a, T, v, g) {
      return new t(
        (r || "React class") + ": " + a + " type `" + T + "." + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + g + "`."
      );
    }
    function D(r) {
      function a(T, v, g, M, E) {
        var P = T[v], w = Y(P);
        if (w !== "object")
          return new t("Invalid " + M + " `" + E + "` of type `" + w + "` " + ("supplied to `" + g + "`, expected `object`."));
        for (var I in r) {
          var U = r[I];
          if (typeof U != "function")
            return H(g, M, E, I, Z(U));
          var L = U(P, I, g, M, E + "." + I, R);
          if (L)
            return L;
        }
        return null;
      }
      return f(a);
    }
    function K(r) {
      function a(T, v, g, M, E) {
        var P = T[v], w = Y(P);
        if (w !== "object")
          return new t("Invalid " + M + " `" + E + "` of type `" + w + "` " + ("supplied to `" + g + "`, expected `object`."));
        var I = F({}, T[v], r);
        for (var U in I) {
          var L = r[U];
          if (p(r, U) && typeof L != "function")
            return H(g, M, E, U, Z(L));
          if (!L)
            return new t(
              "Invalid " + M + " `" + E + "` key `" + U + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(T[v], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var o = L(P, U, g, M, E + "." + U, R);
          if (o)
            return o;
        }
        return null;
      }
      return f(a);
    }
    function k(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(k);
          if (r === null || u(r))
            return !0;
          var a = A(r);
          if (a) {
            var T = a.call(r), v;
            if (a !== r.entries) {
              for (; !(v = T.next()).done; )
                if (!k(v.value))
                  return !1;
            } else
              for (; !(v = T.next()).done; ) {
                var g = v.value;
                if (g && !k(g[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(r, a) {
      return r === "symbol" ? !0 : a ? a["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && a instanceof Symbol : !1;
    }
    function Y(r) {
      var a = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : Q(a, r) ? "symbol" : a;
    }
    function Z(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var a = Y(r);
      if (a === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return a;
    }
    function $(r) {
      var a = Z(r);
      switch (a) {
        case "array":
        case "object":
          return "an " + a;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + a;
        default:
          return a;
      }
    }
    function ee(r) {
      return !r.constructor || !r.constructor.name ? m : r.constructor.name;
    }
    return d.checkPropTypes = y, d.resetWarningCache = y.resetWarningCache, d.PropTypes = d, d;
  }, se;
}
var ce, Te;
function Ie() {
  if (Te) return ce;
  Te = 1;
  var i = le();
  function F() {
  }
  function R() {
  }
  return R.resetWarningCache = F, ce = function() {
    function p(s, u, b, x, O, A) {
      if (A !== i) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    p.isRequired = p;
    function y() {
      return p;
    }
    var c = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: y,
      element: p,
      elementType: p,
      instanceOf: y,
      node: p,
      objectOf: y,
      oneOf: y,
      oneOfType: y,
      shape: y,
      exact: y,
      checkPropTypes: R,
      resetWarningCache: F
    };
    return c.PropTypes = c, c;
  }, ce;
}
if (process.env.NODE_ENV !== "production") {
  var qe = Ee(), Ve = !0;
  fe.exports = Ce()(qe.isElement, Ve);
} else
  fe.exports = Ie()();
var We = fe.exports;
const J = /* @__PURE__ */ Oe(We);
var Re = { exports: {} };
(function(i, F) {
  (function(p, y) {
    i.exports = y(z);
  })(Me, function(R) {
    return (
      /******/
      function(p) {
        var y = {};
        function c(s) {
          if (y[s])
            return y[s].exports;
          var u = y[s] = {
            /******/
            i: s,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return p[s].call(u.exports, u, u.exports, c), u.l = !0, u.exports;
        }
        return c.m = p, c.c = y, c.d = function(s, u, b) {
          c.o(s, u) || Object.defineProperty(s, u, { enumerable: !0, get: b });
        }, c.r = function(s) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
        }, c.t = function(s, u) {
          if (u & 1 && (s = c(s)), u & 8 || u & 4 && typeof s == "object" && s && s.__esModule) return s;
          var b = /* @__PURE__ */ Object.create(null);
          if (c.r(b), Object.defineProperty(b, "default", { enumerable: !0, value: s }), u & 2 && typeof s != "string") for (var x in s) c.d(b, x, (function(O) {
            return s[O];
          }).bind(null, x));
          return b;
        }, c.n = function(s) {
          var u = s && s.__esModule ? (
            /******/
            function() {
              return s.default;
            }
          ) : (
            /******/
            function() {
              return s;
            }
          );
          return c.d(u, "a", u), u;
        }, c.o = function(s, u) {
          return Object.prototype.hasOwnProperty.call(s, u);
        }, c.p = "", c(c.s = "./src/react-webcam.tsx");
      }({
        /***/
        "./src/react-webcam.tsx": (
          /*!******************************!*\
            !*** ./src/react-webcam.tsx ***!
            \******************************/
          /*! exports provided: default */
          /***/
          function(p, y, c) {
            c.r(y);
            var s = c(
              /*! react */
              "react"
            ), u = /* @__PURE__ */ function() {
              var m = function(d, e) {
                return m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, f) {
                  t.__proto__ = f;
                } || function(t, f) {
                  for (var l in f) f.hasOwnProperty(l) && (t[l] = f[l]);
                }, m(d, e);
              };
              return function(d, e) {
                m(d, e);
                function t() {
                  this.constructor = d;
                }
                d.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
              };
            }(), b = function() {
              return b = Object.assign || function(m) {
                for (var d, e = 1, t = arguments.length; e < t; e++) {
                  d = arguments[e];
                  for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (m[f] = d[f]);
                }
                return m;
              }, b.apply(this, arguments);
            }, x = function(m, d) {
              var e = {};
              for (var t in m) Object.prototype.hasOwnProperty.call(m, t) && d.indexOf(t) < 0 && (e[t] = m[t]);
              if (m != null && typeof Object.getOwnPropertySymbols == "function")
                for (var f = 0, t = Object.getOwnPropertySymbols(m); f < t.length; f++)
                  d.indexOf(t[f]) < 0 && Object.prototype.propertyIsEnumerable.call(m, t[f]) && (e[t[f]] = m[t[f]]);
              return e;
            };
            (function() {
              typeof window > "u" || (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}), navigator.mediaDevices.getUserMedia === void 0 && (navigator.mediaDevices.getUserMedia = function(d) {
                var e = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                return e ? new Promise(function(t, f) {
                  e.call(navigator, d, t, f);
                }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
              }));
            })();
            function O() {
              return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
            }
            var A = (
              /** @class */
              function(m) {
                u(d, m);
                function d(e) {
                  var t = m.call(this, e) || this;
                  return t.canvas = null, t.ctx = null, t.requestUserMediaId = 0, t.unmounted = !1, t.state = {
                    hasUserMedia: !1
                  }, t;
                }
                return d.prototype.componentDidMount = function() {
                  var e = this, t = e.state, f = e.props;
                  if (this.unmounted = !1, !O()) {
                    f.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  t.hasUserMedia || this.requestUserMedia(), f.children && typeof f.children != "function" && console.warn("children must be a function");
                }, d.prototype.componentDidUpdate = function(e) {
                  var t = this.props;
                  if (!O()) {
                    t.onUserMediaError("getUserMedia not supported");
                    return;
                  }
                  var f = JSON.stringify(e.audioConstraints) !== JSON.stringify(t.audioConstraints), l = JSON.stringify(e.videoConstraints) !== JSON.stringify(t.videoConstraints), W = e.minScreenshotWidth !== t.minScreenshotWidth, S = e.minScreenshotHeight !== t.minScreenshotHeight;
                  (l || W || S) && (this.canvas = null, this.ctx = null), (f || l) && (this.stopAndCleanup(), this.requestUserMedia());
                }, d.prototype.componentWillUnmount = function() {
                  this.unmounted = !0, this.stopAndCleanup();
                }, d.stopMediaStream = function(e) {
                  e && (e.getVideoTracks && e.getAudioTracks ? (e.getVideoTracks().map(function(t) {
                    e.removeTrack(t), t.stop();
                  }), e.getAudioTracks().map(function(t) {
                    e.removeTrack(t), t.stop();
                  })) : e.stop());
                }, d.prototype.stopAndCleanup = function() {
                  var e = this.state;
                  e.hasUserMedia && (d.stopMediaStream(this.stream), e.src && window.URL.revokeObjectURL(e.src));
                }, d.prototype.getScreenshot = function(e) {
                  var t = this, f = t.state, l = t.props;
                  if (!f.hasUserMedia)
                    return null;
                  var W = this.getCanvas(e);
                  return W && W.toDataURL(l.screenshotFormat, l.screenshotQuality);
                }, d.prototype.getCanvas = function(e) {
                  var t = this, f = t.state, l = t.props;
                  if (!this.video || !f.hasUserMedia || !this.video.videoHeight)
                    return null;
                  if (!this.ctx) {
                    var W = this.video.videoWidth, S = this.video.videoHeight;
                    if (!this.props.forceScreenshotSourceSize) {
                      var h = W / S;
                      W = l.minScreenshotWidth || this.video.clientWidth, S = W / h, l.minScreenshotHeight && S < l.minScreenshotHeight && (S = l.minScreenshotHeight, W = S * h);
                    }
                    this.canvas = document.createElement("canvas"), this.canvas.width = (e == null ? void 0 : e.width) || W, this.canvas.height = (e == null ? void 0 : e.height) || S, this.ctx = this.canvas.getContext("2d");
                  }
                  var n = this, V = n.ctx, q = n.canvas;
                  return V && q && (q.width = (e == null ? void 0 : e.width) || q.width, q.height = (e == null ? void 0 : e.height) || q.height, l.mirrored && (V.translate(q.width, 0), V.scale(-1, 1)), V.imageSmoothingEnabled = l.imageSmoothing, V.drawImage(this.video, 0, 0, (e == null ? void 0 : e.width) || q.width, (e == null ? void 0 : e.height) || q.height), l.mirrored && (V.scale(-1, 1), V.translate(-q.width, 0))), q;
                }, d.prototype.requestUserMedia = function() {
                  var e = this, t = this.props, f = function(S, h) {
                    var n = {
                      video: typeof h < "u" ? h : !0
                    };
                    t.audio && (n.audio = typeof S < "u" ? S : !0), e.requestUserMediaId++;
                    var V = e.requestUserMediaId;
                    navigator.mediaDevices.getUserMedia(n).then(function(q) {
                      e.unmounted || V !== e.requestUserMediaId ? d.stopMediaStream(q) : e.handleUserMedia(null, q);
                    }).catch(function(q) {
                      e.handleUserMedia(q);
                    });
                  };
                  if ("mediaDevices" in navigator)
                    f(t.audioConstraints, t.videoConstraints);
                  else {
                    var l = function(S) {
                      return { optional: [{ sourceId: S }] };
                    }, W = function(S) {
                      var h = S.deviceId;
                      return typeof h == "string" ? h : Array.isArray(h) && h.length > 0 ? h[0] : typeof h == "object" && h.ideal ? h.ideal : null;
                    };
                    MediaStreamTrack.getSources(function(S) {
                      var h = null, n = null;
                      S.forEach(function(_) {
                        _.kind === "audio" ? h = _.id : _.kind === "video" && (n = _.id);
                      });
                      var V = W(t.audioConstraints);
                      V && (h = V);
                      var q = W(t.videoConstraints);
                      q && (n = q), f(l(h), l(n));
                    });
                  }
                }, d.prototype.handleUserMedia = function(e, t) {
                  var f = this.props;
                  if (e || !t) {
                    this.setState({ hasUserMedia: !1 }), f.onUserMediaError(e);
                    return;
                  }
                  this.stream = t;
                  try {
                    this.video && (this.video.srcObject = t), this.setState({ hasUserMedia: !0 });
                  } catch {
                    this.setState({
                      hasUserMedia: !0,
                      src: window.URL.createObjectURL(t)
                    });
                  }
                  f.onUserMedia(t);
                }, d.prototype.render = function() {
                  var e = this, t = this, f = t.state, l = t.props, W = l.audio;
                  l.forceScreenshotSourceSize;
                  var S = l.disablePictureInPicture;
                  l.onUserMedia, l.onUserMediaError, l.screenshotFormat, l.screenshotQuality, l.minScreenshotWidth, l.minScreenshotHeight, l.audioConstraints, l.videoConstraints, l.imageSmoothing;
                  var h = l.mirrored, n = l.style, V = n === void 0 ? {} : n, q = l.children, _ = x(l, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]), N = h ? b(b({}, V), { transform: (V.transform || "") + " scaleX(-1)" }) : V, B = {
                    getScreenshot: this.getScreenshot.bind(this)
                  };
                  return s.createElement(
                    s.Fragment,
                    null,
                    s.createElement("video", b({ autoPlay: !0, disablePictureInPicture: S, src: f.src, muted: !W, playsInline: !0, ref: function(H) {
                      e.video = H;
                    }, style: N }, _)),
                    q && q(B)
                  );
                }, d.defaultProps = {
                  audio: !1,
                  disablePictureInPicture: !1,
                  forceScreenshotSourceSize: !1,
                  imageSmoothing: !0,
                  mirrored: !1,
                  onUserMedia: function() {
                  },
                  onUserMediaError: function() {
                  },
                  screenshotFormat: "image/webp",
                  screenshotQuality: 0.92
                }, d;
              }(s.Component)
            );
            y.default = A;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
            \**************************************************************************************/
          /*! no static exports found */
          /***/
          function(p, y) {
            p.exports = R;
          }
        )
        /******/
      }).default
    );
  });
})(Re);
var Fe = Re.exports;
const _e = /* @__PURE__ */ Oe(Fe), Le = "data:image/png;base64,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", ke = ({ action: i, disabled: F, label: R, className: p }) => {
  const y = `profile-img-upload-${Math.random()}`;
  return /* @__PURE__ */ ue(xe, { children: [
    /* @__PURE__ */ X(
      "input",
      {
        accept: "image/*",
        className: "hidden",
        id: y,
        onChange: i,
        type: "file",
        disabled: F
      }
    ),
    /* @__PURE__ */ X("label", { htmlFor: y, children: /* @__PURE__ */ X(
      "span",
      {
        className: p || "inline-flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors",
        children: R
      }
    ) })
  ] });
}, Ye = ({
  styles: i = { height: 200, width: 200, backgroundColor: "#eee", borderRadius: "5px" },
  camera: F = !1,
  defaultImage: R = Le,
  returnImage: p,
  uploadBtnProps: y = {},
  cameraBtnProps: c = {},
  cancelBtnProps: s = {},
  takeBtnProps: u = {},
  maxImgSize: b = 1048576,
  sizeErrorMsg: x = "File size exceeds (1MB)",
  isNotImgErrorMsg: O = "Only images are allowed",
  clearPreview: A = !1
}) => {
  const { label: m = "Upload", className: d, ...e } = y, { label: t = "Camera", className: f, ...l } = c, { label: W = "Cancel", className: S, ...h } = s, { label: n = "Take", className: V, ...q } = u, [_, N] = z.useState(R), [B, H] = z.useState(null), [D, K] = z.useState(!1), [k, Q] = z.useState(!1), Y = z.useRef(R), Z = z.useRef(null), $ = (a) => {
    const T = new FileReader(), v = a.target.files[0];
    v && (v.type.match("image.*") ? v.size > b ? (K(x), N(R), H(null)) : (T.onloadend = () => {
      H(v), K(!1), N(T.result);
    }, T.readAsDataURL(v)) : (K(O), N(R), H(null)));
  };
  z.useEffect(() => {
    p instanceof Function && !D && Y.current !== _ && p(_, B);
  }, [_, D]);
  const ee = () => {
    if (!k)
      Q(!0);
    else {
      const a = Z.current.getScreenshot();
      Q(!1), N(a), K(!1);
    }
  }, r = "inline-flex items-center px-3 py-1.5 border rounded text-sm font-medium cursor-pointer transition-colors";
  return /* @__PURE__ */ ue(
    "div",
    {
      style: { width: i.width },
      className: "flex flex-col gap-2",
      children: [
        k ? /* @__PURE__ */ X("div", { style: i, children: /* @__PURE__ */ X(
          _e,
          {
            style: { margin: 2 },
            audio: !1,
            ref: Z,
            videoConstraints: { facingMode: "user" },
            screenshotFormat: "image/jpeg",
            width: (i.width || 200) - 5,
            height: (i.height || 200) - 5
          }
        ) }) : /* @__PURE__ */ X(
          "img",
          {
            style: i,
            alt: "Profile preview",
            src: A ? Y.current : _
          }
        ),
        D && /* @__PURE__ */ X("span", { className: "bg-red-500 text-white text-xs text-center py-1 px-2 rounded", children: D }),
        /* @__PURE__ */ ue("div", { className: "flex justify-between", children: [
          k ? /* @__PURE__ */ X(
            "button",
            {
              className: S || `${r} border-red-300 text-red-700 bg-white hover:bg-red-50`,
              onClick: () => Q(!1),
              ...h,
              children: W
            }
          ) : /* @__PURE__ */ X(
            ke,
            {
              action: $,
              disabled: e.disabled,
              label: m,
              className: d
            }
          ),
          F && /* @__PURE__ */ X(
            "button",
            {
              className: (k ? V : f) || `${r} border-gray-300 text-gray-700 bg-white hover:bg-gray-50`,
              onClick: ee,
              ...k ? q : l,
              children: k ? n : t
            }
          )
        ] })
      ]
    }
  );
};
Ye.propTypes = {
  styles: J.object,
  camera: J.bool,
  defaultImage: J.any,
  returnImage: J.func.isRequired,
  uploadBtnProps: J.object,
  cameraBtnProps: J.object,
  cancelBtnProps: J.object,
  takeBtnProps: J.object,
  maxImgSize: J.number,
  sizeErrorMsg: J.string,
  isNotImgErrorMsg: J.string,
  clearPreview: J.bool
};
export {
  Ye as default
};
