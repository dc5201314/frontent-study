<template>
    <div class="card">
        <div class="card-body">
            <header>
                <slot name="header">
                    <h3 class="card-title">默认头部</h3> <!-- 默认标题 -->
                </slot>
            </header>
            <main>
                <slot name="main">
                    <p class="card-description">默认主体内容。</p> <!-- 默认描述 -->
                </slot>
            </main>

            <footer>
                <slot name="footer">
                    <p class="card-description">默认底部内容。</p>
                </slot>
            </footer>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}

.card-body {
    padding: 20px;
}

.card-title {
    font-size: 1.5em;
    margin: 0 0 10px;
}

.card-description {
    font-size: 1em;
    margin: 0 0 20px;
}

.card-button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.card-button:hover {
    background-color: #0056b3;
}
</style>
