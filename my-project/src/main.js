import { createApp } from 'vue'
import { createClient } from '@supabase/supabase-js'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
const supabaseUrl = 'https://zpzggknvmyqoiufanaqn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwemdna252bXlxb2l1ZmFuYXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0OTY0NjIsImV4cCI6MjAwMTA3MjQ2Mn0.FPNbO_mB_JOPEQ_uKAOFbnoBdrYngB-NmBbiN2fZl0A'
const supabase = createClient(supabaseUrl, supabaseKey)

const app = createApp(App)
app.config.globalProperties.$supabase = supabase
app.mount('#app')