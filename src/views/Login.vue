<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="Email"
              rules="required|email|max:30"
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="email"
                type="email"
                label="Email"
                :error-messages="errors"
                prepend-icon="mail"
              />
            </ValidationProvider>
            <ValidationProvider
              name="Password"
              rules="required|min:4|max:200"
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="password"
                type="password"
                label="Password"
                :error-messages="errors"
                prepend-icon="lock"
              />
            </ValidationProvider>
            <v-card-actions>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-card-actions>
          </form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      // console.log("sum");
    }
  }
};
</script>

<style></style>
