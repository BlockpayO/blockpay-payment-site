import "./globals.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThirdwebProvider } from "./ThirdwebProvider";
const aeonik = localFont({
  src: [
    {
      path: "/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "/fonts/Aeonik-Regular.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "/fonts/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Aeonik-RegularItalic.otf",
      weight: "normal",
      style: "italic",
    },
  ],
});

export const metadata = {
  description: "Blockpay - Your personal subscription manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${aeonik.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blockpay payment site</title>
      </head>
      <body className={`${aeonik.className}`}>
        <ThirdwebProvider
          activeChain="mumbai"
          clientId="13f67df54a3a7c396e1167c2d49cd99f"
        >
          <main>{children}</main>
          <ToastContainer />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
