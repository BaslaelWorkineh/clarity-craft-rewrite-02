import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/logo.svg" alt="Clarity Bubble Logo" className="h-8 w-8" />
          </div>
          
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Clarity Bubble. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
