import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      LandingPage(Unprotected)
      {/* every user login or not are able to see this page anyway */}
      <div>
        <Link href='/sign-in'>
         <Button>
            Login
         </Button>
        </Link>
        <Link href='/sign-up'>
         <Button>
            Register
         </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;
