<template>
  <div class="product-grid-container">
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-grid-item">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default defineComponent({
  name: "ProductGrid",
  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
});
</script>
<style scoped>
.product-grid-container {
  display: flex;
  justify-content: center;
  margin: 0 calc(50% - 50vw);
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: calc(4 / 5 * 100%);
}

.product-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
}

.product-grid-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.25rem;
}
</style>