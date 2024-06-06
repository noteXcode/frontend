<script setup lang="ts">
const isOpen = ref(false)
const tabs = {}
const test=ref()
let isRegister = ref(false)
const signin = resolveComponent('UserAuthSignIn')
const signup = resolveComponent('UserAuthSignUp')
const language = useLanguage()
const items = computed<{label:string}[]>(() => [{
    label: language.list.title.signin,
}, {
    label: language.list.title.signup
}])
function changeComponent(index:number){
    isRegister.value=!isRegister.value
}
</script>

<template>
    <div>
        <UButton  :label="language.list.btn.signinUp" @click="isOpen = true" />
        <UModal v-model="isOpen">
            <UTabs :items="items" @change="changeComponent" />
            <div @click="isRegister = !isRegister">ssssssssssssss</div>
            {{ test }}

            <component :is="isRegister ? signin : signup" />
        </UModal>
    </div>
</template>
