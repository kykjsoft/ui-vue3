<template>
    <div class="p-2 gap-2 flex flex-col">
        <div>
            ProSelect 示例
            <ElIcon>
                <SvgSetting></SvgSetting>
            </ElIcon>
        </div>

        <div>
            <KjProSelect v-model="value" :data="items"></KjProSelect>
        </div>
    </div>
</template>

<script lang="ts" setup>

import {ref} from 'vue'
const value = ref('')
const items = ref([
    {id:1,label:'111'},
    {id:2,label:'222'},
    {id:3,label:'333'}
])

</script>