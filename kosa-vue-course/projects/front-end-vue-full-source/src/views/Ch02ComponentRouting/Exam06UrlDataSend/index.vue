<template>
    <div class="card">
        <div class="card-header">Exam06UrlDataSend</div>
        <div class="card-body">
            <h5>경로변수로 데이터 전달</h5>
            <ul>
                <li>
                    <RouterLink to="Exam06UrlDataReceive/notice/blue">
                        Exam06UrlDataReceive/notice/blue
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="`Exam06UrlDataReceive/${kind}/${color}`">
                        Exam06UrlDataReceive/${kind}/${color}
                    </RouterLink>
                </li>
                <li>
                    <button class="btn btn-info btn-sm" @click="goUrl1()">Exam06UrlDataReceive/freeboard/blue</button>
                </li>
            </ul>

            <h5>쿼리스트링으로 데이터 전달</h5>
            <ul>
                <li>
                    <RouterLink to="Exam06UrlDataReceive?kind=notice&color=blue">
                        Exam06UrlDataReceive?kind=notice&color=blue
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="`Exam06UrlDataReceive?kind=${kind}&color=${color}`">
                        Exam06UrlDataReceive?kind=${kind}&color=${color}
                    </RouterLink>
                </li>
                <li>
                    <button class="btn btn-info btn-sm" @click="goUrl2()">Exam06UrlDataReceive?kind=notice&color=red</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRouter  } from 'vue-router';
const router = useRouter();

let kind = "freeboard";
let color = "blue";

function goUrl1() {
    router.push(`Exam06UrlDataReceive/${kind}/${color}`);
}

function goUrl2() {
    router.push(`Exam06UrlDataReceive?kind=${kind}&color=${color}`);
}
</script>

<style scoped>
</style>