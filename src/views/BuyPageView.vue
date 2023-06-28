<template>
    <div class="buy-page">
      <h1>Buy {{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product?.price }}</p>
      <antcheckbox />
      <form @submit.prevent="buy">
        <antslider v-if="showSlider"/>
        
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" v-model.number="quantity" required />
        <button type="submit">Buy</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed , ref} from "vue";
  import antslider from "@/components/NotIncluSlider.vue";
  import antcheckbox from "@/components/CheckBox.vue";
  import { products } from '@/store/data';

  export default defineComponent({
    components: {
      antslider,
      antcheckbox
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
      return products.find((p) => p.id === id);
    },
    showSlider() : boolean {
      const id = Number(this.$route.params.id);
      const producttemp = products.find((p) => p.id === id);
      return producttemp?.marks !== undefined;
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