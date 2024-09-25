<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">用户名：</label>
            <input type="text" v-model="form.username" required />
        </div>
        <div>
            <label for="email">邮箱：</label>
            <input type="email" v-model="form.email" required />
        </div>
        <button type="submit">提交</button>
    </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit-form']);

const form = ref({
    username: '',
    email: '',
});

// 提交表单的逻辑
const submitForm = () => {
    emit('submit-form', form.value); // 将表单数据向父组件提交
};
</script>

<style scoped>
/* 可以添加样式 */
</style>
