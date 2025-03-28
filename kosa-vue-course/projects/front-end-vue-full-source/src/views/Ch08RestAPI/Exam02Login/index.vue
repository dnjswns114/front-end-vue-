<template>
  <div class="card">
    <div class="card-header">Exam02Login</div>
    <div class="card-body">
      <div v-if="$store.state.user === ''">
        <form @submit.prevent="handleLogin">
          <div class="input-group mb-2">
            <span class="input-group-text">아이디</span>
            <input type="text" class="form-control" v-model="member.mid">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">비밀번호</span>
            <input type="password" class="form-control" v-model="member.mpassword">
          </div>

          <div class="d-flex justify-content-center">
            <input type="submit" value="로그인" class="btn btn-success btn-sm me-2" />
            <!--Vue에서 리셋 버튼은 양식을 초기화하지 않음-->
            <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
            <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
          </div>
        </form>
      </div>

      <div v-if="$store.state.user !== ''">
        <div class="d-flex justify-content-center">
          <button class="btn btn-danger btn-sm" @click="handleLogout">로그아웃</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import memberAPI from "@/apis/memberAPI";
import { useStore } from "vuex";

//store 객체 얻기
const store = useStore();

//상태 정의
const member = ref({
  mid: "",
  mpassword: ""
});

//로그인 버튼 클릭시 실행
async function handleLogin() {
  try {
    const data = structuredClone(member.value);
    const response = await memberAPI.login(data);
    if (response.data.result === "success") {
      const payload = {
        mid: response.data.mid,
        accessToken: response.data.accessToken
      };
      store.dispatch("saveAuth", payload);
    }
  } catch (error) {
    console.log(error);
  }
}

//재작성 버튼 클릭시 실행
function handleReset() {
  member.value.mid = "";
  member.value.mpassword = "";
}

//로그아웃 버튼 클릭시 실행
function handleLogout() {
  store.dispatch("deleteAuth");
}
</script>

<style scoped></style>