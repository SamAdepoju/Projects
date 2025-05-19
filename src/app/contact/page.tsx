"use client";
import { useState, useEffect } from "react";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Contact() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <Navbar />

      <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl backdrop-blur-sm bg-neutral-900/20 rounded-xl p-6 sm:p-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">
            Get in Touch
          </h1>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors">
                <MdEmail className="w-5 h-5" />
                <span>samueladekunle75@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors">
                <MdLocationOn className="w-5 h-5" />
                <span>Glasgow, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors">
                <MdAccessTime className="w-5 h-5" />
                <span>Local time: {currentTime}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
