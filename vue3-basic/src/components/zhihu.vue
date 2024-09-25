<template>
    <el-container
        style="height: 100vh; background: url('../assets/background.jpg') no-repeat center center fixed; background-size: cover;"
        class="dark">
        <!-- Header -->
        <el-header>
            <div class="header-content">
                <h1 class="logo">知乎</h1>

                <div class="header-menu">
                    <el-menu class="menu" mode="horizontal" background-color="#ffffff">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">话题</el-menu-item>
                        <el-menu-item index="3">热榜</el-menu-item>
                        <el-menu-item index="4">关注</el-menu-item>
                        <el-menu-item index="5">今日说法</el-menu-item>
                    </el-menu>
                    <el-input placeholder="搜索问题" suffix-icon="el-icon-search" class="search-input" clearable></el-input>
                    <el-button type="primary">搜索</el-button>
                </div>

                <div class="icon-container">
                    <el-tooltip class="item" content="消息" placement="bottom">
                        <img src="../assets/私信.png" alt="消息" class="icon" />
                    </el-tooltip>
                    <el-tooltip class="item" content="私信" placement="bottom">
                        <img src="../assets/xiaoxi.png" alt="私信" class="icon" />
                    </el-tooltip>
                    <el-dropdown>
                        <el-button type="text">
                            <img src="../assets/1.jpg" alt="用户头像" class="avatar" />
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的账户</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item divided>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>


        <el-container style="margin-left: 10px;">
            <!-- Sidebar -->
            <el-aside width="320px" class="sidebar">
                <el-menu style="margin-right: 20px;margin-left: 20px;margin-top: 10px;">
                    <el-menu-item index="1">我的话题</el-menu-item>
                    <el-menu-item index="2">我关注的</el-menu-item>
                    <el-menu-item index="3">私信</el-menu-item>
                    <el-menu-item index="4">收藏</el-menu-item>
                </el-menu>


                <!-- 创建中心组件 -->
                <el-card class="creation-center" style="margin-right: 10px;margin-left: 10px;">
                    <div class="creation-header">
                        <img src="../assets/创作中心.png" alt="创建中心图标" class="creation-icon" />
                        <span>创造中心</span>
                    </div>
                    <div class="creation-functions">
                        <div class="creation-function">
                            <el-tooltip content="回答问题" placement="top">
                                <img src="../assets/回答问题.png" alt="回答问题" class="function-icon" />
                            </el-tooltip>
                            <div class="function-name">回答问题</div>
                        </div>
                        <div class="creation-function">
                            <el-tooltip content="发视频" placement="top">
                                <img src="../assets/发视频.png" alt="发视频" class="function-icon" />
                            </el-tooltip>
                            <div class="function-name">发视频</div>
                        </div>
                        <div class="creation-function">
                            <el-tooltip content="写文章" placement="top">
                                <img src="../assets/写文章.png" alt="写文章" class="function-icon" />
                            </el-tooltip>
                            <div class="function-name">写文章</div>
                        </div>
                        <div class="creation-function">
                            <el-tooltip content="写想法" placement="top">
                                <img src="../assets/写想法.png" alt="写想法" class="function-icon" />
                            </el-tooltip>
                            <div class="function-name">写想法</div>
                        </div>
                    </div>

                    <!-- 数据区域 -->
                    <div class="data-section">
                        <div class="shadow-box">
                            <p class="light-text">今日数据</p>
                            <p class="large-text">0</p>
                            <p class="light-text">昨日数据0</p>
                        </div>
                    </div>

                    <el-button class="enter-creation" type="primary" @click="enterCreationCenter">
                        进入创作中心
                    </el-button>
                </el-card>



            </el-aside>

            <!-- Main Section -->
            <el-main>
                <div style="display: flex; height: 100%;">
                    <!-- 问题卡片部分 -->
                    <div style="flex: 3; padding-right: 20px;">
                        <div class="content-list">
                            <el-card v-for="(question, index) in questions" :key="index" class="question-card"
                                :body-style="{ padding: '20px' }">
                                <div class="card-content">

                                    <div class="card-body">
                                        <div class="card-header">
                                            <h3>{{ question.title }}</h3>
                                        </div>
                                        <span class="time">{{ question.timestamp }}</span>
                                        <p>{{ question.description }}</p>
                                        <div class="tags">
                                            <el-tag type="info">前端开发</el-tag>
                                            <el-tag type="success">JavaScript</el-tag>
                                        </div>
                                        <el-button type="text" class="view-button">查看回答 ({{ question.answerCount
                                            }})</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                        <el-button type="primary" class="load-more-button" @click="loadMore">加载更多</el-button>
                    </div>

                    <!-- 热门话题部分 -->
                    <div style="flex: 1;">
                        <div class="hot-topics">
                            <h2>热门话题</h2>
                            <el-tag type="danger" style="margin-right: 10px;">前端开发</el-tag>
                            <el-tag type="warning" style="margin-right: 10px;">后端开发</el-tag>
                            <el-tag type="success" style="margin-right: 10px;">人工智能</el-tag>
                            <el-tag type="info" style="margin-top: 10px;margin-right: 10px;">数据科学</el-tag>
                            <el-tag type="success" style="margin-top: 10px;margin-right: 10px;">人文科学</el-tag>
                            <el-tag type="danger" style="margin-top: 10px;margin-right: 10px;">生物科技</el-tag>
                            <el-divider></el-divider>

                            <div class="additional-content">
                                <h3>推荐问题</h3>
                                <el-card v-for="(recommendation, index) in recommendations" :key="index"
                                    class="recommendation-card" style="margin-bottom: 10px;">
                                    <div class="recommendation-content">
                                        <h4>{{ recommendation.title }}</h4>
                                        <el-button type="text"
                                            @click="viewRecommendation(recommendation.link)">查看问题</el-button>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>

        <!-- Footer -->
        <el-footer>
            <div class="footer-content">
                <p>© 2024 公司 | <a href="#">关于我们</a> | <a href="#">帮助</a></p>
            </div>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// main.ts
