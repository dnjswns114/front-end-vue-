<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div>
                <p>종목: {{ message.name.value }}</p>
                <p>현재가: {{ message.stock.value.currentPrice }}</p>
                <p>거래량: {{ message.stock.value.tradingVolume }}</p>
            </div>
            <hr/>
            <UIComponentB/>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
import UIComponentB from "./UIComponentB.vue";

const message = inject("message");

</script>

<style scoped>
</style>