"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import SignWithGoogle from './SignWithGoogle'
import Logout from './Logout'
// if seesion in client we need to make a provider to wrap it which its name provider in component 
const ClientComponent = () => {
  const session= useSession()
  console.log(session)
  return (
    <div className='mt-8'>
      {session.status==="loading" && (<p>Loading................</p>)}
      {session.status==="authenticated" && (
      <div>
        <p>Client side data</p>
      <p>      {session?.data?.user?.name}      </p>
      <p>      {session?.data?.user?.email}      </p>
      <Image src={session?.data?.user?.image as string}
      alt='userimg'
      width={100}
      height={100}
      />
      <Logout/>

      </div>
      )
        

      }
      {session.status==="unauthenticated" && <SignWithGoogle/>}

    </div>
  )
}

export default ClientComponent