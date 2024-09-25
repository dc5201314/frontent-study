<template>
    <div id="app">
        <Card>
            <template #header>
                <h3>123456</h3>
            </template>
            <template #main>
                <p>
                    这是中间主体部分
                </p>
            </template>
            <template #footer>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure soluta maxime illo dolorum. Maiores
                    dicta error quo nostrum hic? Incidunt modi, adipisci porro ipsum omnis mollitia id qui vero tempora.
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue'; // 确保路径正确


</script>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.card-button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.card-button:hover {
    background-color: #218838;
}
</style>
