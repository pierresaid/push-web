<template>
  <v-container>
    <v-card class="mx-auto" :loading="loading">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <c-form v-slot="{ invalid }" :on-submit="onSubmit">
          <c-text-input
            v-model="email"
            name="Email"
            type="email"
            rules="required|email|max:50"
            prepend-icon="mail"
          />
          <c-text-input
            v-model="password"
            name="Password"
            rules="required|min:6|max:50"
            prepend-icon="lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions style="display:flex; flex-wrap:wrap">
            <v-btn :disabled="invalid || loading" type="submit" color="primary">
              Login
            </v-btn>
            <v-spacer />
            <v-scroll-y-transition>
              <v-alert v-show="error" text color="error">
                {{ error }}
              </v-alert>
            </v-scroll-y-transition>
          </v-card-actions>
        </c-form>
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
      password: "",
      showPassword: false,
      error: null,
      loading: false
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async onSubmit() {
      this.loading = true;
      const res = await this.login({
        email: this.email,
        password: this.password
      }).catch(error => {
        if (error.status === 422) {
          this.error = error.message;
        }
      });
      if (res) {
        this.$router.replace({ name: "home" });
      }
      this.loading = false;
    }
  }
};
</script>
