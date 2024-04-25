import { ServerItem } from "./server-item";
import { OrgHeader } from "./org-header";
import { ScrollArea } from "../ui/scroll-area";
import { getOrg, getOrgs } from "@/services/org-api";
import { currentProfile } from "@/lib/current-profile";
import { Separator } from "../ui/separator";

export const ServerSidebar =async ({orgId}:{orgId:string}) => {

  const userId = (await currentProfile()).id
  const organizations = await getOrgs(userId)
  const org = await getOrg(orgId)

  return (
    <div className='flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] border-r-2'>
      <div className='flex justify-between items-center p-4 '>
        <OrgHeader org={organizations} />
      </div>
      <Separator/>
      <ScrollArea>
      {organizations.map((org) => (
        <div key={org.id}>
       <ServerItem logo={org.logo} notificationCount={2} id={org.id}  name={org.name} channels={org.expand.channels}  />
      </div>
      ))}
</ScrollArea>
    </div>
  );
};