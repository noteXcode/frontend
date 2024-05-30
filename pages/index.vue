<template>
  <div>
    <button @click="test">google</button>
    <div class="dark:bg-my">aaaaaaaaaaaaaaa</div>


  </div>
</template>
<script setup>
definePageMeta({
  layout: 'main'
})
const api=useNuxtApp().$api
const config = useRuntimeConfig()
const test=async function(){
// let res=await api.get('http://localhost:3000/auth/google')
// console.log('====================================');
// console.log(config.public.apiBase);
// console.log('====================================');

const CLIENT_ID = config.public.GOOGLECLIENTID;
const CLIENT_SECRET = config.public.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI='http://localhost:3001/auth/google/callback'
navigateTo(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email`, { external: true}
)
// console.log("🚀 ~ test ~ res:", res)

}

</script>