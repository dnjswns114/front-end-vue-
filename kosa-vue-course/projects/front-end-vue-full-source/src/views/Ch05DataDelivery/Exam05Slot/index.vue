<template>
    <div class="card">
        <div class="card-header">Exam05Slot</div>
        <div class="card-body">
            <button class="btn btn-info btn-sm me-2" @click="showDialogA">기본 다이얼로그</button>
            <button class="btn btn-info btn-sm me-2" @click="showDialogB">알림 다이얼로그</button>
            <button class="btn btn-info btn-sm" @click="showDialogC">로그인 다이얼로그</button>
        </div>

        <DialogA id="dialogA"/>
        <DialogB id="dialogB" @close="hideDialogB"/>
        <DialogC id="dialogC" @close="hideDialogC"/>
    </div>
</template>

<script setup>
import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";
import DialogC from "./DialogC.vue";
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let modalDialogA = null;
let modalDialogB = null;
let modalDialogC = null;

//컴포넌트가 생성되고, DOM 부착될때 자동으로 실행되는 콜백
onMounted(() => {
    modalDialogA = new Modal(document.querySelector("#dialogA"));
    modalDialogB = new Modal(document.querySelector("#dialogB"));
    modalDialogC = new Modal(document.querySelector("#dialogC"));
});

function showDialogA() {
    modalDialogA.show();
}

function showDialogB() {
    modalDialogB.show();
}

function showDialogC() {
    modalDialogC.show();
}

function hideDialogB() {
    modalDialogB.hide();
    console.log("DialogB 닫힘");
}

function hideDialogC() {
    modalDialogC.hide();
    console.log("DialogC 닫힘");
}
</script>

<style scoped>
</style>