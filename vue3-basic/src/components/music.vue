<template>
    <el-container class="el-container" style="height: 100%;">
        <!-- Header -->
        <el-header class="header">
            <div class="header-content">
                <h1 class="logo">我的个人博客</h1>
                <el-input placeholder="搜索文章..." suffix-icon="el-icon-search" class="search-input"></el-input>
            </div>
        </el-header>

        <el-container style="margin-top: 10px;margin-left: 10px;margin-bottom: 10px;">
            <!-- Sidebar -->
            <el-aside width="250px" class="sidebar">
                <div class="user-profile">
                    <img class="avatar" src="../assets/1.jpg" alt="User Avatar" />
                    <h3 class="username">孙悟空</h3>
                    <p class="bio">这个人很神秘，什么都没留下。</p>
                </div>
                <div class="popular-posts" style="margin-bottom: 10px;">
                    <h3>热门文章</h3>
                    <ul>
                        <li v-for="post in popularPosts" :key="post.id">
                            <a href="#" class="post-link">
                                {{ post.title }}
                            </a>
                        </li>
                    </ul>
                </div>
                <el-menu class="menu" :default-active="activeTab" @select="setActiveTab">
                    <el-menu-item index="首页">首页</el-menu-item>
                    <el-menu-item index="生活">生活</el-menu-item>
                    <el-menu-item index="技术">技术</el-menu-item>
                    <el-menu-item index="随笔">随笔</el-menu-item>
                    <el-menu-item index="关于">关于</el-menu-item>
                </el-menu>

                <div class="social-links">
                    <a href="#" class="social-link">微博</a>
                    <a href="#" class="social-link">微信</a>
                    <a href="#" class="social-link">GitHub</a>
                </div>
            </el-aside>

            <!-- Main Section -->
            <el-main class="main">
                <!-- Carousel Banner -->
                <el-carousel class="banner" height="200px" autoplay interval="4000">
                    <el-carousel-item v-for="item in banners" :key="item.id">
                        <img :src="item.image" alt="Banner" class="banner-image">
                    </el-carousel-item>
                </el-carousel>

                <h2 class="title">最新文章</h2>

                <el-card v-for="post in posts" :key="post.id" class="post-card" :body-style="{ padding: '20px' }">
                    <img :src="post.cover" class="post-cover" alt="Post Cover">
                    <div class="post-header">
                        <h3>{{ post.title }}</h3>
                        <div class="post-date">{{ post.date }}</div>
                    </div>
                    <div class="post-content">{{ post.content }}</div>
                    <div class="post-tags">
                        <el-tag v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</el-tag>
                    </div>
                    <el-button class="read-more" @click="readPost(post.id)">阅读全文</el-button>
                </el-card>
            </el-main>
        </el-container>

        <!-- Footer -->
        <el-footer class="footer">
            <p>
                © 2024 My Blog |
                <a href="#" class="footer-link">隐私政策</a> |
                <a href="#" class="footer-link">联系我</a>
            </p>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import banner1 from '../assets/5.jpg';
import banner2 from '../assets/6.jpg';
import banner3 from '../assets/7.jpg';
import post2 from '../assets/3.jpg';

const activeTab = ref('首页');
const banners = ref([{ id: 1, image: banner1 }, { id: 2, image: banner2 }, { id: 3, image: banner3 }]);
const posts = ref([
    { id: 2, title: '如何使用 Element Plus 构建项目', date: '2024-08-27', content: 'Element Plus 是为 Vue 3 开发的 UI 框架，提供了一系列简洁的组件，为你的项目节省时间。', tags: ['Element Plus', 'UI', '设计'], cover: post2 },
]);
const popularPosts = [
    { id: 1, title: '如何学习前端开发？' },
    { id: 2, title: '闭包是什么？' },
    { id: 3, title: '如何提高编程能力？' },
];
const setActiveTab = (tab: string) => {
    activeTab.value = tab;
};

const readPost = (id: number) => {
    console.log(`阅读文章 ID: ${id}`);
};
</script>

<style scoped>
@keyframes flowing-background {
    0% {
        background: linear-gradient(135deg, #FFB6C1 0%, #FFD700 50%, #ADFF2F 100%);
    }

    25% {
        background: linear-gradient(135deg, #FFD700 0%, #ADFF2F 50%, #FFB6C1 100%);
    }

    50% {
        background: linear-gradient(135deg, #ADFF2F 0%, #FFB6C1 50%, #FFD700 100%);
    }

    75% {
        background: linear-gradient(135deg, #FFB6C1 0%, #FFD700 50%, #ADFF2F 100%);
    }

    100% {
        background: linear-gradient(135deg, #FFD700 0%, #ADFF2F 50%, #FFB6C1 100%);
    }
}

.el-container {
    animation: flowing-background 8s ease-in-out infinite alternate;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    color: #333;
}

.header {
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    height: 60px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(3px);
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: #409EFF;
    letter-spacing: 1px;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.logo:hover {
    color: #3476f1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
}

.search-input {
    width: 300px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color 0.3s ease;
}

.search-input:hover {
    background-color: rgba(255, 255, 255, 1);
}

.sidebar {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.user-profile {
    text-align: center;
    margin-bottom: 20px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.username {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0 5px;
    color: #2c3e50;
    background: linear-gradient(to right, #FFB6C1, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.bio {
    font-size: 0.9rem;
    color: #666;
}

.popular-posts {
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
}

.popular-posts h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #FF6347;
    text-align: center;
    font-weight: bold;
}

.popular-posts li {
    margin: 10px 0;
}

.post-link {
    display: block;
    padding: 10px;
    text-decoration: none;

    color: #4A90E2;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: 500;
}

.post-link:hover {
    background-color: rgba(255, 200, 200, 0.5);
    color: #FF6347;
}

.popular-posts ul {
    list-style: none;
    /* 确保没有小点 */
    padding: 0;
    margin: 0;
}

.main {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 2.5rem;
    margin-bottom: 25px;
    font-weight: bold;
    color: #fbcd90;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.banner {
    margin: 20px 0;
}

.banner-image {
    width: 100%;
    height: 200px;
    filter: brightness(0.9);
    border-radius: 10px;
    transition: transform 0.3s;
}

.banner-image:hover {
    transform: scale(1.05);
}

.post-card {
    margin-bottom: 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.post-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
}

.post-cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-date {
    font-size: 0.9rem;
    color: #999;
}

.post-content {
    margin: 10px 0;
    line-height: 1.6;
    font-size: 1rem;
    color: #666;
}

.post-tags {
    margin: 10px 0;
}

.tag {
    margin-right: 5px;
}

.read-more {
    margin-top: 10px;
    background: linear-gradient(to right, #FFB6C1, #FFD700);
    color: #fff;
    border-radius: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.read-more:hover {
    background-color: #FF69B4;
    transform: translateY(-3px);
}

.footer {
    background-color: rgba(255, 255, 255, 0.9);
    color: #666;
    text-align: center;
    padding: 15px 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.footer-link {
    color: #333;
    text-decoration: underline;
}

.footer-link:hover {
    color: #409EFF;
}

.social-links {
    text-align: center;
    margin-top: 20px;
}

.social-link {
    margin: 0 10px;
    color: #409EFF;
    transition: color 0.3s ease;
}

.social-link:hover {
    color: #FF69B4;
}
</style>
