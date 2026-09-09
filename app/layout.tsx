import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AAPL Onchain vs. Nasdaq",
  description:
    "Apple's stock price trading 24/7 onchain on Base, compared live to the 15-minute-delayed Nasdaq price.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
