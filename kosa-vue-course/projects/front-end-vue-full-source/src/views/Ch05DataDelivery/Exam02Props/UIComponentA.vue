<template>
  <div class="card">
    <div class="card-header">UIComponentA</div>
    <div class="card-body">
      <p :class="props.class">배경색 적용</p>
      <p :class="$props.class">배경색 적용</p>
      <hr />

      <p :style="props.style">글자색 적용</p>
      <p :style="$props.style">글자색 적용</p>
      <hr />

      <p>attr1: {{ props.attr1 }}</p>
      <p>attr1: {{ $props.attr1 }}</p>
      <hr />

      <p>attr2: name={{ props.attr2.name }}, 
                age={{ props.attr2.age }}</p>
      <p>attr2: name={{ $props.attr2.name }}, 
                age={{ $props.attr2.age }}</p>
      <hr />

      <p>attr3:
        <span v-for="(item, index) in props.attr3" :key="index">
          {{ item }},
        </span>
      </p>
      <p>attr3:
        <span v-for="(item, index) in $props.attr3" :key="index">
          {{ item }},
        </span>
      </p>
      <hr />

      <p>attr4: {{ props.attr4() }}</p>
      <p>attr4: {{ $props.attr4() }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
  "class", "style", "attr1", "attr2", "attr3", "attr4"
]);

// const prop = defineProps({
//   class: {type:String},
//   style: {type:Object, default(){return "color:orange";}},
//   attr1: {type:Number, required:true},
//   attr2: {type: Object},
//   attr3: {type: Array},
//   attr4: {type: Function}
// });

//속성값 읽기
console.group("UIComponentA");
console.log("class: ", props.class);
console.log("style: ", props.style);
console.log("attr1: ", props.attr1, typeof (props.attr1));
console.log("attr2: ", props.attr2);
console.log("attr3: ", props.attr3);
console.log("attr4: ", props.attr4());
console.groupEnd();
</script>

<style scoped></style>