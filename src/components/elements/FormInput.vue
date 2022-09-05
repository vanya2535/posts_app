<template>
  <div>
    <div>{{ label }}</div>
    <input v-if="!textarea" v-model="modelValue" type="text" />
    <textarea v-else v-model="modelValue" />
    <div v-show="error">{{ error }}</div>
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
