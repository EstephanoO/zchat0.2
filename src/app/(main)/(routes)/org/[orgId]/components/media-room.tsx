'use client'

import { User } from "@/modules/users/auth/user.types"
import { Loader2 } from "lucide-react"
import '@livekit/components-styles';
import { useEffect, useState } from "react"
import {
    LiveKitRoom,
    VideoConference,
  } from '@livekit/components-react';

interface MediaRoomProps {
    chatId:string
    video: boolean
    audio:boolean
    user: string
}

export const MediaRoom = ({chatId, video, audio, user}:MediaRoomProps) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (!user) return;

        (async () => {
            try {
               const resp = await fetch(`/api/livekit?room=${chatId}&username=${user}`) 
               const data = await resp.json()
               setToken(data.token)
            } catch (e) {
               console.log(e) 
            }
        })()
    }, [user, chatId])

    if (token === '') {

        return (
            <div className="flex flex-col flex-1 justify-center items-center">
                <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4"/>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Loading...</p>
            </div>
        )
    }
    return (
        <LiveKitRoom
        data-lk-theme='default'
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        token={token}
        video={video}
        audio={audio}
        connect={true}
        style={{ height: '100dvh' }}
        >
            <VideoConference />
        </LiveKitRoom>
    )
    }