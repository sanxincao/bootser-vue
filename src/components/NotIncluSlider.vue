<template>
    <div id="components-slider-demo-mark">
      
      <a-slider v-model:value="valueRef" :min="0" :max="90"  range :marks="mark">
        <template #mark="{ label, point }">
          <template v-if="point ===90">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
    </div>         
  </template>
  <script lang="ts">
  import { defineComponent, ref,computed,getCurrentInstance } from 'vue';
  import { Slider } from 'ant-design-vue';
  import { products } from '@/store/data';
  import 'ant-design-vue/dist/antd.css'; 
  
  export default defineComponent({
    components: {
    'a-slider': Slider
  },
  
  setup() {
    
    const instance = getCurrentInstance();
    const redRef = computed(() => {
      const id = Number(instance?.proxy?.$route.params.id);
      const product = products.find((p) => p.id === id);
      return product ? { value2: product.value2, mark: product.marks } : null;
    });
    const valueRef = ref([26,48]);
    valueRef.value = redRef.value?.value2 as number[];

    
   const mark=ref({0: '0level',
        }) ;
        
  
    mark.value = redRef.value?.mark ? {...mark.value, ...redRef.value.mark} : mark.value;
    
    return {
      redRef,
      valueRef,
      mark,
    };
  },
  });
  </script>
  <style scoped>
  #components-slider-demo-mark h4 {
    margin: 0 0 16px;
  }
  #components-slider-demo-mark .ant-slider-with-marks {
    margin-bottom: 44px;
  }
  </style>
  