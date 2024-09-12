<!-- <template>
    <div>
    <button :disabled="isDisabled">点击我</button>
    </div>
   </template>
   <script setup lang="ts">
   import { ref } from 'vue'
   // 定义响应式的布尔变量
   const isDisabled = ref<boolean>(false)
   </script>

 -->
 <template>
    <div>
    <!-- 绑定 disabled 属性 -->
    <button :disabled="isDisabled">点击我</button>
    </div>
   </template>
   <script setup lang="ts">
   import { ref } from 'vue'
   // 定义响应式的布尔变量
   const isDisabled = ref<boolean>(false)
   </script>
   