import { SignUp } from "@clerk/clerk-react";
import React from "react";

const popupUrl = import.meta.env.VITE_EXTENSION_POPUP_URL;

export default function SignUpPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignUp
        routing="path"
        path="/sign-up"
        forceRedirectUrl={popupUrl}
      />
    </div>
  );
}
