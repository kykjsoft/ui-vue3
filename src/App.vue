<script setup lang="ts">
import {watch,ref, onMounted} from 'vue'
import {Document,Setting,Location,Menu} from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import {useRoute} from 'vue-router'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const current = useRoute();

// onMounted(()=>{
//   alert(current.fullPath)
// })

// const activeIndex = ref('/index')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-2 line flex justify-between items-center">
      <div class="font-bold">@kykjsoft/ui-vue3</div>
      <div>
        <KjThemeSwitch :modelValue="isDark" @update:modelValue="toggleDark(!isDark)"></KjThemeSwitch>
      </div>
    </div>
    <div class="flex-1 flex overflow-auto">
      <div class="border-r text-red-200">
        <el-menu router
          :default-active="current.fullPath"
          class="el-menu-vertical-demo h-full overflow-auto"
          :collapse="false"
          @select="handleSelect"
          @open=""
          @close=""
        >
          <el-menu-item index="/index">
            <el-icon><Location /></el-icon>
            <template #title>首页</template>
          </el-menu-item>
          <el-menu-item index="/select">
            <el-icon><Menu /></el-icon>
            <template #title>ProSelect</template>
          </el-menu-item>
          <el-menu-item index="/data">
            <el-icon><Setting /></el-icon>
            <template #title>ProData</template>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon><Setting /></el-icon>
            <template #title>关于</template>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="flex-1 overflow-auto text-green-200">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
