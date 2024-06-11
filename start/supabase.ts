import env from '#start/env'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = env.get('SUPABASE_URL') || ''
const supabaseKey = env.get('SUPABASE_KEY') || ''

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
