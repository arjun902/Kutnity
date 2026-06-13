import "./globals.css";

export const metadata = {
  title: "KUTNITI - Strategic Intelligence",
  description:
    "Strategic media platform covering policy, economy, technology governance and geopolitics for Nepal, South Asia and the world.",
  icons: {
    icon: "/assets/img/favicon.svg"
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
