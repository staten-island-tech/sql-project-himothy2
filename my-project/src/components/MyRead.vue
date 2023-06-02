<template>
    <div>
      <h2>Read Items</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useSupabase } from '@supabase/supabase-js'
  
  export default {
    name: 'MyRead',
    setup() {
      const items = ref([])
      const supabase = useSupabase()
  
      const fetchItems = async () => {
        try {
          const { data, error } = await supabase.from('items').select()
  
          if (error) {
            console.error(error.message)
            return
          }
  
          items.value = data
        } catch (error) {
          console.error(error.message)
        }
      }
  
      onMounted(() => {
        fetchItems()
      })
  
      return {
        items
      }
    }
  }
  </script>
  