'use server'

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Organization } from "./org.type";

export const getOrgs =  async(userId: string): Promise<Organization[]> => {
    try {
        
        const data = await db.client.collection('Organization').getList(1, 50,{
        })
        return data.items as Organization[]
        } catch (error) {
            console.error(error)
            throw new Error('Failed to get organizations')
        }
    }
    export const getOrg = async (serverId:string):Promise<Organization> => {
        try {
            const data = await db.client.collection('Organization').getOne(serverId)
            return data as Organization
            
        } catch (error) {
            console.log(error)
            throw error
            
        }
    }
export const updateOrg = async (org: Organization) => {
    try {
        const res = await db.client.collection('Organization').update(org.id as string, org)
        revalidatePath('/')
        return res
    } catch (error) {
        console.error(error)
        throw error
    }
}
export const createOrg = async (formData:FormData, userId:string) => {
    const name = formData.get('name') as string
    const logo = formData.get('logo') as File
    const org = {
        name,
        logo 
    }
    const newOrg = {
        ...org,
        user: [userId],
    }
    try {
        const res = await db.client.collection('Organization').create(newOrg)
        await db.client.collection('Channel').create({
            name: 'general',
            user: [userId],
            organizationId: res.id,
        })
        await db.client.collection('member').create({
            user: [userId],
            role: 'admin',
            org: [res.id]
        })
        revalidatePath('/')
        return res
    } catch (error) {
        console.error(error)
        throw error
    }
}