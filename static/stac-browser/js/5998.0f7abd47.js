"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [5998],
  {
    5998: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return o;
          },
        });
      var s = function () {
          var e = this,
            r = e._self._c;
          return r("div", { ref: "previews", staticClass: "previews" }, [
            r(
              "div",
              { staticClass: "overlay" },
              [
                r("FullscreenButton", {
                  attrs: { element: () => e.$refs.previews },
                }),
              ],
              1
            ),
            r(
              "div",
              { staticClass: "content" },
              e._l(e.thumbnails, function (t) {
                return r(
                  "a",
                  {
                    key: t.href,
                    attrs: { href: t.href, target: "_blank", download: "" },
                  },
                  [
                    r("img", {
                      staticClass: "thumbnail",
                      attrs: { src: t.href, crossorigin: e.crossOriginMedia },
                    }),
                  ]
                );
              }),
              0
            ),
          ]);
        },
        n = [],
        a = t(629),
        i = {
          name: "Thumbnails",
          components: {
            FullscreenButton: () => t.e(9795).then(t.bind(t, 9795)),
          },
          props: { thumbnails: { type: Array, required: !0 } },
          computed: { ...(0, a.rn)(["crossOriginMedia"]) },
        },
        l = i,
        u = t(1001),
        c = (0, u.Z)(l, s, n, !1, null, null, null),
        o = c.exports;
    },
  },
]);
//# sourceMappingURL=5998.0f7abd47.js.map
