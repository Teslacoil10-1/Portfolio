// // app/layout.tsx
// import type { Metadata } from "next";
// import "./globals.css";
// import NavBar from "@/components/NavBar";
// import SmoothScroll from "@/components/SmoothScrollClient"; // Import client wrapper

// export const metadata: Metadata = {
//   title: "Nathaniel Whittingham | full-stack developer",
//   description:
//     "Contact Nathaniel Whittingham, a full-stack developer specializing in modern web applications using Next.js, React, and Node.js.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white antialiased overflow-x-hidden">
//         <SmoothScroll>
//           <NavBar />
//           {children}
//         </SmoothScroll>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SmoothScroll from "@/components/SmoothScrollClient";

export const metadata: Metadata = {
  title: "Nathaniel Whittingham | full-stack developer",
  description:
    "Contact Nathaniel Whittingham, a full-stack developer specializing in modern web applications using Next.js, React, and Node.js.",
  robots: {
    index: false,   // tells search engines not to index
    follow: false,  // tells search engines not to follow links
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Extra backup meta in case some crawlers ignore the Next.js robots config */}
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <SmoothScroll>
          <NavBar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
