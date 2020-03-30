<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <v-text-field
      :value="value"
      :label="name"
      :error-messages="errorMessage ? [...errors, errorMessage] : errors"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
export default {
  aprops: ["value", "name", "rules", "errorMessages"],
  props: {
    value: {
      type: String,
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: null
    },
    rules: {
      type: String,
      required: false,
      default: null
    },
    errorMessage: {
      type: String,
      required: false,
      default: null
    }
  }
};
</script>
