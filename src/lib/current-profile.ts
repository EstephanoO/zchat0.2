import { UserWithPocketApi } from "@/modules/users/auth/user.types"
import { cookies } from "next/headers"


export const currentProfile =async ():Promise<UserWithPocketApi> => {
    const cookieStore = cookies()
    const user = cookieStore.get('pb_auth') 
    const jsonUser = JSON.parse(user?.value || '{}')
    return jsonUser as UserWithPocketApi
}