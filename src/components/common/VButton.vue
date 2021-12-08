<template>
  <router-link v-if="to" :to="to" class="button" :class="classes" v-on="$listeners">
    <slot />
  </router-link>
  <button v-else :type="type" :disabled="disabled" class="button" :class="classes" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    to: {
      type: [String, Object],
      default: ''
    },
    fluid: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'button--fluid': this.fluid,
        'button--outline': this.outline,
        'button--link': this.link,
        'button--disabled': this.disabled
      }
    }
  }
}
</script>

<style lang="scss">
.button {
  font-size: 14px;
  background: $--blue;
  color: $--white;
  border-radius: 5px;
  border: 1px solid $--blue;
  padding: 16px 25px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &--outline {
    color: $--blue;
    background: $--white;
  }

  &--fluid {
    width: 100%;
  }

  &--link {
    background: none;
    color: inherit;
    border: none;
    border-radius: 0;
  }

  &--disabled {
    background: $--gray-2;
    border: 1px solid $--gray-2;
    color: $--white;
    cursor: default;
  }
}
</style>
