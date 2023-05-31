import { createApp } from 'vue'
import { createClient } from '@supabase/supabase-js'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_API_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)

createApp(App).provide('supabase', supabase).mount('#app')
