<template>
    <div class="card">
        <div class="card-header">Exam03ProvideInject</div>
        <div class="card-body">
            <div>
                <p>종목: {{ name }}</p>
                <p>현재가: {{ stock.currentPrice }}</p>
                <p>거래량: {{ stock.tradingVolume }}</p>
                <button class="mt-2 btn btn-danger btn-sm" @click="changeData">데이터 변경</button>
            </div>
            <hr/>
            <UIComponentA/>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from "vue";
import UIComponentA from "./UIComponentA.vue";

//상태 생성
const name = ref("삼성전자");
const stock = ref({
    ticker: "005930",
    currentPrice: 150000,
    tradingVolume: 1250000
});

//하위 컴포넌트로 데이터를 제공
provide("message", {name: name, stock: stock});

//데이터 변경 함수
function changeData() {
    stock.value.currentPrice = 200000;
    stock.value.tradingVolume = 1350000;
}
</script>

<style scoped>
</style>