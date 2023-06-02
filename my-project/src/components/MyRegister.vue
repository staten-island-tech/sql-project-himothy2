<template>
  <div>
    <h2>Register</h2>
    <!-- Your registration form code here -->
    <button @click="register">Register</button>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useSupabase } from '@supabase/supabase-js'

export default {
  name: 'MyRegister',
  setup() {
    const supabase = useSupabase()

    const register = async () => {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: 'example@example.com',
          password: 'password'
        })

        if (error) {
          console.error(error.message)
          return
        }

        console.log('User registered:', user)
        // Redirect or perform any other actions after successful registration
      } catch (error) {
        console.error(error.message)
      }
    }

    onMounted(() => {
      // Any initialization or setup code
    })

    return {
      register
    }
  }
}
</script>
