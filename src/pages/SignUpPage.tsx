import { SignUp } from "@clerk/clerk-react";
import React from "react";

export default function SignUpPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignUp
        routing="path"
        path="/sign-up"
        forceRedirectUrl={import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL}
        fallbackRedirectUrl={import.meta.env.VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL}
        signInForceRedirectUrl={import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL}
        signInFallbackRedirectUrl={import.meta.env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}
      />
    </div>
  );
}
