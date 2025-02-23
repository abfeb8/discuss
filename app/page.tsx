import * as actions from "@/actions";
import { auth } from "@/auth/auth";
import Profile from "@/components/profile";

export default async function Home() {
    const session = await auth();
    return (
        <div>
            <form action={actions.signIn}>
                <button type="submit">SignIn</button>
            </form>
            <form action={actions.signOut}>
                <button type="submit">SignOut</button>
            </form>
            {session?.user ? <div>{JSON.stringify(session?.user)}</div> : <div>Signed Out</div>}

            <Profile/> 
        </div>
    )
}