import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "후니코딩",
  description: "모든 프로젝트를 모으는 나의 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
            <ThemeProvider attribute="class">
              {children}
            </ThemeProvider>
        </body>
      </html>
  );
}