<template>
    <div class="card">
        <div class="card-header">Exam03EventEmit</div>
        <div class="card-body">
            <UIComponent 
                    @click="handleClick"
                    @customEvent="handleCustomEvent"/>
        </div>
    </div>
</template>

<script setup>
import UIComponent from "./UIComponent.vue";

function handleClick() {
    console.group("handleClick() 실행");
    console.groupEnd();
}

function handleCustomEvent(arg1, arg2) {
    console.group("handleCustomEvent() 실행");
    console.log("arg1: ", arg1);
    console.log("arg2: ", arg2);
    console.groupEnd();
}
</script>

<style scoped>
</style>