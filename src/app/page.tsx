"use client";

import { useState } from "react";
import Features from "./components/landing/Features";
import Footer from "./components/landing/Footer";
import Landing from "./components/landing/Landing";
import Navbar from "./components/landing/Navbar";
import Numbers from "./components/landing/Numbers";
import Reviews from "./components/landing/Reviews";
import LoginModal from "./components/landing/LoginModal";
import SignUpModal from "./components/landing/SignUpModal";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <Landing onLoginClick={() => setShowLogin(true)} />
      <Features />
      <Reviews onLoginClick={() => setShowLogin(true)} />
      <Numbers />
      <Footer />

      {showLogin && (
        <LoginModal
        onGuestClick={() => {
          router.push("/for-you");
        }}
          onSignUpClick={() => {
            setShowSignUp(true);
            setShowLogin(false);
          }}
          onClose={() => {
            setShowLogin(false);
          }}
        />
      )}
      {showSignUp && (
        <SignUpModal
        onLoginClick={() => {
          setShowLogin(true);
          setShowSignUp(false);
        }}
          onClose={() => {
            setShowSignUp(false);
          }}
        />
      )}
    </>
  );
}
