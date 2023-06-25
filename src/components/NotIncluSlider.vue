<template>
    <div id="components-slider-demo-mark">
      
      <a-slider v-model:value="value2" range :marks="marks">
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
  import { defineComponent, ref } from 'vue';
  import { Slider } from 'ant-design-vue';
  import { products } from '@/store/data';
  import 'ant-design-vue/dist/antd.css'; 
  
  export default defineComponent({
    components: {
    'a-slider': Slider
  },
    setup() {
      const value2 = ref<[number, number]>([26, 37]); 
      const marks = ref<Record<number, any>>({
        0: '0level',
        26: '26level',
        37: '37level',
        54: '54level',
        90: '90level',
        },);
  
      return {
        
        value2,
       
        marks,
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
  