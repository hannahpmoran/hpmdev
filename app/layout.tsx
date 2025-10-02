// app/layout.tsx
'use client'
import "./globals.css";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   // Register the ScrollSmoother plugin
  //   gsap.registerPlugin(ScrollSmoother);

  //   // Create the smooth scroller
  //   let smoother = ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 0.5, // How long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // Looks for data-speed and data-lag attributes on elements
  //     smoothTouch: 0.1, // Much less smooth on touch devices (default is false)
  //     normalizeScroll: true, // Prevents address bar from showing/hiding on mobile
  //   });

  //   // Cleanup function to destroy the smoother when component unmounts
  //   return () => {
  //     smoother?.kill();
  //   };
  // }, []);

  return (
    <html lang="en">
      <body>
        {/* <div id="smooth-wrapper">
          <div id="smooth-content"> */}
            {children}
            {/* </div>
        </div> */}
      </body>
    </html>
  );
}
