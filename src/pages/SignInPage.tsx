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
        path="/sign-in"
        forceRedirectUrl={popupUrl}
      />
    </div>
  );
}
