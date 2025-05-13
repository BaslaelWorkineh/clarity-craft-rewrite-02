import { SignIn } from "@clerk/clerk-react";
import React from "react";

// Derive EXTENSION_ID from VITE_EXTENSION_POPUP_URL in your .env file
// VITE_EXTENSION_POPUP_URL should be like: chrome-extension://YOUR_EXTENSION_ID/popup.html
const popupUrl = import.meta.env.VITE_EXTENSION_POPUP_URL;
let EXTENSION_ID = "";

if (popupUrl && popupUrl.startsWith("chrome-extension://")) {
  try {
    const urlObject = new URL(popupUrl);
    EXTENSION_ID = urlObject.hostname;
  } catch (e) {
    console.error("Error parsing VITE_EXTENSION_POPUP_URL:", e, "Ensure it is a valid URL.");
  }
}

if (!EXTENSION_ID && popupUrl) { // Only log error if popupUrl was defined but EXTENSION_ID couldn't be derived
  console.error(
    "ClarityBubble: EXTENSION_ID could not be determined from VITE_EXTENSION_POPUP_URL.",
    `Current value: ${popupUrl}`,
    "Please ensure VITE_EXTENSION_POPUP_URL is set correctly in your .env file.",
    "Example: VITE_EXTENSION_POPUP_URL=chrome-extension://abcdefghijklmnopqrstuvwxyzabcdef/popup.html"
  );
} else if (!popupUrl) {
  console.error(
    "ClarityBubble: VITE_EXTENSION_POPUP_URL is not set in your .env file.",
    "This is required for the extension sign-in redirect."
  );
}

export default function SignInPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <SignIn
        routing="path"
        path="/sign-in" // This component will handle the /sign-in route
        signUpUrl="/sign-up" // Link to your sign-up page
        afterSignInUrl={async ({ session }) => {
          if (session) {
            const token = await session.getToken();
            if (token && EXTENSION_ID) {
              window.location.href = `chrome-extension://${EXTENSION_ID}/popup.html?session=${token}`;
            } else if (!EXTENSION_ID) {
              console.error("ClarityBubble: EXTENSION_ID is not available. Cannot redirect to extension. Falling back to home.");
              window.location.href = '/'; // Fallback redirect
            } else {
              console.warn("ClarityBubble: Session token not available after sign-in. Falling back to home.");
              window.location.href = '/'; // Fallback redirect
            }
          } else {
            console.warn("ClarityBubble: Session object not available after sign-in. Falling back to home.");
            window.location.href = '/'; // Fallback redirect
          }
        }}
      />
    </div>
  );
}
