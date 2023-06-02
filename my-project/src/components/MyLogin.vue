<template>
  <div>
    <h2>Login</h2>
    <!-- Your login form code here -->
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useSupabase } from '@supabase/supabase-js'

export default {
  name: 'MyLogin',
  setup() {
    const supabase = useSupabase()

    const login = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({
          email: 'example@example.com',
          password: 'password'
        })

        if (error) {
          console.error(error.message)
          return
        }

        console.log('User logged in:', user)
        // Redirect or perform any other actions after successful login
      } catch (error) {
        console.error(error.message)
      }
    }

    onMounted(() => {
      // Any initialization or setup code
    })

    return {
      login
    }
  }
}
</script>
