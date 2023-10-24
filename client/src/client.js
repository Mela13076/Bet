import { createClient } from '@supabase/supabase-js'

const URL = 'https://kcrpkscysrqxdgnykfdv.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcnBrc2N5c3JxeGRnbnlrZmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTc3MDUsImV4cCI6MTk5NjIzMzcwNX0.E41Cy12sW90J3szwNK-_amaO5jzegRjq-AroY1_ZYS0';

export const supabase = createClient(URL, API_KEY);
