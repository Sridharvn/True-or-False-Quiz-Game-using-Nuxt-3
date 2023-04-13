import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderClass } from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, withCtx, createTextVNode, createVNode, toDisplayString, mergeProps } from 'file://D:/Personal-Projects/True-False-Game/quiz-game/node_modules/vue/index.mjs';
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

const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrueFalseButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$4;
const _sfc_main$3 = {
  props: {
    correctAnswer: String
  },
  methods: {
    trueClicked() {
      if (this.correctAnswer == "True") {
        this.$emit("correct");
      } else if (this.correctAnswer == "False") {
        this.$emit("incorrect");
      }
    },
    falseClicked() {
      if (this.correctAnswer == "False") {
        this.$emit("correct");
      } else if (this.correctAnswer == "True") {
        this.$emit("incorrect");
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TrueFalseButton = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-col" }, _attrs))}><div class="rounded only:transition-shadow flex justify-center items-start p-5 text-3xl text-blue-900 border lg:mx-96 sm:mx-36 md:mx-64 mx-12 text-center shadow-md shadow-inner hover:shadow-lg bg-white h-96 min-h-full">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="flex justify-center mt-5">`);
  _push(ssrRenderComponent(_component_TrueFalseButton, {
    class: "p-4",
    type: "true",
    onClick: ($event) => $options.trueClicked()
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
    type: "false",
    onClick: ($event) => $options.falseClicked()
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      index: 0
    };
  },
  props: {
    score: String,
    questions: String,
    yourAnswers: String
  },
  methods: {
    Reset() {
      window.location.reload();
    },
    decode(str) {
      let txt = new DOMParser().parseFromString(str, "text/html");
      return txt.documentElement.textContent;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1808a816><div class="text-5xl text-orange-700 text-center flex-col" data-v-1808a816> Your score is ${ssrInterpolate($props.score)}</div><div class="flex justify-center items-center mt-9" data-v-1808a816><table data-v-1808a816><tr data-v-1808a816><th data-v-1808a816>Question</th><th data-v-1808a816>Correct Answer</th><th data-v-1808a816>Your Answer</th></tr><!--[-->`);
  ssrRenderList($props.questions, (question) => {
    _push(`<tr data-v-1808a816><td data-v-1808a816>${ssrInterpolate($options.decode(question.question))}</td><td data-v-1808a816>${ssrInterpolate(question.correct_answer)}</td><td class="${ssrRenderClass(question.correct_answer == $props.yourAnswers[$data.index] ? "text-green-700" : "text-red-700")}" data-v-1808a816>${ssrInterpolate($props.yourAnswers[$data.index])}</td></tr>`);
  });
  _push(`<!--]--></table></div><div class="flex justify-center mt-10" data-v-1808a816><button type="button" class="text-white text-xl ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-1808a816>Restart</button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EndScreen.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1808a816"]]);
const _sfc_main$1 = {
  methods: {
    removeQuot() {
      this.currentQuestion = this.decode(this.questions[this.current].question);
    },
    isCorrect() {
      this.$emit("correct");
      this.yourAnswers.push(this.questions[this.current].correct_answer.toString());
      this.current += 1;
      if (this.questions[this.current].question) {
        this.removeQuot();
      }
    },
    isInCorrect() {
      this.$emit("incorrect");
      this.yourAnswers.push(this.questions[this.current].correct_answer.toString());
      this.current += 1;
      if (this.questions[this.current].question) {
        this.removeQuot();
      }
    },
    decode(str) {
      let txt = new DOMParser().parseFromString(str, "text/html");
      return txt.documentElement.textContent;
    }
  },
  props: {
    questions: String,
    score: String
  },
  data() {
    return {
      current: 0,
      currentQuestion: "",
      yourAnswers: []
    };
  },
  mounted() {
    this.removeQuot();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = __nuxt_component_0$1;
  const _component_EndScreen = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($data.current < $props.questions.length) {
    _push(`<div>`);
    if ($props.questions.length == 0) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Loading... `);
          } else {
            return [
              createTextVNode("Loading... ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_Card, {
        correctAnswer: $props.questions[$data.current].correct_answer,
        onCorrect: ($event) => $options.isCorrect(),
        onIncorrect: ($event) => $options.isInCorrect()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h1${_scopeId}>${ssrInterpolate($props.questions[$data.current].category)}</h1><br${_scopeId}><p${_scopeId}>${ssrInterpolate($data.currentQuestion)} <br${_scopeId}> True or False? </p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h1", null, toDisplayString($props.questions[$data.current].category), 1),
                createVNode("br"),
                createVNode("p", null, [
                  createTextVNode(toDisplayString($data.currentQuestion) + " ", 1),
                  createVNode("br"),
                  createTextVNode(" True or False? ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    }
    _push(`</div>`);
  } else {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_EndScreen, {
      score: $props.score,
      questions: $props.questions,
      yourAnswers: $data.yourAnswers
    }, null, _parent));
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  methods: {
    async getQuestions() {
      const params = {
        amount: this.amount,
        type: "boolean",
        difficulty: this.difficulty
      };
      await axios.get(
        `${this.API_URL}?amount=${params.amount}&difficulty=${params.difficulty}&type=${params.type}`
      ).then((response) => {
        this.questions = response.data.results;
        console.log(response);
        this.isStarted = true;
      });
      console.log(this.questions);
    },
    isCorrect() {
      this.score += 1;
    },
    isInCorrect() {
    }
  },
  data() {
    return {
      API_URL: "https://opentdb.com/api.php",
      questions: [],
      isStarted: false,
      amount: 10,
      difficulty: "easy",
      score: 0
    };
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Game = __nuxt_component_0;
  _push(`<!--[--><div class="font-bold flex text-center justify-center items-center p-10 text-4xl text-blue-600" data-v-cf577e27> Welcome To the Game </div>`);
  if ($data.isStarted) {
    _push(`<div data-v-cf577e27>`);
    _push(ssrRenderComponent(_component_Game, {
      questions: $data.questions,
      onCorrect: ($event) => $options.isCorrect(),
      onIncorrect: ($event) => $options.isInCorrect(),
      score: $data.score
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div data-v-cf577e27><div class="lg:text-xl text-center lg:mx-64 md:mx-32 sm:mx-10 mx-4" data-v-cf577e27>This is a true or false game. You wil be given a statement that might be true or false. You have to select the right choice and move to the next questions. You will be shown your final score after the game, from where you can reset the game.</div><div class="flex justify-center items-center mt-10" data-v-cf577e27><table data-v-cf577e27><tr data-v-cf577e27><td data-v-cf577e27><label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" data-v-cf577e27>Number of Questions : \xA0</label></td><td class="flex justify-end" data-v-cf577e27><select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-cf577e27><option selected value="10" data-v-cf577e27>10</option><option value="20" data-v-cf577e27>20</option><option value="30" data-v-cf577e27>30</option><option value="40" data-v-cf577e27>40</option><option value="50" data-v-cf577e27>50</option></select></td></tr><tr data-v-cf577e27><td data-v-cf577e27><label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" data-v-cf577e27>Difficulty : \xA0</label></td><td class="flex justify-end" data-v-cf577e27><select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-cf577e27><option selected value="easy" data-v-cf577e27>Easy</option><option value="medium" data-v-cf577e27>Medium</option><option value="hard" data-v-cf577e27>Hard</option></select></td></tr></table></div><div class="flex justify-center mt-10" data-v-cf577e27><button type="button" class="text-white text-xl ml-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-cf577e27>Begin</button></div></div>`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cf577e27"]]);

export { index as default };
//# sourceMappingURL=index-606643d3.mjs.map
