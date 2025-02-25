'use server';

import * as auth from '@/app/auth/auth';

export async function signOut() {
    return auth.signOut();
}