import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";

import * as firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyDClbHNdWVyvxG-pJpwsYwzXm9YkIT3MrQ",
  authDomain: "bigou-b5b89.firebaseapp.com",
  projectId: "bigou-b5b89",
  storageBucket: "bigou-b5b89.appspot.com",
  messagingSenderId: "809221787050",
  appId: "1:809221787050:web:a9f9e108404425a7542fd3",
  measurementId: "G-EY1CF5Y6RG",
});

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
