<template>
    <div>
      <h2>Logout</h2>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { useSupabase } from '@supabase/supabase-js'
  
  export default {
    name: 'Logout',
    setup() {
      const supabase = useSupabase()
  
      const logout = async () => {
        try {
          const { error } = await supabase.auth.signOut()
  
          if (error) {
            console.error(error.message)
            return
          }
  
          console.log('Logout successful')
          // Redirect or perform any other actions after successful logout
        } catch (error) {
          console.error(error.message)
        }
      }
  
      return {
        logout
      }
    }
  }
  </script>
  