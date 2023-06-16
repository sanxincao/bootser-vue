<template>
  <div class="container">
    <div>
      <h1>Login don't need password</h1>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit" @click.prevent="login">Login</button>
      </form>
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import instance from "@/api";
  
  export default defineComponent({
    name: "LoginView",
    data() {
      return {
        email: "",
      };
    },
    methods: {
      async login(): Promise<void> {
        try {
          const response = await instance.post("/login", {
            email: this.email,
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
  </script>
  
  <style scoped>
   .container {
   display: flex;
   justify-content: center;
 }
 
 .form {
   width: 50%;
 }
 
 .form-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
 }
 
 label {
   display: block;
   margin-bottom: 0.5rem;
 }
 
 input[type="email"] {
   width: 100%;
   padding: 0.5rem;
   border: 1px solid #ccc;
   border-radius: 0.25rem;
 }
 
 button[type="submit"] {
   padding: 0.5rem;
   background-color: #007bff;
   color: #fff;
   border: none;
   border-radius: 0.25rem;
   cursor: pointer;
 }
  </style>