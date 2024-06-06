<script setup lang="ts">
const language=useLanguage()
const state = reactive({
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
          <UFormGroup :label="language.list.filds.password" name="password">
            <UInput v-model="state.password" />
          </UFormGroup> 
        </UForm>
        
        <template #footer>
          <UButton type="submit">
            {{language.list.btn.signup}}
          </UButton>
        </template>
      </UCard>
</template>

