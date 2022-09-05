<template>
  <div>
    <div>{{ label }}</div>
    <button @click="menuVisible = !menuVisible">
      {{ modelValue.key }}
    </button>

    <div v-show="menuVisible">
      <input v-if="filter" v-model="filterValue" type="text" />

      <button
        v-for="option in filteredOptions"
        :key="option.key"
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
    selectOption(option) {
      this.modelValue = option
      this.menuVisible = false
    }
  }
}
</script>
