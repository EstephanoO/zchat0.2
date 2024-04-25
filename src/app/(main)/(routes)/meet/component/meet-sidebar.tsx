import { getOrgs } from "@/services/org-api";
import { currentProfile } from "@/lib/current-profile";
import { MeetHeader } from "./meet-header";
import { MeetItem } from "./meet-item";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { channel } from "diagnostics_channel";

export const MeetSidebar =async () => {

  const userId = (await currentProfile()).id
  const organizations = await getOrgs(userId)
  const channels = organizations.map(org => org.expand.meet).filter((channel) => channel !== undefined).flat(1)

  return (
    <div className='flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] border-r-2'>
      <div className='flex justify-between items-center p-4 '>
        <MeetHeader org={organizations} />
      </div>
      <Separator/>
      <ScrollArea>
        {channels.map((channel) => (
            <div key={channel.id}>
                <MeetItem id={channel.id} name={channel.name} status={channel.status} />
            </div>
        ))}
</ScrollArea>
    </div>
  );
};