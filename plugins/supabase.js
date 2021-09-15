import { createClient } from '@supabase/supabase-js'

// Initialize and inject supabase dependency (database)
export default (_, inject) => {
  const supabase = createClient(
    process.env.supabaseUrl,
    process.env.supabaseKey
  )

  inject('supabase', supabase)
}
