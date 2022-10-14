<script lang="ts" setup>
import {defineProps,defineEmits} from 'vue'
import VTSwitch from './Switch.vue'
import {Sunny,Moon} from '@element-plus/icons-vue'

const emit = defineEmits<{
  (event: 'update:modelValue',value:Boolean): void
}>()

const props = defineProps({
    modelValue:{type:Boolean,default:false}
})

const handleClick=(e:MouseEvent)=>{
    emit('update:modelValue',!props.modelValue)
}

</script>

<template>
  <VTSwitch
    class="vt-switch-appearance cursor-pointer relative"
    @click="handleClick"
  >
    <Sunny v-show="!props.modelValue" class="absolute top-3px left-3px w-3 h-12px"></Sunny>
    <Moon v-show="props.modelValue" class="absolute top-3px left-3px w-3 h-12px"></Moon>
  </VTSwitch>
</template>

<style lang="scss">
.vt-switch-appearance{
    position: relative;
    background: #f1f1f1;
    transition: border-color .25s,background-color .25s;
    border:1px solid rgba(60,60,60,.29);
    border-radius: 11px;
    width: 40px;
    height: 22px;
    display: block;

    &:hover{
        border-color:#8e8e8e;
    }
    .vt-switch-check{
        background: #fff;
    }
}

.dark .vt-switch-appearance{
    border-color:rgba(84,84,84,.65);
    background: #2f2f2f;
    &:hover{
        border-color:#8e8e8e;
    }
    .vt-switch-check{
        background: #1a1a1a;
        transform: translate(18px);
    }
}
</style>