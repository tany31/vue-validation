<template>
  <div class="example">
    <vuelidate-form class="example__form" />
    <vee-validate-form class="example__form" />
  </div>
</template>

<script>
import VuelidateForm from '@/components/VuelidateForm.vue'
import VeeValidateForm from '@/components/VeeValidateForm.vue'

export default {
  name: 'Example',
  components: { VuelidateForm, VeeValidateForm }
}
</script>

<style lang="scss">
.example {
  display: flex;
  flex-direction: row;
  justify-content: center;

  &__form {
    width: 100%;
    max-width: 500px;
    min-height: 500px;
    background: $--white;
    border-radius: 5px;
    padding: 40px 30px;
    margin: 10px;
  }
}
</style>
