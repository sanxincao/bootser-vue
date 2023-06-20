<template>
    <div class="buy-page">
      <h1>Buy {{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product?.price }}</p>
      <form @submit.prevent="buy">
        <antslider />
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" v-model.number="quantity" required />
        <button type="submit">Buy</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed , ref} from "vue";
  import antslider from "@/components/NotIncluSlider.vue";


  export default defineComponent({
    components: {
      antslider
  },
  data() {
    return {
     
      quantity: 1,
    };
  },

  computed: {
    product() {
      // 根据路由参数获取商品信息
      const id = Number(this.$route.params.id);
      const products = [
        {
          id: 1,
          name: "Product 1",
          description: "Description of Product 1",
          price: 100,
          image: "https://example.com/product1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description of Product 2",
          price: 200,
          image: "https://example.com/product2.jpg",
        },
        // ...
      ];
      return products.find((p) => p.id === id);
    },
  },

  methods: {
    buy() {
      // 处理购买逻辑
      console.log(`Buy `);
    },
  },
    
   
  });
  </script>