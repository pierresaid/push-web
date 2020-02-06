<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <v-text-field
      :value="value"
      :label="name"
      :error-messages="errors"
      v-bind="$attrs"
      @input="$emit('input', $event)"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
export default {
  props: ["value", "name", "rules"]
};
</script>

<style></style>
