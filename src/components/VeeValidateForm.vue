<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form class="vee-validate-form" @submit.prevent="handleSubmit(submit)">
      <h2 class="vee-validate-form__title">Vee-validate form</h2>
      <div class="vee-validate-form__control">
        <ValidationProvider rules="required" name="name" v-slot="{ errors, failed }">
          <label class="vee-validate-form__label">Name</label>
          <v-input v-model="model.name" placeholder="name" :invalid="failed" />
          <small v-if="failed" class="vee-validate-form__error">{{ errors[0] }}</small>
        </ValidationProvider>
      </div>
      <div class="vee-validate-form__control">
        <ValidationProvider rules="required|email" name="email" v-slot="{ errors, failed }">
          <label class="vee-validate-form__label">E-mail</label>
          <v-input v-model="model.email" placeholder="email" :invalid="failed" />
          <small v-if="failed" class="vee-validate-form__error">{{ errors[0] }}</small>
        </ValidationProvider>
      </div>
      <div class="vee-validate-form__row">
        <div class="vee-validate-form__control">
          <ValidationProvider rules="max_value:@max" name="min" v-slot="{ errors, failed }">
            <label class="vee-validate-form__label">Min</label>
            <v-input v-model="model.min" type="number" placeholder="0" :invalid="failed" />
            <small v-if="failed" class="vee-validate-form__error">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>

        <div class="vee-validate-form__control">
          <ValidationProvider rules="min_value:@min" name="max" v-slot="{ errors, failed }">
            <label class="vee-validate-form__label">Max</label>
            <v-input v-model="model.max" type="number" placeholder="0" :invalid="failed" />
            <small v-if="failed" class="vee-validate-form__error">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
      </div>
      <div class="vee-validate-form__control">
        <ValidationProvider rules="required|min:@min|max:@max" name="password" v-slot="{ errors, failed }">
          <label class="vee-validate-form__label">Password</label>
          <v-input v-model="model.password" placeholder="Password" :invalid="failed" />
          <small v-if="failed" class="vee-validate-form__error">{{ errors[0] }}</small>
        </ValidationProvider>
      </div>
      <div class="vee-validate-form__control">
        <ValidationProvider rules="required|password:@password" name="repeatPassword" v-slot="{ errors, failed }">
          <label class="vee-validate-form__label">Repeat password</label>
          <v-input v-model="model.repeatPassword" placeholder="Repeat password" :invalid="failed" />
          <small v-if="failed" class="vee-validate-form__error">{{ errors[0] }}</small>
        </ValidationProvider>
      </div>

      <v-button class="vee-validate-form__button" fluid type="submit">Save</v-button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VInput from '@/components/common/VInput.vue'
import VButton from '@/components/common/VButton.vue'

export default {
  name: 'BaseForm',
  components: { VInput, VButton, ValidationProvider, ValidationObserver },
  data() {
    return {
      model: {
        name: '',
        email: '',
        min: '',
        max: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  methods: {
    submit() {}
  }
}
</script>

<style lang="scss">
.vee-validate-form {
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
