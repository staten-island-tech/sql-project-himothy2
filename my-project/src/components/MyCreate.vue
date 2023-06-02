<template>
    <div>
      <h2>Create Item</h2>
      <form @submit.prevent="createItem">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="description" required></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useSupabase } from '@supabase/supabase-js'
  
  export default {
    name: 'MyCreate',
    setup() {
      const name = ref('')
      const description = ref('')
      const supabase = useSupabase()
  
      const createItem = async () => {
        try {
          const { data, error } = await supabase.from('items').insert([
            {
              name: name.value,
              description: description.value
            }
          ])
  
          if (error) {
            console.error(error.message)
            return
          }
  
          console.log('Item created:', data[0])
          // Redirect or perform any other actions after successful item creation
        } catch (error) {
          console.error(error.message)
        }
      }
  
      return {
        name,
        description,
        createItem
      }
    }
  }
  </script>
  