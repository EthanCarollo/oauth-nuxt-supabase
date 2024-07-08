import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
  
    const supabaseUrl = config.public.SUPABASE_URL
    const supabaseAnonKey = config.public.SUPABASE_KEY

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  return {
    provide: {
      supabase
    }
  }
})
