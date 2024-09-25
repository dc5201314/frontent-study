<template>
    <div class="user-profile-parent">
        <h1>用户管理系统</h1>
        <UserProfile :user="user" @update="handleUpdate" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './UserProfile.vue'; // 导入子组件

// 初始化用户数据，包括默认的用户名、邮箱和密码
const user = ref({
    username: '默认用户名',
    email: 'example@example.com',
    password: '',  // 添加密码字段
});

// 处理用户资料更新的事件
const handleUpdate = () => {
    console.log("用户资料已更新:", user.value);
    // 可以在这里添加逻辑，比如发送到服务器
};
</script>

<style scoped>
.user-profile-parent {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

h1 {
    text-align: center;
}
</style>
