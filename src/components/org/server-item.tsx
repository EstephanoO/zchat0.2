import Box from "../Box"

interface ServerItemProps {
        id: string
        iconUrl: string
        name: string
        notificationCount: number
    }

export const ServerItem = ({
    id,
    iconUrl,
    name,
    notificationCount
}: ServerItemProps) => {
  return (
 <Box key={id} className='flex items-center p-4'>
          <img src={iconUrl} alt={name} className='h-10 w-10 mr-4' />
          <div className='flex justify-between w-full'>
            <h2 className='text-xl'>{name}</h2>
            <span className='bg-red-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
              {notificationCount}
            </span>
          </div>
        </Box>
  )
}
