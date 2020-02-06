<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title>
        Signup
      </v-card-title>
      <v-card-text>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <c-text-input
              v-model="name"
              name="Email"
              type="email"
              rules="required|email|max:30"
              prepend-icon="mail"
            /><c-text-input
              v-model="email"
              name="Name"
              rules="required|min:3|max:30"
              autocomplete="name"
              prepend-icon="person"
            />
            <c-text-input
              v-model="password"
              type="password"
              name="Password"
              rules="required|min:4|max:200"
              autocomplete="new-password"
              prepend-icon="lock"
            />
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
      // console.log("sum");
    }
  }
};
</script>

<style></style>
