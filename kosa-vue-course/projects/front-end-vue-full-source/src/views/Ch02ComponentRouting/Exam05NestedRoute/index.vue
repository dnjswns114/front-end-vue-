<template>
    <div class="card">
        <div class="card-header">Exam05NestedRoute</div>
        <div class="card-body">
            <RouterLink to="UIComponentA" class="btn btn-info btn-sm me-3">UIComponentA</RouterLink>
            <RouterLink to="UIComponentB" class="btn btn-info btn-sm me-3">UIComponentB</RouterLink>
            <button @click="changeNestedComponent()" class="btn btn-info btn-sm me-3" >UIComponentC</button>            
            <hr/>
            <!-- 중첩된 라우트의 컴포넌트가 보여질 위치 -->
            <RouterView/>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function changeNestedComponent() {
    router.push("UIComponentC");
}
</script>

<style scoped>
</style>