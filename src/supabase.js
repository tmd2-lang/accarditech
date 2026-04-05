import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://egcrgimjrnkhoglkweha.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnY3JnaW1qcm5raG9nbGt3ZWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MTQzNDEsImV4cCI6MjA5MDk5MDM0MX0.clPoMQS4MgBXmkhj0Kr6CVKYZ1xkIKoNOA20cE8aEd8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
