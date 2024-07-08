import { useState } from '#app'
import { supabase } from '~/plugins/supabase'

export const useSupabaseUser = () => {
  const user = useState('supabaseUser', () => supabase.auth.user())
  return user
}