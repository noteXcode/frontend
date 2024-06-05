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
let language=useLanguage()
const menuItems=computed<menuItem[]>(()=>[{href:'#',title:language.list.menu.home},{href:'#',title:language.list.menu.posts},{href:'#',title:language.list.menu.about},{href:'#',title:language.list.menu.contact}])
</script>