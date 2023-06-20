<template>
    <div id="components-slider-demo-mark">
      <h4>included=true</h4>
      <a-slider v-model:value="value1" :marks="marks">
        <template #mark="{ label, point }">
          <template v-if="point === 100">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
      <a-slider v-model:value="value2" range :marks="marks">
        <template #mark="{ label, point }">
          <template v-if="point === 100">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
  
      <h4>included=false</h4>
      <a-slider v-model:value="value3" :marks="marks" :included="false">
        <template #mark="{ label, point }">
          <template v-if="point === 100">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
  
      <h4>marks & step</h4>
      <a-slider v-model:value="value4" :marks="marks" :step="10">
        <template #mark="{ label, point }">
          <template v-if="point === 100">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
  
      <h4>step=null</h4>
      <a-slider v-model:value="value5" :marks="marks" :step="null">
        <template #mark="{ label, point }">
          <template v-if="point === 100">
            <strong>{{ label }}</strong>
          </template>
          <template v-else>{{ label }}</template>
        </template>
      </a-slider>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import 'ant-design-vue/dist/antd.css'; 
  
  export default defineComponent({
    setup() {
      const value1 = ref<number>(37);
      const value2 = ref<[number, number]>([26, 37]);
      const value3 = ref<number>(37);
      const value4 = ref<number>(37);
      const value5 = ref<number>(37);
      const marks = ref<Record<number, any>>({
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50',
          },
          label: '100°C',
        },
      });
  
      return {
        value1,
        value2,
        value3,
        value4,
        value5,
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
  