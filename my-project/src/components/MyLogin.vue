<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useSupabase } from '@supabase/supabase-js'
  
  export default {
    name: 'Login',
    setup() {
      const email = ref('')
      const password = ref('')
      const supabase = useSupabase()
  
      const login = async () => {
        try {
          const { user, error } = await supabase.auth.signIn({
            email: email.value,
            password: password.value
          })
  
          if (error) {
            console.error(error.message)
            return
          }
  
          console.log('Login successful')
          // Redirect or perform any other actions after successful login
        } catch (error) {
          console.error(error.message)
        }
      }
  
      return {
        email,
        password,
        login
      }
    }
  }
  </script>
  