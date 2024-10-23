import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "McQuiz",
  description: "Generate Quiz",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider appearance={{}}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
