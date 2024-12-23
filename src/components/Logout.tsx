"use client";

import React from 'react';
import Button from './Button'; // Ensure the import path is correct
import { signOut } from 'next-auth/react';

const Logout = () => {
  return (
    <div>
      <Button 
        name="Logout"
        style={{
          padding: '10px',
          backgroundColor: '#FF0000',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => signOut()} 
      />
    </div>
  );
};

export default Logout;
