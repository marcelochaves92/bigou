<template>
  <form @submit="doRegister">
    <v-card width="500" class="mx-auto mt-9">
      <v-card-title>Registrar-se</v-card-title>
      <v-card-text>
        <v-alert color="red" dense type="error" v-if="error">{{
          error.message
        }}</v-alert>
        <v-text-field
          v-model="form.email"
          label="E-mail"
          prepend-icon="mdi-email"
        />
        <v-text-field
          v-model="form.password"
          label="Senha"
          prepend-icon="mdi-lock"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn type="submit" color="success">Registrar</v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "register-view",
  data() {
    return {
      error: "",
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
  methods: {
    doRegister(e) {
      e.preventDefault();

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>
