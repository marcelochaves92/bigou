<template>
  <div>
    <v-card width="500" class="mx-auto mt-9">
      <v-card-title>Área de Login</v-card-title>
      <form @submit="submitLogin">
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
          <v-btn type="submit" color="info">Login</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "login-view",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: "",
      showPassword: false,
    };
  },
  methods: {
    submitLogin(e) {
      e.preventDefault();

      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          window.location.href = "/";
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
