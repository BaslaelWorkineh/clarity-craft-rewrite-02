import { SignIn } from "@clerk/clerk-react";
import React from "react";

export default function SignInPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignIn
        routing="path"
        path="/sign-in"
        forceRedirectUrl={import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL}
        fallbackRedirectUrl={import.meta.env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}
        signUpForceRedirectUrl={import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL}
        signUpFallbackRedirectUrl={import.meta.env.VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL}
      />
    </div>
  );
}
