<template>
    <div class="card">
        <div class="card-header">UpdateHook</div>
        <div class="card-body">
            <p>count: {{ count }}</p>
            <button id="mybutton" class="btn btn-info btn-sm mt-2" @click="count++">상태 변경</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, onBeforeUpdate, onUpdated } from "vue";

//상태 생성
const count = ref(0);

//Lifecycle Hook 정의
onMounted(() => {
    console.log("UpdateHook 컴포넌트가 마운트됨");
    count.value = 100;
});

onUnmounted(() => {
    console.log("UpdateHook 컴포넌트가 언마운트됨");
});

onBeforeUpdate(() => {
    console.log("UpdateHook 컴포넌트가 업데이트 직전임");
});

onUpdated(() => {
    console.log("UpdateHook 컴포넌트가 업데이트됨");
    //count.value += 1; //상태 변경 코드를 넣을 수 없음
});

</script>

<style scoped>
</style>