<template>
  <v-app>
    <v-app-bar app dark color="green">
      <img class="mr-3" src="@/assets/logo.png" width="140" alt="Logo" />

      <v-spacer />

      <v-btn text rounded to="/" v-if="user">Home</v-btn>

      <div v-if="!user">
        <v-btn text rounded to="/login">Login</v-btn>
        <v-btn text rounded to="/register">Cadastrar-se</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-spacer></v-spacer>
        <v-card-text class="green py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Bigou</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from "firebase";
import "firebase/auth";

export default {
  name: "app-view",
  computed: {
    user() {
      return firebase.auth().currentUser;
    },
  },
  data() {
    return {
      drawer: false,
      showPassword: false,
    };
  },
};
</script>
