

import { env } from '@/env';
import { date } from 'better-auth';
import { getSession } from 'better-auth/api'
import { error } from 'console';
import { cookies } from 'next/headers';
import React from 'react'
const AUTH_URL = env.AUTH_URL;

export const userService = {
    getSession: async function () {
        try {
            const cookieStore = await cookies();

            // console.log(cookieStore.toString());
            const res = await fetch(`${AUTH_URL}/get-session`, {

                headers: {
                    Cookie: cookieStore.toString(),
                },
                cache: "no-store",
            });

            const session = await res.json();
            if (session === null) {
                return { data: null, error: { message: "Session is missing." } };
            }
            return { data: session, error: null };
            //   console.log(session);
        }
        catch (err) {
            console.error(err);
            return { data: null, error: { message: "Something went wrong" } }
        }

    }

}
