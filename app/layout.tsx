import { Nav } from "@/components";
import Footer from "@/components/shared/footer";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
