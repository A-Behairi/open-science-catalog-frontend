"use strict";
(self["webpackChunk_radiantearth_stac_browser"] =
  self["webpackChunk_radiantearth_stac_browser"] || []).push([
  [3206],
  {
    3206: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return Vr;
          },
        });
      var i = function () {
          var t = this,
            e = t._self._c;
          return e(
            "b-table",
            t._b(
              {
                staticClass: "metadata-table",
                attrs: {
                  items: t.tblItems,
                  fields: t.tblFields,
                  variant: "light",
                  responsive: "",
                  small: "",
                  "sticky-header": "",
                  striped: "",
                },
                scopedSlots: t._u([
                  {
                    key: "head()",
                    fn: function (r) {
                      return [
                        e("span", { domProps: { innerHTML: t._s(r.label) } }),
                      ];
                    },
                  },
                  {
                    key: "cell()",
                    fn: function (r) {
                      return [
                        e("span", { domProps: { innerHTML: t._s(r.value) } }),
                      ];
                    },
                  },
                ]),
              },
              "b-table",
              t.tblTexts,
              !1
            )
          );
        },
        n = [],
        o = (r(7658), r(541), r(1915)),
        s = r(4689),
        l = r(7040),
        a = r(451),
        c = r(8492),
        u = r(3284),
        h = (0, o.l7)({
          methods: {
            hasListener: function (t) {
              if (o.$B) return !0;
              var e = this.$listeners || {},
                r = this._events || {};
              return !(0, u.o8)(e[t]) || ((0, u.kJ)(r[t]) && r[t].length > 0);
            },
          },
        }),
        d = r(3727),
        f = r(8280),
        b = r(494),
        p = r(2299),
        m = r(6677);
      function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function v(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(r), !0).forEach(function (e) {
                g(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function g(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var w = "light",
        S = "dark",
        O = (0, a.y2)({ variant: (0, a.pi)(p.N0) }, s.zx),
        T = (0, o.l7)({
          name: s.zx,
          mixins: [c.D, m.o, f.Z],
          provide: function () {
            var t = this;
            return {
              getBvTableTr: function () {
                return t;
              },
            };
          },
          inject: {
            getBvTableRowGroup: {
              default: function () {
                return function () {
                  return {};
                };
              },
            },
          },
          inheritAttrs: !1,
          props: O,
          computed: {
            bvTableRowGroup: function () {
              return this.getBvTableRowGroup();
            },
            inTbody: function () {
              return this.bvTableRowGroup.isTbody;
            },
            inThead: function () {
              return this.bvTableRowGroup.isThead;
            },
            inTfoot: function () {
              return this.bvTableRowGroup.isTfoot;
            },
            isDark: function () {
              return this.bvTableRowGroup.isDark;
            },
            isStacked: function () {
              return this.bvTableRowGroup.isStacked;
            },
            isResponsive: function () {
              return this.bvTableRowGroup.isResponsive;
            },
            isStickyHeader: function () {
              return this.bvTableRowGroup.isStickyHeader;
            },
            hasStickyHeader: function () {
              return !this.isStacked && this.bvTableRowGroup.hasStickyHeader;
            },
            tableVariant: function () {
              return this.bvTableRowGroup.tableVariant;
            },
            headVariant: function () {
              return this.inThead ? this.bvTableRowGroup.headVariant : null;
            },
            footVariant: function () {
              return this.inTfoot ? this.bvTableRowGroup.footVariant : null;
            },
            isRowDark: function () {
              return (
                this.headVariant !== w &&
                this.footVariant !== w &&
                (this.headVariant === S ||
                  this.footVariant === S ||
                  this.isDark)
              );
            },
            trClasses: function () {
              var t = this.variant;
              return [
                t
                  ? "".concat(this.isRowDark ? "bg" : "table", "-").concat(t)
                  : null,
              ];
            },
            trAttrs: function () {
              return v({ role: "row" }, this.bvAttrs);
            },
          },
          render: function (t) {
            return t(
              "tr",
              {
                class: this.trClasses,
                attrs: this.trAttrs,
                on: this.bvListeners,
              },
              this.normalizeSlot()
            );
          },
        }),
        k = {},
        j = (0, o.l7)({
          props: k,
          methods: {
            renderBottomRow: function () {
              var t = this.computedFields,
                e = this.stacked,
                r = this.tbodyTrClass,
                i = this.tbodyTrAttr,
                n = this.$createElement;
              return this.hasNormalizedSlot(b.x) && !0 !== e && "" !== e
                ? n(
                    T,
                    {
                      staticClass: "b-table-bottom-row",
                      class: [(0, u.mf)(r) ? r(null, "row-bottom") : r],
                      attrs: (0, u.mf)(i) ? i(null, "row-bottom") : i,
                      key: "b-bottom-row",
                    },
                    this.normalizeSlot(b.x, { columns: t.length, fields: t })
                  )
                : n();
            },
          },
        }),
        P = r(3294),
        R = r(8415),
        C = r(6410),
        D = r(3954),
        F = r(6595);
      function I(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function B(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(r), !0).forEach(function (e) {
                A(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function A(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var x = function (t) {
          return (t = (0, D.Z3)(t, 0)), t > 0 ? t : null;
        },
        H = function (t) {
          return (0, u.Jp)(t) || x(t) > 0;
        },
        E = (0, a.y2)(
          {
            colspan: (0, a.pi)(p.fE, null, H),
            rowspan: (0, a.pi)(p.fE, null, H),
            stackedHeading: (0, a.pi)(p.N0),
            stickyColumn: (0, a.pi)(p.U5, !1),
            variant: (0, a.pi)(p.N0),
          },
          s.Mf
        ),
        $ = (0, o.l7)({
          name: s.Mf,
          mixins: [c.D, m.o, f.Z],
          inject: {
            getBvTableTr: {
              default: function () {
                return function () {
                  return {};
                };
              },
            },
          },
          inheritAttrs: !1,
          props: E,
          computed: {
            bvTableTr: function () {
              return this.getBvTableTr();
            },
            tag: function () {
              return "td";
            },
            inTbody: function () {
              return this.bvTableTr.inTbody;
            },
            inThead: function () {
              return this.bvTableTr.inThead;
            },
            inTfoot: function () {
              return this.bvTableTr.inTfoot;
            },
            isDark: function () {
              return this.bvTableTr.isDark;
            },
            isStacked: function () {
              return this.bvTableTr.isStacked;
            },
            isStackedCell: function () {
              return this.inTbody && this.isStacked;
            },
            isResponsive: function () {
              return this.bvTableTr.isResponsive;
            },
            isStickyHeader: function () {
              return this.bvTableTr.isStickyHeader;
            },
            hasStickyHeader: function () {
              return this.bvTableTr.hasStickyHeader;
            },
            isStickyColumn: function () {
              return (
                !this.isStacked &&
                (this.isResponsive || this.hasStickyHeader) &&
                this.stickyColumn
              );
            },
            rowVariant: function () {
              return this.bvTableTr.variant;
            },
            headVariant: function () {
              return this.bvTableTr.headVariant;
            },
            footVariant: function () {
              return this.bvTableTr.footVariant;
            },
            tableVariant: function () {
              return this.bvTableTr.tableVariant;
            },
            computedColspan: function () {
              return x(this.colspan);
            },
            computedRowspan: function () {
              return x(this.rowspan);
            },
            cellClasses: function () {
              var t = this.variant,
                e = this.headVariant,
                r = this.isStickyColumn;
              return (
                ((!t && this.isStickyHeader && !e) ||
                  (!t && r && this.inTfoot && !this.footVariant) ||
                  (!t && r && this.inThead && !e) ||
                  (!t && r && this.inTbody)) &&
                  (t =
                    this.rowVariant || this.tableVariant || "b-table-default"),
                [
                  t
                    ? "".concat(this.isDark ? "bg" : "table", "-").concat(t)
                    : null,
                  r ? "b-table-sticky-column" : null,
                ]
              );
            },
            cellAttrs: function () {
              var t = this.stackedHeading,
                e = this.inThead || this.inTfoot,
                r = this.computedColspan,
                i = this.computedRowspan,
                n = "cell",
                o = null;
              return (
                e
                  ? ((n = "columnheader"), (o = r > 0 ? "colspan" : "col"))
                  : (0, C.YR)(this.tag, "th") &&
                    ((n = "rowheader"), (o = i > 0 ? "rowgroup" : "row")),
                B(
                  B(
                    { colspan: r, rowspan: i, role: n, scope: o },
                    this.bvAttrs
                  ),
                  {},
                  {
                    "data-label":
                      this.isStackedCell && !(0, u.Jp)(t) ? (0, F.BB)(t) : null,
                  }
                )
              );
            },
          },
          render: function (t) {
            var e = [this.normalizeSlot()];
            return t(
              this.tag,
              {
                class: this.cellClasses,
                attrs: this.cellAttrs,
                on: this.bvListeners,
              },
              [this.isStackedCell ? t("div", [e]) : e]
            );
          },
        });
      function V(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var _ = "busy",
        U = P.j7 + _,
        N = V({}, _, (0, a.pi)(p.U5, !1)),
        L = (0, o.l7)({
          props: N,
          data: function () {
            return { localBusy: !1 };
          },
          computed: {
            computedBusy: function () {
              return this[_] || this.localBusy;
            },
          },
          watch: {
            localBusy: function (t, e) {
              t !== e && this.$emit(U, t);
            },
          },
          methods: {
            stopIfBusy: function (t) {
              return !!this.computedBusy && ((0, R.p7)(t), !0);
            },
            renderBusy: function () {
              var t = this.tbodyTrClass,
                e = this.tbodyTrAttr,
                r = this.$createElement;
              return this.computedBusy && this.hasNormalizedSlot(b.W8)
                ? r(
                    T,
                    {
                      staticClass: "b-table-busy-slot",
                      class: [(0, u.mf)(t) ? t(null, b.W8) : t],
                      attrs: (0, u.mf)(e) ? e(null, b.W8) : e,
                      key: "table-busy-slot",
                    },
                    [
                      r(
                        $,
                        {
                          props: {
                            colspan: this.computedFields.length || null,
                          },
                        },
                        [this.normalizeSlot(b.W8)]
                      ),
                    ]
                  )
                : null;
            },
          },
        }),
        z = r(8735),
        K = { caption: (0, a.pi)(p.N0), captionHtml: (0, a.pi)(p.N0) },
        M = (0, o.l7)({
          props: K,
          computed: {
            captionId: function () {
              return this.isStacked ? this.safeId("_caption_") : null;
            },
          },
          methods: {
            renderCaption: function () {
              var t = this.caption,
                e = this.captionHtml,
                r = this.$createElement,
                i = r(),
                n = this.hasNormalizedSlot(b.Hm);
              return (
                (n || t || e) &&
                  (i = r(
                    "caption",
                    {
                      attrs: { id: this.captionId },
                      domProps: n ? {} : (0, z.U)(e, t),
                      key: "caption",
                      ref: "caption",
                    },
                    this.normalizeSlot(b.Hm)
                  )),
                i
              );
            },
          },
        }),
        J = {},
        Z = (0, o.l7)({
          methods: {
            renderColgroup: function () {
              var t = this.computedFields,
                e = this.$createElement,
                r = e();
              return (
                this.hasNormalizedSlot(b.hK) &&
                  (r = e("colgroup", { key: "colgroup" }, [
                    this.normalizeSlot(b.hK, { columns: t.length, fields: t }),
                  ])),
                r
              );
            },
          },
        }),
        G = r(992),
        W = {
          emptyFilteredHtml: (0, a.pi)(p.N0),
          emptyFilteredText: (0, a.pi)(
            p.N0,
            "There are no records matching your request"
          ),
          emptyHtml: (0, a.pi)(p.N0),
          emptyText: (0, a.pi)(p.N0, "There are no records to show"),
          showEmpty: (0, a.pi)(p.U5, !1),
        },
        X = (0, o.l7)({
          props: W,
          methods: {
            renderEmpty: function () {
              var t = (0, G.n)(this),
                e = t.computedItems,
                r = t.computedBusy,
                i = this.$createElement,
                n = i();
              if (
                this.showEmpty &&
                (!e || 0 === e.length) &&
                (!r || !this.hasNormalizedSlot(b.W8))
              ) {
                var o = this.computedFields,
                  s = this.isFiltered,
                  l = this.emptyText,
                  a = this.emptyHtml,
                  c = this.emptyFilteredText,
                  h = this.emptyFilteredHtml,
                  d = this.tbodyTrClass,
                  f = this.tbodyTrAttr;
                (n = this.normalizeSlot(s ? b.kx : b.ZJ, {
                  emptyFilteredHtml: h,
                  emptyFilteredText: c,
                  emptyHtml: a,
                  emptyText: l,
                  fields: o,
                  items: e,
                })),
                  n ||
                    (n = i("div", {
                      class: ["text-center", "my-2"],
                      domProps: s ? (0, z.U)(h, c) : (0, z.U)(a, l),
                    })),
                  (n = i($, { props: { colspan: o.length || null } }, [
                    i(
                      "div",
                      { attrs: { role: "alert", "aria-live": "polite" } },
                      [n]
                    ),
                  ])),
                  (n = i(
                    T,
                    {
                      staticClass: "b-table-empty-row",
                      class: [(0, u.mf)(d) ? d(null, "row-empty") : d],
                      attrs: (0, u.mf)(f) ? f(null, "row-empty") : f,
                      key: s ? "b-empty-filtered-row" : "b-empty-row",
                    },
                    [n]
                  ));
              }
              return n;
            },
          },
        }),
        Q = r(824),
        Y = r(1572),
        q = r(158),
        tt = r(8265),
        et = r(3058),
        rt = r(7147),
        it = function t(e) {
          return (0, u.Jp)(e)
            ? ""
            : (0, u.Kn)(e) && !(0, u.J_)(e)
            ? (0, l.XP)(e)
                .sort()
                .map(function (r) {
                  return t(e[r]);
                })
                .filter(function (t) {
                  return !!t;
                })
                .join(" ")
            : (0, F.BB)(e);
        };
      function nt(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function ot(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nt(Object(r), !0).forEach(function (e) {
                st(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : nt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function st(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var lt = "_cellVariants",
        at = "_rowVariant",
        ct = "_showDetails",
        ut = [lt, at, ct].reduce(function (t, e) {
          return ot(ot({}, t), {}, st({}, e, !0));
        }, {}),
        ht = [
          "a",
          "a *",
          "button",
          "button *",
          "input:not(.disabled):not([disabled])",
          "select:not(.disabled):not([disabled])",
          "textarea:not(.disabled):not([disabled])",
          '[role="link"]',
          '[role="link"] *',
          '[role="button"]',
          '[role="button"] *',
          "[tabindex]:not(.disabled):not([disabled])",
        ].join(","),
        dt = function (t, e, r) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            n = (0, l.XP)(i).reduce(function (e, r) {
              var n = i[r],
                o = n.filterByFormatted,
                s = (0, u.mf)(o) ? o : o ? n.formatter : null;
              return (0, u.mf)(s) && (e[r] = s(t[r], r, t)), e;
            }, (0, l.d9)(t)),
            o = (0, l.XP)(n).filter(function (t) {
              return (
                !ut[t] &&
                !((0, u.kJ)(e) && e.length > 0 && (0, Y.kI)(e, t)) &&
                !((0, u.kJ)(r) && r.length > 0 && !(0, Y.kI)(r, t))
              );
            });
          return (0, l.ei)(n, o);
        },
        ft = function (t, e, r, i) {
          return (0, u.Kn)(t) ? it(dt(t, e, r, i)) : "";
        };
      function bt(t) {
        return vt(t) || yt(t) || mt(t) || pt();
      }
      function pt() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function mt(t, e) {
        if (t) {
          if ("string" === typeof t) return gt(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? gt(t, e)
              : void 0
          );
        }
      }
      function yt(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      function vt(t) {
        if (Array.isArray(t)) return gt(t);
      }
      function gt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
        return i;
      }
      var wt =
          'Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.',
        St = {
          filter: (0, a.pi)([].concat(bt(p.wA), [p.dX])),
          filterDebounce: (0, a.pi)(p.fE, 0, function (t) {
            return Q.R2.test(String(t));
          }),
          filterFunction: (0, a.pi)(p.Sx),
          filterIgnoredFields: (0, a.pi)(p.aJ, []),
          filterIncludedFields: (0, a.pi)(p.aJ, []),
        },
        Ot = (0, o.l7)({
          props: St,
          data: function () {
            return {
              isFiltered: !1,
              localFilter: this.filterSanitize(this.filter),
            };
          },
          computed: {
            computedFilterIgnored: function () {
              return (0, Y.zo)(this.filterIgnoredFields || []).filter(tt.y);
            },
            computedFilterIncluded: function () {
              return (0, Y.zo)(this.filterIncludedFields || []).filter(tt.y);
            },
            computedFilterDebounce: function () {
              var t = (0, D.Z3)(this.filterDebounce, 0);
              return t > 0 && (0, rt.ZK)(wt, s.QM), t;
            },
            localFiltering: function () {
              return !this.hasProvider || !!this.noProviderFiltering;
            },
            filteredCheck: function () {
              var t = this.filteredItems,
                e = this.localItems,
                r = this.localFilter;
              return { filteredItems: t, localItems: e, localFilter: r };
            },
            localFilterFn: function () {
              var t = this.filterFunction;
              return (0, a.lo)(t) ? t : null;
            },
            filteredItems: function () {
              var t = this.localItems,
                e = this.localFilter,
                r = this.localFiltering
                  ? this.filterFnFactory(this.localFilterFn, e) ||
                    this.defaultFilterFnFactory(e)
                  : null;
              return r && t.length > 0 ? t.filter(r) : t;
            },
          },
          watch: {
            computedFilterDebounce: function (t) {
              !t &&
                this.$_filterTimer &&
                (this.clearFilterTimer(),
                (this.localFilter = this.filterSanitize(this.filter)));
            },
            filter: {
              deep: !0,
              handler: function (t) {
                var e = this,
                  r = this.computedFilterDebounce;
                this.clearFilterTimer(),
                  r && r > 0
                    ? (this.$_filterTimer = setTimeout(function () {
                        e.localFilter = e.filterSanitize(t);
                      }, r))
                    : (this.localFilter = this.filterSanitize(t));
              },
            },
            filteredCheck: function (t) {
              var e = t.filteredItems,
                r = t.localFilter,
                i = !1;
              r
                ? (0, et.W)(r, []) || (0, et.W)(r, {})
                  ? (i = !1)
                  : r && (i = !0)
                : (i = !1),
                i && this.$emit(P.Uf, e, e.length),
                (this.isFiltered = i);
            },
            isFiltered: function (t, e) {
              if (!1 === t && !0 === e) {
                var r = this.localItems;
                this.$emit(P.Uf, r, r.length);
              }
            },
          },
          created: function () {
            var t = this;
            (this.$_filterTimer = null),
              this.$nextTick(function () {
                t.isFiltered = Boolean(t.localFilter);
              });
          },
          beforeDestroy: function () {
            this.clearFilterTimer();
          },
          methods: {
            clearFilterTimer: function () {
              clearTimeout(this.$_filterTimer), (this.$_filterTimer = null);
            },
            filterSanitize: function (t) {
              return !this.localFiltering ||
                this.localFilterFn ||
                (0, u.HD)(t) ||
                (0, u.Kj)(t)
                ? (0, q.X)(t)
                : "";
            },
            filterFnFactory: function (t, e) {
              if (
                !t ||
                !(0, u.mf)(t) ||
                !e ||
                (0, et.W)(e, []) ||
                (0, et.W)(e, {})
              )
                return null;
              var r = function (r) {
                return t(r, e);
              };
              return r;
            },
            defaultFilterFnFactory: function (t) {
              var e = this;
              if (!t || (!(0, u.HD)(t) && !(0, u.Kj)(t))) return null;
              var r = t;
              if ((0, u.HD)(r)) {
                var i = (0, F.hr)(t).replace(Q.Gt, "\\s+");
                r = new RegExp(".*".concat(i, ".*"), "i");
              }
              var n = function (t) {
                return (
                  (r.lastIndex = 0),
                  r.test(
                    ft(
                      t,
                      e.computedFilterIgnored,
                      e.computedFilterIncluded,
                      e.computedFieldsObj
                    )
                  )
                );
              };
              return n;
            },
          },
        }),
        Tt = r(3319),
        kt = r(1578),
        jt = r(4602),
        Pt = function (t, e) {
          var r = null;
          return (
            (0, u.HD)(e)
              ? (r = { key: t, label: e })
              : (0, u.mf)(e)
              ? (r = { key: t, formatter: e })
              : (0, u.Kn)(e)
              ? ((r = (0, l.d9)(e)), (r.key = r.key || t))
              : !1 !== e && (r = { key: t }),
            r
          );
        },
        Rt = function (t, e) {
          var r = [];
          if (
            ((0, u.kJ)(t) &&
              t.filter(tt.y).forEach(function (t) {
                if ((0, u.HD)(t)) r.push({ key: t, label: (0, F.fl)(t) });
                else if ((0, u.Kn)(t) && t.key && (0, u.HD)(t.key))
                  r.push((0, l.d9)(t));
                else if ((0, u.Kn)(t) && 1 === (0, l.XP)(t).length) {
                  var e = (0, l.XP)(t)[0],
                    i = Pt(e, t[e]);
                  i && r.push(i);
                }
              }),
            0 === r.length && (0, u.kJ)(e) && e.length > 0)
          ) {
            var i = e[0];
            (0, l.XP)(i).forEach(function (t) {
              ut[t] || r.push({ key: t, label: (0, F.fl)(t) });
            });
          }
          var n = {};
          return r.filter(function (t) {
            return (
              !n[t.key] &&
              ((n[t.key] = !0),
              (t.label = (0, u.HD)(t.label) ? t.label : (0, F.fl)(t.key)),
              !0)
            );
          });
        };
      function Ct(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Dt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ct(Object(r), !0).forEach(function (e) {
                Ft(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ct(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Ft(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var It = (0, jt.l)("value", { type: p.aJ, defaultValue: [] }),
        Bt = It.mixin,
        At = It.props,
        xt = It.prop,
        Ht = It.event,
        Et = (0, l.GE)(
          Dt(
            Dt({}, At),
            {},
            Ft(
              {
                fields: (0, a.pi)(p.aJ, null),
                items: (0, a.pi)(p.aJ, []),
                primaryKey: (0, a.pi)(p.N0),
              },
              xt,
              (0, a.pi)(p.aJ, [])
            )
          )
        ),
        $t = (0, o.l7)({
          mixins: [Bt, Tt.S],
          props: Et,
          data: function () {
            var t = this.items;
            return { localItems: (0, u.kJ)(t) ? t.slice() : [] };
          },
          computed: {
            computedFields: function () {
              return Rt(this.fields, this.localItems);
            },
            computedFieldsObj: function () {
              var t = this.bvParent;
              return this.computedFields.reduce(function (e, r) {
                if (((e[r.key] = (0, l.d9)(r)), r.formatter)) {
                  var i = r.formatter;
                  (0, u.HD)(i) && (0, u.mf)(t[i])
                    ? (i = t[i])
                    : (0, u.mf)(i) || (i = void 0),
                    (e[r.key].formatter = i);
                }
                return e;
              }, {});
            },
            computedItems: function () {
              var t = (0, G.n)(this),
                e = t.paginatedItems,
                r = t.sortedItems,
                i = t.filteredItems,
                n = t.localItems;
              return (e || r || i || n || []).slice();
            },
            context: function () {
              var t = (0, G.n)(this),
                e = t.perPage,
                r = t.currentPage;
              return {
                filter: this.localFilter,
                sortBy: this.localSortBy,
                sortDesc: this.localSortDesc,
                perPage: (0, kt.nP)((0, D.Z3)(e, 0), 0),
                currentPage: (0, kt.nP)((0, D.Z3)(r, 0), 1),
                apiUrl: this.apiUrl,
              };
            },
          },
          watch: {
            items: function (t) {
              this.localItems = (0, u.kJ)(t) ? t.slice() : [];
            },
            computedItems: function (t, e) {
              (0, et.W)(t, e) || this.$emit(Ht, t);
            },
            context: function (t, e) {
              (0, et.W)(t, e) || this.$emit(P._H, t);
            },
          },
          mounted: function () {
            this.$emit(Ht, this.computedItems);
          },
          methods: {
            getFieldFormatter: function (t) {
              var e = this.computedFieldsObj[t];
              return e ? e.formatter : void 0;
            },
          },
        }),
        Vt = { currentPage: (0, a.pi)(p.fE, 1), perPage: (0, a.pi)(p.fE, 0) },
        _t = (0, o.l7)({
          props: Vt,
          computed: {
            localPaging: function () {
              return !this.hasProvider || !!this.noProviderPaging;
            },
            paginatedItems: function () {
              var t = (0, G.n)(this),
                e = t.sortedItems,
                r = t.filteredItems,
                i = t.localItems,
                n = e || r || i || [],
                o = (0, kt.nP)((0, D.Z3)(this.currentPage, 1), 1),
                s = (0, kt.nP)((0, D.Z3)(this.perPage, 0), 0);
              return (
                this.localPaging && s && (n = n.slice((o - 1) * s, o * s)), n
              );
            },
          },
        }),
        Ut = r(8596),
        Nt = (0, R.J3)(s.QM, P.H9),
        Lt = (0, R.gA)(s.QM, P.b5),
        zt = {
          apiUrl: (0, a.pi)(p.N0),
          items: (0, a.pi)(p.Vh, []),
          noProviderFiltering: (0, a.pi)(p.U5, !1),
          noProviderPaging: (0, a.pi)(p.U5, !1),
          noProviderSorting: (0, a.pi)(p.U5, !1),
        },
        Kt = (0, o.l7)({
          mixins: [Ut.E],
          props: zt,
          computed: {
            hasProvider: function () {
              return (0, u.mf)(this.items);
            },
            providerTriggerContext: function () {
              var t = {
                apiUrl: this.apiUrl,
                filter: null,
                sortBy: null,
                sortDesc: null,
                perPage: null,
                currentPage: null,
              };
              return (
                this.noProviderFiltering || (t.filter = this.localFilter),
                this.noProviderSorting ||
                  ((t.sortBy = this.localSortBy),
                  (t.sortDesc = this.localSortDesc)),
                this.noProviderPaging ||
                  ((t.perPage = this.perPage),
                  (t.currentPage = this.currentPage)),
                (0, l.d9)(t)
              );
            },
          },
          watch: {
            items: function (t) {
              (this.hasProvider || (0, u.mf)(t)) &&
                this.$nextTick(this._providerUpdate);
            },
            providerTriggerContext: function (t, e) {
              (0, et.W)(t, e) || this.$nextTick(this._providerUpdate);
            },
          },
          mounted: function () {
            var t = this;
            !this.hasProvider ||
              (this.localItems && 0 !== this.localItems.length) ||
              this._providerUpdate(),
              this.listenOnRoot(Lt, function (e) {
                (e !== t.id && e !== t) || t.refresh();
              });
          },
          methods: {
            refresh: function () {
              var t = (0, G.n)(this),
                e = t.items,
                r = t.refresh,
                i = t.computedBusy;
              this.$off(P.H9, r),
                i
                  ? this.localBusy && this.hasProvider && this.$on(P.H9, r)
                  : (this.clearSelected(),
                    this.hasProvider
                      ? this.$nextTick(this._providerUpdate)
                      : (this.localItems = (0, u.kJ)(e) ? e.slice() : []));
            },
            _providerSetLocal: function (t) {
              (this.localItems = (0, u.kJ)(t) ? t.slice() : []),
                (this.localBusy = !1),
                this.$emit(P.H9),
                this.id && this.emitOnRoot(Nt, this.id);
            },
            _providerUpdate: function () {
              var t = this;
              this.hasProvider &&
                ((0, G.n)(this).computedBusy
                  ? this.$nextTick(this.refresh)
                  : ((this.localBusy = !0),
                    this.$nextTick(function () {
                      try {
                        var e = t.items(t.context, t._providerSetLocal);
                        (0, u.tI)(e)
                          ? e.then(function (e) {
                              t._providerSetLocal(e);
                            })
                          : (0, u.kJ)(e)
                          ? t._providerSetLocal(e)
                          : 2 !== t.items.length &&
                            ((0, rt.ZK)(
                              "Provider function didn't request callback and did not return a promise or data.",
                              s.QM
                            ),
                            (t.localBusy = !1));
                      } catch (r) {
                        (0, rt.ZK)(
                          "Provider function error ["
                            .concat(r.name, "] ")
                            .concat(r.message, "."),
                          s.QM
                        ),
                          (t.localBusy = !1),
                          t.$off(P.H9, t.refresh);
                      }
                    })));
            },
          },
        });
      function Mt(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Jt,
        Zt,
        Gt = ["range", "multi", "single"],
        Wt = "grid",
        Xt = {
          noSelectOnClick: (0, a.pi)(p.U5, !1),
          selectMode: (0, a.pi)(p.N0, "multi", function (t) {
            return (0, Y.kI)(Gt, t);
          }),
          selectable: (0, a.pi)(p.U5, !1),
          selectedVariant: (0, a.pi)(p.N0, "active"),
        },
        Qt = (0, o.l7)({
          props: Xt,
          data: function () {
            return { selectedRows: [], selectedLastRow: -1 };
          },
          computed: {
            isSelectable: function () {
              return this.selectable && this.selectMode;
            },
            hasSelectableRowClick: function () {
              return this.isSelectable && !this.noSelectOnClick;
            },
            supportsSelectableRows: function () {
              return !0;
            },
            selectableHasSelection: function () {
              var t = this.selectedRows;
              return this.isSelectable && t && t.length > 0 && t.some(tt.y);
            },
            selectableIsMultiSelect: function () {
              return (
                this.isSelectable &&
                (0, Y.kI)(["range", "multi"], this.selectMode)
              );
            },
            selectableTableClasses: function () {
              var t,
                e = this.isSelectable;
              return (
                (t = { "b-table-selectable": e }),
                Mt(t, "b-table-select-".concat(this.selectMode), e),
                Mt(t, "b-table-selecting", this.selectableHasSelection),
                Mt(
                  t,
                  "b-table-selectable-no-click",
                  e && !this.hasSelectableRowClick
                ),
                t
              );
            },
            selectableTableAttrs: function () {
              if (!this.isSelectable) return {};
              var t = this.bvAttrs.role || Wt;
              return {
                role: t,
                "aria-multiselectable":
                  t === Wt ? (0, F.BB)(this.selectableIsMultiSelect) : null,
              };
            },
          },
          watch: {
            computedItems: function (t, e) {
              var r = !1;
              if (this.isSelectable && this.selectedRows.length > 0) {
                r = (0, u.kJ)(t) && (0, u.kJ)(e) && t.length === e.length;
                for (var i = 0; r && i < t.length; i++)
                  r = (0, et.W)(dt(t[i]), dt(e[i]));
              }
              r || this.clearSelected();
            },
            selectable: function (t) {
              this.clearSelected(), this.setSelectionHandlers(t);
            },
            selectMode: function () {
              this.clearSelected();
            },
            hasSelectableRowClick: function (t) {
              this.clearSelected(), this.setSelectionHandlers(!t);
            },
            selectedRows: function (t, e) {
              var r = this;
              if (this.isSelectable && !(0, et.W)(t, e)) {
                var i = [];
                t.forEach(function (t, e) {
                  t && i.push(r.computedItems[e]);
                }),
                  this.$emit(P.f_, i);
              }
            },
          },
          beforeMount: function () {
            this.isSelectable && this.setSelectionHandlers(!0);
          },
          methods: {
            selectRow: function (t) {
              if (
                this.isSelectable &&
                (0, u.hj)(t) &&
                t >= 0 &&
                t < this.computedItems.length &&
                !this.isRowSelected(t)
              ) {
                var e = this.selectableIsMultiSelect
                  ? this.selectedRows.slice()
                  : [];
                (e[t] = !0),
                  (this.selectedLastClicked = -1),
                  (this.selectedRows = e);
              }
            },
            unselectRow: function (t) {
              if (this.isSelectable && (0, u.hj)(t) && this.isRowSelected(t)) {
                var e = this.selectedRows.slice();
                (e[t] = !1),
                  (this.selectedLastClicked = -1),
                  (this.selectedRows = e);
              }
            },
            selectAllRows: function () {
              var t = this.computedItems.length;
              this.isSelectable &&
                t > 0 &&
                ((this.selectedLastClicked = -1),
                (this.selectedRows = this.selectableIsMultiSelect
                  ? (0, Y.Ri)(t, !0)
                  : [!0]));
            },
            isRowSelected: function (t) {
              return !(!(0, u.hj)(t) || !this.selectedRows[t]);
            },
            clearSelected: function () {
              (this.selectedLastClicked = -1), (this.selectedRows = []);
            },
            selectableRowClasses: function (t) {
              if (this.isSelectable && this.isRowSelected(t)) {
                var e = this.selectedVariant;
                return Mt(
                  { "b-table-row-selected": !0 },
                  "".concat(this.dark ? "bg" : "table", "-").concat(e),
                  e
                );
              }
              return {};
            },
            selectableRowAttrs: function (t) {
              return {
                "aria-selected": this.isSelectable
                  ? this.isRowSelected(t)
                    ? "true"
                    : "false"
                  : null,
              };
            },
            setSelectionHandlers: function (t) {
              var e = t && !this.noSelectOnClick ? "$on" : "$off";
              this[e](P.TY, this.selectionHandler),
                this[e](P.Uf, this.clearSelected),
                this[e](P._H, this.clearSelected);
            },
            selectionHandler: function (t, e, r) {
              if (this.isSelectable && !this.noSelectOnClick) {
                var i = this.selectMode,
                  n = this.selectedLastRow,
                  o = this.selectedRows.slice(),
                  s = !o[e];
                if ("single" === i) o = [];
                else if ("range" === i)
                  if (n > -1 && r.shiftKey) {
                    for (var l = (0, kt.bS)(n, e); l <= (0, kt.nP)(n, e); l++)
                      o[l] = !0;
                    s = !0;
                  } else
                    r.ctrlKey || r.metaKey || ((o = []), (s = !0)),
                      s && (this.selectedLastRow = e);
                (o[e] = s), (this.selectedRows = o);
              } else this.clearSelected();
            },
          },
        }),
        Yt = r(5912),
        qt = r(7668),
        te = function (t) {
          return (0, u.Jp)(t) ? "" : (0, u.kE)(t) ? (0, D.f_)(t, t) : t;
        },
        ee = function (t, e) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = r.sortBy,
            n = void 0 === i ? null : i,
            o = r.formatter,
            s = void 0 === o ? null : o,
            l = r.locale,
            a = void 0 === l ? void 0 : l,
            c = r.localeOptions,
            h = void 0 === c ? {} : c,
            d = r.nullLast,
            f = void 0 !== d && d,
            b = (0, qt.U)(t, n, null),
            p = (0, qt.U)(e, n, null);
          return (
            (0, u.mf)(s) && ((b = s(b, n, t)), (p = s(p, n, e))),
            (b = te(b)),
            (p = te(p)),
            ((0, u.J_)(b) && (0, u.J_)(p)) || ((0, u.hj)(b) && (0, u.hj)(p))
              ? b < p
                ? -1
                : b > p
                ? 1
                : 0
              : f && "" === b && "" !== p
              ? 1
              : f && "" !== b && "" === p
              ? -1
              : it(b).localeCompare(it(p), a, h)
          );
        };
      function re(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function ie(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? re(Object(r), !0).forEach(function (e) {
                ne(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : re(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function ne(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var oe = "sortBy",
        se = P.j7 + oe,
        le = "sortDesc",
        ae = P.j7 + le,
        ce = "asc",
        ue = "desc",
        he = "last",
        de = [ce, ue, he],
        fe =
          ((Jt = {
            labelSortAsc: (0, a.pi)(p.N0, "Click to sort ascending"),
            labelSortClear: (0, a.pi)(p.N0, "Click to clear sorting"),
            labelSortDesc: (0, a.pi)(p.N0, "Click to sort descending"),
            noFooterSorting: (0, a.pi)(p.U5, !1),
            noLocalSorting: (0, a.pi)(p.U5, !1),
            noSortReset: (0, a.pi)(p.U5, !1),
          }),
          ne(Jt, oe, (0, a.pi)(p.N0)),
          ne(Jt, "sortCompare", (0, a.pi)(p.Sx)),
          ne(Jt, "sortCompareLocale", (0, a.pi)(p.Mu)),
          ne(Jt, "sortCompareOptions", (0, a.pi)(p.aR, { numeric: !0 })),
          ne(Jt, le, (0, a.pi)(p.U5, !1)),
          ne(
            Jt,
            "sortDirection",
            (0, a.pi)(p.N0, ce, function (t) {
              return (0, Y.kI)(de, t);
            })
          ),
          ne(Jt, "sortIconLeft", (0, a.pi)(p.U5, !1)),
          ne(Jt, "sortNullLast", (0, a.pi)(p.U5, !1)),
          Jt),
        be = (0, o.l7)({
          props: fe,
          data: function () {
            return {
              localSortBy: this[oe] || "",
              localSortDesc: this[le] || !1,
            };
          },
          computed: {
            localSorting: function () {
              return this.hasProvider
                ? !!this.noProviderSorting
                : !this.noLocalSorting;
            },
            isSortable: function () {
              return this.computedFields.some(function (t) {
                return t.sortable;
              });
            },
            sortedItems: function () {
              var t = (0, G.n)(this),
                e = t.localSortBy,
                r = t.localSortDesc,
                i = t.sortCompareLocale,
                n = t.sortNullLast,
                o = t.sortCompare,
                s = t.localSorting,
                l = t.filteredItems,
                a = t.localItems,
                c = (l || a || []).slice(),
                h = ie(ie({}, this.sortCompareOptions), {}, { usage: "sort" });
              if (e && s) {
                var d = this.computedFieldsObj[e] || {},
                  f = d.sortByFormatted,
                  b = (0, u.mf)(f) ? f : f ? this.getFieldFormatter(e) : void 0;
                return (0, Yt.X)(c, function (t, s) {
                  var l = null;
                  return (
                    (0, u.mf)(o) && (l = o(t, s, e, r, b, h, i)),
                    ((0, u.Jp)(l) || !1 === l) &&
                      (l = ee(t, s, {
                        sortBy: e,
                        formatter: b,
                        locale: i,
                        localeOptions: h,
                        nullLast: n,
                      })),
                    (l || 0) * (r ? -1 : 1)
                  );
                });
              }
              return c;
            },
          },
          watch:
            ((Zt = {
              isSortable: function (t) {
                t
                  ? this.isSortable && this.$on(P._Z, this.handleSort)
                  : this.$off(P._Z, this.handleSort);
              },
            }),
            ne(Zt, le, function (t) {
              t !== this.localSortDesc && (this.localSortDesc = t || !1);
            }),
            ne(Zt, oe, function (t) {
              t !== this.localSortBy && (this.localSortBy = t || "");
            }),
            ne(Zt, "localSortDesc", function (t, e) {
              t !== e && this.$emit(ae, t);
            }),
            ne(Zt, "localSortBy", function (t, e) {
              t !== e && this.$emit(se, t);
            }),
            Zt),
          created: function () {
            this.isSortable && this.$on(P._Z, this.handleSort);
          },
          methods: {
            handleSort: function (t, e, r, i) {
              var n = this;
              if (this.isSortable && (!i || !this.noFooterSorting)) {
                var o = !1,
                  s = function () {
                    var t = e.sortDirection || n.sortDirection;
                    t === ce
                      ? (n.localSortDesc = !1)
                      : t === ue && (n.localSortDesc = !0);
                  };
                if (e.sortable) {
                  var l = !this.localSorting && e.sortKey ? e.sortKey : t;
                  this.localSortBy === l
                    ? (this.localSortDesc = !this.localSortDesc)
                    : ((this.localSortBy = l), s()),
                    (o = !0);
                } else
                  this.localSortBy &&
                    !this.noSortReset &&
                    ((this.localSortBy = ""), s(), (o = !0));
                o && this.$emit(P.sM, this.context);
              }
            },
            sortTheadThClasses: function (t, e, r) {
              return {
                "b-table-sort-icon-left":
                  e.sortable &&
                  this.sortIconLeft &&
                  !(r && this.noFooterSorting),
              };
            },
            sortTheadThAttrs: function (t, e, r) {
              var i,
                n = this.isSortable,
                o = this.noFooterSorting,
                s = this.localSortDesc,
                l = this.localSortBy,
                a = this.localSorting;
              if (!n || (r && o)) return {};
              var c = e.sortable,
                u = a ? t : null !== (i = e.sortKey) && void 0 !== i ? i : t,
                h =
                  c && l === u
                    ? s
                      ? "descending"
                      : "ascending"
                    : c
                    ? "none"
                    : null;
              return { "aria-sort": h };
            },
            sortTheadThLabel: function (t, e, r) {
              if (!this.isSortable || (r && this.noFooterSorting)) return null;
              var i = this.localSortBy,
                n = this.localSortDesc,
                o = this.labelSortAsc,
                s = this.labelSortDesc,
                l = e.sortable,
                a = "";
              if (l)
                if (i === t) a = n ? o : s;
                else {
                  a = n ? s : o;
                  var c = this.sortDirection || e.sortDirection;
                  c === ce ? (a = o) : c === ue && (a = s);
                }
              else this.noSortReset || (a = i ? this.labelSortClear : "");
              return (0, F.fy)(a) || null;
            },
          },
        });
      function pe(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var me = { stacked: (0, a.pi)(p.gL, !1) },
        ye = (0, o.l7)({
          props: me,
          computed: {
            isStacked: function () {
              var t = this.stacked;
              return "" === t || t;
            },
            isStackedAlways: function () {
              return !0 === this.isStacked;
            },
            stackedTableClasses: function () {
              var t = this.isStackedAlways;
              return pe(
                { "b-table-stacked": t },
                "b-table-stacked-".concat(this.stacked),
                !t && this.isStacked
              );
            },
          },
        });
      function ve(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function ge(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ve(Object(r), !0).forEach(function (e) {
                we(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ve(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function we(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Se = {
          bordered: (0, a.pi)(p.U5, !1),
          borderless: (0, a.pi)(p.U5, !1),
          captionTop: (0, a.pi)(p.U5, !1),
          dark: (0, a.pi)(p.U5, !1),
          fixed: (0, a.pi)(p.U5, !1),
          hover: (0, a.pi)(p.U5, !1),
          noBorderCollapse: (0, a.pi)(p.U5, !1),
          outlined: (0, a.pi)(p.U5, !1),
          responsive: (0, a.pi)(p.gL, !1),
          small: (0, a.pi)(p.U5, !1),
          stickyHeader: (0, a.pi)(p.gL, !1),
          striped: (0, a.pi)(p.U5, !1),
          tableClass: (0, a.pi)(p.wA),
          tableVariant: (0, a.pi)(p.N0),
        },
        Oe = (0, o.l7)({
          mixins: [c.D],
          provide: function () {
            var t = this;
            return {
              getBvTable: function () {
                return t;
              },
            };
          },
          inheritAttrs: !1,
          props: Se,
          computed: {
            isTableSimple: function () {
              return !1;
            },
            isResponsive: function () {
              var t = this.responsive;
              return "" === t || t;
            },
            isStickyHeader: function () {
              var t = this.stickyHeader;
              return (t = "" === t || t), !this.isStacked && t;
            },
            wrapperClasses: function () {
              var t = this.isResponsive;
              return [
                this.isStickyHeader ? "b-table-sticky-header" : "",
                !0 === t
                  ? "table-responsive"
                  : t
                  ? "table-responsive-".concat(this.responsive)
                  : "",
              ].filter(tt.y);
            },
            wrapperStyles: function () {
              var t = this.isStickyHeader;
              return t && !(0, u.jn)(t) ? { maxHeight: t } : {};
            },
            tableClasses: function () {
              var t = (0, G.n)(this),
                e = t.hover,
                r = t.tableVariant,
                i = t.selectableTableClasses,
                n = t.stackedTableClasses,
                o = t.tableClass,
                s = t.computedBusy;
              return (
                (e = this.isTableSimple
                  ? e
                  : e && this.computedItems.length > 0 && !s),
                [
                  o,
                  {
                    "table-striped": this.striped,
                    "table-hover": e,
                    "table-dark": this.dark,
                    "table-bordered": this.bordered,
                    "table-borderless": this.borderless,
                    "table-sm": this.small,
                    border: this.outlined,
                    "b-table-fixed": this.fixed,
                    "b-table-caption-top": this.captionTop,
                    "b-table-no-border-collapse": this.noBorderCollapse,
                  },
                  r ? "".concat(this.dark ? "bg" : "table", "-").concat(r) : "",
                  n,
                  i,
                ]
              );
            },
            tableAttrs: function () {
              var t = (0, G.n)(this),
                e = t.computedItems,
                r = t.filteredItems,
                i = t.computedFields,
                n = t.selectableTableAttrs,
                o = t.computedBusy,
                s = this.isTableSimple
                  ? {}
                  : {
                      "aria-busy": (0, F.BB)(o),
                      "aria-colcount": (0, F.BB)(i.length),
                      "aria-describedby":
                        this.bvAttrs["aria-describedby"] || this.$refs.caption
                          ? this.captionId
                          : null,
                    },
                l = e && r && r.length > e.length ? (0, F.BB)(r.length) : null;
              return ge(
                ge(
                  ge({ "aria-rowcount": l }, this.bvAttrs),
                  {},
                  { id: this.safeId(), role: this.bvAttrs.role || "table" },
                  s
                ),
                n
              );
            },
          },
          render: function (t) {
            var e = (0, G.n)(this),
              r = e.wrapperClasses,
              i = e.renderCaption,
              n = e.renderColgroup,
              o = e.renderThead,
              s = e.renderTbody,
              l = e.renderTfoot,
              a = [];
            this.isTableSimple
              ? a.push(this.normalizeSlot())
              : (a.push(i ? i() : null),
                a.push(n ? n() : null),
                a.push(o ? o() : null),
                a.push(s ? s() : null),
                a.push(l ? l() : null));
            var c = t(
              "table",
              {
                staticClass: "table b-table",
                class: this.tableClasses,
                attrs: this.tableAttrs,
                key: "b-table",
              },
              a.filter(tt.y)
            );
            return r.length > 0
              ? t("div", { class: r, style: this.wrapperStyles, key: "wrap" }, [
                  c,
                ])
              : c;
          },
        }),
        Te = r(3663);
      function ke(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function je(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ke(Object(r), !0).forEach(function (e) {
                Pe(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ke(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Pe(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Re = (0, a.y2)(
          {
            tbodyTransitionHandlers: (0, a.pi)(p.aR),
            tbodyTransitionProps: (0, a.pi)(p.aR),
          },
          s.ne
        ),
        Ce = (0, o.l7)({
          name: s.ne,
          mixins: [c.D, m.o, f.Z],
          provide: function () {
            var t = this;
            return {
              getBvTableRowGroup: function () {
                return t;
              },
            };
          },
          inject: {
            getBvTable: {
              default: function () {
                return function () {
                  return {};
                };
              },
            },
          },
          inheritAttrs: !1,
          props: Re,
          computed: {
            bvTable: function () {
              return this.getBvTable();
            },
            isTbody: function () {
              return !0;
            },
            isDark: function () {
              return this.bvTable.dark;
            },
            isStacked: function () {
              return this.bvTable.isStacked;
            },
            isResponsive: function () {
              return this.bvTable.isResponsive;
            },
            isStickyHeader: function () {
              return !1;
            },
            hasStickyHeader: function () {
              return !this.isStacked && this.bvTable.stickyHeader;
            },
            tableVariant: function () {
              return this.bvTable.tableVariant;
            },
            isTransitionGroup: function () {
              return this.tbodyTransitionProps || this.tbodyTransitionHandlers;
            },
            tbodyAttrs: function () {
              return je({ role: "rowgroup" }, this.bvAttrs);
            },
            tbodyProps: function () {
              var t = this.tbodyTransitionProps;
              return t ? je(je({}, t), {}, { tag: "tbody" }) : {};
            },
          },
          render: function (t) {
            var e = { props: this.tbodyProps, attrs: this.tbodyAttrs };
            return (
              this.isTransitionGroup
                ? ((e.on = this.tbodyTransitionHandlers || {}),
                  (e.nativeOn = this.bvListeners))
                : (e.on = this.bvListeners),
              t(
                this.isTransitionGroup ? "transition-group" : "tbody",
                e,
                this.normalizeSlot()
              )
            );
          },
        }),
        De = ["TD", "TH", "TR"],
        Fe = function (t) {
          if (!t || !t.target) return !1;
          var e = t.target;
          if (e.disabled || -1 !== De.indexOf(e.tagName)) return !1;
          if ((0, C.oq)(".dropdown-menu", e)) return !0;
          var r = "LABEL" === e.tagName ? e : (0, C.oq)("label", e);
          if (r) {
            var i = (0, C.UK)(r, "for"),
              n = i ? (0, C.FO)(i) : (0, C.Ys)("input, select, textarea", r);
            if (n && !n.disabled) return !0;
          }
          return (0, C.wB)(e, ht);
        },
        Ie = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document,
            e = (0, C.hu)();
          return (
            !!(
              e &&
              "" !== e.toString().trim() &&
              e.containsNode &&
              (0, C.kK)(t)
            ) && e.containsNode(t, !0)
          );
        },
        Be = (0, a.y2)(E, s.$n),
        Ae = (0, o.l7)({
          name: s.$n,
          extends: $,
          props: Be,
          computed: {
            tag: function () {
              return "th";
            },
          },
        });
      function xe(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function He(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? xe(Object(r), !0).forEach(function (e) {
                Ee(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : xe(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Ee(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function $e(t) {
        return Ne(t) || Ue(t) || _e(t) || Ve();
      }
      function Ve() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function _e(t, e) {
        if (t) {
          if ("string" === typeof t) return Le(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? Le(t, e)
              : void 0
          );
        }
      }
      function Ue(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      function Ne(t) {
        if (Array.isArray(t)) return Le(t);
      }
      function Le(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
        return i;
      }
      var ze = {
          detailsTdClass: (0, a.pi)(p.wA),
          tbodyTrAttr: (0, a.pi)(p.oO),
          tbodyTrClass: (0, a.pi)([].concat($e(p.wA), [p.Sx])),
        },
        Ke = (0, o.l7)({
          mixins: [Tt.S],
          props: ze,
          methods: {
            getTdValues: function (t, e, r, i) {
              var n = this.bvParent;
              if (r) {
                var o = (0, qt.U)(t, e, "");
                return (0, u.mf)(r)
                  ? r(o, e, t)
                  : (0, u.HD)(r) && (0, u.mf)(n[r])
                  ? n[r](o, e, t)
                  : r;
              }
              return i;
            },
            getThValues: function (t, e, r, i, n) {
              var o = this.bvParent;
              if (r) {
                var s = (0, qt.U)(t, e, "");
                return (0, u.mf)(r)
                  ? r(s, e, t, i)
                  : (0, u.HD)(r) && (0, u.mf)(o[r])
                  ? o[r](s, e, t, i)
                  : r;
              }
              return n;
            },
            getFormattedValue: function (t, e) {
              var r = e.key,
                i = this.getFieldFormatter(r),
                n = (0, qt.U)(t, r, null);
              return (0, u.mf)(i) && (n = i(n, r, t)), (0, u.Jp)(n) ? "" : n;
            },
            toggleDetailsFactory: function (t, e) {
              var r = this;
              return function () {
                t && r.$set(e, ct, !e[ct]);
              };
            },
            rowHovered: function (t) {
              this.tbodyRowEventStopped(t) || this.emitTbodyRowEvent(P.G1, t);
            },
            rowUnhovered: function (t) {
              this.tbodyRowEventStopped(t) || this.emitTbodyRowEvent(P.So, t);
            },
            renderTbodyRowCell: function (t, e, r, i) {
              var n = this,
                o = this.isStacked,
                s = t.key,
                l = t.label,
                a = t.isRowHeader,
                c = this.$createElement,
                h = this.hasNormalizedSlot(b.xI),
                d = this.getFormattedValue(r, t),
                f =
                  !o &&
                  (this.isResponsive || this.stickyHeader) &&
                  t.stickyColumn,
                p = f ? (a ? Ae : $) : a ? "th" : "td",
                m = r[lt] && r[lt][s] ? r[lt][s] : t.variant || null,
                y = {
                  class: [
                    t.class ? t.class : "",
                    this.getTdValues(r, s, t.tdClass, ""),
                  ],
                  props: {},
                  attrs: He(
                    { "aria-colindex": String(e + 1) },
                    a
                      ? this.getThValues(r, s, t.thAttr, "row", {})
                      : this.getTdValues(r, s, t.tdAttr, {})
                  ),
                  key: "row-".concat(i, "-cell-").concat(e, "-").concat(s),
                };
              f
                ? (y.props = {
                    stackedHeading: o ? l : null,
                    stickyColumn: !0,
                    variant: m,
                  })
                : ((y.attrs["data-label"] =
                    o && !(0, u.Jp)(l) ? (0, F.BB)(l) : null),
                  (y.attrs.role = a ? "rowheader" : "cell"),
                  (y.attrs.scope = a ? "row" : null),
                  m &&
                    y.class.push(
                      "".concat(this.dark ? "bg" : "table", "-").concat(m)
                    ));
              var v = {
                item: r,
                index: i,
                field: t,
                unformatted: (0, qt.U)(r, s, ""),
                value: d,
                toggleDetails: this.toggleDetailsFactory(h, r),
                detailsShowing: Boolean(r[ct]),
              };
              (0, G.n)(this).supportsSelectableRows &&
                ((v.rowSelected = this.isRowSelected(i)),
                (v.selectRow = function () {
                  return n.selectRow(i);
                }),
                (v.unselectRow = function () {
                  return n.unselectRow(i);
                }));
              var g = this.$_bodyFieldSlotNameCache[s],
                w = g ? this.normalizeSlot(g, v) : (0, F.BB)(d);
              return this.isStacked && (w = [c("div", [w])]), c(p, y, [w]);
            },
            renderTbodyRow: function (t, e) {
              var r = this,
                i = (0, G.n)(this),
                n = i.computedFields,
                s = i.striped,
                l = i.primaryKey,
                a = i.currentPage,
                c = i.perPage,
                h = i.tbodyTrClass,
                d = i.tbodyTrAttr,
                f = i.hasSelectableRowClick,
                p = this.$createElement,
                m = this.hasNormalizedSlot(b.xI),
                y = t[ct] && m,
                v = this.$listeners[P.TY] || f,
                g = [],
                w = y ? this.safeId("_details_".concat(e, "_")) : null,
                S = n.map(function (i, n) {
                  return r.renderTbodyRowCell(i, n, t, e);
                }),
                O = null;
              a && c && c > 0 && (O = String((a - 1) * c + e + 1));
              var k = (0, F.BB)((0, qt.U)(t, l)) || null,
                j = k || (0, F.BB)(e),
                R = k ? this.safeId("_row_".concat(k)) : null,
                C = (0, G.n)(this).selectableRowClasses
                  ? this.selectableRowClasses(e)
                  : {},
                D = (0, G.n)(this).selectableRowAttrs
                  ? this.selectableRowAttrs(e)
                  : {},
                I = (0, u.mf)(h) ? h(t, "row") : h,
                B = (0, u.mf)(d) ? d(t, "row") : d;
              if (
                (g.push(
                  p(
                    T,
                    Ee(
                      {
                        class: [I, C, y ? "b-table-has-details" : ""],
                        props: { variant: t[at] || null },
                        attrs: He(
                          He({ id: R }, B),
                          {},
                          {
                            tabindex: v ? "0" : null,
                            "data-pk": k || null,
                            "aria-details": w,
                            "aria-owns": w,
                            "aria-rowindex": O,
                          },
                          D
                        ),
                        on: {
                          mouseenter: this.rowHovered,
                          mouseleave: this.rowUnhovered,
                        },
                        key: "__b-table-row-".concat(j, "__"),
                        ref: "item-rows",
                      },
                      o.TF,
                      !0
                    ),
                    S
                  )
                ),
                y)
              ) {
                var A = {
                  item: t,
                  index: e,
                  fields: n,
                  toggleDetails: this.toggleDetailsFactory(m, t),
                };
                (0, G.n)(this).supportsSelectableRows &&
                  ((A.rowSelected = this.isRowSelected(e)),
                  (A.selectRow = function () {
                    return r.selectRow(e);
                  }),
                  (A.unselectRow = function () {
                    return r.unselectRow(e);
                  }));
                var x = p(
                  $,
                  { props: { colspan: n.length }, class: this.detailsTdClass },
                  [this.normalizeSlot(b.xI, A)]
                );
                s &&
                  g.push(
                    p("tr", {
                      staticClass: "d-none",
                      attrs: { "aria-hidden": "true", role: "presentation" },
                      key: "__b-table-details-stripe__".concat(j),
                    })
                  );
                var H = (0, u.mf)(this.tbodyTrClass)
                    ? this.tbodyTrClass(t, b.xI)
                    : this.tbodyTrClass,
                  E = (0, u.mf)(this.tbodyTrAttr)
                    ? this.tbodyTrAttr(t, b.xI)
                    : this.tbodyTrAttr;
                g.push(
                  p(
                    T,
                    {
                      staticClass: "b-table-details",
                      class: [H],
                      props: { variant: t[at] || null },
                      attrs: He(He({}, E), {}, { id: w, tabindex: "-1" }),
                      key: "__b-table-details__".concat(j),
                    },
                    [x]
                  )
                );
              } else m && (g.push(p()), s && g.push(p()));
              return g;
            },
          },
        });
      function Me(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Je(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Me(Object(r), !0).forEach(function (e) {
                Ze(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Me(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Ze(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Ge = function (t) {
          return "cell(".concat(t || "", ")");
        },
        We = (0, l.GE)(
          Je(Je(Je({}, Re), ze), {}, { tbodyClass: (0, a.pi)(p.wA) })
        ),
        Xe = (0, o.l7)({
          mixins: [Ke],
          props: We,
          beforeDestroy: function () {
            this.$_bodyFieldSlotNameCache = null;
          },
          methods: {
            getTbodyTrs: function () {
              var t = this.$refs,
                e = t.tbody ? t.tbody.$el || t.tbody : null,
                r = (t["item-rows"] || []).map(function (t) {
                  return t.$el || t;
                });
              return e &&
                e.children &&
                e.children.length > 0 &&
                r &&
                r.length > 0
                ? (0, Y.Dp)(e.children).filter(function (t) {
                    return (0, Y.kI)(r, t);
                  })
                : [];
            },
            getTbodyTrIndex: function (t) {
              if (!(0, C.kK)(t)) return -1;
              var e = "TR" === t.tagName ? t : (0, C.oq)("tr", t, !0);
              return e ? this.getTbodyTrs().indexOf(e) : -1;
            },
            emitTbodyRowEvent: function (t, e) {
              if (t && this.hasListener(t) && e && e.target) {
                var r = this.getTbodyTrIndex(e.target);
                if (r > -1) {
                  var i = this.computedItems[r];
                  this.$emit(t, i, r, e);
                }
              }
            },
            tbodyRowEventStopped: function (t) {
              return this.stopIfBusy && this.stopIfBusy(t);
            },
            onTbodyRowKeydown: function (t) {
              var e = t.target,
                r = t.keyCode;
              if (
                !this.tbodyRowEventStopped(t) &&
                "TR" === e.tagName &&
                (0, C.H9)(e) &&
                0 === e.tabIndex
              )
                if ((0, Y.kI)([Te.K2, Te.m5], r))
                  (0, R.p7)(t), this.onTBodyRowClicked(t);
                else if ((0, Y.kI)([Te.XS, Te.RV, Te.QI, Te.bt], r)) {
                  var i = this.getTbodyTrIndex(e);
                  if (i > -1) {
                    (0, R.p7)(t);
                    var n = this.getTbodyTrs(),
                      o = t.shiftKey;
                    r === Te.QI || (o && r === Te.XS)
                      ? (0, C.KS)(n[0])
                      : r === Te.bt || (o && r === Te.RV)
                      ? (0, C.KS)(n[n.length - 1])
                      : r === Te.XS && i > 0
                      ? (0, C.KS)(n[i - 1])
                      : r === Te.RV && i < n.length - 1 && (0, C.KS)(n[i + 1]);
                  }
                }
            },
            onTBodyRowClicked: function (t) {
              var e = this.$refs,
                r = e.tbody ? e.tbody.$el || e.tbody : null;
              this.tbodyRowEventStopped(t) ||
                Fe(t) ||
                Ie(r || this.$el) ||
                this.emitTbodyRowEvent(P.TY, t);
            },
            onTbodyRowMiddleMouseRowClicked: function (t) {
              this.tbodyRowEventStopped(t) ||
                2 !== t.which ||
                this.emitTbodyRowEvent(P.eb, t);
            },
            onTbodyRowContextmenu: function (t) {
              this.tbodyRowEventStopped(t) || this.emitTbodyRowEvent(P.lr, t);
            },
            onTbodyRowDblClicked: function (t) {
              this.tbodyRowEventStopped(t) ||
                Fe(t) ||
                this.emitTbodyRowEvent(P._o, t);
            },
            renderTbody: function () {
              var t = this,
                e = (0, G.n)(this),
                r = e.computedItems,
                i = e.renderBusy,
                n = e.renderTopRow,
                o = e.renderEmpty,
                s = e.renderBottomRow,
                l = e.hasSelectableRowClick,
                c = this.$createElement,
                u = this.hasListener(P.TY) || l,
                h = [],
                d = i ? i() : null;
              if (d) h.push(d);
              else {
                var f = {},
                  b = Ge();
                (b = this.hasNormalizedSlot(b) ? b : null),
                  this.computedFields.forEach(function (e) {
                    var r = e.key,
                      i = Ge(r),
                      n = Ge(r.toLowerCase());
                    f[r] = t.hasNormalizedSlot(i)
                      ? i
                      : t.hasNormalizedSlot(n)
                      ? n
                      : b;
                  }),
                  (this.$_bodyFieldSlotNameCache = f),
                  h.push(n ? n() : c()),
                  r.forEach(function (e, r) {
                    h.push(t.renderTbodyRow(e, r));
                  }),
                  h.push(o ? o() : c()),
                  h.push(s ? s() : c());
              }
              var p = {
                auxclick: this.onTbodyRowMiddleMouseRowClicked,
                contextmenu: this.onTbodyRowContextmenu,
                dblclick: this.onTbodyRowDblClicked,
              };
              u &&
                ((p.click = this.onTBodyRowClicked),
                (p.keydown = this.onTbodyRowKeydown));
              var m = c(
                Ce,
                {
                  class: this.tbodyClass || null,
                  props: (0, a.uj)(Re, this.$props),
                  on: p,
                  ref: "tbody",
                },
                h
              );
              return m;
            },
          },
        });
      function Qe(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Ye(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Qe(Object(r), !0).forEach(function (e) {
                qe(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Qe(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function qe(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var tr = (0, a.y2)({ footVariant: (0, a.pi)(p.N0) }, s.V$),
        er = (0, o.l7)({
          name: s.V$,
          mixins: [c.D, m.o, f.Z],
          provide: function () {
            var t = this;
            return {
              getBvTableRowGroup: function () {
                return t;
              },
            };
          },
          inject: {
            getBvTable: {
              default: function () {
                return function () {
                  return {};
                };
              },
            },
          },
          inheritAttrs: !1,
          props: tr,
          computed: {
            bvTable: function () {
              return this.getBvTable();
            },
            isTfoot: function () {
              return !0;
            },
            isDark: function () {
              return this.bvTable.dark;
            },
            isStacked: function () {
              return this.bvTable.isStacked;
            },
            isResponsive: function () {
              return this.bvTable.isResponsive;
            },
            isStickyHeader: function () {
              return !1;
            },
            hasStickyHeader: function () {
              return !this.isStacked && this.bvTable.stickyHeader;
            },
            tableVariant: function () {
              return this.bvTable.tableVariant;
            },
            tfootClasses: function () {
              return [
                this.footVariant ? "thead-".concat(this.footVariant) : null,
              ];
            },
            tfootAttrs: function () {
              return Ye(Ye({}, this.bvAttrs), {}, { role: "rowgroup" });
            },
          },
          render: function (t) {
            return t(
              "tfoot",
              {
                class: this.tfootClasses,
                attrs: this.tfootAttrs,
                on: this.bvListeners,
              },
              this.normalizeSlot()
            );
          },
        }),
        rr = {
          footClone: (0, a.pi)(p.U5, !1),
          footRowVariant: (0, a.pi)(p.N0),
          footVariant: (0, a.pi)(p.N0),
          tfootClass: (0, a.pi)(p.wA),
          tfootTrClass: (0, a.pi)(p.wA),
        },
        ir = (0, o.l7)({
          props: rr,
          methods: {
            renderTFootCustom: function () {
              var t = this.$createElement;
              return this.hasNormalizedSlot(b.ak)
                ? t(
                    er,
                    {
                      class: this.tfootClass || null,
                      props: {
                        footVariant:
                          this.footVariant || this.headVariant || null,
                      },
                      key: "bv-tfoot-custom",
                    },
                    this.normalizeSlot(b.ak, {
                      items: this.computedItems.slice(),
                      fields: this.computedFields.slice(),
                      columns: this.computedFields.length,
                    })
                  )
                : t();
            },
            renderTfoot: function () {
              return this.footClone
                ? this.renderThead(!0)
                : this.renderTFootCustom();
            },
          },
        }),
        nr = r(4941);
      function or(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function sr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? or(Object(r), !0).forEach(function (e) {
                lr(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : or(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function lr(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var ar = (0, a.y2)({ headVariant: (0, a.pi)(p.N0) }, s.sb),
        cr = (0, o.l7)({
          name: s.sb,
          mixins: [c.D, m.o, f.Z],
          provide: function () {
            var t = this;
            return {
              getBvTableRowGroup: function () {
                return t;
              },
            };
          },
          inject: {
            getBvTable: {
              default: function () {
                return function () {
                  return {};
                };
              },
            },
          },
          inheritAttrs: !1,
          props: ar,
          computed: {
            bvTable: function () {
              return this.getBvTable();
            },
            isThead: function () {
              return !0;
            },
            isDark: function () {
              return this.bvTable.dark;
            },
            isStacked: function () {
              return this.bvTable.isStacked;
            },
            isResponsive: function () {
              return this.bvTable.isResponsive;
            },
            isStickyHeader: function () {
              return !this.isStacked && this.bvTable.stickyHeader;
            },
            hasStickyHeader: function () {
              return !this.isStacked && this.bvTable.stickyHeader;
            },
            tableVariant: function () {
              return this.bvTable.tableVariant;
            },
            theadClasses: function () {
              return [
                this.headVariant ? "thead-".concat(this.headVariant) : null,
              ];
            },
            theadAttrs: function () {
              return sr({ role: "rowgroup" }, this.bvAttrs);
            },
          },
          render: function (t) {
            return t(
              "thead",
              {
                class: this.theadClasses,
                attrs: this.theadAttrs,
                on: this.bvListeners,
              },
              this.normalizeSlot()
            );
          },
        });
      function ur(t) {
        return br(t) || fr(t) || dr(t) || hr();
      }
      function hr() {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function dr(t, e) {
        if (t) {
          if ("string" === typeof t) return pr(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === r && t.constructor && (r = t.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(t)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? pr(t, e)
              : void 0
          );
        }
      }
      function fr(t) {
        if (
          ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }
      function br(t) {
        if (Array.isArray(t)) return pr(t);
      }
      function pr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
        return i;
      }
      function mr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function yr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? mr(Object(r), !0).forEach(function (e) {
                vr(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : mr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function vr(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var gr = function (t) {
          return "head(".concat(t || "", ")");
        },
        wr = function (t) {
          return "foot(".concat(t || "", ")");
        },
        Sr = {
          headRowVariant: (0, a.pi)(p.N0),
          headVariant: (0, a.pi)(p.N0),
          theadClass: (0, a.pi)(p.wA),
          theadTrClass: (0, a.pi)(p.wA),
        },
        Or = (0, o.l7)({
          props: Sr,
          methods: {
            fieldClasses: function (t) {
              return [t.class ? t.class : "", t.thClass ? t.thClass : ""];
            },
            headClicked: function (t, e, r) {
              (this.stopIfBusy && this.stopIfBusy(t)) ||
                Fe(t) ||
                Ie(this.$el) ||
                ((0, R.p7)(t), this.$emit(P._Z, e.key, e, t, r));
            },
            renderThead: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                r = (0, G.n)(this),
                i = r.computedFields,
                n = r.isSortable,
                o = r.isSelectable,
                s = r.headVariant,
                l = r.footVariant,
                a = r.headRowVariant,
                c = r.footRowVariant,
                h = this.$createElement;
              if (this.isStackedAlways || 0 === i.length) return h();
              var d = n || this.hasListener(P._Z),
                f = o ? this.selectAllRows : nr.Z,
                p = o ? this.clearSelected : nr.Z,
                m = function (r, i) {
                  var o = r.label,
                    s = r.labelHtml,
                    l = r.variant,
                    a = r.stickyColumn,
                    c = r.key,
                    u = null;
                  r.label.trim() || r.headerTitle || (u = (0, F.fl)(r.key));
                  var b = {};
                  d &&
                    ((b.click = function (i) {
                      t.headClicked(i, r, e);
                    }),
                    (b.keydown = function (i) {
                      var n = i.keyCode;
                      (n !== Te.K2 && n !== Te.m5) || t.headClicked(i, r, e);
                    }));
                  var m = n ? t.sortTheadThAttrs(c, r, e) : {},
                    y = n ? t.sortTheadThClasses(c, r, e) : null,
                    v = n ? t.sortTheadThLabel(c, r, e) : null,
                    g = {
                      class: [{ "position-relative": v }, t.fieldClasses(r), y],
                      props: { variant: l, stickyColumn: a },
                      style: r.thStyle || {},
                      attrs: yr(
                        yr(
                          {
                            tabindex: d && r.sortable ? "0" : null,
                            abbr: r.headerAbbr || null,
                            title: r.headerTitle || null,
                            "aria-colindex": i + 1,
                            "aria-label": u,
                          },
                          t.getThValues(
                            null,
                            c,
                            r.thAttr,
                            e ? "foot" : "head",
                            {}
                          )
                        ),
                        m
                      ),
                      on: b,
                      key: c,
                    },
                    w = [gr(c), gr(c.toLowerCase()), gr()];
                  e && (w = [wr(c), wr(c.toLowerCase()), wr()].concat(ur(w)));
                  var S = {
                      label: o,
                      column: c,
                      field: r,
                      isFoot: e,
                      selectAllRows: f,
                      clearSelected: p,
                    },
                    O =
                      t.normalizeSlot(w, S) ||
                      h("div", { domProps: (0, z.U)(s, o) }),
                    T = v
                      ? h(
                          "span",
                          { staticClass: "sr-only" },
                          " (".concat(v, ")")
                        )
                      : null;
                  return h(Ae, g, [O, T].filter(tt.y));
                },
                y = i.map(m).filter(tt.y),
                v = [];
              if (e)
                v.push(
                  h(
                    T,
                    {
                      class: this.tfootTrClass,
                      props: { variant: (0, u.Jp)(c) ? a : c },
                    },
                    y
                  )
                );
              else {
                var g = {
                  columns: i.length,
                  fields: i,
                  selectAllRows: f,
                  clearSelected: p,
                };
                v.push(this.normalizeSlot(b.RK, g) || h()),
                  v.push(
                    h(T, { class: this.theadTrClass, props: { variant: a } }, y)
                  );
              }
              return h(
                e ? er : cr,
                {
                  class: (e ? this.tfootClass : this.theadClass) || null,
                  props: e
                    ? { footVariant: l || s || null }
                    : { headVariant: s || null },
                  key: e ? "bv-tfoot" : "bv-thead",
                },
                v
              );
            },
          },
        }),
        Tr = {},
        kr = (0, o.l7)({
          methods: {
            renderTopRow: function () {
              var t = this.computedFields,
                e = this.stacked,
                r = this.tbodyTrClass,
                i = this.tbodyTrAttr,
                n = this.$createElement;
              return this.hasNormalizedSlot(b.Z6) && !0 !== e && "" !== e
                ? n(
                    T,
                    {
                      staticClass: "b-table-top-row",
                      class: [(0, u.mf)(r) ? r(null, "row-top") : r],
                      attrs: (0, u.mf)(i) ? i(null, "row-top") : i,
                      key: "b-top-row",
                    },
                    [this.normalizeSlot(b.Z6, { columns: t.length, fields: t })]
                  )
                : n();
            },
          },
        });
      function jr(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function Pr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? jr(Object(r), !0).forEach(function (e) {
                Rr(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : jr(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function Rr(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var Cr = (0, a.y2)(
          (0, l.GE)(
            Pr(
              Pr(
                Pr(
                  Pr(
                    Pr(
                      Pr(
                        Pr(
                          Pr(
                            Pr(
                              Pr(
                                Pr(
                                  Pr(
                                    Pr(
                                      Pr(Pr(Pr(Pr(Pr({}, d.N), k), N), K), J),
                                      W
                                    ),
                                    St
                                  ),
                                  Et
                                ),
                                Vt
                              ),
                              zt
                            ),
                            Xt
                          ),
                          fe
                        ),
                        me
                      ),
                      Se
                    ),
                    We
                  ),
                  rr
                ),
                Sr
              ),
              Tr
            )
          ),
          s.QM
        ),
        Dr = (0, o.l7)({
          name: s.QM,
          mixins: [
            c.D,
            h,
            d.t,
            f.Z,
            $t,
            Oe,
            ye,
            Or,
            ir,
            Xe,
            ye,
            Ot,
            be,
            _t,
            M,
            Z,
            Qt,
            X,
            kr,
            j,
            L,
            Kt,
          ],
          props: Cr,
        }),
        Fr = r(9025),
        Ir = r(3681),
        Br = r(9879),
        Ar = r(2407),
        xr = {
          name: "MetadataTable",
          components: { BTable: Dr },
          mixins: [Fr.Z, (0, Ir.Z)({ format: Ar.format })],
          computed: {
            tblTexts() {
              return {
                "empty-filtered-text": this.$t("table.emptyFilteredText"),
                "empty-text": this.$t("table.emptyText"),
                "label-sort-asc": this.$t("table.sort.asc"),
                "label-sort-desc": this.$t("table.sort.desc"),
                "label-sort-clear": this.$t("table.sort.clear"),
              };
            },
            tblItems() {
              if (Br.ZP.isObject(this.value)) {
                let t = [];
                for (let e in this.value) t.push({ _id: e, ...this.value[e] });
                return t;
              }
              return this.value;
            },
            tblFields() {
              let t = [];
              for (let e of this.itemOrder) {
                let r = this.items[e];
                t.push({
                  key: e,
                  label: r.label,
                  sortable: r.sortable,
                  formatter: this.formatCell.bind(this),
                  default: r.default,
                });
              }
              return (
                Br.ZP.isObject(this.value) &&
                  t.unshift({ key: "_id", sortable: !0, isRowHeader: !0 }),
                t
              );
            },
          },
          methods: {
            formatCell(t, e, r) {
              let i = this.items[e];
              return (
                "undefined" === typeof i.default ||
                  ("undefined" !== typeof t && null !== t) ||
                  (t = i.default),
                this.format(t, e, NaN, r, i)
              );
            },
          },
        },
        Hr = xr,
        Er = r(1001),
        $r = (0, Er.Z)(Hr, i, n, !1, null, null, null),
        Vr = $r.exports;
    },
  },
]);
//# sourceMappingURL=3206.9d638f71.js.map
