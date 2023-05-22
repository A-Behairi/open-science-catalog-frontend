"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [8218],
  {
    8218: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return w;
          },
        });
      var r = function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-button",
            t._b(
              {
                attrs: { variant: t.copyColor, title: t.$t("copy") },
                on: {
                  click: function (e) {
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      t.copy.apply(null, arguments)
                    );
                  },
                },
              },
              "b-button",
              t.buttonProps,
              !1
            ),
            [e(t.copyIcon, { tag: "component" }), t._t("default")],
            2
          );
        },
        o = [],
        a = n(8019),
        i = Object.defineProperty,
        s = (t, e, n) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        c = (t, e, n) => (s(t, "symbol" != typeof e ? e + "" : e, n), n);
      class u {
        constructor() {
          c(this, "seed", 0), c(this, "data", new Map());
        }
        id() {
          return Date.now().toString(26) + this.seed++;
        }
        add(t, e = this.id()) {
          return this.data.set(e, t), e;
        }
        get(t) {
          return this.data.get(t);
        }
        delete(t) {
          this.delete(t);
        }
      }
      const l = "Failed to copy value to clipboard. Unknown type.",
        d = {
          asString(t) {
            if (null == t) return console.warn("Clipboard input is empty"), "";
            if ("string" != typeof t)
              try {
                return JSON.stringify(t);
              } catch (e) {
                return console.warn(l, e), "";
              }
            return t;
          },
        },
        p = "position:fixed; pointer-events:none; z-index:-9999; opacity:0;",
        b = {
          createTextarea(t) {
            const e = document.createElement("textarea");
            return (
              e.addEventListener("focusin", (t) => {
                t.stopPropagation();
              }),
              (e.value = t),
              e.setAttribute("readonly", ""),
              (e.style.cssText = p),
              e
            );
          },
        },
        y = {
          async requestClipboardPermission() {
            return navigator.permissions.query({ name: "clipboard-write" });
          },
          async writeClipboard(t) {
            return (
              "granted" === (await y.requestClipboardPermission()).state &&
              (await navigator.clipboard.writeText(t), !0)
            );
          },
          writeClipboardExecCommand(t) {
            const e = b.createTextarea(t);
            if (
              (document.body.appendChild(e),
              navigator.userAgent.match(/ipad|ipod|iphone/i))
            ) {
              (e.contentEditable = "true"), (e.readOnly = !0);
              const t = document.createRange();
              t.selectNodeContents(e);
              const n = window.getSelection();
              n &&
                (n.removeAllRanges(),
                n.addRange(t),
                e.setSelectionRange(0, 999999));
            } else e.select();
            const n = document.execCommand("copy");
            return document.body.removeChild(e), n;
          },
          async copy(t) {
            const e = "function" == typeof t ? t() : t,
              n = d.asString(e);
            if (y.writeClipboardExecCommand(n)) return !0;
            await y.writeClipboard(n);
          },
        };
      new u();
      var h = {
          name: "CopyButton",
          components: {
            BIconClipboard: a.O48,
            BIconClipboardCheck: a.bEK,
            BIconClipboardX: a.R5z,
          },
          props: {
            copyText: { type: String, required: !0 },
            variant: { type: String, default: "primary" },
            buttonProps: { type: Object, default: () => ({}) },
          },
          data() {
            return { status: null };
          },
          computed: {
            copyColor() {
              let t = this.variant;
              return (
                !0 === this.status
                  ? (t = "success")
                  : !1 === this.status && (t = "danger"),
                this.variant.startsWith("outline-") && (t = "outline-" + t),
                t
              );
            },
            copyIcon() {
              return !0 === this.status
                ? "b-icon-clipboard-check"
                : !1 === this.status
                ? "b-icon-clipboard-x"
                : "b-icon-clipboard";
            },
          },
          methods: {
            async copy() {
              try {
                let t = document.activeElement;
                await y.copy(this.copyText), t.focus(), (this.status = !0);
              } catch (t) {
                console.error(t), (this.status = !1);
              }
              setTimeout(() => (this.status = null), 2500);
            },
          },
        },
        m = h,
        f = n(1001),
        g = (0, f.Z)(m, r, o, !1, null, null, null),
        w = g.exports;
    },
  },
]);
//# sourceMappingURL=8218.29d1651d.js.map
