<script setup lang="ts">
const language=useLanguage()
const state = reactive({
  firstName:undefined,
  lastName:undefined,
  email: undefined,
  password: undefined
})
</script>

<template>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <UForm  :state="state" class="space-y-4" @submit.prevent >
          <UFormGroup :label="language.list.filds.email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>      
        </UForm>
        
        <template #footer>
          <UButton type="submit">
            {{language.list.btn.signup}}
          </UButton>
        </template>
      </UCard>
</template>

