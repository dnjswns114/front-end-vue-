<template>
    <div class="card">
        <div class="card-header">Exam06UrlDataReceive</div>
        <div class="card-body">
            <h5>경로변수로 전달된 데이터</h5>
            <p>전달된 게시판 종류: {{ route.params.kind }}</p>
            <p>전달된 색상 이름: {{ route.params.color }}</p>
            
            <h5 class="mt-5">쿼리스트링으로 전달된 데이터</h5>
            <p>전달된 게시판 종류: {{ route.query.kind }}</p>
            <p>전달된 색상 이름: {{ route.query.color }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

console.log("route.params.kind:", route.params.kind);
console.log("route.params.color:", route.params.color);
console.log("route.query.kind:", route.query.kind);
console.log("route.query.color:", route.query.color);
</script>

<style scoped>
</style>