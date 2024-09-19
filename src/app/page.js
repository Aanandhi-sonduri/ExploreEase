'use client';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';
import { SignIn, useUser } from '@clerk/nextjs';
import Spinner from 'react-bootstrap/Spinner'; // Bootstrap spinner

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);
  const { isSignedIn, isLoaded } = useUser(); // Clerk hook to get user and loading state

  // If Clerk is still loading the user data, show a loading message or spinner
  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  // Once user data is loaded, decide whether to show the chat, sign-in, or landing page
  return isSignedIn ? (
    <ChatPage />
  ) : showSignIn ? (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <SignIn afterSignInUrl="/" routing="hash" /> {/* Centered Clerk SignIn */}
    </div>
  ) : (
    <LandingPage onStartChat={() => setShowSignIn(true)} />
  );
}
