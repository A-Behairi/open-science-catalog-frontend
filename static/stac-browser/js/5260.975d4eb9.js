"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [5260],
  {
    5260: function (t, r, e) {
      e.r(r),
        e.d(r, {
          default: function () {
            return m;
          },
        });
      var n = function () {
          var t = this,
            r = t._self._c;
          return r(
            "main",
            { staticClass: "select-data-source" },
            [
              r(
                "b-form",
                { on: { submit: t.go } },
                [
                  r(
                    "b-form-group",
                    {
                      attrs: {
                        id: "select",
                        label: t.$t("index.specifyCatalog"),
                        "label-for": "url",
                        "invalid-feedback": t.error,
                        state: t.valid,
                      },
                    },
                    [
                      r("b-form-input", {
                        attrs: {
                          id: "url",
                          type: "url",
                          value: t.url,
                          placeholder: "https://...",
                        },
                        on: { input: t.setUrl },
                      }),
                    ],
                    1
                  ),
                  r(
                    "b-button",
                    { attrs: { type: "submit", variant: "primary" } },
                    [t._v(t._s(t.$t("index.load")))]
                  ),
                ],
                1
              ),
              t.stacIndex.length > 0 ? r("hr") : t._e(),
              t.stacIndex.length > 0
                ? r(
                    "b-form-group",
                    {
                      staticClass: "stac-index",
                      scopedSlots: t._u(
                        [
                          {
                            key: "label",
                            fn: function () {
                              return [
                                r("i18n", {
                                  attrs: { path: "index.selectStacIndex" },
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: "stacIndex",
                                        fn: function () {
                                          return [
                                            r(
                                              "a",
                                              {
                                                attrs: {
                                                  href: "https://stacindex.org",
                                                  target: "_blank",
                                                },
                                              },
                                              [t._v("STAC Index")]
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ],
                                    null,
                                    !1,
                                    4016002706
                                  ),
                                }),
                              ];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !1,
                        2418002653
                      ),
                    },
                    [
                      r(
                        "b-list-group",
                        [
                          t._l(t.stacIndex, function (e) {
                            return [
                              t.show(e)
                                ? r(
                                    "b-list-group-item",
                                    {
                                      key: e.id,
                                      attrs: {
                                        button: "",
                                        active: t.url === e.url,
                                      },
                                      on: {
                                        click: function (r) {
                                          return t.open(e.url);
                                        },
                                      },
                                    },
                                    [
                                      r(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-between align-items-baseline mb-1",
                                        },
                                        [
                                          r("strong", [t._v(t._s(e.title))]),
                                          e.isApi
                                            ? r(
                                                "b-badge",
                                                {
                                                  attrs: { variant: "danger" },
                                                },
                                                [t._v(t._s(t.$t("index.api")))]
                                              )
                                            : r(
                                                "b-badge",
                                                {
                                                  attrs: { variant: "success" },
                                                },
                                                [
                                                  t._v(
                                                    t._s(t.$t("index.catalog"))
                                                  ),
                                                ]
                                              ),
                                        ],
                                        1
                                      ),
                                      r("Description", {
                                        attrs: {
                                          description: e.summary,
                                          compact: "",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : t._e(),
                            ];
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        a = [],
        i = (e(7658), e(4909)),
        o = e(4240),
        s = e(7353),
        l = e(322),
        u = e(8367),
        c = e(629),
        p = e(2778),
        d = e(9879),
        f = e(6154),
        b = {
          name: "SelectDataSource",
          components: {
            BForm: i.e,
            BFormGroup: o.x,
            BFormInput: s.e,
            BListGroup: l.N,
            BListGroupItem: u.f,
            Description: p["default"],
          },
          data() {
            return { url: "", stacIndex: [] };
          },
          computed: {
            ...(0, c.Se)(["toBrowserPath"]),
            valid() {
              return !this.error;
            },
            error() {
              if (!this.url) return null;
              try {
                let t = new URL(this.url);
                return t.protocol
                  ? t.host
                    ? null
                    : this.$t("index.urlMissingHost")
                  : this.$t("index.urlMissingProtocol");
              } catch (t) {
                return this.$t("index.urlInvalid");
              }
            },
          },
          async created() {
            this.$store.commit("resetCatalog", !0);
            try {
              let t = await f.Z.get("https://stacindex.org/api/catalogs");
              Array.isArray(t.data) && (this.stacIndex = t.data);
            } catch (t) {
              console.error(t);
            }
          },
          methods: {
            show(t) {
              return (
                "private" !== t.access &&
                (!this.url || d.ZP.search(this.url, [t.title, t.url]))
              );
            },
            setUrl(t) {
              this.url = t;
            },
            open(t) {
              (this.url = t), this.go();
            },
            go() {
              this.$router.push(this.toBrowserPath(this.url));
            },
          },
        },
        h = b,
        g = e(1001),
        v = (0, g.Z)(h, n, a, !1, null, null, null),
        m = v.exports;
    },
    4909: function (t, r, e) {
      e.d(r, {
        e: function () {
          return u;
        },
      });
      var n = e(1915),
        a = e(9558),
        i = e(4689),
        o = e(2299),
        s = e(451),
        l = (0, s.y2)(
          {
            id: (0, s.pi)(o.N0),
            inline: (0, s.pi)(o.U5, !1),
            novalidate: (0, s.pi)(o.U5, !1),
            validated: (0, s.pi)(o.U5, !1),
          },
          i.eh
        ),
        u = (0, n.l7)({
          name: i.eh,
          functional: !0,
          props: l,
          render: function (t, r) {
            var e = r.props,
              n = r.data,
              i = r.children;
            return t(
              "form",
              (0, a.b)(n, {
                class: {
                  "form-inline": e.inline,
                  "was-validated": e.validated,
                },
                attrs: { id: e.id, novalidate: e.novalidate },
              }),
              i
            );
          },
        });
    },
    8367: function (t, r, e) {
      e.d(r, {
        f: function () {
          return y;
        },
      });
      var n = e(1915),
        a = e(9558),
        i = e(4689),
        o = e(2299),
        s = e(1572),
        l = e(6410),
        u = e(7040),
        c = e(451),
        p = e(488),
        d = e(7347);
      function f(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function b(t) {
        for (var r = 1; r < arguments.length; r++) {
          var e = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? f(Object(e), !0).forEach(function (r) {
                h(t, r, e[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : f(Object(e)).forEach(function (r) {
                Object.defineProperty(
                  t,
                  r,
                  Object.getOwnPropertyDescriptor(e, r)
                );
              });
        }
        return t;
      }
      function h(t, r, e) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = e),
          t
        );
      }
      var g = ["a", "router-link", "button", "b-link"],
        v = (0, u.CE)(d.NQ, ["event", "routerTag"]);
      delete v.href.default, delete v.to.default;
      var m = (0, c.y2)(
          (0, u.GE)(
            b(
              b({}, v),
              {},
              {
                action: (0, c.pi)(o.U5, !1),
                button: (0, c.pi)(o.U5, !1),
                tag: (0, c.pi)(o.N0, "div"),
                variant: (0, c.pi)(o.N0),
              }
            )
          ),
          i.KT
        ),
        y = (0, n.l7)({
          name: i.KT,
          functional: !0,
          props: m,
          render: function (t, r) {
            var e,
              n = r.props,
              i = r.data,
              o = r.children,
              u = n.button,
              f = n.variant,
              b = n.active,
              m = n.disabled,
              y = (0, p.u$)(n),
              x = u ? "button" : y ? d.we : n.tag,
              _ = !!(n.action || y || u || (0, s.kI)(g, n.tag)),
              w = {},
              O = {};
            return (
              (0, l.YR)(x, "button")
                ? ((i.attrs && i.attrs.type) || (w.type = "button"),
                  n.disabled && (w.disabled = !0))
                : (O = (0, c.uj)(v, n)),
              t(
                x,
                (0, a.b)(i, {
                  attrs: w,
                  props: O,
                  staticClass: "list-group-item",
                  class:
                    ((e = {}),
                    h(e, "list-group-item-".concat(f), f),
                    h(e, "list-group-item-action", _),
                    h(e, "active", b),
                    h(e, "disabled", m),
                    e),
                }),
                o
              )
            );
          },
        });
    },
    322: function (t, r, e) {
      e.d(r, {
        N: function () {
          return p;
        },
      });
      var n = e(1915),
        a = e(9558),
        i = e(4689),
        o = e(2299),
        s = e(3284),
        l = e(451);
      function u(t, r, e) {
        return (
          r in t
            ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = e),
          t
        );
      }
      var c = (0, l.y2)(
          {
            flush: (0, l.pi)(o.U5, !1),
            horizontal: (0, l.pi)(o.gL, !1),
            tag: (0, l.pi)(o.N0, "div"),
          },
          i.DX
        ),
        p = (0, n.l7)({
          name: i.DX,
          functional: !0,
          props: c,
          render: function (t, r) {
            var e = r.props,
              n = r.data,
              i = r.children,
              o = "" === e.horizontal || e.horizontal;
            o = !e.flush && o;
            var l = {
              staticClass: "list-group",
              class: u(
                {
                  "list-group-flush": e.flush,
                  "list-group-horizontal": !0 === o,
                },
                "list-group-horizontal-".concat(o),
                (0, s.HD)(o)
              ),
            };
            return t(e.tag, (0, a.b)(n, l), i);
          },
        });
    },
  },
]);
//# sourceMappingURL=5260.975d4eb9.js.map
