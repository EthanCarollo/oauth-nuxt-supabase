<template>
    <div>
      <p v-if="error">{{ error }}</p>
      <p v-else>Successfully logged in!</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  const { $supabase } = useNuxtApp()
  const error = ref(null)
  
  onMounted(async () => {
    const { error: authError } = await $supabase.auth.getSessionFromUrl({ storeSession: true })
    if (authError) {
      error.value = authError.message
    } else {
      // Redirect to a protected page or home page after successful login
      navigateTo('/')
    }
  })
  </script>
  