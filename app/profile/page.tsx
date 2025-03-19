'use client'

import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile = () => {
    const router = useRouter()

    const {data: session} = useSession()
    const handleSignOut = () => {
        signOut()
        router.replace('/')
    }
  return (
    <div className='min-h-screen flex justify-center items-center'>
      {session?.user?.email}
      <button onClick={handleSignOut}>Logout</button>
      
    </div>
  )
}

export default Profile
