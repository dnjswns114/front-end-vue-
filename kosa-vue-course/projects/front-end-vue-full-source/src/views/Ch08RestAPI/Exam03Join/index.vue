<template>
    <div class="card">
        <div class="card-header">Exam03Join</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">
                <div class="input-group mb-2">
                    <span class="input-group-text">아이디</span>
                    <input type="text" class="form-control" v-model="member.mid">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이름</span>
                    <input type="text" class="form-control" v-model="member.mname">
                </div> 
                
                <div class="input-group mb-2">
                    <span class="input-group-text">비밀번호</span>
                    <input type="password" class="form-control" v-model="member.mpassword">
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">이메일</span>
                    <input type="email" class="form-control" v-model="member.memail">
                </div>          

                <div class="d-flex justify-content-center">
                    <input type="submit" value="가입" class="btn btn-danger btn-sm me-2"/>
                    <!--Vue에서 리셋 버튼은 양식을 초기화하지 않음-->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import memberAPI from "@/apis/memberAPI";
import { useRouter } from "vue-router";

//라우터 객체 얻기
const router = useRouter();

//상태 정의
const member = ref({
    mid: "user1",
    mname: "사용자1",
    mpassword: "Abc12345",
    memail: "user1@mycompany.com"
});

//가입 버튼 클릭시 실행
async function handleSubmit() {
    try {
        //Axios를 이용해서 Back-End로 회원 가입 요청
        const data = structuredClone(member.value);
        const response = await memberAPI.join(data);
        console.log(response.data);
        //홈 페이지로 이동
        router.push("/Ch08RestAPI/Exam02Login");
        //이전 페이지로 이동
        //router.back();
    } catch(error) {
        console.log(error);
    }
}

//재작성 버튼 클릭시 실행
function handleReset() {
    member.value.mid = "";
    member.value.mname = "";
    member.value.mpassword = "";
    member.value.memail = "";
}
</script>

<style scoped>
</style>