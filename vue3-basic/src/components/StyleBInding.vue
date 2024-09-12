<template>
    <div :class="{ highlight: isHighLight }">
      <p>这是一个示例文本</p>
      <button @click="toggleHighlight">切换高亮</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const isHighLight = ref<boolean>(false)
  
  const toggleHighlight = () => {
    isHighLight.value = !isHighLight.value
  }
  </script>
  
  <style scoped>
  .highlight {
    background-color: yellow; /* 高亮样式 */
    color: red; /* 文字颜色 */
  }
  </style>
  