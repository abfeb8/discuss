'use server';

import * as auth from '@/auth/auth';

export async function signIn() {
    return auth.signIn('github');
}