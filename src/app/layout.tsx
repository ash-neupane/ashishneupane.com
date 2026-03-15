import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashish Neupane — ML Systems Engineer",
  description:
    "Machine Learning Systems Engineer building production ML pipelines at scale. Previously at Microsoft and Eight Sleep.",
  openGraph: {
    title: "Ashish Neupane — ML Systems Engineer",
    description:
      "Machine Learning Systems Engineer building production ML pipelines at scale.",
    type: "website",
    url: "https://ashishneupane.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
