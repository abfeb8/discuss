'use server';

import * as auth from '@/app/auth/auth';

export async function signIn() {
    return auth.signIn('github');
}