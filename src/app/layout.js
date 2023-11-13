import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
// import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kelju 革路聚聚",
  description: "地方創生工作站",
  name: "viewport",
  content: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <AuthProvider>
          <div className="theContainer ">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
