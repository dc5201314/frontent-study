<template>
    <div class="user-profile">
        <h1>用户资料</h1>
        <form @submit.prevent="updateProfile">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" placeholder="输入用户名" v-model="user.username" />
            </div>
            <div class="form-group">
                <label for="email">邮箱:</label>
                <input type="email" id="email" placeholder="输入邮箱" v-model="user.email" />
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" placeholder="输入密码" v-model="user.password" />
            </div>
            <button type="submit">更新资料</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    user: {
        username: string;
        email: string;
        password: string; // 确认 password 属性在这里
    };
}>();

const emit = defineEmits(['update']);

const updateProfile = () => {
    console.log("更新的用户资料:", props.user);
    emit('update'); // 发出更新事件
    // 可以在这里添加逻辑，比如将用户资料发送到服务器
};
</script>

<style scoped>
.user-profile {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
