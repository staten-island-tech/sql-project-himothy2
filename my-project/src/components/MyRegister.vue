<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useSupabase } from '@supabase/supabase-js'
  
  export default {
    name: 'Register',
    setup() {
      const email = ref('')
      const password = ref('')
      const supabase = useSupabase()
  
      const register = async () => {
        try {
          const { user, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
          })
  
          if (error) {
            console.error(error.message)
            return
          }
  
          console.log('Registration successful')
          // Redirect or perform any other actions after successful registration
        } catch (error) {
          console.error(error.message)
        }
      }
  
      return {
        email,
        password,
        register
      }
    }
  }
  </script>
  