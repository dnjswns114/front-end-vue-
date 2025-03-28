<template>
    <div class="card">
        <div class="card-header">UIComponent</div>
        <div class="card-body">
          <p :class="$attrs.class">배경색 적용</p>
          <hr/>

          <p :style="$attrs.style">글자색 적용</p>
          <hr/>

          <p>attr1: {{ $attrs.attr1 }}</p>
          <hr/>

          <p>attr2: name={{$attrs.attr2.name}}, age={{$attrs.attr2.age}}</p>
          <hr/>

          <p>attr3: 
              <span v-for="(item, index) in $attrs.attr3" :key="index">
                  {{item}}, 
              </span>
          </p>
          <hr/>

          <p>attr4: {{$attrs.attr4()}}</p>
          <hr/>

          <button class="btn btn-danger btn-sm me-2" @click="$attrs.onClick">$attrs.onClick 이용</button>
          <button class="btn btn-danger btn-sm me-2" @click="$attrs.onCustomEvent('data1', 'data2')">$attrs.onCustomEvent 이용</button>
          <button class="btn btn-danger btn-sm me-2" @click="handle1">코드 이용</button>
          <button class="btn btn-danger btn-sm me-2" @click="handle2">코드 이용</button>
        </div>
    </div>
</template>

<script setup>
import { defineOptions, useAttrs } from "vue";

defineOptions({
    //Fallthrough를 비활성화킴
    inheritAttrs: false
});

const attrs = useAttrs();

//속성값 읽기
console.group("UIComponent");
console.log("class: ", attrs.class);
console.log("style: ", attrs.style);
console.log("attr1: ", attrs.attr1, typeof(attrs.attr1));
console.log("attr2: ", attrs.attr2);
console.log("attr3: ", attrs.attr3);
console.log("attr4: ", attrs.attr4());
console.groupEnd();

function handle1() {
    attrs.onClick();
}

function handle2() {
    attrs.onCustomEvent("data1", "data2");
}
</script>

<style scoped>
</style>