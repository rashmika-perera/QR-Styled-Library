import "react";
import { QRCodeSVG as e } from "qrcode.react";
//#region \0rolldown/runtime.js
var t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), n = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), r = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), i = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function r(e) {
			return "" + e;
		}
		function i(e) {
			try {
				r(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), r(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, r, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, r !== void 0 && (i(r), f = "" + r), c(n) && (i(n.key), f = "" + n.key), "key" in n) for (var h in r = {}, n) h !== "key" && (r[h] = n[h]);
			else r = n;
			return f && l(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, r, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = n("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), a = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = r() : t.exports = i();
})))();
function o({ value: t, title: n, subtitle: r, size: i = 180, backgroundColor: o = "#ffffff", textColor: s = "#1e1e1e", qrColor: c = "#000000", padding: l = 20, borderRadius: u = 20, level: d = "M", includeMargin: f = !1, imageSettings: p, style: m, className: h }) {
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: h,
		style: {
			width: 260,
			padding: l,
			borderRadius: u,
			background: o,
			boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
			textAlign: "center",
			fontFamily: "Arial, sans-serif",
			...m
		},
		children: [
			/* @__PURE__ */ (0, a.jsx)("div", {
				style: {
					marginBottom: 16,
					display: "flex",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ (0, a.jsx)(e, {
					value: t,
					size: i,
					fgColor: c,
					level: d,
					includeMargin: f,
					imageSettings: p
				})
			}),
			/* @__PURE__ */ (0, a.jsx)("h3", {
				style: {
					margin: 0,
					fontSize: 20,
					color: s
				},
				children: n
			}),
			r && /* @__PURE__ */ (0, a.jsx)("p", {
				style: {
					marginTop: 8,
					color: "#666",
					fontSize: 14
				},
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/QRCodeAvatarCard.tsx
function s({ value: t, name: n, role: r, avatarUrl: i, size: o = 140, backgroundColor: s = "#f8f9ff", textColor: c = "#222222", qrColor: l = "#000000", padding: u = 24, borderRadius: d = 24, level: f = "M", includeMargin: p = !1, imageSettings: m, style: h, className: g }) {
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: g,
		style: {
			width: 280,
			padding: u,
			borderRadius: d,
			background: s,
			boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
			textAlign: "center",
			fontFamily: "Arial, sans-serif",
			...h
		},
		children: [
			i && /* @__PURE__ */ (0, a.jsx)("img", {
				src: i,
				alt: n,
				style: {
					width: 64,
					height: 64,
					borderRadius: "50%",
					objectFit: "cover",
					marginBottom: 14,
					border: "2px solid #ffffff",
					boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
				}
			}),
			/* @__PURE__ */ (0, a.jsx)("h3", {
				style: {
					margin: 0,
					color: c
				},
				children: n
			}),
			r && /* @__PURE__ */ (0, a.jsx)("p", {
				style: {
					marginTop: 6,
					marginBottom: 16,
					color: "#666",
					fontSize: 15
				},
				children: r
			}),
			/* @__PURE__ */ (0, a.jsx)("div", {
				style: {
					display: "flex",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ (0, a.jsx)(e, {
					value: t,
					size: o,
					fgColor: l,
					level: f,
					includeMargin: p,
					imageSettings: m
				})
			})
		]
	});
}
//#endregion
//#region src/components/ScannerFrame.tsx
function c({ text: e = "Place QR code inside the frame", width: t = 260, height: n = 260, frameColor: r = "#6c4cff", frameStyle: i = "dashed", backgroundColor: o = "rgba(108,76,255,0.05)", textColor: s = "#555555", className: c, style: l, children: u }) {
	return /* @__PURE__ */ (0, a.jsxs)("div", {
		className: c,
		style: {
			display: "inline-flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 16,
			fontFamily: "Arial, sans-serif",
			...l
		},
		children: [/* @__PURE__ */ (0, a.jsxs)("div", {
			style: {
				width: t,
				height: n,
				position: "relative",
				borderRadius: 24,
				border: `2px ${i} ${r}`,
				background: o,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: [
				/* @__PURE__ */ (0, a.jsx)("div", { style: {
					position: "absolute",
					top: 12,
					left: 12,
					width: 40,
					height: 40,
					borderTop: `4px solid ${r}`,
					borderLeft: `4px solid ${r}`,
					borderTopLeftRadius: 12
				} }),
				/* @__PURE__ */ (0, a.jsx)("div", { style: {
					position: "absolute",
					top: 12,
					right: 12,
					width: 40,
					height: 40,
					borderTop: `4px solid ${r}`,
					borderRight: `4px solid ${r}`,
					borderTopRightRadius: 12
				} }),
				/* @__PURE__ */ (0, a.jsx)("div", { style: {
					position: "absolute",
					bottom: 12,
					left: 12,
					width: 40,
					height: 40,
					borderBottom: `4px solid ${r}`,
					borderLeft: `4px solid ${r}`,
					borderBottomLeftRadius: 12
				} }),
				/* @__PURE__ */ (0, a.jsx)("div", { style: {
					position: "absolute",
					bottom: 12,
					right: 12,
					width: 40,
					height: 40,
					borderBottom: `4px solid ${r}`,
					borderRight: `4px solid ${r}`,
					borderBottomRightRadius: 12
				} }),
				u
			]
		}), e && /* @__PURE__ */ (0, a.jsx)("p", {
			style: {
				margin: 0,
				color: s,
				fontWeight: 500
			},
			children: e
		})]
	});
}
//#endregion
export { s as QRCodeAvatarCard, o as QRCodeCard, c as ScannerFrame };
