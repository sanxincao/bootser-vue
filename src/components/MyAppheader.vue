<template>
    <header v-if="showHeader">
      <div class="auth-buttons">
        <router-link to="/login"  class="button-link">Login</router-link>
        <router-link to="/register" class="button-link">Register</router-link>
      </div>
    </header>
    
</template>
 
<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationNormalized } from "vue-router";

export default defineComponent({
  data() {
    return {
      showHeader: true,
    };
  },
  methods: {
    login(): void {
      // handle login logic
    },
    register(): void {
      // handle register logic
    },
  },
  created() {
    this.$router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
      if (to.path === "/login") {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      next();
    });
  },
});
</script>

<style>
  header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #141212;
  margin-left: 0;
  margin-right: 0;
}
  
  .button-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #333;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.button-link:hover {
  background-color: #333;
  color: #fff;
  border-color: #333;
}
  .auth-buttons {
    display: flex;
    gap: 1rem;
  }
  </style>