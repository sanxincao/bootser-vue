<template>
  <div class="home">
    <ProductGrid :products="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductGrid from "@/components/ProductGrid.vue";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductGrid,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/200x200",
        },
        {
          id: 2,
          name: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/200x200",
        },
        {
          id: 3,
          name: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/200x200",
        },
        {
          id: 4,
          name: "Product 1",
          price: 10,
          image: "https://via.placeholder.com/200x200",
        },
        {
          id: 5,
          name: "Product 2",
          price: 20,
          image: "https://via.placeholder.com/200x200",
        },
        {
          id: 6,
          name: "Product 3",
          price: 30,
          image: "https://via.placeholder.com/200x200",
        },
        
      ] as Product[],
    };
  },
});
</script>
