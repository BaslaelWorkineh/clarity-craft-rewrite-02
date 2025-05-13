
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow relative z-10">
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
