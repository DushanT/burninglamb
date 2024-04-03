import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Burning lamb",
  description: "Burning lamb studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="text-body mx-auto max-w-[var(--max-width)] px-4 md:px-[30px]">
          <a
            className="sr-only font-heading lowercase focus:not-sr-only"
            href="#main"
          >
            Skip to main content
          </a>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
