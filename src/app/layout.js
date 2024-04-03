import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Burning lamb",
  description: "Burning lamb studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="text-body mx-auto max-w-[var(--max-width)] px-4 md:px-[30px]">
          <a
            className="sr-only font-heading lowercase focus:not-sr-only"
            href="#main"
          >
            Skip to main content
          </a>
          <Header data-aos="zoom-out" />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
