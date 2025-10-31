import { createClient } from "@supabase/supabase-js";

// Log untuk debugging
console.log("Initializing Supabase...");
console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Key exists:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
