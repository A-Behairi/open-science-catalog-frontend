"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [1364],
  {
    1364: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return h;
          },
        });
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "auth" },
            [
              e(
                "b-form",
                {
                  on: {
                    submit: function (e) {
                      return (
                        e.stopPropagation(),
                        e.preventDefault(),
                        t.submit.apply(null, arguments)
                      );
                    },
                    reset: t.reset,
                  },
                },
                [
                  e(
                    "b-card",
                    {
                      attrs: {
                        "no-body": "",
                        header: t.$t("authentication.title"),
                      },
                    },
                    [
                      e(
                        "b-card-body",
                        [
                          e("p", [
                            t._v(t._s(t.$t("authentication.description"))),
                          ]),
                          t.description
                            ? e("Description", {
                                attrs: { description: t.description },
                              })
                            : t._e(),
                          e("b-form-input", {
                            staticClass: "mb-2 mt-2",
                            attrs: {
                              type: "password",
                              autofocus: "",
                              required: t.required,
                            },
                            model: {
                              value: t.token,
                              callback: function (e) {
                                t.token = "string" === typeof e ? e.trim() : e;
                              },
                              expression: "token",
                            },
                          }),
                        ],
                        1
                      ),
                      e(
                        "b-card-footer",
                        [
                          e(
                            "b-button",
                            { attrs: { type: "submit", variant: "primary" } },
                            [t._v(t._s(t.$t("submit")))]
                          ),
                          e(
                            "b-button",
                            {
                              staticClass: "ml-3",
                              attrs: { type: "reset", variant: "danger" },
                            },
                            [t._v(t._s(t.$t("cancel")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        n = i(2778),
        s = i(4909),
        o = i(7353),
        u = i(629),
        c = {
          name: "Authentication",
          components: {
            BForm: s.e,
            BFormInput: o.e,
            Description: n["default"],
          },
          data() {
            return { token: "", required: !0 };
          },
          computed: {
            ...(0, u.rn)(["authConfig", "authData"]),
            description() {
              return this.authConfig.description
                ? this.authConfig.description
                : this.$t("authConfig.description");
            },
          },
          created() {
            this.authData &&
              ((this.token = this.authData), (this.required = !1));
          },
          methods: {
            reset() {
              this.$store.commit("requestAuth", null);
            },
            async submit() {
              await this.$store.dispatch("setAuth", this.token),
                await this.$store.dispatch("retryAfterAuth"),
                this.$store.commit("requestAuth", null);
            },
          },
        },
        d = c,
        l = i(1001),
        p = (0, l.Z)(d, a, r, !1, null, null, null),
        h = p.exports;
    },
    4909: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
      });
      var a = i(1915),
        r = i(9558),
        n = i(4689),
        s = i(2299),
        o = i(451),
        u = (0, o.y2)(
          {
            id: (0, o.pi)(s.N0),
            inline: (0, o.pi)(s.U5, !1),
            novalidate: (0, o.pi)(s.U5, !1),
            validated: (0, o.pi)(s.U5, !1),
          },
          n.eh
        ),
        c = (0, a.l7)({
          name: n.eh,
          functional: !0,
          props: u,
          render: function (t, e) {
            var i = e.props,
              a = e.data,
              n = e.children;
            return t(
              "form",
              (0, r.b)(a, {
                class: {
                  "form-inline": i.inline,
                  "was-validated": i.validated,
                },
                attrs: { id: i.id, novalidate: i.novalidate },
              }),
              n
            );
          },
        });
    },
  },
]);
//# sourceMappingURL=1364.f34c993e.js.map
