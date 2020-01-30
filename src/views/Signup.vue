<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title>
        Signup
      </v-card-title>
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              name="Name"
              rules="required|alpha|min:3|max:30"
              v-slot="{ errors }"
            >
              <v-text-field
                v-model="name"
                type="text"
                label="Name"
                :error-messages="errors"
                autocomplete="name"
                prepend-icon="person"
              />
            </ValidationProvider>
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
                autocomplete="email"
                name="email "
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
                autocomplete="new-password"
                prepend-icon="lock"
              />
            </ValidationProvider>
            <v-card-actions>
              <v-btn type="submit" color="primary">Sign up</v-btn>
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
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("sum");
    }
  }
};
</script>

<style></style>
