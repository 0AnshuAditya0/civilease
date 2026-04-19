"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { ChatAssistant } from "@/components/shared/ChatAssistant";
import AuthModal from "@/components/shared/AuthModal";

export default function AuthWrapper({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("civileaseUser");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  return (
    <>
      <Navbar 
        onSignInClick={() => setIsAuthOpen(true)} 
        user={user} 
        onSignOut={() => {
          localStorage.removeItem("civileaseUser");
          setUser(null);
        }}
      />
      <main className="flex-1 pt-20">{children}</main>
      <ChatAssistant />
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={(u) => setUser(u)}
      />
    </>
  );
}
