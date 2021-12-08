<template>
  <div class="v-input">
    <input
      v-model="modelWrapper"
      class="v-input__control"
      :class="{ 'v-input__control--invalid': invalid }"
      :placeholder="placeholder"
      :type="type"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  name: 'VInput',
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    invalid: { type: Boolean, default: false }
  },
  computed: {
    modelWrapper: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update:value', value)
      }
    }
  }
}
</script>

<style lang="scss">
.v-input {
  display: flex;
  flex-direction: row;
  width: 100%;

  &__control {
    font-size: 16px;
    border: 1px solid $--gray-2;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 15px 10px;

    &::placeholder {
      color: $--gray-3;
    }

    &:focus,
    &:active {
      border-color: #333333;
      outline: none;
    }

    &--invalid {
      border-color: $--red;

      &:focus,
      &:active {
        border-color: $--red;
      }
    }
  }
}
</style>
