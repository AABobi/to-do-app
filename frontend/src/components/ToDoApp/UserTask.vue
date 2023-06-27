<template>
    <div class="UserTask">
        asd
        <button @click="test">test</button>
    </div>
</template>

<script setup lang="ts">
//localStorage.setItem("a",JSON.stringify(t))
//
//import {Category, Task} from "@/components/ToDoApp/Task";

import {Task} from "@/components/ToDoApp/Task";

interface Props {
    userTask: Task,
}

const props = defineProps<Props>();
const test = () =>{
    console.log(props.userTask);
}
/*interface Obj {
    name: string,
    secName: string,
}
interface Props {
   userTask: Task
}

const props = defineProps()
const setLocal = () => {

}
const showLocal = () => {
    let testvar =
    let q: Obj = testvar;
    if(testvar) {
        console.log(JSON.parse(testvar));
    let a = JSON.parse(testvar);
        console.log(a.name);
    }
    console.log(testvar);

}
const test = ["test","test1","test3"]
const t: Obj = {
    name:"aa",
    secName:"aaSec"
}*/
</script>

<style lang="scss">
.UserTask {
    width: 100%;
    height: 40px;
    background: green;
    border: black 1px solid;
}
</style>