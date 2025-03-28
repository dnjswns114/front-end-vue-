<template>
  <div class="card">
    <div class="card-header">Exam02Props</div>
    <div class="card-body">
    <!-- 속성 전달 -->
    <UIComponentA 
        class="bg-info" 
        style="color:red" 
        v-bind:attr1="1" 
        v-bind:attr2="{ name: '홍길동', age: 25 }"
        :attr3="['블랙', '레드']" 
        :attr4="() => '리턴값'" />
      <hr />

      <!-- 상태 전달 -->
      <UIComponentB 
        :userId="user.uid" 
        :user-name="user.uname" 
        :board="board" />
      <hr />

      <!-- 상태를 구조 분해 할당 후 전달-->
      <UIComponentC v-bind="board" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UIComponentA from "./UIComponentA.vue";
import UIComponentB from "./UIComponentB.vue";
import UIComponentC from "./UIComponentC.vue";

const user = ref({
  uid: "user1",
  uname: "사용자1"
});
const board = ref({
  bno: 1,
  btitle: "제목1"
});
</script>

<style scoped></style>