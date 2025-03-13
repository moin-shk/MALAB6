import { createClient} from "@supabase/supabase-js";

const supabase = createClient(
    process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://jhuthpslpmakyxccunov.supabase.co',
    process.env.EXPO_PUBLIC_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodXRocHNscG1ha3l4Y2N1bm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODgxNDUsImV4cCI6MjA1NzM2NDE0NX0._mTxaxMkV2x1LxJEE-7GHbXa6jMSoIcSrtAwsPl6ufo'
);

export default supabase;