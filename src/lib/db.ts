import PocketBase, { RecordService } from "pocketbase";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { UserWithPocketApi } from "@/modules/users/auth/user.types";
import { Meet, Organization } from "@/modules/org/org.type";
import { Member } from "@/modules/member/member.type";


interface TypedPocketBase extends PocketBase {
    collection(idOrName: string): RecordService
    collection(idOrName: 'users'): RecordService<UserWithPocketApi>
    collection(idOrName: 'meet'): RecordService<Meet>
    collection(idOrName: 'member'): RecordService<Member>
    collection(idOrName: 'Organization'): RecordService<Organization>
}

export class DatabaseClient {
  client: TypedPocketBase;

  constructor() {
    this.client = new PocketBase('https://maps-org.pockethost.io') as TypedPocketBase;
  }

  async authenticate() {
    try {
      const result = await this.client.collection("users").authWithOAuth2({ provider: 'google'})
      await db.client.collection("users").update(result?.record.id, { avatarUrl: result.meta?.avatarUrl})
      if (!result?.token) {
        throw new Error("Invalid email or password");
      }
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Invalid email or password");
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.client.collection("users").create({
        email,
        password,
        passwordConfirm: password,
      });

      return result;
    } catch (err) {

    }
  }

  async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get('pb_auth');
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || '');
    return this.client.authStore.isValid || false
  }

  async getUser(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get('pb_auth');
    if (!cookie) {
      return null;
    }

    this.client.authStore.loadFromCookie(cookie?.value || '');
    return this.client.authStore.model;
  }
}


export const db = new DatabaseClient();

export default db;