<template>
    <div class="top">
        <el-card class="login-card ">
            <h2>登录</h2>
            <el-form label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义表单的响应式数据
const username = ref("")
const password = ref("")

// 模拟提交表单
const submitForm = () => {
    console.log("提交的数据：", {
        username: username.value,
        password: password.value,
    })
}
</script>

<style scoped>
.top {
    margin-top: 200px;
}

.login-card {
    margin-top: 200px;
    max-width: 400px;
    margin: 0 auto;
    padding: 100px;
}
</style>
