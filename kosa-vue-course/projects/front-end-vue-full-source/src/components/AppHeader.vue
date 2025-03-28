<template>
  <nav class="navbar justify-content-between bg-dark text-white">
    <div class="ms-2">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/logo.png" width="30" height="30" />
        <span class="ms-2 text-white">Vue.js</span>
      </RouterLink>
    </div>

    <!-- 
      <div class="me-2">
        <RouterLink to="/" class="btn btn-success btn-sm">로그인</RouterLink>
      </div> 
    -->

    <div class="me-2">
      <div v-if="$store.state.user === ''">
        <RouterLink class="btn btn-success btn-sm" to="/Ch08RestAPI/Exam02Login">로그인</RouterLink>
      </div>
      <div v-if="$store.state.user !== ''">
        <span>UserID: {{ $store.state.user }}</span>
        <button class="btn btn-danger btn-sm ms-2" @click="handleLogout">로그아웃</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

function handleLogout() {
    store.dispatch("deleteAuth");
    router.push("/Ch08RestAPI/Exam02Login");
}
</script>

<style scoped></style>