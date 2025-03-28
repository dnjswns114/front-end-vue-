<template>
    <div class="card">
        <div class="card-header">Exam01Promise</div>
        <div class="card-body">
            <div>
                <button class="btn btn-info btn-sm me-2" @click="handleBtn1">비동기 작업1</button>
                <button class="btn btn-info btn-sm me-2" @click="handleBtn2">비동기 작업2</button>
                <hr/>
                <div class="mt-3" v-if="loading">
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

//상태 정의
const loading = ref(false);

//비동기 작업 정의
function asyncWork() {
  //3초후에 응답이 오는 Promise 생성
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //성공적으로 처리했을 경우
        resolve({ message: "성공" });
        //실패 처리할 경우
        //reject({ message: "실패" });
    }, 3000);
  });
  return promise;
}

function handleBtn1() {
  console.log("요청중...");
  loading.value = true;
  asyncWork()
    .then((result) => {
      //resolve 경우
      console.log(result.message);
    })
    .catch((error) => {
      //reject 경우
      console.log(error.message);
    })
    .finally(() => {
      console.log("마무리");
      loading.value = false;
    });
}
//-----------------------------------------------------------
async function handleBtn2() {
  console.log("요청중...");
  loading.value = true;
  try {
    const result = await asyncWork();
    //resolve 경우
    console.log(result.message);
  } catch(error) {
    //reject 경우
    console.log(error.message);
  } finally {
    console.log("마무리");
    loading.value = false;
  }
}
</script>

<style scoped>
</style>