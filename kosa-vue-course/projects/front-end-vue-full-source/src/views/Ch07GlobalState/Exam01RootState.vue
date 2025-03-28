<template>
    <div class="card">
        <div class="card-header">Exam01RootState</div>
        <div class="card-body">
          <h6>[RootState 읽기]</h6>
          <p>user 단방향 바인딩: {{ $store.state.user }}</p>
          <p>user 단방향 바인딩: {{ $store.getters.getUser }}</p>
          <p>user 단방향 바인딩: {{ getUser() }}</p>
          <p>user 단방향 바인딩: {{ computedUser }}</p>
          <p>user 양방향 바인딩: <input type="text" v-model="$store.state.user"/></p>

          <hr/>

          <h6>[RootState 변경]</h6>
          <button class="btn btn-info btn-sm me-2" @click="changeByMutation">user 변경(Mutation 동기 방식)</button>
          <button class="btn btn-info btn-sm" @click="changeByAction">user 변경(Action 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

function getUser() {
    //return store.state.user;
    return store.getters.getUser;
}

const computedUser = computed(() => {
    //return store.state.user;
    return store.getters.getUser;
});

function changeByMutation() {
    new Promise((resolve, reject) => {
      //서버와 통신 작업(?초 소요)
      //로그인 성공
      resolve({result:"success", mid:"user1"});
      //로그인 실패
      //reject({result:"fail", reason:"password is wrong"});
    })
    .then((data) => {
        console.log("로그인 성공");
        store.commit("setUser", data.mid);
    })
    .catch((error) => {
        console.log("로그인 실패");
    });
}

function changeByAction() {
  store.dispatch("loginAction", {mid:"user1"});
}
</script>

<style scoped>
</style>