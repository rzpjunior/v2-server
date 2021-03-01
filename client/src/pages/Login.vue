<template>
  <div>
    <input 
      placeholder="email"
      v-model="form.email"
      name="email"
      type="text">
      <input 
      placeholder="password"
      v-model="form.password"
      name="password"
      type="text"><br><br>
      <button @click="onSubmit">login</button>
  </div>
</template>
<style scoped>
.card-login {
  background: linear-gradient(
    172.75deg,
    #e0f0cc 5.64%,
    rgba(240, 251, 226, 0.25) 94.36%
  );
  mix-blend-mode: normal;
  border-radius: 30px;
  border-style: 0;
}
</style>

<script>
import AuthService from "../services/AuthService.js";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: {},
      show: false,
    };
  },
  mounted() {
    
  },
  computed: {
      validation() {
          if (this.form.email.length>0 && this.form.password.length>0) {
            return false
          } else {
            return true
          }
      }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await AuthService.login(this.form);
        this.msg = response.msg;
        const token = response.data.token;
        const staff = response.data.staff;
        this.$store.dispatch("login", { token, staff });
        const priv = await this.$http
          .get("/permission/privilege")
          .then((response) => response.data);
        localStorage.setItem("priv", priv.data);
        // this.$router.push("/Home");
        window.location.reload("/test")
      } catch (error) {
        this.error = error.response.data.errors;
      }
    },
  },
};
</script>