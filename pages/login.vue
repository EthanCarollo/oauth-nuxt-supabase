<template>
    <div>
      <button @click="signInWithGithub">Sign in with GitHub</button>
    </div>
  </template>
  
  <script setup>
  const { $supabase } = useNuxtApp()
  
  const signInWithGithub = async () => {
    const { error } = await $supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/callback`
      }
    })
    if (error) console.error('Error: ', error.message)
  }
  </script>
  