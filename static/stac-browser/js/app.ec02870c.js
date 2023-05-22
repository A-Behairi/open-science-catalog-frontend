(function () {
  var t = {
      2978: function (t, e, a) {
        "use strict";
        a.r(e),
          a.d(e, {
            default: function () {
              return L;
            },
          });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e("section", { staticClass: "assets mb-4" }, [
              t.displayTitle ? e("h2", [t._v(t._s(t.displayTitle))]) : t._e(),
              e(
                "div",
                { staticClass: "accordion", attrs: { role: "tablist" } },
                t._l(t.assets, function (a, s) {
                  return e("Asset", {
                    key: s,
                    attrs: {
                      asset: a,
                      expand: t.expand,
                      context: t.context,
                      definition: t.definition,
                      shown: t.shown.includes(s),
                      id: s,
                    },
                    on: { show: t.show },
                  });
                }),
                1
              ),
            ]);
          },
          r = [],
          i = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-card",
              { staticClass: "asset", attrs: { "no-body": "" } },
              [
                e(
                  "b-card-header",
                  {
                    staticClass: "p-0",
                    attrs: { "header-tag": "header", role: "tab" },
                  },
                  [
                    e(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle",
                            value: t.uid,
                            expression: "uid",
                          },
                        ],
                        staticClass: "p-2 d-flex",
                        attrs: { block: "", variant: "asset", squared: "" },
                      },
                      [
                        e("span", { staticClass: "title" }, [
                          e(
                            "span",
                            {
                              staticClass: "mr-1",
                              attrs: { "aria-hidden": "true" },
                            },
                            [
                              t.expanded
                                ? e("b-icon-chevron-down")
                                : e("b-icon-chevron-right"),
                            ],
                            1
                          ),
                          t._v(" " + t._s(t.asset.title || t.id) + " "),
                        ]),
                        Array.isArray(t.asset.roles)
                          ? e(
                              "div",
                              { staticClass: "badges ml-1" },
                              [
                                t.shown
                                  ? e(
                                      "b-badge",
                                      {
                                        staticClass: "shown ml-1 mb-1",
                                        attrs: {
                                          variant: "success",
                                          title: t.$t("assets.currentlyShown"),
                                        },
                                      },
                                      [
                                        e("b-icon-check"),
                                        t._v(
                                          " " + t._s(t.$t("assets.shown")) + " "
                                        ),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                t.asset.deprecated
                                  ? e(
                                      "b-badge",
                                      {
                                        staticClass: "deprecated ml-1 mb-1",
                                        attrs: { variant: "warning" },
                                      },
                                      [t._v(t._s(t.$t("deprecated")))]
                                    )
                                  : t._e(),
                                t._l(t.asset.roles, function (a) {
                                  return e(
                                    "b-badge",
                                    {
                                      key: a,
                                      staticClass: "role ml-1 mb-1",
                                      attrs: {
                                        variant:
                                          "data" === a
                                            ? "primary"
                                            : "secondary",
                                      },
                                    },
                                    [t._v(t._s(t.displayRole(a)))]
                                  );
                                }),
                                t.shortFileFormat
                                  ? e(
                                      "b-badge",
                                      {
                                        staticClass: "format ml-1 mb-1",
                                        attrs: {
                                          variant: "dark",
                                          title: t.fileFormat,
                                        },
                                      },
                                      [
                                        e("span", {
                                          domProps: {
                                            innerHTML: t._s(t.shortFileFormat),
                                          },
                                        }),
                                      ]
                                    )
                                  : t._e(),
                              ],
                              2
                            )
                          : t._e(),
                      ]
                    ),
                  ],
                  1
                ),
                e(
                  "b-collapse",
                  {
                    attrs: { id: t.uid, accordion: t.type, role: "tabpanel" },
                    on: { input: t.collapseToggled },
                    model: {
                      value: t.expanded,
                      callback: function (e) {
                        t.expanded = e;
                      },
                      expression: "expanded",
                    },
                  },
                  [
                    e(
                      "b-card-body",
                      [
                        e("b-card-title", [
                          e("span", {
                            domProps: { innerHTML: t._s(t.fileFormat) },
                          }),
                        ]),
                        t.href
                          ? e(
                              "b-button-group",
                              { staticClass: "actions" },
                              [
                                t.shouldCopy
                                  ? e(
                                      "CopyButton",
                                      {
                                        attrs: {
                                          variant: "primary",
                                          copyText: t.href,
                                        },
                                      },
                                      [t._v(" " + t._s(t.buttonText) + " ")]
                                    )
                                  : e(
                                      "b-button",
                                      {
                                        attrs: {
                                          href: t.href,
                                          target: "_blank",
                                          variant: "primary",
                                        },
                                      },
                                      [
                                        t.browserCanOpenFile
                                          ? e("b-icon-box-arrow-up-right")
                                          : e("b-icon-download"),
                                        t._v(" " + t._s(t.buttonText) + " "),
                                      ],
                                      1
                                    ),
                                t.canShow && !t.shown
                                  ? e(
                                      "b-button",
                                      {
                                        attrs: { variant: "primary" },
                                        on: { click: t.show },
                                      },
                                      [
                                        e("b-icon-eye"),
                                        t._v("  "),
                                        t.isThumbnail
                                          ? [
                                              t._v(
                                                t._s(
                                                  t.$t("assets.showThumbnail")
                                                )
                                              ),
                                            ]
                                          : [
                                              t._v(
                                                t._s(t.$t("assets.showOnMap"))
                                              ),
                                            ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ],
                              1
                            )
                          : t._e(),
                        t.asset.description
                          ? e(
                              "b-card-text",
                              { staticClass: "mt-4" },
                              [
                                e("Description", {
                                  attrs: {
                                    description: t.asset.description,
                                    compact: "",
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        e("Metadata", {
                          staticClass: "mt-4",
                          attrs: {
                            data: t.asset,
                            context: t.context,
                            ignoreFields: t.ignore,
                            title: "",
                            type: "Asset",
                          },
                        }),
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
          n = [],
          o = a(1688),
          l = a(8019),
          c = a(5834),
          u = a(629),
          d = a(2778),
          h = a(3989),
          p = a(9879),
          f = a(3681),
          m = {
            name: "Asset",
            components: {
              BCollapse: o.k,
              BIconBoxArrowUpRight: l.eK4,
              BIconCheck: l.PaS,
              BIconChevronDown: l.VIw,
              BIconChevronRight: l.xkg,
              BIconDownload: l.f6I,
              BIconEye: l.unT,
              CopyButton: () => a.e(8218).then(a.bind(a, 8218)),
              Description: d["default"],
              Metadata: () =>
                Promise.all([a.e(9539), a.e(2407), a.e(5325)]).then(
                  a.bind(a, 5325)
                ),
            },
            mixins: [(0, f.Z)({ formatMediaType: c.formatMediaType })],
            props: {
              asset: { type: Object, required: !0 },
              id: { type: String, required: !0 },
              context: { type: Object, default: null },
              definition: { type: Boolean, default: !1 },
              expand: { type: Boolean, default: null },
              shown: { type: Boolean, default: !1 },
            },
            data() {
              return {
                expanded: !1,
                ignore: [
                  "href",
                  "title",
                  "description",
                  "type",
                  "roles",
                  "proj:bbox",
                  "proj:geometry",
                  "table:storage_options",
                  "xarray:open_kwargs",
                  "xarray:storage_options",
                ],
              };
            },
            computed: {
              ...(0, u.rn)([
                "buildTileUrlTemplate",
                "useTileLayerAsFallback",
                "url",
                "stateQueryParameters",
              ]),
              ...(0, u.Se)(["getRequestUrl"]),
              tileRendererType() {
                return this.buildTileUrlTemplate && !this.useTileLayerAsFallback
                  ? "server"
                  : "client";
              },
              type() {
                return this.definition ? "itemdef" : "asset";
              },
              uid() {
                return `${this.type}-${this.id}`;
              },
              isThumbnail() {
                return (
                  Array.isArray(this.asset.roles) &&
                  this.asset.roles.includes("thumbnail")
                );
              },
              canShow() {
                return (
                  "string" === typeof this.asset.type &&
                  (!(
                    "server" !== this.tileRendererType ||
                    !p.Uz.includes(this.asset.type)
                  ) ||
                    ((!this.isGdalVfs || "client" !== this.tileRendererType) &&
                      !!this.isBrowserProtocol &&
                      !!p.CF.includes(this.asset.type)))
                );
              },
              shouldCopy() {
                return !!this.isGdalVfs || !this.isBrowserProtocol;
              },
              fileFormat() {
                return "string" === typeof this.asset.type &&
                  this.asset.type.length > 0
                  ? this.formatMediaType(this.asset.type)
                  : null;
              },
              shortFileFormat() {
                return "string" === typeof this.asset.type &&
                  this.asset.type.length > 0
                  ? this.formatMediaType(this.asset.type, null, { shorten: !0 })
                  : null;
              },
              protocol() {
                if ("string" === typeof this.href && this.href) {
                  let t = this.href.match(/^(\w+):\/\//);
                  if (t) return t[1].toLowerCase();
                }
                return null;
              },
              isBrowserProtocol() {
                return !this.protocol || p.F7.includes(this.protocol);
              },
              isGdalVfs() {
                return p.ZP.isGdalVfsUri(this.asset.href);
              },
              href() {
                if ("string" !== typeof this.asset.href) return null;
                let t = null;
                return (
                  this.context instanceof h.Z &&
                    (t = this.context.getAbsoluteUrl()),
                  this.getRequestUrl(this.asset.href, t)
                );
              },
              from() {
                if (this.isGdalVfs) {
                  let t = this.asset.href.match(
                    /^\/vsi([a-z\d]+)(_streaming)?\//
                  );
                  return this.protocolName(t);
                }
                return this.protocolName(this.protocol);
              },
              browserCanOpenFile() {
                if (p.ZP.canBrowserDisplayImage(this.asset)) return !0;
                if ("string" === typeof this.asset.type)
                  switch (this.asset.type.toLowerCase()) {
                    case "text/html":
                    case "application/xhtml+xml":
                    case "text/plain":
                    case "application/pdf":
                      return !0;
                  }
                return !1;
              },
              buttonText() {
                if (this.browserCanOpenFile && this.isBrowserProtocol)
                  return this.$t("open");
                let t = "download";
                this.isGdalVfs
                  ? (t = "copyGdalVfsUrl")
                  : this.shouldCopy && (t = "copyUrl");
                let e =
                  !this.isBrowserProtocol && this.from
                    ? "withSource"
                    : "generic";
                return this.$t(`assets.${t}.${e}`, { source: this.from });
              },
            },
            created() {
              this.stateQueryParameters[this.type].indexOf(this.uid) > -1
                ? (this.expanded = !0)
                : "boolean" === typeof this.expand
                ? (this.expanded = this.expand)
                : (this.expanded = !1);
            },
            methods: {
              displayRole(t) {
                let e = `assets.role.${t}`;
                return this.$te(e) ? this.$t(e) : t;
              },
              show() {
                let t = Object.assign({}, this.asset);
                this.isGdalVfs || (t.href = this.href),
                  this.$emit("show", t, this.id, this.isThumbnail);
              },
              protocolName(t) {
                if ("string" !== typeof t) return "";
                switch (t.toLowerCase()) {
                  case "s3":
                    return this.$t("protocol.s3");
                  case "abfs":
                  case "abfss":
                    return this.$t("protocol.azure");
                  case "gcs":
                    return this.$t("protocol.gcs");
                  case "ftp":
                    return this.$t("protocol.ftp");
                  case "oss":
                    return this.$t("protocol.oss");
                  case "file":
                    return this.$t("protocol.file");
                }
                return "";
              },
              collapseToggled(t) {
                let e = t ? "openCollapsible" : "closeCollapsible";
                this.$store.commit(e, { type: this.type, uid: this.uid });
              },
            },
          },
          g = m,
          b = a(1001),
          y = (0, b.Z)(g, i, n, !1, null, null, null),
          v = y.exports,
          w = {
            name: "Assets",
            components: { Asset: v },
            props: {
              assets: { type: Object, required: !0 },
              shown: { type: Array, default: () => [] },
              context: { type: Object, default: null },
              definition: { type: Boolean, default: !1 },
              title: { type: String, default: null },
            },
            computed: {
              count() {
                return p.ZP.size(this.assets);
              },
              displayTitle() {
                if (null === this.title) {
                  let t = this.definition ? "assets.inItems" : "stacAssets";
                  return this.$tc(t, this.count);
                }
                return this.title;
              },
              expand() {
                return (
                  !this.definition &&
                  (!(1 !== this.count || !this.stac || !this.stac.isItem()) ||
                    null)
                );
              },
            },
            methods: {
              show(t, e, a) {
                this.$emit("showAsset", t, e, a);
              },
            },
          },
          _ = w,
          P = (0, b.Z)(_, s, r, !1, null, null, null),
          L = P.exports;
      },
      2155: function (t, e, a) {
        "use strict";
        a.r(e),
          a.d(e, {
            default: function () {
              return g;
            },
          });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-card",
              {
                directives: [
                  {
                    name: "b-visible",
                    rawName: "v-b-visible.400",
                    value: t.load,
                    expression: "load",
                    modifiers: { 400: !0 },
                  },
                ],
                class: t.classes,
                attrs: { "no-body": "", "img-right": t.isList },
              },
              [
                t.hasImage
                  ? e(
                      "b-card-img-lazy",
                      t._b(
                        { staticClass: "thumbnail", attrs: { offset: "200" } },
                        "b-card-img-lazy",
                        t.thumbnail,
                        !1
                      )
                    )
                  : t._e(),
                e(
                  "b-card-body",
                  [
                    e(
                      "b-card-title",
                      [
                        e("StacLink", {
                          staticClass: "stretched-link",
                          attrs: { data: [t.data, t.catalog] },
                        }),
                      ],
                      1
                    ),
                    t.data &&
                    (t.fileFormats.length > 0 ||
                      t.data.description ||
                      t.data.deprecated)
                      ? e(
                          "b-card-text",
                          { staticClass: "intro" },
                          [
                            t.data.deprecated
                              ? e(
                                  "b-badge",
                                  {
                                    staticClass: "mr-1 mt-1 deprecated",
                                    attrs: { variant: "warning" },
                                  },
                                  [t._v(t._s(t.$t("deprecated")))]
                                )
                              : t._e(),
                            t._l(t.fileFormats, function (a) {
                              return e(
                                "b-badge",
                                {
                                  key: a,
                                  staticClass: "mr-1 mt-1 fileformat",
                                  attrs: { variant: "secondary" },
                                },
                                [t._v(t._s(t._f("formatMediaType")(a)))]
                              );
                            }),
                            t._v(
                              " " +
                                t._s(t._f("summarize")(t.data.description)) +
                                " "
                            ),
                          ],
                          2
                        )
                      : t._e(),
                    t.temporalExtent
                      ? e("b-card-text", { staticClass: "datetime" }, [
                          e("span", {
                            domProps: { innerHTML: t._s(t.temporalExtent) },
                          }),
                        ])
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          r = [],
          i = (a(7658), a(629)),
          n = a(3681),
          o = a(9642),
          l = a(5995),
          c = a(3989),
          u = a(5834),
          d = a(9879),
          h = {
            name: "Catalog",
            components: { StacLink: l["default"] },
            filters: {
              summarize: (t) => d.ZP.summarizeMd(t, 300),
              formatMediaType: (t) =>
                (0, u.formatMediaType)(t, null, { shorten: !0 }),
            },
            mixins: [
              o.Z,
              (0, n.Z)({ formatTemporalExtent: u.formatTemporalExtent }),
            ],
            props: { catalog: { type: Object, required: !0 } },
            computed: {
              ...(0, i.Se)(["getStac"]),
              classes() {
                let t = ["catalog-card"];
                return (
                  this.data || t.push("queued"),
                  this.data && this.data.deprecated && t.push("deprecated"),
                  this.hasImage && t.push("has-thumbnail"),
                  this.temporalExtent && t.push("has-extent"),
                  t
                );
              },
              data() {
                return this.getStac(this.catalog);
              },
              temporalExtent() {
                var t, e, a;
                if (
                  null !== (t = this.data) &&
                  void 0 !== t &&
                  t.isCollection() &&
                  (null === (e = this.data.extent) ||
                  void 0 === e ||
                  null === (a = e.temporal) ||
                  void 0 === a
                    ? void 0
                    : a.interval.length) > 0
                ) {
                  let t = this.data.extent.temporal.interval[0];
                  if (
                    Array.isArray(t) &&
                    ("string" === typeof t[0] || "string" === typeof t[1])
                  )
                    return this.formatTemporalExtent(
                      this.data.extent.temporal.interval[0],
                      !0
                    );
                }
                return null;
              },
              fileFormats() {
                return this.data ? this.data.getFileFormats() : [];
              },
            },
            methods: {
              load(t) {
                this.catalog instanceof c.Z ||
                  this.$store.commit(
                    t ? "queue" : "unqueue",
                    this.catalog.href
                  );
              },
            },
          },
          p = h,
          f = a(1001),
          m = (0, f.Z)(p, s, r, !1, null, null, null),
          g = m.exports;
      },
      2778: function (t, e, a) {
        "use strict";
        a.r(e),
          a.d(e, {
            default: function () {
              return u;
            },
          });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e("div", {
              staticClass: "styled-description",
              class: { compact: t.compact, inline: t.inline },
              domProps: { innerHTML: t._s(t.markup(t.description)) },
            });
          },
          r = [],
          i = a(5064),
          n = {
            name: "Description",
            props: {
              description: { type: String, default: "" },
              compact: { type: Boolean, default: !1 },
              inline: { type: Boolean, default: !1 },
              allowHTML: { type: Boolean, default: !1 },
            },
            methods: {
              markup(t) {
                if ("string" !== typeof t) return "";
                var e = new i._b(),
                  a = new i.VI({ safe: !this.allowHTML, smart: !0 }),
                  s = e.parse(t);
                return a.render(s);
              },
            },
          },
          o = n,
          l = a(1001),
          c = (0, l.Z)(o, s, r, !1, null, null, null),
          u = c.exports;
      },
      9053: function (t, e, a) {
        "use strict";
        a.r(e),
          a.d(e, {
            default: function () {
              return b;
            },
          });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-card",
              {
                directives: [
                  {
                    name: "b-visible",
                    rawName: "v-b-visible.400",
                    value: t.load,
                    expression: "load",
                    modifiers: { 400: !0 },
                  },
                ],
                staticClass: "item-card",
                class: {
                  queued: !t.data,
                  deprecated: t.isDeprecated,
                  description: t.hasDescription,
                },
                attrs: { "no-body": "" },
              },
              [
                t.hasImage
                  ? e(
                      "b-card-img-lazy",
                      t._b(
                        { staticClass: "thumbnail", attrs: { offset: "200" } },
                        "b-card-img-lazy",
                        t.thumbnail,
                        !1
                      )
                    )
                  : t._e(),
                e(
                  "b-card-body",
                  [
                    e(
                      "b-card-title",
                      [
                        e("StacLink", {
                          staticClass: "stretched-link",
                          attrs: { data: [t.data, t.item] },
                        }),
                      ],
                      1
                    ),
                    t.fileFormats.length > 0 ||
                    t.hasDescription ||
                    t.isDeprecated
                      ? e(
                          "b-card-text",
                          { staticClass: "intro" },
                          [
                            t.isDeprecated
                              ? e(
                                  "b-badge",
                                  {
                                    staticClass: "mr-1 mt-1 deprecated",
                                    attrs: { variant: "warning" },
                                  },
                                  [t._v(t._s(t.$t("deprecated")))]
                                )
                              : t._e(),
                            t._l(t.fileFormats, function (a) {
                              return e(
                                "b-badge",
                                {
                                  key: a,
                                  staticClass: "mr-1 mt-1 fileformat",
                                  attrs: { variant: "secondary" },
                                },
                                [t._v(t._s(t._f("formatMediaType")(a)))]
                              );
                            }),
                            t.hasDescription
                              ? [
                                  t._v(
                                    t._s(
                                      t._f("summarize")(
                                        t.data.properties.description
                                      )
                                    )
                                  ),
                                ]
                              : t._e(),
                          ],
                          2
                        )
                      : t._e(),
                    e("b-card-text", [
                      e(
                        "small",
                        { staticClass: "text-muted" },
                        [
                          t.extent
                            ? [
                                t._v(
                                  t._s(t._f("formatTemporalExtent")(t.extent))
                                ),
                              ]
                            : t.data && t.data.properties.datetime
                            ? [
                                t._v(
                                  t._s(
                                    t._f("formatTimestamp")(
                                      t.data.properties.datetime
                                    )
                                  )
                                ),
                              ]
                            : [t._v(t._s(t.$t("items.noTime")))],
                        ],
                        2
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          r = [],
          i = a(629),
          n = a(9642),
          o = a(5995),
          l = a(3989),
          c = a(5834),
          u = a(5571),
          d = a.n(u),
          h = a(9879);
        d().addDependency("content-type", a(7811));
        var p = {
            name: "Item",
            components: { StacLink: o["default"] },
            filters: {
              summarize: (t) => h.ZP.summarizeMd(t, 150),
              formatMediaType: (t) =>
                (0, c.formatMediaType)(t, null, { shorten: !0 }),
              formatTemporalExtent: c.formatTemporalExtent,
              formatTimestamp: c.formatTimestamp,
            },
            mixins: [n.Z],
            props: { item: { type: Object, required: !0 } },
            computed: {
              ...(0, i.Se)(["getStac"]),
              data() {
                return this.getStac(this.item);
              },
              extent() {
                return this.data &&
                  (this.data.properties.start_datetime ||
                    this.data.properties.end_datetime)
                  ? [
                      this.data.properties.start_datetime,
                      this.data.properties.end_datetime,
                    ]
                  : null;
              },
              fileFormats() {
                return this.data ? this.data.getFileFormats() : [];
              },
              isDeprecated() {
                return (
                  this.data instanceof l.Z &&
                  Boolean(this.data.properties.deprecated)
                );
              },
              hasDescription() {
                return (
                  this.data instanceof l.Z &&
                  h.ZP.hasText(this.data.properties.description)
                );
              },
            },
            methods: {
              load(t) {
                this.item instanceof l.Z ||
                  this.$store.commit(t ? "queue" : "unqueue", this.item.href);
              },
            },
          },
          f = p,
          m = a(1001),
          g = (0, m.Z)(f, s, r, !1, null, null, null),
          b = g.exports;
      },
      9784: function (t, e, a) {
        "use strict";
        a.d(e, {
          Z: function () {
            return P;
          },
        });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "items mb-4" },
              [
                e(
                  "h2",
                  [
                    e("span", { staticClass: "title" }, [
                      t._v(t._s(t.$tc("stacItem", t.items.length))),
                    ]),
                    !t.api && t.items.length > 1
                      ? e(
                          "b-badge",
                          { attrs: { pill: "", variant: "secondary ml-2" } },
                          [t._v(t._s(t.items.length))]
                        )
                      : t._e(),
                    t.api
                      ? t._e()
                      : e("SortButtons", {
                          staticClass: "ml-4",
                          model: {
                            value: t.sort,
                            callback: function (e) {
                              t.sort = e;
                            },
                            expression: "sort",
                          },
                        }),
                  ],
                  1
                ),
                t.showPagination
                  ? e("Pagination", {
                      ref: "topPagination",
                      attrs: { pagination: t.pagination, placement: "top" },
                      on: { paginate: t.paginate },
                    })
                  : t._e(),
                t.allowFilter
                  ? [
                      t.api
                        ? e(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "b-toggle",
                                  rawName: "v-b-toggle.itemFilter",
                                  modifiers: { itemFilter: !0 },
                                },
                              ],
                              staticClass: "mb-4 mt-2",
                              class: { "ml-3": t.showPagination },
                              attrs: {
                                pressed: t.filtersOpen,
                                variant: "outline-primary",
                              },
                            },
                            [
                              e("b-icon-search"),
                              t._v(" " + t._s(t.$t("items.filter")) + " "),
                            ],
                            1
                          )
                        : t._e(),
                      e(
                        "b-collapse",
                        {
                          attrs: { id: "itemFilter" },
                          model: {
                            value: t.filtersOpen,
                            callback: function (e) {
                              t.filtersOpen = e;
                            },
                            expression: "filtersOpen",
                          },
                        },
                        [
                          t.filtersOpen
                            ? e("ItemFilter", {
                                attrs: {
                                  type: "Features",
                                  title: t.$t("items.filter"),
                                  stac: t.stac,
                                  value: t.apiFilters,
                                },
                                on: { input: t.emitFilter },
                              })
                            : t._e(),
                        ],
                        1
                      ),
                    ]
                  : t._e(),
                e(
                  "section",
                  { staticClass: "list" },
                  [
                    t.loading
                      ? e("Loading", { attrs: { fill: "", top: "" } })
                      : t._e(),
                    t.chunkedItems.length > 0
                      ? e(
                          "b-card-group",
                          { attrs: { columns: "" } },
                          t._l(t.chunkedItems, function (t) {
                            return e("Item", {
                              key: t.href,
                              attrs: { item: t },
                            });
                          }),
                          1
                        )
                      : e(
                          "b-alert",
                          {
                            attrs: {
                              variant: t.hasFilters ? "warning" : "info",
                              show: "",
                            },
                          },
                          [
                            t.hasFilters
                              ? [t._v(t._s(t.$t("search.noItemsFound")))]
                              : [
                                  t._v(
                                    t._s(
                                      t.$t("items.noneAvailableForCollection")
                                    )
                                  ),
                                ],
                          ],
                          2
                        ),
                  ],
                  1
                ),
                t.showPagination
                  ? e("Pagination", {
                      attrs: { pagination: t.pagination },
                      on: { paginate: t.paginate },
                    })
                  : t.hasMore
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
                        attrs: { variant: "primary" },
                        on: { click: t.showMore },
                      },
                      [t._v(t._s(t.$t("showMore")))]
                    )
                  : t._e(),
              ],
              2
            );
          },
          r = [],
          i = a(9053),
          n = a(9091),
          o = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-button-group",
              { class: t.classes },
              [
                e(
                  "b-button",
                  {
                    attrs: {
                      disabled: !t.pagination.first,
                      variant: "primary",
                    },
                    on: {
                      click: function (e) {
                        return t.paginate(t.pagination.first);
                      },
                    },
                  },
                  [t._v(t._s(t.$t("pagination.first")))]
                ),
                e(
                  "b-button",
                  {
                    attrs: { disabled: !t.pagination.prev, variant: "primary" },
                    on: {
                      click: function (e) {
                        return t.paginate(t.pagination.prev);
                      },
                    },
                  },
                  [t._v(t._s(t.$t("pagination.previous")))]
                ),
                e(
                  "b-button",
                  {
                    attrs: { disabled: !t.pagination.next, variant: "primary" },
                    on: {
                      click: function (e) {
                        return t.paginate(t.pagination.next);
                      },
                    },
                  },
                  [t._v(t._s(t.$t("pagination.next")))]
                ),
                t.pagination.last
                  ? e(
                      "b-button",
                      {
                        attrs: { variant: "primary" },
                        on: {
                          click: function (e) {
                            return t.paginate(t.pagination.last);
                          },
                        },
                      },
                      [t._v(t._s(t.$t("pagination.last")))]
                    )
                  : t._e(),
              ],
              1
            );
          },
          l = [],
          c = {
            name: "Pagination",
            props: {
              pagination: { type: Object, default: () => ({}) },
              placement: { type: String, default: "bottom" },
            },
            computed: {
              classes() {
                return "top" === this.placement ? "mb-4 mt-2" : "mb-2 mt-2";
              },
            },
            methods: {
              paginate(t) {
                this.$emit("paginate", t, this.placement);
              },
            },
          },
          u = c,
          d = a(1001),
          h = (0, d.Z)(u, o, l, !1, null, null, null),
          p = h.exports,
          f = a(1688),
          m = a(8019),
          g = a(9879),
          b = a(3989),
          y = a(629),
          v = {
            name: "Items",
            components: {
              BCollapse: f.k,
              BIconSearch: m.Lln,
              Item: i["default"],
              ItemFilter: () =>
                Promise.all([a.e(9539), a.e(1755), a.e(4016)]).then(
                  a.bind(a, 1755)
                ),
              Loading: n.Z,
              Pagination: p,
              SortButtons: () => a.e(2968).then(a.bind(a, 2968)),
            },
            props: {
              items: { type: Array, required: !0 },
              loading: { type: Boolean, default: !1 },
              stac: { type: Object, required: !0 },
              api: { type: Boolean, default: !1 },
              allowFilter: { type: Boolean, default: !0 },
              apiFilters: { type: Object, default: () => ({}) },
              pagination: { type: Object, default: () => ({}) },
              chunkSize: { type: Number, default: 90 },
            },
            data() {
              return { shownItems: this.chunkSize, filtersOpen: !1, sort: 0 };
            },
            computed: {
              ...(0, y.rn)(["uiLanguage"]),
              hasMore() {
                return this.items.length > this.shownItems;
              },
              hasFilters() {
                return (
                  Object.values(this.apiFilters).filter(
                    (t) => !(null === t || 0 === g.ZP.size(t))
                  ).length > 1
                );
              },
              chunkedItems() {
                let t = this.items;
                return (
                  0 !== this.sort &&
                    ((t = t
                      .slice(0)
                      .sort((t, e) =>
                        b.Z.getDisplayTitle(t).localeCompare(
                          b.Z.getDisplayTitle(e),
                          this.uiLanguage
                        )
                      )),
                    -1 === this.sort && (t = t.reverse())),
                  !this.api && this.items.length > this.chunkSize
                    ? t.slice(0, this.shownItems)
                    : t
                );
              },
              showPagination() {
                if (this.api) {
                  if (this.hasFilters) return !0;
                  if (this.items.length > 0)
                    return Object.values(this.pagination).some((t) => !!t);
                }
                return !1;
              },
            },
            methods: {
              emitFilter(t, e) {
                this.$emit("filterItems", t, e);
              },
              showMore() {
                this.shownItems += this.chunkSize;
              },
              paginate(t, e) {
                "bottom" === e &&
                  this.$refs.topPagination &&
                  g.ZP.scrollTo(this.$refs.topPagination.$el),
                  this.$emit("paginate", t);
              },
            },
          },
          w = v,
          _ = (0, d.Z)(w, s, r, !1, null, "2fca64bf", null),
          P = _.exports;
      },
      9091: function (t, e, a) {
        "use strict";
        a.d(e, {
          Z: function () {
            return c;
          },
        });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { class: t.classes },
              [
                e("b-spinner", {
                  attrs: { label: t.$t("loading"), small: t.small },
                }),
              ],
              1
            );
          },
          r = [],
          i =
            (a(7658),
            {
              name: "Loading",
              props: {
                fill: { type: Boolean, default: !1 },
                stretch: { type: Boolean, default: !1 },
                small: { type: Boolean, default: !1 },
                top: { type: Boolean, default: !1 },
              },
              computed: {
                classes() {
                  let t = ["loading"];
                  return (
                    this.fill
                      ? t.push("loading-fill")
                      : this.stretch && t.push("loading-stretch"),
                    this.top && t.push("top"),
                    t
                  );
                },
              },
            }),
          n = i,
          o = a(1001),
          l = (0, o.Z)(n, s, r, !1, null, "67931bb8", null),
          c = l.exports;
      },
      5995: function (t, e, a) {
        "use strict";
        a.r(e),
          a.d(e, {
            default: function () {
              return m;
            },
          });
        var s = function () {
            var t = this,
              e = t._self._c;
            return e(
              t.component,
              t._b(
                {
                  tag: "component",
                  staticClass: "stac-link",
                  attrs: { title: t.tooltip },
                },
                "component",
                t.attributes,
                !1
              ),
              [
                t.icon
                  ? [
                      e("img", {
                        staticClass: "icon mr-2",
                        attrs: {
                          src: t.icon.href,
                          alt: t.icon.title,
                          title: t.icon.title,
                        },
                      }),
                    ]
                  : t._e(),
                e("span", { staticClass: "title" }, [
                  t._v(t._s(t.displayTitle)),
                ]),
              ],
              2
            );
          },
          r = [],
          i = a(629),
          n = a(4261),
          o = a(9879),
          l = a(3989),
          c = a(4998),
          u = a.n(c),
          d = {
            name: "StacLink",
            props: {
              data: { type: [Object, Array], default: null },
              title: { type: String, default: null },
              fallbackTitle: { type: [String, Function], default: null },
              tooltip: { type: String, default: null },
            },
            computed: {
              ...(0, i.rn)(["privateQueryParameters"]),
              ...(0, i.Se)(["toBrowserPath", "getRequestUrl"]),
              icon() {
                if (this.stac) {
                  let t = this.stac.getIcons();
                  if (t.length > 0) return t[0];
                }
                return null;
              },
              stac() {
                return this.data instanceof l.Z
                  ? this.data
                  : Array.isArray(this.data)
                  ? this.data.find((t) => t instanceof l.Z)
                  : null;
              },
              link() {
                return this.isLink(this.data)
                  ? this.data
                  : (Array.isArray(this.data) &&
                      this.data.find((t) => this.isLink(t))) ||
                      {};
              },
              isStacBrowserLink() {
                return (
                  !!this.stac ||
                  (!!o.ZP.isStacMediaType(this.link.type, !0) &&
                    n.rt.includes(this.link.rel))
                );
              },
              attributes() {
                return this.isStacBrowserLink
                  ? { to: this.href, rel: this.rel }
                  : { href: this.href, target: "_blank", rel: this.rel };
              },
              component() {
                return this.isStacBrowserLink ? "router-link" : "a";
              },
              href() {
                if (this.stac || this.isStacBrowserLink) {
                  let t;
                  if (
                    ((t = this.stac
                      ? this.stac.getBrowserPath()
                      : this.toBrowserPath(this.link.href)),
                    t.startsWith("/") || (t = "/" + t),
                    o.ZP.size(this.privateQueryParameters) > 0)
                  ) {
                    let e = u()(t);
                    for (let t in this.privateQueryParameters) {
                      let a = `~${t}`;
                      e.hasQuery(a) ||
                        e.addQuery(a, this.privateQueryParameters[t]);
                    }
                    t = e.toString();
                  }
                  return t;
                }
                return this.getRequestUrl(this.link.href);
              },
              displayTitle() {
                if (this.title) return this.title;
                let t =
                  "function" === typeof this.fallbackTitle
                    ? this.fallbackTitle()
                    : this.fallbackTitle;
                return l.Z.getDisplayTitle(this.data, t);
              },
            },
            methods: {
              isLink(t) {
                return o.ZP.isObject(t) && !(t instanceof l.Z);
              },
            },
          },
          h = d,
          p = a(1001),
          f = (0, p.Z)(h, s, r, !1, null, null, null),
          m = f.exports;
      },
      4216: function (t) {
        t.exports = {
          catalogUrl: null,
          catalogTitle: "STAC Browser",
          allowExternalAccess: !0,
          allowedDomains: [],
          detectLocaleFromBrowser: !1,
          storeLocale: !1,
          locale: "en",
          fallbackLocale: "en",
          supportedLocales: ["en"],
          apiCatalogPriority: null,
          useTileLayerAsFallback: !0,
          tileSourceTemplate: null,
          displayGeoTiffByDefault: !1,
          buildTileUrlTemplate: ({ href: t, asset: e }) =>
            "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=" +
            encodeURIComponent(e.href.startsWith("/vsi") ? e.href : t),
          stacProxyUrl: null,
          pathPrefix: "/stac-browser/",
          historyMode: "history",
          cardViewMode: "list",
          showThumbnailsAsAssets: !1,
          stacLint: !0,
          geoTiffResolution: 128,
          redirectLegacyUrls: !1,
          itemsPerPage: 12,
          defaultThumbnailSize: null,
          maxPreviewsOnMap: 50,
          crossOriginMedia: null,
          requestHeaders: {},
          requestQueryParameters: {},
          preprocessSTAC: null,
          authConfig: null,
        };
      },
      3681: function (t, e, a) {
        "use strict";
        var s = a(629);
        e["Z"] = (t) => {
          let e = { computed: { ...(0, s.rn)(["uiLanguage"]) }, methods: {} };
          for (let a in t) {
            let s = t[a];
            e.methods[a] = function () {
              return this.uiLanguage, s(...arguments);
            };
          }
          return e;
        };
      },
      9642: function (t, e, a) {
        "use strict";
        var s = a(629);
        e["Z"] = {
          props: { showThumbnail: { type: Boolean, default: !0 } },
          computed: {
            ...(0, s.rn)([
              "cardViewMode",
              "crossOriginMedia",
              "defaultThumbnailSize",
            ]),
            isList() {
              return (
                this.data && !this.data.isItem() && "list" === this.cardViewMode
              );
            },
            hasImage() {
              return this.showThumbnail && this.thumbnail;
            },
            thumbnail() {
              if (this.data) {
                let t = this.data.getThumbnails(!0, "thumbnail");
                if (t.length > 0) {
                  let e,
                    a,
                    s = t[0];
                  return (
                    Array.isArray(s["proj:shape"]) &&
                    2 === s["proj:shape"].length
                      ? ([a, e] = s["proj:shape"])
                      : Array.isArray(this.defaultThumbnailSize) &&
                        2 === this.defaultThumbnailSize.length &&
                        ([a, e] = this.defaultThumbnailSize),
                    {
                      src: s.href,
                      alt: s.title,
                      crossorigin: this.crossOriginMedia,
                      right: this.isList,
                      blankColor: "rgba(0, 0, 0, 0.125)",
                      width: e,
                      height: a,
                      "blank-width": e,
                      "blank-height": a,
                    }
                  );
                }
              }
              return null;
            },
          },
        };
      },
      54: function (t, e, a) {
        "use strict";
        let s;
        (s = Object.assign(a(4216), {})), (e["Z"] = s);
      },
      1259: function (t, e, a) {
        "use strict";
        a.d(e, {
          Cy: function () {
            return m;
          },
          EV: function () {
            return f;
          },
          Mk: function () {
            return c;
          },
          _j: function () {
            return p;
          },
        });
        var s = a(144),
          r = a(7152),
          i = a(54),
          n = a(8713),
          o = a.n(n),
          l = a(9879);
        s.ZP.use(r.Z);
        const c = ["https://api.stacspec.org/v1.*/language"],
          u = {};
        function d() {
          for (let e of i.Z.supportedLocales)
            u[e] = a(2599)(`./${e}/config.json`);
          const t = {};
          for (let e in u) t[e] = { languages: u };
          return t;
        }
        const h = new r.Z({
          locale: i.Z.locale,
          fallbackLocale: i.Z.fallbackLocale,
          messages: d(),
        });
        function p() {
          return Promise.all([f(i.Z.locale), f(i.Z.fallbackLocale)]);
        }
        async function f(t) {
          if (l.ZP.size(h.messages[t]) > 1) return;
          const e = (await a(448)(`./${t}/default.js`)).default;
          h.mergeLocaleMessage(t, e);
        }
        function m(t, e = null) {
          if ("string" !== typeof t || 0 === t.length) return t;
          let a = `fields.${t}`;
          return h.te(a) ? h.t(a, null, e) : o().format(t, e);
        }
        e["ZP"] = h;
      },
      2846: function (t, e, a) {
        "use strict";
        a.d(e, {
          Si: function () {
            return i;
          },
          xI: function () {
            return r;
          },
        });
        a(7658);
        function s(t) {
          if (!t) return;
          const e = String(t),
            a = e.indexOf("@"),
            s = -1 !== a ? e.substr(a + 1) : void 0,
            r = -1 !== a ? e.substr(0, a) : e,
            i = String(r).replace(/-/g, "_").split("_");
          if (!i.length || i.length > 4) return;
          const n = i.shift();
          if (!n) return;
          const o = { keyword: s, language: n.toLowerCase() };
          if (!i.length) return o;
          if (3 === i.length) {
            const t = i.pop();
            t && (o.variant = t.toUpperCase());
          }
          let l = i.pop();
          if (
            (l.length > 3 && ((o.keyword = l), (l = i.pop())),
            l && (o.country = l.toUpperCase()),
            !i.length)
          )
            return o;
          const c = i.pop();
          return (
            "string" === typeof c &&
              c.length >= 1 &&
              (o.script = c[0].toUpperCase() + c.substring(1).toLowerCase()),
            o
          );
        }
        function r(t) {
          const e = {};
          return (
            t.forEach((t) => {
              const { language: a, country: r } = s(t);
              if (!a) throw new Error(`Locale ${t} is not parsable`);
              e[a] ||
                (e[a] = { countries: {}, firstCountry: void 0, main: void 0 });
              const i = e[a];
              r
                ? ((i.countries[r] = t), i.firstCountry || (i.firstCountry = t))
                : (i.main = t);
            }),
            e
          );
        }
        function i(t, e, a, n) {
          const o = Array.isArray(t) ? r(t) : t;
          if (!e && a) return i(t, a, void 0, n);
          if (!e) return;
          const { language: l, country: c } = s(e);
          if (!l) return a;
          if (!o[l]) {
            if (e === a) return;
            return i(t, a, null, n);
          }
          const { countries: u, main: d = a, firstCountry: h } = o[l];
          return u && c
            ? n && h
              ? u[c]
                ? u[c]
                : h
              : u[c]
              ? u[c]
              : d
            : n && h
            ? h
            : d;
        }
      },
      7451: function (t, e, a) {
        "use strict";
        var s = a(144),
          r = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-container",
              { attrs: { id: "stac-browser" } },
              [
                t.doAuth.length > 0 ? e("Authentication") : t._e(),
                t.globalError
                  ? e(
                      "ErrorAlert",
                      t._b(
                        {
                          staticClass: "global-error",
                          on: { close: t.hideError },
                        },
                        "ErrorAlert",
                        t.globalError,
                        !1
                      )
                    )
                  : t._e(),
                t.sidebar ? e("Sidebar") : t._e(),
                e(
                  "header",
                  [
                    e("div", { staticClass: "logo" }, [
                      t._v(t._s(t.displayCatalogTitle)),
                    ]),
                    e("StacHeader", {
                      on: {
                        enableSidebar: function (e) {
                          t.sidebar = !0;
                        },
                      },
                    }),
                  ],
                  1
                ),
                e("router-view"),
                e(
                  "footer",
                  [
                    e("i18n", {
                      staticClass: "poweredby text-muted",
                      attrs: { tag: "small", path: "poweredBy" },
                      scopedSlots: t._u([
                        {
                          key: "link",
                          fn: function () {
                            return [
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://github.com/radiantearth/stac-browser",
                                    target: "_blank",
                                  },
                                },
                                [t._v("STAC Browser")]
                              ),
                              t._v(" " + t._s(t.browserVersion) + " "),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          i = [],
          n = (a(7658), a(8345)),
          o = a(629),
          l = a(54),
          c = function () {
            var t = this,
              e = t._self._c;
            return e(
              "main",
              { staticClass: "browse d-flex flex-column" },
              [
                !t.allowExternalAccess && t.isExternal
                  ? e("b-alert", { attrs: { show: "" } }, [
                      e("p", [t._v(t._s(t.$t("errors.noExternalAccess")))]),
                    ])
                  : t._e(),
                t.error
                  ? e("ErrorAlert", {
                      attrs: {
                        dismissible: !1,
                        url: t.url,
                        description: t.errorDescription,
                        id: t.errorId,
                      },
                    })
                  : t.loading
                  ? e("Loading", { attrs: { stretch: "" } })
                  : e(t.component, { tag: "component" }),
              ],
              1
            );
          },
          u = [],
          d = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-alert",
              {
                attrs: {
                  variant: "danger",
                  show: "",
                  dismissible: t.dismissible,
                },
                on: {
                  dismissed: function (e) {
                    return t.$emit("close");
                  },
                },
              },
              [
                e("p", { staticClass: "message" }, [
                  t._v(t._s(t.message || t.$t("errors.default"))),
                ]),
                t.error && t.error.message
                  ? e("dl", { staticClass: "error" }, [
                      e("dt", [t._v(t._s(t.$t("errors.labels.cause")))]),
                      e("dd", [t._v(t._s(t.error.message))]),
                    ])
                  : t._e(),
                t.description
                  ? e("dl", { staticClass: "description" }, [
                      e("dt", [t._v(t._s(t.$t("errors.labels.reason")))]),
                      e("dd", [t._v(t._s(t.description))]),
                    ])
                  : t._e(),
                t.id
                  ? e("dl", { staticClass: "id" }, [
                      e("dt", [t._v(t._s(t.$t("errors.labels.code")))]),
                      e("dd", [e("code", [t._v(t._s(t.id))])]),
                    ])
                  : t._e(),
                t.url
                  ? e("dl", { staticClass: "url" }, [
                      e("dt", [t._v(t._s(t.$t("errors.labels.requestURL")))]),
                      e("dd", [e("code", [t._v(t._s(t.url))])]),
                    ])
                  : t._e(),
              ]
            );
          },
          h = [],
          p = {
            name: "ErrorAlert",
            props: {
              message: { type: String, default: null },
              description: { type: String, default: "" },
              error: { type: [Object, Error], default: null },
              id: { type: [String, Number], default: null },
              url: { type: String, default: "" },
              dismissible: { type: Boolean, default: !0 },
            },
          },
          f = p,
          m = a(1001),
          g = (0, m.Z)(f, d, h, !1, null, "09bb7d1b", null),
          b = g.exports,
          y = a(9091),
          v = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { key: t.data.id, staticClass: "item" },
              [
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      { staticClass: "left" },
                      [
                        e(
                          "section",
                          { staticClass: "mb-4" },
                          [
                            e(
                              "b-card",
                              {
                                staticClass: "maps-preview",
                                attrs: { "no-body": "" },
                              },
                              [
                                e(
                                  "b-tabs",
                                  {
                                    ref: "tabs",
                                    attrs: {
                                      card: "",
                                      pills: "",
                                      vertical: "",
                                      end: "",
                                    },
                                    model: {
                                      value: t.tab,
                                      callback: function (e) {
                                        t.tab = e;
                                      },
                                      expression: "tab",
                                    },
                                  },
                                  [
                                    e(
                                      "b-tab",
                                      {
                                        attrs: {
                                          title: t.$t("map"),
                                          "no-body": "",
                                        },
                                      },
                                      [
                                        e("Map", {
                                          attrs: {
                                            stac: t.data,
                                            stacLayerData: t.selectedAsset,
                                            scrollWheelZoom: "",
                                          },
                                          on: { dataChanged: t.dataChanged },
                                        }),
                                      ],
                                      1
                                    ),
                                    t.thumbnails.length > 0
                                      ? e(
                                          "b-tab",
                                          {
                                            attrs: {
                                              title: t.$t("thumbnails"),
                                              "no-body": "",
                                            },
                                          },
                                          [
                                            e("Thumbnails", {
                                              attrs: {
                                                thumbnails: t.thumbnails,
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        t.hasAssets
                          ? e("Assets", {
                              attrs: {
                                assets: t.assets,
                                context: t.data,
                                shown: t.shownAssets,
                              },
                              on: { showAsset: t.showAsset },
                            })
                          : t._e(),
                        t.additionalLinks.length > 0
                          ? e("Links", {
                              attrs: {
                                title: t.$t("additionalResources"),
                                links: t.additionalLinks,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    e(
                      "b-col",
                      { staticClass: "right" },
                      [
                        e(
                          "section",
                          { staticClass: "intro" },
                          [
                            t.data.properties.description
                              ? e("h2", [t._v(t._s(t.$t("description")))])
                              : t._e(),
                            t.data.properties.deprecated
                              ? e("DeprecationNotice", {
                                  attrs: { data: t.data },
                                })
                              : t._e(),
                            t.data.properties["anon:warning"]
                              ? e("AnonymizedNotice", {
                                  attrs: {
                                    warning: t.data.properties["anon:warning"],
                                  },
                                })
                              : t._e(),
                            t.data.properties.description
                              ? e(
                                  "ReadMore",
                                  {
                                    attrs: {
                                      lines: 10,
                                      text: t.$t("read.more"),
                                      "text-less": t.$t("read.less"),
                                    },
                                  },
                                  [
                                    e("Description", {
                                      attrs: {
                                        description:
                                          t.data.properties.description,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            Array.isArray(t.data.properties.keywords) &&
                            t.data.properties.keywords.length > 0
                              ? e("Keywords", {
                                  attrs: {
                                    keywords: t.data.properties.keywords,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                        t.collection
                          ? e(
                              "section",
                              { staticClass: "item-collection card-list mb-4" },
                              [
                                e("h2", [t._v(t._s(t.$tc("stacCollection")))]),
                                e("Catalog", {
                                  attrs: {
                                    catalog: t.collection,
                                    showThumbnail: !1,
                                  },
                                }),
                              ],
                              1
                            )
                          : t._e(),
                        t.data.properties.providers
                          ? e("Providers", {
                              attrs: { providers: t.data.properties.providers },
                            })
                          : t._e(),
                        e("Metadata", {
                          attrs: {
                            data: t.data,
                            type: "Item",
                            ignoreFields: t.ignoredMetadataFields,
                          },
                        }),
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
          w = [],
          _ = a(2978),
          P = a(2778),
          L = a(8907),
          C = a.n(L),
          A = a(9879),
          k = {
            data() {
              return {
                shownAssetsOnMap: [],
                shownBandsOnMap: [],
                tab: null,
                selectedAsset: null,
                selectedAssetKey: null,
              };
            },
            computed: {
              ...(0, o.Se)(["thumbnails", "hasAssets", "assets"]),
              shownAssets() {
                if (0 === this.tab) return this.shownAssetsOnMap;
                if (
                  1 === this.tab ||
                  (null === this.tab && this.thumbnails.length > 0)
                ) {
                  let t = [],
                    e = this.thumbnails.map((t) => t.href);
                  for (let a in this.assets) {
                    let s = this.assets[a];
                    e.includes(s.href) && t.push(a);
                  }
                  return t;
                }
                return [];
              },
            },
            methods: {
              showAsset(t, e, a) {
                a
                  ? (this.tab = 1)
                  : ((this.tab = 0),
                    (this.selectedAsset = t),
                    (this.selectedAssetKey = e)),
                  this.$refs.tabs && A.ZP.scrollTo(this.$refs.tabs.$el);
              },
              dataChanged(t) {
                A.ZP.isObject(t)
                  ? t.assets || t.bands
                    ? (A.ZP.size(t.assets) > 0 &&
                        (this.selectedAssetKey
                          ? (this.shownAssetsOnMap = [this.selectedAssetKey])
                          : (this.shownAssetsOnMap = t.assets.map(
                              (t) => t.key
                            ))),
                      A.ZP.size(t.bands) > 0 &&
                        (this.shownBandsOnMap = t.bands))
                    : this.selectedAssetKey &&
                      (this.shownAssetsOnMap = [this.selectedAssetKey])
                  : ((this.shownBandsOnMap = []), (this.shownAssetsOnMap = []));
              },
            },
          },
          x = a(2996),
          Z = a(1015),
          T = a(3989),
          S = a(4998),
          $ = a.n(S),
          O = a(1259);
        function j(t, e) {
          let a = e.getters.toBrowserPath(t),
            s = $()(window.location.origin.toString());
          return (
            "hash" === e.state.historyMode
              ? (s.path(e.state.pathPrefix), s.fragment(a))
              : s.path(e.state.pathPrefix.replace(/\/$/, "") + a),
            s.toString()
          );
        }
        function I(t, e) {
          Array.isArray(e) &&
            e.length >= 4 &&
            (t.spatialCoverage = {
              "@type": "Place",
              geo: { "@type": "GeoShape", box: (e || []).join(" ") },
            });
        }
        function B(t) {
          return !Array.isArray(t) ||
            2 !== t.length ||
            ("string" !== typeof t[0] && "string" !== typeof t[1])
            ? null
            : t.map((t) => t || "..").join("/");
        }
        function M(t) {
          return A.ZP.size(t.assets) > 0
            ? Object.values(t.assets).map((e) => ({
                "@type": "DataDownload",
                contentUrl: A.ZP.toAbsolute(e.href, t.getAbsoluteUrl()),
                encodingFormat: e.type,
                name: e.title,
              }))
            : [];
        }
        function U(t, e, a, s = "DataCatalog") {
          return t.map((t) => {
            let r, i;
            t instanceof T.Z
              ? ((r = T.Z.getDisplayTitle(t)), (i = t.getAbsoluteUrl()))
              : ((r = t.title),
                (i = A.ZP.toAbsolute(t.href, e.getAbsoluteUrl())));
            let n = { "@type": s, name: r, url: j(i, a), isBasedOn: i };
            return "Dataset" === s && (n.description = F(t, a)), n;
          });
        }
        function E(t, e) {
          return t
            .filter(
              (t) =>
                A.ZP.isObject(t) &&
                Array.isArray(t.roles) &&
                t.roles.includes(e)
            )
            .map((t) => ({
              "@type": "Organization",
              name: t.name,
              description: t.description,
              url: t.url,
              email: t.email || t.mail,
            }));
        }
        function F(t, e) {
          let a, s;
          if (
            (t instanceof T.Z
              ? ((a = t.isItem() ? "Item" : t.type), (s = t.collection))
              : A.ZP.isObject(t) && "item" === t.rel && (a = "Item"),
            a)
          ) {
            let r = O.ZP.tc(`stac${a}`),
              i = O.ZP.t("in", { catalog: s || e.catalogTitle });
            return `SpatioTemporal Asset Catalog (STAC)\n${r} - ${t.id} ${i}`;
          }
        }
        function D(t, e, a) {
          var s;
          let r,
            i = T.Z.getDisplayTitle(t),
            n = t.getAbsoluteUrl(),
            o = j(n, a),
            l =
              null === (s = t.getMetadata("language")) || void 0 === s
                ? void 0
                : s.code,
            c = t.getThumbnails(!0);
          c.length > 0 && (r = A.ZP.toAbsolute(c[0].href, t.getAbsoluteUrl()));
          let u = t.getMetadata("license");
          var d;
          u && "proprietary" !== u && "various" !== u
            ? (u = `https://spdx.org/licenses/${u}.html`)
            : (u =
                null === (d = t.getLinkWithRel("license")) || void 0 === d
                  ? void 0
                  : d.href);
          u && (u = A.ZP.toAbsolute(u, t.getAbsoluteUrl()));
          let h,
            p,
            f,
            m,
            g = t.getMetadata("providers");
          return (
            A.ZP.size(g) > 0 &&
              ((h = E(g, "licensor")),
              (p = E(g, "producer")),
              (f = E(g, "host")),
              (m = E(g, "processor"))),
            {
              "@context": "https://schema.org/",
              "@type": e,
              name: i,
              description: t.getMetadata("description") || F(t, a),
              citation: t.getMetadata("sci:citation"),
              identifier: t.getMetadata("sci:doi") || t.id,
              keywords: t.getMetadata("keywords"),
              license: u,
              url: o,
              isBasedOn: n,
              dateCreated: t.getMetadata("created"),
              dateModified: t.getMetadata("updated"),
              datePublished: t.getMetadata("published"),
              expires: t.getMetadata("expires"),
              inLanguage: l,
              thumbnailUrl: r,
              version: t.getMetadata("version"),
              image: r,
              copyrightHolder: h,
              producer: p,
              provider: f,
              creator: m,
            }
          );
        }
        function R(t, e, a) {
          if (!(t instanceof T.Z)) return null;
          (e = e.filter((t) => A.ZP.isObject(t))),
            e.length > 1 &&
              (e = e.filter(
                (t, a) => e.findIndex((e) => e.isBasedOn === t.isBasedOn) !== a
              ));
          let s = D(t, "DataCatalog", a);
          var r, i, n, o;
          t.isCollection() &&
            ((null === (r = t.extent) ||
            void 0 === r ||
            null === (i = r.temporal) ||
            void 0 === i
              ? void 0
              : i.interval.length) > 0 &&
              (s.temporalCoverage = B(t.extent.temporal.interval[0])),
            (null === (n = t.extent) ||
            void 0 === n ||
            null === (o = n.spatial) ||
            void 0 === o
              ? void 0
              : o.bbox.length) > 0 && I(s, t.extent.spatial.bbox[0]),
            (s.associatedMedia = M(t)));
          return (
            (s.hasPart = U(a.getters.catalogs, t, a)),
            (s.dataset = U(a.getters.items, t, a, "Dataset")),
            (s.isPartOf = U(e, t, a)),
            s
          );
        }
        function q(t, e, a) {
          if (!(t instanceof T.Z)) return null;
          e = e.filter((t) => A.ZP.isObject(t));
          let s = D(t, "Dataset", a);
          s.includedInDataCatalog = U(e, t, a);
          let r = t.getMetadata("start_datetime"),
            i = t.getMetadata("end_datetime");
          return (
            (s.temporalCoverage =
              r || i ? B([r, i]) : t.getMetadata("datetime")),
            I(s, t.bbox),
            (s.distribution = M(t)),
            s
          );
        }
        function z(t, e) {
          let a = "schema-org",
            s = t.getElementById(a);
          s ||
            ((s = t.createElement("script")),
            (s.type = "application/ld+json"),
            (s.id = a),
            t.head.appendChild(s)),
            (s.innerText = JSON.stringify(e));
        }
        var N = {
            name: "Item",
            components: {
              AnonymizedNotice: () => a.e(6553).then(a.bind(a, 6553)),
              Assets: _["default"],
              BTabs: x.M,
              BTab: Z.L,
              Catalog: () => Promise.resolve().then(a.bind(a, 2155)),
              Description: P["default"],
              DeprecationNotice: () => a.e(891).then(a.bind(a, 891)),
              Links: () =>
                Promise.all([a.e(9539), a.e(2407), a.e(8188)]).then(
                  a.bind(a, 8188)
                ),
              Map: () => a.e(1754).then(a.bind(a, 1754)),
              Metadata: () =>
                Promise.all([a.e(9539), a.e(2407), a.e(5325)]).then(
                  a.bind(a, 5325)
                ),
              Providers: () => a.e(7992).then(a.bind(a, 7992)),
              ReadMore: C(),
              Thumbnails: () => a.e(5998).then(a.bind(a, 5998)),
            },
            mixins: [k],
            data() {
              return {
                ignoredMetadataFields: [
                  "title",
                  "description",
                  "providers",
                  "deprecated",
                  "proj:bbox",
                  "proj:geometry",
                  "anon:warning",
                ],
              };
            },
            computed: {
              ...(0, o.rn)(["data", "url"]),
              ...(0, o.Se)([
                "additionalLinks",
                "collectionLink",
                "getStac",
                "parentLink",
              ]),
              collection() {
                return this.getStac(this.collectionLink);
              },
            },
            watch: {
              data: {
                immediate: !0,
                handler(t) {
                  try {
                    let e = q(
                      t,
                      [this.collectionLink, this.parentLink],
                      this.$store
                    );
                    z(document, e);
                  } catch (e) {
                    console.warn(e);
                  }
                },
              },
              collectionLink: {
                immediate: !0,
                handler(t) {
                  A.ZP.isObject(t) &&
                    this.$store.dispatch("load", { url: t.href });
                },
              },
            },
          },
          W = N,
          V = (0, m.Z)(W, v, w, !1, null, null, null),
          Q = V.exports,
          H = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                key: t.data.id,
                class: {
                  cc: !0,
                  [t.data.type.toLowerCase()]: !0,
                  mixed: t.hasCatalogs && t.hasItems,
                  empty: !t.hasCatalogs && !t.hasItems,
                },
              },
              [
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      { staticClass: "meta" },
                      [
                        e(
                          "section",
                          { staticClass: "intro" },
                          [
                            e("h2", [t._v(t._s(t.$t("description")))]),
                            t.data.deprecated
                              ? e("DeprecationNotice", {
                                  attrs: { data: t.data },
                                })
                              : t._e(),
                            t.data["anon:warning"]
                              ? e("AnonymizedNotice", {
                                  attrs: { warning: t.data["anon:warning"] },
                                })
                              : t._e(),
                            t.data.description
                              ? e(
                                  "ReadMore",
                                  {
                                    attrs: {
                                      lines: 10,
                                      text: t.$t("read.more"),
                                      "text-less": t.$t("read.less"),
                                    },
                                  },
                                  [
                                    e("Description", {
                                      attrs: {
                                        description: t.data.description,
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            Array.isArray(t.data.keywords) &&
                            t.data.keywords.length > 0
                              ? e("Keywords", {
                                  attrs: { keywords: t.data.keywords },
                                })
                              : t._e(),
                            t.isCollection
                              ? e(
                                  "section",
                                  { staticClass: "metadata mb-4" },
                                  [
                                    t.licenses
                                      ? e(
                                          "b-row",
                                          [
                                            e(
                                              "b-col",
                                              {
                                                staticClass: "label",
                                                attrs: { md: "4" },
                                              },
                                              [
                                                t._v(
                                                  t._s(t.$t("catalog.license"))
                                                ),
                                              ]
                                            ),
                                            e("b-col", {
                                              staticClass: "value",
                                              attrs: { md: "8" },
                                              domProps: {
                                                innerHTML: t._s(t.licenses),
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                    t.temporalExtents
                                      ? e(
                                          "b-row",
                                          [
                                            e(
                                              "b-col",
                                              {
                                                staticClass: "label",
                                                attrs: { md: "4" },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "catalog.temporalExtent"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                            e("b-col", {
                                              staticClass: "value",
                                              attrs: { md: "8" },
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.temporalExtents
                                                ),
                                              },
                                            }),
                                          ],
                                          1
                                        )
                                      : t._e(),
                                  ],
                                  1
                                )
                              : t._e(),
                          ],
                          1
                        ),
                        t.isCollection || t.thumbnails.length > 0
                          ? e(
                              "section",
                              { staticClass: "mb-4" },
                              [
                                e(
                                  "b-card",
                                  {
                                    staticClass: "maps-preview",
                                    attrs: { "no-body": "" },
                                  },
                                  [
                                    e(
                                      "b-tabs",
                                      {
                                        ref: "tabs",
                                        attrs: {
                                          pills: "",
                                          card: "",
                                          vertical: "",
                                          end: "",
                                        },
                                        model: {
                                          value: t.tab,
                                          callback: function (e) {
                                            t.tab = e;
                                          },
                                          expression: "tab",
                                        },
                                      },
                                      [
                                        t.isCollection
                                          ? e(
                                              "b-tab",
                                              {
                                                attrs: {
                                                  title: t.$t("map"),
                                                  "no-body": "",
                                                },
                                              },
                                              [
                                                e("Map", {
                                                  attrs: {
                                                    stac: t.data,
                                                    stacLayerData: t.mapData,
                                                    popover: "",
                                                  },
                                                  on: {
                                                    dataChanged: t.dataChanged,
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                        t.thumbnails.length > 0
                                          ? e(
                                              "b-tab",
                                              {
                                                attrs: {
                                                  title: t.$t("thumbnails"),
                                                  "no-body": "",
                                                },
                                              },
                                              [
                                                e("Thumbnails", {
                                                  attrs: {
                                                    thumbnails: t.thumbnails,
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : t._e(),
                        t.hasAssets
                          ? e("Assets", {
                              attrs: {
                                assets: t.assets,
                                context: t.data,
                                shown: t.shownAssets,
                              },
                              on: { showAsset: t.showAsset },
                            })
                          : t._e(),
                        t.hasItemAssets && !t.hasItems
                          ? e("Assets", {
                              attrs: {
                                assets: t.data.item_assets,
                                definition: !0,
                              },
                            })
                          : t._e(),
                        t.hasProviders
                          ? e("Providers", {
                              attrs: { providers: t.data.providers },
                            })
                          : t._e(),
                        e("Metadata", {
                          staticClass: "mb-4",
                          attrs: {
                            title: t.$t("metadata.title"),
                            type: t.data.type,
                            data: t.data,
                            ignoreFields: t.ignoredMetadataFields,
                          },
                        }),
                        t.additionalLinks.length > 0
                          ? e("Links", {
                              attrs: {
                                title: t.$t("additionalResources"),
                                links: t.additionalLinks,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    t.hasCatalogs
                      ? e(
                          "b-col",
                          { staticClass: "catalogs-container" },
                          [
                            e("Catalogs", {
                              attrs: {
                                catalogs: t.catalogs,
                                hasMore: t.hasMoreCollections,
                              },
                              on: { loadMore: t.loadMoreCollections },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    t.hasItems
                      ? e(
                          "b-col",
                          { staticClass: "items-container" },
                          [
                            e("Items", {
                              attrs: {
                                stac: t.data,
                                items: t.items,
                                api: t.isApi,
                                apiFilters: t.filters,
                                pagination: t.itemPages,
                                loading: t.apiItemsLoading,
                              },
                              on: {
                                paginate: t.paginateItems,
                                filterItems: t.filterItems,
                              },
                            }),
                            t.hasItemAssets
                              ? e("Assets", {
                                  attrs: {
                                    assets: t.data.item_assets,
                                    definition: !0,
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        )
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          G = [],
          Y = function () {
            var t = this,
              e = t._self._c;
            return e(
              "section",
              { staticClass: "catalogs mb-4" },
              [
                e(
                  "h2",
                  [
                    e("span", { staticClass: "title" }, [
                      t._v(t._s(t.$tc("stacCatalog", t.catalogs.length))),
                    ]),
                    t.hasMultiple
                      ? e(
                          "b-badge",
                          { attrs: { pill: "", variant: "secondary ml-2" } },
                          [
                            t.catalogs.length !== t.catalogView.length
                              ? [t._v(t._s(t.catalogView.length) + "/")]
                              : t._e(),
                            t._v(t._s(t.catalogs.length) + " "),
                          ],
                          2
                        )
                      : t._e(),
                    e("ViewButtons", {
                      staticClass: "ml-4",
                      model: {
                        value: t.view,
                        callback: function (e) {
                          t.view = e;
                        },
                        expression: "view",
                      },
                    }),
                    t.hasMultiple
                      ? e("SortButtons", {
                          staticClass: "ml-2",
                          model: {
                            value: t.sort,
                            callback: function (e) {
                              t.sort = e;
                            },
                            expression: "sort",
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t.hasMultiple
                  ? e("SearchBox", {
                      staticClass: "mt-3 mb-2",
                      attrs: { placeholder: t.$t("catalogs.filterByTitle") },
                      model: {
                        value: t.searchTerm,
                        callback: function (e) {
                          t.searchTerm = e;
                        },
                        expression: "searchTerm",
                      },
                    })
                  : t._e(),
                t.searchTerm && 0 === t.catalogView.length
                  ? e("b-alert", { attrs: { variant: "warning", show: "" } }, [
                      t._v(t._s(t.$t("catalogs.noMatches"))),
                    ])
                  : t._e(),
                e(
                  t.cardsComponent,
                  t._b(
                    { tag: "component" },
                    "component",
                    t.cardsComponentProps,
                    !1
                  ),
                  t._l(t.catalogView, function (t) {
                    return e("Catalog", { key: t.href, attrs: { catalog: t } });
                  }),
                  1
                ),
                t.hasMore
                  ? e(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-visible",
                            rawName: "v-b-visible.300",
                            value: t.loadMore,
                            expression: "loadMore",
                            modifiers: { 300: !0 },
                          },
                        ],
                        attrs: { variant: "primary" },
                        on: { click: t.loadMore },
                      },
                      [t._v(t._s(t.$t("catalogs.loadMore")))]
                    )
                  : t._e(),
              ],
              1
            );
          },
          J = [],
          K = a(2155),
          X = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-button-group",
              { attrs: { title: t.$t("view.title"), size: "sm" } },
              [
                e(
                  "b-button",
                  {
                    attrs: {
                      title: t.$t("view.tiles.title"),
                      variant: "outline-primary",
                      pressed: "cards" === t.value,
                    },
                    on: {
                      click: function (e) {
                        return t.toggle("cards");
                      },
                    },
                  },
                  [
                    e("b-icon-bricks"),
                    t._v(" "),
                    e("span", { staticClass: "button-label" }, [
                      t._v(t._s(t.$t("view.tiles.label"))),
                    ]),
                  ],
                  1
                ),
                e(
                  "b-button",
                  {
                    attrs: {
                      title: t.$t("view.list.title"),
                      variant: "outline-primary",
                      pressed: "list" === t.value,
                    },
                    on: {
                      click: function (e) {
                        return t.toggle("list");
                      },
                    },
                  },
                  [
                    e("b-icon-list-task"),
                    t._v(" "),
                    e("span", { staticClass: "button-label" }, [
                      t._v(t._s(t.$t("view.list.label"))),
                    ]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          tt = [],
          et = a(8019),
          at = {
            id: "SortButtons",
            components: { BIconBricks: et.S3S, BIconListTask: et.WPR },
            props: { value: { type: String, default: "cards" } },
            methods: {
              toggle(t) {
                this.value !== t && this.$emit("input", t);
              },
            },
          },
          st = at,
          rt = (0, m.Z)(st, X, tt, !1, null, null, null),
          it = rt.exports,
          nt = {
            components: { ViewButtons: it },
            computed: {
              cardsComponent() {
                return "list" === this.view ? "div" : "b-card-group";
              },
              cardsComponentProps() {
                return "list" === this.view
                  ? { class: ["card-list"] }
                  : { columns: !0 };
              },
              view: {
                get() {
                  return this.$store.state.cardViewMode;
                },
                set(t) {
                  this.$store.commit("config", { cardViewMode: t });
                },
              },
            },
          },
          ot = {
            name: "Catalogs",
            components: {
              Catalog: K["default"],
              SearchBox: () => a.e(624).then(a.bind(a, 624)),
              SortButtons: () => a.e(2968).then(a.bind(a, 2968)),
            },
            mixins: [nt],
            props: {
              catalogs: { type: Array, required: !0 },
              hasMore: { type: Boolean, default: !1 },
            },
            data() {
              return { searchTerm: "", sort: 0 };
            },
            computed: {
              ...(0, o.rn)(["uiLanguage"]),
              ...(0, o.Se)(["getStac"]),
              hasMultiple() {
                return !this.hasMore && this.catalogs.length > 1;
              },
              catalogView() {
                if (this.hasMore) return this.catalogs;
                let t = this.catalogs.map((t) => {
                  let e = this.getStac(t);
                  return e || t;
                });
                return (
                  this.searchTerm &&
                    (t = t.filter((t) => {
                      let e = [t.title];
                      return (
                        t instanceof T.Z
                          ? (e.push(t.id),
                            Array.isArray(t.keywords) &&
                              (e = e.concat(t.keywords)))
                          : e.push(t.href),
                        A.ZP.search(this.searchTerm, e)
                      );
                    })),
                  this.hasMore ||
                    0 === this.sort ||
                    ((t = t
                      .slice(0)
                      .sort((t, e) =>
                        T.Z.getDisplayTitle(t).localeCompare(
                          T.Z.getDisplayTitle(e),
                          this.uiLanguage
                        )
                      )),
                    -1 === this.sort && (t = t.reverse())),
                  t
                );
              },
            },
            methods: {
              loadMore(t = !0) {
                t && this.$emit("loadMore");
              },
            },
          },
          lt = ot,
          ct = (0, m.Z)(lt, Y, J, !1, null, "4fcf0114", null),
          ut = ct.exports,
          dt = a(9784),
          ht = a(3681),
          pt = a(5834),
          ft = {
            name: "Catalog",
            components: {
              AnonymizedNotice: () => a.e(6553).then(a.bind(a, 6553)),
              Assets: () => Promise.resolve().then(a.bind(a, 2978)),
              BTabs: x.M,
              BTab: Z.L,
              Catalogs: ut,
              DeprecationNotice: () => a.e(891).then(a.bind(a, 891)),
              Description: P["default"],
              Items: dt.Z,
              Keywords: () => a.e(7245).then(a.bind(a, 7245)),
              Links: () =>
                Promise.all([a.e(9539), a.e(2407), a.e(8188)]).then(
                  a.bind(a, 8188)
                ),
              Map: () => a.e(1754).then(a.bind(a, 1754)),
              Metadata: () =>
                Promise.all([a.e(9539), a.e(2407), a.e(5325)]).then(
                  a.bind(a, 5325)
                ),
              Providers: () => a.e(7992).then(a.bind(a, 7992)),
              ReadMore: C(),
              Thumbnails: () => a.e(5998).then(a.bind(a, 5998)),
            },
            mixins: [
              k,
              (0, ht.Z)({
                formatLicense: pt.formatLicense,
                formatTemporalExtents: pt.formatTemporalExtents,
              }),
            ],
            data() {
              return {
                filters: {},
                ignoredMetadataFields: [
                  "stac_version",
                  "stac_extensions",
                  "id",
                  "type",
                  "title",
                  "description",
                  "keywords",
                  "providers",
                  "license",
                  "extent",
                  "summaries",
                  "links",
                  "assets",
                  "item_assets",
                  "proj:bbox",
                  "proj:geometry",
                  "conformsTo",
                  "deprecated",
                  "anon:warning",
                  "stac_browser",
                ],
              };
            },
            computed: {
              ...(0, o.rn)([
                "data",
                "url",
                "apiItems",
                "apiItemsLink",
                "apiItemsPagination",
              ]),
              ...(0, o.Se)([
                "additionalLinks",
                "catalogs",
                "isCollection",
                "items",
                "hasMoreCollections",
                "getApiItemsLoading",
                "parentLink",
                "rootLink",
              ]),
              apiItemsLoading() {
                return this.getApiItemsLoading(this.data);
              },
              licenses() {
                return this.isCollection && this.data.license
                  ? this.formatLicense(this.data.license, null, null, this.data)
                  : null;
              },
              hasProviders() {
                return (
                  this.isCollection &&
                  Array.isArray(this.data.providers) &&
                  this.data.providers.length > 0
                );
              },
              temporalExtents() {
                if (
                  this.data &&
                  this.data.isCollection() &&
                  this.data.extent.temporal.interval.length > 0
                ) {
                  let t = this.data.extent.temporal.interval;
                  return (
                    t.length > 1 && (t = t.slice(1)),
                    this.formatTemporalExtents(t)
                  );
                }
                return null;
              },
              hasItemAssets() {
                var t;
                return (
                  A.ZP.size(
                    null === (t = this.data) || void 0 === t
                      ? void 0
                      : t.item_assets
                  ) > 0
                );
              },
              itemPages() {
                let t = Object.assign({}, this.apiItemsPagination);
                return (
                  !t.first &&
                    this.data &&
                    this.apiItemsLink &&
                    "items" !== this.apiItemsLink.rel &&
                    (t.first = A.ZP.addFiltersToLink(
                      this.data.getApiItemsLink(),
                      this.filters
                    )),
                  t
                );
              },
              isApi() {
                return Boolean(this.apiItemsLink);
              },
              hasItems() {
                return this.items.length > 0 || this.isApi;
              },
              hasCatalogs() {
                return this.catalogs.length > 0;
              },
              mapData() {
                return this.selectedAsset
                  ? this.selectedAsset
                  : { type: "FeatureCollection", features: this.items };
              },
            },
            watch: {
              data: {
                immediate: !0,
                handler(t) {
                  try {
                    let e = R(t, [this.parentLink, this.rootLink], this.$store);
                    z(document, e);
                  } catch (e) {
                    console.warn(e);
                  }
                },
              },
            },
            methods: {
              loadMoreCollections() {
                this.$store.dispatch("loadNextApiCollections", { show: !0 });
              },
              async paginateItems(t) {
                try {
                  await this.$store.dispatch("loadApiItems", {
                    link: t,
                    show: !0,
                    filters: this.filters,
                  });
                } catch (e) {
                  this.$root.$emit("error", e, this.$t("errors.loadItems"));
                }
              },
              async filterItems(t, e) {
                (this.filters = t), e && this.$store.commit("resetApiItems");
                try {
                  await this.$store.dispatch("loadApiItems", {
                    link: this.apiItemsLink,
                    show: !0,
                    filters: t,
                  });
                } catch (a) {
                  let t = e
                    ? this.$t("errors.loadItems")
                    : this.$t("errors.loadFilteredItems");
                  this.$root.$emit("error", a, t);
                }
              },
            },
          },
          mt = ft,
          gt = (0, m.Z)(mt, H, G, !1, null, null, null),
          bt = gt.exports,
          yt = {
            name: "Browse",
            components: { ErrorAlert: b, Loading: y.Z, Catalog: bt, Item: Q },
            props: { path: { type: String, default: "" } },
            computed: {
              ...(0, o.rn)([
                "allowExternalAccess",
                "url",
                "data",
                "redirectLegacyUrls",
              ]),
              ...(0, o.Se)(["isItem", "error", "loading"]),
              errorId() {
                if (
                  this.error instanceof Error &&
                  this.error.isAxiosError &&
                  A.ZP.isObject(this.error.response)
                ) {
                  let t = this.error.response;
                  return A.ZP.isObject(t.data) && t.data.code
                    ? t.data.code
                    : t.status;
                }
                return null;
              },
              errorDescription() {
                if (
                  this.error instanceof Error &&
                  this.error.isAxiosError &&
                  A.ZP.isObject(this.error.response)
                ) {
                  let t = this.error.response;
                  if (A.ZP.isObject(t.data)) {
                    if ("string" === typeof t.data.description)
                      return t.data.description;
                    if ("string" === typeof t.data.detail) return t.data.detail;
                  }
                  if (401 === t.status) return this.$t("errors.unauthorized");
                  if (403 === t.status) return this.$t("errors.forbidden");
                  if (404 === t.status) return this.$t("errors.notFound");
                  if (t.status > 500) return this.$t("errors.serverError");
                  if (t.status > 400) return this.$t("errors.badRequest");
                } else if (this.error instanceof A.vV)
                  return this.error.message;
                return this.$t("errors.networkError");
              },
              component() {
                return this.isItem ? "Item" : "Catalog";
              },
              isExternal() {
                return $()(this.path).is("absolute");
              },
            },
            watch: {
              path: {
                immediate: !0,
                async handler(t, e) {
                  t !== e &&
                    ((this.redirectLegacyUrls &&
                      (await this.redirectLegacyUrl(t))) ||
                      this.$store.dispatch("load", {
                        url: t || "/",
                        fromBrowser: !0,
                        show: !0,
                        loadApi: !0,
                      }));
                },
              },
            },
            methods: {
              async redirectLegacyUrl(t) {
                if (!t || "/" === t) return !1;
                let e = t
                  .split("/")
                  .filter(
                    (t) => t.length > 0 && "item" !== t && "collection" !== t
                  );
                if (
                  e.length > 0 &&
                  e.every((t) =>
                    t.match(
                      /^[123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ]+$/
                    )
                  )
                ) {
                  const { decode: t } = await a
                    .e(7191)
                    .then(a.t.bind(a, 7191, 23));
                  let s = t(e[e.length - 1]).toString();
                  if (s) {
                    let t = $()(s);
                    return (
                      this.$router.replace({
                        path:
                          "/" + t.path().replace(/(collections|items)\/?$/, ""),
                        query: t.query(!0),
                      }),
                      !0
                    );
                  }
                }
                return !1;
              },
            },
          },
          vt = yt,
          wt = (0, m.Z)(vt, c, u, !1, null, null, null),
          _t = wt.exports;
        function Pt(t) {
          let e = [];
          return (
            t.allowExternalAccess &&
              e.push({
                path: "/external/(.*)",
                name: "browseExternal",
                component: _t,
                props: (t) => ({ path: `/external/${t.params.pathMatch}` }),
              }),
            t.catalogUrl
              ? e.push({
                  path: "/search",
                  name: "search",
                  component: () =>
                    Promise.all([a.e(9539), a.e(1755), a.e(8561)]).then(
                      a.bind(a, 5705)
                    ),
                })
              : (e.push({
                  path: "/",
                  name: "select",
                  component: () => a.e(5260).then(a.bind(a, 5260)),
                }),
                e.push({
                  path: "/search/external/(.*)",
                  name: "search",
                  component: () =>
                    Promise.all([a.e(9539), a.e(1755), a.e(8561)]).then(
                      a.bind(a, 5705)
                    ),
                  props: (t) => ({
                    loadParent: `/external/${t.params.pathMatch}`,
                  }),
                })),
            e.push({
              path: "/(.*)",
              name: "browse",
              component: _t,
              props: (t) => ({ path: t.params.pathMatch }),
            }),
            e
          );
        }
        var Lt = Pt,
          Ct = (a(541), a(6154)),
          At = a(4261),
          kt = a(9263),
          xt = a(6837),
          Zt = a(6318);
        class Tt extends xt.ZP {
          constructor(t = null, e = null) {
            super(Tt.SYMBOL, t, e);
          }
          static get label() {
            return "~";
          }
          static get longLabel() {
            return O.ZP.t("search.matches");
          }
          static get description() {
            return O.ZP.t("search.likeOperatorDescription");
          }
        }
        (0, Zt.Z)(Tt, "SYMBOL", "like");
        class St {
          constructor(t, e) {
            (this.id = t), (this.schema = e);
          }
          get title() {
            return "string" === typeof this.schema.title
              ? this.schema.title
              : (0, kt.formatKey)(this.id);
          }
          get description() {
            return this.isTemporal ? O.ZP.t("search.dateDescription") : "";
          }
          get supported() {
            return this.isText || this.isNumeric || this.isBoolean;
          }
          is(t) {
            return this.types.includes(t);
          }
          get isSelection() {
            return Array.isArray(this.schema.enum);
          }
          get isText() {
            return this.is("string");
          }
          get isBoolean() {
            return this.is("boolean");
          }
          get isNumeric() {
            return this.is("number") || this.is("integer");
          }
          get isDate() {
            return this.isText && "date" === this.schema.format;
          }
          get isDateTime() {
            return this.isText && "date-time" === this.schema.format;
          }
          get isTemporal() {
            return this.isDate || this.isDateTime;
          }
          get defaultValue() {
            return "undefined" !== typeof this.schema.default
              ? this.schema.default
              : this.isSelection
              ? this.schema.enum[0]
              : this.isTemporal
              ? new Date()
              : this.isNumeric
              ? "undefined" !== typeof this.schema.minimum
                ? this.schema.minimum
                : 0
              : this.isText
              ? ""
              : !this.isBoolean && null;
          }
          get types() {
            return "string" === typeof this.schema.type
              ? [this.schema.type]
              : Array.isArray(this.schema.type)
              ? this.schema.type
              : [];
          }
          getOperators(t) {
            let e = [xt.y2, xt.lA];
            return (
              this.isNumeric || this.isTemporal
                ? (e.push(xt.gT), e.push(xt.H0), e.push(xt.Y), e.push(xt.pY))
                : this.isText && t.advancedComparison && e.push(Tt),
              e
            );
          }
          toText() {
            return this.id;
          }
          toJSON() {
            return { property: this.id };
          }
        }
        class $t {
          constructor(t = !1, e = !1) {
            (this.show = Boolean(t)), (this.loadApi = Boolean(e));
          }
        }
        async function Ot(t, e) {
          let a,
            s = { "Accept-Language": t.getters.acceptedLanguages };
          if (A.ZP.isObject(e)) {
            let r =
                "string" === typeof e.method ? e.method.toLowerCase() : "get",
              i = t.getters.getRequestUrl(e.href);
            t.getters.isExternalUrl(i) ||
              Object.assign(s, t.state.requestHeaders),
              A.ZP.isObject(e.headers) && Object.assign(s, e.headers),
              (a = { method: r, url: i, headers: s, data: e.body });
          } else if ("string" === typeof e) {
            let r = t.getters.getRequestUrl(e);
            t.getters.isExternalUrl(r) ||
              Object.assign(s, t.state.requestHeaders),
              (a = { method: "get", url: r, headers: s });
          } else a = e;
          return await (0, Ct.Z)(a);
        }
        function jt(t, e) {
          return (
            t instanceof $() && (t = t.toString()),
            "string" === typeof t && Array.isArray(e)
              ? t.replace(e[1], e[0])
              : t
          );
        }
        function It(t, e) {
          return (
            t instanceof $() && (t = t.toString()),
            "string" === typeof t && Array.isArray(e)
              ? t.replace(e[0], e[1])
              : t
          );
        }
        function Bt(t, e) {
          return (
            "function" === typeof t.preprocessSTAC &&
              (e = t.preprocessSTAC(e, t)),
            Object.freeze(e)
          );
        }
        function Mt(t) {
          var e;
          return [401, 403].includes(
            null === t ||
              void 0 === t ||
              null === (e = t.response) ||
              void 0 === e
              ? void 0
              : e.status
          );
        }
        function Ut(t, e) {
          if (0 == A.ZP.size(e)) return t;
          for (let a in e) t.hasQuery(a) || t.addQuery(a, e[a]);
          return t;
        }
        var Et = a(2846);
        function Ft(t, e) {
          const a = () => ({
              url: "",
              title: t.catalogTitle,
              description: null,
              data: null,
              valid: null,
              parents: null,
              globalError: null,
              localRequestQueryParameters: {},
              stateQueryParameters: { language: null, asset: [], itemdef: [] },
              apiItems: [],
              apiItemsLink: null,
              apiItemsPagination: {},
              queryables: null,
            }),
            r = () => ({
              queue: [],
              privateQueryParameters: {},
              authData: null,
              doAuth: [],
              conformsTo: [],
              dataLanguage: null,
              dataLanguages: [],
              apiCollections: [],
              apiItemsLoading: {},
              nextCollectionsLink: null,
            });
          return new o.ZP.Store({
            strict: !0,
            state: Object.assign({}, t, a(), r(), {
              database: {},
              allowSelectCatalog: !t.catalogUrl,
              globalRequestQueryParameters: t.requestQueryParameters,
              uiLanguage: t.locale,
            }),
            getters: {
              loading: (t) =>
                !t.url || !t.data || t.database[t.url] instanceof $t,
              getApiItemsLoading: (t) => (e) => {
                let a = "";
                return (
                  e instanceof $t ||
                  (e instanceof T.Z
                    ? (a = e.id)
                    : "string" === typeof e && (a = e),
                  t.apiItemsLoading[a] || !1)
                );
              },
              error: (t) =>
                t.database[t.url] instanceof Error ? t.database[t.url] : null,
              getStac:
                (t) =>
                (e, a = !1) => {
                  if (e instanceof T.Z) return e;
                  if (
                    (A.ZP.isObject(e) && A.ZP.hasText(e.href) && (e = e.href),
                    !A.ZP.hasText(e))
                  )
                    return null;
                  let s = A.ZP.toAbsolute(e, t.url),
                    r = t.database[s];
                  return r instanceof T.Z || (a && r instanceof Error)
                    ? r
                    : null;
                },
              displayCatalogTitle: (t, e) =>
                T.Z.getDisplayTitle(e.root, t.catalogTitle),
              isCollection: (t) => {
                var e;
                return (
                  (null === (e = t.data) || void 0 === e
                    ? void 0
                    : e.isCollection()) || !1
                );
              },
              isCatalog: (t) => {
                var e;
                return (
                  (null === (e = t.data) || void 0 === e
                    ? void 0
                    : e.isCatalog()) || !1
                );
              },
              isCatalogLike: (t) => {
                var e;
                return (
                  (null === (e = t.data) || void 0 === e
                    ? void 0
                    : e.isCatalogLike()) || !1
                );
              },
              isItem: (t) => {
                var e;
                return (
                  (null === (e = t.data) || void 0 === e
                    ? void 0
                    : e.isItem()) || !1
                );
              },
              root: (t, e) => e.getStac(e.rootLink),
              rootLink: (t) => {
                var e;
                let a =
                  null === (e = t.data) || void 0 === e
                    ? void 0
                    : e.getStacLinkWithRel("root");
                if (a) return a;
                if (t.catalogUrl) return A.ZP.createLink(t.catalogUrl, "root");
                if (
                  t.url &&
                  t.data instanceof T.Z &&
                  t.data.getLinksWithRels([
                    "conformance",
                    "service-desc",
                    "service-doc",
                    "data",
                    "search",
                  ]).length > 0
                )
                  return A.ZP.createLink(t.url, "root");
                if (t.url) {
                  let e = $()(t.url),
                    a = e.segment(-2);
                  if (["collections", "items"].includes(a))
                    return (
                      e.segment(-1, ""),
                      e.segment(-1, ""),
                      "items" === a && (e.segment(-1, ""), e.segment(-1, "")),
                      A.ZP.createLink(e.toString(), "root")
                    );
                }
                return null;
              },
              parentLink: (t) => {
                if (t.data instanceof T.Z) {
                  let e = t.data.getStacLinkWithRel("parent");
                  if (e) return e;
                }
                if (t.url) {
                  let e = $()(t.url),
                    a = e.segment(-2);
                  if (["collections", "items"].includes(a))
                    return (
                      e.segment(-1, ""),
                      e.segment(-1, ""),
                      A.ZP.createLink(e.toString(), "parent")
                    );
                }
                return null;
              },
              collectionLink: (t) => {
                if (t.data instanceof T.Z) {
                  var e;
                  let a =
                    null === (e = t.data) || void 0 === e
                      ? void 0
                      : e.getStacLinkWithRel("collection");
                  if (a) return a;
                }
                if (t.url) {
                  let e = $()(t.url),
                    a = e.segment(-2);
                  if ("items" == a)
                    return (
                      e.segment(-1, ""),
                      e.segment(-1, ""),
                      A.ZP.createLink(e.toString(), "collection")
                    );
                }
                return null;
              },
              supportsConformance: (t) => (e) => {
                if (!Array.isArray(e)) return e;
                let a = e
                    .map((t) =>
                      t.replaceAll("*", "[^/]+").replace(/\/?#/, "/?#")
                    )
                    .join("|"),
                  s = new RegExp("^(" + a + ")$");
                return Boolean(t.conformsTo.find((t) => t.match(s)));
              },
              supportsExtension: (t) => (e) =>
                A.ZP.supportsExtension(t.data, e),
              items: (t) =>
                t.apiItems.length > 0
                  ? t.apiItems
                  : t.data
                  ? t.data.getStacLinksWithRel("item")
                  : [],
              catalogs: (t) => {
                let e = Boolean(
                    t.data instanceof T.Z &&
                      t.data.getApiCollectionsLink() &&
                      t.apiCollections.length > 0
                  ),
                  a = Boolean(t.data instanceof T.Z),
                  s =
                    !t.apiCatalogPriority ||
                    "collections" === t.apiCatalogPriority,
                  r =
                    !t.apiCatalogPriority || "childs" === t.apiCatalogPriority,
                  i = [];
                return (
                  e && s && (i = i.concat(t.apiCollections)),
                  a && r && (i = T.Z.addMissingChildren(i, t.data)),
                  i
                );
              },
              hasMoreCollections: (t) => Boolean(t.nextCollectionsLink),
              hasAssets: (t, e) =>
                Boolean(
                  Object.values(e.assets).find(
                    (t) => A.ZP.isObject(t) && "string" === typeof t.href
                  )
                ),
              assets: (t, e) => {
                var a;
                if (
                  A.ZP.isObject(
                    null === (a = t.data) || void 0 === a ? void 0 : a.assets
                  )
                ) {
                  if (t.showThumbnailsAsAssets) return t.data.assets;
                  {
                    let a = {},
                      s = e.thumbnails;
                    for (let e in t.data.assets) {
                      let r = t.data.assets[e];
                      s.includes(r) || (a[e] = r);
                    }
                    return a;
                  }
                }
                return {};
              },
              thumbnails: (t) => (t.data ? t.data.getThumbnails(!0) : []),
              additionalLinks: (t) =>
                t.data
                  ? t.data
                      .getLinksWithOtherRels(At.RG)
                      .filter(
                        (t) =>
                          "preview" !== t.rel || !A.ZP.canBrowserDisplayImage(t)
                      )
                  : [],
              toBrowserPath: (t, e) => (a) => {
                A.ZP.hasText(a) || (a = "/");
                let s,
                  r = A.ZP.toAbsolute(jt(a, t.stacProxyUrl), t.url, !1);
                if (
                  (!t.allowSelectCatalog &&
                    t.catalogUrl &&
                    (s = r.relativeTo(t.catalogUrl)),
                  "undefined" === typeof s || e.isExternalUrl(r, !1))
                ) {
                  if (!t.allowExternalAccess) return r.toString();
                  let e = ["/external"],
                    a = r.protocol();
                  "https" !== a && e.push(a + ":"),
                    e.push(r.authority()),
                    e.push(r.path().replace(/^\//, ""));
                  let s = e.join("/"),
                    i = r.query();
                  return i && (s += `?${i}`), s;
                }
                return "/" + s.toString();
              },
              fromBrowserPath: (t, e) => (a) => {
                const s = /^\/(search\/)?external\//;
                if (A.ZP.hasText(a) && "/" !== a)
                  if (a.match(s)) {
                    let t,
                      e = a.replace(s, "").split("/");
                    (t = e[0].endsWith(":") ? e.shift() : "https:"),
                      (a = `${t}//${e.join("/")}`);
                  } else
                    !t.allowSelectCatalog &&
                      t.catalogUrl &&
                      (a = A.ZP.toAbsolute(a, t.catalogUrl, !1));
                else a = t.catalogUrl;
                return e.getRequestUrl(a, null, !0);
              },
              isExternalUrl:
                (t) =>
                (e, a = !0) => {
                  if (!t.catalogUrl) return !1;
                  if (
                    (e instanceof $() || (e = $()(e)),
                    a &&
                      Array.isArray(t.allowedDomains) &&
                      t.allowedDomains.includes(e.domain()))
                  )
                    return !1;
                  let s = e.relativeTo(t.catalogUrl);
                  if (s.equals(e)) return !0;
                  let r = s.toString();
                  return r.startsWith("//") || r.startsWith("../");
                },
              getRequestUrl:
                (t, e) =>
                (a, s = null, r = !1) => {
                  let i = A.ZP.toAbsolute(
                    It(a, t.stacProxyUrl),
                    s || t.url,
                    !1
                  );
                  return (
                    e.isExternalUrl(i) ||
                      (Ut(i, t.privateQueryParameters),
                      Ut(i, t.globalRequestQueryParameters),
                      r && Ut(i, t.localRequestQueryParameters)),
                    i.toString()
                  );
                },
              acceptedLanguages: (t) => {
                const e = { en: 0.1 };
                return (
                  Array.isArray(t.supportedLocales) &&
                    t.supportedLocales.forEach((t) => (e[t] = 0.2)),
                  A.ZP.hasText(t.fallbackLocale) && (e[t.fallbackLocale] = 0.5),
                  Array.isArray(navigator.languages) &&
                    navigator.languages.forEach((t) => (e[t] = 0.7)),
                  A.ZP.hasText(t.locale) && (e[t.locale] = 1),
                  Object.entries(e)
                    .sort((t, e) => (t[1] > e[1] ? -1 : t[1] < e[1] ? 1 : 0))
                    .map(([t, e]) => (e >= 1 ? t : `${t};q=${e}`))
                    .join(",")
                );
              },
            },
            mutations: {
              config(t, e) {
                for (let a in e) {
                  let s = e[a];
                  switch (a) {
                    case "catalogTitle":
                      t.catalogTitle = s;
                      break;
                    case "catalogUrl":
                      "function" === typeof s
                        ? (t.catalogUrl = s())
                        : "string" === typeof s && (t.catalogUrl = s);
                      break;
                    case "stacProxyUrl":
                      "string" === typeof s && s.includes(";")
                        ? (t[a] = s.split(";"))
                        : (t[a] = s);
                      break;
                    case "crossOriginMedia":
                      t.crossOriginMedia = [
                        "anonymous",
                        "use-credentials",
                      ].includes(s)
                        ? s
                        : null;
                      break;
                    default:
                      t[a] = s;
                  }
                }
              },
              languages(t, { uiLanguage: e, dataLanguage: a }) {
                (t.dataLanguage = a || null), (t.uiLanguage = e || null);
              },
              setQueryParameter(t, { type: e, key: a, value: r }) {
                (e = `${e}QueryParameters`),
                  "undefined" === typeof r
                    ? s.ZP["delete"](t[e], a)
                    : s.ZP.set(t[e], a, r);
              },
              setRequestHeader(t, { key: e, value: a }) {
                "undefined" === typeof a
                  ? s.ZP["delete"](t.requestHeaders, e)
                  : s.ZP.set(t.requestHeaders, e, a);
              },
              requestAuth(t, e) {
                "function" === typeof e ? t.doAuth.push(e) : (t.doAuth = []);
              },
              setAuthData(t, e) {
                t.authData = e;
              },
              openCollapsible(t, { type: e, uid: a }) {
                const s = t.stateQueryParameters[e].indexOf(a);
                -1 === s && t.stateQueryParameters[e].push(a);
              },
              state(t, e) {
                t.stateQueryParameters = e;
              },
              closeCollapsible(t, { type: e, uid: a }) {
                const r = t.stateQueryParameters[e].indexOf(a);
                r > -1 && s.ZP["delete"](t.stateQueryParameters[e], r);
              },
              updateLoading(t, { url: e, show: a, loadApi: r }) {
                let i = t.database[e];
                s.ZP.set(i, "show", a || i.show),
                  s.ZP.set(i, "loadApi", r || i.loadApi);
              },
              loading(t, { url: e, loading: a }) {
                s.ZP.set(t.database, e, a), a.show && (t.url = e);
              },
              loaded(t, { url: e, data: a }) {
                s.ZP.set(t.database, e, Bt(t, a));
              },
              clear(t, e) {
                s.ZP["delete"](t.database, e);
              },
              resetCatalog(e, s) {
                Object.assign(e, r()),
                  Object.assign(e, a()),
                  e.supportedLocales.includes(e.locale) ||
                    (e.locale = t.locale),
                  s &&
                    ((e.catalogUrl = t.catalogUrl),
                    (e.catalogTitle = t.catalogTitle),
                    (e.database = {}));
              },
              resetPage(t) {
                Object.assign(t, a());
              },
              showPage(t, { url: e, title: a, description: s, stac: r }) {
                if (
                  (r || (r = t.database[e] || null),
                  (t.url = e || null),
                  (t.data = r instanceof T.Z ? r : null),
                  (t.valid = null),
                  (t.description = s),
                  a)
                )
                  t.title = a;
                else if (
                  ((t.title = T.Z.getDisplayTitle(t.data, t.catalogTitle)),
                  t.data)
                ) {
                  let e = t.data.getMetadata("description");
                  A.ZP.hasText(e) && (t.description = e);
                }
                if (t.data) {
                  let e = t.data.isItem() ? t.data.properties : t.data,
                    a = Array.isArray(e.languages) ? e.languages.slice() : [];
                  A.ZP.isObject(e.language) && a.unshift(e.language),
                    (t.dataLanguages = a.filter(
                      (t) => A.ZP.isObject(t) && "string" === typeof t.code
                    ));
                }
              },
              errored(t, { url: e, error: a }) {
                a instanceof Error || (a = new Error(a)),
                  s.ZP.set(t.database, e, a);
              },
              valid(t, e) {
                t.valid = e;
              },
              queue(t, e) {
                t.queue.push(e);
              },
              unqueue(t, e) {
                let a = t.queue.indexOf(e);
                -1 !== a && t.queue.splice(a, 1);
              },
              removeFromQueue(t, e) {
                t.queue.splice(0, e);
              },
              setConformanceClasses(t, e) {
                Array.isArray(e) && (t.conformsTo = e);
              },
              setApiItemsLink(t, e) {
                t.apiItemsLink = e;
              },
              toggleApiItemsLoading(t, e = "") {
                t.apiItemsLoading[e]
                  ? s.ZP["delete"](t.apiItemsLoading, e)
                  : s.ZP.set(t.apiItemsLoading, e, !0);
              },
              setApiItems(t, { data: e, stac: a, show: s }) {
                if (!A.ZP.isObject(e) || !Array.isArray(e.features)) return;
                let r = e.features.map((e) => Bt(t, e));
                s && (t.apiItems = r);
                let i = A.ZP.getLinksWithRels(e.links, At.X6),
                  n = {};
                for (let o of i) {
                  let t = "previous" === o.rel ? "prev" : o.rel;
                  n[t] = o;
                }
                s && (t.apiItemsPagination = n),
                  a instanceof T.Z && a.setApiData(r, n.next, n.prev);
              },
              addApiCollections(t, { data: e, stac: a, show: s }) {
                if (!A.ZP.isObject(e) || !Array.isArray(e.collections)) return;
                let r = e.collections.map((e) => Bt(t, e)),
                  i = A.ZP.getLinkWithRel(e.links, "next");
                s &&
                  ((t.nextCollectionsLink = i),
                  (t.apiCollections = t.apiCollections.concat(r))),
                  a instanceof T.Z && a.setApiData(r, i);
              },
              resetApiItems(t) {
                (t.apiItems = []), (t.apiItemsPagination = {});
              },
              parents(t, e) {
                t.parents = e;
              },
              showGlobalError(t, e) {
                console.error(e), (t.globalError = e);
              },
              addQueryables(t, e) {
                A.ZP.isObject(e) && A.ZP.isObject(e.properties)
                  ? (t.queryables = Object.entries(e.properties).map(
                      ([t, e]) => new St(t, e)
                    ))
                  : (t.queryables = []);
              },
            },
            actions: {
              async switchLocale(t, { locale: e, userSelected: a }) {
                if (
                  (t.commit("config", { locale: e }), t.state.storeLocale && a)
                )
                  try {
                    window.localStorage.setItem("locale", e);
                  } catch (o) {
                    console.log(o);
                  }
                let s = (0, Et.Si)(
                    t.state.supportedLocales,
                    e,
                    t.state.fallbackLocale
                  ),
                  r = t.state.dataLanguages.map((t) => t.code),
                  i =
                    t.state.dataLanguages.length > 0
                      ? t.state.dataLanguages[0].code
                      : s,
                  n = (0, Et.Si)(r, e, i);
                t.commit("languages", { dataLanguage: n, uiLanguage: s }),
                  t.commit("setQueryParameter", {
                    type: "state",
                    key: "language",
                    value: e,
                  });
              },
              async setAuth(t, e) {
                A.ZP.hasText(e) || (e = null), t.commit("setAuthData", e);
                let a = t.state.authConfig,
                  s = a.key;
                e &&
                  ("Bearer" === a.formatter
                    ? (e = `Bearer ${e}`)
                    : "function" === typeof a.formatter &&
                      (e = a.formatter(e))),
                  A.ZP.hasText(e) || (e = void 0),
                  "query" === a.type
                    ? t.commit("setQueryParameter", {
                        type: "private",
                        key: s,
                        value: e,
                      })
                    : "header" === a.type &&
                      t.commit("setRequestHeader", { key: s, value: e });
              },
              async loadBackground(t, e) {
                let a = t.state.queue.slice(0, e);
                if (a.length > 0) {
                  let s = [];
                  for (let e of a) s.push(t.dispatch("load", { url: e }));
                  return t.commit("removeFromQueue", e), await Promise.all(s);
                }
              },
              async loadParents(t) {
                if (!(t.state.data instanceof T.Z))
                  return void t.commit("parents", []);
                let e = [],
                  a = t.state.data;
                while (a) {
                  let s =
                    a.getLinkWithRel("parent") || a.getLinkWithRel("root");
                  if (!s) break;
                  let r = A.ZP.toAbsolute(s.href, a.getAbsoluteUrl());
                  await t.dispatch("load", { url: r, loadApi: !0 });
                  let i = t.getters.getStac(r, !0);
                  if (i instanceof Error) return void t.commit("parents", i);
                  if (i === a) break;
                  e.push(i), (a = i);
                }
                t.commit("parents", e);
              },
              async load(t, a) {
                let s,
                  {
                    url: r,
                    fromBrowser: i,
                    show: n,
                    loadApi: o,
                    loadRoot: l,
                    force: c,
                  } = a;
                i
                  ? ((s = r.startsWith("/") ? r : "/" + r),
                    (r = t.getters.fromBrowserPath(r)))
                  : ((r = A.ZP.toAbsolute(r, t.state.url)),
                    (s = t.getters.toBrowserPath(r))),
                  l ||
                    "/" === s ||
                    !t.state.catalogUrl ||
                    t.getters.getStac(t.state.catalogUrl) ||
                    (await t.dispatch("load", {
                      url: t.state.catalogUrl,
                      loadApi: !0,
                      loadRoot: !0,
                    })),
                  c && t.commit("clear", r);
                let u = new $t(n, o),
                  d = t.state.database[r];
                if (d instanceof $t)
                  t.commit("updateLoading", { url: r, show: n, loadApi: o });
                else {
                  if (!d || (d instanceof T.Z && d.isPotentiallyIncomplete())) {
                    t.commit("loading", { url: r, loading: u });
                    try {
                      let a = await Ot(t, r);
                      if (!A.ZP.isObject(a.data))
                        throw new A.vV(O.ZP.t("errors.invalidJsonObject"));
                      if (((d = new T.Z(a.data, r, s)), n)) {
                        let a = d.getLocaleLink(t.state.dataLanguage);
                        if (a)
                          return void e.replace(
                            t.getters.toBrowserPath(a.href)
                          );
                      }
                      if (
                        (t.commit("loaded", { url: r, data: d }),
                        !t.getters.root)
                      ) {
                        let e = d.getLinkWithRel("root");
                        e &&
                          t.commit("config", {
                            catalogUrl: A.ZP.toAbsolute(e.href, r),
                          });
                      }
                      let i = d.getStacLinkWithRel("conformance");
                      Array.isArray(d.conformsTo) && d.conformsTo.length > 0
                        ? t.commit("setConformanceClasses", d.conformsTo)
                        : i && (await t.dispatch("loadOgcApiConformance", i));
                    } catch (h) {
                      if (t.state.authConfig && Mt(h))
                        return (
                          t.commit("clear", r),
                          void t.commit("requestAuth", () =>
                            t.dispatch("load", a)
                          )
                        );
                      console.error(h),
                        t.commit("errored", { url: r, error: h });
                    }
                  }
                  if (u.loadApi && d instanceof T.Z) {
                    if (d.getApiCollectionsLink()) {
                      let e = { stac: d, show: u.show };
                      try {
                        await t.dispatch("loadNextApiCollections", e);
                      } catch (h) {
                        t.state.authConfig && Mt(h)
                          ? t.commit("requestAuth", () =>
                              t.dispatch("loadNextApiCollections", e)
                            )
                          : t.commit("showGlobalError", {
                              message: O.ZP.t(
                                "errors.loadApiCollectionsFailed"
                              ),
                              error: h,
                            });
                      }
                    }
                    if (d.getApiItemsLink()) {
                      let e = { stac: d, show: u.show };
                      try {
                        await t.dispatch("loadApiItems", e);
                      } catch (h) {
                        t.state.authConfig && Mt(h)
                          ? t.commit("requestAuth", () =>
                              t.dispatch("loadApiItems", e)
                            )
                          : t.commit("showGlobalError", {
                              message: O.ZP.t("errors.loadApiItemsFailed"),
                              error: h,
                            });
                      }
                    }
                  }
                  u.show && t.commit("showPage", { url: r });
                }
              },
              async loadApiItems(t, { link: e, stac: a, show: s, filters: r }) {
                let i = a instanceof T.Z ? a.id : "";
                t.commit("toggleApiItemsLoading", i);
                try {
                  let n = t.state.url;
                  a instanceof T.Z &&
                    ((e = a.getApiItemsLink()), (n = a.getAbsoluteUrl())),
                    A.ZP.isObject(r) || (r = {}),
                    "number" !== typeof r.limit &&
                      (r.limit = t.state.itemsPerPage),
                    (e = A.ZP.addFiltersToLink(e, r));
                  let o = await Ot(t, e);
                  if (A.ZP.isObject(o.data) && Array.isArray(o.data.features))
                    return (
                      (o.data.features = o.data.features
                        .map((e) => {
                          try {
                            if (!A.ZP.isObject(e) || "Feature" !== e.type)
                              return null;
                            let s,
                              r = A.ZP.getLinkWithRel(e.links, "self");
                            if (null !== r && void 0 !== r && r.href)
                              s = A.ZP.toAbsolute(r.href, n);
                            else {
                              if ("undefined" === typeof e.id) return null;
                              {
                                var a;
                                let r =
                                  null === (a = t.getters.root) || void 0 === a
                                    ? void 0
                                    : a.getApiCollectionsLink();
                                if (n) s = A.ZP.toAbsolute(`items/${e.id}`, n);
                                else if (r)
                                  s = A.ZP.toAbsolute(
                                    `${i}/items/${e.id}`,
                                    r.href
                                  );
                                else {
                                  if (!t.state.catalogUrl) return null;
                                  s = A.ZP.toAbsolute(
                                    `collections/${i}/items/${e.id}`,
                                    t.state.catalogUrl
                                  );
                                }
                              }
                            }
                            let o = t.getters.getStac(s);
                            return (
                              o ||
                              ((o = new T.Z(e, s, t.getters.toBrowserPath(s))),
                              o.markPotentiallyIncomplete(),
                              t.commit("loaded", { data: o, url: s }),
                              o)
                            );
                          } catch (s) {
                            return console.error(s), null;
                          }
                        })
                        .filter((t) => t instanceof T.Z)),
                      s && t.commit("setApiItemsLink", e),
                      t.commit("setApiItems", {
                        data: o.data,
                        stac: a,
                        show: s,
                      }),
                      t.commit("toggleApiItemsLoading", i),
                      o
                    );
                  throw new A.vV(O.ZP.t("errors.invalidStacItems"));
                } catch (n) {
                  throw (t.commit("toggleApiItemsLoading", i), n);
                }
              },
              async loadNextApiCollections(t, { stac: e, show: a }) {
                let s;
                if (e) {
                  if (t.state.apiCollections.length > 0) return;
                  s = e.getLinkWithRel("data");
                } else (e = t.state.data), (s = t.state.nextCollectionsLink);
                if (!s) return;
                let r = await Ot(t, s);
                if (
                  !A.ZP.isObject(r.data) ||
                  !Array.isArray(r.data.collections)
                )
                  throw new A.vV(O.ZP.t("errors.invalidStacCollections"));
                (r.data.collections = r.data.collections.map((a) => {
                  let s,
                    r = A.ZP.getLinkWithRel(a.links, "self");
                  s =
                    null !== r && void 0 !== r && r.href
                      ? A.ZP.toAbsolute(
                          r.href,
                          t.state.url || e.getAbsoluteUrl()
                        )
                      : A.ZP.toAbsolute(
                          `collections/${a.id}`,
                          t.state.catalogUrl || e.getAbsoluteUrl()
                        );
                  let i = t.getters.getStac(s);
                  return (
                    i ||
                    ((i = new T.Z(a, s, t.getters.toBrowserPath(s))),
                    i.markPotentiallyIncomplete(),
                    t.commit("loaded", { data: i, url: s }),
                    i)
                  );
                })),
                  t.commit("addApiCollections", {
                    data: r.data,
                    stac: e,
                    show: a,
                  });
              },
              async loadOgcApiConformance(t, e) {
                let a = await Ot(t, e);
                A.ZP.isObject(a.data) &&
                  Array.isArray(a.data.conformsTo) &&
                  t.commit("setConformanceClasses", a.data.conformsTo);
              },
              async loadQueryables(t, { stac: e, refParser: a = null }) {
                let s;
                try {
                  let i = e
                      .getLinksWithRels(At.tQ)
                      .find((t) => A.ZP.isMediaType(t.type, A.G$, !0)),
                    n = A.ZP.isObject(i)
                      ? i.href
                      : A.ZP.toAbsolute("queryables", e.getAbsoluteUrl()),
                    o = await Ot(t, n);
                  if (((s = o.data), a))
                    try {
                      s = await a.dereference(s);
                    } catch (r) {
                      console.error(r);
                    }
                } catch (r) {
                  console.log("Queryables not supported by API");
                }
                t.commit("addQueryables", s);
              },
              async loadGeoJson(t, e) {
                try {
                  let a = await Ot(t, e);
                  return a.data;
                } catch (a) {
                  return null;
                }
              },
              async retryAfterAuth(t) {
                let e = (e) =>
                  t.commit("showGlobalError", {
                    error: e,
                    message: O.ZP.t("errors.authFailed"),
                  });
                for (let s of t.state.doAuth)
                  try {
                    let t = s();
                    t instanceof Promise && t.catch(e);
                  } catch (a) {
                    e(a);
                  }
              },
              async validate(t, e) {
                if ("boolean" !== typeof t.state.valid)
                  try {
                    var a, s;
                    let r = $()("https://api.staclint.com/url");
                    r.addSearch("stac_url", e);
                    let i = await Ct.Z.get(r.toString());
                    t.commit(
                      "valid",
                      Boolean(
                        null === (a = i.data) ||
                          void 0 === a ||
                          null === (s = a.body) ||
                          void 0 === s
                          ? void 0
                          : s.valid_stac
                      )
                    );
                  } catch (r) {
                    t.commit("valid", r);
                  }
              },
            },
          });
        }
        var Dt = Ft,
          Rt = a(4063),
          qt = a(3800),
          zt = a(1869),
          Nt = a(2026),
          Wt = a(2926),
          Vt = a(8824),
          Qt = a(1899),
          Ht = a(1067),
          Gt = a(8290),
          Yt =
            (a(7024),
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "b-row",
                [
                  e(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      e("Source", {
                        staticClass: "float-right",
                        attrs: {
                          title: t.title,
                          stacUrl: t.url,
                          stacVersion: t.stacVersion,
                        },
                      }),
                      e(
                        "h1",
                        [
                          t.icon
                            ? [
                                e("img", {
                                  staticClass: "icon mr-2",
                                  attrs: {
                                    src: t.icon.href,
                                    alt: t.icon.title,
                                    title: t.icon.title,
                                  },
                                }),
                              ]
                            : t._e(),
                          e("span", { staticClass: "title" }, [
                            t._v(t._s(t.title)),
                          ]),
                        ],
                        2
                      ),
                      t.url || t.isSearchPage()
                        ? e(
                            "p",
                            { staticClass: "lead" },
                            [
                              t.containerLink
                                ? e("i18n", {
                                    staticClass: "in mr-3",
                                    attrs: { tag: "span", path: "in" },
                                    scopedSlots: t._u(
                                      [
                                        {
                                          key: "catalog",
                                          fn: function () {
                                            return [
                                              e("StacLink", {
                                                attrs: {
                                                  data: t.containerLink,
                                                },
                                              }),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !1,
                                      1458487365
                                    ),
                                  })
                                : t._e(),
                              e(
                                "b-button-group",
                                [
                                  t.parentLink
                                    ? e(
                                        "b-button",
                                        {
                                          attrs: {
                                            to: t.toBrowserPath(
                                              t.parentLink.href
                                            ),
                                            title: t.parentLinkTitle,
                                            variant: "outline-primary",
                                            size: "sm",
                                          },
                                        },
                                        [
                                          e("b-icon-arrow-90deg-up"),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "button-label prio",
                                            },
                                            [
                                              t._v(
                                                t._s(t.$t("goToParent.label"))
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                  t.collectionLink
                                    ? e(
                                        "b-button",
                                        {
                                          attrs: {
                                            to: t.toBrowserPath(
                                              t.collectionLink.href
                                            ),
                                            title: t.collectionLinkTitle,
                                            variant: "outline-primary",
                                            size: "sm",
                                          },
                                        },
                                        [
                                          e("b-icon-folder-symlink"),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "button-label prio",
                                            },
                                            [
                                              t._v(
                                                t._s(
                                                  t.$t("goToCollection.label")
                                                )
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                  e(
                                    "b-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-toggle",
                                          rawName: "v-b-toggle.sidebar",
                                          modifiers: { sidebar: !0 },
                                        },
                                      ],
                                      attrs: {
                                        variant: "outline-primary",
                                        size: "sm",
                                        title: t.$t("browse"),
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.$emit("enableSidebar");
                                        },
                                      },
                                    },
                                    [
                                      e("b-icon-book"),
                                      t._v(" "),
                                      e(
                                        "span",
                                        { staticClass: "button-label prio" },
                                        [t._v(t._s(t.$t("browse")))]
                                      ),
                                    ],
                                    1
                                  ),
                                  t.searchBrowserLink
                                    ? e(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "outline-primary",
                                            size: "sm",
                                            to: t.searchBrowserLink,
                                            title: t.$t("search.title"),
                                            pressed: t.isSearchPage(),
                                          },
                                        },
                                        [
                                          e("b-icon-search"),
                                          t._v(" "),
                                          e(
                                            "span",
                                            {
                                              staticClass: "button-label prio",
                                            },
                                            [t._v(t._s(t.$t("search.title")))]
                                          ),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                  t.authConfig
                                    ? e(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "outline-primary",
                                            size: "sm",
                                            title: t.$t(
                                              "authentication.button.title"
                                            ),
                                          },
                                          on: { click: t.auth },
                                        },
                                        [
                                          t.authData
                                            ? [
                                                e("b-icon-lock"),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "button-label",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.$t(
                                                          "authentication.button.authenticated"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            : [
                                                e("b-icon-unlock"),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "button-label",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.$t(
                                                          "authentication.button.authenticate"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ],
                                        ],
                                        2
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    1
                  ),
                ],
                1
              );
            }),
          Jt = [],
          Kt = a(5995),
          Xt = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "share mt-1" },
              [
                e(
                  "b-button-group",
                  [
                    t.stacUrl
                      ? e(
                          "b-button",
                          {
                            attrs: {
                              size: "sm",
                              variant: "outline-primary",
                              id: "popover-link",
                              title: t.$t("source.detailsAboutSource"),
                            },
                          },
                          [
                            e("b-icon-link"),
                            t._v(" "),
                            e("span", { staticClass: "button-label" }, [
                              t._v(t._s(t.$t("source.label"))),
                            ]),
                          ],
                          1
                        )
                      : t._e(),
                    e(
                      "b-button",
                      {
                        attrs: {
                          size: "sm",
                          variant: "outline-primary",
                          id: "popover-share",
                          title: t.$t("source.share.withOthers"),
                        },
                      },
                      [
                        e("b-icon-share"),
                        t._v(" "),
                        e("span", { staticClass: "button-label" }, [
                          t._v(t._s(t.$t("source.share.label"))),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "b-dropdown",
                      {
                        attrs: {
                          size: "sm",
                          variant: "outline-primary",
                          right: "",
                          title: t.$t("source.language.switch"),
                        },
                        scopedSlots: t._u([
                          {
                            key: "button-content",
                            fn: function () {
                              return [
                                e("b-icon-flag"),
                                t._v(" "),
                                e("span", { staticClass: "button-label" }, [
                                  t._v(
                                    t._s(
                                      t.$t("source.language.label", {
                                        currentLanguage: t.currentLanguage,
                                      })
                                    )
                                  ),
                                ]),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      t._l(t.languages, function (a) {
                        return e(
                          "b-dropdown-item",
                          {
                            key: a.code,
                            staticClass: "lang-item",
                            on: {
                              click: function (e) {
                                return t.switchLocale({
                                  locale: a.code,
                                  userSelected: !0,
                                });
                              },
                            },
                          },
                          [
                            t.locale === a.code
                              ? e("b-icon-check")
                              : e("b-icon-blank"),
                            e(
                              "span",
                              { staticClass: "title" },
                              [
                                t._v(" " + t._s(a.native) + " "),
                                a.global && a.global !== a.native
                                  ? [t._v(" / " + t._s(a.global))]
                                  : t._e(),
                              ],
                              2
                            ),
                            !t.supportsLanguageExt || (a.ui && a.data)
                              ? t._e()
                              : e("b-icon-exclamation-triangle", {
                                  staticClass: "ml-2",
                                  attrs: {
                                    title: a.ui
                                      ? t.$t("source.language.onlyUI")
                                      : t.$t("source.language.onlyData"),
                                  },
                                }),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                t.stacUrl
                  ? e(
                      "b-popover",
                      {
                        attrs: {
                          target: "popover-link",
                          triggers: "focus",
                          placement: "bottom",
                          container: "stac-browser",
                          title: t.$t("source.title"),
                        },
                        on: { show: t.validate },
                      },
                      [
                        t.stacVersion
                          ? [
                              e(
                                "b-row",
                                [
                                  e("b-col", { attrs: { cols: "2" } }, [
                                    t._v(t._s(t.$t("source.stacVersion"))),
                                  ]),
                                  e("b-col", [t._v(t._s(t.stacVersion))]),
                                ],
                                1
                              ),
                              t.canValidate
                                ? e(
                                    "b-row",
                                    [
                                      e("b-col", { attrs: { cols: "2" } }, [
                                        t._v(t._s(t.$t("source.valid"))),
                                      ]),
                                      e(
                                        "b-col",
                                        [
                                          null === t.valid
                                            ? e("b-spinner", {
                                                attrs: {
                                                  label:
                                                    t.$t("source.validating"),
                                                  small: "",
                                                },
                                              })
                                            : !0 === t.valid
                                            ? [t._v("✔️")]
                                            : !1 === t.valid
                                            ? [t._v("❌")]
                                            : [
                                                t._v(
                                                  "$t('source.validationNA')"
                                                ),
                                              ],
                                        ],
                                        2
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              e("hr"),
                            ]
                          : t._e(),
                        e("Url", {
                          attrs: {
                            id: "stacUrl",
                            url: t.stacUrl,
                            label: t.$t("source.locatedAt"),
                          },
                        }),
                      ],
                      2
                    )
                  : t._e(),
                e(
                  "b-popover",
                  {
                    attrs: {
                      target: "popover-share",
                      triggers: "focus",
                      placement: "bottom",
                      container: "stac-browser",
                      title: t.$t("source.share.title"),
                    },
                  },
                  [
                    e("Url", {
                      attrs: {
                        id: "browserUrl",
                        url: t.browserUrl(),
                        label: t.$t("source.share.sharePageWithOthers"),
                        open: !1,
                      },
                    }),
                    e("hr"),
                    e(
                      "b-button",
                      {
                        staticClass: "twitter mr-1",
                        attrs: { href: t.twitterUrl },
                      },
                      [
                        e("b-icon-twitter"),
                        t._v(" " + t._s(t.$t("source.share.twitter"))),
                      ],
                      1
                    ),
                    e(
                      "b-button",
                      { attrs: { variant: "dark", href: t.mailTo } },
                      [
                        e("b-icon-envelope"),
                        t._v(" " + t._s(t.$t("source.share.email"))),
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
          te = [],
          ee = a(6537),
          ae = a(7379),
          se = a(7450),
          re = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-form-group",
              { attrs: { label: t.label, "label-for": t.id } },
              [
                e(
                  "b-input-group",
                  { attrs: { size: "sm" } },
                  [
                    e("b-form-input", {
                      ref: "input",
                      attrs: { id: t.id, value: t.url, readonly: "" },
                    }),
                    e(
                      "b-input-group-append",
                      [
                        e("CopyButton", {
                          attrs: { copyText: t.url, variant: "primary" },
                        }),
                        t.open
                          ? e(
                              "b-button",
                              {
                                attrs: {
                                  href: t.url,
                                  target: "_blank",
                                  variant: "primary",
                                  title: t.$t("open"),
                                },
                              },
                              [e("b-icon-arrow-up-right-square")],
                              1
                            )
                          : t._e(),
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
          ie = [],
          ne = a(4240),
          oe = a(7353),
          le = a(1317),
          ce = a(2418),
          ue = {
            name: "Share",
            components: {
              BFormGroup: ne.x,
              BFormInput: oe.e,
              BIconArrowUpRightSquare: et.k$g,
              BInputGroup: le.w,
              BInputGroupAppend: ce.B,
              CopyButton: () => a.e(8218).then(a.bind(a, 8218)),
            },
            props: {
              id: { type: String, required: !0 },
              url: { type: String, required: !0 },
              label: { type: String, required: !0 },
              open: { type: Boolean, default: !0 },
            },
          },
          de = ue,
          he = (0, m.Z)(de, re, ie, !1, null, "433de75e", null),
          pe = he.exports;
        const fe =
          "https://stac-extensions.github.io/language/v1.*/schema.json";
        var me = {
            name: "Source",
            components: {
              BDropdown: ee.R,
              BDropdownItem: ae.E,
              BIconBlank: et.GWp,
              BIconCheck: et.PaS,
              BIconEnvelope: et.AzZ,
              BIconExclamationTriangle: et.Sbj,
              BIconFlag: et.G49,
              BIconLink: et.ZV1,
              BIconShare: et.Rq4,
              BIconTwitter: et.A82,
              BPopover: se.x,
              Url: pe,
            },
            props: {
              title: { type: String, required: !0 },
              stacUrl: { type: String, default: null },
              stacVersion: { type: String, default: null },
            },
            computed: {
              ...(0, o.rn)([
                "dataLanguages",
                "locale",
                "privateQueryParameters",
                "supportedLocales",
                "stacLint",
                "stacProxyUrl",
                "uiLanguage",
                "valid",
              ]),
              ...(0, o.Se)(["supportsExtension"]),
              currentLanguage() {
                let t = this.languages.find((t) => t.code === this.locale);
                return t ? t.native : "-";
              },
              canValidate() {
                if (!this.stacLint || "string" !== typeof this.stacUrl)
                  return !1;
                if (A.ZP.size(this.privateQueryParameters) > 0) return !1;
                if (Array.isArray(this.stacProxyUrl)) return !1;
                let t = $()(this.stacUrl),
                  e = t.hostname().toLowerCase();
                return (
                  "localhost" !== e && !e.startsWith("127.") && "::1" !== e
                );
              },
              message() {
                return this.$t("source.share.message", {
                  title: this.title,
                  url: this.browserUrl(),
                });
              },
              twitterUrl() {
                let t = encodeURIComponent(this.message);
                return `https://twitter.com/intent/tweet?text=${t}`;
              },
              mailTo() {
                let t = encodeURIComponent(this.title),
                  e = encodeURIComponent(this.message);
                return `mailto:?subject=${t}&body=${e}`;
              },
              supportsLanguageExt() {
                return this.supportsExtension(fe);
              },
              languages() {
                let t = [];
                for (let e of this.supportedLocales)
                  t.push({
                    code: e,
                    native: this.$t(`languages.${e}.native`),
                    global: this.$t(`languages.${e}.global`),
                    ui: !0,
                  });
                for (let e of this.dataLanguages) {
                  if (
                    !A.ZP.isObject(e) ||
                    !e.code ||
                    this.supportedLocales.includes(e.code)
                  )
                    continue;
                  let a = { code: e.code };
                  (a.native = e.name || e.alternate || e.code),
                    (a.global = e.alternate || e.name || e.code),
                    (a.data = !0),
                    t.push(a);
                }
                if (this.supportsExtension(fe)) {
                  const e = (0, Et.xI)(this.supportedLocales),
                    a = (0, Et.xI)(this.dataLanguages.map((t) => t.code));
                  for (let s of t)
                    s.ui || (s.ui = Boolean((0, Et.Si)(e, s.code, null))),
                      s.data || (s.data = Boolean((0, Et.Si)(a, s.code, null)));
                }
                return t.sort((t, e) =>
                  t.global.localeCompare(e.global, this.uiLanguage)
                );
              },
            },
            methods: {
              ...(0, o.nv)(["switchLocale"]),
              async validate() {
                await this.$store.dispatch("validate", this.stacUrl);
              },
              browserUrl() {
                return window.location.toString();
              },
            },
          },
          ge = me,
          be = (0, m.Z)(ge, Xt, te, !1, null, "0106123f", null),
          ye = be.exports,
          ve = {
            name: "StacHeader",
            components: {
              BIconArrow90degUp: et.sDn,
              BIconBook: et.$ek,
              BIconFolderSymlink: et.y5,
              BIconSearch: et.Lln,
              BIconLock: et.MJF,
              BIconUnlock: et.pT1,
              StacLink: Kt["default"],
              Source: ye,
            },
            computed: {
              ...(0, o.rn)([
                "allowSelectCatalog",
                "authConfig",
                "authData",
                "catalogUrl",
                "data",
                "url",
                "title",
              ]),
              ...(0, o.Se)([
                "root",
                "parentLink",
                "collectionLink",
                "toBrowserPath",
              ]),
              stacVersion() {
                var t;
                return null === (t = this.data) || void 0 === t
                  ? void 0
                  : t.stac_version;
              },
              collectionLinkTitle() {
                return this.collectionLink &&
                  A.ZP.hasText(this.collectionLink.title)
                  ? this.$t(
                      "goToCollection.descriptionWithTitle",
                      this.collectionLink
                    )
                  : this.$t("goToCollection.description");
              },
              parentLinkTitle() {
                return this.parentLink && A.ZP.hasText(this.parentLink.title)
                  ? this.$t("goToParent.descriptionWithTitle", this.parentLink)
                  : this.$t("goToParent.description");
              },
              icon() {
                if (this.data instanceof T.Z) {
                  let t = this.data.getIcons();
                  if (t.length > 0) return t[0];
                }
                return null;
              },
              searchBrowserLink() {
                let t, e;
                return (
                  this.root && (t = this.root.getSearchLink()),
                  this.data !== this.root &&
                    this.data instanceof T.Z &&
                    (e = this.data.getSearchLink()),
                  e
                    ? `/search${this.data.getBrowserPath()}`
                    : t
                    ? this.allowSelectCatalog
                      ? `/search${this.root.getBrowserPath()}`
                      : "/search"
                    : null
                );
              },
              containerLink() {
                return this.catalogUrl && this.url === this.catalogUrl
                  ? null
                  : this.root
                  ? A.ZP.equalUrl(this.root.getAbsoluteUrl(), this.url)
                    ? null
                    : {
                        href: this.root.getAbsoluteUrl(),
                        rel: "root",
                        title: T.Z.getDisplayTitle(this.root),
                      }
                  : this.collectionLink || this.parentLink;
              },
            },
            methods: {
              isSearchPage() {
                return "search" === this.$router.currentRoute.name;
              },
              auth() {
                this.$store.commit("requestAuth", () =>
                  this.$store.dispatch("load", {
                    url: this.url,
                    loadApi: !0,
                    show: !0,
                    force: !0,
                  })
                );
              },
            },
          },
          we = ve,
          _e = (0, m.Z)(we, Yt, Jt, !1, null, "d2d6115c", null),
          Pe = _e.exports,
          Le = a(8713),
          Ce = a.n(Le);
        s.ZP.use(Rt.F),
          s.ZP.use(qt.d),
          s.ZP.use(zt.SY),
          s.ZP.use(Nt.T),
          s.ZP.use(Wt.xL),
          s.ZP.use(Vt.A6),
          s.ZP.use(Qt.s),
          s.ZP.directive("b-toggle", Ht.M),
          s.ZP.directive("b-visible", Gt.z),
          s.ZP.use(n.ZP);
        const Ae = new n.ZP({
          mode: l.Z.historyMode,
          base: l.Z.pathPrefix,
          routes: Lt(l.Z),
        });
        Ae.beforeEach((t, e, a) => {
          window.parent.postMessage({ navigate: t.path }, "*"), a();
        }),
          s.ZP.use(o.ZP);
        const ke = Dt(l.Z, Ae);
        let xe = {},
          Ze = {};
        for (let Ie in l.Z)
          (xe[Ie] = {
            default: ["object", "function"].includes(typeof l.Z[Ie])
              ? () => l.Z[Ie]
              : l.Z[Ie],
          }),
            (Ze[Ie] = {
              immediate: !0,
              handler: function (t) {
                this.$store.commit("config", { [Ie]: t });
              },
            });
        var Te = {
            name: "StacBrowser",
            router: Ae,
            store: ke,
            components: {
              Authentication: () => a.e(1364).then(a.bind(a, 1364)),
              ErrorAlert: b,
              Sidebar: () => a.e(8762).then(a.bind(a, 8762)),
              StacHeader: Pe,
            },
            props: { ...xe },
            data() {
              return { sidebar: !1, error: null, onDataLoaded: null };
            },
            computed: {
              ...(0, o.rn)([
                "allowSelectCatalog",
                "data",
                "dataLanguage",
                "description",
                "doAuth",
                "globalError",
                "stateQueryParameters",
                "title",
                "uiLanguage",
                "url",
              ]),
              ...(0, o.rn)({
                catalogUrlFromVueX: "catalogUrl",
                detectLocaleFromBrowserFromVueX: "detectLocaleFromBrowser",
                fallbackLocaleFromVueX: "fallbackLocale",
                supportedLocalesFromVueX: "supportedLocales",
                storeLocaleFromVueX: "storeLocale",
              }),
              ...(0, o.Se)([
                "displayCatalogTitle",
                "fromBrowserPath",
                "isExternalUrl",
                "root",
                "supportsConformance",
                "toBrowserPath",
              ]),
              browserVersion() {
                return "3.0.1";
              },
            },
            watch: {
              ...Ze,
              title(t) {
                document.title = t;
              },
              description(t) {
                let e = document.getElementById("meta-description");
                e && e.setAttribute("content", A.ZP.summarizeMd(t, 200));
              },
              uiLanguage: {
                immediate: !0,
                async handler(t) {
                  t &&
                    ((Ce().locales = [t]),
                    (Ce().translate = O.Cy),
                    await (0, O.EV)(t),
                    (this.$root.$i18n.locale = t),
                    document.documentElement.setAttribute("lang", t));
                },
              },
              dataLanguage: {
                immediate: !0,
                async handler(t) {
                  if (t && this.data instanceof T.Z) {
                    let e = this.data.getLocaleLink(t);
                    if (e) {
                      let t = Object.assign({}, this.stateQueryParameters);
                      this.$router.push(this.toBrowserPath(e.href)),
                        this.$store.commit("state", t);
                    } else if (this.supportsConformance(O.Mk)) {
                      let t = this.url;
                      this.$store.commit("resetCatalog", !0),
                        await this.$store.dispatch("load", {
                          url: t,
                          loadApi: !0,
                          show: !0,
                        });
                    }
                  }
                },
              },
              catalogUrlFromVueX(t) {
                t && this.$store.dispatch("load", { url: t, loadApi: !0 });
              },
              stateQueryParameters: {
                deep: !0,
                handler() {
                  let t = {};
                  for (const [e, a] of Object.entries(this.$route.query))
                    e.startsWith(".") || (t[e] = a);
                  for (const [e, a] of Object.entries(
                    this.stateQueryParameters
                  )) {
                    let s = `.${e}`;
                    Array.isArray(a)
                      ? a.length > 0 && (t[s] = a.join(","))
                      : null !== a && (t[s] = a);
                  }
                  t.external
                    ? this.$router.replace(`/external/${t.external}`)
                    : this.$router.replace({ query: t }).catch((t) => {
                        if (
                          !n.ZP.isNavigationFailure(
                            t,
                            n.ZP.NavigationFailureType.duplicated
                          )
                        )
                          throw Error(t);
                      });
                },
              },
              root(t, e) {
                const a = [
                  "apiCatalogPriority",
                  "authConfig",
                  "cardViewMode",
                  "crossOriginMedia",
                  "defaultThumbnailSize",
                  "displayGeoTiffByDefault",
                  "showThumbnailsAsAssets",
                  "stacLint",
                ];
                let s = !t || (e && A.ZP.isObject(e["stac_browser"])),
                  r = t && A.ZP.isObject(t["stac_browser"]);
                for (let i of a) {
                  let e;
                  s && (e = l.Z[i]),
                    r &&
                      "undefined" !== typeof t["stac_browser"][i] &&
                      (e = t["stac_browser"][i]),
                    ("stacLint" !== i || l.Z.stacLint) &&
                      "undefined" !== typeof e &&
                      this.$store.commit("config", { [i]: e });
                }
              },
              data(t) {
                this.onDataLoaded && t instanceof T.Z && this.onDataLoaded();
              },
            },
            created() {
              this.$router.onReady(() => {
                this.detectLocale(), this.parseQuery(this.$route);
              }),
                this.$router.afterEach((t, e) => {
                  if (t.path === e.path) return;
                  let a = "resetPage";
                  if (this.allowSelectCatalog && t.path) {
                    let e = this.fromBrowserPath(t.path);
                    this.isExternalUrl(e) && (a = "resetCatalog");
                  }
                  this.$store.commit(a), this.parseQuery(t);
                });
            },
            mounted() {
              this.$root.$on("error", this.showError),
                setInterval(
                  () => this.$store.dispatch("loadBackground", 3),
                  200
                );
            },
            methods: {
              ...(0, o.nv)(["switchLocale"]),
              detectLocale() {
                let t;
                if (this.storeLocaleFromVueX)
                  try {
                    t = window.localStorage.getItem("locale");
                  } catch (e) {
                    console.log(e);
                  }
                if (
                  !t &&
                  this.detectLocaleFromBrowserFromVueX &&
                  Array.isArray(navigator.languages)
                ) {
                  const e = (0, Et.xI)(this.supportedLocalesFromVueX);
                  for (let a of navigator.languages) {
                    const s = (0, Et.Si)(e, a, null);
                    if (s) {
                      t = s;
                      break;
                    }
                  }
                }
                t &&
                  this.supportedLocalesFromVueX.includes(t) &&
                  (this.switchLocale({ locale: t }),
                  this.data ||
                    (this.onDataLoaded = () => {
                      this.switchLocale({ locale: t }),
                        (this.onDataLoaded = null);
                    }));
              },
              parseQuery(t) {
                var e;
                let a = {};
                if ("history" === this.historyMode) {
                  let e = $()(t.hash.replace(/^#/, ""));
                  a = e.query(!0);
                }
                let s = Object.assign({}, t.query, a),
                  r = {};
                for (let i in s) {
                  let t = s[i];
                  if (i.startsWith("~"))
                    (r.private = A.ZP.isObject(r.private) ? r.private : {}),
                      (r.private[i.substr(1)] = t),
                      delete s[i];
                  else if (i.startsWith(".")) {
                    let e = i.substr(1);
                    (r.state = A.ZP.isObject(r.state) ? r.state : {}),
                      Array.isArray(this.stateQueryParameters[e]) &&
                        !Array.isArray(t) &&
                        (t = t.split(",")),
                      (r.state[e] = t);
                  } else
                    A.ZP.isObject(r.localRequest) || (r.localRequest = {}),
                      (r.localRequest[i] = t);
                }
                if (A.ZP.size(r) > 0)
                  for (let i in r)
                    for (let t in r[i])
                      this.$store.commit("setQueryParameter", {
                        type: i,
                        key: t,
                        value: r[i][t],
                      });
                null !== r &&
                  void 0 !== r &&
                  null !== (e = r.state) &&
                  void 0 !== e &&
                  e.language &&
                  this.switchLocale({ locale: r.state.language }),
                  A.ZP.size(r.private) > 0 &&
                    this.$router.replace({ query: s });
              },
              showError(t, e) {
                this.$store.commit("showGlobalError", { error: t, message: e });
              },
              hideError() {
                this.$store.commit("showGlobalError", null);
              },
            },
          },
          Se = Te,
          $e = (0, m.Z)(Se, r, i, !1, null, null, null),
          Oe = $e.exports;
        function je() {
          return (0, O._j)().then(() =>
            new s.ZP({ i18n: O.ZP, render: (t) => t(Oe) }).$mount(
              "#stac-browser"
            )
          );
        }
        (s.ZP.config.productionTip = !1), je();
      },
      6837: function (t, e, a) {
        "use strict";
        a.d(e, {
          H0: function () {
            return h;
          },
          Y: function () {
            return c;
          },
          ZP: function () {
            return n;
          },
          gT: function () {
            return d;
          },
          lA: function () {
            return l;
          },
          pY: function () {
            return u;
          },
          y2: function () {
            return o;
          },
        });
        var s = a(6318),
          r = a(1259),
          i = a(52);
        class n extends i.Z {
          constructor(t, e = null, a = null) {
            super(t, [e, a]);
          }
          clone(t) {
            return new this.constructor(this.operator, this.args[0], t);
          }
          static create(t, e, a) {
            return ["=", "==", "==="].includes(e)
              ? new o(t, a)
              : ["<>", "!=", "!=="].includes(e)
              ? new l(t, a)
              : ">=" === e
              ? new u(t, a)
              : ">" === e
              ? new c(t, a)
              : "<=" === e
              ? new h(t, a)
              : "<" === e
              ? new d(t, a)
              : void 0;
          }
        }
        class o extends n {
          constructor(t = null, e = null) {
            super(o.SYMBOL, t, e);
          }
          static get longLabel() {
            return r.ZP.t("search.equalTo");
          }
        }
        (0, s.Z)(o, "SYMBOL", "=");
        class l extends n {
          constructor(t = null, e = null) {
            super(l.SYMBOL, t, e);
          }
          static get longLabel() {
            return r.ZP.t("search.notEqualTo");
          }
        }
        (0, s.Z)(l, "SYMBOL", "<>");
        class c extends n {
          constructor(t = null, e = null) {
            super(c.SYMBOL, t, e);
          }
          static get longLabel() {
            return r.ZP.t("search.greaterThan");
          }
        }
        (0, s.Z)(c, "SYMBOL", ">");
        class u extends n {
          constructor(t = null, e = null) {
            super(u.SYMBOL, t, e);
          }
          static get longLabel() {
            return r.ZP.t("search.greaterThanEqual");
          }
        }
        (0, s.Z)(u, "SYMBOL", ">=");
        class d extends n {
          constructor(t = null, e = null) {
            super(d.SYMBOL, t, e);
          }
          static get longLabel() {
            return r.ZP.t("search.lessThan");
          }
        }
        (0, s.Z)(d, "SYMBOL", "<");
        class h extends n {
          constructor(t = null, e = null) {
            super(h.SYMBOL, t, e);
          }
          static get longLabel() {
            return r.ZP.t("search.lessThanEqual");
          }
        }
        (0, s.Z)(h, "SYMBOL", "<=");
      },
      52: function (t, e, a) {
        "use strict";
        a.d(e, {
          Z: function () {
            return s;
          },
        });
        class s {
          constructor(t, e = []) {
            (this.operator = t), (this.args = e);
          }
          toText() {
            let t = this.operator.toUpperCase();
            return this.args.map((t) => t.toText()).join(` ${t} `);
          }
          toJSON() {
            return {
              op: this.operator,
              args: this.args.map((t) => t.toJSON()),
            };
          }
          static get description() {
            return "";
          }
          static get label() {
            return this.SYMBOL;
          }
          static get longLabel() {
            return this.label;
          }
        }
      },
      3989: function (t, e, a) {
        "use strict";
        a(7658);
        var s = a(9879),
          r = a(5019),
          i = a.n(r),
          n = a(2846);
        let o = 0;
        class l {
          constructor(t, e, a, s = !0) {
            (this._id = o++),
              (this._url = e),
              (this._path = a),
              (this._apiChildrenListeners = {}),
              (this._incomplete = !1),
              (this._apiChildren = { list: [], prev: !1, next: !1 }),
              s &&
                ("FeatureCollection" === t.type
                  ? (t.features = t.features.map((t) => i().item(t, !1)))
                  : (t = i().stac(t, !1)));
            for (let r in t) "undefined" === typeof this[r] && (this[r] = t[r]);
          }
          isPotentiallyIncomplete() {
            return this._incomplete;
          }
          markPotentiallyIncomplete() {
            this._incomplete = !0;
          }
          isItem() {
            return "Feature" === this.type;
          }
          isCatalog() {
            return "Catalog" === this.type;
          }
          isCatalogLike() {
            return this.isCatalog() || this.isCollection();
          }
          isCollection() {
            return "Collection" === this.type;
          }
          isItemCollection() {
            return "FeatureCollection" === this.type;
          }
          hasApiData() {
            return this._apiChildren.list.length > 0;
          }
          setApiDataListener(t, e = null) {
            "function" === typeof e
              ? (this._apiChildrenListeners[t] = e)
              : delete this._apiChildrenListeners[t];
          }
          setApiData(t, e = null, a = null) {
            a && (this._apiChildren.prev = a),
              e && (this._apiChildren.next = e),
              (this._apiChildren.list = t);
            for (let r in this._apiChildrenListeners)
              try {
                this._apiChildrenListeners[r](this._apiChildren);
              } catch (s) {
                console.log(s);
              }
          }
          getFileFormats() {
            let t = [];
            return (
              (this.isItem() || this.isCollection()) &&
                s.ZP.isObject(this.assets) &&
                (t = t.concat(Object.values(this.assets))),
              this.isCollection() &&
                s.ZP.isObject(this.item_assets) &&
                (t = t.concat(Object.values(this.item_assets))),
              t
                .filter(
                  (t) =>
                    Array.isArray(t.roles) &&
                    t.roles.includes("data") &&
                    "string" === typeof t.type
                )
                .map((t) => t.type)
                .filter((t, e, a) => a.indexOf(t) === e)
            );
          }
          getChildren(t = null) {
            if (!this.isCatalogLike()) return [];
            let e = !t || "collections" === t,
              a = !t || "childs" === t,
              s = [];
            return (
              e && this._apiChildren.prev && s.push(this._apiChildren.prev),
              e &&
                this._apiChildren.list.length > 0 &&
                (s = this._apiChildren.list),
              a &&
                (s = l
                  .addMissingChildren(s, this)
                  .concat(this.getLinksWithRels(["item"]))),
              e && this._apiChildren.next && s.push(this._apiChildren.next),
              s
            );
          }
          static addMissingChildren(t, e) {
            let a = e.getStacLinksWithRel("child").filter((a) => {
              let r = s.ZP.toAbsolute(a.href, e.getAbsoluteUrl());
              return !t.find((t) => t.getAbsoluteUrl() === r);
            });
            return t.concat(a);
          }
          getSearchLink() {
            let t = this.getStacLinksWithRel("search"),
              e = t.find(
                (t) =>
                  s.ZP.hasText(t.method) && "POST" === t.method.toUpperCase()
              );
            return e || t[0] || null;
          }
          getApiCollectionsLink() {
            return this.getStacLinkWithRel("data");
          }
          getApiItemsLink() {
            return this.getStacLinkWithRel("items");
          }
          getMetadata(t) {
            return this.isItem()
              ? this.properties[t]
              : this.isCatalogLike()
              ? this[t]
              : null;
          }
          getBrowserPath() {
            return this._path;
          }
          getAbsoluteUrl() {
            return this._url;
          }
          getLocaleLink(t, e = null) {
            let a,
              r = this.getStacLinksWithRel("alternate").filter((t) =>
                s.ZP.hasText(t.hreflang)
              );
            a = Array.isArray(this.languages)
              ? this.languages.map((t) => t.code)
              : r.map((t) => t.hreflang);
            let i = (0, n.Si)(a, t, e);
            return r.find((t) => t.hreflang === i) || null;
          }
          getStacLinksWithRel(t, e = !0) {
            return s.ZP.getLinksWithRels(this.links, [t]).filter((t) =>
              s.ZP.isStacMediaType(t.type, e)
            );
          }
          getStacLinkWithRel(t, e = !0) {
            const a = this.getStacLinksWithRel(t, e);
            return a.length > 0 ? a[0] : null;
          }
          getLinkWithRel(t) {
            return s.ZP.getLinkWithRel(this.links, t);
          }
          getLinksWithRels(t) {
            return s.ZP.getLinksWithRels(this.links, t);
          }
          getLinksWithOtherRels(t) {
            return s.ZP.getLinksWithOtherRels(this.links, t);
          }
          getAssetsWithRoles(t) {
            let e = [];
            if (s.ZP.isObject(this.assets))
              for (let a in this.assets) {
                let r = this.assets[a];
                s.ZP.isObject(r) &&
                  "string" === typeof r.href &&
                  Array.isArray(r.roles) &&
                  r.roles.find((e) => t.includes(e)) &&
                  e.push(r);
              }
            return e;
          }
          static getDisplayTitle(t, e = null) {
            Array.isArray(t) || (t = [t]);
            let a = t.find((t) => t instanceof l),
              r = t.find((t) => s.ZP.isObject(t) && !(t instanceof l));
            return a && s.ZP.hasText(a.getTitle())
              ? a.getTitle()
              : r && s.ZP.hasText(r.title)
              ? r.title
              : a && s.ZP.hasText(a.id)
              ? a.id
              : s.ZP.hasText(e)
              ? e
              : a
              ? s.ZP.titleForHref(a.getAbsoluteUrl(), !0)
              : r && s.ZP.hasText(r.href)
              ? s.ZP.titleForHref(r.href, !0)
              : "Untitled";
          }
          getTitle() {
            return this.getMetadata("title");
          }
          _linkToAbsolute(t) {
            return Object.assign({}, t, {
              href: s.ZP.toAbsolute(t.href, this.getAbsoluteUrl()),
            });
          }
          getIcons() {
            return this.getLinksWithRels(["icon"])
              .filter((t) => s.ZP.canBrowserDisplayImage(t))
              .map((t) => this._linkToAbsolute(t));
          }
          getThumbnails(t = !1, e = null) {
            let a = this.getAssetsWithRoles(["thumbnail", "overview"]);
            return (
              e &&
                a.length > 1 &&
                a.sort((t) => (t.roles.includes(e) ? -1 : 1)),
              0 === a.length && (a = this.getLinksWithRels(["preview"])),
              0 === a.length &&
                s.ZP.isObject(this.assets) &&
                s.ZP.isObject(this.assets.thumbnail) &&
                (a = [this.assets.thumbnail]),
              t && (a = a.filter((t) => s.ZP.canBrowserDisplayImage(t))),
              a.map((t) => this._linkToAbsolute(t))
            );
          }
          equals(t) {
            return (
              !!s.ZP.isObject(t) &&
              (this === t || (this.id === t.id && this.type == t.type))
            );
          }
        }
        e["Z"] = l;
      },
      4261: function (t, e, a) {
        "use strict";
        a.d(e, {
          Eg: function () {
            return l;
          },
          RG: function () {
            return o;
          },
          X6: function () {
            return r;
          },
          rt: function () {
            return n;
          },
          tQ: function () {
            return i;
          },
        });
        const s = ["child", "collection", "item", "parent", "root", "self"],
          r = ["first", "last", "next", "prev", "previous"],
          i = [
            "queryables",
            "http://www.opengis.net/def/rel/ogc/1.0/queryables",
            "ogc-rel:queryables",
          ],
          n = [
            "canonical",
            "related",
            "derived_from",
            "latest-version",
            "predecessor-version",
            "successor-version",
            "source",
            "alternate",
          ]
            .concat(s)
            .concat(r),
          o = ["conformance", "data", "items", "search", "icon", "license"]
            .concat(s)
            .concat(r)
            .concat(i),
          l = "http://www.opengis.net/def/rel/ogc/1.0/";
      },
      9879: function (t, e, a) {
        "use strict";
        a.d(e, {
          CF: function () {
            return m;
          },
          F7: function () {
            return p;
          },
          G$: function () {
            return c;
          },
          KN: function () {
            return l;
          },
          Uz: function () {
            return f;
          },
          ZP: function () {
            return b;
          },
          vV: function () {
            return g;
          },
        });
        var s = a(4998),
          r = a.n(s),
          i = a(6525),
          n = a.n(i);
        const o = ["catalog", "collection", "item"],
          l = "application/geo+json",
          c = "application/schema+json",
          u = ["application/json", l, "text/json"],
          d = [
            "image/gif",
            "image/jpg",
            "image/jpeg",
            "image/apng",
            "image/png",
            "image/webp",
          ],
          h = [
            "application/geotiff",
            "image/tiff; application=geotiff",
            "image/tiff; application=geotiff; profile=cloud-optimized",
            "image/vnd.stac.geotiff",
            "image/vnd.stac.geotiff; cloud-optimized=true",
          ],
          p = ["http", "https"],
          f = d.concat(h),
          m = f.concat([l]);
        class g extends Error {
          constructor(t) {
            super(t);
          }
        }
        class b {
          static isObject(t) {
            return (
              "object" === typeof t && t === Object(t) && !Array.isArray(t)
            );
          }
          static size(t) {
            return "object" === typeof t && null !== t
              ? Array.isArray(t)
                ? t.length
                : Object.keys(t).length
              : 0;
          }
          static isStacMediaType(t, e = !1) {
            return b.isMediaType(t, u, e);
          }
          static isMediaType(t, e, a = !1) {
            return (
              Array.isArray(e) || (e = [e]),
              !(!a || t) ||
                ("string" === typeof t && e.includes(t.toLowerCase()))
            );
          }
          static hasText(t) {
            return "string" === typeof t && t.length > 0;
          }
          static isGdalVfsUri(t) {
            return (
              "string" === typeof t &&
              t.startsWith("/vsi") &&
              !t.startsWith("/vsicurl/")
            );
          }
          static toAbsolute(t, e, a = !0) {
            return b.normalizeUri(t, e, !1, a);
          }
          static normalizeUri(t, e = null, a = !1, s = !0) {
            "string" === typeof t &&
              t.startsWith("/vsicurl/") &&
              (t = t.replace(/^\/vsicurl\//, ""));
            let i = r()(t);
            return (
              e &&
                i.is("relative") &&
                !b.isGdalVfsUri(t) &&
                (i = i.absoluteTo(e)),
              i.normalize(),
              a && (i.query(""), i.fragment("")),
              s ? i.toString() : i
            );
          }
          static getLinkWithRel(t, e) {
            return Array.isArray(t)
              ? t.find((t) => b.isObject(t) && b.hasText(t.href) && t.rel === e)
              : null;
          }
          static getLinksWithRels(t, e) {
            return Array.isArray(t)
              ? t.filter(
                  (t) => b.isObject(t) && b.hasText(t.href) && e.includes(t.rel)
                )
              : [];
          }
          static getLinksWithOtherRels(t, e) {
            return Array.isArray(t)
              ? t.filter(
                  (t) =>
                    b.isObject(t) && b.hasText(t.href) && !e.includes(t.rel)
                )
              : [];
          }
          static equalUrl(t, e) {
            try {
              let a = r()(t),
                s = r()(e);
              return (
                a.path(a.path().replace(/\/$/, "")),
                s.path(s.path().replace(/\/$/, "")),
                a.equals(s)
              );
            } catch (a) {
              return !1;
            }
          }
          static summarizeMd(t, e = null) {
            return b.hasText(t)
              ? ((t = n()(t).replaceAll(/[\r\n]+/g, " ")),
                e > 0 && t.length > e && (t = t.substr(0, e) + "…"),
                t)
              : "";
          }
          static scrollTo(t) {
            if (t) {
              var e = t.getBoundingClientRect(),
                a = e.top < window.innerHeight && e.bottom >= 0;
              a || t.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
          static dateFromUTC(t) {
            if (t instanceof Date) {
              const e = new Date(t),
                a = e.getTimezoneOffset();
              t = new Date(e.getTime() + 60 * a * 1e3);
            }
            return t;
          }
          static dateToUTC(t) {
            if (t instanceof Date) {
              const e = new Date().getTimezoneOffset();
              return new Date(t.getTime() - 60 * e * 1e3);
            }
            return t;
          }
          static formatDatetimeQuery(t) {
            return t
              .map((t) => (t instanceof Date ? t.toISOString() : t || ".."))
              .join("/");
          }
          static addFiltersToLink(t, e = {}) {
            let a = (t) =>
              null === t ||
              ("number" === typeof t && !Number.isFinite(t)) ||
              ("string" === typeof t && 0 === t.length) ||
              ("object" === typeof t && 0 === b.size(t));
            if (b.hasText(t.method) && "POST" === t.method.toUpperCase()) {
              let s = Object.assign({}, t.body);
              for (let t in e) {
                let r = e[t];
                if (a(r)) delete s[t];
                else {
                  if ("datetime" === t) r = b.formatDatetimeQuery(r);
                  else if ("filters" === t) {
                    Object.assign(s, r.toJSON());
                    continue;
                  }
                  s[t] = r;
                }
              }
              return Object.assign({}, t, { body: s });
            }
            {
              let s = r()(t.href);
              for (let t in e) {
                let r = e[t];
                if (a(r)) s.removeQuery(t);
                else {
                  if ("datetime" === t) r = b.formatDatetimeQuery(r);
                  else if ("bbox" === t) r = r.join(",");
                  else if ("collections" === t || "ids" === t) r = r.join(",");
                  else if ("filters" === t) {
                    let t = r.toText();
                    s.setQuery(t);
                    continue;
                  }
                  s.setQuery(t, r);
                }
              }
              return Object.assign({}, t, { href: s.toString() });
            }
          }
          static titleForHref(t, e = !1) {
            let a = r()(t),
              s = a.authority(),
              i = a.filename().replace(/^(.{1,})\.\w+$/, "$1"),
              n = a.directory().replace(/^\//, "");
            if (s && i && !e) {
              let t = a.path().replace(/^\//, "");
              return "doi.org" === s && t.startsWith("10.")
                ? `DOI ${t}`
                : `${i} (${s})`;
            }
            return i && !o.includes(i) ? i : s || n || t;
          }
          static canBrowserDisplayImage(t) {
            if ("string" !== typeof t.href) return !1;
            let e = r()(t.href),
              a = e.protocol().toLowerCase();
            return (
              !(a && !p.includes(a)) &&
              (!!d.includes(t.type) ||
                !!d.includes("image/" + e.suffix().toLowerCase()) ||
                !t.type)
            );
          }
          static getValueFromObjectUsingPath(t, e) {
            if (null !== t && "object" === typeof t)
              return (
                (t = t[e[0]]),
                "undefined" !== typeof t && e.length > 1
                  ? this.getValueFromObjectUsingPath(t, e.slice(1))
                  : t
              );
          }
          static search(t, e, a = !0) {
            if ("string" !== typeof t || 0 === t.length) return !1;
            if (
              (b.isObject(e)
                ? (e = Object.values(e))
                : "string" === typeof e && (e = [e]),
              !Array.isArray(e))
            )
              return !1;
            let s = /[\s.,;!&({[)}]]+/g;
            (t = t.toLowerCase().split(s)),
              (e = e
                .filter((t) => "string" === typeof t)
                .join(" ")
                .replace(s, " ")
                .toLowerCase());
            let r = a ? "every" : "some";
            return t[r]((t) => e.includes(t));
          }
          static createLink(t, e) {
            return { href: t, rel: e };
          }
          static supportsExtension(t, e) {
            if (!b.isObject(t) || !Array.isArray(t["stac_extensions"]))
              return !1;
            let a = new RegExp("^" + e.replaceAll("*", "[^/]+") + "$");
            return Boolean(t["stac_extensions"].find((t) => a.test(t)));
          }
          static mergeDeep(t, ...e) {
            if (!e.length) return t;
            const a = e.shift();
            if (b.isObject(t) && b.isObject(a))
              for (const s in a)
                b.isObject(a[s])
                  ? (t[s] || Object.assign(t, { [s]: {} }),
                    b.mergeDeep(t[s], a[s]))
                  : Object.assign(t, { [s]: a[s] });
            return b.mergeDeep(t, ...e);
          }
        }
      },
      448: function (t, e, a) {
        var s = {
          "./de-CH/default.js": [9665, 7119, 9665],
          "./de/default.js": [1929, 7119, 1929],
          "./en/default.js": [1358, 1358],
          "./es/default.js": [237, 237],
          "./fr-CA/default.js": [2755, 8096, 727],
          "./fr-CH/default.js": [6437, 8096, 6437],
          "./fr/default.js": [5092, 8096, 5092],
          "./it-CH/default.js": [4739, 5473, 4739],
          "./it/default.js": [8144, 5473, 8144],
          "./ro/default.js": [1493, 1493],
        };
        function r(t) {
          if (!a.o(s, t))
            return Promise.resolve().then(function () {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var e = s[t],
            r = e[0];
          return Promise.all(e.slice(1).map(a.e)).then(function () {
            return a(r);
          });
        }
        (r.keys = function () {
          return Object.keys(s);
        }),
          (r.id = 448),
          (t.exports = r);
      },
      2599: function (t, e, a) {
        var s = {
          "./de-CH/config.json": 3225,
          "./de/config.json": 7534,
          "./en/config.json": 8863,
          "./es/config.json": 5946,
          "./fr-CA/config.json": 4317,
          "./fr-CH/config.json": 8125,
          "./fr/config.json": 6727,
          "./it-CH/config.json": 6025,
          "./it/config.json": 2715,
          "./ro/config.json": 7031,
        };
        function r(t) {
          var e = i(t);
          return a(e);
        }
        function i(t) {
          if (!a.o(s, t)) {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return s[t];
        }
        (r.keys = function () {
          return Object.keys(s);
        }),
          (r.resolve = i),
          (t.exports = r),
          (r.id = 2599);
      },
      3225: function (t) {
        "use strict";
        t.exports = JSON.parse(
          '{"native":"Deutsch (Schweiz)","global":"German (Switzerland)"}'
        );
      },
      7534: function (t) {
        "use strict";
        t.exports = JSON.parse('{"native":"Deutsch","global":"German"}');
      },
      8863: function (t) {
        "use strict";
        t.exports = JSON.parse('{"native":"English","global":"English"}');
      },
      5946: function (t) {
        "use strict";
        t.exports = JSON.parse('{"native":"Español","global":"Spanish"}');
      },
      4317: function (t) {
        "use strict";
        t.exports = JSON.parse(
          '{"native":"Français (Canada)","global":"French (Canada)"}'
        );
      },
      8125: function (t) {
        "use strict";
        t.exports = JSON.parse(
          '{"native":"Français (Suisse)","global":"French (Switzerland)"}'
        );
      },
      6727: function (t) {
        "use strict";
        t.exports = JSON.parse('{"native":"Français","global":"French"}');
      },
      6025: function (t) {
        "use strict";
        t.exports = JSON.parse(
          '{"native":"Italiano (Svizzera)","global":"Italian (Switzerland)"}'
        );
      },
      2715: function (t) {
        "use strict";
        t.exports = JSON.parse('{"native":"Italiano","global":"Italian"}');
      },
      7031: function (t) {
        "use strict";
        t.exports = JSON.parse('{"native":"Română","global":"Romanian"}');
      },
    },
    e = {};
  function a(s) {
    var r = e[s];
    if (void 0 !== r) return r.exports;
    var i = (e[s] = { id: s, loaded: !1, exports: {} });
    return t[s].call(i.exports, i, i.exports, a), (i.loaded = !0), i.exports;
  }
  (a.m = t),
    (function () {
      var t = [];
      a.O = function (e, s, r, i) {
        if (!s) {
          var n = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (s = t[u][0]), (r = t[u][1]), (i = t[u][2]);
            for (var o = !0, l = 0; l < s.length; l++)
              (!1 & i || n >= i) &&
              Object.keys(a.O).every(function (t) {
                return a.O[t](s[l]);
              })
                ? s.splice(l--, 1)
                : ((o = !1), i < n && (n = i));
            if (o) {
              t.splice(u--, 1);
              var c = r();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        i = i || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > i; u--) t[u] = t[u - 1];
        t[u] = [s, r, i];
      };
    })(),
    (function () {
      a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return a.d(e, { a: e }), e;
      };
    })(),
    (function () {
      var t,
        e = Object.getPrototypeOf
          ? function (t) {
              return Object.getPrototypeOf(t);
            }
          : function (t) {
              return t.__proto__;
            };
      a.t = function (s, r) {
        if ((1 & r && (s = this(s)), 8 & r)) return s;
        if ("object" === typeof s && s) {
          if (4 & r && s.__esModule) return s;
          if (16 & r && "function" === typeof s.then) return s;
        }
        var i = Object.create(null);
        a.r(i);
        var n = {};
        t = t || [null, e({}), e([]), e(e)];
        for (
          var o = 2 & r && s;
          "object" == typeof o && !~t.indexOf(o);
          o = e(o)
        )
          Object.getOwnPropertyNames(o).forEach(function (t) {
            n[t] = function () {
              return s[t];
            };
          });
        return (
          (n["default"] = function () {
            return s;
          }),
          a.d(i, n),
          i
        );
      };
    })(),
    (function () {
      a.d = function (t, e) {
        for (var s in e)
          a.o(e, s) &&
            !a.o(t, s) &&
            Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
      };
    })(),
    (function () {
      (a.f = {}),
        (a.e = function (t) {
          return Promise.all(
            Object.keys(a.f).reduce(function (e, s) {
              return a.f[s](t, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      a.u = function (t) {
        return (
          "js/" +
          t +
          "." +
          {
            237: "017fb5f3",
            531: "3dadaaac",
            624: "153f92e2",
            727: "2f6322f4",
            796: "cca114ac",
            833: "ce97f3d2",
            891: "6e0ebbaa",
            1358: "5014fcb1",
            1364: "f34c993e",
            1374: "d8cc80eb",
            1493: "350259bc",
            1514: "95bf08ec",
            1754: "e3a524b2",
            1755: "d05e26ec",
            1929: "9f2ef156",
            2380: "84a690e6",
            2407: "101b6a3f",
            2540: "39534421",
            2792: "8a52d4e2",
            2968: "03e36d14",
            3138: "2180ce0b",
            3206: "9d638f71",
            3628: "98517dd4",
            3669: "cf1fef3c",
            3919: "7817b4ed",
            4016: "77cf1cdb",
            4739: "db5e43f8",
            4763: "6d7e44b2",
            5092: "e1df34f9",
            5260: "975d4eb9",
            5325: "84bb0690",
            5473: "10aa2dde",
            5607: "f9d30575",
            5793: "4a2ccd11",
            5972: "e34e718a",
            5998: "0f7abd47",
            6437: "cf0cef05",
            6553: "8644a921",
            6653: "d40ccff3",
            6872: "c6be99e1",
            7119: "915be70d",
            7191: "482432bc",
            7245: "66a275c9",
            7257: "39677c7f",
            7711: "ed2c425c",
            7992: "ccb28c8e",
            8069: "f8afcc08",
            8096: "f332d3c9",
            8144: "ba708681",
            8188: "f0f9e44f",
            8218: "29d1651d",
            8342: "664caa5f",
            8561: "d13d2053",
            8673: "2c739f88",
            8693: "09a51a95",
            8762: "5559a3b9",
            8770: "ab228821",
            9071: "66de6eb2",
            9090: "9c1a442f",
            9489: "fb1e8975",
            9539: "5c90262e",
            9578: "516de4e1",
            9665: "ede40b32",
            9795: "e5ef8af2",
          }[t] +
          ".js"
        );
      };
    })(),
    (function () {
      a.miniCssF = function (t) {
        return (
          "css/" +
          t +
          "." +
          {
            624: "6ad781a6",
            891: "e6c27227",
            1364: "c8af9558",
            1754: "9f5851a0",
            3206: "0780c10b",
            3919: "17cfc64f",
            4016: "3dec6b2c",
            5260: "6a8a0f6f",
            5325: "24efcb3b",
            5998: "ee9ba0ec",
            7711: "c771d657",
            7992: "2d0e80a5",
            8188: "572c83fc",
            8561: "c8108a4b",
            8762: "51801b25",
            9795: "081b4583",
          }[t] +
          ".css"
        );
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.hmd = function (t) {
        return (
          (t = Object.create(t)),
          t.children || (t.children = []),
          Object.defineProperty(t, "exports", {
            enumerable: !0,
            set: function () {
              throw new Error(
                "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                  t.id
              );
            },
          }),
          t
        );
      };
    })(),
    (function () {
      a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = {},
        e = "@radiantearth/stac-browser:";
      a.l = function (s, r, i, n) {
        if (t[s]) t[s].push(r);
        else {
          var o, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == s ||
                d.getAttribute("data-webpack") == e + i
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((l = !0),
            (o = document.createElement("script")),
            (o.charset = "utf-8"),
            (o.timeout = 120),
            a.nc && o.setAttribute("nonce", a.nc),
            o.setAttribute("data-webpack", e + i),
            (o.src = s)),
            (t[s] = [r]);
          var h = function (e, a) {
              (o.onerror = o.onload = null), clearTimeout(p);
              var r = t[s];
              if (
                (delete t[s],
                o.parentNode && o.parentNode.removeChild(o),
                r &&
                  r.forEach(function (t) {
                    return t(a);
                  }),
                e)
              )
                return e(a);
            },
            p = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = h.bind(null, o.onerror)),
            (o.onload = h.bind(null, o.onload)),
            l && document.head.appendChild(o);
        }
      };
    })(),
    (function () {
      a.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      a.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      };
    })(),
    (function () {
      a.p = "/stac-browser/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var t = function (t, e, a, s, r) {
            var i = document.createElement("link");
            (i.rel = "stylesheet"), (i.type = "text/css");
            var n = function (a) {
              if (((i.onerror = i.onload = null), "load" === a.type)) s();
              else {
                var n = a && ("load" === a.type ? "missing" : a.type),
                  o = (a && a.target && a.target.href) || e,
                  l = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + o + ")"
                  );
                (l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.type = n),
                  (l.request = o),
                  i.parentNode && i.parentNode.removeChild(i),
                  r(l);
              }
            };
            return (
              (i.onerror = i.onload = n),
              (i.href = e),
              a
                ? a.parentNode.insertBefore(i, a.nextSibling)
                : document.head.appendChild(i),
              i
            );
          },
          e = function (t, e) {
            for (
              var a = document.getElementsByTagName("link"), s = 0;
              s < a.length;
              s++
            ) {
              var r = a[s],
                i = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (i === t || i === e)) return r;
            }
            var n = document.getElementsByTagName("style");
            for (s = 0; s < n.length; s++) {
              (r = n[s]), (i = r.getAttribute("data-href"));
              if (i === t || i === e) return r;
            }
          },
          s = function (s) {
            return new Promise(function (r, i) {
              var n = a.miniCssF(s),
                o = a.p + n;
              if (e(n, o)) return r();
              t(s, o, null, r, i);
            });
          },
          r = { 2143: 0 };
        a.f.miniCss = function (t, e) {
          var a = {
            624: 1,
            891: 1,
            1364: 1,
            1754: 1,
            3206: 1,
            3919: 1,
            4016: 1,
            5260: 1,
            5325: 1,
            5998: 1,
            7711: 1,
            7992: 1,
            8188: 1,
            8561: 1,
            8762: 1,
            9795: 1,
          };
          r[t]
            ? e.push(r[t])
            : 0 !== r[t] &&
              a[t] &&
              e.push(
                (r[t] = s(t).then(
                  function () {
                    r[t] = 0;
                  },
                  function (e) {
                    throw (delete r[t], e);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var t = { 2143: 0 };
      (a.f.j = function (e, s) {
        var r = a.o(t, e) ? t[e] : void 0;
        if (0 !== r)
          if (r) s.push(r[2]);
          else if (4016 != e) {
            var i = new Promise(function (a, s) {
              r = t[e] = [a, s];
            });
            s.push((r[2] = i));
            var n = a.p + a.u(e),
              o = new Error(),
              l = function (s) {
                if (a.o(t, e) && ((r = t[e]), 0 !== r && (t[e] = void 0), r)) {
                  var i = s && ("load" === s.type ? "missing" : s.type),
                    n = s && s.target && s.target.src;
                  (o.message =
                    "Loading chunk " + e + " failed.\n(" + i + ": " + n + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = i),
                    (o.request = n),
                    r[1](o);
                }
              };
            a.l(n, l, "chunk-" + e, e);
          } else t[e] = 0;
      }),
        (a.O.j = function (e) {
          return 0 === t[e];
        });
      var e = function (e, s) {
          var r,
            i,
            n = s[0],
            o = s[1],
            l = s[2],
            c = 0;
          if (
            n.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (r in o) a.o(o, r) && (a.m[r] = o[r]);
            if (l) var u = l(a);
          }
          for (e && e(s); c < n.length; c++)
            (i = n[c]), a.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return a.O(u);
        },
        s = (self["webpackChunk_radiantearth_stac_browser"] =
          self["webpackChunk_radiantearth_stac_browser"] || []);
      s.forEach(e.bind(null, 0)), (s.push = e.bind(null, s.push.bind(s)));
    })();
  var s = a.O(void 0, [4998], function () {
    return a(7451);
  });
  s = a.O(s);
})();
//# sourceMappingURL=app.ec02870c.js.map
