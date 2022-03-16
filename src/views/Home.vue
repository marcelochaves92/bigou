<template>
  <div>
    Você está logado!
    <br />

    <b>{{ user.email }}</b>

    <br />

    <v-btn class="mt-3" @click="logout">Sair</v-btn>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "home-view",
  computed: {
    user() {
      return firebase.auth().currentUser;
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
};
</script>
