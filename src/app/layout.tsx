import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider";
import Navbar from "@/components/layouts/Navbar";
import "../style/base.css";

const poppins = Poppins({
  variable: "--font-popping",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  icons: { icon: "/logo.svg" },
  title: "Rubaied Ahammed Rahi",
  description: "This is personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
