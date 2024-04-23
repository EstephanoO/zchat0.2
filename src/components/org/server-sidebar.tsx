import { PlusIcon, UserPlus } from "lucide-react";
import { ServerItem } from "./server-item";
import { OrgHeader } from "./org-header";

export const ServerSidebar = () => {
  const organizations = [
    {
      id: '1',
      name: 'Organization 1',
      iconUrl: 'https://via.placeholder.com/150',
      notificationCount: 2,
    },
    {
      id: '2',
      name: 'Organization 2',
      iconUrl: 'https://via.placeholder.com/150',
      notificationCount: 0,
    },
  ];

  return (
    <div className='flex flex-col h-full text-primary w-full dark:bg-[#2B2D31]'>
      <div className='flex justify-between items-center p-4'>
        <OrgHeader />
      </div>
      {organizations.map((org) => (
       <ServerItem key={org.id} {...org} />
      ))}
    </div>
  );
};