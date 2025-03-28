<template>
    <div class="card">
        <div class="card-header">Exam01FallthroughAttr</div>
        <div class="card-body">
            <UIComponent class="bg-info" style="color:red" @click="handleClick"/>
        </div>
    </div>
</template>

<script setup>
import UIComponent from "./UIComponent.vue";

function handleClick() {
    console.log("handleClick() 실행됨");
}
</script>

<style scoped>
</style>