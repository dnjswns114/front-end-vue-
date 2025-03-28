<template>
    <div class="card">
        <div class="card-header">Exam04ViewNavigation</div>
        <div class="card-body">
            <h5>태그로 화면 이동</h5>
            <p><RouterLink to="/Ch02ComponentRouting/Exam01SingleFileComponent">Exam01SingleFileComponent</RouterLink></p>
            <p><RouterLink v-bind:to="`/Ch02ComponentRouting` + `/Exam01SingleFileComponent`">Exam01SingleFileComponent</RouterLink></p>
            <p><RouterLink :to="`/Ch02ComponentRouting` + `/Exam01SingleFileComponent`">Exam01SingleFileComponent</RouterLink></p>
            <p><RouterLink :to="{path: '/Ch02ComponentRouting/Exam01SingleFileComponent'}">Exam01SingleFileComponent</RouterLink></p>
            <p><RouterLink :to="{name: 'Exam01SingleFileComponent'}">Exam01SingleFileComponent</RouterLink></p>

            <hr/>

            <h5>프로그램으로 화면 이동</h5>
            <p><button class="btn btn-info btn-sm" v-on:click="goUrl('Exam01SingleFileComponent')">Exam01SingleFileComponent</button></p>
            <p><button class="btn btn-info btn-sm" @click="goUrl('Exam02FolderComponent')">Exam02FolderComponent</button></p>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();

function goUrl(path) {
    router.push(`/Ch02ComponentRouting/${path}`)
    .then(() => {
        console.log("이동 완료");
    });
}
</script>

<style scoped>
</style>