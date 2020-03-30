<template>
  <v-app dark>
    <v-app-bar app color="primary" dark>
      <v-btn color="transparent" to="/" fab>
        <v-img src="./assets/logo.png" width="50" />
      </v-btn>
      <v-spacer />
      <span v-if="!name">
        <v-btn to="register" rounded color="light-blue" class="mr-2">
          <span class="font-weight-bold">Sign up</span>
        </v-btn>
        <v-btn to="login" rounded color="black">Login</v-btn>
      </span>
      <v-menu v-else offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon fab v-on="on">
            <v-avatar color="blue">
              <span class="white--text headline">
                {{ name[0].toUpperCase() }} {{ name[1].toUpperCase() }}
              </span>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState("auth", ["name"])
  },
  methods: {
    ...mapActions("auth", ["logout"])
  }
};
</script>
