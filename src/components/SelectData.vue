<template>
    <ElSelect>
        <slot></slot>
        <ElOption v-for="item in props.data" :label="item[props.labelKey]" :value="item[props.idKey]">
            {{item[props.labelKey]}}
        </ElOption>
    </ElSelect>
</template>

<script lang="ts" setup>

const props = defineProps({
    idKey:{type:String,default:'id'},
    labelKey:{type:String,default:'label'},
    data:{type:Array as any}
})

</script>