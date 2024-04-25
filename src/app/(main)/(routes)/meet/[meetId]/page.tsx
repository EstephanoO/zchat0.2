import React from 'react'
import { Header } from './components/header'
import { getMeet } from '@/services/meet-api'
import MeetDetails from './components/meet-details'

async function MeetId({params}: {params:{meetId:string}}) {

    const meet = await getMeet(params.meetId)
  return (
      <div className="h-full flex flex-col bg-neutral-200/50">
        <Header meet={meet}/>
        <div className="flex justify-center mt-4">
            <MeetDetails meet={meet} /> 
        </div>
      </div>
  )
}

export default MeetId