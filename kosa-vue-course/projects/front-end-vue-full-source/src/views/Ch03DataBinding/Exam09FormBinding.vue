<template>
    <div class="card">
        <div class="card-header">Exam09FormBinding</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">
                <div class="input-group mb-2">
                    <span class="input-group-text">상품</span>
                    <input type="text" class="form-control" v-model="product.name">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">회사</span>
                    <input type="text" class="form-control" v-model="product.company">
                </div> 
                
                <div class="input-group mb-2">
                    <span class="input-group-text">가격</span>
                    <input type="number" class="form-control" v-model="product.price">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">설명</span>
                    <input type="text" class="form-control" v-model="product.info">
                </div>
                
                <div class="input-group mb-2">
                    <span class="input-group-text">국가</span>
                    <select class="form-control" v-model="product.madein">
                        <option value="한국">한국</option>
                        <option value="미국">미국</option>
                        <option value="독일">독일</option>
                    </select>
                </div> 
                
                <div class="input-group mb-2">
                    <span class="input-group-text">색상</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input id="chekboxBlack" class="form-check-input" type="checkbox" value="black" v-model="product.colors">
                            <label class="form-check-label" for="chekboxBlack">블랙</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="chekboxRed" class="form-check-input" type="checkbox" value="red" v-model="product.colors">
                            <label class="form-check-label" for="chekboxRed">레드</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="chekboxYellow" class="form-check-input" type="checkbox" value="yellow" v-model="product.colors">
                            <label class="form-check-label" for="chekboxYellow">옐로우</label>
                        </div>
                    </div>
                </div>   
                
                <div class="input-group mb-2">
                    <span class="input-group-text">판매1</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale1" value="true" 
                                   v-model="product.sale1">
                            <label class="form-check-label" for="chekboxSale1">판매1</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">판매2</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale2" 
                                   v-model="product.sale2" true-value="yes" false-value="no">
                            <label class="form-check-label" for="chekboxSale2">판매2</label>
                        </div>
                    </div>
                </div>     
                
                <div class="input-group mb-2">
                    <span class="input-group-text">성별</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex1" value="man" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex1">남성</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex2" value="woman" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex2">여성</label>
                        </div>
                    </div>
                </div>                

                <div>
                    <input type="submit" value="등록" class="btn btn-danger btn-sm me-2" :disabled="!checkData"/>
                    <!-- Vue에서 리셋 버튼은 양식을 초기화하지 않음 -->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

let product = ref({
    name: "셔츠",
    company: "지오다노",
    price: 20000,
    info: "통풍이 잘되어 시원해요",
    madein: "미국",
    colors: ["black", "yellow"],
    sale1: true,
    sale2: "yes",
    sex: "woman"
});

function handleSubmit() {
    console.log(product.value);
    //반응성이 제거된 일반 자바스크립트 객체로 변환
    console.log(structuredClone(product.value));
}

const checkData = computed(() => {
    var result = product.value.name !=="" && product.value.company !== "";
    return result;
});

function handleReset() {
    product.value = {
        name: "셔츠",
        company: "지오다노",
        price: 20000,
        info: "통풍이 잘되어 시원해요",
        madein: "미국",
        colors: ["black", "yellow"],
        sale1: true,
        sale2: "yes",
        sex: "woman"
    };
}
</script>

<style scoped>
</style>

