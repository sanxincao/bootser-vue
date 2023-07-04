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
    <a-checkbox-group v-model:value="checkedList" :options="missionKeys" style="display:grid"  />
  </template>
  <script lang="ts">
  import { defineComponent, reactive, toRefs, watch ,ref,computed, getCurrentInstance} from 'vue';
  import { Checkbox,Divider, CheckboxGroup } from 'ant-design-vue';
  import { products } from '@/store/data';
  import 'ant-design-vue/dist/antd.css'; 
  
  export default defineComponent({
    components: {
    'a-checkbox': Checkbox,
    'a-divider': Divider, 
    'a-checkbox-group': CheckboxGroup,
  },
  props: {
    missionvalue: {
    type: Number,
    default: 0,
  },
  },
  emits: ['checkbox-change:value'],
    setup(props, { emit }) {
      const instance = getCurrentInstance();
      const CheckValue = ref(props.missionvalue);
      const redRef = computed(() => {
      const id = Number(instance?.proxy?.$route.params.id);
      const product = products.find((p) => p.id === id);
      return product ? { mission: product.mission } : null;
    });
    const missionKeys = computed(() => {
      const keys: string[] = [];
      const addKeys = (obj: Record<string, any>) => {
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keys.push(key);
            if (typeof obj[key] === 'object') {
              addKeys(obj[key]);
            }
          }
        }
      };
      if (redRef.value) {
        addKeys(redRef.value.mission as Record<string, any>);
      }
      return keys;
    });


    
    const state = reactive({
        checkedList: missionKeys.value,
        indeterminate: true,
        checkAll: false,
      });
    
  
      const onCheckAllChange = (e: any) => {
        Object.assign(state, {
          checkedList: e.target.checked ? missionKeys.value : [],
          indeterminate: false,
        });
      };
      watch(
        () => state.checkedList,
        val => {
          state.indeterminate = !!val.length && val.length < missionKeys.value.length;
          state.checkAll = val.length === missionKeys.value.length;
          //获取 state.checkedList长度并循环获取其值
          for (let i = 0; i < state.checkedList.length; i++) {
            //获取state.checkedList中的值
            const value = state.checkedList[i];
            //触发自定义事件
            CheckValue.value+=redRef.value?.mission?.task1 as number;
            console.log(CheckValue.value);
          }
        },
      );
      
      return {
        ...toRefs(state),
        missionKeys: missionKeys.value,
        onCheckAllChange,
      };
    },
  });
  </script>
  
  