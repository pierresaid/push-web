<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <c-text-input
              v-model="email"
              name="Email"
              type="email"
              rules="required|email|max:30"
              prepend-icon="mail"
            />
            <c-text-input
              v-model="password"
              type="password"
              name="Password"
              rules="required|min:4|max:200"
              prepend-icon="lock"
            />
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    onSubmit() {
      this.login();
    }
  }
};
</script>

<style></style>
