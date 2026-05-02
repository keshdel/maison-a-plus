import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wfdhmgvinhleubkwzljx.supabase.co/rest/v1/';
const supabaseKey = 'sb_publishable_dImWPAHiIcG04FyzMXINOw_SzoM5VLp';

export const supabase = createClient(supabaseUrl, supabaseKey);