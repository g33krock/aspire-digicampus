import { supabase } from '../supabase';

export async function fetcher(url, options = {}) {
    const { data: { session } } = await supabase.auth.getSession();
    options.headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.access_token}`
    };
    return fetch(url, options);
}