// 如果只想导入css变量
import 'element-plus/theme-chalk/dark/css-vars.css'

interface Question {
    id: number
    title: string
    description: string
    answerCount: number
    timestamp: string
    image: string // 添加图片字段
}

interface Recommendation {
    title: string
    link: string
}

// 问题数据
const questions = ref<Question[]>([
    { id: 1, title: "如何学习前端开发？", description: "前端开发需要哪些技能？", answerCount: 5, timestamp: '2023-09-01', image: '../assets/question1.jpg' },
    { id: 2, title: "面试中的常见问题有哪些？", description: "准备面试需要注意什么？", answerCount: 2, timestamp: '2023-08-30', image: '../assets/question2.jpg' },
    { id: 3, title: "JavaScript 中的闭包是什么？", description: "我该如何理解闭包？", answerCount: 8, timestamp: '2023-09-05', image: '../assets/question3.jpg' },
    { id: 4, title: "如何提高我的编程能力？", description: "有哪些好的学习资源？", answerCount: 3, timestamp: '2023-09-10', image: '../assets/question4.jpg' },
    { id: 5, title: "哪些框架适合新手学习？", description: "适合新手的框架推荐有哪些？", answerCount: 6, timestamp: '2023-09-15', image: '../assets/question5.jpg' },
]);

// 推荐数据
const recommendations = ref<Recommendation[]>([
    { title: "如何选择适合自己的前端框架？", link: '/questions/1' },
    { title: "机器学习和深度学习的区别是什么？", link: '/questions/2' },
    { title: "在数据科学中如何处理缺失值？", link: '/questions/3' },
    { title: "常用的后端开发语言有哪些？", link: '/questions/4' },
]);

// 功能函数
const loadMore = () => {
    console.log('加载更多问题');
}

const viewRecommendation = (link: string) => {
    console.log('查看问题:', link);
}

const enterCreationCenter = () => {
    console.log('进入创作中心');
}
</script>

<style scoped>
.data-section {
    margin-top: 10px;
    /* 上边距调整，与功能区的间距 */
}

.shadow-box {
    background-color: rgb(249, 249, 250);
    /* 浅灰色背景 */
    padding: 20px;
    /* 内边距 */
    border-radius: 5px;
    /* 圆角 */
    text-align: center;
    /* 文本居中 */
}

.light-text {
    color: rgb(103, 104, 105);
    /* 淡灰色 */
    margin: 0;
    /* 去掉段落默认间距 */
}

.large-text {
    color: #333;
    /* 深颜色 */
    font-size: 1.5em;
    /* 增加字体大小 */
    margin: 10px 0;
    /* 上下间距 */
}

/* General Styles */
body {
    font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* Header Styles */
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.8);
}

.logo {
    font-size: 2rem;
    color: #409EFF;
}

.header-menu {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
}

.menu {
    margin: 0 20px;
}

.search-input {
    width: 300px;
}

.icon-container {
    display: flex;
    align-items: center;
}

.icon {
    width: 30px;
    height: 30px;
    margin: 0 10px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

/* Sidebar Styles */
.sidebar {
    margin-top: 50px;
    background-color: #f5f7fa;
}

/* 创造中心卡片样式 */
.creation-center {
    padding: 15px;
    margin-top: 20px;
}

.creation-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.creation-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.creation-functions {
    display: flex;
    justify-content: space-between;
}

.creation-function {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.function-icon {
    width: 50px;
    /* 图标大小 */
    height: 50px;
    /* 图标大小 */
    margin-bottom: 5px;
}

.enter-creation {
    width: 100%;
    margin-top: 20px;
}

/* Main Content Styles */
.content-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.question-card {
    padding: 15px;
    box-shadow: 0 4px 22px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border-radius: 10px;
    background-color: #fff;
}

.question-card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.card-content {
    display: flex;
    /* 使内容呈现为水平排列 */
}

.question-image {
    width: 80px;
    /* 图片宽度 */
    height: 80px;
    /* 图片高度 */
    margin-right: 20px;
    /* 图片与内容间距 */
    border-radius: 8px;
    /* 图片圆角 */
}

.card-body {
    flex-grow: 1;
    /* 使内容区扩展以填满剩余空间 */
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.time {
    color: #999;
    font-size: 0.9rem;
}

.tags {
    margin: 10px 0;
}

/* 热门话题 */
.hot-topics {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    margin: 20px 0;
}

.topic-card {
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 10px;
}

/* 推荐问题 */
.recommendation-card {
    padding: 15px;
    border: 1px solid #ececec;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.additional-content {
    margin-top: 20px;
}

/* Footer Styles */
.el-footer {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 0;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-icons {
    display: flex;
    margin-top: 10px;
}

.social-icon {
    width: 24px;
    height: 24px;
    margin: 0 10px;
}

/* Load More Button */
.load-more-button {
    display: block;
    margin: 20px auto;
}

/* View Button */
.view-button {
    color: #409EFF;
    text-decoration: underline;
}
</style>
