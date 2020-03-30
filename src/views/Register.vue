<template>
  <v-container>
    <v-card class="mx-auto" :loading="loading">
      <v-card-title>
        Register
      </v-card-title>
      <v-card-text>
        <c-form v-slot="{ invalid }" :on-submit="onSubmit">
          <c-text-input
            v-model="email"
            name="Email"
            type="email"
            rules="required|email|max:30"
            prepend-icon="mail"
            :error-message="mailError"
            @change="mailError = null"
          /><c-text-input
            v-model="name"
            name="Name"
            rules="required|min:3|max:30|alpha_num"
            autocomplete="name"
            prepend-icon="person"
          />
          <c-text-input
            v-model="password"
            name="Password"
            rules="required|min:4|max:200|password"
            autocomplete="new-password"
            prepend-icon="lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions>
            <v-btn :disabled="invalid || loading" type="submit" color="primary">
              Sign up
            </v-btn>
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
      name: "",
      email: "",
      password: "",
      mailError: null,
      showPassword: false,
      loading: false
    };
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async onSubmit() {
      this.loading = true;
      const res = await this.register({
        email: this.email,
        name: this.name,
        password: this.password
      }).catch(error => {
        if (error.status === 409) {
          this.mailError = error.message;
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
