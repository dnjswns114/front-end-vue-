<template>
    <div class="card">
        <div class="card-header">UIComponentC</div>
        <div class="card-body">
            <p>bno: {{ prop.bno }}</p>
            <p>btitle: {{ prop.btitle }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const prop = defineProps([
    "bno", "btitle"
]);

console.group("UIComponentC");
console.log("bno: ", prop.bno);
console.log("btitle: ", prop.btitle);
console.groupEnd();
</script>

<style scoped>
</style>