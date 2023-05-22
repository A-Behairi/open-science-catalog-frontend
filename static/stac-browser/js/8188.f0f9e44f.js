"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [8188],
  {
    8188: function (t, e, l) {
      l.r(e),
        l.d(e, {
          default: function () {
            return _;
          },
        });
      var r = function () {
          var t = this,
            e = t._self._c;
          return e(
            "section",
            { staticClass: "links mb-4" },
            [
              t.title ? e("h2", [t._v(t._s(t.title))]) : t._e(),
              t.hasGroups
                ? t._l(t.groups, function (l) {
                    return e("div", { key: l.rel, staticClass: "group" }, [
                      l.rel ? e("h4", [t._v(t._s(l.label))]) : t._e(),
                      e(
                        "ul",
                        t._l(l.links, function (l, r) {
                          return e(
                            "li",
                            { key: r },
                            [
                              e("StacLink", {
                                attrs: {
                                  data: l,
                                  fallbackTitle: () => t.fallbackTitle(l),
                                },
                              }),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ]);
                  })
                : e(
                    "ul",
                    t._l(t.links, function (l, r) {
                      return e(
                        "li",
                        { key: r },
                        [
                          e("StacLink", {
                            attrs: {
                              data: l,
                              fallbackTitle: () => t.fallbackTitle(l),
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    0
                  ),
            ],
            2
          );
        },
        s = [],
        a = (l(7658), l(5995)),
        n = l(2407),
        i = l(9263),
        u = l(4261),
        o = l(9879),
        c = l(1259),
        f = l(629),
        k = {
          name: "Links",
          components: { StacLink: a["default"] },
          props: {
            title: { type: String, default: null },
            links: { type: Array, default: () => [] },
          },
          computed: {
            ...(0, f.rn)(["uiLanguage"]),
            groups() {
              let t = this.links.reduce((t, e) => {
                let l = "string" === typeof e.rel ? e.rel.toLowerCase() : "";
                return (
                  l in t
                    ? t[l].links.push(e)
                    : (t[l] = { rel: l, label: this.formatRel(l), links: [e] }),
                  t
                );
              }, {});
              return Object.values(t).sort((t, e) =>
                t.label.localeCompare(e.label, this.uiLanguage)
              );
            },
            hasGroups() {
              return this.groups.some(
                (t) => t.rel.length > 0 && t.links.length >= 2
              );
            },
          },
          methods: {
            formatRel(t) {
              let e = "string" === typeof t ? t.toLowerCase() : "";
              return e in n.Fields.links.rel.mapping
                ? (0, c.Cy)(n.Fields.links.rel.mapping[e])
                : (t.startsWith(u.Eg) && (t = t.substr(u.Eg.length)),
                  (0, i.formatKey)(t));
            },
            fallbackTitle(t) {
              let e = o.ZP.titleForHref(t.href);
              if (this.hasGroups) return e;
              {
                let l = this.formatRel(t.rel);
                return `${l}: ${e}`;
              }
            },
          },
        },
        p = k,
        h = l(1001),
        g = (0, h.Z)(p, r, s, !1, null, null, null),
        _ = g.exports;
    },
  },
]);
//# sourceMappingURL=8188.f0f9e44f.js.map
