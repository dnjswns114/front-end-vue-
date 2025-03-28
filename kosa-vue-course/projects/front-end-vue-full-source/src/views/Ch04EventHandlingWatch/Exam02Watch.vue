<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>  
            
            <div class="mb-2">
                <button class="btn btn-info btn-sm me-2" @click="handleChangeRef">객체 참조 변경</button>
                <button class="btn btn-info btn-sm me-2" @click="handleChangeAttr1">객체의 속성(name) 변경</button>
                <button class="btn btn-info btn-sm me-2" @click="handleChangeAttr2">객체의 속성(price) 변경</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

//상태 생성
let userId = ref("");

let product = ref({
    name: "제네시스",
    company: "현대",
    price: 80000000
});

//여러가지 감시 방법
watch(userId, (newUserId, oldUserId) => {
    console.group("값 상태 감시");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd();
});

watch(product, (newProduct, oldProduct) => {
    console.group("객체 참조 변경 감시");
    console.log("newProduct:", structuredClone(newProduct));
    console.log("oldProduct:", structuredClone(oldProduct));
    console.groupEnd();
});

watch(product, (newProduct, oldProduct) => {
    console.group("객체 참조 뿐만 아니라 속성까지도 변경 감시");
    console.log("newProduct:", structuredClone(newProduct));
    console.log("oldProduct:", structuredClone(oldProduct));
    console.groupEnd();
}, { deep: true });

watch(() => product.value.price, (newPrice, oldPrice) => {
    console.group("특정 속성만 변경 감시");
    console.log("newPrice:", newPrice);
    console.log("oldPrice:", oldPrice);
    console.groupEnd();
});

watch([userId, product], ([newUserId, newProduct], [oldUserId, oldProduct]) => {
    console.group("복수개의 상태를 감시할 경우");
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.log("newProduct:", structuredClone(newProduct));
    console.log("oldProduct:", structuredClone(oldProduct));
    console.groupEnd();
}, { deep: true });

function handleChangeRef() {
    //객체 참조 변경
    product.value = {
        name: "제네시스",
        company: "현대",
        price: 70000000
    };
}

function handleChangeAttr1() {
    //name 속성값 변경
    product.value.name = "소나타";
}

function handleChangeAttr2() {
    //price 속성값 변경
    product.value.price = 30000000;
}
</script>

<style scoped>
</style>