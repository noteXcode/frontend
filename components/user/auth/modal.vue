<script setup lang="ts">
import appConfig from "~/app.config"

const isOpen = ref(false)
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
            <UTabs  class='p-3' :items="items" @change="changeComponent" />
            <component :is="isRegister ? signin : signup" />
        </UModal>
    </div>
</template>
