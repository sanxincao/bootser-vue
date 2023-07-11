<template>
    <div class="buy-page">
      <div class="product-info">
        <h1>Buy {{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>{{ product?.price }}</p>
        <antcheckbox v-if="ShowCheckbox" @checkbox-change:value="handleCheckboxChange"/>
        <antslider v-if="showSlider" @range-change:value="handleSliderChange"/>
    </div>
      <form @submit.prevent="buy">
        
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" v-model.number="quantity" required />
        <button type="submit" >Buy</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed , ref,getCurrentInstance,onMounted} from "vue";
  import antslider from "@/components/NotIncluSlider.vue";
  import antcheckbox from "@/components/CheckBox.vue";
  import { products } from '@/store/data';
  import instance from "@/api";

  export default defineComponent({
    components: {
      antslider,
      antcheckbox
  },
  setup() {
    const Currentinstance = getCurrentInstance();
    const quantity = ref(1);
    const Sumprice= ref(1.00)

    const product = computed(() => {
      // 根据路由参数获取商品信息
      const id = Number(Currentinstance?.proxy?.$route.params.id);
      return (products.find((p) => p.id === id)) ||  { price: 0 } ;
    });
    Sumprice.value= product.value.price  *quantity.value
    const showSlider = computed(() => {
      const id = Number(Currentinstance?.proxy?.$route.params.id);
      const producttemp = products.find((p) => p.id === id);
      return producttemp?.marks !== undefined;
    });
    //获取子组件emit range-change:value携带的值
    function handleSliderChange(value: number) {
      Sumprice.value+=value;
      console.log("handleSliderChange:value",Sumprice.value)
    }
    //获取子组件emit checkbox-change:value携带的值
    function handleCheckboxChange(value: number) {
      Sumprice.value+=value;
      console.log("handleCheckboxChange:value",value)
      console.log("handleCheckboxChange:Sumprice",Sumprice.value)
    }

    const ShowCheckbox = computed(() => {
      const id = Number(Currentinstance?.proxy?.$route.params.id);
      const producttemp = products.find((p) => p.id === id);
      return producttemp?.missionmap !== undefined;
    });

    const buy = () => {
      // 购买商品
      instance.post("/buy", {
        id: Number(Currentinstance?.proxy?.$route.params.id),
        price: Sumprice.value,
      });
    };

    return {
      quantity,
      product,
      showSlider,
      ShowCheckbox,
      handleSliderChange,
      handleCheckboxChange,
      buy,
    };
  },
    
   
  });
  </script>
  <style>
  .buy-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .product-info {
    width: 50%;
    background-color: black;
    color: white;
    padding: 20px;
  }
  
  .buy-form {
    width: 50%;
    padding: 20px;
  }
  </style>