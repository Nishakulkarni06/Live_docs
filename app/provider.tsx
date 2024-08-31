'use client';
import React from 'react'
import {ClientSideSuspense , LiveblocksProvider} from '@liveblocks/react/suspense';
import {ReactNode} from 'react'
import Loader from '@/components/Loader';

const provider = ({children}:{children:ReactNode}) => {
  return (
 
          <LiveblocksProvider publicApiKey={"pk_prod_UVWS…T9iCs9"}>
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
 
  )
}

export default provider
