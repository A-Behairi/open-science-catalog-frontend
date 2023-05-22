"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [2968],
  {
    2968: function (t, e, s) {
      s.r(e),
        s.d(e, {
          default: function () {
            return c;
          },
        });
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-button-group",
            { attrs: { title: t.$t("sort.title"), size: "sm" } },
            [
              e(
                "b-button",
                {
                  attrs: {
                    variant: "outline-primary",
                    title: t.$t("sort.asc.title"),
                    pressed: 1 === t.value || (t.enforce && -1 !== t.value),
                  },
                  on: {
                    click: function (e) {
                      return t.toggle(1);
                    },
                  },
                },
                [
                  e("b-icon-sort-alpha-down"),
                  t._v(" "),
                  e("span", { staticClass: "button-label" }, [
                    t._v(t._s(t.$t("sort.asc.label"))),
                  ]),
                ],
                1
              ),
              e(
                "b-button",
                {
                  attrs: {
                    variant: "outline-primary",
                    title: t.$t("sort.desc.title"),
                    pressed: -1 === t.value,
                  },
                  on: {
                    click: function (e) {
                      return t.toggle(-1);
                    },
                  },
                },
                [
                  e("b-icon-sort-alpha-up"),
                  t._v(" "),
                  e("span", { staticClass: "button-label" }, [
                    t._v(t._s(t.$t("sort.desc.label"))),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [],
        r = s(8019),
        o = {
          id: "SortButtons",
          components: { BIconSortAlphaDown: r.WvV, BIconSortAlphaUp: r.LfJ },
          props: {
            value: { type: Number, default: 0 },
            enforce: { type: Boolean, default: !1 },
          },
          methods: {
            toggle(t) {
              let e = this.enforce ? 1 : 0;
              this.value !== t && (e = t), this.$emit("input", e);
            },
          },
        },
        l = o,
        u = s(1001),
        i = (0, u.Z)(l, a, n, !1, null, null, null),
        c = i.exports;
    },
  },
]);
//# sourceMappingURL=2968.03e36d14.js.map
