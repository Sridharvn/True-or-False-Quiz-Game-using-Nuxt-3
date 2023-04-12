import { b as buildAssetsURL } from './renderer.mjs';
import { useSSRContext, mergeProps } from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/h3/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/ufo/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/ofetch/dist/node.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/destr/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/hookable/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/scule/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/defu/dist/defu.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/ohash/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/radix3/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unctx/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unhead/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("logo-social.e9a6973d.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="lg:h-24 h-10 md:h-16 sm:h-12 mix-blend-multiply"><ul class="flex justify-end mr-10 md:mr-32 sm:mr-20 lg:mr-52"><li class="p-2 text-xs lg:text-2xl md:text-xl sm:text-sm"><a href="https://github.com/Sridharvn/True-or-False-Quiz-Game-using-Nuxt-3">Github</a></li><li class="p-2 text-xs lg:text-2xl md:text-xl sm:text-sm"><a href="https://www.linkedin.com/in/sridhar-v-nampoothiripad/">My LinkedIn</a></li></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black text-white text-center fixed inset-x-0 bottom-0 p-1" }, _attrs))}> Created by Sridhar </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-c4af853d.mjs.map
