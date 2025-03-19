'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Profile = () => {

    const {data: session} = useSession()
  return (
    <div className='min-h-screen flex justify-center items-center'>
      {session?.user?.email}
      <button onClick={() => signOut()}>Logout</button>
      
    </div>
  )
}

export default Profile
