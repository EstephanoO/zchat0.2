import { Member } from "../member/member.type";
import { PocketApi } from "../types";
import { User } from "../users/auth/user.types";

export interface Organization extends PocketApi{
    users?: string[];
    name: string;
    description?: string;
    logo: string;
}
export interface OrganizationWithUsers extends Organization {
    expand: {
        user: User[]
        members: Member[]
    }
}