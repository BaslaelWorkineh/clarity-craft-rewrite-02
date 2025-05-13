import { SignIn } from "@clerk/clerk-react";

// Utility to get the extension ID (replace with your actual extension ID if needed)
const EXTENSION_ID = "okobokhjockmiiekeinlejheooclopbp";

export function ExtensionSignIn() {
  // This component should be rendered on your sign-in page
  // It will redirect to the extension popup with the session token after sign-in
  return (
    <SignIn
      afterSignInUrl={async ({ session }) => {
        const token = await session.getToken();
        // Redirect to the extension popup with the session token in the URL
        window.location.href = `chrome-extension://${EXTENSION_ID}/popup.html?session=${token}`;
      }}
    />
  );
}