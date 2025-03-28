<template>
    <div class="card">
        <div class="card-header">Exam03UseUIComponent</div>
        <div class="card-body">
            <UIComponentA/>
            <UIComponentB class="mt-3"/>
            <UIComponentC class="mt-3"/>
            <UIComponentD class="mt-3"/>
        </div>
    </div>
</template>

<script setup>
import UIComponentA from '@/components/Ch02ComponentRouting/UIComponentA.vue';
import UIComponentB from '@/components/Ch02ComponentRouting/UIComponentB.vue';
import UIComponentC from '@/components/Ch02ComponentRouting/UIComponentC.vue';
import UIComponentD from './UIComponentD.vue'
</script>

<style scoped>
</style>