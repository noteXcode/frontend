<template>
    <USelectMenu v-model="selectedLanguage" :options="Lang" />
</template>
<script lang="ts" setup>
import type {TLanguage} from '../../types/type'
const {lang,changeLang}=useLanguage()
const Lang:TLanguage[]=['en','fa']
let selectedLanguage=ref(lang)
watch(selectedLanguage,()=>{
changeLang(selectedLanguage.value as TLanguage)
})
</script> 