import "./globals.css";

export const metadata = {
  title: "180 Degrees Academy",
  description:
    "موقع تعليمي خدمي بأيادي مختصة موجه لكل من يدرس او يريد الدراسة في تركيا ، غني بالمعلومات المتجددة والمفيدة عن كل ما يخص الجامعات التركية والتخصصات التعليمية",
  icons: {
    icon: ["/icons/favicon.ico?v=4"],
    apple: ["/icons/apple-touch-icon.png?v=4"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex items-center justify-center h-screen">
        {children}
      </body>
    </html>
  );
}
