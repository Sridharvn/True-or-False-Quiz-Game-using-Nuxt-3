import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, withCtx, createTextVNode, toDisplayString, mergeProps } from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import axios from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/axios/index.js';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/ofetch/dist/node.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/hookable/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unctx/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unhead/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/h3/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/ufo/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/destr/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/scule/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/ohash/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unstorage/dist/index.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/radix3/dist/index.mjs';

const _sfc_main$2 = {
  __name: "TrueFalseButton",
  __ssrInlineRender: true,
  props: ["type"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.type == "true") {
        _push(`<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type == "false") {
        _push(`<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrueFalseButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TrueFalseButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-col" }, _attrs))}><div class="rounded only:transition-shadow flex justify-center items-start p-5 text-3xl text-blue-900 border lg:mx-96 sm:mx-36 md:mx-64 mx-12 text-center shadow-md shadow-inner hover:shadow-lg bg-white h-96 min-h-full">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="flex justify-center mt-5">`);
  _push(ssrRenderComponent(_component_TrueFalseButton, {
    class: "p-4",
    type: "true"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`True`);
      } else {
        return [
          createTextVNode("True")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TrueFalseButton, {
    class: "p-4",
    type: "false"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`False`);
      } else {
        return [
          createTextVNode("False")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  methods: {
    async getQuestions(amount, difficulty) {
      const params = {
        amount,
        type: "boolean",
        difficulty
      };
      await axios.get(`${this.API_URL}?amount=${params.amount}&difficulty=${params.difficulty}&type=${params.type}`).then((response) => {
        this.questions = response.data.results;
        console.log(response);
      });
    }
  },
  data() {
    return {
      API_URL: "https://opentdb.com/api.php",
      questions: []
    };
  },
  mounted() {
    this.getQuestions(10, "easy");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = __nuxt_component_0;
  _push(`<!--[--><div class="font-bold flex text-center justify-center items-center p-10 text-4xl text-blue-600">Welcome To the Game </div>`);
  _push(ssrRenderComponent(_component_Card, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.questions[0])} `);
      } else {
        return [
          createTextVNode(toDisplayString($data.questions[0]) + " ", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-1a903047.mjs.map
