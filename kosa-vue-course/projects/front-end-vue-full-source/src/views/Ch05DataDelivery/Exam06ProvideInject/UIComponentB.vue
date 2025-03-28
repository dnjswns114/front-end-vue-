<template>
    <div class="card">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <div>
                <p>종목: {{ message.name.value }}</p>
                <p>현재가: {{ message.stock.value.currentPrice }}</p>
                <p>거래량: {{ message.stock.value.tradingVolume }}</p>
                <button class="mt-2 btn btn-danger btn-sm" @click="changeData">데이터 변경</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("message");

//데이터 변경 함수
function changeData() {
    message.stock.value.currentPrice = 250000;
    message.stock.value.tradingVolume = 1700000;
}
</script>

<style scoped>
</style>