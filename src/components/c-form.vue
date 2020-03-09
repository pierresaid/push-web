<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      v-bind="$attrs"
      @submit.prevent="handleSubmit($listeners.submit)"
      v-on="$listeners"
    >
      <slot />
    </form>
  </ValidationObserver>
</template>
