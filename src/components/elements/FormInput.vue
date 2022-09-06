<template>
  <div
    class="relative z-0 w-full rounded border bg-white border-slate-200 shadow-sm shadow-slate-500"
    :class="{ 'pt-2': textarea, 'shadow-red-500': error }"
  >
    <div
      class="absolute z-10 -top-2 left-1 text-xs bg-white bg-opacity-10 pointer-events-none font-medium whitespace-nowrap"
    >
      {{ label }}
    </div>

    <input
      v-if="!textarea"
      v-model="modelValue"
      class="w-full pt-3 p-2 h-full text-sm text-start outline-none"
      type="text"
    />

    <textarea
      v-else
      v-model="modelValue"
      class="w-full pt-1 p-2 h-full text-sm text-start outline-none resize-none overflow-hidden"
      @keydown.enter.stop
    />

    <div
      v-show="error"
      class="text-red-500 absolute z-10 -bottom-4 left-1 text-xs bg-white bg-opacity-10 pointer-events-none font-medium whitespace-nowrap"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
import vmodelMixin from '@/mixins/vmodelMixin'

export default {
  name: 'FormInput',
  mixins: [vmodelMixin(String)],

  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },

    error: {
      type: String,
      required: false,
      default: ''
    },

    textarea: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
