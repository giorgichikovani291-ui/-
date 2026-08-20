export const metadata = {
  title: "Our Store",
  description: "Simple Next.js store example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
