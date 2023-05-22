"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [9795],
  {
    9795: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = function () {
          var e = this,
            t = e._self._c;
          return t(
            "b-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.element,
                  expression: "element",
                },
              ],
              staticClass: "fullscreen-button",
              attrs: { variant: "light", type: "button", title: e.title },
              on: { click: e.toggleFullscreen },
            },
            [
              t(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.isFullscreen,
                      expression: "isFullscreen",
                    },
                  ],
                },
                [t("b-icon-fullscreen-exit")],
                1
              ),
              t(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !e.isFullscreen,
                      expression: "!isFullscreen",
                    },
                  ],
                },
                [t("b-icon-fullscreen")],
                1
              ),
            ]
          );
        },
        l = [],
        i = n(8019),
        r = {
          name: "FullscreenButton",
          components: { BIconFullscreen: i.xLz, BIconFullscreenExit: i.UNU },
          props: {
            element: { type: [Function, String, Object], required: !0 },
            zIndex: { type: Number, default: 9e3 },
          },
          data() {
            return { isFullscreen: !1, keyDownFn: null, oldZIndex: "auto" };
          },
          computed: {
            title() {
              return this.isFullscreen
                ? this.$t("fullscreen.exit")
                : this.$t("fullscreen.show");
            },
          },
          mounted() {
            this.keyDownFn = this.onkeyDown.bind(this);
            let e = this.getElement();
            e &&
              ((e.style.position = "relative"),
              e.addEventListener("keydown", this.keyDownFn));
          },
          beforeDestroy() {
            let e = this.getElement();
            e && e.removeEventListener("keydown", this.keyDownFn);
          },
          methods: {
            onkeyDown(e) {
              !this.isFullscreen ||
                ("F11" !== e.key && "Escape" !== e.key) ||
                (this.toggleFullscreen(),
                e.preventDefault(),
                e.stopPropagation());
            },
            getElement() {
              return "string" === typeof this.element
                ? document.querySelector(this.element)
                : "function" === typeof this.element
                ? this.element()
                : this.element;
            },
            toggleFullscreen() {
              let e = this.getElement();
              this.isFullscreen
                ? ((this.isFullscreen = !1),
                  (document.body.style.overflow = null),
                  e.classList.remove("fullscreen"),
                  (e.style.zIndex = this.oldZIndex))
                : ((document.body.style.overflow = "hidden"),
                  (this.isFullscreen = !0),
                  e.classList.add("fullscreen"),
                  (this.oldZIndex = e.style.zIndex),
                  (e.style.zIndex = this.zIndex)),
                this.$emit("changed", this.isFullscreen);
            },
          },
        },
        o = r,
        u = n(1001),
        c = (0, u.Z)(o, s, l, !1, null, null, null),
        a = c.exports;
    },
  },
]);
//# sourceMappingURL=9795.e5ef8af2.js.map
