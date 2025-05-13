
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="#features" className="text-foreground/70 hover:text-foreground text-sm">Features</Link></li>
              <li><Link to="#pricing" className="text-foreground/70 hover:text-foreground text-sm">Pricing</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Browser Extension</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Documentation</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">API</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Guides</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">About</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Blog</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Careers</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Terms of Service</Link></li>
              <li><Link to="#" className="text-foreground/70 hover:text-foreground text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-clarity-purple to-clarity-deep-purple flex items-center justify-center">
              <span className="text-white font-bold text-xs">CB</span>
            </div>
            <span className="font-bold">Clarity<span className="text-clarity-purple">Bubble</span></span>
          </div>
          
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Clarity Bubble. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
