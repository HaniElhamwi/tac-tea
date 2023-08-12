import { Nav } from "@/components";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Nav />
        {children}
      </body>
    </html>
  );
}
