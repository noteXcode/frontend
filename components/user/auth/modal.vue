<script setup lang="ts">
const isOpen = ref(false)
const tabs = {}
const test=ref()
const isRegister = ref(false)
const signin = resolveComponent('UserAuthSignIn')
const signup = resolveComponent('UserAuthSignUp')
const language = useLanguage()
const items = computed<{label:string,isRegister:boolean}[]>(() => [{
    label: language.list.title.signin,
    isRegister:true
}, {
    label: language.list.title.signup,
    isRegister:false
}]
)
function changeComponent(index:number){
console.log("🚀 ~ changeComponent ~ index:", index,items)
isRegister.value=items[index].isRegister
}
</script>

<template>
    <div>
        <UButton label="Open" @click="isOpen = true" />
        <UModal v-model="isOpen">
            <UTabs :items="items" @change="changeComponent" />
            <div @click="isRegister = !isRegister">ssssssssssssss</div>
            {{ test }}

            <component :is="isRegister ? signin : signup" />
        </UModal>
    </div>
</template>
