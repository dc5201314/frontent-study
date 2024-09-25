<template>
    <div class="data-fetcher">

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const data = ref<string | null>(null);
const loading = ref(false);


const fetchData = async () => {
    loading.value = true; // 开始加载

    await new Promise((resolve) => setTimeout(resolve, 200));
    data.value = "jiazai"
    loading.value = false;


};

onMounted(() => {
    console.log("组件挂载")
    fetchData()
})


onMounted(() => {
    console.log("组件卸载")
})
</script>



<style scoped>
.data-fetcher {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.error {
    color: red;
}
</style>
