"use client";

import { signIn } from "next-auth/react";
import Button from './Button'; // Adjust the import path based on your folder structure

const SignWithGoogle = () => {
  return (
    <div>
      <Button 
        onClick={() => signIn("google",{redirect:true,callbackUrl:"/profile"})} 
        name="Sign in with Google" 
        style={{ padding: '10px 20px', backgroundColor: '#4285F4', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      />
    </div>
  );
};

export default SignWithGoogle;
