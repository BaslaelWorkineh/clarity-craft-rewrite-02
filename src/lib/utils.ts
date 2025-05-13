import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to check authentication status with backend
export async function checkAuthStatus(sessionToken: string): Promise<boolean> {
  try {
    const res = await fetch("https://claritybubble-backend.onrender.com/api/auth-status", {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    const data = await res.json();
    return !!data.authenticated;
  } catch (e) {
    return false;
  }
}
