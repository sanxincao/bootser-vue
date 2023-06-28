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
    <a-checkbox-group v-model:value="checkedList" :options="plainOptions" :column="1"  />
  </template>
  <script lang="ts">
  import { defineComponent, reactive, toRefs, watch ,computed, getCurrentInstance} from 'vue';
  import { Checkbox,Divider, CheckboxGroup } from 'ant-design-vue';
  import { products } from '@/store/data';
  import 'ant-design-vue/dist/antd.css'; 
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  export default defineComponent({
    components: {
    'a-checkbox': Checkbox,
    'a-divider': Divider, 
    'a-checkbox-group': CheckboxGroup,
  },
    setup() {
      const instance = getCurrentInstance();
      const redRef = computed(() => {
      const id = Number(instance?.proxy?.$route.params.id);
      const product = products.find((p) => p.id === id);
      return product ? { mission: product.mission } : null;
    });
    const missionKeys = computed(() => {
  if (redRef.value) {
    return Object.keys(redRef.value.mission);
  } else {
    return [];
  }
});
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
  
  