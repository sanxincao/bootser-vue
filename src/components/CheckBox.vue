<template>
  
    <div class="custom-checkbox">
      <a-checkbox id="checkAll"
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="onCheckAllChange"
      >
        Check all
      </a-checkbox>
   

    <a-divider />
    
      <a-checkbox-group id="checkgroup" v-model:value="checkedList" :options="missionKeys" style="display:grid"  />
    </div>
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
      return product ? { missionmap: product.missionmap } : null;
    });
    const missionKeys = computed(() => {
      //获取redRef missionmap数据中的key值并转换为数组
      return redRef.value?.missionmap ? Array.from(redRef.value.missionmap.keys()) : [];
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
            //用value作为mission的key获取对应的value值
            CheckValue.value+=redRef.value?.missionmap?.get(value) as number;
            console.log("CheckValue",CheckValue.value)
            emit("checkbox-change:value",CheckValue.value);
          }
          CheckValue.value=0;
        },
      );
      
      return {
        ...toRefs(state),
        CheckValue,
        missionKeys: missionKeys.value,
        onCheckAllChange,
      };
    },
  });
  </script>
  
<style>
.custom-checkbox {
  display: flex;
  color: white;
  flex-direction: column;
  margin-right: 0;
}

a-checkbox {
  margin-bottom: 16px;
}
a-checkbox .ant-checkbox-inner,
a-checkbox-group .ant-checkbox-group-item-label {
  
  color: white !important;
}
</style>
  