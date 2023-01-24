<template>
  <form class="form" @submit.prevent>
    <div class="form__input-wrap">
      <InputComponent :title="'Card number'"
                      :mask="'0000 0000 0000 0000'"
                      :placeholder="'•••• •••• •••• ••••'"
                      :minLength="19"
                      :class="v$.card.$error ? 'error' : ''"
                      @blur="card"/>
      <p class="form__input-error" v-for="error of v$.card.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>
    </div>
    <div class="form__card-cred">
      <FormSelect :title="'Month'"
                  :options="monthList"
                  v-model="state.month"
      />
      <FormSelect :title="'Year'"
                  :options="listYear"
                  v-model="state.year"/>
      <InputComponent :title="'CVC'"
                      :mask="'000'"
                      :placeholder="'•••'"
                      :minLength="3"
                      :inputType="'password'"
                      @blur="cvc"
                      :class="v$.cvc.$error ? 'error' : ''"
      />
    </div>
    <ButtonComponent :disabled="v$.$invalid" class="button">Submit</ButtonComponent>
  </form>
</template>

<script setup>
import InputComponent from "./ui-components/InputComponent.vue";
import ButtonComponent from "./ui-components/ButtonComponent.vue";
import {computed, onBeforeMount, onMounted, reactive, ref, toRefs} from "vue";
import {maxLength, minLength, helpers, required, } from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import FormSelect from "./ui-components/FormSelect.vue";
import useGetListYear from "../use/getListYear.js";

  const state = reactive({
    card: '',
    month: '',
    year: '',
    cvc: '',
  })

  // settings vuelidate
  const rules = computed(() => {
    return {
      card: {
        required,
        maxLength: helpers.withMessage('Invalid number', maxLength(19)),
        minLength: helpers.withMessage('Invalid number', minLength(19)),
        $autoDirty: true
      },
      month: {
        required,
      },
      year: {
        required,
      },
      cvc: {
        required,
        maxLength: helpers.withMessage('Invalid number', maxLength(3)),
        minLength: helpers.withMessage('Invalid number', minLength(3)),
        $autoDirty: true
      },
    }
  })

  const v$ = useVuelidate(rules, state)
  const test = ref('')

  const monthList = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  const listYear = useGetListYear()

  const card = (e) => {
    state.card = e
  }
  const cvc = (e) => {
    state.cvc = e
  }
</script>



<style lang="scss" scoped>
.form {
  &__card-cred {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  &__input-wrap {
    position: relative;
  }

  &__input-error {
    position: absolute;
    right: 52px;
    top: calc(50% + 3.5px);
    transform: translateY(-50%);
    color: $cl-error;
    font-weight: 600;
    font-size: 11px;
    line-height: 11px;
  }
}
</style>