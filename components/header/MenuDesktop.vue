<template>
    <ul class="flex ">
        <li v-for="item,index in menuItems" :key="index" class="mx-2" ><a :href=item.href>{{item.title}}</a></li>        
    </ul>
</template>
<script setup lang="ts">
type menuItem={
    href:string,
    title:string
}
const menuItems:menuItem[]=[{href:'#',title:'خانه'},{href:'#',title:'پست ها'},{href:'#',title:'درباره ما'},{href:'#',title:'تماس با ما'}]
</script>