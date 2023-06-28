<template>
    <div>
      <a-checkbox
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="onCheckAllChange"
      >
        Check all
      </a-checkbox>
    </div>
    <a-divider />
    <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
  </template>
  <script lang="ts">
  import { defineComponent, reactive, toRefs, watch } from 'vue';
  import { Checkbox } from 'ant-design-vue';
  import { products } from '@/store/data';
  import 'ant-design-vue/dist/antd.css'; 
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  export default defineComponent({
    components: {
    'a-checkbox': Checkbox
  },
    setup() {
      const state = reactive({
        indeterminate: true,
        checkAll: false,
        checkedList: ['Apple', 'Orange'],
      });
  
      const onCheckAllChange = (e: any) => {
        Object.assign(state, {
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
        });
      };
      watch(
        () => state.checkedList,
        val => {
          state.indeterminate = !!val.length && val.length < plainOptions.length;
          state.checkAll = val.length === plainOptions.length;
        },
      );
  
      return {
        ...toRefs(state),
        plainOptions,
        onCheckAllChange,
      };
    },
  });
  </script>
  
  