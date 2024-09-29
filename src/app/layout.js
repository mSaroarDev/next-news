import Toploader from "@/components/Toploader";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "@/providers/storeProvider";

const MontserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--Montserrat-Regular",
  weight: "100 900",
});

export const metadata = {
  title: "NextNews",
  description: "Powered By Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${MontserratRegular.variable} antialiased`}>
        <Toaster />
        <Toploader />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
