<template>
  <div>
    <h2>Delete Item</h2>
    <button @click="deleteItem">Delete</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useSupabase } from '@supabase/supabase-js'

export default {
  name: 'MyDelete',
  setup() {
    const supabase = useSupabase()
    const itemId = ref('item_id') // Replace with the logic to obtain the item ID

    const deleteItem = async () => {
      try {
        const { data, error } = await supabase
          .from('items')
          .delete()
          .eq('id', itemId.value)

        if (error) {
          console.error(error.message)
          return
        }

        console.log('Item deleted:', data)
        // Redirect or perform any other actions after successful item deletion
      } catch (error) {
        console.error(error.message)
      }
    }

    // Fetch the item details when the component is mounted
    onMounted(async () => {
      try {
        const { data, error } = await supabase
          .from('items')
          .select()
          .eq('id', itemId.value)
          .single()

        if (error) {
          console.error(error.message)
          return
        }

        // Handle the scenario when the item doesn't exist or permission is denied
        if (!data) {
          console.error('Item not found or permission denied.')
          return
        }

        console.log('Item details:', data)
      } catch (error) {
        console.error(error.message)
      }
    })

    return {
      deleteItem
    }
  }
}
</script>
