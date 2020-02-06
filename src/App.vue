<template>
  <v-app dark>
    <v-app-bar app color="primary" dark>
      <v-btn color="transparent" to="/" fab>
        <v-img src="./assets/logo.png" width="50" />
      </v-btn>
      <v-spacer />
      <v-btn to="signup" rounded color="light-blue" class="mr-2">
        <span class="font-weight-bold"> Sign up</span>
      </v-btn>
      <v-btn to="login" rounded color="black">
        Login
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    //   Axios.post("http://localhost:63079/push", {
    //   endpoint: "",
    //   keys: { auth: "", p256dh: "" }
    // });
  }
};
</script>
