import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
// import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Loading from "./loading";

import "./globals.scss";
import { Suspense } from "react";

export const metadata = {
  title: "Kelju 革路聚聚",
  description: "地方創生工作站",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <head />
      <body className="body">
        {/* <body className={inter.className}> */}
        {/* <ThemeProvider> */}
        <AuthProvider>
          <Suspense fallback={<Loading />}>
            <div className="theContainer">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Suspense>
        </AuthProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
