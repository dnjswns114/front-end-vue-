<template>
    <div class="card">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <p>userId: {{ prop.userId }}</p>
            <p>userName: {{ prop.userName }}</p>
            <p>board: {{ prop.board.bno }}, {{ prop.board.btitle }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const prop = defineProps([
    "userId", "userName", "board"
]);

console.group("UIComponentB");
console.log("userId: ", prop.userId);
console.log("userName: ", prop.userName);
console.log("bard: ", structuredClone(prop.board));
console.groupEnd();
</script>

<style scoped>
</style>