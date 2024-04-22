import { Organization } from "../org/org.type"
import { PocketApi } from "../types"
import { User } from "../users/auth/user.types"

export interface Member extends PocketApi {
    user:string[]
    role: 'admin' | 'moderator' | 'guest'
    org: string
}

export interface MemberWithUsersWithOrg extends Member {
    expand: {
        user: User[]
        org: Organization
    }
}