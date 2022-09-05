export default function (valueType, validator = () => true) {
  return {
    props: {
      value: {
        type: valueType,
        required: true,
        validator
      }
    },

    computed: {
      modelValue: {
        get() {
          return this.value
        },

        set(value) {
          this.$emit('input', value)
        }
      }
    }
  }
}
