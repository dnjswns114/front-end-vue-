<template>
    <div class="card">
        <div class="card-header">UIComponent</div>
        <div class="card-body">
            <p>Click 이벤트 발생</p>
            <button class="btn btn-danger btn-sm me-2" @click="emit('click')">emit() 이용</button>
            <button class="btn btn-danger btn-sm me-2" @click="$emit('click')">$emit() 이용</button>
            <button class="btn btn-danger btn-sm" @click="handle1">코드 이용</button>
            <hr/>

            <p>Custom 이벤트 발생</p>
            <button class="btn btn-danger btn-sm me-2" @click="emit('customEvent', 'data1', 'data2')">emit() 이용</button>
            <button class="btn btn-danger btn-sm me-2" @click="$emit('customEvent', 'data1', 'data2')">$emit() 이용</button>
            <button class="btn btn-danger btn-sm" @click="handle2">코드 이용</button>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    "click", "customEvent"
]);

function handle1() {
    emit("click");
}

function handle2() {
    emit("customEvent", "data1", "data2");
}
</script>

<style scoped>
</style>