import "./globals.css";

export const metadata = {
  title: "Golo",
  description: "Best Deals & Offers Near You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
