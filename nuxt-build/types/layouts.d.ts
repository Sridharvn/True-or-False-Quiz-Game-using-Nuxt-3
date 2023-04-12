import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/Personal-Projects/True-False-Game/quiz-game/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}