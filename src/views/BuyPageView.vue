<template>
    <div class="buy-page">
      <h1>Buy {{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product?.price }}</p>
      <antcheckbox v-if="ShowCheckbox" />
      <form @submit.prevent="buy">
        <antslider v-if="showSlider" @range-change:value="handleSliderChange"/>
        
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
      console.log("handleSliderChange:", value);
      Sumprice.value+=value;
    }

    const ShowCheckbox = computed(() => {
      const id = Number(Currentinstance?.proxy?.$route.params.id);
      const producttemp = products.find((p) => p.id === id);
      return producttemp?.mission !== undefined;
    });

    const buy = () => {
      // 购买商品
      instance.post("/buy", {
        id: Number(Currentinstance?.proxy?.$route.params.id),
        quantity: quantity.value,
      });
    };

    return {
      quantity,
      product,
      showSlider,
      ShowCheckbox,
      handleSliderChange,
      buy,
    };
  },
    
   
  });
  </script>