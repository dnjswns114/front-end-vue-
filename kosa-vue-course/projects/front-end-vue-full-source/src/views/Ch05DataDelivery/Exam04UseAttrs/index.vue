<template>
    <div class="card">
        <div class="card-header">Exam04UseAttr</div>
        <div class="card-body">
          <UIComponent 
                  class="bg-info"
                  style="color:red" 
                  :attr1="1"
                  :attr2="{name:'홍길동', age:25}"
                  :attr3="['블랙', '레드']"
                  :attr4="() => '리턴값'"
                  @click="handleClick"
                  @customEvent="handleCustomEvent"/>
        </div>
    </div>
</template>

<script setup>
import UIComponent from "./UIComponent.vue";

function handleClick() {
    console.group("handleClick() 실행");
    console.groupEnd();
}

function handleCustomEvent(arg1, arg2) {
    console.group("handleCustomEvent() 실행");
    console.log("arg1: ", arg1);
    console.log("arg2: ", arg2);
    console.groupEnd();
}
</script>

<style scoped>
</style>