<template>
  <div
    v-click-outside="closeMenu"
    class="relative z-0 w-full rounded border border-slate-200 shadow-sm shadow-slate-500"
    :class="{ 'rounded-b-none z-10': menuVisible }"
  >
    <div
      class="absolute z-10 -top-2 left-1 text-xs bg-opacity-10 pointer-events-none font-medium whitespace-nowrap"
    >
      {{ label }}
    </div>

    <button
      class="w-full pt-2 p-1 h-full text-sm text-start bg-gray-100 hover:bg-slate-200 hover:bg-opacity-70"
      @click="menuVisible = !menuVisible"
    >
      {{ modelValue.key }}
    </button>

    <div
      v-show="menuVisible"
      class="absolute z-10 bottom-0 -left-px -right-px translate-y-full bg-gray-100 rounded rounded-t-none border border-slate-200 shadow-sm shadow-slate-500 text-sm"
    >
      <div v-if="filter" class="p-1">
        <input
          v-model="filterValue"
          class="w-full rounded outline-none px-1"
          type="text"
        />
      </div>

      <button
        v-for="option in filteredOptions"
        :key="option.key"
        class="w-full p-1 text-start hover:bg-slate-200 hover:bg-opacity-70"
        @click="selectOption(option)"
      >
        {{ option.key }}
      </button>
    </div>
  </div>
</template>

<script>
import vmodelMixin from '@/mixins/vmodelMixin'

export default {
  name: 'DropdownSelect',

  mixins: [
    vmodelMixin(Object, (value) =>
      ['key', 'value'].every((field) => value.hasOwnProperty(field))
    )
  ],

  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },

    options: {
      type: Array,
      required: true,

      validator: (options) =>
        options.every(
          (option) =>
            typeof option === 'object' &&
            option.hasOwnProperty('key') &&
            option.hasOwnProperty('value')
        )
    },

    filter: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      menuVisible: false,
      filterValue: ''
    }
  },

  computed: {
    filteredOptions() {
      return this.options.filter(
        ({ key }) =>
          key.toLowerCase().includes(this.filterValue.toLowerCase()) &&
          key !== this.modelValue.key
      )
    }
  },

  methods: {
    closeMenu() {
      this.menuVisible = false
    },

    selectOption(option) {
      this.modelValue = option
      this.menuVisible = false
      this.filterValue = ''
    }
  }
}
</script>
