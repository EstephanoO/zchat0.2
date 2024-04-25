import { Organization } from "../org/org.type";
import { User } from "../users/auth/user.types";

export interface Channel {
    id: string;
    name: string;
    ChannelType: 'text' | 'chat'
    users: string[]
    organizationId: string;
    createdAt: string;
    updatedAt: string;
    expand?: {
        user?: User
        organizationId?: Organization
    } 
}