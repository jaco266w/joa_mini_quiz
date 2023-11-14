import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fzqxzjhvldkvdzzxerdo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cXh6amh2bGRrdmR6enhlcmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NjgzMDIsImV4cCI6MjAxNTU0NDMwMn0.F1TaFi80xm7ZNx7wpeX4O58QiFYrf7U_lXP4O1_O3TA";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };