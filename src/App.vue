<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/">
        <span class="mr-2">Home</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
