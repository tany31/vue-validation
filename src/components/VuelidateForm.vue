<template>
  <form class="base-form" @submit.prevent="submit">
    <h2 class="base-form__title">Vuelidate form</h2>
    <div class="base-form__control">
      <label class="base-form__label">Name</label>
      <v-input v-model="$v.model.name.$model" name="name" :invalid="$v.model.name.$error" placeholder="name" />
      <small class="base-form__error" v-if="$v.model.name.$dirty && !$v.model.name.required">Name is required</small>
    </div>
    <div class="base-form__control">
      <label class="base-form__label">E-mail</label>
      <v-input v-model="$v.model.email.$model" name="Email" :invalid="$v.model.email.$error" placeholder="e-mail" />
      <template v-if="$v.model.email.$dirty">
        <small class="base-form__error" v-if="!$v.model.email.required">E-mail is required</small>
        <small class="base-form__error" v-if="!$v.model.email.email">E-mail must be valid</small>
      </template>
    </div>
    <div class="base-form__row">
      <div class="base-form__control">
        <label class="base-form__label">Min</label>
        <v-input v-model="$v.model.min.$model" type="Number" :invalid="$v.model.min.$error" placeholder="0" />
        <small class="base-form__error" v-if="$v.model.min.$dirty && !$v.model.min.maxValue">
          Min must be less than max
        </small>
      </div>
      <div class="base-form__control">
        <label class="base-form__label">Max</label>
        <v-input v-model="$v.model.max.$model" type="Number" :invalid="$v.model.max.$error" placeholder="0" />
        <small class="base-form__error" v-if="$v.model.max.$dirty && !$v.model.max.minValue">
          Max must be greater than min
        </small>
      </div>
    </div>
    <div class="base-form__control">
      <label class="base-form__label">Password</label>
      <v-input v-model="$v.model.password.$model" type="Password" :invalid="$v.model.password.$error" />
      <template v-if="$v.model.password.$dirty">
        <small class="base-form__error" v-if="!$v.model.password.required">Password is required</small>
        <small class="base-form__error" v-if="!$v.model.password.minLength">
          Password must have at least {{ $v.model.password.$params.minLength.min }} letters.
        </small>
      </template>
    </div>
    <div class="base-form__control">
      <label class="base-form__label">Repeat password</label>
      <v-input
        v-model="$v.model.repeatPassword.$model"
        autocomplete="off"
        type="Password"
        :invalid="$v.model.repeatPassword.$error"
      />
      <template v-if="$v.model.repeatPassword.$dirty">
        <small class="base-form__error" v-if="!$v.model.repeatPassword.required">Password is required</small>
        <small class="base-form__error" v-if="!$v.model.repeatPassword.sameAsPassword"
          >Passwords must be identical</small
        >
      </template>
    </div>
    <v-button class="base-form__button" fluid type="submit">Save</v-button>
  </form>
</template>

<script>
import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'

import { required, minLength, email, sameAs, minValue, maxValue } from 'vuelidate/lib/validators'

export default {
  name: 'BaseForm',
  components: { VInput, VButton },
  data() {
    return {
      model: {
        name: '',
        email: '',
        min: '',
        max: '',
        password: '',
        repeatPassword: '',
        isReqired: true
      }
    }
  },
  validations() {
    return {
      model: {
        name: { required },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        repeatPassword: { required, sameAsPassword: sameAs('password') },
        min: { maxValue: maxValue(this.model.max) },
        max: { minValue: minValue(this.model.min) }
      }
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
    }
  }
}
</script>

<style lang="scss">
.base-form {
  &__title {
    text-align: center;
    margin-top: 0;
  }

  &__row {
    display: flex;
    flex-direction: row;
  }

  &__control {
    margin-bottom: 24px;
  }
  &__label {
    display: block;
    margin-bottom: 4px;
  }

  &__error {
    margin-top: 4px;
    padding-left: 8px;
    color: $--red;
  }
}
</style>
