import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { PERSONAL } from "@/data/resume";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Machine Learning Systems Engineer`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Machine Learning Systems Engineer`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Machine Learning Systems Engineer`,
    description: SITE_DESCRIPTION,
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL.name,
  jobTitle: PERSONAL.title,
  url: SITE_URL,
  email: PERSONAL.email,
  sameAs: [PERSONAL.github, PERSONAL.linkedin],
  worksFor: { "@type": "Organization", name: "Eight Sleep" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <JsonLd data={PERSON_JSON_LD} />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
