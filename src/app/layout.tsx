import React from "react";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import cn from "@/lib/cn";

const dmSans = DM_Sans({ subsets: ["latin"] });

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", dmSans.className)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
