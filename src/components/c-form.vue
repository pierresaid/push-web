<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }">
    <form
      v-bind="$attrs"
      v-on="$listeners"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <slot :invalid="invalid" />
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
};
</script>
