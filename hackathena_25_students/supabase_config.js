import { createClient } from "@supabase/supabase-js";

const supaurl = import.meta.env.VITE_SUPA_URL;
const supaanon = import.meta.env.VITE_SUPA_ANON;

const supabase = createClient(supaurl,supaanon);

export default supabase;