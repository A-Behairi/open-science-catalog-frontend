"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [8762],
  {
    8762: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return rt;
          },
        });
      var s,
        a = function () {
          var t = this,
            e = t._self._c;
          return e("b-sidebar", {
            attrs: {
              id: "sidebar",
              title: t.$t("browse"),
              backdrop: "",
              lazy: "",
            },
            scopedSlots: t._u(
              [
                {
                  key: "default",
                  fn: function () {
                    return [
                      t.parents
                        ? t.root
                          ? e("Tree", {
                              attrs: { item: t.root, path: t.parents },
                            })
                          : t._e()
                        : e("Loading"),
                    ];
                  },
                  proxy: !0,
                },
                t.allowSelectCatalog
                  ? {
                      key: "footer",
                      fn: function () {
                        return [
                          e(
                            "b-button",
                            {
                              staticClass: "switch-catalog",
                              attrs: { variant: "light" },
                            },
                            [
                              e(
                                "router-link",
                                { attrs: { to: "/" } },
                                [
                                  e("b-icon-arrow-left-right"),
                                  t._v(
                                    " " + t._s(t.$t("sidebar.switchCatalog"))
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    }
                  : null,
              ],
              null,
              !0
            ),
            model: {
              value: t.visible,
              callback: function (e) {
                t.visible = e;
              },
              expression: "visible",
            },
          });
        },
        n = [],
        o = i(8019),
        r = i(1915),
        l = i(4689),
        h = i(3935),
        c = i(3294),
        d = i(3663),
        u = i(2299),
        p = i(494),
        f = i(6410),
        b = i(8415),
        g = i(4602),
        v = i(7040),
        m = i(451),
        w = i(8492),
        y = i(3727),
        C = i(8596),
        S = i(8280),
        k = i(1451),
        _ = i(7100);
      function x(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(i), !0).forEach(function (e) {
                A(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : x(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      function A(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      var P = "b-sidebar",
        $ = (0, b.gA)(l.gr, "request-state"),
        T = (0, b.gA)(l.gr, "toggle"),
        E = (0, b.J3)(l.gr, "state"),
        z = (0, b.J3)(l.gr, "sync-state"),
        F = (0, g.l)("visible", { type: u.U5, defaultValue: !1, event: c.z2 }),
        L = F.mixin,
        U = F.props,
        I = F.prop,
        j = F.event,
        B = (0, m.y2)(
          (0, v.GE)(
            O(
              O(O({}, y.N), U),
              {},
              {
                ariaLabel: (0, m.pi)(u.N0),
                ariaLabelledby: (0, m.pi)(u.N0),
                backdrop: (0, m.pi)(u.U5, !1),
                backdropVariant: (0, m.pi)(u.N0, "dark"),
                bgVariant: (0, m.pi)(u.N0, "light"),
                bodyClass: (0, m.pi)(u.wA),
                closeLabel: (0, m.pi)(u.N0),
                footerClass: (0, m.pi)(u.wA),
                footerTag: (0, m.pi)(u.N0, "footer"),
                headerClass: (0, m.pi)(u.wA),
                headerTag: (0, m.pi)(u.N0, "header"),
                lazy: (0, m.pi)(u.U5, !1),
                noCloseOnBackdrop: (0, m.pi)(u.U5, !1),
                noCloseOnEsc: (0, m.pi)(u.U5, !1),
                noCloseOnRouteChange: (0, m.pi)(u.U5, !1),
                noEnforceFocus: (0, m.pi)(u.U5, !1),
                noHeader: (0, m.pi)(u.U5, !1),
                noHeaderClose: (0, m.pi)(u.U5, !1),
                noSlide: (0, m.pi)(u.U5, !1),
                right: (0, m.pi)(u.U5, !1),
                shadow: (0, m.pi)(u.gL, !1),
                sidebarClass: (0, m.pi)(u.wA),
                tag: (0, m.pi)(u.N0, "div"),
                textVariant: (0, m.pi)(u.N0, "dark"),
                title: (0, m.pi)(u.N0),
                width: (0, m.pi)(u.N0),
                zIndex: (0, m.pi)(u.fE),
              }
            )
          ),
          l.Wx
        ),
        N = function (t, e) {
          var i = e.normalizeSlot(p.A0, e.slotScope) || e.title;
          return i
            ? t("strong", { attrs: { id: e.safeId("__title__") } }, [i])
            : t("span");
        },
        Z = function (t, e) {
          if (e.noHeaderClose) return t();
          var i = e.closeLabel,
            s = e.textVariant,
            a = e.hide;
          return t(
            k.Z,
            {
              props: { ariaLabel: i, textVariant: s },
              on: { click: a },
              ref: "close-button",
            },
            [e.normalizeSlot(p.RC) || t(o.uR$)]
          );
        },
        R = function (t, e) {
          if (e.noHeader) return t();
          var i = e.normalizeSlot(p._0, e.slotScope);
          if (!i) {
            var s = N(t, e),
              a = Z(t, e);
            i = e.right ? [a, s] : [s, a];
          }
          return t(
            e.headerTag,
            {
              staticClass: "".concat(P, "-header"),
              class: e.headerClass,
              key: "header",
            },
            i
          );
        },
        D = function (t, e) {
          return t(
            "div",
            {
              staticClass: "".concat(P, "-body"),
              class: e.bodyClass,
              key: "body",
            },
            [e.normalizeSlot(p.Pq, e.slotScope)]
          );
        },
        H = function (t, e) {
          var i = e.normalizeSlot(p.Jz, e.slotScope);
          return i
            ? t(
                e.footerTag,
                {
                  staticClass: "".concat(P, "-footer"),
                  class: e.footerClass,
                  key: "footer",
                },
                [i]
              )
            : t();
        },
        V = function (t, e) {
          var i = R(t, e);
          return e.lazy && !e.isOpen ? i : [i, D(t, e), H(t, e)];
        },
        M = function (t, e) {
          if (!e.backdrop) return t();
          var i = e.backdropVariant;
          return t("div", {
            directives: [{ name: "show", value: e.localShow }],
            staticClass: "b-sidebar-backdrop",
            class: A({}, "bg-".concat(i), i),
            on: { click: e.onBackdropClick },
          });
        },
        q = (0, r.l7)({
          name: l.Wx,
          mixins: [w.D, y.t, L, C.E, S.Z],
          inheritAttrs: !1,
          props: B,
          data: function () {
            var t = !!this[I];
            return { localShow: t, isOpen: t };
          },
          computed: {
            transitionProps: function () {
              return this.noSlide
                ? { css: !0 }
                : {
                    css: !0,
                    enterClass: "",
                    enterActiveClass: "slide",
                    enterToClass: "show",
                    leaveClass: "show",
                    leaveActiveClass: "slide",
                    leaveToClass: "",
                  };
            },
            slotScope: function () {
              var t = this.hide,
                e = this.right,
                i = this.localShow;
              return { hide: t, right: e, visible: i };
            },
            hasTitle: function () {
              var t = this.$scopedSlots,
                e = this.$slots;
              return (
                !this.noHeader &&
                !this.hasNormalizedSlot(p._0) &&
                !(
                  !this.normalizeSlot(p.A0, this.slotScope, t, e) && !this.title
                )
              );
            },
            titleId: function () {
              return this.hasTitle ? this.safeId("__title__") : null;
            },
            computedAttrs: function () {
              return O(
                O({}, this.bvAttrs),
                {},
                {
                  id: this.safeId(),
                  tabindex: "-1",
                  role: "dialog",
                  "aria-modal": this.backdrop ? "true" : "false",
                  "aria-hidden": this.localShow ? null : "true",
                  "aria-label": this.ariaLabel || null,
                  "aria-labelledby":
                    this.ariaLabelledby || this.titleId || null,
                }
              );
            },
          },
          watch:
            ((s = {}),
            A(s, I, function (t, e) {
              t !== e && (this.localShow = t);
            }),
            A(s, "localShow", function (t, e) {
              t !== e && (this.emitState(t), this.$emit(j, t));
            }),
            A(s, "$route", function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              this.noCloseOnRouteChange ||
                t.fullPath === e.fullPath ||
                this.hide();
            }),
            s),
          created: function () {
            this.$_returnFocusEl = null;
          },
          mounted: function () {
            var t = this;
            this.listenOnRoot(T, this.handleToggle),
              this.listenOnRoot($, this.handleSync),
              this.$nextTick(function () {
                t.emitState(t.localShow);
              });
          },
          activated: function () {
            this.emitSync();
          },
          beforeDestroy: function () {
            (this.localShow = !1), (this.$_returnFocusEl = null);
          },
          methods: {
            hide: function () {
              this.localShow = !1;
            },
            emitState: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.localShow;
              this.emitOnRoot(E, this.safeId(), t);
            },
            emitSync: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.localShow;
              this.emitOnRoot(z, this.safeId(), t);
            },
            handleToggle: function (t) {
              t && t === this.safeId() && (this.localShow = !this.localShow);
            },
            handleSync: function (t) {
              var e = this;
              t &&
                t === this.safeId() &&
                this.$nextTick(function () {
                  e.emitSync(e.localShow);
                });
            },
            onKeydown: function (t) {
              var e = t.keyCode;
              !this.noCloseOnEsc && e === d.RZ && this.localShow && this.hide();
            },
            onBackdropClick: function () {
              this.localShow && !this.noCloseOnBackdrop && this.hide();
            },
            onTopTrapFocus: function () {
              var t = (0, f.td)(this.$refs.content);
              this.enforceFocus(t.reverse()[0]);
            },
            onBottomTrapFocus: function () {
              var t = (0, f.td)(this.$refs.content);
              this.enforceFocus(t[0]);
            },
            onBeforeEnter: function () {
              (this.$_returnFocusEl = (0, f.vY)(h.Qg ? [document.body] : [])),
                (this.isOpen = !0);
            },
            onAfterEnter: function (t) {
              (0, f.r3)(t, (0, f.vY)()) || this.enforceFocus(t),
                this.$emit(c.AS);
            },
            onAfterLeave: function () {
              this.enforceFocus(this.$_returnFocusEl),
                (this.$_returnFocusEl = null),
                (this.isOpen = !1),
                this.$emit(c.v6);
            },
            enforceFocus: function (t) {
              this.noEnforceFocus || (0, f.KS)(t);
            },
          },
          render: function (t) {
            var e,
              i = this.bgVariant,
              s = this.width,
              a = this.textVariant,
              n = this.localShow,
              o = "" === this.shadow || this.shadow,
              r = t(
                this.tag,
                {
                  staticClass: P,
                  class: [
                    ((e = { shadow: !0 === o }),
                    A(e, "shadow-".concat(o), o && !0 !== o),
                    A(e, "".concat(P, "-right"), this.right),
                    A(e, "bg-".concat(i), i),
                    A(e, "text-".concat(a), a),
                    e),
                    this.sidebarClass,
                  ],
                  style: { width: s },
                  attrs: this.computedAttrs,
                  directives: [{ name: "show", value: n }],
                  ref: "content",
                },
                [V(t, this)]
              );
            r = t(
              "transition",
              {
                props: this.transitionProps,
                on: {
                  beforeEnter: this.onBeforeEnter,
                  afterEnter: this.onAfterEnter,
                  afterLeave: this.onAfterLeave,
                },
              },
              [r]
            );
            var l = t(_.N, { props: { noFade: this.noSlide } }, [M(t, this)]),
              h = t(),
              c = t();
            return (
              this.backdrop &&
                n &&
                ((h = t("div", {
                  attrs: { tabindex: "0" },
                  on: { focus: this.onTopTrapFocus },
                })),
                (c = t("div", {
                  attrs: { tabindex: "0" },
                  on: { focus: this.onBottomTrapFocus },
                }))),
              t(
                "div",
                {
                  staticClass: "b-sidebar-outer",
                  style: { zIndex: this.zIndex },
                  attrs: { tabindex: "-1" },
                  on: { keydown: this.onKeydown },
                },
                [h, r, c, l]
              )
            );
          },
        }),
        J = i(629),
        K = i(9091),
        G = function () {
          var t = this,
            e = t._self._c;
          return e(
            "ul",
            {
              directives: [
                {
                  name: "b-visible",
                  rawName: "v-b-visible",
                  value: t.load,
                  expression: "load",
                },
              ],
              staticClass: "tree",
            },
            [
              e(
                "li",
                [
                  t.pagination
                    ? e(
                        "b-button",
                        {
                          attrs: { size: "sm", variant: "light", disabled: !0 },
                        },
                        [e("b-icon-three-dots")],
                        1
                      )
                    : t.mayHaveChildren
                    ? [
                        e(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "light" },
                            on: { click: t.toggle },
                          },
                          [
                            t.expanded
                              ? e("b-icon-folder-minus")
                              : e("b-icon-folder-plus"),
                          ],
                          1
                        ),
                      ]
                    : e(
                        "b-button",
                        {
                          attrs: { size: "sm", variant: "light", disabled: !0 },
                        },
                        [e("b-icon-file-earmark-richtext")],
                        1
                      ),
                  e(
                    "b-button",
                    {
                      class: { path: t.onPath || t.active },
                      attrs: {
                        size: "sm",
                        variant: "light",
                        disabled: t.active || !t.to,
                        to: t.to,
                      },
                    },
                    [t._v(" " + t._s(t.title) + " ")]
                  ),
                  t.expanded && t.mayHaveChildren
                    ? [
                        t.loading
                          ? e("ul", { staticClass: "tree" }, [
                              e(
                                "li",
                                [
                                  e("b-spinner", {
                                    attrs: {
                                      label: t.$t("loading"),
                                      small: "",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ])
                          : 0 === t.childs.length
                          ? e("ul", { staticClass: "tree" }, [
                              e(
                                "li",
                                [
                                  e(
                                    "b-button",
                                    {
                                      attrs: {
                                        size: "sm",
                                        variant: "light",
                                        disabled: "",
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(t.$t("tree.noChildren")) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ])
                          : [
                              t._l(t.shownChilds, function (i, s) {
                                return e("Tree", {
                                  key: s,
                                  attrs: {
                                    item: i,
                                    parent: t.stac,
                                    path: t.path,
                                  },
                                });
                              }),
                              t.hasMore
                                ? e(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-visible",
                                          rawName: "v-b-visible.300",
                                          value: t.showMore,
                                          expression: "showMore",
                                          modifiers: { 300: !0 },
                                        },
                                      ],
                                      staticClass: "show-more",
                                      attrs: { variant: "light" },
                                      on: { click: t.showMore },
                                    },
                                    [t._v(t._s(t.$t("showMore")))]
                                  )
                                : t._e(),
                            ],
                      ]
                    : t._e(),
                ],
                2
              ),
            ]
          );
        },
        W = [],
        Y = i(9879),
        Q = i(3989),
        X = {
          name: "Tree",
          components: {
            BIconFileEarmarkRichtext: o.sox,
            BIconFolderMinus: o.GUc,
            BIconFolderPlus: o.RLE,
            BIconThreeDots: o.H7n,
          },
          props: {
            item: { type: Object, required: !0 },
            parent: { type: Object, default: null },
            path: { type: Array, default: () => [] },
          },
          data() {
            return { expanded: !1, loading: !1, chunk: 1, childs: [] };
          },
          computed: {
            ...(0, J.rn)(["data", "apiCatalogPriority"]),
            ...(0, J.Se)(["getStac"]),
            stac() {
              if (this.pagination) return null;
              if (this.item instanceof Q.Z) {
                let t = this.getStac(this.item.getAbsoluteUrl());
                return !this.loading && t ? t : this.item;
              }
              return this.getStac(this.link);
            },
            link() {
              return this.pagination
                ? this.parent
                  ? this.parent.getAbsoluteUrl()
                  : null
                : Y.ZP.isObject(this.item) && "string" === typeof this.item.href
                ? this.parent
                  ? Y.ZP.toAbsolute(
                      this.item.href,
                      this.parent.getAbsoluteUrl()
                    )
                  : this.item.href
                : null;
            },
            mayHaveChildren() {
              return this.item instanceof Q.Z
                ? this.item.isCatalogLike()
                : !!this.link && "item" !== this.item.rel;
            },
            to() {
              return this.pagination
                ? !this.parent ||
                  (this.data &&
                    this.parent.getAbsoluteUrl() === this.data.getAbsoluteUrl())
                  ? null
                  : this.parent.getBrowserPath()
                : this.stac instanceof Q.Z
                ? this.stac.getBrowserPath()
                : null;
            },
            title() {
              return this.pagination
                ? this.$t("tree.moreCollectionPagesAvailable")
                : Q.Z.getDisplayTitle([this.item, this.stac]);
            },
            hasMore() {
              return this.childs.length > this.shownChilds.length;
            },
            shownChilds() {
              return this.childs.slice(0, 50 * this.chunk);
            },
            onPath() {
              return (
                !(!Array.isArray(this.path) || !this.stac) &&
                this.path.includes(this.stac)
              );
            },
            active() {
              return this.stac === this.data;
            },
            pagination() {
              return ["next", "prev", "previous"].includes(this.item.rel);
            },
          },
          watch: {
            onPath: {
              immediate: !0,
              handler() {
                this.onPath && (this.expanded = !0);
              },
            },
            stac: {
              immediate: !0,
              handler(t, e) {
                t instanceof Q.Z &&
                  t.setApiDataListener("tree", () => this.updateChilds()),
                  e instanceof Q.Z && e.setApiDataListener("tree"),
                  this.updateChilds();
              },
            },
          },
          methods: {
            updateChilds() {
              this.stac instanceof Q.Z
                ? (this.childs = this.stac.getChildren(this.apiCatalogPriority))
                : (this.childs = []);
            },
            showMore() {
              this.chunk++;
            },
            load(t) {
              this.stac ||
                !this.link ||
                this.pagination ||
                this.$store.commit(t ? "queue" : "unqueue", this.link);
            },
            async toggle() {
              if (
                ((this.expanded = !this.expanded),
                this.expanded && !this.pagination)
              ) {
                this.loading = !0;
                let t =
                  this.item instanceof Q.Z
                    ? this.item.getAbsoluteUrl()
                    : this.item.href;
                await this.$store.dispatch("load", { url: t, loadApi: !0 }),
                  (this.loading = !1);
              }
            },
          },
        },
        tt = X,
        et = i(1001),
        it = (0, et.Z)(tt, G, W, !1, null, "59c056d6", null),
        st = it.exports,
        at = {
          name: "Sidebar",
          components: {
            BIconArrowLeftRight: o.jwx,
            BSidebar: q,
            Loading: K.Z,
            Tree: st,
          },
          data() {
            return { visible: !1 };
          },
          computed: {
            ...(0, J.rn)(["allowSelectCatalog", "parents"]),
            ...(0, J.Se)(["root"]),
          },
          watch: {
            visible: {
              immediate: !0,
              async handler(t) {
                t && (await this.$store.dispatch("loadParents"));
              },
            },
          },
          mounted() {
            this.visible = !0;
          },
        },
        nt = at,
        ot = (0, et.Z)(nt, a, n, !1, null, null, null),
        rt = ot.exports;
    },
  },
]);
//# sourceMappingURL=8762.5559a3b9.js.map
