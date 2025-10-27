"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaApple, FaAndroid, FaWindows, FaQuestion } from "react-icons/fa";
import { SiLinux } from "react-icons/si";

type DeviceOS = {
  name: string;
  version?: string | null;
  icon: React.ReactNode;
};

/**
 * Best-effort OS detection using navigator.userAgent / platform / userAgentData
 */
function detectOS(): DeviceOS {
  if (typeof navigator === "undefined") {
    return { name: "Unknown", version: null, icon: <FaQuestion /> };
  }

  const ua = navigator.userAgent || "";
  const platform = (navigator as any).platform || (navigator.userAgentData && navigator.userAgentData.platform) || "";

  // helper for version extraction
  const getMatch = (regex: RegExp) => {
    const m = ua.match(regex);
    return m ? m[1].replace(/_/g, ".") : null;
  };

  // iOS (iPhone/iPad)
  if (/iPhone|iPad|iPod/i.test(ua) || /iOS/i.test(platform)) {
    const version = getMatch(/OS\s?([0-9_]+)/i) || getMatch(/iPhone OS\s?([0-9_]+)/i);
    return { name: "iOS", version, icon: <FaApple /> };
  }

  // macOS
  if (/Macintosh|Mac OS X|Mac_PowerPC/i.test(ua) || /Mac/i.test(platform)) {
    const version = getMatch(/Mac OS X\s?([0-9_\.]+)/i);
    return { name: "macOS", version, icon: <FaApple /> };
  }

  // Android
  if (/Android/i.test(ua)) {
    const version = getMatch(/Android\s+([0-9\.]+)/i);
    return { name: "Android", version, icon: <FaAndroid /> };
  }

  // Windows
  if (/Windows NT|Win32|Win64|WOW64/i.test(ua) || /Win/i.test(platform)) {
    const version = getMatch(/Windows NT\s?([0-9\.]+)/i);
    // map common NT versions to friendly names optionally
    const friendly =
      version === "10.0" ? "Windows 10/11" : version === "6.3" ? "Windows 8.1" : version ? `Windows NT ${version}` : "Windows";
    return { name: friendly, version, icon: <FaWindows /> };
  }

  // Linux
  if (/Linux/i.test(ua) || /X11/i.test(ua)) {
    return { name: "Linux", version: null, icon: <SiLinux /> };
  }

  return { name: "Unknown", version: null, icon: <FaQuestion /> };
}

export default function DeviceOS() {
  const [os, setOs] = useState<DeviceOS | null>(null);

  useEffect(() => {
    // small delay so it doesn't flash during hydration
    const detected = detectOS();
    setOs(detected);
  }, []);

  if (!os) {
    return null; // or a tiny placeholder skeleton
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute top-3 inline-flex items-center gap-3 px-3 py-2 rounded-lg"
      role="status"
      aria-label={`Visitor operating system: ${os.name}${os.version ? ` ${os.version}` : ""}`}
      title="You are visiting from this OS"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-md bg-zinc-800/50 border border-zinc-700 text-zinc-200">
        {os.icon}
      </span>

      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-zinc-200 truncate">
          {os.name}
        </span>
      
      </div>
    </motion.div>
  );
}
