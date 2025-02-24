'use server';

import * as auth from '@/auth/auth';

export async function signOut() {
    return auth.signOut();
}